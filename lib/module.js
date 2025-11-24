import { defineNuxtModule, addServerPlugin, createResolver } from 'nuxt/kit'
import { defaultConfig, deprecatedConfig } from './config'
import log from './logger'

const moduleName = 'prune-html'
const { error } = log(`nuxt:${moduleName}`)

export default defineNuxtModule({
  meta: {
    name: 'nuxt-prune-html',
    configKey: 'pruneHtml'
  },

  defaults: defaultConfig,

  setup(moduleOptions, nuxt) {
    const resolver = createResolver(import.meta.url)

    const options = {
      ...defaultConfig,
      enabled: !nuxt.options.dev,
      hideGenericMessagesInConsole: !nuxt.options.dev,
      ...moduleOptions,
      ...(nuxt.options.runtimeConfig.pruneHtml || {}),
    }

    // Check for deprecated config values
    if (deprecatedConfig) {
      const configKeys = Object.keys(options)
      const deprecatedConfigKeys = Object.keys(deprecatedConfig)
      const isOldOrInvalidConfig = deprecatedConfigKeys.some(v => configKeys.includes(v))

      if (isOldOrInvalidConfig) {
        error(
          '\x1B[31m%s\x1B[0m',
          moduleName,
          'please, upgrade your configuration, there are some deprecation warnings, the plugin will stop its execution',
          deprecatedConfig,
        )
        return
      }
    }

    // Check for correct config
    if (!options.enabled || !options.selectors.length || !options.types.length) {
      return
    }

    nuxt.options.runtimeConfig.pruneHtml = options

    addServerPlugin(resolver.resolve('./prune-html.js'))
  }
})
