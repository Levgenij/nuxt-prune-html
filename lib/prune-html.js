import { load } from 'cheerio'
import MobileDetect from 'mobile-detect'
import { useRuntimeConfig } from '#imports'
import consola from 'consola'
import { stringToArray, scriptOrLinkToHtml } from '../utils'
import { queryParametersChecker, acceptQueryParameters } from '../query-parameters'

const moduleName = 'prune-html'
const logger = consola.withScope(`nuxt:${moduleName}`)

export default (nitro) => {
  // Get options from nitro runtime config (set in module.js)
  const getOptions = () => {
    try {
      const config = useRuntimeConfig()
      return config.pruneHtml
    } catch (e) {
      return nitro.options.runtimeConfig?.pruneHtml
    }
  }

  nitro.hooks.hook('render:response', async (response, ctx) => {
    const options = getOptions()

    if (!options || !options.enabled) return

    const req = ctx.event.node.req
    const type = response.headers?.['content-type'] || ''
    if (!type.includes('text/html')) return

    let html = response.body
    if (!html || typeof html !== 'string') return

    const shouldPruneResult = shouldPrune(req, options)
    if (!shouldPruneResult || !shouldPruneResult.shouldPrune) return

    const activeTypes = shouldPruneResult.activeTypes || []
    logAMessage('hook::render:response', '', options)

    // Events
    if (options.onBeforePrune && typeof options.onBeforePrune === 'function') {
      await options.onBeforePrune({
        result: { html },
        req,
        res: ctx.event.node.res,
      })
    }

    // New HTML
    html = pruneHtml(html, options, activeTypes)
    response.body = html

    // Events
    if (options.onAfterPrune && typeof options.onAfterPrune === 'function') {
      await options.onAfterPrune({
        result: { html },
        req,
        res: ctx.event.node.res,
      })
    }
  })
}

function shouldPrune(req, options) {
  const types = options.types || []
  const activeTypes = []
  let shouldPruneFromBotAuditOrMobileDetection = false
  let shouldPruneFromQueryParameter = false
  let shouldPruneFromHeaderExist = false

  const isTypeDefaultDetect = types.includes('default-detect') && !!options.headerNameForDefaultDetection
  const isTypeQueryParameters = types.includes('query-parameters')
  const isTypeHeaders = types.includes('headers-exist')

  // default-detect, check `req.headers` with `MobileDetect` (User Agent / Audit)
  if (isTypeDefaultDetect && req.headers && req.headers[options.headerNameForDefaultDetection]) {
    const mobileDetect = new MobileDetect(req.headers[options.headerNameForDefaultDetection])
    const ignoreBotOrAudit = options.ignoreBotOrAudit
    const isBot = options.isBot && mobileDetect.is('bot')
    const isAudit = options.isAudit &&
      options.auditUserAgent &&
      options.auditUserAgent.length &&
      stringToArray(options.auditUserAgent).some(v => mobileDetect.match(v))
    const isAuditExtra = options.isAuditExtra &&
      options.auditUserAgentExtra &&
      options.auditUserAgentExtra.length &&
      stringToArray(options.auditUserAgentExtra).some(v => {
        const headerNameForDetection = options.headerNameForDetection || options.headerNameForDefaultDetection
        return new MobileDetect(req.headers[headerNameForDetection]).match(v)
      })
    const isUserAgentMatched = options.matchUserAgent &&
      options.matchUserAgent.length &&
      stringToArray(options.matchUserAgent).some(v => mobileDetect.match(v))

    shouldPruneFromBotAuditOrMobileDetection = !!(ignoreBotOrAudit || isBot || isAudit || isAuditExtra || isUserAgentMatched)
    if (shouldPruneFromBotAuditOrMobileDetection) {
      activeTypes.push('default-detect')
    }
  }

  // query-parameters, can include or exclude urls
  if (isTypeQueryParameters && req.url) {
    const url = new URL(req.url, 'http://localhost')
    const query = url.search.substring(1) // Remove leading '?'
    const hasValidQueryParameters = acceptQueryParameters(
      query,
      options.queryParametersToPrune,
      options.queryParametersToExcludePrune
    )
    
    if (hasValidQueryParameters) {
      const shouldExcludePrune = queryParametersChecker(query, options.queryParametersToExcludePrune)
      if (shouldExcludePrune) {
        return { shouldPrune: false, activeTypes: [] }
      }

      shouldPruneFromQueryParameter = queryParametersChecker(query, options.queryParametersToPrune)
      if (shouldPruneFromQueryParameter) {
        activeTypes.push('query-parameters')
      }
    }
  }

  // header-exists, check `req.headers`, can include or exclude pages
  if (isTypeHeaders && req.headers) {
    const headersExists = !!(
      (options.headersToPrune && options.headersToPrune.length) ||
      (options.headersToExcludePrune && options.headersToExcludePrune.length)
    )
    const shouldExcludePrune = headersExists &&
      options.headersToExcludePrune.some(
        ({ key, value }) => typeof req.headers[key] !== 'undefined' && req.headers[key] === value
      )

    if (shouldExcludePrune) {
      return { shouldPrune: false, activeTypes: [] }
    }

    shouldPruneFromHeaderExist = headersExists &&
      options.headersToPrune.some(
        ({ key, value }) => typeof req.headers[key] !== 'undefined' && req.headers[key] === value
      )
    if (shouldPruneFromHeaderExist) {
      activeTypes.push('headers-exist')
    }
  }

  const shouldPrune = shouldPruneFromBotAuditOrMobileDetection || shouldPruneFromQueryParameter || shouldPruneFromHeaderExist
  return { shouldPrune, activeTypes }
}

function pruneHtml(html = '', options, activeTypes = []) {
  if (!html) return ''

  const classesSelectorsToKeepToArray = stringToArray(options.classesSelectorsToKeep)
  const cheerioConfig = options.cheerio || {}

  try {
    const $ = load(html, cheerioConfig)

    // Selector to prune/keep
    for (const s of options.selectors) {
      if (classesSelectorsToKeepToArray.length) {
        classesSelectorsToKeepToArray.forEach(keepMe => $(`${s}:not(${keepMe})`).remove())
      } else {
        $(s).remove()
      }
    }

    logAMessage('html correctly pruned on type(s)', activeTypes.join(', '), options)

    // Inject script only when prune
    if (options.link?.length || options.script?.length) {
      if (options.link?.length) {
        options.link.forEach(item => scriptOrLinkToHtml($, item, false))
      }

      if (options.script?.length) {
        options.script.forEach(item => scriptOrLinkToHtml($, item))
      }

      logAMessage('scripts and/or links correctly injected', {
        scripts: options.script?.length || 0,
        links: options.link?.length || 0,
      }, options)
    }

    // Inject classes to the html tag
    if (options.htmlElementClass) {
      $('html').addClass(options.htmlElementClass)
    }

    return $.html()
  } catch (error) {
    logAnError('there was a problem pruning the HTML', error, options)
    return html
  }
}

function logAnError(message = '', extra = '', options = {}) {
  const show = !options.hideErrorsInConsole
  if (show) {
    logger.error('\x1B[31m%s\x1B[0m', moduleName, message, extra)
  }
}

function logAMessage(message = '', extra = '', options = {}) {
  const show = !options.hideGenericMessagesInConsole
  if (show) {
    logger.info('\x1B[32m%s\x1B[0m', moduleName, message, extra)
  }
}
