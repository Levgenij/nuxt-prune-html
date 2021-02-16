(window.webpackJsonp=window.webpackJsonp||[]).push([[2],{273:function(e,n,t){var content=t(281);"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,t(46).default)("219068df",content,!0,{sourceMap:!1})},280:function(e,n,t){"use strict";t(273)},281:function(e,n,t){var o=t(45)(!1);o.push([e.i,".readme[data-v-9407f738] >section>p:nth-child(2){display:flex;flex:1 1 100%;flex-direction:row;flex-wrap:nowrap;min-height:36px;padding:6px 12px;overflow-x:auto;font-size:0;background-color:rgba(220,230,240,.63);border-radius:5px}.readme[data-v-9407f738]  a{display:inline-block;margin:2px 1px}.readme[data-v-9407f738]  blockquote{margin:1rem auto;padding:4px 0 4px 1.5rem;color:#819198;border-left:.3rem solid #dce6f0}.readme[data-v-9407f738]  blockquote p{margin:0}.readme[data-v-9407f738]  code{display:inline-block;padding:0 3px;overflow-y:hidden;vertical-align:middle;background-color:#dce6f0;border-radius:6px}.readme[data-v-9407f738]  pre code{display:block;padding:.5em;overflow-x:auto;vertical-align:inherit;background-color:#f8f8f8}",""]),e.exports=o},282:function(e,n,t){"use strict";t.r(n);t(150),t(47),t(274),t(35);var o=t(7),r=t(275),l=t.n(r),c=t(276),h=t.n(c),d=t(277),m=t.n(d);function f(e,n){var t;if("undefined"==typeof Symbol||null==e[Symbol.iterator]){if(Array.isArray(e)||(t=function(e,n){if(!e)return;if("string"==typeof e)return y(e,n);var t=Object.prototype.toString.call(e).slice(8,-1);"Object"===t&&e.constructor&&(t=e.constructor.name);if("Map"===t||"Set"===t)return Array.from(e);if("Arguments"===t||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t))return y(e,n)}(e))||n&&e&&"number"==typeof e.length){t&&(e=t);var i=0,o=function(){};return{s:o,n:function(){return i>=e.length?{done:!0}:{done:!1,value:e[i++]}},e:function(e){throw e},f:o}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var r,l=!0,c=!1;return{s:function(){t=e[Symbol.iterator]()},n:function(){var e=t.next();return l=e.done,e},e:function(e){c=!0,r=e},f:function(){try{l||null==t.return||t.return()}finally{if(c)throw r}}}}function y(e,n){(null==n||n>e.length)&&(n=e.length);for(var i=0,t=new Array(n);i<n;i++)t[i]=e[i];return t}var x='<section><h1>🔌⚡ Nuxt Prune HTML</h1>\n<p><a href="https://luxdamore.github.io/nuxt-prune-html/"><img src="https://img.shields.io/badge/code%20quality-A-informational?style=flat" alt="Code Quality"></a><br>\n<a href="https://npmjs.com/package/@luxdamore/nuxt-prune-html"><img src="https://img.shields.io/npm/dt/@luxdamore/nuxt-prune-html.svg?style=flat&amp;color=darkgreen" alt="Downloads"></a><br>\n<a href="https://npmjs.com/package/@luxdamore/nuxt-prune-html"><img src="https://img.shields.io/badge/dependencies-up%20to%20date-darkgreen.svg?style=flat" alt="Dependencies"></a><br>\n<a href="https://circleci.com/gh/LuXDAmore/nuxt-prune-html"><img src="https://img.shields.io/circleci/project/github/LuXDAmore/nuxt-prune-html.svg?style=flat&amp;color=darkgreen" alt="Circle CI"></a><br>\n<a href="https://npmjs.com/package/@luxdamore/nuxt-prune-html"><img src="https://img.shields.io/npm/v/@luxdamore/nuxt-prune-html/latest.svg?style=flat&amp;color=darkorange&amp;label=version" alt="Version"></a><br>\n<a href="https://www.paypal.me/luxdamore"><img src="https://img.shields.io/badge/paypal-donate-black.svg?style=flat" alt="Donate"></a></p>\n<blockquote>\n<p>Nuxt module to prune html before sending it to the browser (it removes elements matching CSS selector(s)), useful for boosting performance showing a different HTML for bots/audits by removing all the scripts with dynamic rendering.</p>\n</blockquote>\n<h2>💘 Motivation</h2>\n<p>Due to the versatility of Nuxt (and of the SSR in general), a website generated (or served) via node server, has everything it needs already injected in the HTML (ex. <em>css styles</em>). So, usually, for a bot, a audit or for a human, the website its almost visually the same with or without Javascript.</p>\n<p>This library is born to remove all the scripts injected into the HTML <strong>only</strong> if a visitor is a <strong>Bot</strong> or a <strong>Performance Audit</strong> (ex. <em>a Lighthouse Audit</em>).<br>\nThis should <strong>speed up</strong> (<strong>blazing fast</strong>) your <em>nuxt-website</em> up to a value of <strong>~99</strong> in <strong>performance</strong> because it <a href="https://web.dev/lighthouse-performance/">cheats various scenarios</a>.</p>\n<p>Usually, with <strong>less assets, resources and html</strong> to download, the number of urls crawled by a bot are <strong>widely boosted</strong> 📈.</p>\n<blockquote>\n<p>Inspired by this <a href="https://github.com/nuxt/rfcs/issues/22">rcfs</a> and this <a href="https://github.com/nuxt/nuxt.js/issues/2822">issue</a>.</p>\n</blockquote>\n<h3>Features</h3>\n<ul>\n<li>Prune based on <strong>default detection</strong>;\n<ul>\n<li>match the <strong>user-agent</strong>;</li>\n<li>match a <strong>bot</strong>;</li>\n<li>match an <strong>audit</strong>;</li>\n<li>match a <strong>custom-header</strong>;</li>\n</ul>\n</li>\n<li>Prune based on <strong>headers values</strong> (<em>useful in/for Lambdas</em>);</li>\n<li>Prune based on <strong>query parameters</strong> (<em>useful during navigation, hybrid-experience</em>).</li>\n</ul>\n<h3>Pro et contra</h3>\n<blockquote>\n<p>This could cause some unexpected behaviors, but..</p>\n</blockquote>\n<p><strong>Cons.:</strong></p>\n<ul>\n<li>No <a href="https://nuxtjs.org/docs/2.x/concepts/server-side-rendering/#server-side-rendering-steps-with-nuxtjs"><code>SPA routing</code></a> on <code>client-side</code> for <strong>bots and audits</strong>;</li>\n<li>No <a href="https://ssr.vuejs.org/guide/hydration.html"><code>hydration</code></a> on <code>client-side</code> for <strong>bots and audits</strong>:\n<ul>\n<li>ex. <a href="https://github.com/maoberlehner/vue-lazy-hydration"><code>vue-lazy-hydration</code></a> need <strong>Javascript client-side code</strong> to trigger <em>hydrateOnInteraction</em>, <em>hydrateWhenIdle</em> or <em>hydrateWhenVisible</em>;</li>\n</ul>\n</li>\n<li>No <a href="https://nuxtjs.org/api/components-client-only/"><code>&lt;client-only&gt;</code> components</a>;</li>\n<li>Can break <code>lazy-load</code> for images.</li>\n</ul>\n<p><strong>Pros.:</strong></p>\n<ul>\n<li>Some of these features <strong>aren\'t &quot;used by&quot;</strong> a bot/audit, so you don\'t really need them:\n<ul>\n<li>bots doesn\'t handle <code>SPA routing</code>;</li>\n<li><a href="https://nuxtjs.org/api/components-client-only/"><code>&lt;client-only&gt;</code> components</a> could lead in a slower TTI;</li>\n<li><a href="https://nuxtjs.org/api/components-client-only/"><code>&lt;client-only&gt;</code> components</a> can contain a <a href="https://nuxtjs.org/api/components-client-only/">static placeholder</a>;</li>\n</ul>\n</li>\n<li>Images with <code>lazy-load</code> can be fixed with a <a href="https://web.dev/native-lazy-loading/">native attribute</a>, with a custom <code>script</code> or with <code>classesSelectorsToKeep</code> (<em>check the configuration</em>);</li>\n<li><code>Hydration</code> <strong>decrease</strong> performance, so it\'s ok to prune it for <code>bots or audits</code>;</li>\n<li><strong>Less HTML, assets and resources</strong> are served to browsers and clients;</li>\n<li>Bot/audit only have <em>the Javascript they need</em>;</li>\n<li>With <strong>less assets</strong> to download, the number of urls crawled are <strong>widely boosted</strong>;</li>\n<li>Bots, <a href="https://developers.google.com/speed/pagespeed/insights/">PageSpeed Insights</a>, <a href="https://web.dev/measure/">Google Measure</a> and <a href="https://developers.google.com/web/tools/lighthouse">Lighthouse Audit</a> are already pruned by the plugin with the default configuration;</li>\n<li>Faster <a href="https://web.dev/vitals/">web-vitals</a>, faster TTI, faster FCP, faster FMP, <strong>faster all</strong>.</li>\n</ul>\n<p><strong>N.B.:</strong> <em>This is known as <a href="https://developers.google.com/search/docs/guides/dynamic-rendering">Dynamic Rendering</a> and <strong>it\'s not</strong> considered <a href="https://www.wordstream.com/black-hat-seo">black-hat</a> or <a href="https://en.wikipedia.org/wiki/Cloaking">cloaking</a></em>.</p>\n<hr>\n<h4>💡 Lighthouse</h4>\n<p><img src="./src/static/lighthouse/before.jpg" alt="Lighthouse Audit before"><br>\n<img src="./src/static/lighthouse/after.jpg" alt="Lighthouse Audit after"></p>\n<hr>\n<h2>Setup</h2>\n<ol>\n<li><strong>Install</strong> <code>@luxdamore/nuxt-prune-html</code> as a dependency:\n<ul>\n<li><code>yarn add @luxdamore/nuxt-prune-html</code>;</li>\n<li>or, <code>npm install --save @luxdamore/nuxt-prune-html</code>;</li>\n</ul>\n</li>\n<li><strong>Append</strong> <code>@luxdamore/nuxt-prune-html</code> to the <code>modules</code> array of your <code>nuxt.config.js</code>.</li>\n</ol>\n<h2>Configuration</h2>\n<pre><code class="language-js">\n    <span class="hljs-comment">// nuxt.config.js</span>\n    <span class="hljs-keyword">export</span> <span class="hljs-keyword">default</span> {\n\n        <span class="hljs-comment">// Module - installation</span>\n        <span class="hljs-attr">modules</span>: [ <span class="hljs-string">&#x27;@luxdamore/nuxt-prune-html&#x27;</span> ],\n\n        <span class="hljs-comment">// Module - default config</span>\n        <span class="hljs-attr">pruneHtml</span>: {\n            <span class="hljs-attr">enabled</span>: <span class="hljs-literal">false</span>, <span class="hljs-comment">// `true` in production</span>\n            <span class="hljs-attr">hideGenericMessagesInConsole</span>: <span class="hljs-literal">false</span>, <span class="hljs-comment">// `false` in production</span>\n            <span class="hljs-attr">hideErrorsInConsole</span>: <span class="hljs-literal">false</span>, <span class="hljs-comment">// deactivate the `console.error` method</span>\n            <span class="hljs-attr">hookRenderRoute</span>: <span class="hljs-literal">true</span>, <span class="hljs-comment">// activate `hook:render:route`</span>\n            <span class="hljs-attr">hookGeneratePage</span>: <span class="hljs-literal">true</span>, <span class="hljs-comment">// activate `hook:generate:page`</span>\n            <span class="hljs-attr">selectors</span>: [\n                <span class="hljs-comment">// CSS selectors to prune</span>\n                <span class="hljs-string">&#x27;link[rel=&quot;preload&quot;][as=&quot;script&quot;]&#x27;</span>,\n                <span class="hljs-string">&#x27;script:not([type=&quot;application/ld+json&quot;])&#x27;</span>,\n            ],\n            <span class="hljs-attr">classesSelectorsToKeep</span>: [], <span class="hljs-comment">// disallow pruning of scripts with this classes, n.b.: each `classesSelectorsToKeep` is appended to every `selectors`, ex.: `link[rel=&quot;preload&quot;][as=&quot;script&quot;]:not(__classesSelectorsToKeep__)`</span>\n            <span class="hljs-attr">link</span>: [], <span class="hljs-comment">// inject custom links, only if pruned</span>\n            <span class="hljs-attr">script</span>: [], <span class="hljs-comment">// inject custom scripts, only if pruned</span>\n            <span class="hljs-attr">htmlElementClass</span>: <span class="hljs-literal">null</span>, <span class="hljs-comment">// a string added as a class to the &lt;html&gt; element if pruned</span>\n            <span class="hljs-attr">cheerio</span>: {\n                <span class="hljs-comment">// the config passed to the `cheerio.load(__config__)` method</span>\n                <span class="hljs-attr">xmlMode</span>: <span class="hljs-literal">false</span>,\n            },\n            <span class="hljs-attr">types</span>: [\n                <span class="hljs-comment">// it&#x27;s possibile to add different rules for pruning</span>\n                <span class="hljs-string">&#x27;default-detect&#x27;</span>,\n            ],\n\n            <span class="hljs-comment">// 👇🏻 Type: `default-detect`</span>\n            <span class="hljs-attr">headerNameForDefaultDetection</span>: <span class="hljs-string">&#x27;user-agent&#x27;</span>, <span class="hljs-comment">// The `header-key` base for `MobileDetection`, usage `request.headers[ headerNameForDefaultDetection ]`</span>\n            <span class="hljs-attr">auditUserAgent</span>: <span class="hljs-string">&#x27;lighthouse&#x27;</span>, <span class="hljs-comment">// prune if `request.header[ headerNameForDefaultDetection ]` match, could be a string or an array of strings</span>\n            <span class="hljs-attr">isAudit</span>: <span class="hljs-literal">true</span>, <span class="hljs-comment">// remove selectors if match with `auditUserAgent`</span>\n            <span class="hljs-attr">isBot</span>: <span class="hljs-literal">true</span>, <span class="hljs-comment">// remove selectors if is a bot</span>\n            <span class="hljs-attr">ignoreBotOrAudit</span>: <span class="hljs-literal">false</span>, <span class="hljs-comment">// remove selectors in any case, not depending on Bot or Audit</span>\n            <span class="hljs-attr">matchUserAgent</span>: <span class="hljs-literal">null</span>, <span class="hljs-comment">// prune if `request.header[ headerNameForDefaultDetection ]` match, could be a string or an array of strings</span>\n\n            <span class="hljs-comment">// 👇🏻 Type: &#x27;query-parameters&#x27;</span>\n            <span class="hljs-attr">queryParametersToPrune</span>: [\n                <span class="hljs-comment">// array of objects (key-value)</span>\n                <span class="hljs-comment">// trigger the pruning if &#x27;query-parameters&#x27; is present in `types` and at least one value is matched, ex. `/?prune=true`</span>\n                {\n                    <span class="hljs-attr">key</span>: <span class="hljs-string">&#x27;prune&#x27;</span>,\n                    <span class="hljs-attr">value</span>: <span class="hljs-string">&#x27;true&#x27;</span>,\n                },\n            ],\n            <span class="hljs-attr">queryParametersToExcludePrune</span>: [], <span class="hljs-comment">// same as `queryParametersToPrune`, exclude the pruning if &#x27;query-parameters&#x27; is present in `types` and at least one value is matched, this priority is over than `queryParametersToPrune`</span>\n\n            <span class="hljs-comment">// 👇🏻 Type: &#x27;headers-exist&#x27;</span>\n            <span class="hljs-attr">headersToPrune</span>: [], <span class="hljs-comment">// same as `queryParametersToPrune`, but it checks `request.headers`</span>\n            <span class="hljs-attr">headersToExcludePrune</span>: [], <span class="hljs-comment">// same as `queryParamToExcludePrune`, but it checks `request.headers`, this priority is over than `headersToPrune`</span>\n\n            <span class="hljs-comment">// Emitted events for callbacks methods</span>\n            <span class="hljs-attr">onBeforePrune</span>: <span class="hljs-literal">null</span>, <span class="hljs-comment">// ({ result, [ req, res ] }) =&gt; {}, `req` and `res` are not available on `nuxt generate`</span>\n            <span class="hljs-attr">onAfterPrune</span>: <span class="hljs-literal">null</span>, <span class="hljs-comment">// ({ result, [ req, res ] }) =&gt; {}, `req` and `res` are not available on `nuxt generate`</span>\n        },\n\n    };\n\n</code></pre>\n<p>With <code>link</code> and <code>script</code> it\'s possibile to add one or more objects on the pruned HTML, ex.:</p>\n<pre><code class="language-javascript">\n    <span class="hljs-keyword">export</span> <span class="hljs-keyword">default</span> {\n        <span class="hljs-attr">pruneHtml</span>: {\n            <span class="hljs-attr">link</span>: [\n                {\n                    <span class="hljs-attr">rel</span>: <span class="hljs-string">&#x27;preload&#x27;</span>,\n                    <span class="hljs-attr">as</span>: <span class="hljs-string">&#x27;script&#x27;</span>,\n                    <span class="hljs-attr">href</span>: <span class="hljs-string">&#x27;/my-custom-lazy-load-for-bots.js&#x27;</span>,\n                    <span class="hljs-attr">position</span>: <span class="hljs-string">&#x27;phead&#x27;</span>, <span class="hljs-comment">// Default value is &#x27;body&#x27;, other allowed values are: &#x27;phead&#x27;, &#x27;head&#x27; and &#x27;pbody&#x27;</span>\n                },\n                {\n                    <span class="hljs-attr">rel</span>: <span class="hljs-string">&#x27;stylesheet&#x27;</span>,\n                    <span class="hljs-attr">href</span>: <span class="hljs-string">&#x27;/my-custom-styles-for-bots.css&#x27;</span>,\n                    <span class="hljs-attr">position</span>: <span class="hljs-string">&#x27;head&#x27;</span>,\n                },\n            ],\n            <span class="hljs-attr">script</span>: [\n                {\n                    <span class="hljs-attr">src</span>: <span class="hljs-string">&#x27;/my-custom-lazy-load-for-bots.js&#x27;</span>,\n                    <span class="hljs-attr">lazy</span>: <span class="hljs-literal">true</span>,\n                    <span class="hljs-attr">defer</span>: <span class="hljs-literal">true</span>,\n                },\n            ],\n        },\n    };\n\n</code></pre>\n<blockquote>\n<p><strong>N.B.:</strong> <em>the config is only shallow merged, not deep merged</em>.</p>\n</blockquote>\n<h3>Types / Rules</h3>\n<p>Possible values are <code>[ \'default-detect\', \'query-parameters\', \'headers-exist\' ]</code>:</p>\n<ul>\n<li><code>default-detect</code>: prune based on <strong>one header</strong>(<code>request.headers[ headerNameForDefaultDetection ]</code>)\n<ul>\n<li>different checks with <a href="https://hgoebl.github.io/mobile-detect.js/">MobileDetect</a>:\n<ul>\n<li><code>isBot</code>, trigger <code>.is( \'bot\' )</code> method;</li>\n<li><code>auditUserAgent</code> or <code>matchUserAgent</code>, trigger <code>.match()</code> method;</li>\n</ul>\n</li>\n</ul>\n</li>\n<li><code>query-parameters</code>: prune based on <strong>one or more query parameter</strong>, tests <code>key / value</code> based on <code>queryParametersToPrune / queryParametersToExcludePrune</code>:\n<ul>\n<li>you can also specify routes in <code>nuxt.config</code>, ex. <em><code>{ generate: { routes: [ \'/?prune=true\' ] } }</code></em></li>\n</ul>\n</li>\n<li><code>headers-exist</code>: prune based on <strong>one or more header</strong>, tests <code>key / value</code> based on <code>headersToPrune / headersToExcludePrune</code>.</li>\n</ul>\n<p>N.B.: <em>It\'s possibile to mix different types.</em></p>\n<hr>\n<h3>Related things you should know</h3>\n<ul>\n<li>Nuxt <a href="https://nuxtjs.org/api/configuration-hooks/">hooks</a>, the plugin has access to <code>request.headers</code> only if the project is <strong>running as a server</strong> (ex. <code>nuxt start</code>)\n<ul>\n<li>If you <code>generate</code> your site it\'s not possibile to check <em>request.headers</em>, so (for <code>types: [ \'default-detect\', \'headers-exist\' ]</code>) it <strong>always prune</strong>, but You can disable this behavior by setting <code>hookGeneratePage</code> to <code>false</code> (or by using the type <code>query-parameters</code>);</li>\n</ul>\n</li>\n<li>Usage with <code>types: [ \'default-detect\' ]</code>, load the <a href="https://hgoebl.github.io/mobile-detect.js/">MobileDetect</a> library;</li>\n<li>It use <a href="https://github.com/cheeriojs/cheerio">Cheerio</a>, <em>jQuery for servers</em>, library to <strong>filter and prune</strong> the html.</li>\n</ul>\n<hr>\n<h3>Advices</h3>\n<ul>\n<li>Before setting up the module, try to <a href="https://developers.google.com/web/tools/chrome-devtools/javascript/disable">Disable JavaScript With Chrome DevTools</a> while navigate your website, <strong>this is how your website appear (when <em>nuxt-prune-html</em> is enabled)</strong>;</li>\n<li>For <a href="https://nuxtjs.org/api/components-client-only/"><code>&lt;client-only&gt;</code> components</a> you should prepare a version that is visually the same with the <a href="https://nuxtjs.org/api/components-client-only/">placeholder slot</a>;</li>\n<li>You can check the website as a <em>GoogleBot</em>, following <a href="https://developers.google.com/web/tools/chrome-devtools/device-mode/override-user-agent">this guide</a>.</li>\n</ul>\n<hr>\n<h2>👩🏻‍💻👨🏻‍💻 Development</h2>\n<ol>\n<li><strong>Clone</strong> the repository:\n<ul>\n<li><code>git clone https://github.com/LuXDAmore/nuxt-prune-html.git</code>;</li>\n</ul>\n</li>\n<li><strong>Install</strong> dependencies:\n<ul>\n<li><code>yarn install</code> (or <code>npm install</code>);</li>\n</ul>\n</li>\n<li><strong>Start</strong> a development server:\n<ul>\n<li><code>yarn dev</code> (or <code>npm run dev</code>);</li>\n</ul>\n</li>\n<li><strong>Extra</strong>, generate the documentation (<a href="https://pages.github.com/"><em>Github Pages</em></a>):\n<ul>\n<li><code>yarn generate</code> (or <code>npm run generate</code>);</li>\n<li><em>the content is automatically generated into the <code>/docs</code> folder</em>.</li>\n</ul>\n</li>\n</ol>\n<h2>🐞 Issues</h2>\n<p>Please make sure to read the <a href="/.github/ISSUE_TEMPLATE/bug_report.md"><strong>issue reporting checklist</strong></a> before opening an issue.<br>\n<em>Issues not conforming to the guidelines may be closed immediately</em>.</p>\n<h2>📝 Discussions</h2>\n<p>We\'re using <a href="https://github.com/LuXDAmore/nuxt-prune-html/discussions"><strong>Github discussions</strong></a> as a place to connect with other members of our community.<br>\n<em>You are free to ask questions and share ideas, so enjoy yourself</em>.</p>\n<h2>👥 Contribution</h2>\n<p>Please make sure to read the <a href="/.github/ISSUE_TEMPLATE/feature_request.md"><strong>contributing guide</strong></a> before making a pull request.</p>\n<h2>📖 Changelog</h2>\n<p>Details changes for each release are documented in the <a href="./CHANGELOG.md"><strong>release notes</strong></a>.</p>\n<h3>🆓 License</h3>\n<p><a href="./LICENSE">MIT License</a> // Copyright (©) 2019-now <a href="https://lucaiaconelli.it">Luca Iaconelli</a></p>\n<h4>💼 Hire me</h4>\n<p><a href="https://lucaiaconelli.it"><img src="https://img.shields.io/badge/Contact%20Me-Let\'s%20Talk-informational?style=social&amp;logo=minutemailer" alt="Contacts"></a></p>\n<h4>💸 Are you feeling generous today?</h4>\n<p>If You want to share a beer, we can be really good friends 😄</p>\n<p><strong><a href="https://www.paypal.me/luxdamore">Paypal</a> // <a href="https://www.patreon.com/luxdamore">Patreon</a> // <a href="https://ko-fi.com/luxdamore">Ko-fi</a></strong></p>\n<blockquote>\n<p>☀ <em>It\'s always a good day to be magnanimous</em> - cit.</p>\n</blockquote>\n</section>\n'.split("./src/static/").join("");l.a.registerLanguage("bash",h.a),l.a.registerLanguage("javascript",m.a);var j={name:"homepage",computed:{readme:function(){return x}},mounted:function(){var e=this;return Object(o.a)(regeneratorRuntime.mark((function n(){return regeneratorRuntime.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,e.$nextTick();case 2:e.initHighlight(),e.initReadmeLinks();case 4:case"end":return n.stop()}}),n)})))()},methods:{initHighlight:function(){var e,n=f(document.querySelectorAll(".readme code"));try{for(n.s();!(e=n.n()).done;){var t=e.value;l.a.highlightBlock(t)}}catch(e){n.e(e)}finally{n.f()}},initReadmeLinks:function(){var e,n=f(document.querySelectorAll(".readme a"));try{for(n.s();!(e=n.n()).done;){var link=e.value;link.setAttribute("target","_blank"),link.setAttribute("rel","noopener"),link.textContent&&link.setAttribute("title",link.textContent)}}catch(e){n.e(e)}finally{n.f()}}}},v=(t(278),t(280),t(31)),component=Object(v.a)(j,(function(){var e=this,n=e.$createElement,t=e._self._c||n;return e.readme?t("article",{staticClass:"readme markdown-body",domProps:{innerHTML:e._s(e.readme)}}):e._e()}),[],!1,null,"9407f738",null);n.default=component.exports}}]);