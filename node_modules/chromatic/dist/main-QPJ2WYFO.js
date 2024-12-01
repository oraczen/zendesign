'use strict';

!function(){try{var e="undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{},n=(new e.Error).stack;n&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[n]="f7add558-036f-5241-b000-043844b07585")}catch(e){}}();

var chunkNBWB6XML_js = require('./chunk-NBWB6XML.js');
var chunkYIR535JQ_js = require('./chunk-YIR535JQ.js');
require('./chunk-O2POOKSN.js');
require('./chunk-IM5VGDJQ.js');
require('./chunk-LTE3MQL2.js');
require('./chunk-HE7N2MPR.js');
require('./chunk-X7RBQNLE.js');
require('./chunk-LZXDNZPW.js');
require('./chunk-TKGT252T.js');

function f(e){var s;if(e.message&&(e.message=chunkYIR535JQ_js.e(e.message)),(s=e.exception)!=null&&s.values)for(let[p,n]of e.exception.values.entries())n.value&&(e.exception.values[p].value=chunkYIR535JQ_js.e(n.value));return e}function l(e){if(e.category==="console"){if(e.message==="")return null;e.message&&(e.message=chunkYIR535JQ_js.e(e.message));}return e}chunkNBWB6XML_js.c({dsn:"https://4fa173db2ef3fb073b8ea153a5466d28@o4504181686599680.ingest.us.sentry.io/4507930289373184",release:"11.19.0",dist:"cli",sampleRate:1,environment:"production",enabled:process.env.DISABLE_ERROR_MONITORING!=="true"&&!0,enableTracing:!1,integrations:[],initialScope:{tags:{version:process.env.npm_package_version,index_url:process.env.CHROMATIC_INDEX_URL}},beforeSend:f,beforeBreadcrumb:l});async function g(e){try{let{code:s}=await chunkNBWB6XML_js.e({argv:e});process.exitCode=s;}catch(s){chunkNBWB6XML_js.a(s);}finally{await chunkNBWB6XML_js.b(2500),process.exit();}}

exports.main = g;
//# sourceMappingURL=out.js.map
//# sourceMappingURL=main-QPJ2WYFO.js.map
//# debugId=f7add558-036f-5241-b000-043844b07585
