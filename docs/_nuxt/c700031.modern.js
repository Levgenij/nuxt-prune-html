(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{155:function(e,n){function t(e){Object.freeze(e);var n="function"==typeof e;return Object.getOwnPropertyNames(e).forEach((function(r){!Object.hasOwnProperty.call(e,r)||null===e[r]||"object"!=typeof e[r]&&"function"!=typeof e[r]||n&&("caller"===r||"callee"===r||"arguments"===r)||Object.isFrozen(e[r])||t(e[r])})),e}class r{constructor(e){void 0===e.data&&(e.data={}),this.data=e.data}ignoreMatch(){this.ignore=!0}}function o(e){return e.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#x27;")}function c(e,...n){var t={};for(const n in e)t[n]=e[n];return n.forEach((function(e){for(const n in e)t[n]=e[n]})),t}function l(e){return e.nodeName.toLowerCase()}var d=Object.freeze({__proto__:null,escapeHTML:o,inherit:c,nodeStream:function(e){var n=[];return function e(t,r){for(var o=t.firstChild;o;o=o.nextSibling)3===o.nodeType?r+=o.nodeValue.length:1===o.nodeType&&(n.push({event:"start",offset:r,node:o}),r=e(o,r),l(o).match(/br|hr|img|input/)||n.push({event:"stop",offset:r,node:o}));return r}(e,0),n},mergeStreams:function(e,n,t){var r=0,c="",d=[];function h(){return e.length&&n.length?e[0].offset!==n[0].offset?e[0].offset<n[0].offset?e:n:"start"===n[0].event?e:n:e.length?e:n}function f(e){c+="<"+l(e)+[].map.call(e.attributes,(function(e){return" "+e.nodeName+'="'+o(e.value)+'"'})).join("")+">"}function m(e){c+="</"+l(e)+">"}function E(e){("start"===e.event?f:m)(e.node)}for(;e.length||n.length;){var _=h();if(c+=o(t.substring(r,_[0].offset)),r=_[0].offset,_===e){d.reverse().forEach(m);do{E(_.splice(0,1)[0]),_=h()}while(_===e&&_.length&&_[0].offset===r);d.reverse().forEach(f)}else"start"===_[0].event?d.push(_[0].node):d.pop(),E(_.splice(0,1)[0])}return c+o(t.substr(r))}});const h=e=>!!e.kind;class f{constructor(e,n){this.buffer="",this.classPrefix=n.classPrefix,e.walk(this)}addText(text){this.buffer+=o(text)}openNode(e){if(!h(e))return;let n=e.kind;e.sublanguage||(n=`${this.classPrefix}${n}`),this.span(n)}closeNode(e){h(e)&&(this.buffer+="</span>")}value(){return this.buffer}span(e){this.buffer+=`<span class="${e}">`}}class m{constructor(){this.rootNode={children:[]},this.stack=[this.rootNode]}get top(){return this.stack[this.stack.length-1]}get root(){return this.rootNode}add(e){this.top.children.push(e)}openNode(e){const n={kind:e,children:[]};this.add(n),this.stack.push(n)}closeNode(){if(this.stack.length>1)return this.stack.pop()}closeAllNodes(){for(;this.closeNode(););}toJSON(){return JSON.stringify(this.rootNode,null,4)}walk(e){return this.constructor._walk(e,this.rootNode)}static _walk(e,n){return"string"==typeof n?e.addText(n):n.children&&(e.openNode(n),n.children.forEach(n=>this._walk(e,n)),e.closeNode(n)),e}static _collapse(e){"string"!=typeof e&&e.children&&(e.children.every(e=>"string"==typeof e)?e.children=[e.children.join("")]:e.children.forEach(e=>{m._collapse(e)}))}}class E extends m{constructor(e){super(),this.options=e}addKeyword(text,e){""!==text&&(this.openNode(e),this.addText(text),this.closeNode())}addText(text){""!==text&&this.add(text)}addSublanguage(e,n){const t=e.root;t.kind=n,t.sublanguage=!0,this.add(t)}toHTML(){return new f(this,this.options).value()}finalize(){return!0}}function source(e){return e?"string"==typeof e?e:e.source:null}const _="(-?)(\\b0[xX][a-fA-F0-9]+|(\\b\\d+(\\.\\d*)?|\\.\\d+)([eE][-+]?\\d+)?)",v={begin:"\\\\[\\s\\S]",relevance:0},N={className:"string",begin:"'",end:"'",illegal:"\\n",contains:[v]},w={className:"string",begin:'"',end:'"',illegal:"\\n",contains:[v]},x={begin:/\b(a|an|the|are|I'm|isn't|don't|doesn't|won't|but|just|should|pretty|simply|enough|gonna|going|wtf|so|such|will|you|your|they|like|more)\b/},y=function(e,n,t={}){var r=c({className:"comment",begin:e,end:n,contains:[]},t);return r.contains.push(x),r.contains.push({className:"doctag",begin:"(?:TODO|FIXME|NOTE|BUG|OPTIMIZE|HACK|XXX):",relevance:0}),r},R=y("//","$"),M=y("/\\*","\\*/"),O=y("#","$"),A={className:"number",begin:"\\b\\d+(\\.\\d+)?",relevance:0},S={className:"number",begin:_,relevance:0},k={className:"number",begin:"\\b(0b[01]+)",relevance:0},T={className:"number",begin:"\\b\\d+(\\.\\d+)?(%|em|ex|ch|rem|vw|vh|vmin|vmax|cm|mm|in|pt|pc|px|deg|grad|rad|turn|s|ms|Hz|kHz|dpi|dpcm|dppx)?",relevance:0},I={begin:/(?=\/[^/\n]*\/)/,contains:[{className:"regexp",begin:/\//,end:/\/[gimuy]*/,illegal:/\n/,contains:[v,{begin:/\[/,end:/\]/,relevance:0,contains:[v]}]}]},L={className:"title",begin:"[a-zA-Z]\\w*",relevance:0},C={className:"title",begin:"[a-zA-Z_]\\w*",relevance:0},D={begin:"\\.\\s*[a-zA-Z_]\\w*",relevance:0};var B=Object.freeze({__proto__:null,IDENT_RE:"[a-zA-Z]\\w*",UNDERSCORE_IDENT_RE:"[a-zA-Z_]\\w*",NUMBER_RE:"\\b\\d+(\\.\\d+)?",C_NUMBER_RE:_,BINARY_NUMBER_RE:"\\b(0b[01]+)",RE_STARTERS_RE:"!|!=|!==|%|%=|&|&&|&=|\\*|\\*=|\\+|\\+=|,|-|-=|/=|/|:|;|<<|<<=|<=|<|===|==|=|>>>=|>>=|>=|>>>|>>|>|\\?|\\[|\\{|\\(|\\^|\\^=|\\||\\|=|\\|\\||~",SHEBANG:(e={})=>{const n=/^#![ ]*\//;return e.binary&&(e.begin=function(...e){return e.map(e=>source(e)).join("")}(n,/.*\b/,e.binary,/\b.*/)),c({className:"meta",begin:n,end:/$/,relevance:0,"on:begin":(e,n)=>{0!==e.index&&n.ignoreMatch()}},e)},BACKSLASH_ESCAPE:v,APOS_STRING_MODE:N,QUOTE_STRING_MODE:w,PHRASAL_WORDS_MODE:x,COMMENT:y,C_LINE_COMMENT_MODE:R,C_BLOCK_COMMENT_MODE:M,HASH_COMMENT_MODE:O,NUMBER_MODE:A,C_NUMBER_MODE:S,BINARY_NUMBER_MODE:k,CSS_NUMBER_MODE:T,REGEXP_MODE:I,TITLE_MODE:L,UNDERSCORE_TITLE_MODE:C,METHOD_GUARD:D,END_SAME_AS_BEGIN:function(e){return Object.assign(e,{"on:begin":(e,n)=>{n.data._beginMatch=e[1]},"on:end":(e,n)=>{n.data._beginMatch!==e[1]&&n.ignoreMatch()}})}}),j="of and for in not or if then".split(" ");function P(e){function n(n,t){return new RegExp(source(n),"m"+(e.case_insensitive?"i":"")+(t?"g":""))}class t{constructor(){this.matchIndexes={},this.regexes=[],this.matchAt=1,this.position=0}addRule(e,n){n.position=this.position++,this.matchIndexes[this.matchAt]=n,this.regexes.push([n,e]),this.matchAt+=function(e){return new RegExp(e.toString()+"|").exec("").length-1}(e)+1}compile(){0===this.regexes.length&&(this.exec=()=>null);const e=this.regexes.map(e=>e[1]);this.matcherRe=n(function(e,n="|"){for(var t=/\[(?:[^\\\]]|\\.)*\]|\(\??|\\([1-9][0-9]*)|\\./,r=0,o="",i=0;i<e.length;i++){var c=r+=1,l=source(e[i]);for(i>0&&(o+=n),o+="(";l.length>0;){var d=t.exec(l);if(null==d){o+=l;break}o+=l.substring(0,d.index),l=l.substring(d.index+d[0].length),"\\"===d[0][0]&&d[1]?o+="\\"+String(Number(d[1])+c):(o+=d[0],"("===d[0]&&r++)}o+=")"}return o}(e),!0),this.lastIndex=0}exec(s){this.matcherRe.lastIndex=this.lastIndex;const e=this.matcherRe.exec(s);if(!e)return null;const i=e.findIndex((e,i)=>i>0&&void 0!==e),n=this.matchIndexes[i];return e.splice(0,i),Object.assign(e,n)}}class r{constructor(){this.rules=[],this.multiRegexes=[],this.count=0,this.lastIndex=0,this.regexIndex=0}getMatcher(e){if(this.multiRegexes[e])return this.multiRegexes[e];const n=new t;return this.rules.slice(e).forEach(([e,t])=>n.addRule(e,t)),n.compile(),this.multiRegexes[e]=n,n}resumingScanAtSamePosition(){return 0!==this.regexIndex}considerAll(){this.regexIndex=0}addRule(e,n){this.rules.push([e,n]),"begin"===n.type&&this.count++}exec(s){const e=this.getMatcher(this.regexIndex);e.lastIndex=this.lastIndex;let n=e.exec(s);if(this.resumingScanAtSamePosition())if(n&&n.index===this.lastIndex);else{const e=this.getMatcher(0);e.lastIndex=this.lastIndex+1,n=e.exec(s)}return n&&(this.regexIndex+=n.position+1,this.regexIndex===this.count&&this.considerAll()),n}}function o(e,n){const t=e.input[e.index-1],r=e.input[e.index+e[0].length];"."!==t&&"."!==r||n.ignoreMatch()}if(e.contains&&e.contains.includes("self"))throw new Error("ERR: contains `self` is not supported at the top-level of a language.  See documentation.");return function t(l,d){const h=l;if(l.compiled)return h;l.compiled=!0,l.__beforeBegin=null,l.keywords=l.keywords||l.beginKeywords;let f=null;if("object"==typeof l.keywords&&(f=l.keywords.$pattern,delete l.keywords.$pattern),l.keywords&&(l.keywords=function(e,n){var t={};"string"==typeof e?r("keyword",e):Object.keys(e).forEach((function(n){r(n,e[n])}));return t;function r(e,r){n&&(r=r.toLowerCase()),r.split(" ").forEach((function(n){var r=n.split("|");t[r[0]]=[e,z(r[0],r[1])]}))}}(l.keywords,e.case_insensitive)),l.lexemes&&f)throw new Error("ERR: Prefer `keywords.$pattern` to `mode.lexemes`, BOTH are not allowed. (see mode reference) ");return h.keywordPatternRe=n(l.lexemes||f||/\w+/,!0),d&&(l.beginKeywords&&(l.begin="\\b("+l.beginKeywords.split(" ").join("|")+")(?=\\b|\\s)",l.__beforeBegin=o),l.begin||(l.begin=/\B|\b/),h.beginRe=n(l.begin),l.endSameAsBegin&&(l.end=l.begin),l.end||l.endsWithParent||(l.end=/\B|\b/),l.end&&(h.endRe=n(l.end)),h.terminator_end=source(l.end)||"",l.endsWithParent&&d.terminator_end&&(h.terminator_end+=(l.end?"|":"")+d.terminator_end)),l.illegal&&(h.illegalRe=n(l.illegal)),void 0===l.relevance&&(l.relevance=1),l.contains||(l.contains=[]),l.contains=[].concat(...l.contains.map((function(e){return function(e){e.variants&&!e.cached_variants&&(e.cached_variants=e.variants.map((function(n){return c(e,{variants:null},n)})));if(e.cached_variants)return e.cached_variants;if(function e(n){return!!n&&(n.endsWithParent||e(n.starts))}(e))return c(e,{starts:e.starts?c(e.starts):null});if(Object.isFrozen(e))return c(e);return e}("self"===e?l:e)}))),l.contains.forEach((function(e){t(e,h)})),l.starts&&t(l.starts,d),h.matcher=function(e){const n=new r;return e.contains.forEach(e=>n.addRule(e.begin,{rule:e,type:"begin"})),e.terminator_end&&n.addRule(e.terminator_end,{type:"end"}),e.illegal&&n.addRule(e.illegal,{type:"illegal"}),n}(h),h}(e)}function z(e,n){return n?Number(n):function(e){return j.includes(e.toLowerCase())}(e)?0:1}const H={props:["language","code","autodetect"],data:function(){return{detectedLanguage:"",unknownLanguage:!1}},computed:{className(){return this.unknownLanguage?"":"hljs "+this.detectedLanguage},highlighted(){if(!this.autoDetect&&!hljs.getLanguage(this.language))return console.warn(`The language "${this.language}" you specified could not be found.`),this.unknownLanguage=!0,o(this.code);let e;return this.autoDetect?(e=hljs.highlightAuto(this.code),this.detectedLanguage=e.language):(e=hljs.highlight(this.language,this.code,this.ignoreIllegals),this.detectectLanguage=this.language),e.value},autoDetect(){return!this.language||(e=this.autodetect,Boolean(e||""===e));var e},ignoreIllegals:()=>!0},render(e){return e("pre",{},[e("code",{class:this.className,domProps:{innerHTML:this.highlighted}})])}},U={install(e){e.component("highlightjs",H)}},$=o,K=c,{nodeStream:G,mergeStreams:Z}=d,F=Symbol("nomatch");var X=function(e){var n=[],o=Object.create(null),c=Object.create(null),l=[],d=!0,h=/(^(<[^>]+>|\t|)+|\n)/gm,f="Could not find the language '{}', did you forget to load/include a language module?";const m={disableAutodetect:!0,name:"Plain text",contains:[]};var _={noHighlightRe:/^(no-?highlight)$/i,languageDetectRe:/\blang(?:uage)?-([\w-]+)\b/i,classPrefix:"hljs-",tabReplace:null,useBR:!1,languages:null,__emitter:E};function v(e){return _.noHighlightRe.test(e)}function N(e,code,n,t){var r={code:code,language:e};k("before:highlight",r);var o=r.result?r.result:w(r.language,r.code,n,t);return o.code=r.code,k("after:highlight",o),o}function w(e,code,n,t){var c=code;function l(e,n){var t=M.case_insensitive?n[0].toLowerCase():n[0];return Object.prototype.hasOwnProperty.call(e.keywords,t)&&e.keywords[t]}function h(){null!=k.subLanguage?function(){if(""!==L){var e=null;if("string"==typeof k.subLanguage){if(!o[k.subLanguage])return void I.addText(L);e=w(k.subLanguage,L,!0,T[k.subLanguage]),T[k.subLanguage]=e.top}else e=x(L,k.subLanguage.length?k.subLanguage:null);k.relevance>0&&(C+=e.relevance),I.addSublanguage(e.emitter,e.language)}}():function(){if(!k.keywords)return void I.addText(L);let e=0;k.keywordPatternRe.lastIndex=0;let n=k.keywordPatternRe.exec(L),t="";for(;n;){t+=L.substring(e,n.index);const data=l(k,n);if(data){const[e,r]=data;I.addText(t),t="",C+=r,I.addKeyword(n[0],e)}else t+=n[0];e=k.keywordPatternRe.lastIndex,n=k.keywordPatternRe.exec(L)}t+=L.substr(e),I.addText(t)}(),L=""}function m(e){return e.className&&I.openNode(e.className),k=Object.create(e,{parent:{value:k}})}function E(e){return 0===k.matcher.regexIndex?(L+=e[0],1):(j=!0,0)}function v(e){var n=e[0],t=e.rule;const o=new r(t),c=[t.__beforeBegin,t["on:begin"]];for(const t of c)if(t&&(t(e,o),o.ignore))return E(n);return t&&t.endSameAsBegin&&(t.endRe=new RegExp(n.replace(/[-/\\^$*+?.()|[\]{}]/g,"\\$&"),"m")),t.skip?L+=n:(t.excludeBegin&&(L+=n),h(),t.returnBegin||t.excludeBegin||(L=n)),m(t),t.returnBegin?0:n.length}function N(e){var n=e[0],t=c.substr(e.index),o=function e(n,t,o){let c=function(e,n){var t=e&&e.exec(n);return t&&0===t.index}(n.endRe,o);if(c){if(n["on:end"]){const e=new r(n);n["on:end"](t,e),e.ignore&&(c=!1)}if(c){for(;n.endsParent&&n.parent;)n=n.parent;return n}}if(n.endsWithParent)return e(n.parent,t,o)}(k,e,t);if(!o)return F;var l=k;l.skip?L+=n:(l.returnEnd||l.excludeEnd||(L+=n),h(),l.excludeEnd&&(L=n));do{k.className&&I.closeNode(),k.skip||k.subLanguage||(C+=k.relevance),k=k.parent}while(k!==o.parent);return o.starts&&(o.endSameAsBegin&&(o.starts.endRe=o.endRe),m(o.starts)),l.returnEnd?0:n.length}var y={};function R(t,r){var o=r&&r[0];if(L+=t,null==o)return h(),0;if("begin"===y.type&&"end"===r.type&&y.index===r.index&&""===o){if(L+=c.slice(r.index,r.index+1),!d){const n=new Error("0 width match regex");throw n.languageName=e,n.badRule=y.rule,n}return 1}if(y=r,"begin"===r.type)return v(r);if("illegal"===r.type&&!n){const e=new Error('Illegal lexeme "'+o+'" for mode "'+(k.className||"<unnamed>")+'"');throw e.mode=k,e}if("end"===r.type){var l=N(r);if(l!==F)return l}if("illegal"===r.type&&""===o)return 1;if(B>1e5&&B>3*r.index){throw new Error("potential infinite loop, way more iterations than matches")}return L+=o,o.length}var M=O(e);if(!M)throw console.error(f.replace("{}",e)),new Error('Unknown language: "'+e+'"');var A=P(M),S="",k=t||A,T={},I=new _.__emitter(_);!function(){for(var e=[],n=k;n!==M;n=n.parent)n.className&&e.unshift(n.className);e.forEach(e=>I.openNode(e))}();var L="",C=0,D=0,B=0,j=!1;try{for(k.matcher.considerAll();;){B++,j?j=!1:k.matcher.considerAll(),k.matcher.lastIndex=D;const e=k.matcher.exec(c);if(!e)break;const n=R(c.substring(D,e.index),e);D=e.index+n}return R(c.substr(D)),I.closeAllNodes(),I.finalize(),S=I.toHTML(),{relevance:C,value:S,language:e,illegal:!1,emitter:I,top:k}}catch(n){if(n.message&&n.message.includes("Illegal"))return{illegal:!0,illegalBy:{msg:n.message,context:c.slice(D-100,D+100),mode:n.mode},sofar:S,relevance:0,value:$(c),emitter:I};if(d)return{illegal:!1,relevance:0,value:$(c),emitter:I,language:e,top:k,errorRaised:n};throw n}}function x(code,e){e=e||_.languages||Object.keys(o);var n=function(code){const e={relevance:0,emitter:new _.__emitter(_),value:$(code),illegal:!1,top:m};return e.emitter.addText(code),e}(code),t=n;return e.filter(O).filter(S).forEach((function(e){var r=w(e,code,!1);r.language=e,r.relevance>t.relevance&&(t=r),r.relevance>n.relevance&&(t=n,n=r)})),t.language&&(n.second_best=t),n}function y(html){return _.tabReplace||_.useBR?html.replace(h,e=>"\n"===e?_.useBR?"<br>":e:_.tabReplace?e.replace(/\t/g,_.tabReplace):e):html}function R(element){let e=null;const n=function(e){var n=e.className+" ";n+=e.parentNode?e.parentNode.className:"";const t=_.languageDetectRe.exec(n);if(t){var r=O(t[1]);return r||(console.warn(f.replace("{}",t[1])),console.warn("Falling back to no-highlight mode for this block.",e)),r?t[1]:"no-highlight"}return n.split(/\s+/).find(e=>v(e)||O(e))}(element);if(v(n))return;k("before:highlightBlock",{block:element,language:n}),_.useBR?(e=document.createElement("div"),e.innerHTML=element.innerHTML.replace(/\n/g,"").replace(/<br[ /]*>/g,"\n")):e=element;const text=e.textContent,t=n?N(n,text,!0):x(text),r=G(e);if(r.length){const e=document.createElement("div");e.innerHTML=t.value,t.value=Z(r,G(e),text)}t.value=y(t.value),k("after:highlightBlock",{block:element,result:t}),element.innerHTML=t.value,element.className=function(e,n,t){var r=n?c[n]:t,o=[e.trim()];return e.match(/\bhljs\b/)||o.push("hljs"),e.includes(r)||o.push(r),o.join(" ").trim()}(element.className,n,t.language),element.result={language:t.language,re:t.relevance,relavance:t.relevance},t.second_best&&(element.second_best={language:t.second_best.language,re:t.second_best.relevance,relavance:t.second_best.relevance})}const M=()=>{if(!M.called){M.called=!0;var e=document.querySelectorAll("pre code");n.forEach.call(e,R)}};function O(e){return e=(e||"").toLowerCase(),o[e]||o[c[e]]}function A(e,{languageName:n}){"string"==typeof e&&(e=[e]),e.forEach(e=>{c[e]=n})}function S(e){var n=O(e);return n&&!n.disableAutodetect}function k(e,n){var t=e;l.forEach((function(e){e[t]&&e[t](n)}))}Object.assign(e,{highlight:N,highlightAuto:x,fixMarkup:function(e){return console.warn("fixMarkup is deprecated and will be removed entirely in v11.0"),console.warn("Please see https://github.com/highlightjs/highlight.js/issues/2534"),y(e)},highlightBlock:R,configure:function(e){_=K(_,e)},initHighlighting:M,initHighlightingOnLoad:function(){window.addEventListener("DOMContentLoaded",M,!1)},registerLanguage:function(n,t){var r=null;try{r=t(e)}catch(e){if(console.error("Language definition for '{}' could not be registered.".replace("{}",n)),!d)throw e;console.error(e),r=m}r.name||(r.name=n),o[n]=r,r.rawDefinition=t.bind(null,e),r.aliases&&A(r.aliases,{languageName:n})},listLanguages:function(){return Object.keys(o)},getLanguage:O,registerAliases:A,requireLanguage:function(e){var n=O(e);if(n)return n;throw new Error("The '{}' language is required, but not loaded.".replace("{}",e))},autoDetection:S,inherit:K,addPlugin:function(e){l.push(e)},vuePlugin:U}),e.debugMode=function(){d=!1},e.safeMode=function(){d=!0},e.versionString="10.2.1";for(const e in B)"object"==typeof B[e]&&t(B[e]);return Object.assign(e,B),e}({});e.exports=X},156:function(e,n){e.exports=function(e){const n={},t={begin:/\$\{/,end:/\}/,contains:[{begin:/:-/,contains:[n]}]};Object.assign(n,{className:"variable",variants:[{begin:/\$[\w\d#@][\w\d_]*/},t]});const r={className:"subst",begin:/\$\(/,end:/\)/,contains:[e.BACKSLASH_ESCAPE]},o={className:"string",begin:/"/,end:/"/,contains:[e.BACKSLASH_ESCAPE,n,r]};r.contains.push(o);const c={begin:/\$\(\(/,end:/\)\)/,contains:[{begin:/\d+#[0-9a-f]+/,className:"number"},e.NUMBER_MODE,n]},l=e.SHEBANG({binary:`(${["fish","bash","zsh","sh","csh","ksh","tcsh","dash","scsh"].join("|")})`,relevance:10}),d={className:"function",begin:/\w[\w\d_]*\s*\(\s*\)\s*\{/,returnBegin:!0,contains:[e.inherit(e.TITLE_MODE,{begin:/\w[\w\d_]*/})],relevance:0};return{name:"Bash",aliases:["sh","zsh"],keywords:{$pattern:/\b-?[a-z\._-]+\b/,keyword:"if then else elif fi for while in do done case esac function",literal:"true false",built_in:"break cd continue eval exec exit export getopts hash pwd readonly return shift test times trap umask unset alias bind builtin caller command declare echo enable help let local logout mapfile printf read readarray source type typeset ulimit unalias set shopt autoload bg bindkey bye cap chdir clone comparguments compcall compctl compdescribe compfiles compgroups compquote comptags comptry compvalues dirs disable disown echotc echoti emulate fc fg float functions getcap getln history integer jobs kill limit log noglob popd print pushd pushln rehash sched setcap setopt stat suspend ttyctl unfunction unhash unlimit unsetopt vared wait whence where which zcompile zformat zftp zle zmodload zparseopts zprof zpty zregexparse zsocket zstyle ztcp",_:"-ne -eq -lt -gt -f -d -e -s -l -a"},contains:[l,e.SHEBANG(),d,c,e.HASH_COMMENT_MODE,o,{className:"",begin:/\\"/},{className:"string",begin:/'/,end:/'/},n]}}},157:function(e,n){const t=["as","in","of","if","for","while","finally","var","new","function","do","return","void","else","break","catch","instanceof","with","throw","case","default","try","switch","continue","typeof","delete","let","yield","const","class","debugger","async","await","static","import","from","export","extends"],r=["true","false","null","undefined","NaN","Infinity"],o=[].concat(["setInterval","setTimeout","clearInterval","clearTimeout","require","exports","eval","isFinite","isNaN","parseFloat","parseInt","decodeURI","decodeURIComponent","encodeURI","encodeURIComponent","escape","unescape"],["arguments","this","super","console","window","document","localStorage","module","global"],["Intl","DataView","Number","Math","Date","String","RegExp","Object","Function","Boolean","Error","Symbol","Set","Map","WeakSet","WeakMap","Proxy","Reflect","JSON","Promise","Float64Array","Int16Array","Int32Array","Int8Array","Uint16Array","Uint32Array","Float32Array","Array","Uint8Array","Uint8ClampedArray","ArrayBuffer"],["EvalError","InternalError","RangeError","ReferenceError","SyntaxError","TypeError","URIError"]);function c(e){return l("(?=",e,")")}function l(...e){return e.map(e=>{return(n=e)?"string"==typeof n?n:n.source:null;var n}).join("")}e.exports=function(e){var n="[A-Za-z$_][0-9A-Za-z$_]*",d="<>",h="</>",f={begin:/<[A-Za-z0-9\\._:-]+/,end:/\/[A-Za-z0-9\\._:-]+>|\/>/},m={$pattern:"[A-Za-z$_][0-9A-Za-z$_]*",keyword:t.join(" "),literal:r.join(" "),built_in:o.join(" ")},E={className:"number",variants:[{begin:"\\b(0[bB][01]+)n?"},{begin:"\\b(0[oO][0-7]+)n?"},{begin:e.C_NUMBER_RE+"n?"}],relevance:0},_={className:"subst",begin:"\\$\\{",end:"\\}",keywords:m,contains:[]},v={begin:"html`",end:"",starts:{end:"`",returnEnd:!1,contains:[e.BACKSLASH_ESCAPE,_],subLanguage:"xml"}},N={begin:"css`",end:"",starts:{end:"`",returnEnd:!1,contains:[e.BACKSLASH_ESCAPE,_],subLanguage:"css"}},w={className:"string",begin:"`",end:"`",contains:[e.BACKSLASH_ESCAPE,_]};_.contains=[e.APOS_STRING_MODE,e.QUOTE_STRING_MODE,v,N,w,E,e.REGEXP_MODE];var x=_.contains.concat([{begin:/\(/,end:/\)/,contains:["self"].concat(_.contains,[e.C_BLOCK_COMMENT_MODE,e.C_LINE_COMMENT_MODE])},e.C_BLOCK_COMMENT_MODE,e.C_LINE_COMMENT_MODE]),y={className:"params",begin:/\(/,end:/\)/,excludeBegin:!0,excludeEnd:!0,contains:x};return{name:"JavaScript",aliases:["js","jsx","mjs","cjs"],keywords:m,contains:[e.SHEBANG({binary:"node",relevance:5}),{className:"meta",relevance:10,begin:/^\s*['"]use (strict|asm)['"]/},e.APOS_STRING_MODE,e.QUOTE_STRING_MODE,v,N,w,e.C_LINE_COMMENT_MODE,e.COMMENT("/\\*\\*","\\*/",{relevance:0,contains:[{className:"doctag",begin:"@[A-Za-z]+",contains:[{className:"type",begin:"\\{",end:"\\}",relevance:0},{className:"variable",begin:n+"(?=\\s*(-)|$)",endsParent:!0,relevance:0},{begin:/(?=[^\n])\s/,relevance:0}]}]}),e.C_BLOCK_COMMENT_MODE,E,{begin:l(/[{,\n]\s*/,c(l(/(((\/\/.*$)|(\/\*(.|\n)*\*\/))\s*)*/,n+"\\s*:"))),relevance:0,contains:[{className:"attr",begin:n+c("\\s*:"),relevance:0}]},{begin:"("+e.RE_STARTERS_RE+"|\\b(case|return|throw)\\b)\\s*",keywords:"return throw case",contains:[e.C_LINE_COMMENT_MODE,e.C_BLOCK_COMMENT_MODE,e.REGEXP_MODE,{className:"function",begin:"(\\([^(]*(\\([^(]*(\\([^(]*\\))?\\))?\\)|"+e.UNDERSCORE_IDENT_RE+")\\s*=>",returnBegin:!0,end:"\\s*=>",contains:[{className:"params",variants:[{begin:e.UNDERSCORE_IDENT_RE},{className:null,begin:/\(\s*\)/,skip:!0},{begin:/\(/,end:/\)/,excludeBegin:!0,excludeEnd:!0,keywords:m,contains:x}]}]},{begin:/,/,relevance:0},{className:"",begin:/\s/,end:/\s*/,skip:!0},{variants:[{begin:d,end:h},{begin:f.begin,end:f.end}],subLanguage:"xml",contains:[{begin:f.begin,end:f.end,skip:!0,contains:["self"]}]}],relevance:0},{className:"function",beginKeywords:"function",end:/\{/,excludeEnd:!0,contains:[e.inherit(e.TITLE_MODE,{begin:n}),y],illegal:/\[|%/},{begin:/\$[(.]/},e.METHOD_GUARD,{className:"class",beginKeywords:"class",end:/[{;=]/,excludeEnd:!0,illegal:/[:"\[\]]/,contains:[{beginKeywords:"extends"},e.UNDERSCORE_TITLE_MODE]},{beginKeywords:"constructor",end:/\{/,excludeEnd:!0},{begin:"(get|set)\\s+(?="+n+"\\()",end:/{/,keywords:"get set",contains:[e.inherit(e.TITLE_MODE,{begin:n}),{begin:/\(\)/},y]}],illegal:/#(?!!)/}}}}]);