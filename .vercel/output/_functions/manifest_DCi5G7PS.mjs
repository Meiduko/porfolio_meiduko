import { t as decodeKey } from './chunks/astro/server_BZZvE4oG.mjs';
import { N as NOOP_MIDDLEWARE_FN } from './chunks/astro-designed-error-pages_Dvk21qpO.mjs';

function sanitizeParams(params) {
  return Object.fromEntries(
    Object.entries(params).map(([key, value]) => {
      if (typeof value === "string") {
        return [key, value.normalize().replace(/#/g, "%23").replace(/\?/g, "%3F")];
      }
      return [key, value];
    })
  );
}
function getParameter(part, params) {
  if (part.spread) {
    return params[part.content.slice(3)] || "";
  }
  if (part.dynamic) {
    if (!params[part.content]) {
      throw new TypeError(`Missing parameter: ${part.content}`);
    }
    return params[part.content];
  }
  return part.content.normalize().replace(/\?/g, "%3F").replace(/#/g, "%23").replace(/%5B/g, "[").replace(/%5D/g, "]");
}
function getSegment(segment, params) {
  const segmentPath = segment.map((part) => getParameter(part, params)).join("");
  return segmentPath ? "/" + segmentPath : "";
}
function getRouteGenerator(segments, addTrailingSlash) {
  return (params) => {
    const sanitizedParams = sanitizeParams(params);
    let trailing = "";
    if (addTrailingSlash === "always" && segments.length) {
      trailing = "/";
    }
    const path = segments.map((segment) => getSegment(segment, sanitizedParams)).join("") + trailing;
    return path || "/";
  };
}

function deserializeRouteData(rawRouteData) {
  return {
    route: rawRouteData.route,
    type: rawRouteData.type,
    pattern: new RegExp(rawRouteData.pattern),
    params: rawRouteData.params,
    component: rawRouteData.component,
    generate: getRouteGenerator(rawRouteData.segments, rawRouteData._meta.trailingSlash),
    pathname: rawRouteData.pathname || void 0,
    segments: rawRouteData.segments,
    prerender: rawRouteData.prerender,
    redirect: rawRouteData.redirect,
    redirectRoute: rawRouteData.redirectRoute ? deserializeRouteData(rawRouteData.redirectRoute) : void 0,
    fallbackRoutes: rawRouteData.fallbackRoutes.map((fallback) => {
      return deserializeRouteData(fallback);
    }),
    isIndex: rawRouteData.isIndex,
    origin: rawRouteData.origin
  };
}

function deserializeManifest(serializedManifest) {
  const routes = [];
  for (const serializedRoute of serializedManifest.routes) {
    routes.push({
      ...serializedRoute,
      routeData: deserializeRouteData(serializedRoute.routeData)
    });
    const route = serializedRoute;
    route.routeData = deserializeRouteData(serializedRoute.routeData);
  }
  const assets = new Set(serializedManifest.assets);
  const componentMetadata = new Map(serializedManifest.componentMetadata);
  const inlinedScripts = new Map(serializedManifest.inlinedScripts);
  const clientDirectives = new Map(serializedManifest.clientDirectives);
  const serverIslandNameMap = new Map(serializedManifest.serverIslandNameMap);
  const key = decodeKey(serializedManifest.key);
  return {
    // in case user middleware exists, this no-op middleware will be reassigned (see plugin-ssr.ts)
    middleware() {
      return { onRequest: NOOP_MIDDLEWARE_FN };
    },
    ...serializedManifest,
    assets,
    componentMetadata,
    inlinedScripts,
    clientDirectives,
    routes,
    serverIslandNameMap,
    key
  };
}

const manifest = deserializeManifest({"hrefRoot":"file:///C:/Users/Borja/Coding/porfolio_meiduko/","cacheDir":"file:///C:/Users/Borja/Coding/porfolio_meiduko/node_modules/.astro/","outDir":"file:///C:/Users/Borja/Coding/porfolio_meiduko/dist/","srcDir":"file:///C:/Users/Borja/Coding/porfolio_meiduko/src/","publicDir":"file:///C:/Users/Borja/Coding/porfolio_meiduko/public/","buildClientDir":"file:///C:/Users/Borja/Coding/porfolio_meiduko/dist/client/","buildServerDir":"file:///C:/Users/Borja/Coding/porfolio_meiduko/dist/server/","adapterName":"@astrojs/vercel","routes":[{"file":"","links":[],"scripts":[],"styles":[],"routeData":{"type":"page","component":"_server-islands.astro","params":["name"],"segments":[[{"content":"_server-islands","dynamic":false,"spread":false}],[{"content":"name","dynamic":true,"spread":false}]],"pattern":"^\\/_server-islands\\/([^/]+?)\\/?$","prerender":false,"isIndex":false,"fallbackRoutes":[],"route":"/_server-islands/[name]","origin":"internal","_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[],"routeData":{"type":"endpoint","isIndex":false,"route":"/_image","pattern":"^\\/_image\\/?$","segments":[[{"content":"_image","dynamic":false,"spread":false}]],"params":[],"component":"node_modules/.pnpm/astro@5.12.9_@types+node@24.3.0_jiti@2.5.1_lightningcss@1.30.1_rollup@4.47.1_typescript@5.9.2/node_modules/astro/dist/assets/endpoint/generic.js","pathname":"/_image","prerender":false,"fallbackRoutes":[],"origin":"internal","_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[{"type":"external","src":"/_astro/index.CWzKkcmd.css"}],"routeData":{"route":"/en","isIndex":true,"type":"page","pattern":"^\\/en\\/?$","segments":[[{"content":"en","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/en/index.astro","pathname":"/en","prerender":false,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[{"type":"external","src":"/_astro/index.CWzKkcmd.css"}],"routeData":{"route":"/es","isIndex":true,"type":"page","pattern":"^\\/es\\/?$","segments":[[{"content":"es","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/es/index.astro","pathname":"/es","prerender":false,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[{"type":"external","src":"/_astro/index.CWzKkcmd.css"}],"routeData":{"route":"/gl","isIndex":true,"type":"page","pattern":"^\\/gl\\/?$","segments":[[{"content":"gl","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/gl/index.astro","pathname":"/gl","prerender":false,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[{"type":"external","src":"/_astro/index.CWzKkcmd.css"}],"routeData":{"route":"/","isIndex":true,"type":"page","pattern":"^\\/$","segments":[],"params":[],"component":"src/pages/index.astro","pathname":"/","prerender":false,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}}],"site":"https://porfolio-meiduko.vercel.app/","base":"/","trailingSlash":"ignore","compressHTML":true,"componentMetadata":[["C:/Users/Borja/Coding/porfolio_meiduko/src/pages/en/index.astro",{"propagation":"in-tree","containsHead":true}],["C:/Users/Borja/Coding/porfolio_meiduko/src/pages/es/index.astro",{"propagation":"in-tree","containsHead":true}],["C:/Users/Borja/Coding/porfolio_meiduko/src/pages/gl/index.astro",{"propagation":"in-tree","containsHead":true}],["C:/Users/Borja/Coding/porfolio_meiduko/src/pages/index.astro",{"propagation":"in-tree","containsHead":true}],["\u0000astro:content",{"propagation":"in-tree","containsHead":false}],["C:/Users/Borja/Coding/porfolio_meiduko/src/components/Projects.astro",{"propagation":"in-tree","containsHead":false}],["\u0000@astro-page:src/pages/en/index@_@astro",{"propagation":"in-tree","containsHead":false}],["\u0000@astrojs-ssr-virtual-entry",{"propagation":"in-tree","containsHead":false}],["\u0000@astro-page:src/pages/es/index@_@astro",{"propagation":"in-tree","containsHead":false}],["\u0000@astro-page:src/pages/gl/index@_@astro",{"propagation":"in-tree","containsHead":false}],["\u0000@astro-page:src/pages/index@_@astro",{"propagation":"in-tree","containsHead":false}]],"renderers":[],"clientDirectives":[["idle","(()=>{var l=(n,t)=>{let i=async()=>{await(await n())()},e=typeof t.value==\"object\"?t.value:void 0,s={timeout:e==null?void 0:e.timeout};\"requestIdleCallback\"in window?window.requestIdleCallback(i,s):setTimeout(i,s.timeout||200)};(self.Astro||(self.Astro={})).idle=l;window.dispatchEvent(new Event(\"astro:idle\"));})();"],["load","(()=>{var e=async t=>{await(await t())()};(self.Astro||(self.Astro={})).load=e;window.dispatchEvent(new Event(\"astro:load\"));})();"],["media","(()=>{var n=(a,t)=>{let i=async()=>{await(await a())()};if(t.value){let e=matchMedia(t.value);e.matches?i():e.addEventListener(\"change\",i,{once:!0})}};(self.Astro||(self.Astro={})).media=n;window.dispatchEvent(new Event(\"astro:media\"));})();"],["only","(()=>{var e=async t=>{await(await t())()};(self.Astro||(self.Astro={})).only=e;window.dispatchEvent(new Event(\"astro:only\"));})();"],["visible","(()=>{var a=(s,i,o)=>{let r=async()=>{await(await s())()},t=typeof i.value==\"object\"?i.value:void 0,c={rootMargin:t==null?void 0:t.rootMargin},n=new IntersectionObserver(e=>{for(let l of e)if(l.isIntersecting){n.disconnect(),r();break}},c);for(let e of o.children)n.observe(e)};(self.Astro||(self.Astro={})).visible=a;window.dispatchEvent(new Event(\"astro:visible\"));})();"]],"entryModules":{"\u0000noop-middleware":"_noop-middleware.mjs","\u0000noop-actions":"_noop-actions.mjs","\u0000@astro-page:node_modules/.pnpm/astro@5.12.9_@types+node@24.3.0_jiti@2.5.1_lightningcss@1.30.1_rollup@4.47.1_typescript@5.9.2/node_modules/astro/dist/assets/endpoint/generic@_@js":"pages/_image.astro.mjs","\u0000@astro-page:src/pages/en/index@_@astro":"pages/en.astro.mjs","\u0000@astro-page:src/pages/es/index@_@astro":"pages/es.astro.mjs","\u0000@astro-page:src/pages/gl/index@_@astro":"pages/gl.astro.mjs","\u0000@astro-page:src/pages/index@_@astro":"pages/index.astro.mjs","\u0000@astrojs-ssr-virtual-entry":"entry.mjs","\u0000@astro-renderers":"renderers.mjs","\u0000@astrojs-ssr-adapter":"_@astrojs-ssr-adapter.mjs","\u0000@astrojs-manifest":"manifest_DCi5G7PS.mjs","C:/Users/Borja/Coding/porfolio_meiduko/node_modules/.pnpm/astro@5.12.9_@types+node@24.3.0_jiti@2.5.1_lightningcss@1.30.1_rollup@4.47.1_typescript@5.9.2/node_modules/astro/dist/assets/services/sharp.js":"chunks/sharp_CbPXIM8T.mjs","C:\\Users\\Borja\\Coding\\porfolio_meiduko\\.astro\\content-assets.mjs":"chunks/content-assets_DleWbedO.mjs","C:\\Users\\Borja\\Coding\\porfolio_meiduko\\.astro\\content-modules.mjs":"chunks/content-modules_Dz-S_Wwv.mjs","\u0000astro:data-layer-content":"chunks/_astro_data-layer-content_DW8AHZ36.mjs","C:/Users/Borja/Coding/porfolio_meiduko/src/layouts/Layout.astro?astro&type=script&index=0&lang.ts":"_astro/Layout.astro_astro_type_script_index_0_lang.DcwLHUI_.js","astro:scripts/before-hydration.js":""},"inlinedScripts":[["C:/Users/Borja/Coding/porfolio_meiduko/src/layouts/Layout.astro?astro&type=script&index=0&lang.ts","const r=document.querySelector(\"html\"),o=document.getElementById(\"selectLang\"),g=navigator.language,s=document.documentElement.lang,m=localStorage.getItem(\"lang\"),e=m??g,d=()=>{o.value=e,s!==e&&(localStorage.setItem(\"lang\",e),window.location.replace(`/${e}`),r?.setAttribute(\"lang\",e))},i=()=>{const t=o.value;t!==s&&(localStorage.lang=t,window.location.reload())},h=()=>{o.addEventListener(\"change\",i)},u=()=>{d(),h()},n=document.querySelector(\"html\"),L=document.querySelector(\"body\"),T=document.getElementById(\"ToggleTheme\"),c=window.matchMedia(\"(prefers-color-scheme: dark)\").matches?\"dark\":\"light\",l=localStorage.getItem(\"theme\"),S=()=>{n?.setAttribute(\"data-theme\",l??c),localStorage.setItem(\"theme\",l??c)},y=()=>{let a=n?.getAttribute(\"data-theme\")===\"dark\"?\"light\":\"dark\";n?.setAttribute(\"data-theme\",a),localStorage.theme=a,L?.classList.add(\"transition-colors\",\"duration-300\")},w=()=>{T?.addEventListener(\"click\",y)},I=()=>{S(),w()};u();I();"]],"assets":["/_astro/index.CWzKkcmd.css","/all-tools-thumbnail.png","/fast-phone-thumbnail.png","/favicon.svg","/meiduko.webp"],"i18n":{"fallbackType":"redirect","strategy":"pathname-prefix-always-no-redirect","locales":["es","en","gl"],"defaultLocale":"es","domainLookupTable":{}},"buildFormat":"directory","checkOrigin":true,"serverIslandNameMap":[],"key":"+ZQQs6v1d5kIWvnkodbNNVt0SyAyFRb1I/yZGIwvVTQ="});
if (manifest.sessionConfig) manifest.sessionConfig.driverModule = null;

export { manifest };
