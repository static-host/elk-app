import { hasInjectionContext, getCurrentInstance, version as version$1, inject, shallowRef, watchEffect, readonly, unref, computed, isRef, ref, watch, nextTick, reactive, onUnmounted, defineComponent, h, Suspense, Transition, useSSRContext, createElementBlock, mergeProps, toRef as toRef$1, Fragment, isVNode as isVNode$1, resolveComponent, withCtx, createVNode, renderSlot, createTextVNode, toDisplayString, openBlock, createBlock, createCommentVNode, resolveDynamicComponent, getCurrentScope, onScopeDispose, customRef, provide, shallowReactive, createApp, onErrorCaptured, onServerPrefetch, effectScope, isReactive, toRaw, defineAsyncComponent, isReadonly, Text, markRaw, toRefs, isShallow } from 'vue';
import { $fetch } from 'ofetch';
import { createHooks } from 'hookable';
import { getContext, executeAsync } from 'unctx';
import { klona } from 'klona';
import { RouterView, RouterLink, useRoute as useRoute$1, createMemoryHistory, createRouter, START_LOCATION, useRouter as useRouter$1 } from 'vue-router';
import { createError as createError$1, sanitizeStatusCode, sendRedirect } from 'h3';
import { withoutProtocol, withQuery, hasProtocol, parseURL, joinURL, parseQuery, withTrailingSlash as withTrailingSlash$1, withoutTrailingSlash as withoutTrailingSlash$1 } from 'ufo';
import require$$0 from 'unenv/runtime/npm/node-fetch';
import require$$1 from 'form-data';
import require$$2 from 'buffer';
import require$$3 from 'unenv/runtime/mock/empty';
import proxy from 'unenv/runtime/mock/proxy';
import qs from 'qs';
import { camelCase, snakeCase } from 'scule';
import { LRUCache } from 'lru-cache';
import { parse, TEXT_NODE, render, h as h$1, DOCUMENT_NODE, ELEMENT_NODE } from 'ultrahtml';
import { findAndReplaceEmojisInText } from '@iconify/utils';
import { decode } from 'tiny-decode';
import { emojiRegEx, emojiFilename, emojiPrefix } from '@iconify-emoji/twemoji';
import { getEmojiMatchesInText } from '@iconify/utils/lib/emoji/replace/find';
import { renderSSRHead } from '@unhead/ssr';
import { composableNames, getActiveHead, createServerHead as createServerHead$1 } from 'unhead';
import { defineHeadPlugin } from '@unhead/shared';
import { CoreWarnCodes, CompileErrorCodes, registerMessageResolver, resolveValue, registerLocaleFallbacker, fallbackWithLocaleChain, setDevToolsHook, createCompileError, DEFAULT_LOCALE as DEFAULT_LOCALE$1, updateFallbackLocale, NUMBER_FORMAT_OPTIONS_KEYS, DATETIME_FORMAT_OPTIONS_KEYS, setFallbackContext, createCoreContext, clearDateTimeFormat, clearNumberFormat, setAdditionalMeta, getFallbackContext, NOT_REOSLVED, parseTranslateArgs, translate, MISSING_RESOLVE_VALUE, parseDateTimeArgs, datetime, parseNumberArgs, number } from '@intlify/core-base';
import { parse as parse$1, serialize } from 'cookie-es';
import isHTTPS from 'is-https';
import FloatingVue from 'floating-vue';
import { ssrRenderAttrs, ssrInterpolate, ssrRenderSlot, ssrRenderComponent, ssrRenderList, ssrRenderStyle, ssrRenderVNode, ssrRenderClass, ssrRenderAttr, ssrIncludeBooleanAttr, ssrRenderSuspense } from 'vue/server-renderer';
import { defu } from 'defu';
import { u as useRuntimeConfig$1 } from '../nitro/node-server.mjs';
import 'node-fetch-native/polyfill';
import 'node:http';
import 'node:https';
import 'destr';
import 'unenv/runtime/fetch/index';
import 'ohash';
import 'unstorage';
import 'radix3';
import 'node:fs';
import 'node:url';
import 'pathe';
import 'xss';
import 'http-graceful-shutdown';

const appConfig =  useRuntimeConfig$1().app;
const baseURL = () => appConfig.baseURL;

const nuxtAppCtx = /* @__PURE__ */ getContext("nuxt-app");
const NuxtPluginIndicator = "__nuxt_plugin";
function createNuxtApp(options) {
  let hydratingCount = 0;
  const nuxtApp = {
    provide: void 0,
    globalName: "nuxt",
    versions: {
      get nuxt() {
        return "3.6.5";
      },
      get vue() {
        return nuxtApp.vueApp.version;
      }
    },
    payload: reactive({
      data: {},
      state: {},
      _errors: {},
      ...{ serverRendered: true }
    }),
    static: {
      data: {}
    },
    runWithContext: (fn) => callWithNuxt(nuxtApp, fn),
    isHydrating: false,
    deferHydration() {
      if (!nuxtApp.isHydrating) {
        return () => {
        };
      }
      hydratingCount++;
      let called = false;
      return () => {
        if (called) {
          return;
        }
        called = true;
        hydratingCount--;
        if (hydratingCount === 0) {
          nuxtApp.isHydrating = false;
          return nuxtApp.callHook("app:suspense:resolve");
        }
      };
    },
    _asyncDataPromises: {},
    _asyncData: {},
    _payloadRevivers: {},
    ...options
  };
  nuxtApp.hooks = createHooks();
  nuxtApp.hook = nuxtApp.hooks.hook;
  {
    async function contextCaller(hooks, args) {
      for (const hook of hooks) {
        await nuxtApp.runWithContext(() => hook(...args));
      }
    }
    nuxtApp.hooks.callHook = (name, ...args) => nuxtApp.hooks.callHookWith(contextCaller, name, ...args);
  }
  nuxtApp.callHook = nuxtApp.hooks.callHook;
  nuxtApp.provide = (name, value) => {
    const $name = "$" + name;
    defineGetter$1(nuxtApp, $name, value);
    defineGetter$1(nuxtApp.vueApp.config.globalProperties, $name, value);
  };
  defineGetter$1(nuxtApp.vueApp, "$nuxt", nuxtApp);
  defineGetter$1(nuxtApp.vueApp.config.globalProperties, "$nuxt", nuxtApp);
  {
    if (nuxtApp.ssrContext) {
      nuxtApp.ssrContext.nuxt = nuxtApp;
      nuxtApp.ssrContext._payloadReducers = {};
      nuxtApp.payload.path = nuxtApp.ssrContext.url;
    }
    nuxtApp.ssrContext = nuxtApp.ssrContext || {};
    if (nuxtApp.ssrContext.payload) {
      Object.assign(nuxtApp.payload, nuxtApp.ssrContext.payload);
    }
    nuxtApp.ssrContext.payload = nuxtApp.payload;
    nuxtApp.ssrContext.config = {
      public: options.ssrContext.runtimeConfig.public,
      app: options.ssrContext.runtimeConfig.app
    };
  }
  const runtimeConfig = options.ssrContext.runtimeConfig ;
  nuxtApp.provide("config", runtimeConfig);
  return nuxtApp;
}
async function applyPlugin(nuxtApp, plugin) {
  if (plugin.hooks) {
    nuxtApp.hooks.addHooks(plugin.hooks);
  }
  if (typeof plugin === "function") {
    const { provide } = await nuxtApp.runWithContext(() => plugin(nuxtApp)) || {};
    if (provide && typeof provide === "object") {
      for (const key in provide) {
        nuxtApp.provide(key, provide[key]);
      }
    }
  }
}
async function applyPlugins(nuxtApp, plugins) {
  const parallels = [];
  const errors = [];
  for (const plugin of plugins) {
    const promise = applyPlugin(nuxtApp, plugin);
    if (plugin.parallel) {
      parallels.push(promise.catch((e) => errors.push(e)));
    } else {
      await promise;
    }
  }
  await Promise.all(parallels);
  if (errors.length) {
    throw errors[0];
  }
}
/*! @__NO_SIDE_EFFECTS__ */
function  defineNuxtPlugin(plugin) {
  if (typeof plugin === "function") {
    return plugin;
  }
  delete plugin.name;
  return Object.assign(plugin.setup || (() => {
  }), plugin, { [NuxtPluginIndicator]: true });
}
function callWithNuxt(nuxt, setup, args) {
  const fn = () => args ? setup(...args) : setup();
  {
    return nuxt.vueApp.runWithContext(() => nuxtAppCtx.callAsync(nuxt, fn));
  }
}
/*! @__NO_SIDE_EFFECTS__ */
function useNuxtApp() {
  let nuxtAppInstance;
  if (hasInjectionContext()) {
    nuxtAppInstance = getCurrentInstance()?.appContext.app.$nuxt;
  }
  nuxtAppInstance = nuxtAppInstance || nuxtAppCtx.tryUse();
  if (!nuxtAppInstance) {
    {
      throw new Error("[nuxt] instance unavailable");
    }
  }
  return nuxtAppInstance;
}
/*! @__NO_SIDE_EFFECTS__ */
function  useRuntimeConfig() {
  return useNuxtApp().$config;
}
function defineGetter$1(obj, key, val) {
  Object.defineProperty(obj, key, { get: () => val });
}

function resolveUnref$1(r) {
  return typeof r === "function" ? r() : unref(r);
}
function resolveUnrefHeadInput(ref, lastKey = "") {
  if (ref instanceof Promise)
    return ref;
  const root = resolveUnref$1(ref);
  if (!ref || !root)
    return root;
  if (Array.isArray(root))
    return root.map((r) => resolveUnrefHeadInput(r, lastKey));
  if (typeof root === "object") {
    return Object.fromEntries(
      Object.entries(root).map(([k, v]) => {
        if (k === "titleTemplate" || k.startsWith("on"))
          return [k, unref(v)];
        return [k, resolveUnrefHeadInput(v, k)];
      })
    );
  }
  return root;
}

const Vue3 = version$1.startsWith("3");

const headSymbol = "usehead";
function injectHead() {
  return getCurrentInstance() && inject(headSymbol) || getActiveHead();
}
function vueInstall(head) {
  const plugin = {
    install(app) {
      if (Vue3) {
        app.config.globalProperties.$unhead = head;
        app.config.globalProperties.$head = head;
        app.provide(headSymbol, head);
      }
    }
  };
  return plugin.install;
}
function createServerHead(options = {}) {
  const head = createServerHead$1({
    ...options,
    plugins: [
      VueReactiveUseHeadPlugin(),
      ...options?.plugins || []
    ]
  });
  head.install = vueInstall(head);
  return head;
}

function VueReactiveUseHeadPlugin() {
  return defineHeadPlugin({
    hooks: {
      "entries:resolve": function(ctx) {
        for (const entry of ctx.entries)
          entry.resolvedInput = resolveUnrefHeadInput(entry.input);
      }
    }
  });
}

function clientUseHead(input, options = {}) {
  const head = injectHead();
  const deactivated = ref(false);
  const resolvedInput = ref({});
  watchEffect(() => {
    resolvedInput.value = deactivated.value ? {} : resolveUnrefHeadInput(input);
  });
  const entry = head.push(resolvedInput.value, options);
  watch(resolvedInput, (e) => {
    entry.patch(e);
  });
  getCurrentInstance();
  return entry;
}

function serverUseHead(input, options = {}) {
  const head = injectHead();
  return head.push(input, options);
}

function useHead(input, options = {}) {
  const head = injectHead();
  if (head) {
    const isBrowser = !!head.resolvedOptions?.document;
    if (options.mode === "server" && isBrowser || options.mode === "client" && !isBrowser)
      return;
    return isBrowser ? clientUseHead(input, options) : serverUseHead(input, options);
  }
}

const coreComposableNames = [
  "injectHead"
];
({
  "@unhead/vue": [...coreComposableNames, ...composableNames]
});

const useStateKeyPrefix = "$s";
function useState(...args) {
  const autoKey = typeof args[args.length - 1] === "string" ? args.pop() : void 0;
  if (typeof args[0] !== "string") {
    args.unshift(autoKey);
  }
  const [_key, init] = args;
  if (!_key || typeof _key !== "string") {
    throw new TypeError("[nuxt] [useState] key must be a string: " + _key);
  }
  if (init !== void 0 && typeof init !== "function") {
    throw new Error("[nuxt] [useState] init must be a function: " + init);
  }
  const key = useStateKeyPrefix + _key;
  const nuxt = useNuxtApp();
  const state = toRef$1(nuxt.payload.state, key);
  if (state.value === void 0 && init) {
    const initialValue = init();
    if (isRef(initialValue)) {
      nuxt.payload.state[key] = initialValue;
      return initialValue;
    }
    state.value = initialValue;
  }
  return state;
}

const LayoutMetaSymbol = Symbol("layout-meta");
const PageRouteSymbol = Symbol("route");

const useRouter = () => {
  return useNuxtApp()?.$router;
};
const useRoute = () => {
  if (hasInjectionContext()) {
    return inject(PageRouteSymbol, useNuxtApp()._route);
  }
  return useNuxtApp()._route;
};
/*! @__NO_SIDE_EFFECTS__ */
function  defineNuxtRouteMiddleware(middleware) {
  return middleware;
}
const addRouteMiddleware = (name, middleware, options = {}) => {
  const nuxtApp = useNuxtApp();
  const global = options.global || typeof name !== "string";
  const mw = typeof name !== "string" ? name : middleware;
  if (!mw) {
    console.warn("[nuxt] No route middleware passed to `addRouteMiddleware`.", name);
    return;
  }
  if (global) {
    nuxtApp._middleware.global.push(mw);
  } else {
    nuxtApp._middleware.named[name] = mw;
  }
};
const isProcessingMiddleware = () => {
  try {
    if (useNuxtApp()._processingMiddleware) {
      return true;
    }
  } catch {
    return true;
  }
  return false;
};
const navigateTo = (to, options) => {
  if (!to) {
    to = "/";
  }
  const toPath = typeof to === "string" ? to : withQuery(to.path || "/", to.query || {}) + (to.hash || "");
  if (options?.open) {
    return Promise.resolve();
  }
  const isExternal = options?.external || hasProtocol(toPath, { acceptRelative: true });
  if (isExternal && !options?.external) {
    throw new Error("Navigating to external URL is not allowed by default. Use `navigateTo (url, { external: true })`.");
  }
  if (isExternal && parseURL(toPath).protocol === "script:") {
    throw new Error("Cannot navigate to an URL with script protocol.");
  }
  const inMiddleware = isProcessingMiddleware();
  const router = useRouter();
  const nuxtApp = useNuxtApp();
  {
    if (nuxtApp.ssrContext) {
      const fullPath = typeof to === "string" || isExternal ? toPath : router.resolve(to).fullPath || "/";
      const location2 = isExternal ? toPath : joinURL( useRuntimeConfig().app.baseURL, fullPath);
      async function redirect(response) {
        await nuxtApp.callHook("app:redirected");
        const encodedLoc = location2.replace(/"/g, "%22");
        nuxtApp.ssrContext._renderResponse = {
          statusCode: sanitizeStatusCode(options?.redirectCode || 302, 302),
          body: `<!DOCTYPE html><html><head><meta http-equiv="refresh" content="0; url=${encodedLoc}"></head></html>`,
          headers: { location: location2 }
        };
        return response;
      }
      if (!isExternal && inMiddleware) {
        router.afterEach((final) => final.fullPath === fullPath ? redirect(false) : void 0);
        return to;
      }
      return redirect(!inMiddleware ? void 0 : (
        /* abort route navigation */
        false
      ));
    }
  }
  if (isExternal) {
    if (options?.replace) {
      location.replace(toPath);
    } else {
      location.href = toPath;
    }
    if (inMiddleware) {
      if (!nuxtApp.isHydrating) {
        return false;
      }
      return new Promise(() => {
      });
    }
    return Promise.resolve();
  }
  return options?.replace ? router.replace(to) : router.push(to);
};

const useError = () => toRef$1(useNuxtApp().payload, "error");
const showError = (_err) => {
  const err = createError(_err);
  try {
    const nuxtApp = useNuxtApp();
    const error = useError();
    if (false) ;
    error.value = error.value || err;
  } catch {
    throw err;
  }
  return err;
};
const clearError = async (options = {}) => {
  const nuxtApp = useNuxtApp();
  const error = useError();
  nuxtApp.callHook("app:error:cleared", options);
  if (options.redirect) {
    await useRouter().replace(options.redirect);
  }
  error.value = null;
};
const isNuxtError = (err) => !!(err && typeof err === "object" && "__nuxt_error" in err);
const createError = (err) => {
  const _err = createError$1(err);
  _err.__nuxt_error = true;
  return _err;
};

function useRequestHeaders(include) {
  const headers = useNuxtApp().ssrContext?.event.node.req.headers ?? {};
  if (!include) {
    return headers;
  }
  return Object.fromEntries(include.map((key) => key.toLowerCase()).filter((key) => headers[key]).map((key) => [key, headers[key]]));
}
function useRequestEvent(nuxtApp = useNuxtApp()) {
  return nuxtApp.ssrContext?.event;
}

const appKeepalive = true;

const appHead = {"meta":[{"name":"viewport","content":"width=device-width,initial-scale=1,viewport-fit=cover"},{"charset":"utf-8"},{"name":"apple-mobile-web-app-status-bar-style","content":"black-translucent"},{"property":"og:title","content":"Elk"},{"property":"og:description","content":"A nimble Mastodon web client"},{"property":"og:type","content":"website"},{"property":"og:image","content":"https://elk.zone/elk-og.png"},{"property":"og:image:width","content":"3800"},{"property":"og:image:height","content":"1900"},{"property":"og:site_name","content":"Elk"},{"property":"twitter:site","content":"@elk_zone"},{"property":"twitter:card","content":"summary_large_image"}],"link":[{"rel":"icon","href":"/favicon.ico","sizes":"any"},{"rel":"icon","type":"image/svg+xml","href":"/logo.svg"},{"rel":"apple-touch-icon","href":"/apple-touch-icon.png"}],"style":[],"script":[],"noscript":[],"viewport":"width=device-width,initial-scale=1,viewport-fit=cover","bodyAttrs":{"class":"overflow-x-hidden"}};

const appLayoutTransition = false;

const appPageTransition = false;

function definePayloadReducer(name, reduce) {
  {
    useNuxtApp().ssrContext._payloadReducers[name] = reduce;
  }
}

const firstNonUndefined = (...args) => args.find((arg) => arg !== void 0);
const DEFAULT_EXTERNAL_REL_ATTRIBUTE = "noopener noreferrer";
/*! @__NO_SIDE_EFFECTS__ */
function  defineNuxtLink(options) {
  const componentName = options.componentName || "NuxtLink";
  const resolveTrailingSlashBehavior = (to, resolve) => {
    if (!to || options.trailingSlash !== "append" && options.trailingSlash !== "remove") {
      return to;
    }
    const normalizeTrailingSlash = options.trailingSlash === "append" ? withTrailingSlash$1 : withoutTrailingSlash$1;
    if (typeof to === "string") {
      return normalizeTrailingSlash(to, true);
    }
    const path = "path" in to ? to.path : resolve(to).path;
    return {
      ...to,
      name: void 0,
      // named routes would otherwise always override trailing slash behavior
      path: normalizeTrailingSlash(path, true)
    };
  };
  return /* #__PURE__ */ defineComponent({
    name: componentName,
    props: {
      // Routing
      to: {
        type: [String, Object],
        default: void 0,
        required: false
      },
      href: {
        type: [String, Object],
        default: void 0,
        required: false
      },
      // Attributes
      target: {
        type: String,
        default: void 0,
        required: false
      },
      rel: {
        type: String,
        default: void 0,
        required: false
      },
      noRel: {
        type: Boolean,
        default: void 0,
        required: false
      },
      // Prefetching
      prefetch: {
        type: Boolean,
        default: void 0,
        required: false
      },
      noPrefetch: {
        type: Boolean,
        default: void 0,
        required: false
      },
      // Styling
      activeClass: {
        type: String,
        default: void 0,
        required: false
      },
      exactActiveClass: {
        type: String,
        default: void 0,
        required: false
      },
      prefetchedClass: {
        type: String,
        default: void 0,
        required: false
      },
      // Vue Router's `<RouterLink>` additional props
      replace: {
        type: Boolean,
        default: void 0,
        required: false
      },
      ariaCurrentValue: {
        type: String,
        default: void 0,
        required: false
      },
      // Edge cases handling
      external: {
        type: Boolean,
        default: void 0,
        required: false
      },
      // Slot API
      custom: {
        type: Boolean,
        default: void 0,
        required: false
      }
    },
    setup(props, { slots }) {
      const router = useRouter();
      const to = computed(() => {
        const path = props.to || props.href || "";
        return resolveTrailingSlashBehavior(path, router.resolve);
      });
      const isExternal = computed(() => {
        if (props.external) {
          return true;
        }
        if (props.target && props.target !== "_self") {
          return true;
        }
        if (typeof to.value === "object") {
          return false;
        }
        return to.value === "" || hasProtocol(to.value, { acceptRelative: true });
      });
      const prefetched = ref(false);
      const el = void 0 ;
      const elRef = void 0 ;
      return () => {
        if (!isExternal.value) {
          const routerLinkProps = {
            ref: elRef,
            to: to.value,
            activeClass: props.activeClass || options.activeClass,
            exactActiveClass: props.exactActiveClass || options.exactActiveClass,
            replace: props.replace,
            ariaCurrentValue: props.ariaCurrentValue,
            custom: props.custom
          };
          if (!props.custom) {
            if (prefetched.value) {
              routerLinkProps.class = props.prefetchedClass || options.prefetchedClass;
            }
            routerLinkProps.rel = props.rel;
          }
          return h(
            resolveComponent("RouterLink"),
            routerLinkProps,
            slots.default
          );
        }
        const href = typeof to.value === "object" ? router.resolve(to.value)?.href ?? null : to.value || null;
        const target = props.target || null;
        const rel = props.noRel ? null : firstNonUndefined(props.rel, options.externalRelAttribute, href ? DEFAULT_EXTERNAL_REL_ATTRIBUTE : "") || null;
        const navigate = () => navigateTo(href, { replace: props.replace });
        if (props.custom) {
          if (!slots.default) {
            return null;
          }
          return slots.default({
            href,
            navigate,
            get route() {
              if (!href) {
                return void 0;
              }
              const url = parseURL(href);
              return {
                path: url.pathname,
                fullPath: url.pathname,
                get query() {
                  return parseQuery(url.search);
                },
                hash: url.hash,
                // stub properties for compat with vue-router
                params: {},
                name: void 0,
                matched: [],
                redirectedFrom: void 0,
                meta: {},
                href
              };
            },
            rel,
            target,
            isExternal: isExternal.value,
            isActive: false,
            isExactActive: false
          });
        }
        return h("a", { ref: el, href, rel, target }, slots.default?.());
      };
    }
  });
}
const __nuxt_component_0$1 = /* #__PURE__ */ defineNuxtLink({ componentName: "NuxtLink" });

function isObject$3(value) {
  return value !== null && typeof value === "object";
}
function _defu(baseObject, defaults, namespace = ".", merger) {
  if (!isObject$3(defaults)) {
    return _defu(baseObject, {}, namespace, merger);
  }
  const object = Object.assign({}, defaults);
  for (const key in baseObject) {
    if (key === "__proto__" || key === "constructor") {
      continue;
    }
    const value = baseObject[key];
    if (value === null || value === void 0) {
      continue;
    }
    if (merger && merger(object, key, value, namespace)) {
      continue;
    }
    if (Array.isArray(value) && Array.isArray(object[key])) {
      object[key] = [...value, ...object[key]];
    } else if (isObject$3(value) && isObject$3(object[key])) {
      object[key] = _defu(
        value,
        object[key],
        (namespace ? `${namespace}.` : "") + key.toString(),
        merger
      );
    } else {
      object[key] = value;
    }
  }
  return object;
}
function createDefu(merger) {
  return (...arguments_) => (
    // eslint-disable-next-line unicorn/no-array-reduce
    arguments_.reduce((p, c) => _defu(p, c, "", merger), {})
  );
}
const defuFn = createDefu((object, key, currentValue) => {
  if (typeof object[key] !== "undefined" && typeof currentValue === "function") {
    object[key] = currentValue(object[key]);
    return true;
  }
});

const inlineConfig = {
  "storage": {
    "driver": ""
  },
  "env": "canary",
  "buildInfo": {
    "version": "0.10.1",
    "time": 1692064081520,
    "commit": "bd7436e5d2f27e87729a9e115759620cc78a883c",
    "shortCommit": "bd7436e",
    "branch": "main",
    "env": "canary"
  },
  "pwaEnabled": true
};



const __appConfig = /* #__PURE__ */ defuFn(inlineConfig);

function useAppConfig() {
  const nuxtApp = useNuxtApp();
  if (!nuxtApp._appConfig) {
    nuxtApp._appConfig = klona(__appConfig) ;
  }
  return nuxtApp._appConfig;
}

const path_LH0ulmb5c1 = /* #__PURE__ */ defineNuxtPlugin({
  order: -40,
  setup: (nuxtApp) => {
    delete nuxtApp.payload.path;
  }
});

const __nuxt_page_meta$w = {
      middleware: async (to) => {
        const permalink = Array.isArray(to.params.permalink) ? to.params.permalink.join("/") : to.params.permalink;
        if (hasProtocol(permalink)) {
          const { host, pathname } = parseURL(permalink);
          if (host)
            return `/${host}${pathname}`;
        }
        return false;
      }
    };

const __nuxt_page_meta$v = {
      name: "status",
      key: (route2) => route2.path,
      // GoToSocial
      alias: ["/:server?/@:account/statuses/:status"]
    };

const __nuxt_page_meta$u = { name: "account-followers" };

const __nuxt_page_meta$t = { name: "account-following" };

const __nuxt_page_meta$s = { name: "account-index" };

const __nuxt_page_meta$r = { name: "account-media" };

const __nuxt_page_meta$q = { name: "account-replies" };

const DEFAULT_POST_CHARS_LIMIT = 500;
const DEFAULT_FONT_SIZE = "15px";
const STORAGE_KEY_USERS = "elk-users";
const STORAGE_KEY_SERVERS = "elk-servers";
const STORAGE_KEY_NODES = "elk-nodes";
const STORAGE_KEY_CURRENT_USER_HANDLE = "elk-current-user-handle";
const STORAGE_KEY_FIRST_VISIT = "elk-first-visit";
const STORAGE_KEY_SETTINGS = "elk-settings";
const STORAGE_KEY_HIDE_EXPLORE_POSTS_TIPS = "elk-hide-explore-posts-tips";
const STORAGE_KEY_HIDE_EXPLORE_NEWS_TIPS = "elk-hide-explore-news-tips";
const STORAGE_KEY_HIDE_EXPLORE_TAGS_TIPS = "elk-hide-explore-tags-tips";
const STORAGE_KEY_NOTIFICATION = "elk-notification";
const STORAGE_KEY_NOTIFICATION_POLICY = "elk-notification-policy";

const isVue2 = false;
const isVue3 = true;

var __defProp$b = Object.defineProperty;
var __defProps$8 = Object.defineProperties;
var __getOwnPropDescs$8 = Object.getOwnPropertyDescriptors;
var __getOwnPropSymbols$d = Object.getOwnPropertySymbols;
var __hasOwnProp$d = Object.prototype.hasOwnProperty;
var __propIsEnum$d = Object.prototype.propertyIsEnumerable;
var __defNormalProp$b = (obj, key, value) => key in obj ? __defProp$b(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __spreadValues$b = (a, b) => {
  for (var prop in b || (b = {}))
    if (__hasOwnProp$d.call(b, prop))
      __defNormalProp$b(a, prop, b[prop]);
  if (__getOwnPropSymbols$d)
    for (var prop of __getOwnPropSymbols$d(b)) {
      if (__propIsEnum$d.call(b, prop))
        __defNormalProp$b(a, prop, b[prop]);
    }
  return a;
};
var __spreadProps$8 = (a, b) => __defProps$8(a, __getOwnPropDescs$8(b));
function computedEager(fn, options) {
  var _a;
  const result = shallowRef();
  watchEffect(() => {
    result.value = fn();
  }, __spreadProps$8(__spreadValues$b({}, options), {
    flush: (_a = options == null ? void 0 : options.flush) != null ? _a : "sync"
  }));
  return readonly(result);
}

function computedWithControl(source, fn) {
  let v = void 0;
  let track;
  let trigger;
  const dirty = ref(true);
  const update = () => {
    dirty.value = true;
    trigger();
  };
  watch(source, update, { flush: "sync" });
  const get = typeof fn === "function" ? fn : fn.get;
  const set = typeof fn === "function" ? void 0 : fn.set;
  const result = customRef((_track, _trigger) => {
    track = _track;
    trigger = _trigger;
    return {
      get() {
        if (dirty.value) {
          v = get();
          dirty.value = false;
        }
        track();
        return v;
      },
      set(v2) {
        set == null ? void 0 : set(v2);
      }
    };
  });
  if (Object.isExtensible(result))
    result.trigger = update;
  return result;
}

function tryOnScopeDispose(fn) {
  if (getCurrentScope()) {
    onScopeDispose(fn);
    return true;
  }
  return false;
}

function toValue(r) {
  return typeof r === "function" ? r() : unref(r);
}
const resolveUnref = toValue;

const isClient = "undefined" !== "undefined";
const notNullish = (val) => val != null;
const clamp = (n, min, max) => Math.min(max, Math.max(min, n));
const noop$2 = () => {
};

function createFilterWrapper(filter, fn) {
  function wrapper(...args) {
    return new Promise((resolve, reject) => {
      Promise.resolve(filter(() => fn.apply(this, args), { fn, thisArg: this, args })).then(resolve).catch(reject);
    });
  }
  return wrapper;
}
const bypassFilter = (invoke) => {
  return invoke();
};
function debounceFilter(ms, options = {}) {
  let timer;
  let maxTimer;
  let lastRejector = noop$2;
  const _clearTimeout = (timer2) => {
    clearTimeout(timer2);
    lastRejector();
    lastRejector = noop$2;
  };
  const filter = (invoke) => {
    const duration = toValue(ms);
    const maxDuration = toValue(options.maxWait);
    if (timer)
      _clearTimeout(timer);
    if (duration <= 0 || maxDuration !== void 0 && maxDuration <= 0) {
      if (maxTimer) {
        _clearTimeout(maxTimer);
        maxTimer = null;
      }
      return Promise.resolve(invoke());
    }
    return new Promise((resolve, reject) => {
      lastRejector = options.rejectOnCancel ? reject : resolve;
      if (maxDuration && !maxTimer) {
        maxTimer = setTimeout(() => {
          if (timer)
            _clearTimeout(timer);
          maxTimer = null;
          resolve(invoke());
        }, maxDuration);
      }
      timer = setTimeout(() => {
        if (maxTimer)
          _clearTimeout(maxTimer);
        maxTimer = null;
        resolve(invoke());
      }, duration);
    });
  };
  return filter;
}
function pausableFilter(extendFilter = bypassFilter) {
  const isActive = ref(true);
  function pause() {
    isActive.value = false;
  }
  function resume() {
    isActive.value = true;
  }
  const eventFilter = (...args) => {
    if (isActive.value)
      extendFilter(...args);
  };
  return { isActive: readonly(isActive), pause, resume, eventFilter };
}

function promiseTimeout(ms, throwOnTimeout = false, reason = "Timeout") {
  return new Promise((resolve, reject) => {
    if (throwOnTimeout)
      setTimeout(() => reject(reason), ms);
    else
      setTimeout(resolve, ms);
  });
}
function invoke(fn) {
  return fn();
}
function increaseWithUnit(target, delta) {
  var _a;
  if (typeof target === "number")
    return target + delta;
  const value = ((_a = target.match(/^-?[0-9]+\.?[0-9]*/)) == null ? void 0 : _a[0]) || "";
  const unit = target.slice(value.length);
  const result = Number.parseFloat(value) + delta;
  if (Number.isNaN(result))
    return target;
  return result + unit;
}

function toRef(...args) {
  if (args.length !== 1)
    return toRef$1(...args);
  const r = args[0];
  return typeof r === "function" ? readonly(customRef(() => ({ get: r, set: noop$2 }))) : ref(r);
}

function tryOnBeforeUnmount(fn) {
  if (getCurrentInstance())
      ;
}

function tryOnMounted(fn, sync = true) {
  if (getCurrentInstance())
      ;
  else if (sync)
    fn();
  else
    nextTick(fn);
}

function createUntil(r, isNot = false) {
  function toMatch(condition, { flush = "sync", deep = false, timeout, throwOnTimeout } = {}) {
    let stop = null;
    const watcher = new Promise((resolve) => {
      stop = watch(
        r,
        (v) => {
          if (condition(v) !== isNot) {
            stop == null ? void 0 : stop();
            resolve(v);
          }
        },
        {
          flush,
          deep,
          immediate: true
        }
      );
    });
    const promises = [watcher];
    if (timeout != null) {
      promises.push(
        promiseTimeout(timeout, throwOnTimeout).then(() => toValue(r)).finally(() => stop == null ? void 0 : stop())
      );
    }
    return Promise.race(promises);
  }
  function toBe(value, options) {
    if (!isRef(value))
      return toMatch((v) => v === value, options);
    const { flush = "sync", deep = false, timeout, throwOnTimeout } = options != null ? options : {};
    let stop = null;
    const watcher = new Promise((resolve) => {
      stop = watch(
        [r, value],
        ([v1, v2]) => {
          if (isNot !== (v1 === v2)) {
            stop == null ? void 0 : stop();
            resolve(v1);
          }
        },
        {
          flush,
          deep,
          immediate: true
        }
      );
    });
    const promises = [watcher];
    if (timeout != null) {
      promises.push(
        promiseTimeout(timeout, throwOnTimeout).then(() => toValue(r)).finally(() => {
          stop == null ? void 0 : stop();
          return toValue(r);
        })
      );
    }
    return Promise.race(promises);
  }
  function toBeTruthy(options) {
    return toMatch((v) => Boolean(v), options);
  }
  function toBeNull(options) {
    return toBe(null, options);
  }
  function toBeUndefined(options) {
    return toBe(void 0, options);
  }
  function toBeNaN(options) {
    return toMatch(Number.isNaN, options);
  }
  function toContains(value, options) {
    return toMatch((v) => {
      const array = Array.from(v);
      return array.includes(value) || array.includes(toValue(value));
    }, options);
  }
  function changed(options) {
    return changedTimes(1, options);
  }
  function changedTimes(n = 1, options) {
    let count = -1;
    return toMatch(() => {
      count += 1;
      return count >= n;
    }, options);
  }
  if (Array.isArray(toValue(r))) {
    const instance = {
      toMatch,
      toContains,
      changed,
      changedTimes,
      get not() {
        return createUntil(r, !isNot);
      }
    };
    return instance;
  } else {
    const instance = {
      toMatch,
      toBe,
      toBeTruthy,
      toBeNull,
      toBeNaN,
      toBeUndefined,
      changed,
      changedTimes,
      get not() {
        return createUntil(r, !isNot);
      }
    };
    return instance;
  }
}
function until(r) {
  return createUntil(r);
}

function useIntervalFn(cb, interval = 1e3, options = {}) {
  const {
    immediate = true,
    immediateCallback = false
  } = options;
  let timer = null;
  const isActive = ref(false);
  function clean() {
    if (timer) {
      clearInterval(timer);
      timer = null;
    }
  }
  function pause() {
    isActive.value = false;
    clean();
  }
  function resume() {
    const intervalValue = toValue(interval);
    if (intervalValue <= 0)
      return;
    isActive.value = true;
    if (immediateCallback)
      cb();
    clean();
    timer = setInterval(cb, intervalValue);
  }
  if (immediate && isClient)
    resume();
  if (isRef(interval) || typeof interval === "function") {
    const stopWatch = watch(interval, () => {
      if (isActive.value && isClient)
        resume();
    });
    tryOnScopeDispose(stopWatch);
  }
  tryOnScopeDispose(pause);
  return {
    isActive,
    pause,
    resume
  };
}

function useTimeoutFn(cb, interval, options = {}) {
  const {
    immediate = true
  } = options;
  const isPending = ref(false);
  let timer = null;
  function clear() {
    if (timer) {
      clearTimeout(timer);
      timer = null;
    }
  }
  function stop() {
    isPending.value = false;
    clear();
  }
  function start(...args) {
    clear();
    isPending.value = true;
    timer = setTimeout(() => {
      isPending.value = false;
      timer = null;
      cb(...args);
    }, toValue(interval));
  }
  if (immediate) {
    isPending.value = true;
  }
  tryOnScopeDispose(stop);
  return {
    isPending: readonly(isPending),
    start,
    stop
  };
}

var __defProp$7$1 = Object.defineProperty;
var __getOwnPropSymbols$9 = Object.getOwnPropertySymbols;
var __hasOwnProp$9 = Object.prototype.hasOwnProperty;
var __propIsEnum$9 = Object.prototype.propertyIsEnumerable;
var __defNormalProp$7$1 = (obj, key, value) => key in obj ? __defProp$7$1(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __spreadValues$7$1 = (a, b) => {
  for (var prop in b || (b = {}))
    if (__hasOwnProp$9.call(b, prop))
      __defNormalProp$7$1(a, prop, b[prop]);
  if (__getOwnPropSymbols$9)
    for (var prop of __getOwnPropSymbols$9(b)) {
      if (__propIsEnum$9.call(b, prop))
        __defNormalProp$7$1(a, prop, b[prop]);
    }
  return a;
};
function useTimeout(interval = 1e3, options = {}) {
  const {
    controls: exposeControls = false,
    callback
  } = options;
  const controls = useTimeoutFn(
    callback != null ? callback : noop$2,
    interval,
    options
  );
  const ready = computed(() => !controls.isPending.value);
  if (exposeControls) {
    return __spreadValues$7$1({
      ready
    }, controls);
  } else {
    return ready;
  }
}

function useToggle(initialValue = false, options = {}) {
  const {
    truthyValue = true,
    falsyValue = false
  } = options;
  const valueIsRef = isRef(initialValue);
  const _value = ref(initialValue);
  function toggle(value) {
    if (arguments.length) {
      _value.value = value;
      return _value.value;
    } else {
      const truthy = toValue(truthyValue);
      _value.value = _value.value === truthy ? toValue(falsyValue) : truthy;
      return _value.value;
    }
  }
  if (valueIsRef)
    return toggle;
  else
    return [_value, toggle];
}

var __getOwnPropSymbols$8$1 = Object.getOwnPropertySymbols;
var __hasOwnProp$8$1 = Object.prototype.hasOwnProperty;
var __propIsEnum$8$1 = Object.prototype.propertyIsEnumerable;
var __objRest$5 = (source, exclude) => {
  var target = {};
  for (var prop in source)
    if (__hasOwnProp$8$1.call(source, prop) && exclude.indexOf(prop) < 0)
      target[prop] = source[prop];
  if (source != null && __getOwnPropSymbols$8$1)
    for (var prop of __getOwnPropSymbols$8$1(source)) {
      if (exclude.indexOf(prop) < 0 && __propIsEnum$8$1.call(source, prop))
        target[prop] = source[prop];
    }
  return target;
};
function watchWithFilter(source, cb, options = {}) {
  const _a = options, {
    eventFilter = bypassFilter
  } = _a, watchOptions = __objRest$5(_a, [
    "eventFilter"
  ]);
  return watch(
    source,
    createFilterWrapper(
      eventFilter,
      cb
    ),
    watchOptions
  );
}

var __defProp$6 = Object.defineProperty;
var __defProps$6 = Object.defineProperties;
var __getOwnPropDescs$6 = Object.getOwnPropertyDescriptors;
var __getOwnPropSymbols$6 = Object.getOwnPropertySymbols;
var __hasOwnProp$6 = Object.prototype.hasOwnProperty;
var __propIsEnum$6 = Object.prototype.propertyIsEnumerable;
var __defNormalProp$6 = (obj, key, value) => key in obj ? __defProp$6(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __spreadValues$6 = (a, b) => {
  for (var prop in b || (b = {}))
    if (__hasOwnProp$6.call(b, prop))
      __defNormalProp$6(a, prop, b[prop]);
  if (__getOwnPropSymbols$6)
    for (var prop of __getOwnPropSymbols$6(b)) {
      if (__propIsEnum$6.call(b, prop))
        __defNormalProp$6(a, prop, b[prop]);
    }
  return a;
};
var __spreadProps$6 = (a, b) => __defProps$6(a, __getOwnPropDescs$6(b));
var __objRest$3 = (source, exclude) => {
  var target = {};
  for (var prop in source)
    if (__hasOwnProp$6.call(source, prop) && exclude.indexOf(prop) < 0)
      target[prop] = source[prop];
  if (source != null && __getOwnPropSymbols$6)
    for (var prop of __getOwnPropSymbols$6(source)) {
      if (exclude.indexOf(prop) < 0 && __propIsEnum$6.call(source, prop))
        target[prop] = source[prop];
    }
  return target;
};
function watchDebounced(source, cb, options = {}) {
  const _a = options, {
    debounce = 0,
    maxWait = void 0
  } = _a, watchOptions = __objRest$3(_a, [
    "debounce",
    "maxWait"
  ]);
  return watchWithFilter(
    source,
    cb,
    __spreadProps$6(__spreadValues$6({}, watchOptions), {
      eventFilter: debounceFilter(debounce, { maxWait })
    })
  );
}

function watchOnce(source, cb, options) {
  const stop = watch(source, (...args) => {
    nextTick(() => stop());
    return cb(...args);
  }, options);
}

var __defProp$2$1 = Object.defineProperty;
var __defProps$2 = Object.defineProperties;
var __getOwnPropDescs$2 = Object.getOwnPropertyDescriptors;
var __getOwnPropSymbols$2$1 = Object.getOwnPropertySymbols;
var __hasOwnProp$2$1 = Object.prototype.hasOwnProperty;
var __propIsEnum$2$1 = Object.prototype.propertyIsEnumerable;
var __defNormalProp$2$1 = (obj, key, value) => key in obj ? __defProp$2$1(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __spreadValues$2$1 = (a, b) => {
  for (var prop in b || (b = {}))
    if (__hasOwnProp$2$1.call(b, prop))
      __defNormalProp$2$1(a, prop, b[prop]);
  if (__getOwnPropSymbols$2$1)
    for (var prop of __getOwnPropSymbols$2$1(b)) {
      if (__propIsEnum$2$1.call(b, prop))
        __defNormalProp$2$1(a, prop, b[prop]);
    }
  return a;
};
var __spreadProps$2 = (a, b) => __defProps$2(a, __getOwnPropDescs$2(b));
var __objRest$1 = (source, exclude) => {
  var target = {};
  for (var prop in source)
    if (__hasOwnProp$2$1.call(source, prop) && exclude.indexOf(prop) < 0)
      target[prop] = source[prop];
  if (source != null && __getOwnPropSymbols$2$1)
    for (var prop of __getOwnPropSymbols$2$1(source)) {
      if (exclude.indexOf(prop) < 0 && __propIsEnum$2$1.call(source, prop))
        target[prop] = source[prop];
    }
  return target;
};
function watchPausable(source, cb, options = {}) {
  const _a = options, {
    eventFilter: filter
  } = _a, watchOptions = __objRest$1(_a, [
    "eventFilter"
  ]);
  const { eventFilter, pause, resume, isActive } = pausableFilter(filter);
  const stop = watchWithFilter(
    source,
    cb,
    __spreadProps$2(__spreadValues$2$1({}, watchOptions), {
      eventFilter
    })
  );
  return { stop, pause, resume, isActive };
}

function whenever(source, cb, options) {
  return watch(
    source,
    (v, ov, onInvalidate) => {
      if (v)
        cb(v, ov, onInvalidate);
    },
    options
  );
}

function unrefElement(elRef) {
  var _a;
  const plain = toValue(elRef);
  return (_a = plain == null ? void 0 : plain.$el) != null ? _a : plain;
}

const defaultWindow = void 0;
const defaultNavigator = void 0;

function useEventListener(...args) {
  let target;
  let events;
  let listeners;
  let options;
  if (typeof args[0] === "string" || Array.isArray(args[0])) {
    [events, listeners, options] = args;
    target = defaultWindow;
  } else {
    [target, events, listeners, options] = args;
  }
  if (!target)
    return noop$2;
  if (!Array.isArray(events))
    events = [events];
  if (!Array.isArray(listeners))
    listeners = [listeners];
  const cleanups = [];
  const cleanup = () => {
    cleanups.forEach((fn) => fn());
    cleanups.length = 0;
  };
  const register = (el, event, listener, options2) => {
    el.addEventListener(event, listener, options2);
    return () => el.removeEventListener(event, listener, options2);
  };
  const stopWatch = watch(
    () => [unrefElement(target), toValue(options)],
    ([el, options2]) => {
      cleanup();
      if (!el)
        return;
      cleanups.push(
        ...events.flatMap((event) => {
          return listeners.map((listener) => register(el, event, listener, options2));
        })
      );
    },
    { immediate: true, flush: "post" }
  );
  const stop = () => {
    stopWatch();
    cleanup();
  };
  tryOnScopeDispose(stop);
  return stop;
}
function onClickOutside(target, handler, options = {}) {
  const { window = defaultWindow, ignore = [], capture = true, detectIframe = false } = options;
  if (!window)
    return;
  let shouldListen = true;
  const shouldIgnore = (event) => {
    return ignore.some((target2) => {
      if (typeof target2 === "string") {
        return Array.from(window.document.querySelectorAll(target2)).some((el) => el === event.target || event.composedPath().includes(el));
      } else {
        const el = unrefElement(target2);
        return el && (event.target === el || event.composedPath().includes(el));
      }
    });
  };
  const listener = (event) => {
    const el = unrefElement(target);
    if (!el || el === event.target || event.composedPath().includes(el))
      return;
    if (event.detail === 0)
      shouldListen = !shouldIgnore(event);
    if (!shouldListen) {
      shouldListen = true;
      return;
    }
    handler(event);
  };
  const cleanup = [
    useEventListener(window, "click", listener, { passive: true, capture }),
    useEventListener(window, "pointerdown", (e) => {
      const el = unrefElement(target);
      if (el)
        shouldListen = !e.composedPath().includes(el) && !shouldIgnore(e);
    }, { passive: true }),
    detectIframe && useEventListener(window, "blur", (event) => {
      setTimeout(() => {
        var _a;
        const el = unrefElement(target);
        if (((_a = window.document.activeElement) == null ? void 0 : _a.tagName) === "IFRAME" && !(el == null ? void 0 : el.contains(window.document.activeElement)))
          handler(event);
      }, 0);
    })
  ].filter(Boolean);
  const stop = () => cleanup.forEach((fn) => fn());
  return stop;
}

function useActiveElement(options = {}) {
  var _a;
  const { window = defaultWindow } = options;
  const document = (_a = options.document) != null ? _a : window == null ? void 0 : window.document;
  const activeElement = computedWithControl(
    () => null,
    () => document == null ? void 0 : document.activeElement
  );
  if (window) {
    useEventListener(window, "blur", (event) => {
      if (event.relatedTarget !== null)
        return;
      activeElement.trigger();
    }, true);
    useEventListener(window, "focus", activeElement.trigger, true);
  }
  return activeElement;
}

function useMounted() {
  const isMounted = ref(false);
  if (getCurrentInstance()) ;
  return isMounted;
}

function useSupported(callback) {
  const isMounted = useMounted();
  return computed(() => {
    isMounted.value;
    return Boolean(callback());
  });
}

function useRafFn(fn, options = {}) {
  const {
    immediate = true,
    window = defaultWindow
  } = options;
  const isActive = ref(false);
  let previousFrameTimestamp = 0;
  let rafId = null;
  function loop(timestamp) {
    if (!isActive.value || !window)
      return;
    const delta = timestamp - (previousFrameTimestamp || timestamp);
    fn({ delta, timestamp });
    previousFrameTimestamp = timestamp;
    rafId = window.requestAnimationFrame(loop);
  }
  function resume() {
    if (!isActive.value && window) {
      isActive.value = true;
      rafId = window.requestAnimationFrame(loop);
    }
  }
  function pause() {
    isActive.value = false;
    if (rafId != null && window) {
      window.cancelAnimationFrame(rafId);
      rafId = null;
    }
  }
  if (immediate)
    resume();
  tryOnScopeDispose(pause);
  return {
    isActive: readonly(isActive),
    pause,
    resume
  };
}

var __defProp$o = Object.defineProperty;
var __defProps$b = Object.defineProperties;
var __getOwnPropDescs$b = Object.getOwnPropertyDescriptors;
var __getOwnPropSymbols$r = Object.getOwnPropertySymbols;
var __hasOwnProp$r = Object.prototype.hasOwnProperty;
var __propIsEnum$r = Object.prototype.propertyIsEnumerable;
var __defNormalProp$o = (obj, key, value) => key in obj ? __defProp$o(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __spreadValues$o = (a, b) => {
  for (var prop in b || (b = {}))
    if (__hasOwnProp$r.call(b, prop))
      __defNormalProp$o(a, prop, b[prop]);
  if (__getOwnPropSymbols$r)
    for (var prop of __getOwnPropSymbols$r(b)) {
      if (__propIsEnum$r.call(b, prop))
        __defNormalProp$o(a, prop, b[prop]);
    }
  return a;
};
var __spreadProps$b = (a, b) => __defProps$b(a, __getOwnPropDescs$b(b));
function useAsyncState(promise, initialState, options) {
  const {
    immediate = true,
    delay = 0,
    onError = noop$2,
    onSuccess = noop$2,
    resetOnExecute = true,
    shallow = true,
    throwError
  } = options != null ? options : {};
  const state = shallow ? shallowRef(initialState) : ref(initialState);
  const isReady = ref(false);
  const isLoading = ref(false);
  const error = shallowRef(void 0);
  async function execute(delay2 = 0, ...args) {
    if (resetOnExecute)
      state.value = initialState;
    error.value = void 0;
    isReady.value = false;
    isLoading.value = true;
    if (delay2 > 0)
      await promiseTimeout(delay2);
    const _promise = typeof promise === "function" ? promise(...args) : promise;
    try {
      const data = await _promise;
      state.value = data;
      isReady.value = true;
      onSuccess(data);
    } catch (e) {
      error.value = e;
      onError(e);
      if (throwError)
        throw e;
    } finally {
      isLoading.value = false;
    }
    return state.value;
  }
  if (immediate)
    execute(delay);
  const shell = {
    state,
    isReady,
    isLoading,
    error,
    execute
  };
  function waitUntilIsLoaded() {
    return new Promise((resolve, reject) => {
      until(isLoading).toBe(false).then(() => resolve(shell)).catch(reject);
    });
  }
  return __spreadProps$b(__spreadValues$o({}, shell), {
    then(onFulfilled, onRejected) {
      return waitUntilIsLoaded().then(onFulfilled, onRejected);
    }
  });
}

function useMediaQuery(query, options = {}) {
  const { window = defaultWindow } = options;
  const isSupported = useSupported(() => window && "matchMedia" in window && "undefined".matchMedia === "function");
  let mediaQuery;
  const matches = ref(false);
  const cleanup = () => {
    if (!mediaQuery)
      return;
    if ("removeEventListener" in mediaQuery)
      mediaQuery.removeEventListener("change", update);
    else
      mediaQuery.removeListener(update);
  };
  const update = () => {
    if (!isSupported.value)
      return;
    cleanup();
    mediaQuery = window.matchMedia(toRef(query).value);
    matches.value = !!(mediaQuery == null ? void 0 : mediaQuery.matches);
    if (!mediaQuery)
      return;
    if ("addEventListener" in mediaQuery)
      mediaQuery.addEventListener("change", update);
    else
      mediaQuery.addListener(update);
  };
  watchEffect(update);
  tryOnScopeDispose(() => cleanup());
  return matches;
}

const breakpointsTailwind = {
  "sm": 640,
  "md": 768,
  "lg": 1024,
  "xl": 1280,
  "2xl": 1536
};

function useBreakpoints(breakpoints, options = {}) {
  function getValue(k, delta) {
    let v = breakpoints[k];
    if (delta != null)
      v = increaseWithUnit(v, delta);
    if (typeof v === "number")
      v = `${v}px`;
    return v;
  }
  const { window = defaultWindow } = options;
  function match(query) {
    if (!window)
      return false;
    return window.matchMedia(query).matches;
  }
  const greaterOrEqual = (k) => {
    return useMediaQuery(`(min-width: ${getValue(k)})`, options);
  };
  const shortcutMethods = Object.keys(breakpoints).reduce((shortcuts, k) => {
    Object.defineProperty(shortcuts, k, {
      get: () => greaterOrEqual(k),
      enumerable: true,
      configurable: true
    });
    return shortcuts;
  }, {});
  return Object.assign(shortcutMethods, {
    greater(k) {
      return useMediaQuery(`(min-width: ${getValue(k, 0.1)})`, options);
    },
    greaterOrEqual,
    smaller(k) {
      return useMediaQuery(`(max-width: ${getValue(k, -0.1)})`, options);
    },
    smallerOrEqual(k) {
      return useMediaQuery(`(max-width: ${getValue(k)})`, options);
    },
    between(a, b) {
      return useMediaQuery(`(min-width: ${getValue(a)}) and (max-width: ${getValue(b, -0.1)})`, options);
    },
    isGreater(k) {
      return match(`(min-width: ${getValue(k, 0.1)})`);
    },
    isGreaterOrEqual(k) {
      return match(`(min-width: ${getValue(k)})`);
    },
    isSmaller(k) {
      return match(`(max-width: ${getValue(k, -0.1)})`);
    },
    isSmallerOrEqual(k) {
      return match(`(max-width: ${getValue(k)})`);
    },
    isInBetween(a, b) {
      return match(`(min-width: ${getValue(a)}) and (max-width: ${getValue(b, -0.1)})`);
    },
    current() {
      const points = Object.keys(breakpoints).map((i) => [i, greaterOrEqual(i)]);
      return computed(() => points.filter(([, v]) => v.value).map(([k]) => k));
    }
  });
}

function useClipboard(options = {}) {
  const {
    navigator = defaultNavigator,
    read = false,
    source,
    copiedDuring = 1500,
    legacy = false
  } = options;
  const events = ["copy", "cut"];
  const isClipboardApiSupported = useSupported(() => navigator && "clipboard" in navigator);
  const isSupported = computed(() => isClipboardApiSupported.value || legacy);
  const text = ref("");
  const copied = ref(false);
  const timeout = useTimeoutFn(() => copied.value = false, copiedDuring);
  function updateText() {
    if (isClipboardApiSupported.value) {
      navigator.clipboard.readText().then((value) => {
        text.value = value;
      });
    } else {
      text.value = legacyRead();
    }
  }
  if (isSupported.value && read) {
    for (const event of events)
      useEventListener(event, updateText);
  }
  async function copy(value = toValue(source)) {
    if (isSupported.value && value != null) {
      if (isClipboardApiSupported.value)
        await navigator.clipboard.writeText(value);
      else
        legacyCopy(value);
      text.value = value;
      copied.value = true;
      timeout.start();
    }
  }
  function legacyCopy(value) {
    const ta = document.createElement("textarea");
    ta.value = value != null ? value : "";
    ta.style.position = "absolute";
    ta.style.opacity = "0";
    document.body.appendChild(ta);
    ta.select();
    document.execCommand("copy");
    ta.remove();
  }
  function legacyRead() {
    var _a, _b, _c;
    return (_c = (_b = (_a = document == null ? void 0 : document.getSelection) == null ? void 0 : _a.call(document)) == null ? void 0 : _b.toString()) != null ? _c : "";
  }
  return {
    isSupported,
    text,
    copied,
    copy
  };
}

const _global = typeof globalThis !== "undefined" ? globalThis : typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : {};
const globalKey = "__vueuse_ssr_handlers__";
const handlers = /* @__PURE__ */ getHandlers();
function getHandlers() {
  if (!(globalKey in _global))
    _global[globalKey] = _global[globalKey] || {};
  return _global[globalKey];
}
function getSSRHandler(key, fallback) {
  return handlers[key] || fallback;
}

function guessSerializerType(rawInit) {
  return rawInit == null ? "any" : rawInit instanceof Set ? "set" : rawInit instanceof Map ? "map" : rawInit instanceof Date ? "date" : typeof rawInit === "boolean" ? "boolean" : typeof rawInit === "string" ? "string" : typeof rawInit === "object" ? "object" : !Number.isNaN(rawInit) ? "number" : "any";
}

var __defProp$l = Object.defineProperty;
var __getOwnPropSymbols$o = Object.getOwnPropertySymbols;
var __hasOwnProp$o = Object.prototype.hasOwnProperty;
var __propIsEnum$o = Object.prototype.propertyIsEnumerable;
var __defNormalProp$l = (obj, key, value) => key in obj ? __defProp$l(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __spreadValues$l = (a, b) => {
  for (var prop in b || (b = {}))
    if (__hasOwnProp$o.call(b, prop))
      __defNormalProp$l(a, prop, b[prop]);
  if (__getOwnPropSymbols$o)
    for (var prop of __getOwnPropSymbols$o(b)) {
      if (__propIsEnum$o.call(b, prop))
        __defNormalProp$l(a, prop, b[prop]);
    }
  return a;
};
const StorageSerializers = {
  boolean: {
    read: (v) => v === "true",
    write: (v) => String(v)
  },
  object: {
    read: (v) => JSON.parse(v),
    write: (v) => JSON.stringify(v)
  },
  number: {
    read: (v) => Number.parseFloat(v),
    write: (v) => String(v)
  },
  any: {
    read: (v) => v,
    write: (v) => String(v)
  },
  string: {
    read: (v) => v,
    write: (v) => String(v)
  },
  map: {
    read: (v) => new Map(JSON.parse(v)),
    write: (v) => JSON.stringify(Array.from(v.entries()))
  },
  set: {
    read: (v) => new Set(JSON.parse(v)),
    write: (v) => JSON.stringify(Array.from(v))
  },
  date: {
    read: (v) => new Date(v),
    write: (v) => v.toISOString()
  }
};
const customStorageEventName = "vueuse-storage";
function useStorage(key, defaults, storage, options = {}) {
  var _a;
  const {
    flush = "pre",
    deep = true,
    listenToStorageChanges = true,
    writeDefaults = true,
    mergeDefaults = false,
    shallow,
    window = defaultWindow,
    eventFilter,
    onError = (e) => {
      console.error(e);
    }
  } = options;
  const data = (shallow ? shallowRef : ref)(defaults);
  if (!storage) {
    try {
      storage = getSSRHandler("getDefaultStorage", () => {
        var _a2;
        return (_a2 = defaultWindow) == null ? void 0 : _a2.localStorage;
      })();
    } catch (e) {
      onError(e);
    }
  }
  if (!storage)
    return data;
  const rawInit = toValue(defaults);
  const type = guessSerializerType(rawInit);
  const serializer = (_a = options.serializer) != null ? _a : StorageSerializers[type];
  const { pause: pauseWatch, resume: resumeWatch } = watchPausable(
    data,
    () => write(data.value),
    { flush, deep, eventFilter }
  );
  if (window && listenToStorageChanges) {
    useEventListener(window, "storage", update);
    useEventListener(window, customStorageEventName, updateFromCustomEvent);
  }
  update();
  return data;
  function write(v) {
    try {
      if (v == null) {
        storage.removeItem(key);
      } else {
        const serialized = serializer.write(v);
        const oldValue = storage.getItem(key);
        if (oldValue !== serialized) {
          storage.setItem(key, serialized);
          if (window) {
            window.dispatchEvent(new CustomEvent(customStorageEventName, {
              detail: {
                key,
                oldValue,
                newValue: serialized,
                storageArea: storage
              }
            }));
          }
        }
      }
    } catch (e) {
      onError(e);
    }
  }
  function read(event) {
    const rawValue = event ? event.newValue : storage.getItem(key);
    if (rawValue == null) {
      if (writeDefaults && rawInit !== null)
        storage.setItem(key, serializer.write(rawInit));
      return rawInit;
    } else if (!event && mergeDefaults) {
      const value = serializer.read(rawValue);
      if (typeof mergeDefaults === "function")
        return mergeDefaults(value, rawInit);
      else if (type === "object" && !Array.isArray(value))
        return __spreadValues$l(__spreadValues$l({}, rawInit), value);
      return value;
    } else if (typeof rawValue !== "string") {
      return rawValue;
    } else {
      return serializer.read(rawValue);
    }
  }
  function updateFromCustomEvent(event) {
    update(event.detail);
  }
  function update(event) {
    if (event && event.storageArea !== storage)
      return;
    if (event && event.key == null) {
      data.value = rawInit;
      return;
    }
    if (event && event.key !== key)
      return;
    pauseWatch();
    try {
      data.value = read(event);
    } catch (e) {
      onError(e);
    } finally {
      if (event)
        nextTick(resumeWatch);
      else
        resumeWatch();
    }
  }
}

function useDropZone(target, options = {}) {
  const isOverDropZone = ref(false);
  const files = shallowRef(null);
  return {
    files,
    isOverDropZone
  };
}

var __getOwnPropSymbols$h = Object.getOwnPropertySymbols;
var __hasOwnProp$h = Object.prototype.hasOwnProperty;
var __propIsEnum$h = Object.prototype.propertyIsEnumerable;
var __objRest$2 = (source, exclude) => {
  var target = {};
  for (var prop in source)
    if (__hasOwnProp$h.call(source, prop) && exclude.indexOf(prop) < 0)
      target[prop] = source[prop];
  if (source != null && __getOwnPropSymbols$h)
    for (var prop of __getOwnPropSymbols$h(source)) {
      if (exclude.indexOf(prop) < 0 && __propIsEnum$h.call(source, prop))
        target[prop] = source[prop];
    }
  return target;
};
function useResizeObserver(target, callback, options = {}) {
  const _a = options, { window = defaultWindow } = _a, observerOptions = __objRest$2(_a, ["window"]);
  let observer;
  const isSupported = useSupported(() => window && "ResizeObserver" in window);
  const cleanup = () => {
    if (observer) {
      observer.disconnect();
      observer = void 0;
    }
  };
  const targets = computed(
    () => Array.isArray(target) ? target.map((el) => unrefElement(el)) : [unrefElement(target)]
  );
  const stopWatch = watch(
    targets,
    (els) => {
      cleanup();
      if (isSupported.value && window) {
        observer = new ResizeObserver(callback);
        for (const _el of els)
          _el && observer.observe(_el, observerOptions);
      }
    },
    { immediate: true, flush: "post", deep: true }
  );
  const stop = () => {
    cleanup();
    stopWatch();
  };
  tryOnScopeDispose(stop);
  return {
    isSupported,
    stop
  };
}

function useElementBounding(target, options = {}) {
  const {
    reset = true,
    windowResize = true,
    windowScroll = true,
    immediate = true
  } = options;
  const height = ref(0);
  const bottom = ref(0);
  const left = ref(0);
  const right = ref(0);
  const top = ref(0);
  const width = ref(0);
  const x = ref(0);
  const y = ref(0);
  function update() {
    const el = unrefElement(target);
    if (!el) {
      if (reset) {
        height.value = 0;
        bottom.value = 0;
        left.value = 0;
        right.value = 0;
        top.value = 0;
        width.value = 0;
        x.value = 0;
        y.value = 0;
      }
      return;
    }
    const rect = el.getBoundingClientRect();
    height.value = rect.height;
    bottom.value = rect.bottom;
    left.value = rect.left;
    right.value = rect.right;
    top.value = rect.top;
    width.value = rect.width;
    x.value = rect.x;
    y.value = rect.y;
  }
  useResizeObserver(target, update);
  watch(() => unrefElement(target), (ele) => !ele && update());
  if (windowScroll)
    useEventListener("scroll", update, { capture: true, passive: true });
  if (windowResize)
    useEventListener("resize", update, { passive: true });
  tryOnMounted(() => {
    if (immediate)
      update();
  });
  return {
    height,
    bottom,
    left,
    right,
    top,
    width,
    x,
    y,
    update
  };
}

function useIntersectionObserver(target, callback, options = {}) {
  const {
    root,
    rootMargin = "0px",
    threshold = 0.1,
    window = defaultWindow,
    immediate = true
  } = options;
  const isSupported = useSupported(() => window && "IntersectionObserver" in window);
  const targets = computed(() => {
    const _target = toValue(target);
    return (Array.isArray(_target) ? _target : [_target]).map(unrefElement).filter(notNullish);
  });
  let cleanup = noop$2;
  const isActive = ref(immediate);
  const stopWatch = isSupported.value ? watch(
    () => [targets.value, unrefElement(root), isActive.value],
    ([targets2, root2]) => {
      cleanup();
      if (!isActive.value)
        return;
      if (!targets2.length)
        return;
      const observer = new IntersectionObserver(
        callback,
        {
          root: unrefElement(root2),
          rootMargin,
          threshold
        }
      );
      targets2.forEach((el) => el && observer.observe(el));
      cleanup = () => {
        observer.disconnect();
        cleanup = noop$2;
      };
    },
    { immediate, flush: "post" }
  ) : noop$2;
  const stop = () => {
    cleanup();
    stopWatch();
    isActive.value = false;
  };
  tryOnScopeDispose(stop);
  return {
    isSupported,
    isActive,
    pause() {
      cleanup();
      isActive.value = false;
    },
    resume() {
      isActive.value = true;
    },
    stop
  };
}

const events = /* @__PURE__ */ new Map();

function useEventBus(key) {
  const scope = getCurrentScope();
  function on(listener) {
    var _a;
    const listeners = events.get(key) || /* @__PURE__ */ new Set();
    listeners.add(listener);
    events.set(key, listeners);
    const _off = () => off(listener);
    (_a = scope == null ? void 0 : scope.cleanups) == null ? void 0 : _a.push(_off);
    return _off;
  }
  function once(listener) {
    function _listener(...args) {
      off(_listener);
      listener(...args);
    }
    return on(_listener);
  }
  function off(listener) {
    const listeners = events.get(key);
    if (!listeners)
      return;
    listeners.delete(listener);
    if (!listeners.size)
      reset();
  }
  function reset() {
    events.delete(key);
  }
  function emit(event, payload) {
    var _a;
    (_a = events.get(key)) == null ? void 0 : _a.forEach((v) => v(event, payload));
  }
  return { on, once, off, emit, reset };
}

function useFocusWithin(target, options = {}) {
  const activeElement = useActiveElement(options);
  const targetElement = computed(() => unrefElement(target));
  const focused = computed(() => targetElement.value && activeElement.value ? targetElement.value.contains(activeElement.value) : false);
  return { focused };
}

function useLocalStorage(key, initialValue, options = {}) {
  const { window = defaultWindow } = options;
  return useStorage(key, initialValue, window == null ? void 0 : window.localStorage, options);
}

const DefaultMagicKeysAliasMap = {
  ctrl: "control",
  command: "meta",
  cmd: "meta",
  option: "alt",
  up: "arrowup",
  down: "arrowdown",
  left: "arrowleft",
  right: "arrowright"
};

function useMagicKeys(options = {}) {
  const {
    reactive: useReactive = false,
    target = defaultWindow,
    aliasMap = DefaultMagicKeysAliasMap,
    passive = true,
    onEventFired = noop$2
  } = options;
  const current = reactive(/* @__PURE__ */ new Set());
  const obj = {
    toJSON() {
      return {};
    },
    current
  };
  const refs = useReactive ? reactive(obj) : obj;
  const metaDeps = /* @__PURE__ */ new Set();
  const usedKeys = /* @__PURE__ */ new Set();
  function setRefs(key, value) {
    if (key in refs) {
      if (useReactive)
        refs[key] = value;
      else
        refs[key].value = value;
    }
  }
  function reset() {
    current.clear();
    for (const key of usedKeys)
      setRefs(key, false);
  }
  function updateRefs(e, value) {
    var _a, _b;
    const key = (_a = e.key) == null ? void 0 : _a.toLowerCase();
    const code = (_b = e.code) == null ? void 0 : _b.toLowerCase();
    const values = [code, key].filter(Boolean);
    if (key) {
      if (value)
        current.add(key);
      else
        current.delete(key);
    }
    for (const key2 of values) {
      usedKeys.add(key2);
      setRefs(key2, value);
    }
    if (key === "meta" && !value) {
      metaDeps.forEach((key2) => {
        current.delete(key2);
        setRefs(key2, false);
      });
      metaDeps.clear();
    } else if (typeof e.getModifierState === "function" && e.getModifierState("Meta") && value) {
      [...current, ...values].forEach((key2) => metaDeps.add(key2));
    }
  }
  useEventListener(target, "keydown", (e) => {
    updateRefs(e, true);
    return onEventFired(e);
  }, { passive });
  useEventListener(target, "keyup", (e) => {
    updateRefs(e, false);
    return onEventFired(e);
  }, { passive });
  useEventListener("blur", reset, { passive: true });
  useEventListener("focus", reset, { passive: true });
  const proxy = new Proxy(
    refs,
    {
      get(target2, prop, rec) {
        if (typeof prop !== "string")
          return Reflect.get(target2, prop, rec);
        prop = prop.toLowerCase();
        if (prop in aliasMap)
          prop = aliasMap[prop];
        if (!(prop in refs)) {
          if (/[+_-]/.test(prop)) {
            const keys = prop.split(/[+_-]/g).map((i) => i.trim());
            refs[prop] = computed(() => keys.every((key) => toValue(proxy[key])));
          } else {
            refs[prop] = ref(false);
          }
        }
        const r = Reflect.get(target2, prop, rec);
        return useReactive ? toValue(r) : r;
      }
    }
  );
  return proxy;
}

function useNetwork(options = {}) {
  const { window = defaultWindow } = options;
  const navigator = window == null ? void 0 : window.navigator;
  const isSupported = useSupported(() => navigator && "connection" in navigator);
  const isOnline = ref(true);
  const saveData = ref(false);
  const offlineAt = ref(void 0);
  const onlineAt = ref(void 0);
  const downlink = ref(void 0);
  const downlinkMax = ref(void 0);
  const rtt = ref(void 0);
  const effectiveType = ref(void 0);
  const type = ref("unknown");
  const connection = isSupported.value && navigator.connection;
  function updateNetworkInformation() {
    if (!navigator)
      return;
    isOnline.value = navigator.onLine;
    offlineAt.value = isOnline.value ? void 0 : Date.now();
    onlineAt.value = isOnline.value ? Date.now() : void 0;
    if (connection) {
      downlink.value = connection.downlink;
      downlinkMax.value = connection.downlinkMax;
      effectiveType.value = connection.effectiveType;
      rtt.value = connection.rtt;
      saveData.value = connection.saveData;
      type.value = connection.type;
    }
  }
  if (window) {
    useEventListener(window, "offline", () => {
      isOnline.value = false;
      offlineAt.value = Date.now();
    });
    useEventListener(window, "online", () => {
      isOnline.value = true;
      onlineAt.value = Date.now();
    });
  }
  if (connection)
    useEventListener(connection, "change", updateNetworkInformation, false);
  updateNetworkInformation();
  return {
    isSupported,
    isOnline,
    saveData,
    offlineAt,
    onlineAt,
    downlink,
    downlinkMax,
    effectiveType,
    rtt,
    type
  };
}

var __defProp$7 = Object.defineProperty;
var __getOwnPropSymbols$8 = Object.getOwnPropertySymbols;
var __hasOwnProp$8 = Object.prototype.hasOwnProperty;
var __propIsEnum$8 = Object.prototype.propertyIsEnumerable;
var __defNormalProp$7 = (obj, key, value) => key in obj ? __defProp$7(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __spreadValues$7 = (a, b) => {
  for (var prop in b || (b = {}))
    if (__hasOwnProp$8.call(b, prop))
      __defNormalProp$7(a, prop, b[prop]);
  if (__getOwnPropSymbols$8)
    for (var prop of __getOwnPropSymbols$8(b)) {
      if (__propIsEnum$8.call(b, prop))
        __defNormalProp$7(a, prop, b[prop]);
    }
  return a;
};
function useNow(options = {}) {
  const {
    controls: exposeControls = false,
    interval = "requestAnimationFrame"
  } = options;
  const now = ref(/* @__PURE__ */ new Date());
  const update = () => now.value = /* @__PURE__ */ new Date();
  const controls = interval === "requestAnimationFrame" ? useRafFn(update, { immediate: true }) : useIntervalFn(update, interval, { immediate: true });
  if (exposeControls) {
    return __spreadValues$7({
      now
    }, controls);
  } else {
    return now;
  }
}

function useOnline(options = {}) {
  const { isOnline } = useNetwork(options);
  return isOnline;
}

function usePreferredReducedMotion(options) {
  const isReduced = useMediaQuery("(prefers-reduced-motion: reduce)", options);
  return computed(() => {
    if (isReduced.value)
      return "reduce";
    return "no-preference";
  });
}
function useScrollLock(element, initialState = false) {
  const isLocked = ref(initialState);
  let initialOverflow;
  watch(toRef(element), (el) => {
    if (el) {
      const ele = el;
      initialOverflow = ele.style.overflow;
      if (isLocked.value)
        ele.style.overflow = "hidden";
    }
  }, {
    immediate: true
  });
  const lock = () => {
    const ele = toValue(element);
    if (!ele || isLocked.value)
      return;
    ele.style.overflow = "hidden";
    isLocked.value = true;
  };
  const unlock = () => {
    const ele = toValue(element);
    if (!ele || !isLocked.value)
      return;
    ele.style.overflow = initialOverflow;
    isLocked.value = false;
  };
  tryOnScopeDispose(unlock);
  return computed({
    get() {
      return isLocked.value;
    },
    set(v) {
      if (v)
        lock();
      else
        unlock();
    }
  });
}

var __defProp$5 = Object.defineProperty;
var __getOwnPropSymbols$5 = Object.getOwnPropertySymbols;
var __hasOwnProp$5 = Object.prototype.hasOwnProperty;
var __propIsEnum$5 = Object.prototype.propertyIsEnumerable;
var __defNormalProp$5 = (obj, key, value) => key in obj ? __defProp$5(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __spreadValues$5 = (a, b) => {
  for (var prop in b || (b = {}))
    if (__hasOwnProp$5.call(b, prop))
      __defNormalProp$5(a, prop, b[prop]);
  if (__getOwnPropSymbols$5)
    for (var prop of __getOwnPropSymbols$5(b)) {
      if (__propIsEnum$5.call(b, prop))
        __defNormalProp$5(a, prop, b[prop]);
    }
  return a;
};
function useShare(shareOptions = {}, options = {}) {
  const { navigator = defaultNavigator } = options;
  const _navigator = navigator;
  const isSupported = useSupported(() => _navigator && "canShare" in _navigator);
  const share = async (overrideOptions = {}) => {
    if (isSupported.value) {
      const data = __spreadValues$5(__spreadValues$5({}, toValue(shareOptions)), toValue(overrideOptions));
      let granted = true;
      if (data.files && _navigator.canShare)
        granted = _navigator.canShare({ files: data.files });
      if (granted)
        return _navigator.share(data);
    }
  };
  return {
    isSupported,
    share
  };
}

var __defProp$2 = Object.defineProperty;
var __getOwnPropSymbols$2 = Object.getOwnPropertySymbols;
var __hasOwnProp$2 = Object.prototype.hasOwnProperty;
var __propIsEnum$2 = Object.prototype.propertyIsEnumerable;
var __defNormalProp$2 = (obj, key, value) => key in obj ? __defProp$2(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __spreadValues$2 = (a, b) => {
  for (var prop in b || (b = {}))
    if (__hasOwnProp$2.call(b, prop))
      __defNormalProp$2(a, prop, b[prop]);
  if (__getOwnPropSymbols$2)
    for (var prop of __getOwnPropSymbols$2(b)) {
      if (__propIsEnum$2.call(b, prop))
        __defNormalProp$2(a, prop, b[prop]);
    }
  return a;
};
var __objRest = (source, exclude) => {
  var target = {};
  for (var prop in source)
    if (__hasOwnProp$2.call(source, prop) && exclude.indexOf(prop) < 0)
      target[prop] = source[prop];
  if (source != null && __getOwnPropSymbols$2)
    for (var prop of __getOwnPropSymbols$2(source)) {
      if (exclude.indexOf(prop) < 0 && __propIsEnum$2.call(source, prop))
        target[prop] = source[prop];
    }
  return target;
};
const DEFAULT_UNITS = [
  { max: 6e4, value: 1e3, name: "second" },
  { max: 276e4, value: 6e4, name: "minute" },
  { max: 72e6, value: 36e5, name: "hour" },
  { max: 5184e5, value: 864e5, name: "day" },
  { max: 24192e5, value: 6048e5, name: "week" },
  { max: 28512e6, value: 2592e6, name: "month" },
  { max: Infinity, value: 31536e6, name: "year" }
];
const DEFAULT_MESSAGES = {
  justNow: "just now",
  past: (n) => n.match(/\d/) ? `${n} ago` : n,
  future: (n) => n.match(/\d/) ? `in ${n}` : n,
  month: (n, past) => n === 1 ? past ? "last month" : "next month" : `${n} month${n > 1 ? "s" : ""}`,
  year: (n, past) => n === 1 ? past ? "last year" : "next year" : `${n} year${n > 1 ? "s" : ""}`,
  day: (n, past) => n === 1 ? past ? "yesterday" : "tomorrow" : `${n} day${n > 1 ? "s" : ""}`,
  week: (n, past) => n === 1 ? past ? "last week" : "next week" : `${n} week${n > 1 ? "s" : ""}`,
  hour: (n) => `${n} hour${n > 1 ? "s" : ""}`,
  minute: (n) => `${n} minute${n > 1 ? "s" : ""}`,
  second: (n) => `${n} second${n > 1 ? "s" : ""}`,
  invalid: ""
};
function DEFAULT_FORMATTER(date) {
  return date.toISOString().slice(0, 10);
}
function useTimeAgo(time, options = {}) {
  const {
    controls: exposeControls = false,
    updateInterval = 3e4
  } = options;
  const _a = useNow({ interval: updateInterval, controls: true }), { now } = _a, controls = __objRest(_a, ["now"]);
  const timeAgo = computed(() => formatTimeAgo(new Date(toValue(time)), options, toValue(now)));
  if (exposeControls) {
    return __spreadValues$2({
      timeAgo
    }, controls);
  } else {
    return timeAgo;
  }
}
function formatTimeAgo(from, options = {}, now = Date.now()) {
  var _a;
  const {
    max,
    messages = DEFAULT_MESSAGES,
    fullDateFormatter = DEFAULT_FORMATTER,
    units = DEFAULT_UNITS,
    showSecond = false,
    rounding = "round"
  } = options;
  const roundFn = typeof rounding === "number" ? (n) => +n.toFixed(rounding) : Math[rounding];
  const diff = +now - +from;
  const absDiff = Math.abs(diff);
  function getValue(diff2, unit) {
    return roundFn(Math.abs(diff2) / unit.value);
  }
  function format(diff2, unit) {
    const val = getValue(diff2, unit);
    const past = diff2 > 0;
    const str = applyFormat(unit.name, val, past);
    return applyFormat(past ? "past" : "future", str, past);
  }
  function applyFormat(name, val, isPast) {
    const formatter = messages[name];
    if (typeof formatter === "function")
      return formatter(val, isPast);
    return formatter.replace("{0}", val.toString());
  }
  if (absDiff < 6e4 && !showSecond)
    return messages.justNow;
  if (typeof max === "number" && absDiff > max)
    return fullDateFormatter(new Date(from));
  if (typeof max === "string") {
    const unitMax = (_a = units.find((i) => i.name === max)) == null ? void 0 : _a.max;
    if (unitMax && absDiff > unitMax)
      return fullDateFormatter(new Date(from));
  }
  for (const [idx, unit] of units.entries()) {
    const val = getValue(diff, unit);
    if (val <= 0 && units[idx - 1])
      return format(diff, units[idx - 1]);
    if (absDiff < unit.max)
      return format(diff, unit);
  }
  return messages.invalid;
}

function useWindowSize(options = {}) {
  const {
    window = defaultWindow,
    initialWidth = Infinity,
    initialHeight = Infinity,
    listenOrientation = true,
    includeScrollbar = true
  } = options;
  const width = ref(initialWidth);
  const height = ref(initialHeight);
  const update = () => {
    if (window) {
      if (includeScrollbar) {
        width.value = window.innerWidth;
        height.value = window.innerHeight;
      } else {
        width.value = window.document.documentElement.clientWidth;
        height.value = window.document.documentElement.clientHeight;
      }
    }
  };
  update();
  tryOnMounted(update);
  useEventListener("resize", update, { passive: true });
  if (listenOrientation) {
    const matches = useMediaQuery("(orientation: portrait)");
    watch(matches, () => update());
  }
  return { width, height };
}

var NodeFetch = require$$0;
var NodeFormData = require$$1;
var buffer = require$$2;
var NodeAbortController = require$$3;

globalThis.Blob ?? buffer.Blob;
const FormData = globalThis.FormData ?? NodeFormData;
const Headers = globalThis.Headers ?? NodeFetch.Headers;
const Request = globalThis.Request ?? NodeFetch.Request;
const Response = globalThis.Response ?? NodeFetch.Response;
const fetch$1 = globalThis.fetch ?? NodeFetch.default;
const AbortController =
  globalThis.AbortController ?? NodeAbortController.AbortController;
globalThis.AbortSignal ?? NodeAbortController.AbortSignal;
var FormData_1 = FormData;
var Headers_1 = Headers;
var Request_1 = Request;
var Response_1 = Response;
var fetch_1 = fetch$1;
var AbortController_1 = AbortController;

const lt = proxy;
const gt = proxy;
const gte = proxy;
class SemVer {
}

class SomeClass {
}

/**
 * Error object
 * @see https://docs.joinmastodon.org/entities/error/
 */
class MastoError extends Error {
    /**
     * @param message The error message. Equivalent for the `error` field from the Error entity
     * @param props Additional properties
     */
    constructor(message, props = {}) {
        super(message, { cause: props.cause });
        this.name = 'MastoError';
        /** Helper to check if the error has been thrown from Masto */
        this.isMastoError = true;
        Object.setPrototypeOf(this, MastoError.prototype);
        this.description = props.description;
        this.details = props.details;
    }
}

class MastoHttpError extends MastoError {
    constructor(message, statusCode, props) {
        super(message, props);
        this.name = 'MastoHttpError';
        Object.setPrototypeOf(this, MastoHttpError.prototype);
        this.statusCode = statusCode;
    }
}

/**
 * Mastodon forbidden error
 */
class MastoHttpConflictError extends MastoHttpError {
    constructor(message, props) {
        super(message, 409, props);
        this.name = 'MastoHttpConflictError';
        Object.setPrototypeOf(this, MastoHttpConflictError.prototype);
    }
}

/**
 * Mastodon forbidden error
 */
class MastoHttpForbiddenError extends MastoHttpError {
    constructor(message, props) {
        super(message, 403, props);
        this.name = 'MastoHttpForbiddenError';
        Object.setPrototypeOf(this, MastoHttpForbiddenError.prototype);
    }
}

/**
 * Mastodon gone error
 */
class MastoHttpGoneError extends MastoHttpError {
    constructor(message, props) {
        super(message, 410, props);
        this.name = 'MastoHttpGoneError';
        Object.setPrototypeOf(this, MastoHttpGoneError.prototype);
    }
}

/**
 * Mastodon not found error class
 */
class MastoHttpNotFoundError extends MastoHttpError {
    constructor(message, props) {
        super(message, 404, props);
        this.name = 'MastoHttpNotFoundError';
        Object.setPrototypeOf(this, MastoHttpNotFoundError.prototype);
    }
}

/**
 * Mastodon rate limit error class
 */
class MastoHttpRateLimitError extends MastoHttpError {
    constructor(message, props) {
        super(message, 429, props);
        this.name = 'MastoHttpRateLimitError';
        Object.setPrototypeOf(this, MastoHttpRateLimitError.prototype);
        this.limit = props.limit;
        this.remaining = props.remaining;
        this.reset = props.reset;
    }
}

/**
 * Mastodon unauthorized error class
 */
class MastoHttpUnauthorizedError extends MastoHttpError {
    constructor(message, props) {
        super(message, 401, props);
        this.name = 'MastoHttpUnauthorizedError';
        Object.setPrototypeOf(this, MastoHttpUnauthorizedError.prototype);
    }
}

class MastoHttpUnexpectedError extends MastoHttpError {
    constructor(message, statusCode, props) {
        super(message, statusCode, props);
        this.name = 'MastoHttpUnexpectedError';
        Object.setPrototypeOf(this, MastoHttpUnexpectedError.prototype);
    }
}

/**
 * Mastodon unprocessable entity
 */
class MastoHttpUnprocessableEntityError extends MastoHttpError {
    constructor(message, props) {
        super(message, 422, props);
        this.name = 'MastoHttpUnprocessableEntityError';
        Object.setPrototypeOf(this, MastoHttpUnprocessableEntityError.prototype);
    }
}

const createHttpError = (params) => {
    var _a, _b;
    const message = (_a = params.message) !== null && _a !== void 0 ? _a : 'Unexpected error occurred';
    const props = {
        cause: params.cause,
        description: (_b = params.description) !== null && _b !== void 0 ? _b : 'No further description is provided for this error',
        details: params.details,
    };
    switch (params.statusCode) {
        case 401: {
            return new MastoHttpUnauthorizedError(message, props);
        }
        case 403: {
            return new MastoHttpForbiddenError(message, props);
        }
        case 404: {
            return new MastoHttpNotFoundError(message, props);
        }
        case 409: {
            return new MastoHttpConflictError(message, props);
        }
        case 410: {
            return new MastoHttpGoneError(message, props);
        }
        case 422: {
            return new MastoHttpUnprocessableEntityError(message, props);
        }
        case 429: {
            return new MastoHttpRateLimitError(message, Object.assign(Object.assign({}, props), { limit: params.limit, remaining: params.remaining, reset: params.reset }));
        }
        default: {
            return new MastoHttpUnexpectedError(message, params.statusCode, props);
        }
    }
};

class MastoUnexpectedError extends MastoError {
    constructor(message, props = {}) {
        super(message, { cause: props.cause });
        this.name = 'MastoUnexpectedError';
        Object.setPrototypeOf(this, MastoUnexpectedError.prototype);
    }
}

/**
 * Mastodon Deserialize error
 */
class MastoDeserializeError extends MastoError {
    constructor(message, contentType, data, props) {
        super(message, props);
        this.contentType = contentType;
        this.data = data;
        this.name = 'MastoDeserializeError';
        Object.setPrototypeOf(this, MastoDeserializeError.prototype);
    }
}

/**
 * Mastodon version error
 */
class MastoVersionError extends MastoError {
    constructor(message, props) {
        super(message, props);
        this.name = 'MastoVersionError';
        Object.setPrototypeOf(this, MastoVersionError.prototype);
    }
}

/**
 * Mastodon invalid argument error
 */
class MastoInvalidArgumentError extends MastoError {
    constructor(message, props) {
        super(message, props);
        this.name = 'MastoInvalidArgumentError';
        Object.setPrototypeOf(this, MastoInvalidArgumentError.prototype);
    }
}

/**
 * Mastodon Timeout error
 */
class MastoTimeoutError extends MastoError {
    constructor(message, props) {
        super(message, props);
        this.name = 'MastoTimeoutError';
        Object.setPrototypeOf(this, MastoTimeoutError.prototype);
    }
}

class BaseLogger {
    constructor(logLevel) {
        this.logLevel = logLevel;
    }
    debug(message, meta) {
        if (this.logLevel.satisfies('debug')) {
            this.log('debug', message, meta);
        }
    }
    info(message, meta) {
        if (this.logLevel.satisfies('info')) {
            this.log('info', message, meta);
        }
    }
    warn(message, meta) {
        if (this.logLevel.satisfies('warn')) {
            this.log('warn', message, meta);
        }
    }
    error(message, meta) {
        if (this.logLevel.satisfies('error')) {
            this.log('error', message, meta);
        }
    }
}

/* eslint-disable no-console */
class LoggerConsoleImpl extends BaseLogger {
    constructor(logLevel) {
        super(logLevel);
    }
    log(type, message, meta) {
        switch (type) {
            case 'debug': {
                console.debug(message, meta);
                return;
            }
            case 'info': {
                console.info(message, meta);
                return;
            }
            case 'warn': {
                console.warn(message, meta);
                return;
            }
            case 'error': {
                console.error(message, meta);
                return;
            }
        }
    }
}

/* eslint-disable unicorn/prefer-math-trunc */
const LOG_TYPES = Object.freeze({
    DEBUG: 1 << 0,
    INFO: 1 << 1,
    WARN: 1 << 2,
    ERROR: 1 << 3,
});
class LogLevel {
    constructor(level) {
        this.level = level;
    }
    satisfies(type) {
        switch (type) {
            case 'debug': {
                return Boolean(this.level & LOG_TYPES.DEBUG);
            }
            case 'info': {
                return Boolean(this.level & LOG_TYPES.INFO);
            }
            case 'warn': {
                return Boolean(this.level & LOG_TYPES.WARN);
            }
            case 'error': {
                return Boolean(this.level & LOG_TYPES.ERROR);
            }
        }
    }
    static from(type) {
        switch (type) {
            case 'debug': {
                return new LogLevel(LOG_TYPES.DEBUG | LOG_TYPES.INFO | LOG_TYPES.WARN | LOG_TYPES.ERROR);
            }
            case 'info': {
                return new LogLevel(LOG_TYPES.INFO | LOG_TYPES.WARN | LOG_TYPES.ERROR);
            }
            case 'warn': {
                return new LogLevel(LOG_TYPES.WARN | LOG_TYPES.ERROR);
            }
            case 'error': {
                return new LogLevel(LOG_TYPES.ERROR);
            }
        }
    }
}

const delay = (ms) => new Promise((resolve) => setTimeout(() => resolve(), ms));

class Timeout {
    constructor(millisecond) {
        this.abortController = new AbortController_1();
        this.timeout = setTimeout(() => {
            this.abortController.abort();
        }, millisecond);
    }
    get signal() {
        return this.abortController.signal;
    }
    clear() {
        clearTimeout(this.timeout);
    }
}

const mergeAbortSignals = (signals) => {
    const abortController = new AbortController_1();
    for (const signal of signals) {
        signal.addEventListener('abort', () => abortController.abort());
    }
    return abortController.signal;
};

/* eslint-disable unicorn/no-array-for-each */
const mergeHeadersInit = ([head, ...tail]) => {
    const headers = new Headers_1(head);
    for (const entry of tail) {
        new Headers_1(entry).forEach((value, key) => {
            headers.set(key, value);
        });
    }
    return headers;
};

const DEFAULT_TIMEOUT_MS = 1000 * 300;
class MastoConfig {
    constructor(props, serializer) {
        this.props = props;
        this.serializer = serializer;
    }
    createHeader(override = {}) {
        var _a, _b;
        const headersInit = mergeHeadersInit([
            (_b = (_a = this.props.defaultRequestInit) === null || _a === void 0 ? void 0 : _a.headers) !== null && _b !== void 0 ? _b : {},
            { 'Content-Type': 'application/json' },
            override,
        ]);
        const headers = new Headers_1(headersInit);
        if (this.props.accessToken) {
            headers.set('Authorization', `Bearer ${this.props.accessToken}`);
        }
        return new Headers_1(headers);
    }
    createWebsocketProtocols(protocols = []) {
        return this.supportsSecureToken() && this.props.accessToken != undefined
            ? [this.props.accessToken, ...protocols]
            : protocols;
    }
    resolveHttpPath(path, params) {
        const url = new URL(path, this.props.url);
        if (params) {
            url.search = this.serializer.serializeQueryString(params);
        }
        return url;
    }
    resolveWebsocketPath(path, params = {}) {
        if (this.props.streamingApiUrl == undefined) {
            throw new MastoInvalidArgumentError('You need to specify `streamingApiUrl` to use this feature');
        }
        const url = new URL(this.props.streamingApiUrl.replace(/\/$/, '') + path);
        if (!this.supportsSecureToken()) {
            params.accessToken = this.props.accessToken;
        }
        url.search = this.serializer.serializeQueryString(params);
        return url.toString();
    }
    createTimeout() {
        var _a;
        return new Timeout((_a = this.props.timeout) !== null && _a !== void 0 ? _a : DEFAULT_TIMEOUT_MS);
    }
    createAbortSignal(signal) {
        var _a;
        const timeout = this.createTimeout();
        const signals = [timeout.signal];
        if ((_a = this.props.defaultRequestInit) === null || _a === void 0 ? void 0 : _a.signal) {
            // FIXME: `abort-controller` and `node-fetch` mismatches
            signals.push(this.props.defaultRequestInit.signal);
        }
        if (signal != undefined) {
            signals.push(signal);
        }
        return [mergeAbortSignals(signals), timeout];
    }
    getLogLevel() {
        var _a;
        return LogLevel.from((_a = this.props.logLevel) !== null && _a !== void 0 ? _a : 'warn');
    }
    shouldWarnDeprecated() {
        return !this.props.disableDeprecatedWarning;
    }
    satisfiesVersion(since, until) {
        var _a;
        if (this.props.version == undefined || this.props.disableVersionCheck) {
            return {
                compat: 'compatible',
                version: (_a = this.props.version) === null || _a === void 0 ? void 0 : _a.version,
            };
        }
        if (since && lt(this.props.version, since)) {
            return {
                compat: 'unimplemented',
                version: this.props.version.version,
            };
        }
        if (until && gt(this.props.version, until)) {
            return {
                compat: 'removed',
                version: this.props.version.version,
            };
        }
        return {
            compat: 'compatible',
            version: this.props.version.version,
        };
    }
    supportsSecureToken() {
        var _a;
        if (this.props.version == undefined || this.props.disableVersionCheck) {
            return true;
        }
        // Since v2.8.4, it is supported to pass access token with`Sec-Websocket-Protocol`
        // https://github.com/tootsuite/mastodon/pull/10818
        return (((_a = this.props.streamingApiUrl) === null || _a === void 0 ? void 0 : _a.startsWith('wss:')) &&
            gte(this.props.version, new SemVer('2.8.4', { loose: true })));
    }
}

class BaseHttp {
    get(path, data, init = {}) {
        return this.request({
            path,
            searchParams: data,
            requestInit: Object.assign({ method: 'GET' }, init),
        }).then((response) => response.data);
    }
    post(path, data, init = {}) {
        return this.request({
            path,
            body: data,
            requestInit: Object.assign({ method: 'POST' }, init),
        }).then((response) => response.data);
    }
    delete(path, data, init = {}) {
        return this.request({
            path,
            body: data,
            requestInit: Object.assign({ method: 'DELETE' }, init),
        }).then((response) => response.data);
    }
    put(path, data, init = {}) {
        return this.request({
            path,
            body: data,
            requestInit: Object.assign({ method: 'PUT' }, init),
        }).then((response) => response.data);
    }
    patch(path, data, init = {}) {
        return this.request({
            path,
            body: data,
            requestInit: Object.assign({ method: 'PATCH' }, init),
        }).then((response) => response.data);
    }
}

/******************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */

function __decorate(decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
}

function __awaiter(thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
}

const getContentType = (headers) => {
    const contentType = headers.get('Content-Type');
    if (typeof contentType !== 'string') {
        return;
    }
    return contentType.replace(/\s*;.*$/, '');
};

class HttpNativeImpl extends BaseHttp {
    constructor(serializer, config, logger) {
        super();
        this.serializer = serializer;
        this.config = config;
        this.logger = logger;
    }
    request(params) {
        var _a, _b, _c, _d, _e;
        return __awaiter(this, void 0, void 0, function* () {
            const [request, timeout] = this.createRequest(params);
            try {
                (_a = this.logger) === null || _a === void 0 ? void 0 : _a.info(`↑ ${request.method} ${request.url}`);
                (_b = this.logger) === null || _b === void 0 ? void 0 : _b.debug('\tbody', request.body);
                const response = yield fetch_1(request);
                timeout.clear();
                if (!response.ok) {
                    throw response;
                }
                const text = yield response.text();
                const contentType = getContentType(response.headers);
                if (contentType == undefined) {
                    throw new MastoUnexpectedError('Content-Type is not defined');
                }
                const data = this.serializer.deserialize(contentType, text);
                (_c = this.logger) === null || _c === void 0 ? void 0 : _c.info(`↓ ${request.method} ${request.url}`);
                (_d = this.logger) === null || _d === void 0 ? void 0 : _d.debug('\tbody', text);
                return {
                    headers: response.headers,
                    data,
                };
            }
            catch (error) {
                (_e = this.logger) === null || _e === void 0 ? void 0 : _e.debug(`HTTP failed`, error);
                throw yield this.createError(error);
            }
        });
    }
    createRequest(params) {
        var _a;
        const { path, searchParams, requestInit } = params;
        const url = this.config.resolveHttpPath(path, searchParams);
        const headers = this.config.createHeader(requestInit === null || requestInit === void 0 ? void 0 : requestInit.headers);
        const [abortSignal, timeout] = this.config.createAbortSignal(requestInit === null || requestInit === void 0 ? void 0 : requestInit.signal);
        const body = this.serializer.serialize((_a = getContentType(headers)) !== null && _a !== void 0 ? _a : 'application/json', params.body);
        if (body instanceof FormData_1) {
            // As multipart form data should contain an arbitrary boundary,
            // leave Content-Type header undefined, so that fetch() API
            // automatically configure Content-Type with an appropriate boundary.
            headers.delete('Content-Type');
        }
        if (body == undefined && getContentType(headers) == 'application/json') {
            // Since an empty string is not a valid JSON,
            // if the body is empty and the content type is set to JSON,
            // remove 'content-type:application/json' from headers
            headers.delete('Content-Type');
        }
        const request = new Request_1(url, Object.assign(Object.assign({}, requestInit), { headers,
            body, signal: abortSignal }));
        return [request, timeout];
    }
    createError(error) {
        var _a;
        return __awaiter(this, void 0, void 0, function* () {
            if (error instanceof Response_1) {
                const data = this.serializer.deserialize((_a = getContentType(error.headers)) !== null && _a !== void 0 ? _a : 'application/json', yield error.text());
                return createHttpError({
                    cause: error,
                    statusCode: error.status,
                    message: data === null || data === void 0 ? void 0 : data.error,
                    details: data === null || data === void 0 ? void 0 : data.errorDescription,
                    description: data === null || data === void 0 ? void 0 : data.details,
                    limit: error.headers.get('X-RateLimit-Limit'),
                    remaining: error.headers.get('X-RateLimit-Remaining'),
                    reset: error.headers.get('X-RateLimit-Reset'),
                });
            }
            // TODO: Use abort reason
            // eslint-disable-next-line @typescript-eslint/no-explicit-any
            if (error != undefined && error.name === 'AbortError') {
                return new MastoTimeoutError(`Request timed out`, { cause: error });
            }
            return error;
        });
    }
}

/**
 * Decorator that verifies the version of the Mastodon instance
 * @param parameters Optional params
 */
const version = (params) => (_target, name, descriptor) => {
    const origin = descriptor.value;
    if (!origin) {
        throw new MastoUnexpectedError('version can only apply to a method of a class');
    }
    descriptor.value = function (...args) {
        const since = params.since && new SemVer(params.since, { loose: true });
        const until = params.until && new SemVer(params.until, { loose: true });
        const result = this.config.satisfiesVersion(since, until);
        switch (result.compat) {
            case 'unimplemented': {
                throw new MastoVersionError(`${String(this.constructor.name)}.${String(name)}` +
                    ` is not available with the current Mastodon version ` +
                    result.version +
                    ` It requires greater than or equal to version ${since}.`);
            }
            case 'removed': {
                throw new MastoVersionError(`${String(this.constructor.name)}.${String(name)}` +
                    ` is not available with the current Mastodon version` +
                    result.version +
                    ` It was removed on version ${until}.`);
            }
            case 'compatible': {
                return origin.apply(this, args);
            }
        }
    };
};

class Paginator {
    constructor(http, nextPath, nextParams) {
        this.http = http;
        this.nextPath = nextPath;
        this.nextParams = nextParams;
        this.pluckNext = (link) => {
            var _a;
            if (link == undefined) {
                return undefined;
            }
            const path = (_a = link
                .match(/<([^>]+?)>; rel="next"/)) === null || _a === void 0 ? void 0 : _a[1].replace(/^https?:\/\/[^/]+/, '');
            return path;
        };
    }
    next() {
        var _a, _b;
        return __awaiter(this, void 0, void 0, function* () {
            if (this.nextPath == undefined) {
                return { done: true, value: undefined };
            }
            const response = yield this.http.request({
                requestInit: { method: 'GET' },
                path: this.nextPath,
                searchParams: this.nextParams,
            });
            const next = (_a = this.pluckNext(response.headers.get('link'))) === null || _a === void 0 ? void 0 : _a.split('?');
            this.nextPath = next === null || next === void 0 ? void 0 : next[0];
            this.nextParams = qs.parse((_b = next === null || next === void 0 ? void 0 : next[1]) !== null && _b !== void 0 ? _b : '');
            return {
                done: false,
                value: response.data,
            };
        });
    }
    return(value) {
        return __awaiter(this, void 0, void 0, function* () {
            this.clear();
            return {
                done: true,
                value: yield value,
            };
        });
    }
    throw(e) {
        return __awaiter(this, void 0, void 0, function* () {
            this.clear();
            throw e;
        });
    }
    then(onfulfilled = Promise.resolve, onrejected = Promise.reject) {
        // we assume the first item won't be undefined
        // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
        return this.next().then((value) => onfulfilled(value.value), onrejected);
    }
    [Symbol.asyncIterator]() {
        return this;
    }
    clear() {
        this.nextPath = undefined;
        this.nextParams = undefined;
    }
    clone() {
        return new Paginator(this.http, this.nextPath, this.nextParams);
    }
}

// implements Repository<Account, CreateAccountParams>
let AccountRepository$1 = class AccountRepository {
    constructor(http, config, logger) {
        this.http = http;
        this.config = config;
        this.logger = logger;
    }
    /**
     * View information about a profile.
     * @param id The id of the account in the database
     * @return Account
     * @see https://docs.joinmastodon.org/methods/accounts/
     */
    fetch(id) {
        return this.http.get(`/api/v1/accounts/${id}`);
    }
    /**
     * Creates a user and account records. Returns an account access token
     * for the app that initiated the request. The app should save this token for later,
     * and should wait for the user to confirm their account by clicking a link in their email inbox.
     * @param params Parameters
     * @return Token
     * @see https://docs.joinmastodon.org/methods/accounts/#create
     */
    create(params) {
        return this.http.post(`/api/v1/accounts`, params, {
            headers: { 'Content-Type': 'multipart/form-data' },
        });
    }
    /**
     * Test to make sure that the user token works.
     * @return the user's own Account with Source
     * @see https://docs.joinmastodon.org/methods/accounts/
     */
    verifyCredentials() {
        return this.http.get('/api/v1/accounts/verify_credentials');
    }
    /**
     *  Update the user's display and preferences.
     * @param params Parameters
     * @return the user's own Account with Source
     * @see https://docs.joinmastodon.org/methods/accounts/
     */
    updateCredentials(params) {
        return this.http.patch('/api/v1/accounts/update_credentials', params, {
            headers: { 'Content-Type': 'multipart/form-data' },
        });
    }
    /**
     * Accounts which follow the given account, if network is not hidden by the account owner.
     * @param id The id of the account in the database
     * @param params Parameters
     * @return Array of Account
     * @see https://docs.joinmastodon.org/methods/accounts/
     */
    listFollowers(id, params = {}) {
        return new Paginator(this.http, `/api/v1/accounts/${id}/followers`, params);
    }
    /**
     * Accounts which the given account is following, if network is not hidden by the account owner.
     * @param id The id of the account in the database
     * @param params Parameters
     * @return Array of Account
     * @see https://docs.joinmastodon.org/methods/accounts/
     */
    listFollowing(id, params = {}) {
        return new Paginator(this.http, `/api/v1/accounts/${id}/following`, params);
    }
    /**
     * Statuses posted to the given account.
     * @param id The id of the account in the database
     * @param params Parameters
     * @return Array of Status
     * @see https://docs.joinmastodon.org/methods/accounts/
     */
    listStatuses(id, params = {}) {
        return new Paginator(this.http, `/api/v1/accounts/${id}/statuses`, params);
    }
    /**
     * Follow the given account.
     * @param id The id of the account in the database
     * @param params Parameters
     * @return Relationship
     * @see https://docs.joinmastodon.org/methods/accounts/
     */
    follow(id, params) {
        return this.http.post(`/api/v1/accounts/${id}/follow`, params);
    }
    /**
     * Unfollow the given account
     * @param id The id of the account in the database
     * @return Relationship
     * @see https://docs.joinmastodon.org/methods/accounts/
     */
    unfollow(id, params) {
        return this.http.post(`/api/v1/accounts/${id}/unfollow`, params);
    }
    /**
     * Find out whether a given account is followed, blocked, muted, etc.
     * @param id Array of account IDs to check
     * @return Array of Relationship
     * @see https://docs.joinmastodon.org/methods/accounts/
     */
    fetchRelationships(id) {
        return this.http.get('/api/v1/accounts/relationships', {
            id,
        });
    }
    /**
     * Search for matching accounts by username or display name.
     * @param params Parameters
     * @return Array of Account
     * @see https://docs.joinmastodon.org/methods/accounts/
     */
    search(params) {
        return new Paginator(this.http, `/api/v1/accounts/search`, params);
    }
    /**
     * Block the given account. Clients should filter statuses from this account if received (e.g. due to a boost in the Home timeline)
     * @param id The id of the account in the database
     * @return Relationship
     * @see https://docs.joinmastodon.org/methods/accounts/
     */
    block(id) {
        return this.http.post(`/api/v1/accounts/${id}/block`);
    }
    /**
     * Unblock the given account.
     * @param id The id of the account in the database
     * @return Relationship
     * @see https://docs.joinmastodon.org/methods/accounts/
     */
    unblock(id) {
        return this.http.post(`/api/v1/accounts/${id}/unblock`);
    }
    /**
     * Add the given account to the user's featured profiles. (Featured profiles are currently shown on the user's own public profile.)
     * @param id The id of the account in the database
     * @return Relationship
     * @see https://docs.joinmastodon.org/methods/accounts#pin
     */
    pin(id) {
        return this.http.post(`/api/v1/accounts/${id}/pin`);
    }
    /**
     * Remove the given account from the user's featured profiles.
     * @param id The id of the account in the database
     * @return Relationship
     * @see https://docs.joinmastodon.org/methods/accounts/
     */
    unpin(id) {
        return this.http.post(`/api/v1/accounts/${id}/unpin`);
    }
    /**
     * Fetch the list with the given ID. Used for verifying the title of a list.
     * @param id ID of the list in the database
     * @return Array of List
     * @see https://docs.joinmastodon.org/methods/timelines/lists/
     */
    listLists(id) {
        return new Paginator(this.http, `/api/v1/accounts/${id}/lists`);
    }
    /**
     * Mute the given account. Clients should filter statuses and notifications from this account, if received (e.g. due to a boost in the Home timeline).
     * @param id The id of the account in the database
     * @param params Parameter
     * @return Relationship
     * @see https://docs.joinmastodon.org/methods/accounts/
     */
    mute(id, params) {
        return this.http.post(`/api/v1/accounts/${id}/mute`, params);
    }
    /**
     * Unmute the given account.
     * @param id The id of the account in the database
     * @return Relationship
     * @see https://docs.joinmastodon.org/methods/accounts/
     */
    unmute(id) {
        return this.http.post(`/api/v1/accounts/${id}/unmute`);
    }
    /**
     * Add personal note to the account
     * @param id ID of the account
     * @param param Parameters
     * @return Relationship
     */
    createNote(id, params) {
        return this.http.post(`/api/v1/accounts/${id}/note`, params);
    }
    /**
     * Get featured tag of the account
     * @param id ID of the account
     * @return FeaturedTags
     */
    listFeaturedTags(id) {
        return new Paginator(this.http, `/api/v1/accounts/${id}/featured_tags`);
    }
    /**
     * Identity proofs
     * @param id The id of the account in the database
     * @return Array of IdentityProof
     * @see https://github.com/tootsuite/mastodon/pull/10297
     */
    listIdentityProofs(id) {
        return new Paginator(this.http, `/api/v1/accounts/${id}/identity_proofs`);
    }
    /**
     * This method allows to quickly convert a username of a known account to an ID that can be used with the REST API, or to check if a username is available for sign-up
     * @param params Parameters
     * @return Account
     */
    lookup(params) {
        return this.http.get('/api/v1/accounts/lookup', params);
    }
    /**
     * Obtain a list of all accounts that follow a given account, filtered for accounts you follow.
     * @returns Array of FamiliarFollowers
     */
    fetchFamiliarFollowers(id) {
        return this.http.get(`/api/v1/accounts/familiar_followers`, { id });
    }
    /**
     * @param id ID of the account
     * @returns N/A
     */
    removeFromFollowers(id) {
        return this.http.post(`/api/v1/accounts/${id}/remove_from_followers`);
    }
};
__decorate([
    version({ since: '0.0.0' })
], AccountRepository$1.prototype, "fetch", null);
__decorate([
    version({ since: '2.7.0' })
], AccountRepository$1.prototype, "create", null);
__decorate([
    version({ since: '0.0.0' })
], AccountRepository$1.prototype, "verifyCredentials", null);
__decorate([
    version({ since: '0.0.0' })
], AccountRepository$1.prototype, "updateCredentials", null);
__decorate([
    version({ since: '0.0.0' })
], AccountRepository$1.prototype, "listFollowers", null);
__decorate([
    version({ since: '0.0.0' })
], AccountRepository$1.prototype, "listFollowing", null);
__decorate([
    version({ since: '0.0.0' })
], AccountRepository$1.prototype, "listStatuses", null);
__decorate([
    version({ since: '0.0.0' })
], AccountRepository$1.prototype, "follow", null);
__decorate([
    version({ since: '0.0.0' })
], AccountRepository$1.prototype, "unfollow", null);
__decorate([
    version({ since: '0.0.0' })
], AccountRepository$1.prototype, "fetchRelationships", null);
__decorate([
    version({ since: '0.0.0' })
], AccountRepository$1.prototype, "search", null);
__decorate([
    version({ since: '0.0.0' })
], AccountRepository$1.prototype, "block", null);
__decorate([
    version({ since: '0.0.0' })
], AccountRepository$1.prototype, "unblock", null);
__decorate([
    version({ since: '2.5.0' })
], AccountRepository$1.prototype, "pin", null);
__decorate([
    version({ since: '2.5.0' })
], AccountRepository$1.prototype, "unpin", null);
__decorate([
    version({ since: '2.1.0' })
], AccountRepository$1.prototype, "listLists", null);
__decorate([
    version({ since: '0.0.0' })
], AccountRepository$1.prototype, "mute", null);
__decorate([
    version({ since: '0.0.0' })
], AccountRepository$1.prototype, "unmute", null);
__decorate([
    version({ since: '3.2.0' })
], AccountRepository$1.prototype, "createNote", null);
__decorate([
    version({ since: '3.3.0' })
], AccountRepository$1.prototype, "listFeaturedTags", null);
__decorate([
    version({ since: '2.8.0' })
], AccountRepository$1.prototype, "listIdentityProofs", null);
__decorate([
    version({ since: '3.4.0' })
], AccountRepository$1.prototype, "lookup", null);
__decorate([
    version({ since: '3.5.0' })
], AccountRepository$1.prototype, "fetchFamiliarFollowers", null);
__decorate([
    version({ since: '3.5.0' })
], AccountRepository$1.prototype, "removeFromFollowers", null);

/**
 * Decorator that verifies the version of the Mastodon instance
 * @param parameters Optional params
 */
const deprecated = (message) => (_target, name, descriptor) => {
    const origin = descriptor.value;
    if (origin == undefined) {
        throw new MastoUnexpectedError('deprecated can only apply to a method of a class');
    }
    descriptor.value = function (...args) {
        var _a, _b;
        if ((_a = this.config) === null || _a === void 0 ? void 0 : _a.shouldWarnDeprecated()) {
            (_b = this.logger) === null || _b === void 0 ? void 0 : _b.warn(`#${name.toString()} is deprecated. ${message}`);
        }
        return origin.apply(this, args);
    };
};

class StreamRepository {
    constructor(ws, config, logger) {
        this.ws = ws;
        this.config = config;
        this.logger = logger;
    }
    /**
     * Starting home timeline and notification streaming
     * @return Instance of EventEmitter
     * @see https://docs.joinmastodon.org/methods/timelines/streaming/
     */
    streamUser() {
        return this.ws.stream('/api/v1/streaming', {
            stream: 'user',
        });
    }
    /**
     * Starting federated timeline streaming
     * @return Instance of EventEmitter
     * @see https://docs.joinmastodon.org/methods/timelines/streaming/
     */
    streamPublicTimeline() {
        return this.ws.stream('/api/v1/streaming', {
            stream: 'public',
        });
    }
    /**
     * Starting local timeline streaming
     * @return Instance of EventEmitter
     * @see https://docs.joinmastodon.org/methods/timelines/streaming/
     */
    streamCommunityTimeline() {
        return this.ws.stream('/api/v1/streaming', {
            stream: 'public:local',
        });
    }
    /**
     * Stream remote public timeline
     * @return Instance of EventEmitter
     * @see https://docs.joinmastodon.org/methods/timelines/streaming/
     */
    streamRemotePublicTimeline() {
        return this.ws.stream('/api/v1/streaming', {
            stream: 'public:remote',
        });
    }
    /**
     * Starting tag timeline streaming
     * @param id ID of the tag
     * @return Instance of EventEmitter
     * @see https://docs.joinmastodon.org/methods/timelines/streaming/
     */
    streamTagTimeline(id) {
        return this.ws.stream('/api/v1/streaming', {
            stream: 'hashtag',
            tag: id,
        });
    }
    /**
     * Starting local tag timeline streaming
     * @param id ID of the tag
     * @return Instance of EventEmitter
     * @see https://docs.joinmastodon.org/methods/timelines/streaming/
     */
    streamLocalTagTimeline(id) {
        return this.ws.stream('/api/v1/streaming', {
            stream: 'hashtag:local',
            tag: id,
        });
    }
    /**
     * Starting list timeline streaming
     * @param id ID of the list
     * @return Instance of EventEmitter
     * @see https://docs.joinmastodon.org/methods/timelines/streaming/
     */
    streamListTimeline(id) {
        return this.ws.stream('/api/v1/streaming', {
            stream: 'list',
            list: id,
        });
    }
    /**
     * Starting direct timeline streaming
     * @return Instance of EventEmitter
     * @see https://docs.joinmastodon.org/methods/timelines/streaming/
     */
    streamDirectTimeline() {
        return this.ws.stream('/api/v1/streaming', {
            stream: 'direct',
        });
    }
}
__decorate([
    version({ since: '0.0.0' })
], StreamRepository.prototype, "streamUser", null);
__decorate([
    version({ since: '0.0.0' })
], StreamRepository.prototype, "streamPublicTimeline", null);
__decorate([
    version({ since: '0.0.0' })
], StreamRepository.prototype, "streamCommunityTimeline", null);
__decorate([
    version({ since: '0.0.0' })
], StreamRepository.prototype, "streamRemotePublicTimeline", null);
__decorate([
    version({ since: '0.0.0' })
], StreamRepository.prototype, "streamTagTimeline", null);
__decorate([
    version({ since: '0.0.0' })
], StreamRepository.prototype, "streamLocalTagTimeline", null);
__decorate([
    version({ since: '0.0.0' })
], StreamRepository.prototype, "streamListTimeline", null);
__decorate([
    version({ since: '0.0.0' })
], StreamRepository.prototype, "streamDirectTimeline", null);

class AnnouncementRepository {
    constructor(http, config, logger) {
        this.http = http;
        this.config = config;
        this.logger = logger;
    }
    /**
     * Fetch announcements
     * @return Announcements
     * @see https://docs.joinmastodon.org/methods/announcements/
     */
    list() {
        return new Paginator(this.http, '/api/v1/announcements');
    }
    /**
     * Dismiss announcement
     * @param id ID of the announcement
     * @return Nothing
     * @see https://docs.joinmastodon.org/methods/announcements/
     */
    dismiss(id) {
        return this.http.post(`/api/v1/announcements/${id}/dismiss`);
    }
    /**
     * Add a reaction to an announcement
     * @param id ID of the announcement
     * @param name Emoji string
     * @return N/A
     * @see https://docs.joinmastodon.org/methods/announcements/
     */
    addReaction(id, name) {
        return this.http.put(`/api/v1/announcements/${id}/reactions/${name}`);
    }
    /**
     * Remove a reaction from an announcement
     * @param id ID of the announcement
     * @param name Emoji string
     * @return N/A
     * @see https://docs.joinmastodon.org/methods/announcements/
     */
    removeReaction(id, name) {
        return this.http.delete(`/api/v1/announcements/${id}/reactions/${name}`);
    }
}
__decorate([
    version({ since: '3.1.0' })
], AnnouncementRepository.prototype, "list", null);
__decorate([
    version({ since: '3.1.0' })
], AnnouncementRepository.prototype, "dismiss", null);
__decorate([
    version({ since: '3.1.0' })
], AnnouncementRepository.prototype, "addReaction", null);
__decorate([
    version({ since: '3.1.0' })
], AnnouncementRepository.prototype, "removeReaction", null);

class AppRepository {
    constructor(http, config, logger) {
        this.http = http;
        this.config = config;
        this.logger = logger;
    }
    /**
     * Create a new application to obtain OAuth2 credentials.
     * @param params Parameters
     * @return Returns App with `client_id` and `client_secret`
     * @see https://docs.joinmastodon.org/methods/apps/
     */
    create(params) {
        return this.http.post(`/api/v1/apps`, params);
    }
    /**
     * Confirm that the app's OAuth2 credentials work.
     * @return Application
     * @see https://docs.joinmastodon.org/methods/apps/
     */
    verifyCredentials() {
        return this.http.get(`/api/v1/apps/verify_credentials`);
    }
}
__decorate([
    version({ since: '0.0.0' })
], AppRepository.prototype, "create", null);
__decorate([
    version({ since: '2.0.0' })
], AppRepository.prototype, "verifyCredentials", null);

class BlockRepository {
    constructor(http, config, logger) {
        this.http = http;
        this.config = config;
        this.logger = logger;
    }
    /**
     * Blocked users
     * @param params Array of Account
     * @return Query parameter
     * @see https://docs.joinmastodon.org/methods/accounts/blocks/
     */
    list(params = {}) {
        return new Paginator(this.http, `/api/v1/blocks`, params);
    }
}
__decorate([
    version({ since: '0.0.0' })
], BlockRepository.prototype, "list", null);

class BookmarkRepository {
    constructor(http, config, logger) {
        this.http = http;
        this.config = config;
        this.logger = logger;
    }
    /**
     * Statuses the user has bookmarked.
     * @param params Parameters
     * @return Array of Statuses
     * @see https://docs.joinmastodon.org/methods/accounts/bookmarks/
     */
    list(params = {}) {
        return new Paginator(this.http, '/api/v1/bookmarks', params);
    }
}
__decorate([
    version({ since: '3.1.0' })
], BookmarkRepository.prototype, "list", null);

class ConversationRepository {
    constructor(http, config, logger) {
        this.http = http;
        this.config = config;
        this.logger = logger;
    }
    /**
     * Show conversation
     * @param params Parameters
     * @return Array of Conversation
     * @see https://docs.joinmastodon.org/methods/timelines/conversations/
     */
    list(params = {}) {
        return new Paginator(this.http, '/api/v1/conversations', params);
    }
    /**
     * Remove conversation
     * @param id ID of the conversation in the database
     * @return N/A
     * @see https://docs.joinmastodon.org/methods/timelines/conversations/
     */
    remove(id) {
        return this.http.delete(`/api/v1/conversations/${id}`);
    }
    /**
     * Mark as read
     * @param id ID of the conversation in the database
     * @return Conversation
     * @see https://docs.joinmastodon.org/methods/timelines/conversations/
     */
    read(id) {
        return this.http.post(`/api/v1/conversations/${id}/read`);
    }
}
__decorate([
    version({ since: '2.6.0' })
], ConversationRepository.prototype, "list", null);
__decorate([
    version({ since: '2.6.0' })
], ConversationRepository.prototype, "remove", null);
__decorate([
    version({ since: '2.6.0' })
], ConversationRepository.prototype, "read", null);

class CustomEmojiRepository {
    constructor(http, config, logger) {
        this.http = http;
        this.config = config;
        this.logger = logger;
    }
    /**
     * Returns custom emojis that are available on the server.
     * @return Array of Emoji
     * @see https://docs.joinmastodon.org/methods/instance/custom_emojis/
     */
    list() {
        return new Paginator(this.http, `/api/v1/custom_emojis`);
    }
}
__decorate([
    version({ since: '2.0.0' })
], CustomEmojiRepository.prototype, "list", null);

class DirectoryRepository {
    constructor(http, config, logger) {
        this.http = http;
        this.config = config;
        this.logger = logger;
    }
    /**
     * List accounts visible in the directory.
     * @param params Parameters
     * @return Array of Account
     * @see https://docs.joinmastodon.org/methods/instance/directory/
     */
    list(params) {
        return new Paginator(this.http, '/api/v1/directory', params);
    }
}
__decorate([
    version({ since: '3.0.0' })
], DirectoryRepository.prototype, "list", null);

let DomainBlockRepository$1 = class DomainBlockRepository {
    constructor(http, config, logger) {
        this.http = http;
        this.config = config;
        this.logger = logger;
    }
    /**
     * View domains the user has blocked.
     * @param params Parameters
     * @return Array of strings
     * @see https://docs.joinmastodon.org/methods/accounts/domain_blocks/
     */
    list(params) {
        return new Paginator(this.http, `/api/v1/domain_blocks`, params);
    }
    /**
     * Block a domain to:
     * - hide all public posts from it
     * - hide all notifications from it
     * - remove all followers from it
     * - prevent following new users from it (but does not remove existing follows)
     * @param domain Domain to block.
     * @return N/A
     * @see https://docs.joinmastodon.org/methods/accounts/domain_blocks/
     */
    block(domain) {
        return this.http.post(`/api/v1/domain_blocks`, {
            domain,
        });
    }
    /**
     * Remove a domain block, if it exists in the user's array of blocked domains.
     * @param domain Domain to unblock
     * @return N/A
     * @see https://docs.joinmastodon.org/methods/accounts/domain_blocks/
     */
    unblock(domain) {
        return this.http.delete(`/api/v1/domain_blocks`, {
            domain,
        });
    }
};
__decorate([
    version({ since: '1.4.0' })
], DomainBlockRepository$1.prototype, "list", null);
__decorate([
    version({ since: '1.4.0' })
], DomainBlockRepository$1.prototype, "block", null);
__decorate([
    version({ since: '1.4.0' })
], DomainBlockRepository$1.prototype, "unblock", null);

class EndorsementRepository {
    constructor(http, config, logger) {
        this.http = http;
        this.config = config;
        this.logger = logger;
    }
    /**
     * Accounts that the user is currently featuring on their profile.
     * @return Array of Account
     * @see https://docs.joinmastodon.org/methods/accounts/endorsements/
     */
    list(params) {
        return new Paginator(this.http, `/api/v1/endorsements`, params);
    }
}
__decorate([
    version({ since: '2.5.0' })
], EndorsementRepository.prototype, "list", null);

class FavouriteRepository {
    constructor(http, config, logger) {
        this.http = http;
        this.config = config;
        this.logger = logger;
    }
    /**
     * Statuses the user has favourited.
     * @param params Parameters
     * @return Array of Status
     * @see https://docs.joinmastodon.org/methods/accounts/favourites/
     */
    list(params) {
        return new Paginator(this.http, `/api/v1/favourites`, params);
    }
}
__decorate([
    version({ since: '0.0.0' })
], FavouriteRepository.prototype, "list", null);

class FeaturedTagRepository {
    constructor(http, config, logger) {
        this.http = http;
        this.config = config;
        this.logger = logger;
    }
    /**
     * View your featured tags
     * @return Array of FeaturedTag
     * @see https://docs.joinmastodon.org/methods/accounts/featured_tags/
     * @done
     */
    list() {
        return new Paginator(this.http, '/api/v1/featured_tags');
    }
    /**
     * Feature a tag
     * @param params Parameters
     * @return FeaturedTag
     * @see https://docs.joinmastodon.org/methods/accounts/featured_tags/
     */
    create(params) {
        return this.http.post('/api/v1/featured_tags', params, {
            headers: { 'Content-Type': 'multipart/form-data' },
        });
    }
    /**
     * Shows your 10 most-used tags, with usage history for the past week.
     * @return Array of Tag with History
     * @see https://docs.joinmastodon.org/methods/accounts/featured_tags/
     */
    listSuggestions() {
        return new Paginator(this.http, '/api/v1/featured_tags/suggestions');
    }
    /**
     * Un-feature a tag
     * @param id The id of the FeaturedTag to be un-featured
     * @return N/A
     * @see https://docs.joinmastodon.org/methods/accounts/featured_tags/
     */
    remove(id) {
        return this.http.delete(`/api/v1/featured_tags/${id}`);
    }
}
__decorate([
    version({ since: '3.0.0' })
], FeaturedTagRepository.prototype, "list", null);
__decorate([
    version({ since: '3.0.0' })
], FeaturedTagRepository.prototype, "create", null);
__decorate([
    version({ since: '3.0.0' })
], FeaturedTagRepository.prototype, "listSuggestions", null);
__decorate([
    version({ since: '3.0.0' })
], FeaturedTagRepository.prototype, "remove", null);

let FilterRepository$1 = class FilterRepository {
    constructor(http, config, logger) {
        this.http = http;
        this.config = config;
        this.logger = logger;
    }
    /**
     * View all filters
     * @return Filter
     * @see https://docs.joinmastodon.org/methods/accounts/filters/
     */
    list() {
        return new Paginator(this.http, `/api/v1/filters`);
    }
    /**
     * View a single filter
     * @param id ID of the filter
     * @return Returns Filter
     * @see https://docs.joinmastodon.org/methods/accounts/filters/
     */
    fetch(id) {
        return this.http.get(`/api/v1/filters/${id}`);
    }
    /**
     * Create a filter
     * @param params Parameters
     * @return Filter
     * @see https://docs.joinmastodon.org/methods/accounts/filters/
     */
    create(params) {
        return this.http.post(`/api/v1/filters`, params);
    }
    /**
     * Update a filter
     * @param id ID of the filter in the database
     * @param params Parameters
     * @return Filter
     * @see https://docs.joinmastodon.org/methods/accounts/filters/
     */
    update(id, params) {
        return this.http.put(`/api/v1/filters/${id}`, params);
    }
    /**
     * Remove a filter
     * @param id ID of the filter in the database
     * @return N/A
     * @see https://docs.joinmastodon.org/methods/accounts/filters/
     */
    remove(id) {
        return this.http.delete(`/api/v1/filters/${id}`);
    }
};
__decorate([
    version({ since: '2.4.3' })
], FilterRepository$1.prototype, "list", null);
__decorate([
    version({ since: '2.4.3' })
], FilterRepository$1.prototype, "fetch", null);
__decorate([
    version({ since: '2.4.3' })
], FilterRepository$1.prototype, "create", null);
__decorate([
    version({ since: '2.4.3' })
], FilterRepository$1.prototype, "update", null);
__decorate([
    version({ since: '2.4.3' })
], FilterRepository$1.prototype, "remove", null);

class FollowRequestRepository {
    constructor(http, config, logger) {
        this.http = http;
        this.config = config;
        this.logger = logger;
    }
    /**
     * Pending Follows
     * @param params Parameters
     * @return Array of Account
     * @see https://docs.joinmastodon.org/methods/accounts/follow_requests/
     */
    list(params) {
        return new Paginator(this.http, `/api/v1/follow_requests`, params);
    }
    /**
     * Accept Follow
     * @param id ID of the account in the database
     * @return Relationship
     * @see https://docs.joinmastodon.org/methods/accounts/follow_requests/
     */
    authorize(id) {
        return this.http.post(`/api/v1/follow_requests/${id}/authorize`);
    }
    /**
     * Reject Follow
     * @param id ID of the account in the database
     * @return Relationship
     * @see https://docs.joinmastodon.org/methods/accounts/follow_requests/
     */
    reject(id) {
        return this.http.post(`/api/v1/follow_requests/${id}/reject`);
    }
}
__decorate([
    version({ since: '0.0.0' })
], FollowRequestRepository.prototype, "list", null);
__decorate([
    version({ since: '0.0.0' })
], FollowRequestRepository.prototype, "authorize", null);
__decorate([
    version({ since: '0.0.0' })
], FollowRequestRepository.prototype, "reject", null);

let InstanceRepository$1 = class InstanceRepository {
    constructor(http, config, logger) {
        this.http = http;
        this.config = config;
        this.logger = logger;
    }
    /**
     * Information about the server.
     * @return Instance
     * @see https://docs.joinmastodon.org/methods/instance/
     */
    fetch() {
        return this.http.get('/api/v1/instance');
    }
    /**
     * Domains that this instance is aware of.
     * @return Array of Activity
     * @see https://docs.joinmastodon.org/methods/instance/
     */
    listPeers() {
        return new Paginator(this.http, '/api/v1/instance/peers');
    }
    /**
     * Instance activity over the last 3 months, binned weekly.
     * @return Array of Activity
     * @see https://docs.joinmastodon.org/methods/instance/
     */
    listActivities() {
        return new Paginator(this.http, '/api/v1/instance/activity');
    }
};
__decorate([
    version({ since: '1.0.0' })
], InstanceRepository$1.prototype, "fetch", null);
__decorate([
    version({ since: '2.1.2' })
], InstanceRepository$1.prototype, "listPeers", null);
__decorate([
    version({ since: '2.1.2' })
], InstanceRepository$1.prototype, "listActivities", null);

class ListRepository {
    constructor(http, config, logger) {
        this.http = http;
        this.config = config;
        this.logger = logger;
    }
    /**
     * Fetch the list with the given ID. Used for verifying the title of a list.
     * @param id ID of the list in the database
     * @return List
     * @see https://docs.joinmastodon.org/methods/timelines/lists/
     */
    fetch(id) {
        return this.http.get(`/api/v1/lists/${id}`);
    }
    /**
     * Fetch all lists that the user owns.
     * @return Array of List
     * @see https://docs.joinmastodon.org/methods/timelines/lists/
     */
    list() {
        return new Paginator(this.http, '/api/v1/lists');
    }
    /**
     * Create a new list.
     * @param params Parameters
     * @return List
     * @see https://docs.joinmastodon.org/methods/timelines/lists/
     */
    create(params) {
        return this.http.post('/api/v1/lists', params);
    }
    /**
     * Change the title of a list.
     * @param id ID of the list in the database
     * @param params Parameters
     * @return List
     * @see https://docs.joinmastodon.org/methods/timelines/lists/
     */
    update(id, params) {
        return this.http.put(`/api/v1/lists/${id}`, params);
    }
    /**
     * Delete a list
     * @param id ID of the list in the database
     * @return N/A
     * @see https://docs.joinmastodon.org/methods/timelines/lists/
     */
    remove(id) {
        return this.http.delete(`/api/v1/lists/${id}`);
    }
    /**
     * View accounts in list
     * @param id ID of the list in the database
     * @param params Parameters
     * @return Array of Account
     * @see https://docs.joinmastodon.org/methods/timelines/lists#accounts
     */
    listAccounts(id, params) {
        return new Paginator(this.http, `/api/v1/lists/${id}/accounts`, params);
    }
    /**
     * Add accounts to the given list. Note that the user must be following these accounts.
     * @param id ID of the list in the database
     * @param params Parameters
     * @return N/A
     * @see https://docs.joinmastodon.org/methods/timelines/lists#accounts-add
     */
    addAccount(id, params) {
        return this.http.post(`/api/v1/lists/${id}/accounts`, params);
    }
    /**
     * Remove accounts from the given list.
     * @param id ID of the list in the database
     * @param params Parameters
     * @return N/A
     * @see https://docs.joinmastodon.org/methods/timelines/lists#accounts-remove
     */
    removeAccount(id, params) {
        return this.http.delete(`/api/v1/lists/${id}/accounts`, params);
    }
}
__decorate([
    version({ since: '2.1.0' })
], ListRepository.prototype, "fetch", null);
__decorate([
    version({ since: '2.1.0' })
], ListRepository.prototype, "list", null);
__decorate([
    version({ since: '2.1.0' })
], ListRepository.prototype, "create", null);
__decorate([
    version({ since: '2.1.0' })
], ListRepository.prototype, "update", null);
__decorate([
    version({ since: '2.1.0' })
], ListRepository.prototype, "remove", null);
__decorate([
    version({ since: '2.1.0' })
], ListRepository.prototype, "listAccounts", null);
__decorate([
    version({ since: '2.1.0' })
], ListRepository.prototype, "addAccount", null);
__decorate([
    version({ since: '2.1.0' })
], ListRepository.prototype, "removeAccount", null);

class MarkerRepository {
    constructor(http, config, logger) {
        this.http = http;
        this.config = config;
        this.logger = logger;
    }
    /**
     * Get saved timeline position
     * @param params Parameters
     * @return Markers
     * @see https://docs.joinmastodon.org/methods/timelines/markers/
     */
    fetch(params) {
        return this.http.get('/api/v1/markers', params);
    }
    /**
     * Save position in timeline
     * @param params Parameters
     * @return Markers
     * @see https://github.com/tootsuite/mastodon/pull/11762
     */
    create(params) {
        return this.http.post('/api/v1/markers', params);
    }
}
__decorate([
    version({ since: '3.0.0' })
], MarkerRepository.prototype, "fetch", null);
__decorate([
    version({ since: '3.0.0' })
], MarkerRepository.prototype, "create", null);

let MediaAttachmentRepository$1 = class MediaAttachmentRepository {
    constructor(http, config, logger) {
        this.http = http;
        this.config = config;
        this.logger = logger;
    }
    /**
     * Creates an attachment to be used with a new status.
     * @param params Parameters
     * @return Attachment
     * @see https://docs.joinmastodon.org/methods/statuses/media/
     */
    /* istanbul ignore next */
    create(params) {
        return this.http.post(`/api/v1/media`, params, {
            headers: { 'Content-Type': 'multipart/form-data' },
        });
    }
    /**
     * Fetches an attachment to be used with a new status.
     * @param id ID of the attachment
     * @see https://github.com/tootsuite/mastodon/pull/13210
     */
    fetch(id) {
        return this.http.get(`/api/v1/media/${id}`);
    }
    /**
     * Update an Attachment, before it is attached to a status and posted.
     * @param id The id of the Attachment entity to be updated
     * @param params Parameters
     * @return Attachment
     * @see https://docs.joinmastodon.org/methods/statuses/media/
     */
    update(id, params) {
        return this.http.put(`/api/v1/media/${id}`, params, {
            headers: { 'Content-Type': 'multipart/form-data' },
        });
    }
};
__decorate([
    deprecated('Use MastoClient.v2.media.create instead'),
    version({ since: '0.0.0', until: '3.1.3' })
    /* istanbul ignore next */
], MediaAttachmentRepository$1.prototype, "create", null);
__decorate([
    version({ since: '3.1.3' })
], MediaAttachmentRepository$1.prototype, "fetch", null);
__decorate([
    version({ since: '0.0.0' })
], MediaAttachmentRepository$1.prototype, "update", null);

class MuteRepository {
    constructor(http, config, logger) {
        this.http = http;
        this.config = config;
        this.logger = logger;
    }
    /**
     * Accounts the user has muted.
     * @param params Parameters
     * @return Array of Account
     * @see https://docs.joinmastodon.org/methods/accounts/mutes/
     */
    list(params) {
        return new Paginator(this.http, '/api/v1/mutes', params);
    }
}
__decorate([
    version({ since: '0.0.0' })
], MuteRepository.prototype, "list", null);

class NotificationRepository {
    constructor(http, config, logger) {
        this.http = http;
        this.config = config;
        this.logger = logger;
    }
    /**
     * Notifications concerning the user.
     * This API returns Link headers containing links to the next/previous page.
     * However, the links can also be constructed dynamically using query params and `id` values.
     * @param params Query parameter
     * @return Array of Notification
     * @see https://docs.joinmastodon.org/methods/notifications/
     */
    list(params) {
        return new Paginator(this.http, '/api/v1/notifications', params);
    }
    /**
     * View information about a notification with a given ID.
     * @param id ID of the notification in the database.
     * @return Notification
     * @see https://docs.joinmastodon.org/methods/notifications/
     */
    fetch(id) {
        return this.http.get(`/api/v1/notifications/${id}`);
    }
    /**
     * Clear all notifications from the server.
     * @return N/A
     * @see https://docs.joinmastodon.org/methods/notifications/
     */
    clear() {
        return this.http.post('/api/v1/notifications/clear');
    }
    /**
     * Clear a single notification from the server.
     * @param id ID of the notification to be cleared
     * @return N/A
     * @see https://docs.joinmastodon.org/methods/notifications/
     */
    dismiss(id) {
        return this.http.post(`/api/v1/notifications/${id}/dismiss`);
    }
}
__decorate([
    version({ since: '0.0.0' })
], NotificationRepository.prototype, "list", null);
__decorate([
    version({ since: '0.0.0' })
], NotificationRepository.prototype, "fetch", null);
__decorate([
    version({ since: '0.0.0' })
], NotificationRepository.prototype, "clear", null);
__decorate([
    version({ since: '2.6.0' })
], NotificationRepository.prototype, "dismiss", null);

class PollRepository {
    constructor(http, config, logger) {
        this.http = http;
        this.config = config;
        this.logger = logger;
    }
    /**
     * View a poll
     * @param id ID of the poll in the database
     * @return Poll
     * @see https://docs.joinmastodon.org/methods/statuses/polls#get
     */
    fetch(id) {
        return this.http.get(`/api/v1/polls/${id}`);
    }
    /**
     * Vote on a poll
     * @param id ID of the poll in the database
     * @param params Parameters
     * @return Poll
     * @see https://docs.joinmastodon.org/methods/statuses/polls#vote
     */
    vote(id, params) {
        return this.http.post(`/api/v1/polls/${id}/votes`, params);
    }
}
__decorate([
    version({ since: '2.8.0' })
], PollRepository.prototype, "fetch", null);
__decorate([
    version({ since: '2.8.0' })
], PollRepository.prototype, "vote", null);

class PreferenceRepository {
    constructor(http, config, logger) {
        this.http = http;
        this.config = config;
        this.logger = logger;
    }
    /**
     * Preferences defined by the user in their account settings.
     * @return Preferences by key and value
     * @see https://docs.joinmastodon.org/methods/accounts/preferences/
     */
    fetch() {
        return this.http.get('/api/v1/preferences');
    }
}
__decorate([
    version({ since: '2.8.0' })
], PreferenceRepository.prototype, "fetch", null);

class WebPushSubscriptionRepository {
    constructor(http, config, logger) {
        this.http = http;
        this.config = config;
        this.logger = logger;
    }
    /**
     * Add a Web Push API subscription to receive notifications.
     * Each access token can have one push subscription.
     * If you create a new subscription, the old subscription is deleted.
     * @param params Parameters
     * @return Returns Push Subscription
     * @see https://docs.joinmastodon.org/methods/notifications/push/
     */
    create(params) {
        return this.http.post('/api/v1/push/subscription', params);
    }
    /**
     * View the PushSubscription currently associated with this access token.
     * @return PushSubscription
     * @see https://docs.joinmastodon.org/methods/notifications/push/
     */
    fetch() {
        return this.http.get('/api/v1/push/subscription');
    }
    /**
     * Updates the current push subscription. Only the data part can be updated. To change fundamentals, a new subscription must be created instead.
     * @param params Parameters
     * @return PushSubscription
     * @see https://docs.joinmastodon.org/methods/notifications/push/
     */
    update(params) {
        return this.http.put('/api/v1/push/subscription', params);
    }
    /**
     * Removes the current Web Push API subscription.
     * @return N/A
     * @see https://docs.joinmastodon.org/methods/notifications/push/
     */
    remove() {
        return this.http.delete('/api/v1/push/subscription');
    }
}
__decorate([
    version({ since: '2.4.0' })
], WebPushSubscriptionRepository.prototype, "create", null);
__decorate([
    version({ since: '2.4.0' })
], WebPushSubscriptionRepository.prototype, "fetch", null);
__decorate([
    version({ since: '2.4.0' })
], WebPushSubscriptionRepository.prototype, "update", null);
__decorate([
    version({ since: '2.4.0' })
], WebPushSubscriptionRepository.prototype, "remove", null);

let ReportRepository$1 = class ReportRepository {
    constructor(http, config, logger) {
        this.http = http;
        this.config = config;
        this.logger = logger;
    }
    /**
     * File a report
     * @param params Parameters
     * @return Report
     * @see https://docs.joinmastodon.org/methods/accounts/reports/
     */
    create(params) {
        return this.http.post('/api/v1/reports', params);
    }
};
__decorate([
    version({ since: '1.1.0' })
], ReportRepository$1.prototype, "create", null);

class ScheduledStatusRepository {
    constructor(http, config, logger) {
        this.http = http;
        this.config = config;
        this.logger = logger;
    }
    /**
     * View scheduled statuses
     * @param params Parameters
     * @return Array of ScheduledStatus
     * @see https://docs.joinmastodon.org/methods/statuses/scheduled_statuses/
     */
    list(params) {
        return new Paginator(this.http, '/api/v1/scheduled_statuses', params);
    }
    /**
     * View a single scheduled status
     * @param id ID of the scheduled status in the database.
     * @return ScheduledStatus
     * @see https://docs.joinmastodon.org/methods/statuses/scheduled_statuses/
     */
    fetch(id) {
        return this.http.get(`/api/v1/scheduled_statuses/${id}`);
    }
    /**
     * Update Scheduled status
     * @param id ID of the Status to be scheduled
     * @param params Parameters
     * @return ScheduledStatus
     * @see https://docs.joinmastodon.org/api/rest/scheduled-statuses/#put-api-v1-scheduled-statuses-id
     */
    update(id, params) {
        return this.http.put(`/api/v1/scheduled_statuses/${id}`, params);
    }
    /**
     * Cancel a scheduled status
     * @param id ID of the scheduled status in the database.
     * @return N/A
     * @see https://docs.joinmastodon.org/methods/statuses/scheduled_statuses/
     */
    remove(id) {
        return this.http.delete(`/api/v1/scheduled_statuses/${id}`);
    }
}
__decorate([
    version({ since: '2.7.0' })
], ScheduledStatusRepository.prototype, "list", null);
__decorate([
    version({ since: '2.7.0' })
], ScheduledStatusRepository.prototype, "fetch", null);
__decorate([
    version({ since: '2.7.0' })
], ScheduledStatusRepository.prototype, "update", null);
__decorate([
    version({ since: '2.7.0' })
], ScheduledStatusRepository.prototype, "remove", null);

class StatusRepository {
    constructor(http, config, logger) {
        this.http = http;
        this.config = config;
        this.logger = logger;
    }
    /**
     * View information about a status.
     * @param id Local ID of a status in the database.
     * @return Status
     * @see https://docs.joinmastodon.org/methods/statuses/
     */
    fetch(id) {
        return this.http.get(`/api/v1/statuses/${id}`);
    }
    create(params, extra = {}) {
        if (extra.idempotencyKey) {
            return this.http.post('/api/v1/statuses', params, {
                headers: { 'Idempotency-Key': extra.idempotencyKey },
            });
        }
        return this.http.post('/api/v1/statuses', params);
    }
    /**
     * Update a status
     * @param params Parameters
     * @return Status. When scheduled_at is present, ScheduledStatus is returned instead.
     * @see https://docs.joinmastodon.org/api/rest/statuses/#post-api-v1-statuses
     */
    update(id, params) {
        return this.http.put(`/api/v1/statuses/${id}`, params);
    }
    /**
     * Delete one of your own statuses.
     * @param id Local ID of a status in the database. Must be owned by authenticated account.
     * @return Status with source text and `media_attachments` or `poll`
     * @see https://docs.joinmastodon.org/methods/statuses/
     */
    remove(id) {
        return this.http.delete(`/api/v1/statuses/${id}`);
    }
    /**
     * View statuses above and below this status in the thread.
     * @param id Local ID of a status in the database.
     * @return Context
     * @see https://docs.joinmastodon.org/methods/statuses/
     */
    fetchContext(id) {
        return this.http.get(`/api/v1/statuses/${id}/context`);
    }
    /**
     * Preview card
     * @deprecated Use `card` attribute of status instead
     * @param id ID of the status in the database
     * @return Card
     * @see https://docs.joinmastodon.org/api/rest/statuses/#get-api-v1-statuses-id-card
     */
    /* istanbul ignore next */
    fetchCard(id) {
        return this.http.get(`/api/v1/statuses/${id}/card`);
    }
    /**
     * Add a status to your favourites list.
     * @param id Local ID of a status in the database.
     * @return Status
     * @see https://docs.joinmastodon.org/methods/statuses/
     */
    favourite(id) {
        return this.http.post(`/api/v1/statuses/${id}/favourite`);
    }
    /**
     * Remove a status from your favourites list.
     * @param id Local ID of a status in the database.
     * @return Status
     * @see https://docs.joinmastodon.org/methods/statuses/
     */
    unfavourite(id) {
        return this.http.post(`/api/v1/statuses/${id}/unfavourite`);
    }
    /**
     * Do not receive notifications for the thread that this status is part of. Must be a thread in which you are a participant.
     * @param id Local ID of a status in the database.
     * @return Status
     * @see https://docs.joinmastodon.org/methods/statuses/
     */
    mute(id) {
        return this.http.post(`/api/v1/statuses/${id}/mute`);
    }
    /**
     * Start receiving notifications again for the thread that this status is part of.
     * @param id Local ID of a status in the database.
     * @return Status
     * @see https://docs.joinmastodon.org/methods/statuses/
     */
    unmute(id) {
        return this.http.post(`/api/v1/statuses/${id}/unmute`);
    }
    /**
     * View who boosted a given status.
     * @param id Local ID of a status in the database.
     * @return Array of Account
     * @see https://docs.joinmastodon.org/methods/statuses/
     */
    listRebloggedBy(id) {
        return new Paginator(this.http, `/api/v1/statuses/${id}/reblogged_by`);
    }
    /**
     * View who favourited a given status.
     * @param id Local ID of a status in the database.
     * @return Array of Account
     * @see https://docs.joinmastodon.org/methods/statuses/
     */
    listFavouritedBy(id) {
        return new Paginator(this.http, `/api/v1/statuses/${id}/favourited_by`);
    }
    /**
     * Re-share a status.
     * @param id Local ID of a status in the database.
     * @return Status
     * @see https://docs.joinmastodon.org/api/rest/statuses/#post-api-v1-statuses-id-reblog
     */
    reblog(id, params) {
        return this.http.post(`/api/v1/statuses/${id}/reblog`, params);
    }
    /**
     * Undo a re-share of a status.
     * @param id Local ID of a status in the database.
     * @return Status
     * @see https://docs.joinmastodon.org/methods/statuses/
     */
    unreblog(id) {
        return this.http.post(`/api/v1/statuses/${id}/unreblog`);
    }
    /**
     * Feature one of your own public statuses at the top of your profile.
     * @param id Local ID of a status in the database. The status should be public and authored by the authorized account.
     * @return Status
     * @see https://docs.joinmastodon.org/methods/statuses/
     */
    pin(id) {
        return this.http.post(`/api/v1/statuses/${id}/pin`);
    }
    /**
     * Un-feature a status from the top of your profile.
     * @param id Local ID of a status in the database.
     * @return Status
     * @see https://docs.joinmastodon.org/methods/statuses/
     */
    unpin(id) {
        return this.http.post(`/api/v1/statuses/${id}/unpin`);
    }
    /**
     * Privately bookmark a status.
     * @param id ID of the status in the database
     * @return Status
     * @see https://docs.joinmastodon.org/methods/statuses/
     */
    bookmark(id) {
        return this.http.post(`/api/v1/statuses/${id}/bookmark`);
    }
    /**
     * Remove a status from your private bookmarks.
     * @param id ID of the status in the database
     * @return Status
     * @see https://docs.joinmastodon.org/methods/statuses/
     */
    unbookmark(id) {
        return this.http.post(`/api/v1/statuses/${id}/unbookmark`);
    }
    /**
     * Get all known versions of a status, including the initial and current states.
     * @param id The local id of the status in the database
     * @returns StatusEdit
     * @see https://docs.joinmastodon.org/methods/statuses/#history
     */
    listHistory(id) {
        return new Paginator(this.http, `/api/v1/statuses/${id}/history`);
    }
    /**
     * Obtain the source properties for a status so that it can be edited.
     * @param id The local ID of the Status in the database
     * @returns StatusSource
     * @see https://docs.joinmastodon.org/methods/statuses/#source
     */
    fetchSource(id) {
        return this.http.get(`/api/v1/statuses/${id}/source`);
    }
    /**
     * Translate the status content into some language.
     * @param id String. The ID of the Status in the database.
     * @param params Form data parameters
     * @returns Translation
     */
    translate(id, params) {
        return this.http.post(`/api/v1/statuses/${id}/translate`, params, {
            headers: { 'Content-Type': 'multipart/form-data' },
        });
    }
}
__decorate([
    version({ since: '0.0.0' })
], StatusRepository.prototype, "fetch", null);
__decorate([
    version({ since: '0.0.0' })
], StatusRepository.prototype, "create", null);
__decorate([
    version({ since: '3.5.0' })
], StatusRepository.prototype, "update", null);
__decorate([
    version({ since: '0.0.0' })
], StatusRepository.prototype, "remove", null);
__decorate([
    version({ since: '0.0.0' })
], StatusRepository.prototype, "fetchContext", null);
__decorate([
    deprecated('Use `card` attribute of status instead'),
    version({ since: '0.0.0', until: '2.9.3' })
    /* istanbul ignore next */
], StatusRepository.prototype, "fetchCard", null);
__decorate([
    version({ since: '0.0.0' })
], StatusRepository.prototype, "favourite", null);
__decorate([
    version({ since: '0.0.0' })
], StatusRepository.prototype, "unfavourite", null);
__decorate([
    version({ since: '1.4.2' })
], StatusRepository.prototype, "mute", null);
__decorate([
    version({ since: '1.4.2' })
], StatusRepository.prototype, "unmute", null);
__decorate([
    version({ since: '0.0.0' })
], StatusRepository.prototype, "listRebloggedBy", null);
__decorate([
    version({ since: '0.0.0' })
], StatusRepository.prototype, "listFavouritedBy", null);
__decorate([
    version({ since: '0.0.0' })
], StatusRepository.prototype, "reblog", null);
__decorate([
    version({ since: '0.0.0' })
], StatusRepository.prototype, "unreblog", null);
__decorate([
    version({ since: '1.6.0' })
], StatusRepository.prototype, "pin", null);
__decorate([
    version({ since: '1.6.0' })
], StatusRepository.prototype, "unpin", null);
__decorate([
    version({ since: '3.1.0' })
], StatusRepository.prototype, "bookmark", null);
__decorate([
    version({ since: '3.1.0' })
], StatusRepository.prototype, "unbookmark", null);
__decorate([
    version({ since: '3.5.0' })
], StatusRepository.prototype, "listHistory", null);
__decorate([
    version({ since: '3.5.0' })
], StatusRepository.prototype, "fetchSource", null);
__decorate([
    version({ since: '4.0.0' })
], StatusRepository.prototype, "translate", null);

let SuggestionRepository$1 = class SuggestionRepository {
    constructor(http, config, logger) {
        this.http = http;
        this.config = config;
        this.logger = logger;
    }
    /**
     * Accounts the user has had past positive interactions with, but is not yet following.
     * @param params
     * @returns
     * @see https://docs.joinmastodon.org/methods/suggestions/#v1
     */
    list(params) {
        return new Paginator(this.http, '/api/v1/suggestions', params);
    }
    /**
     * Remove an account from follow suggestions.
     * @param id id of the account in the database to be removed from suggestions
     * @return N/A
     * @see https://docs.joinmastodon.org/methods/accounts/suggestions/
     */
    /* istanbul ignore next */
    remove(id) {
        return this.http.delete(`/api/v1/suggestions/${id}`);
    }
};
__decorate([
    deprecated('Use MastoClient.v2.suggestions.list instead'),
    version({ since: '2.4.3' })
], SuggestionRepository$1.prototype, "list", null);
__decorate([
    version({ since: '2.4.3' })
    /* istanbul ignore next */
], SuggestionRepository$1.prototype, "remove", null);

class TimelineRepository {
    constructor(http, config, logger) {
        this.http = http;
        this.config = config;
        this.logger = logger;
    }
    /**
     * View statuses from followed users.
     * @param params Parameters
     * @return Array of Status
     * @see https://docs.joinmastodon.org/methods/timelines/
     */
    listHome(params) {
        return new Paginator(this.http, '/api/v1/timelines/home', params);
    }
    /**
     * Public timeline
     * @param params Parameters
     * @return Array of Status
     * @see https://docs.joinmastodon.org/methods/timelines/
     */
    listPublic(params) {
        return new Paginator(this.http, '/api/v1/timelines/public', params);
    }
    /**
     * View public statuses containing the given hashtag.
     * @param hashtag Content of a #hashtag, not including # symbol.
     * @param params Parameters
     * @return Array of Status
     * @see https://docs.joinmastodon.org/methods/timelines/
     */
    listHashtag(hashtag, params) {
        return new Paginator(this.http, `/api/v1/timelines/tag/${hashtag}`, params);
    }
    /**
     * View statuses in the given list timeline.
     * @param id Local ID of the list in the database.
     * @param params Query parameter
     * @return Array of Status
     * @see https://docs.joinmastodon.org/methods/timelines/
     */
    listList(id, params) {
        return new Paginator(this.http, `/api/v1/timelines/list/${id}`, params);
    }
    /**
     * View statuses with a “direct” privacy, from your account or in your notifications.
     * @deprecated Use conversations API instead
     * @return Array of Status
     * @see https://docs.joinmastodon.org/methods/timelines/
     */
    /* istanbul ignore next */
    listDirect(params) {
        return new Paginator(this.http, '/api/v1/timelines/direct', params);
    }
}
__decorate([
    version({ since: '0.0.0' })
], TimelineRepository.prototype, "listHome", null);
__decorate([
    version({ since: '0.0.0' })
], TimelineRepository.prototype, "listPublic", null);
__decorate([
    version({ since: '0.0.0' })
], TimelineRepository.prototype, "listHashtag", null);
__decorate([
    version({ since: '2.1.0' })
], TimelineRepository.prototype, "listList", null);
__decorate([
    deprecated('Use conversations API instead'),
    version({ since: '0.0.0', until: '2.9.3' })
    /* istanbul ignore next */
], TimelineRepository.prototype, "listDirect", null);

let TrendRepository$1 = class TrendRepository {
    constructor(http, config, logger) {
        this.http = http;
        this.config = config;
        this.logger = logger;
    }
    /**
     * View trending statuses
     * @returns Array of Status
     * @see https://docs.joinmastodon.org/methods/trends/#statuses
     */
    listStatuses(params) {
        return new Paginator(this.http, '/api/v1/trends/statuses', params);
    }
    /**
     * Links that have been shared more than others.
     * @see https://docs.joinmastodon.org/methods/trends/#links
     */
    listLinks(params) {
        return new Paginator(this.http, '/api/v1/trends/links', params);
    }
    /**
     * Tags that are being used more frequently within the past week.
     * @param params Parameters
     * @return Array of Tag with History
     * @see https://docs.joinmastodon.org/methods/trends/#tags
     */
    listTags(params) {
        return new Paginator(this.http, '/api/v1/trends/tags', params);
    }
};
__decorate([
    version({ since: '3.5.0' })
], TrendRepository$1.prototype, "listStatuses", null);
__decorate([
    version({ since: '3.5.0' })
], TrendRepository$1.prototype, "listLinks", null);
__decorate([
    version({ since: '3.0.0' })
], TrendRepository$1.prototype, "listTags", null);

class EmailRepository {
    constructor(http, config, logger) {
        this.http = http;
        this.config = config;
        this.logger = logger;
    }
    /**
     * Resend confirmation email
     * @param params Form data parameters
     * @returns Empty object
     * @see https://docs.joinmastodon.org/methods/emails/#confirmation
     */
    createConfirmation(params) {
        return this.http.post('/api/v1/emails/confirmations', params, {
            headers: { 'Content-Type': 'multipart/form-data' },
        });
    }
}

class TagRepository {
    constructor(http, config, logger) {
        this.http = http;
        this.config = config;
        this.logger = logger;
    }
    /**
     * Show a hashtag and its associated information
     * @param id The name of the hashtag
     * @return Tag
     */
    fetch(id) {
        return this.http.get(`/api/v1/tags/${id}`);
    }
    /**
     * Follow a hashtag. Posts containing a followed hashtag will be inserted into your home timeline.
     * @param id The name of the hashtag
     * @return Tag
     */
    follow(id) {
        return this.http.post(`/api/v1/tags/${id}/follow`);
    }
    /**
     * Unfollow a hashtag. Posts containing a followed hashtag will no longer be inserted into your home timeline.
     * @param id The name of the hashtag
     * @return Tag
     */
    unfollow(id) {
        return this.http.post(`/api/v1/tags/${id}/unfollow`);
    }
}
__decorate([
    version({ since: '4.0.0' })
], TagRepository.prototype, "fetch", null);
__decorate([
    version({ since: '4.0.0' })
], TagRepository.prototype, "follow", null);
__decorate([
    version({ since: '4.0.0' })
], TagRepository.prototype, "unfollow", null);

class FollowedTagRepository {
    constructor(http, config, logger) {
        this.http = http;
        this.config = config;
        this.logger = logger;
    }
    list(params) {
        return new Paginator(this.http, '/api/v1/followed_tags', params);
    }
}
__decorate([
    version({ since: '4.0.0' })
], FollowedTagRepository.prototype, "list", null);

class AccountRepository {
    constructor(http, config, logger) {
        this.http = http;
        this.config = config;
        this.logger = logger;
    }
    /**
     * View accounts matching certain criteria for filtering, up to 100 at a time.
     * Pagination may be done with the HTTP Link header in the response.
     * @param params Parameters
     * @return Array of AdminAccount
     * @see https://docs.joinmastodon.org/methods/admin/
     */
    list(params) {
        return new Paginator(this.http, '/api/v1/admin/accounts', params);
    }
    /**
     * View admin-level information about the given account.
     * @param id ID of the account
     * @return AdminAccount
     * @see https://docs.joinmastodon.org/methods/admin/
     */
    fetch(id) {
        return this.http.get(`/api/v1/admin/accounts/${id}`);
    }
    /**
     * Perform an action against an account and log this action in the moderation history.
     * @param id g ID of the account
     * @param params Params
     * @return Account
     * @see https://docs.joinmastodon.org/methods/admin/accounts/#action
     */
    createAction(id, params) {
        return this.http.post(`/api/v1/admin/accounts/${id}/action`, params);
    }
    /**
     * Approve the given local account if it is currently pending approval.
     * @param id ID of the account
     * @return AdminAccount
     * @see https://docs.joinmastodon.org/methods/admin/
     */
    approve(id) {
        return this.http.post(`/api/v1/admin/accounts/${id}/approve`);
    }
    /**
     * Reject the given local account if it is currently pending approval.
     * @param id ID of the account
     * @return AdminAccount
     * @see https://docs.joinmastodon.org/methods/admin/
     */
    reject(id) {
        return this.http.post(`/api/v1/admin/accounts/${id}/reject`);
    }
    /**
     * Re-enable a local account whose login is currently disabled.
     * @param id ID of the account
     * @return AdminAccount
     * @see https://docs.joinmastodon.org/methods/admin/
     */
    enable(id) {
        return this.http.post(`/api/v1/admin/accounts/${id}/enable`);
    }
    /**
     * Unsilence a currently silenced account.
     * @param id ID of the account
     * @return AdminAccount
     * @see https://docs.joinmastodon.org/methods/admin/
     */
    unsilence(id) {
        return this.http.post(`/api/v1/admin/accounts/${id}/unsilence`);
    }
    /**
     * Unsuspend a currently suspended account.
     * @param id ID of the account
     * @return AdminAccount
     * @see https://docs.joinmastodon.org/methods/admin/
     */
    unsuspend(id) {
        return this.http.post(`/api/v1/admin/accounts/${id}/unsuspend`);
    }
    /**
     * Unmark an account as sensitive
     * @param id ID of the account
     * @return AdminAccount
     * @see https://docs.joinmastodon.org/methods/admin/accounts/#unsensitive
     */
    unsensitive(id) {
        return this.http.post(`/api/v1/admin/accounts/${id}/unsensitive`);
    }
}
__decorate([
    version({ since: '2.9.1' })
], AccountRepository.prototype, "list", null);
__decorate([
    version({ since: '2.9.1' })
], AccountRepository.prototype, "fetch", null);
__decorate([
    version({ since: '2.9.1' })
], AccountRepository.prototype, "createAction", null);
__decorate([
    version({ since: '2.9.1' })
], AccountRepository.prototype, "approve", null);
__decorate([
    version({ since: '2.9.1' })
], AccountRepository.prototype, "reject", null);
__decorate([
    version({ since: '2.9.1' })
], AccountRepository.prototype, "enable", null);
__decorate([
    version({ since: '2.9.1' })
], AccountRepository.prototype, "unsilence", null);
__decorate([
    version({ since: '2.9.1' })
], AccountRepository.prototype, "unsuspend", null);
__decorate([
    version({ since: '2.9.1' })
], AccountRepository.prototype, "unsensitive", null);

class CanonicalEmailBlockRepository {
    constructor(http, config, logger) {
        this.http = http;
        this.config = config;
        this.logger = logger;
    }
    /**
     * List all canonical email blocks.
     * @param params Parameters
     * @return Array of CanonicalEmailBlock
     * @see https://docs.joinmastodon.org/methods/admin/canonical_email_blocks/
     */
    list(params) {
        return new Paginator(this.http, '/api/v1/admin/canonical_email_blocks', params);
    }
    /**
     * Show a single canonical email block
     * @param id id of the canonical email
     * @return CanonicalEmailBlock
     * @see https://docs.joinmastodon.org/methods/admin/canonical_email_blocks
     */
    fetch(id) {
        return this.http.get(`/api/v1/admin/canonical_email_blocks/${id}`);
    }
    /**
     * Canonicalize and hash an email address.
     * @param params Parameters
     * @return Array of CanonicalEmailBlock
     * @see https://docs.joinmastodon.org/methods/admin/canonical_email_blocks/#test
     */
    test(params) {
        return this.http.post('/api/v1/admin/canonical_email_blocks/test', params, {
            headers: { 'Content-Type': 'multipart/form-data' },
        });
    }
    /**
     * Block a canonical email.
     * @param params Parameters
     * @return CanonicalEmailBlock
     * @see https://docs.joinmastodon.org/methods/admin/canonical_email_blocks
     */
    create(params) {
        return this.http.post('/api/v1/admin/canonical_email_blocks', params, {
            headers: { 'Content-Type': 'multipart/form-data' },
        });
    }
    /**
     * Lift a block a canonical email.
     * @param id id of canonical email
     * @return null
     * @see https://docs.joinmastodon.org/methods/admin/canonical_email_blocks
     */
    remove(id) {
        return this.http.delete(`/api/v1/admin/canonical_email_blocks/${id}`);
    }
}
__decorate([
    version({ since: '4.0.0' })
], CanonicalEmailBlockRepository.prototype, "list", null);
__decorate([
    version({ since: '4.0.0' })
], CanonicalEmailBlockRepository.prototype, "fetch", null);
__decorate([
    version({ since: '4.0.0' })
], CanonicalEmailBlockRepository.prototype, "test", null);
__decorate([
    version({ since: '4.0.0' })
], CanonicalEmailBlockRepository.prototype, "create", null);
__decorate([
    version({ since: '4.0.0' })
], CanonicalEmailBlockRepository.prototype, "remove", null);

class DimensionRepository {
    constructor(http, config, logger) {
        this.http = http;
        this.config = config;
        this.logger = logger;
    }
    /**
     * Obtain information about popularity of certain accounts, servers, languages, etc.
     * @see https://docs.joinmastodon.org/methods/admin/dimensions/#get
     */
    fetch(params) {
        return this.http.post('/api/v1/admin/dimensions', params);
    }
}

class DomainAllowRepository {
    constructor(http, config, logger) {
        this.http = http;
        this.config = config;
        this.logger = logger;
    }
    /**
     * Show information about all allowed domains
     * @param params Parameters
     * @return Array of DomainAllow
     * @see https://docs.joinmastodon.org/methods/admin/domain_allows/#get
     */
    list(params) {
        return new Paginator(this.http, '/api/v1/admin/domain_allows', params);
    }
    /**
     * Show information about a single allowed domain
     * @param id id of the domain
     * @return DomainAllow
     * @see https://docs.joinmastodon.org/methods/admin/domain_allows/#get-one
     */
    fetch(id) {
        return this.http.get(`/api/v1/admin/domain_allows/${id}`);
    }
    /**
     * Add a domain to the list of domains allowed to federate,
     * to be used when the instance is in allow-list federation mode.
     * @param params parameters
     * @return DomainAllow
     * @see https://docs.joinmastodon.org/methods/admin/domain_allows/#get-one
     */
    create(params) {
        return this.http.post('/api/v1/admin/domain_allows', params);
    }
    /**
     * Delete a domain from the allowed domains list.
     * @param id id of domain
     * @return DomainAllow
     * @see https://docs.joinmastodon.org/methods/admin/
     */
    remove(id) {
        return this.http.delete(`/api/v1/admin/domain_allows/${id}`);
    }
}
__decorate([
    version({ since: '4.0.0' })
], DomainAllowRepository.prototype, "list", null);
__decorate([
    version({ since: '4.0.0' })
], DomainAllowRepository.prototype, "fetch", null);
__decorate([
    version({ since: '4.0.0' })
], DomainAllowRepository.prototype, "create", null);
__decorate([
    version({ since: '4.0.0' })
], DomainAllowRepository.prototype, "remove", null);

class DomainBlockRepository {
    constructor(http, config, logger) {
        this.http = http;
        this.config = config;
        this.logger = logger;
    }
    /**
     *
     * @param params Parameters
     * @return Array of DomainBlocks
     * @see https://docs.joinmastodon.org/methods/admin/
     */
    list(params) {
        return new Paginator(this.http, '/api/v1/admin/domain_blocks', params);
    }
    /**
     * Show information about a single blocked domain.
     * @param id ID of the account
     * @return DomainBlocks
     * @see https://docs.joinmastodon.org/methods/admin/
     */
    fetch(id) {
        return this.http.get(`/api/v1/admin/domain_blocks/${id}`);
    }
    /**
     * Add a domain to the list of domains blocked from federating.
     * @param params Parameters
     * @return DomainBlocks
     * @see https://docs.joinmastodon.org/methods/admin/
     */
    create(params) {
        return this.http.post('/api/v1/admin/domain_blocks', params);
    }
    /**
     * Change parameters for an existing domain block.
     * @param id id of domain
     * @param params Parameters
     * @return DomainBlocks
     * @see https://docs.joinmastodon.org/methods/admin/
     */
    update(id, params) {
        return this.http.put(`/api/v1/admin/domain_blocks/${id}`, params);
    }
    /**
     * Lift a block against a domain.
     * @param id id of domain
     * @return DomainBlocks
     * @see https://docs.joinmastodon.org/methods/admin/
     */
    remove(id) {
        return this.http.delete(`/api/v1/admin/domain_blocks/${id}`);
    }
}
__decorate([
    version({ since: '4.0.0' })
], DomainBlockRepository.prototype, "list", null);
__decorate([
    version({ since: '4.0.0' })
], DomainBlockRepository.prototype, "fetch", null);
__decorate([
    version({ since: '4.0.0' })
], DomainBlockRepository.prototype, "create", null);
__decorate([
    version({ since: '4.0.0' })
], DomainBlockRepository.prototype, "update", null);
__decorate([
    version({ since: '4.0.0' })
], DomainBlockRepository.prototype, "remove", null);

class EmailDomainBlockRepository {
    constructor(http, config, logger) {
        this.http = http;
        this.config = config;
        this.logger = logger;
    }
    /**
     * Show information about all email domains blocked from signing up.
     * @param params Parameters
     * @return Array of EmailDomainBlock
     * @see https://docs.joinmastodon.org/methods/admin/
     */
    list(params) {
        return new Paginator(this.http, '/api/v1/admin/email_domain_blocks ', params);
    }
    /**
     * Show information about a single email domain that is blocked from sign-ups.
     * @param id id of the DomainBlock
     * @return Array of EmailDomainBlock
     * @see https://docs.joinmastodon.org/methods/admin/
     */
    fetch(id) {
        return this.http.get(`/api/v1/admin/email_domain_blocks/${id}`);
    }
    /**
     * Add a domain to the list of email domains blocked from sign-ups.
     * @param params Parameters
     * @return Array of EmailDomainBlock
     * @see https://docs.joinmastodon.org/methods/admin/
     */
    create(params) {
        return this.http.post('/api/v1/admin/email_domain_blocks ', params);
    }
    /**
     * Lift a block against an email domain.
     * @param id id of domain
     * @return null
     * @see https://docs.joinmastodon.org/methods/admin/
     */
    remove(id) {
        return this.http.delete(`/api/v1/admin/email_domain_blocks/${id}`);
    }
}
__decorate([
    version({ since: '4.0.0' })
], EmailDomainBlockRepository.prototype, "list", null);
__decorate([
    version({ since: '4.0.0' })
], EmailDomainBlockRepository.prototype, "fetch", null);
__decorate([
    version({ since: '4.0.0' })
], EmailDomainBlockRepository.prototype, "create", null);
__decorate([
    version({ since: '4.0.0' })
], EmailDomainBlockRepository.prototype, "remove", null);

class IpBlockRepository {
    constructor(http, config, logger) {
        this.http = http;
        this.config = config;
        this.logger = logger;
    }
    /**
     * Show information about all blocked IP ranges.
     * @param params Parameters
     * @return Array of Ip Block
     * @see https://docs.joinmastodon.org/methods/admin/
     */
    list(params) {
        return new Paginator(this.http, '/api/v1/admin/ip_blocks', params);
    }
    /**
     * Show information about all blocked IP ranges.
     * @param id id of the Ip blocked
     * @return object of Ip Block
     * @see https://docs.joinmastodon.org/methods/admin/
     */
    fetch(id) {
        return this.http.get(`/api/v1/admin/ip_blocks/${id}`);
    }
    /**
     * Add an IP address range to the list of IP blocks.
     * @param params Parameters
     * @return object of Ip Block
     * @see https://docs.joinmastodon.org/methods/admin/ip_blocks/#create
     */
    create(params) {
        return this.http.post('/api/v1/admin/ip_blocks', params);
    }
    /**
     * Change parameters for an existing IP block.
     * @param params Parameters
     * @return object of Ip Block
     * @see https://docs.joinmastodon.org/methods/admin/ip_blocks/#update
     */
    update(id, params) {
        return this.http.put(`/api/v1/admin/ip_blocks/${id}`, params);
    }
    /**
     * Lift a block against an IP range.
     * @param id id of ip block
     * @return null
     * @see https://docs.joinmastodon.org/methods/admin/
     */
    remove(id) {
        return this.http.delete(`/api/v1/admin/ip_blocks/${id}`);
    }
}
__decorate([
    version({ since: '4.0.0' })
], IpBlockRepository.prototype, "list", null);
__decorate([
    version({ since: '4.0.0' })
], IpBlockRepository.prototype, "fetch", null);
__decorate([
    version({ since: '4.0.0' })
], IpBlockRepository.prototype, "create", null);
__decorate([
    version({ since: '4.0.0' })
], IpBlockRepository.prototype, "update", null);
__decorate([
    version({ since: '4.0.0' })
], IpBlockRepository.prototype, "remove", null);

class MeasureRepository {
    constructor(http, config, logger) {
        this.http = http;
        this.config = config;
        this.logger = logger;
    }
    /**
     * Obtain quantitative metrics about the server.
     * @see https://docs.joinmastodon.org/methods/admin/measures/#get
     */
    fetch(params) {
        return this.http.post('/api/v1/admin/measures', params);
    }
}
__decorate([
    version({ since: '3.5.0' })
], MeasureRepository.prototype, "fetch", null);

class ReportRepository {
    constructor(http, config, logger) {
        this.http = http;
        this.config = config;
        this.logger = logger;
    }
    /**
     * View all reports. Pagination may be done with HTTP Link header in the response.
     * @param params Parameters
     * @return Array of AdminReport
     * @see https://docs.joinmastodon.org/methods/admin/
     */
    list(params) {
        return new Paginator(this.http, '/api/v1/admin/reports', params);
    }
    /**
     * View information about the report with the given ID.
     * @param id ID of the report
     * @return AdminReport
     * @see https://docs.joinmastodon.org/methods/admin/
     */
    fetch(id) {
        return this.http.get(`/api/v1/admin/reports/${id}`);
    }
    /**
     * Claim the handling of this report to yourself.
     * @param id ID of the report
     * @return AdminReport
     * @see https://docs.joinmastodon.org/methods/admin/
     */
    assignToSelf(id) {
        return this.http.post(`/api/v1/admin/reports/${id}/assign_to_self`);
    }
    /**
     * Unassign a report so that someone else can claim it.
     * @param id ID of the report
     * @return AdminReport
     * @see https://docs.joinmastodon.org/methods/admin/
     */
    unassign(id) {
        return this.http.post(`/api/v1/admin/reports/${id}/unassign`);
    }
    /**
     * Mark a report as resolved with no further action taken.
     * @param id ID of the report
     * @return AdminReport
     * @see https://docs.joinmastodon.org/methods/admin/
     */
    resolve(id) {
        return this.http.post(`/api/v1/admin/reports/${id}/resolve`);
    }
    /**
     * Reopen a currently closed report.
     * @param id ID of the report
     * @return AdminReport
     * @see https://docs.joinmastodon.org/methods/admin/
     */
    reopen(id) {
        return this.http.post(`/api/v1/admin/reports/${id}/reopen`);
    }
}
__decorate([
    version({ since: '2.9.1' })
], ReportRepository.prototype, "list", null);
__decorate([
    version({ since: '2.9.1' })
], ReportRepository.prototype, "fetch", null);
__decorate([
    version({ since: '2.9.1' })
], ReportRepository.prototype, "assignToSelf", null);
__decorate([
    version({ since: '2.9.1' })
], ReportRepository.prototype, "unassign", null);
__decorate([
    version({ since: '2.9.1' })
], ReportRepository.prototype, "resolve", null);
__decorate([
    version({ since: '2.9.1' })
], ReportRepository.prototype, "reopen", null);

class RetentionRepository {
    constructor(http, config, logger) {
        this.http = http;
        this.config = config;
        this.logger = logger;
    }
    /**
     * Generate a retention data report for a given time period and bucket.
     * @see https://docs.joinmastodon.org/methods/admin/retention/#create
     */
    create(params) {
        return this.http.post('/api/v1/admin/retention', params);
    }
}

class TrendRepository {
    constructor(http, config, logger) {
        this.http = http;
        this.config = config;
        this.logger = logger;
    }
    /**
     * Links that have been shared more than others, including unapproved and unreviewed links.
     * @see https://docs.joinmastodon.org/methods/admin/trends/#links
     */
    listLinks() {
        return new Paginator(this.http, '/api/v1/admin/trends/links');
    }
    /**
     * Statuses that have been interacted with more than others, including unapproved and unreviewed statuses.
     * @see https://docs.joinmastodon.org/methods/admin/trends/#statuses
     */
    listStatuses() {
        return new Paginator(this.http, '/api/v1/admin/trends/statuses');
    }
    /**
     * Tags that are being used more frequently within the past week, including unapproved and unreviewed tags.
     * @see https://docs.joinmastodon.org/methods/admin/trends/#tags
     */
    listTags() {
        return new Paginator(this.http, '/api/v1/admin/trends/statuses');
    }
}
__decorate([
    version({ since: '3.5.0' })
], TrendRepository.prototype, "listLinks", null);
__decorate([
    version({ since: '3.5.0' })
], TrendRepository.prototype, "listStatuses", null);
__decorate([
    version({ since: '3.5.0' })
], TrendRepository.prototype, "listTags", null);

class AggregateRepositoryAdmin {
    /** @deprecated Use `accounts` instead */
    /* istanbul ignore next */
    get account() {
        return this.accounts;
    }
    /** @deprecated Use `reports` instead */
    /* istanbul ignore next */
    get report() {
        return this.reports;
    }
    /** @deprecated Use `emailDomainBlocks` instead */
    /* istanbul ignore next */
    get domainEmailBlocks() {
        return this.emailDomainBlocks;
    }
    constructor(http, config, logger) {
        this.http = http;
        this.config = config;
        this.logger = logger;
        this.accounts = new AccountRepository(this.http, this.config, this.logger);
        this.canonicalEmailBlocks =
            new CanonicalEmailBlockRepository(this.http, this.config, this.logger);
        this.dimensions = new DimensionRepository(this.http, this.config, this.logger);
        this.domainBlocks = new DomainBlockRepository(this.http, this.config, this.logger);
        this.domainAllows = new DomainAllowRepository(this.http, this.config, this.logger);
        this.emailDomainBlocks = new EmailDomainBlockRepository(this.http, this.config, this.logger);
        this.ipBlocks = new IpBlockRepository(this.http, this.config, this.logger);
        this.measures = new MeasureRepository(this.http, this.config, this.logger);
        this.reports = new ReportRepository(this.http, this.config, this.logger);
        this.retention = new RetentionRepository(this.http, this.config, this.logger);
        this.trends = new TrendRepository(this.http, this.config, this.logger);
    }
}

let AggregateRepository$1 = class AggregateRepository {
    constructor(http, ws, config, logger) {
        this.http = http;
        this.config = config;
        this.logger = logger;
        this.admin = new AggregateRepositoryAdmin(http, config, logger);
        this.stream = new StreamRepository(ws, config, logger);
        this.accounts = new AccountRepository$1(http, config, logger);
        this.announcements = new AnnouncementRepository(http, config, logger);
        this.apps = new AppRepository(http, config, logger);
        this.blocks = new BlockRepository(http, config, logger);
        this.bookmarks = new BookmarkRepository(http, config, logger);
        this.conversations = new ConversationRepository(http, config, logger);
        this.customEmojis = new CustomEmojiRepository(http, config, logger);
        this.directory = new DirectoryRepository(http, config, logger);
        this.domainBlocks = new DomainBlockRepository$1(http, config, logger);
        this.endorsements = new EndorsementRepository(http, config, logger);
        this.favourites = new FavouriteRepository(http, config, logger);
        this.featuredTags = new FeaturedTagRepository(http, config, logger);
        this.filters = new FilterRepository$1(http, config, logger);
        this.followRequests = new FollowRequestRepository(http, config, logger);
        this.instances = new InstanceRepository$1(http, config, logger);
        this.lists = new ListRepository(http, config, logger);
        this.markers = new MarkerRepository(http, config, logger);
        this.mediaAttachments = new MediaAttachmentRepository$1(http, config, logger);
        this.mutes = new MuteRepository(http, config, logger);
        this.notifications = new NotificationRepository(http, config, logger);
        this.polls = new PollRepository(http, config, logger);
        this.preferences = new PreferenceRepository(http, config, logger);
        this.webPushSubscriptions = new WebPushSubscriptionRepository(http, config, logger);
        this.reports = new ReportRepository$1(http, config, logger);
        this.scheduledStatuses = new ScheduledStatusRepository(http, config, logger);
        this.statuses = new StatusRepository(http, config, logger);
        this.suggestions = new SuggestionRepository$1(http, config, logger);
        this.timelines = new TimelineRepository(http, config, logger);
        this.trends = new TrendRepository$1(http, config, logger);
        this.emails = new EmailRepository(http, config, logger);
        this.tags = new TagRepository(http, config, logger);
        this.followedTags = new FollowedTagRepository(http, config, logger);
    }
    /**
     * Search, but hashtags is an array of strings instead of an array of Tag.
     * @param params Parameters
     * @return Results
     * @see https://docs.joinmastodon.org/methods/search/
     */
    /* istanbul ignore next */
    search(params) {
        return new Paginator(this.http, `/api/v1/search`, params);
    }
};
__decorate([
    version({ since: '1.1.0', until: '3.0.0' })
], AggregateRepository$1.prototype, "search", null);

class FilterRepository {
    constructor(http, config, logger) {
        this.http = http;
        this.config = config;
        this.logger = logger;
    }
    /**
     * View all filters
     * @return Array of Filter
     * @see https://docs.joinmastodon.org/methods/filters/#get
     */
    list() {
        return new Paginator(this.http, `/api/v2/filters`);
    }
    /**
     * Obtain a single filter group owned by the current user.
     * @param id ID of the filter
     * @return Filter
     * @see https://docs.joinmastodon.org/methods/filters/#get-one
     */
    fetch(id) {
        return this.http.get(`/api/v2/filters/${id}`);
    }
    /**
     * Create a filter group with the given parameters.
     * @param params Parameters
     * @return Filter
     * @see https://docs.joinmastodon.org/methods/filters/#create
     */
    create(params) {
        return this.http.post(`/api/v2/filters`, params, {
            headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        });
    }
    /**
     * Update a filter group with the given parameters.
     * @param id ID of the filter in the database
     * @param params Parameters
     * @return Filter
     * @see https://docs.joinmastodon.org/methods/filters/#update
     */
    update(id, params) {
        return this.http.put(`/api/v2/filters/${id}`, params);
    }
    /**
     * Delete a filter group with the given id.
     * @param id ID of the filter in the database
     * @return N/A
     * @see https://docs.joinmastodon.org/methods/filters/#delete
     */
    remove(id) {
        return this.http.delete(`/api/v2/filters/${id}`);
    }
    /**
     * List all keywords attached to the current filter group.
     * @param id String. The ID of the Filter in the database.
     * @returns Array of FilterKeyword
     * @see https://docs.joinmastodon.org/methods/filters/#keywords-get
     */
    listKeywords(id) {
        return new Paginator(this.http, `/api/v2/filters/${id}/keywords`);
    }
    /**
     * Add the given keyword to the specified filter group
     * @param id String. The ID of the Filter in the database.
     * @param params Parameters
     * @return FilterKeywords
     * @see https://docs.joinmastodon.org/methods/filters/#keywords-create
     */
    createKeyword(id, params) {
        return this.http.post(`/api/v2/filters/${id}/keywords`, params, {
            headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        });
    }
    /**
     * Get one filter keyword by the given id.
     * @param id String. The ID of the FilterKeyword in the database.
     * @returns FilterKeyword
     * @see https://docs.joinmastodon.org/methods/filters/#keywords-get-one
     */
    fetchKeyword(id) {
        return new Paginator(this.http, `/api/v2/filters/keywords/${id}`);
    }
    /**
     * Update the given filter keyword.
     * @param id String. The ID of the FilterKeyword in the database.
     * @param params Parameters
     * @return FilterKeywords
     * @see https://docs.joinmastodon.org/methods/filters/#keywords-update
     */
    updateKeyword(id, params) {
        return this.http.put(`/api/v2/filters/keywords/${id}`, params, {
            headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        });
    }
    /**
     * Deletes the given filter keyword.
     * @param id String. The ID of the FilterKeyword in the database.
     * @returns empty object
     * @see https://docs.joinmastodon.org/methods/filters/#keywords-delete
     */
    removeKeyword(id) {
        return this.http.delete(`/api/v2/filters/keywords/${id}`);
    }
    /**
     * Obtain a list of all status filters within this filter group.
     * @param id String. The ID of the Filter in the database.
     * @returns Array of FilterStatus
     * @see https://docs.joinmastodon.org/methods/filters/#statuses-get
     */
    listStatuses(id) {
        return new Paginator(this.http, `/api/v2/filters/${id}/statuses`);
    }
    /**
     * Add a status filter to the current filter group.
     * @param id String. The ID of the Filter in the database.
     * @param params
     * @returns FilterStatus
     * @see https://docs.joinmastodon.org/methods/filters/#statuses-add
     */
    createStatus(id, params) {
        return this.http.post(`/api/v2/filters/${id}/statuses`, params);
    }
    /**
     * Obtain a single status filter.
     * @param id String. The ID of the FilterStatus in the database.
     * @returns FilterStatus
     * @see https://docs.joinmastodon.org/methods/filters/#statuses-get-one
     */
    fetchStatus(id) {
        return this.http.get(`/api/v2/filters/statuses/${id}`);
    }
    /**
     * @param id String. The ID of the FilterStatus in the database.
     * @returns FilterStatus
     * @see https://docs.joinmastodon.org/methods/filters/#statuses-get-one
     */
    removeStatus(id) {
        return this.http.get(`/api/v2/filters/statuses/${id}`);
    }
}
__decorate([
    version({ since: '4.0.0' })
], FilterRepository.prototype, "list", null);
__decorate([
    version({ since: '4.0.0' })
], FilterRepository.prototype, "fetch", null);
__decorate([
    version({ since: '4.0.0' })
], FilterRepository.prototype, "create", null);
__decorate([
    version({ since: '4.0.0' })
], FilterRepository.prototype, "update", null);
__decorate([
    version({ since: '4.0.0' })
], FilterRepository.prototype, "remove", null);
__decorate([
    version({ since: '4.0.0' })
], FilterRepository.prototype, "listKeywords", null);
__decorate([
    version({ since: '4.0.0' })
], FilterRepository.prototype, "createKeyword", null);
__decorate([
    version({ since: '4.0.0' })
], FilterRepository.prototype, "fetchKeyword", null);
__decorate([
    version({ since: '4.0.0' })
], FilterRepository.prototype, "updateKeyword", null);
__decorate([
    version({ since: '4.0.0' })
], FilterRepository.prototype, "removeKeyword", null);
__decorate([
    version({ since: '4.0.0' })
], FilterRepository.prototype, "listStatuses", null);
__decorate([
    version({ since: '4.0.0' })
], FilterRepository.prototype, "fetchStatus", null);
__decorate([
    version({ since: '4.0.0' })
], FilterRepository.prototype, "removeStatus", null);

class InstanceRepository {
    constructor(http, config, logger) {
        this.http = http;
        this.config = config;
        this.logger = logger;
    }
    /**
     * Information about the server.
     * @return Instance
     * @see https://docs.joinmastodon.org/methods/instance/
     */
    fetch() {
        return this.http.get('/api/v2/instance');
    }
}
__decorate([
    version({ since: '4.0.0' })
], InstanceRepository.prototype, "fetch", null);

// Repository<V1.MediaAttachment, CreateMediaAttachmentParams>;
class MediaAttachmentRepository {
    constructor(http, config, logger) {
        this.http = http;
        this.config = config;
        this.logger = logger;
        this.v1 = new MediaAttachmentRepository$1(http, config);
    }
    /**
     * @experimental
     * @param id ID of the media
     * @param interval interval of polling
     * @returns Media attachment that has done processing
     */
    waitFor(id, interval = 1000) {
        return __awaiter(this, void 0, void 0, function* () {
            const timeout = this.config.createTimeout();
            let media;
            while (media == undefined) {
                if (timeout.signal.aborted) {
                    throw new MastoTimeoutError('The media encoding has been timed out in your instance.');
                }
                yield delay(interval);
                try {
                    const processing = yield this.v1.fetch(id);
                    if (processing.url != undefined) {
                        media = processing;
                        timeout.clear();
                    }
                }
                catch (error) {
                    // Some instance caches API response
                    if (error instanceof MastoHttpNotFoundError) {
                        continue;
                    }
                    throw error;
                }
            }
            return media;
        });
    }
    /**
     * Creates an attachment to be used with a new status.
     * @param params Parameters
     * @return Attachment
     * @see https://docs.joinmastodon.org/methods/statuses/media/
     */
    create(params, extra = {}) {
        return __awaiter(this, void 0, void 0, function* () {
            const media = yield this.http.post(`/api/v2/media`, params, { headers: { 'Content-Type': 'multipart/form-data' } });
            if (extra.skipPolling) {
                return media;
            }
            return this.waitFor(media.id);
        });
    }
}
__decorate([
    version({ since: '3.1.3' })
], MediaAttachmentRepository.prototype, "create", null);

class SuggestionRepository {
    constructor(http, config, logger) {
        this.http = http;
        this.config = config;
        this.logger = logger;
    }
    /**
     * View follow suggestions.
     * Accounts that are promoted by staff, or that the user has had past positive interactions with, but is not yet following.
     * @param params
     * @returns
     */
    list(params) {
        return new Paginator(this.http, '/api/v2/suggestions', params);
    }
}
__decorate([
    version({ since: '3.4.0' })
], SuggestionRepository.prototype, "list", null);

class AggregateRepository {
    constructor(http, config, logger) {
        this.http = http;
        this.config = config;
        this.logger = logger;
        this.filters = new FilterRepository(http, config, logger);
        this.instance = new InstanceRepository(http, config, logger);
        this.mediaAttachments = new MediaAttachmentRepository(http, config, logger);
        this.suggestions = new SuggestionRepository(http, config, logger);
    }
    /**
     * Perform a search
     * @param params Parameters
     * @return Results
     * @see https://docs.joinmastodon.org/methods/search/
     */
    search(params) {
        return new Paginator(this.http, `/api/v2/search`, params);
    }
}
__decorate([
    version({ since: '2.4.1' })
], AggregateRepository.prototype, "search", null);

/**
 * @experimental
 */
class OAuthRepository {
    constructor(http) {
        this.http = http;
    }
    createToken(params) {
        return this.http.post('/oauth/token', params, {
            headers: { 'Content-Type': 'multipart/form-data' },
        });
    }
}

class Client {
    constructor(http, ws, config, logger) {
        this.http = http;
        this.ws = ws;
        this.config = config;
        this.logger = logger;
        this.v1 = new AggregateRepository$1(http, ws, config, logger);
        this.v2 = new AggregateRepository(http, config, logger);
        this.oauth = new OAuthRepository(http);
    }
}

const isObject$2 = (x) => typeof x === 'object' && x !== null && x.constructor.name === 'Object';

const flattenObject = (object, parent = '') => {
    if (Array.isArray(object)) {
        return object
            .map((value, i) => flattenObject(value, parent == '' ? i.toString() : `${parent}[${i}]`))
            .reduce((prev, curr) => Object.assign(prev, curr), {});
    }
    if (isObject$2(object)) {
        return Object.entries(object)
            .map(([key, value]) => flattenObject(value, parent === '' ? key : `${parent}[${key}]`))
            .reduce((prev, curr) => Object.assign(prev, curr), {});
    }
    // Unit of the monoid is always an object
    return parent === ''
        ? object
        : { [parent]: object };
};

const _transformKeys = (data, transform) => {
    if (Array.isArray(data)) {
        return data.map((value) => transformKeys(value, transform));
    }
    if (isObject$2(data)) {
        return Object.fromEntries(Object.entries(data).map(([key, value]) => [
            transform(key),
            transformKeys(value, transform),
        ]));
    }
    return data;
};
const transformKeys = (data, transform) => {
    const f = (key) => {
        // `PATCH /v1/preferences` uses `:` as a delimiter
        if (key.includes(':'))
            return key;
        // `PATCH /v2/filters` uses _destroy as a special key
        if (key.startsWith('_'))
            return key;
        return transform(key);
    };
    return _transformKeys(data, f);
};

class SerializerNativeImpl {
    serialize(type, rawData) {
        if (rawData == undefined) {
            return;
        }
        const data = transformKeys(rawData, snakeCase);
        switch (type) {
            case 'application/json': {
                return JSON.stringify(data);
            }
            case 'multipart/form-data': {
                const formData = new FormData_1();
                for (const [key, value] of Object.entries(flattenObject(data))) {
                    // `form-data` module has an issue that they doesn't set filename
                    // https://github.com/neet/masto.js/issues/481
                    // https://github.com/mastodon/mastodon/issues/17622
                    if (globalThis.Buffer != undefined &&
                        value instanceof globalThis.Buffer) {
                        // We set `blob` as filename, which is the default for Blob defined by the spec
                        // https://developer.mozilla.org/en-US/docs/Web/API/FormData/append
                        formData.append(key, value, 'blob');
                        continue;
                    }
                    formData.append(key, value);
                }
                return formData;
            }
            case 'application/x-www-form-urlencoded': {
                return qs.stringify(data, {
                    encode: false,
                    arrayFormat: 'brackets',
                });
            }
            default: {
                return;
            }
        }
    }
    serializeQueryString(rawData) {
        const data = transformKeys(rawData, snakeCase);
        return qs.stringify(data, {
            encode: false,
            arrayFormat: 'brackets',
        });
    }
    deserialize(type, data) {
        switch (type) {
            case 'application/json': {
                try {
                    return transformKeys(JSON.parse(data), camelCase);
                }
                catch (_a) {
                    return undefined;
                }
            }
            default: {
                throw new MastoDeserializeError(`Unknown content type ${type} returned from the server.`, type, data);
            }
        }
    }
}

/**
 * Mastodon streaming api wrapper
 */
class WsEventsNativeImpl extends SomeClass {
    constructor(ws, serializer, logger) {
        super();
        this.ws = ws;
        this.serializer = serializer;
        this.logger = logger;
        /**
         * Parse JSON data and emit it as an event
         * @param message Websocket message
         */
        this.handleMessage = ({ data }) => {
            const { event, payload } = this.serializer.deserialize('application/json', data);
            this.logger.info(`↓ WEBSOCKET ${event}`);
            this.logger.debug('\tbody', payload);
            // https://github.com/neet/masto.js/issues/750
            if (event === 'delete') {
                return void this.emit(event, payload);
            }
            let args = [];
            try {
                args.push(this.serializer.deserialize('application/json', payload));
            }
            catch (_a) {
                args = [];
            }
            this.emit(event, ...args);
        };
    }
    /**
     * Connect to the websocket endpoint
     * @param url URL of the websocket endpoint
     * @param protocols Subprotocol(s) for `Sec-Websocket-Protocol`
     * @param params URL parameters
     */
    static connect(url, serializer, logger, protocols) {
        return new Promise((resolve, reject) => {
            const ws = new SomeClass(url, protocols);
            const instance = new WsEventsNativeImpl(ws, serializer, logger);
            ws.addEventListener('message', instance.handleMessage);
            ws.addEventListener('error', reject);
            ws.addEventListener('open', () => resolve(instance));
        });
    }
    /**
     * Disconnect from the websocket endpoint
     */
    disconnect() {
        if (!this.ws)
            return;
        this.ws.close();
    }
}
class WsNativeImpl {
    constructor(config, serializer, logger) {
        this.config = config;
        this.serializer = serializer;
        this.logger = logger;
    }
    stream(path, params = {}) {
        return WsEventsNativeImpl.connect(this.config.resolveWebsocketPath(path, params), this.serializer, this.logger, this.config.createWebsocketProtocols());
    }
}

const buildHttpContext = (params) => {
    const version = params.version && !params.disableVersionCheck
        ? new SemVer(params.version, true)
        : undefined;
    const props = Object.assign(Object.assign({}, params), { version });
    const serializer = new SerializerNativeImpl();
    const config = new MastoConfig(props, serializer);
    const logger = new LoggerConsoleImpl(config.getLogLevel());
    const http = new HttpNativeImpl(serializer, config, logger);
    return { serializer, config, logger, http };
};
const fetchV1Instance = (params) => {
    const { http, config } = buildHttpContext(params);
    return new InstanceRepository$1(http, config).fetch();
};
const createClient = (params) => {
    const { serializer, config, logger, http } = buildHttpContext(params);
    const ws = new WsNativeImpl(config, serializer, logger);
    logger.debug('Masto.js initialised', config);
    return new Client(http, ws, config, logger);
};

function createMasto() {
  let client = shallowRef(void 0);
  let params = ref();
  const canStreaming = computed(() => !!params.value?.streamingApiUrl);
  const setParams = (newParams) => {
    const p = { ...params.value, ...newParams };
    client.value = createClient(p);
    params.value = p;
  };
  return {
    client,
    params: readonly(params),
    canStreaming,
    setParams
  };
}
function useMasto() {
  return useNuxtApp().$masto;
}
function useMastoClient() {
  return useMasto().client.value;
}
function mastoLogin(masto, user) {
  const __$temp_1 = masto, setParams = toRef$1(__$temp_1, "setParams");
  const server = user.server;
  const url = `https://${server}`;
  const instance = reactive(getInstanceCache(server) || { uri: server, accountDomain: server });
  setParams.value({
    url,
    accessToken: user?.token,
    disableVersionCheck: true,
    streamingApiUrl: instance?.urls?.streamingApi
  });
  fetchV1Instance({ url }).then((newInstance) => {
    Object.assign(instance, newInstance);
    setParams.value({
      streamingApiUrl: newInstance.urls.streamingApi
    });
    instanceStorage.value[server] = newInstance;
  });
  return instance;
}
function useStreaming(cb, { immediate = true, controls } = {}) {
  const { canStreaming, client } = useMasto();
  const isActive = ref(immediate);
  const stream = ref();
  function pause() {
    isActive.value = false;
  }
  function resume() {
    isActive.value = true;
  }
  function cleanup() {
    if (stream.value) {
      stream.value.then((s) => s.disconnect()).catch(() => Promise.resolve());
      stream.value = void 0;
    }
  }
  watchEffect(() => {
    cleanup();
    if (canStreaming.value && isActive.value)
      stream.value = cb(client.value);
  });
  tryOnBeforeUnmount();
  if (controls)
    return { stream, isActive, pause, resume };
  else
    return stream;
}

const cache = new LRUCache({
  max: 1e3
});
function setCached(key, value, override = false) {
  if (override || !cache.has(key))
    cache.set(key, value);
}
function removeCached(key) {
  cache.delete(key);
}
function fetchStatus(id, force = false) {
  const server = currentServer.value;
  const userId = currentUser.value?.account.id;
  const key = `${server}:${userId}:status:${id}`;
  const cached = cache.get(key);
  if (cached && !force)
    return cached;
  const promise = useMastoClient().v1.statuses.fetch(id).then((status) => {
    cacheStatus(status);
    return status;
  });
  cache.set(key, promise);
  return promise;
}
function fetchAccountById(id) {
  if (!id)
    return Promise.resolve(null);
  const server = currentServer.value;
  const userId = currentUser.value?.account.id;
  const key = `${server}:${userId}:account:${id}`;
  const cached = cache.get(key);
  if (cached)
    return cached;
  const domain = getInstanceDomainFromServer(server);
  const promise = useMastoClient().v1.accounts.fetch(id).then((r) => {
    if (r.acct && !r.acct.includes("@") && domain)
      r.acct = `${r.acct}@${domain}`;
    cacheAccount(r, server, true);
    return r;
  });
  cache.set(key, promise);
  return promise;
}
async function fetchAccountByHandle(acct) {
  const server = currentServer.value;
  const userId = currentUser.value?.account.id;
  const domain = getInstanceDomainFromServer(server);
  const userAcct = domain && acct.endsWith(`@${domain}`) ? acct.slice(0, -domain.length - 1) : acct;
  const key = `${server}:${userId}:account:${userAcct}`;
  const cached = cache.get(key);
  if (cached)
    return cached;
  async function lookupAccount() {
    const client = useMastoClient();
    let account2;
    if (!isGotoSocial.value) {
      account2 = await client.v1.accounts.lookup({ acct: userAcct });
    } else {
      const userAcctDomain = userAcct.includes("@") ? userAcct : `${userAcct}@${domain}`;
      account2 = (await client.v1.search({ q: `@${userAcctDomain}`, type: "accounts" })).accounts[0];
    }
    if (account2.acct && !account2.acct.includes("@") && domain)
      account2.acct = `${account2.acct}@${domain}`;
    return account2;
  }
  const account = lookupAccount().then((r) => {
    cacheAccount(r, server, true);
    return r;
  });
  cache.set(key, account);
  return account;
}
function useAccountByHandle(acct) {
  return useAsyncState(() => fetchAccountByHandle(acct), null).state;
}
function useAccountById(id) {
  return useAsyncState(() => fetchAccountById(id), null).state;
}
function cacheStatus(status, server = currentServer.value, override) {
  const userId = currentUser.value?.account.id;
  setCached(`${server}:${userId}:status:${status.id}`, status, override);
}
function removeCachedStatus(id, server = currentServer.value) {
  const userId = currentUser.value?.account.id;
  removeCached(`${server}:${userId}:status:${id}`);
}
function cacheAccount(account, server = currentServer.value, override) {
  const userId = currentUser.value?.account.id;
  const userAcct = account.acct.endsWith(`@${server}`) ? account.acct.slice(0, -server.length - 1) : account.acct;
  setCached(`${server}:${userId}:account:${account.id}`, account, override);
  setCached(`${server}:${userId}:account:${userAcct}`, account, override);
}

function getEmojiAttributes(input) {
  const match = typeof input === "string" ? getEmojiMatchesInText(emojiRegEx, input)?.[0] : input;
  const file = emojiFilename(match);
  const className = `iconify-emoji iconify-emoji--${emojiPrefix}${file.padding ? " iconify-emoji-padded" : ""}`;
  return {
    class: className,
    src: `/emojis/${emojiPrefix}/${file.filename}`,
    alt: match.match
  };
}

const UserLinkRE = /^(?:https:\/)?\/([^/]+)\/@([^/]+)$/;
const TagLinkRE = /^https?:\/\/([^/]+)\/tags\/([^/]+)\/?$/;
const HTMLTagRE = /<[^>]+>/g;
function getDataUrlFromArr(arr, w, h) {
  if (typeof w === "undefined" || typeof h === "undefined")
    w = h = Math.sqrt(arr.length / 4);
  const canvas = document.createElement("canvas");
  const ctx = canvas.getContext("2d");
  canvas.width = w;
  canvas.height = h;
  const imgData = ctx.createImageData(w, h);
  imgData.data.set(arr);
  ctx.putImageData(imgData, 0, 0);
  return canvas.toDataURL();
}
function emojisArrayToObject(emojis) {
  return Object.fromEntries(emojis.map((i) => [i.shortcode, i]));
}
function noop$1() {
}
function useIsMac() {
  const headers = useRequestHeaders(["user-agent"]);
  return computed(() => headers["user-agent"]?.includes("Macintosh") ?? navigator?.platform?.includes("Mac") ?? false);
}
function removeHTMLTags(str) {
  return str.replaceAll(HTMLTagRE, "");
}

const sanitizerBasicClasses = filterClasses(/^(h-\S*|p-\S*|u-\S*|dt-\S*|e-\S*|mention|hashtag|ellipsis|invisible)$/u);
const sanitizer = sanitize({
  // Allow basic elements as seen in https://github.com/mastodon/mastodon/blob/17f79082b098e05b68d6f0d38fabb3ac121879a9/lib/sanitize_ext/sanitize_config.rb
  br: {},
  p: {},
  a: {
    href: filterHref(),
    class: sanitizerBasicClasses,
    rel: set("nofollow noopener noreferrer"),
    target: set("_blank")
  },
  span: {
    class: sanitizerBasicClasses
  },
  // Allow elements potentially created for Markdown code blocks above
  pre: {},
  code: {
    class: filterClasses(/^language-\w+$/)
  },
  // Other elements supported in glitch, as seen in
  // https://github.com/glitch-soc/mastodon/blob/13227e1dafd308dfe1a3effc3379b766274809b3/lib/sanitize_ext/sanitize_config.rb#L75
  abbr: {
    title: keep
  },
  del: {},
  blockquote: {
    cite: filterHref()
  },
  b: {},
  strong: {},
  u: {},
  sub: {},
  sup: {},
  i: {},
  em: {},
  h1: {},
  h2: {},
  h3: {},
  h4: {},
  h5: {},
  ul: {},
  ol: {
    start: keep,
    reversed: keep
  },
  li: {
    value: keep
  }
});
function parseMastodonHTML(html, options = {}) {
  const {
    markdown = true,
    replaceUnicodeEmoji = true,
    convertMentionLink = false,
    collapseMentionLink = false,
    hideEmojis = false,
    mentions,
    status,
    inReplyToStatus
  } = options;
  if (markdown) {
    html = html.replace(/>(```|~~~)(\w*)([\s\S]+?)\1/g, (_1, _2, lang, raw) => {
      const code = htmlToText(raw).replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/`/g, "&#96;");
      const classes = lang ? ` class="language-${lang}"` : "";
      return `><pre><code${classes}>${code}</code></pre>`;
    }).replace(/`([^`\n]*)`/g, (_1, raw) => {
      return raw ? `<code>${htmlToText(raw).replace(/</g, "&lt;").replace(/>/g, "&gt;")}</code>` : "";
    });
  }
  const transforms = [
    sanitizer,
    ...options.astTransforms || []
  ];
  if (hideEmojis) {
    transforms.push(removeUnicodeEmoji);
    transforms.push(removeCustomEmoji(options.emojis ?? {}));
  } else {
    if (replaceUnicodeEmoji)
      transforms.push(transformUnicodeEmoji);
    transforms.push(replaceCustomEmoji(options.emojis ?? {}));
  }
  if (markdown)
    transforms.push(transformMarkdown);
  if (mentions?.length)
    transforms.push(createTransformNamedMentions(mentions));
  if (convertMentionLink)
    transforms.push(transformMentionLink);
  transforms.push(transformParagraphs);
  if (collapseMentionLink)
    transforms.push(transformCollapseMentions(status, inReplyToStatus));
  return transformSync(parse(html), transforms);
}
function convertMastodonHTML(html, customEmojis = {}) {
  const tree = parseMastodonHTML(html, {
    emojis: customEmojis,
    markdown: true,
    convertMentionLink: true
  });
  return render(tree);
}
function htmlToText(html) {
  try {
    const tree = parse(html);
    return tree.children.map((n) => treeToText(n)).join("").trim();
  } catch (err) {
    console.error(err);
    return "";
  }
}
function recursiveTreeToText(input) {
  if (input && input.children && input.children.length > 0)
    return input.children.map((n) => recursiveTreeToText(n)).join("");
  else
    return treeToText(input);
}
const emojiIdNeedsWrappingRE = /^(\d|\w|-|_)+$/;
function treeToText(input) {
  let pre = "";
  let body = "";
  let post = "";
  if (input.type === TEXT_NODE)
    return decode(input.value);
  if (input.name === "br")
    return "\n";
  if (["p", "pre"].includes(input.name))
    pre = "\n";
  if (input.attributes?.["data-type"] === "mention") {
    const acct = input.attributes["data-id"];
    if (acct)
      return acct.startsWith("@") ? acct : `@${acct}`;
  }
  if (input.name === "code") {
    if (input.parent?.name === "pre") {
      const lang = input.attributes.class?.replace("language-", "");
      pre = `\`\`\`${lang || ""}
`;
      post = "\n```";
    } else {
      pre = "`";
      post = "`";
    }
  } else if (input.name === "b" || input.name === "strong") {
    pre = "**";
    post = "**";
  } else if (input.name === "i" || input.name === "em") {
    pre = "*";
    post = "*";
  } else if (input.name === "del") {
    pre = "~~";
    post = "~~";
  }
  if ("children" in input)
    body = input.children.map((n) => treeToText(n)).join("");
  if (input.name === "img" || input.name === "picture") {
    if (input.attributes.class?.includes("custom-emoji")) {
      const id = input.attributes["data-emoji-id"] ?? input.attributes.alt ?? input.attributes.title ?? "unknown";
      return id.match(emojiIdNeedsWrappingRE) ? `:${id}:` : id;
    }
    if (input.attributes.class?.includes("iconify-emoji"))
      return input.attributes.alt;
  }
  return pre + body + post;
}
function transformSync(doc, transforms) {
  function visit(node, transform, root) {
    if (Array.isArray(node.children)) {
      const children = [];
      for (let i = 0; i < node.children.length; i++) {
        const result = visit(node.children[i], transform, root);
        if (Array.isArray(result))
          children.push(...result);
        else if (result)
          children.push(result);
      }
      node.children = children.map((value) => {
        if (typeof value === "string")
          return { type: TEXT_NODE, value, parent: node };
        value.parent = node;
        return value;
      });
    }
    return transform(node, root);
  }
  for (const transform of transforms)
    doc = visit(doc, transform, doc);
  return doc;
}
function sanitize(allowedElements) {
  return (node) => {
    if (node.type !== ELEMENT_NODE)
      return node;
    if (!Object.prototype.hasOwnProperty.call(allowedElements, node.name))
      return null;
    const attrSanitizers = allowedElements[node.name];
    const attrs = {};
    for (const [name, func] of Object.entries(attrSanitizers)) {
      const value = func(node.attributes[name]);
      if (value !== void 0)
        attrs[name] = value;
    }
    node.attributes = attrs;
    return node;
  };
}
function filterClasses(allowed) {
  return (c) => {
    if (!c)
      return void 0;
    return c.split(/\s/g).filter((cls) => allowed.test(cls)).join(" ");
  };
}
function keep(value) {
  return value;
}
function set(value) {
  return () => value;
}
function filterHref() {
  const LINK_PROTOCOLS = /* @__PURE__ */ new Set([
    "http:",
    "https:",
    "dat:",
    "dweb:",
    "ipfs:",
    "ipns:",
    "ssb:",
    "gopher:",
    "xmpp:",
    "magnet:",
    "gemini:"
  ]);
  return (href) => {
    if (href === void 0)
      return void 0;
    if (href.startsWith("/") || href.startsWith("."))
      return href;
    let url;
    try {
      url = new URL(href);
    } catch (err) {
      if (err instanceof TypeError)
        return void 0;
      throw err;
    }
    if (LINK_PROTOCOLS.has(url.protocol))
      return url.toString();
    return "#";
  };
}
function removeUnicodeEmoji(node) {
  if (node.type !== TEXT_NODE)
    return node;
  let start = 0;
  const matches = [];
  findAndReplaceEmojisInText(emojiRegEx, node.value, (match, result) => {
    matches.push(result.slice(start).trimEnd());
    start = result.length + match.match.length;
    return void 0;
  });
  if (matches.length === 0)
    return node;
  matches.push(node.value.slice(start));
  return matches.filter(Boolean);
}
function transformUnicodeEmoji(node) {
  if (node.type !== TEXT_NODE)
    return node;
  let start = 0;
  const matches = [];
  findAndReplaceEmojisInText(emojiRegEx, node.value, (match, result) => {
    const attrs = getEmojiAttributes(match);
    matches.push(result.slice(start));
    matches.push(h$1("img", { src: attrs.src, alt: attrs.alt, class: attrs.class }));
    start = result.length + match.match.length;
    return void 0;
  });
  if (matches.length === 0)
    return node;
  matches.push(node.value.slice(start));
  return matches.filter(Boolean);
}
function removeCustomEmoji(customEmojis) {
  return (node) => {
    if (node.type !== TEXT_NODE)
      return node;
    const split = node.value.split(/\s?:([\w-]+?):/g);
    if (split.length === 1)
      return node;
    return split.map((name, i) => {
      if (i % 2 === 0)
        return name;
      const emoji = customEmojis[name];
      if (!emoji)
        return `:${name}:`;
      return "";
    }).filter(Boolean);
  };
}
function replaceCustomEmoji(customEmojis) {
  return (node) => {
    if (node.type !== TEXT_NODE)
      return node;
    const split = node.value.split(/:([\w-]+?):/g);
    if (split.length === 1)
      return node;
    return split.map((name, i) => {
      if (i % 2 === 0)
        return name;
      const emoji = customEmojis[name];
      if (!emoji)
        return `:${name}:`;
      return h$1(
        "picture",
        {
          "alt": `:${name}:`,
          "class": "custom-emoji",
          "data-emoji-id": name
        },
        [
          h$1(
            "source",
            {
              srcset: emoji.staticUrl,
              media: "(prefers-reduced-motion: reduce)"
            }
          ),
          h$1(
            "img",
            {
              src: emoji.url,
              alt: `:${name}:`
            }
          )
        ]
      );
    }).filter(Boolean);
  };
}
const _markdownReplacements = [
  [/\*\*\*(.*?)\*\*\*/g, ([c]) => h$1("b", null, [h$1("em", null, c)])],
  [/\*\*(.*?)\*\*/g, (c) => h$1("b", null, c)],
  [/\*(.*?)\*/g, (c) => h$1("em", null, c)],
  [/~~(.*?)~~/g, (c) => h$1("del", null, c)],
  [/`([^`]+?)`/g, (c) => h$1("code", null, c)],
  // transform @username@twitter.com as links
  [/\B@([a-zA-Z0-9_]+)@twitter\.com\b/gi, (c) => h$1("a", { href: `https://twitter.com/${c}`, target: "_blank", rel: "nofollow noopener noreferrer", class: "mention external" }, `@${c}@twitter.com`)]
];
function _markdownProcess(value) {
  const results = [];
  let start = 0;
  while (true) {
    let found;
    for (const [re, replacer] of _markdownReplacements) {
      re.lastIndex = start;
      const match = re.exec(value);
      if (match) {
        if (!found || match.index < found.match.index)
          found = { match, replacer };
      }
    }
    if (!found)
      break;
    results.push(value.slice(start, found.match.index));
    results.push(found.replacer(_markdownProcess(found.match[1])));
    start = found.match.index + found.match[0].length;
  }
  results.push(value.slice(start));
  return results.filter(Boolean);
}
function transformMarkdown(node) {
  if (node.type !== TEXT_NODE)
    return node;
  return _markdownProcess(node.value);
}
function transformParagraphs(node) {
  if (node.parent?.type === DOCUMENT_NODE && node.name === "p" && node.parent.children.at(-1) !== node)
    return [node, h$1("p")];
  return node;
}
function isMention(node) {
  const child = node.children?.length === 1 ? node.children[0] : null;
  return Boolean(child?.name === "a" && child.attributes.class?.includes("mention"));
}
function isSpacing(node) {
  return node.type === TEXT_NODE && !node.value.trim();
}
function getMentionHandle(node) {
  return hrefToHandle(node.children?.[0].attributes.href) ?? node.children?.[0]?.children?.[0]?.attributes?.["data-id"];
}
function transformCollapseMentions(status, inReplyToStatus) {
  let processed = false;
  return (node, root) => {
    if (processed || node.parent !== root || !node.children)
      return node;
    const mentions = [];
    const children = node.children;
    let trimContentStart;
    for (const child of children) {
      if (isMention(child)) {
        mentions.push(child);
      } else if (isSpacing(child)) {
        mentions.push(child);
      } else {
        if (child.type === TEXT_NODE) {
          trimContentStart = () => {
            child.value = child.value.trimStart();
          };
        }
        if (child.name === "br")
          mentions.push(void 0);
        break;
      }
    }
    processed = true;
    if (mentions.length === 0)
      return node;
    let mentionsCount = 0;
    let contextualMentionsCount = 0;
    let removeNextSpacing = false;
    const contextualMentions = mentions.filter((mention) => {
      if (!mention)
        return false;
      if (removeNextSpacing && isSpacing(mention)) {
        removeNextSpacing = false;
        return false;
      }
      if (isMention(mention)) {
        mentionsCount++;
        if (inReplyToStatus) {
          const mentionHandle = getMentionHandle(mention);
          if (inReplyToStatus.account.acct === mentionHandle || inReplyToStatus.mentions.some((m) => m.acct === mentionHandle)) {
            removeNextSpacing = true;
            return false;
          }
        }
        contextualMentionsCount++;
      }
      return true;
    });
    const showMentions = !(contextualMentionsCount === 0 || mentionsCount === 1 && status?.inReplyToAccountId);
    const grouped = contextualMentionsCount > 2;
    if (!showMentions || grouped)
      trimContentStart?.();
    const contextualChildren = children.slice(mentions.length);
    const mentionNodes = showMentions ? grouped ? [h$1("mention-group", null, ...contextualMentions)] : contextualMentions : [];
    return {
      ...node,
      children: [...mentionNodes, ...contextualChildren]
    };
  };
}
function hrefToHandle(href) {
  const matchUser = href.match(UserLinkRE);
  if (matchUser) {
    const [, server, username] = matchUser;
    return `${username}@${server.replace(/(.+\.)(.+\..+)/, "$2")}`;
  }
}
function transformMentionLink(node) {
  if (node.name === "a" && node.attributes.class?.includes("mention")) {
    const href = node.attributes.href;
    if (href) {
      const handle = hrefToHandle(href);
      if (handle) {
        return h$1("span", { "data-type": "mention", "data-id": handle }, handle);
      }
    }
  }
  return node;
}
function createTransformNamedMentions(mentions) {
  return (node) => {
    if (node.name === "a" && node.attributes.class?.includes("mention")) {
      const href = node.attributes.href;
      const mention = href && mentions.find((m) => m.url === href);
      if (mention) {
        node.attributes.href = `/${currentServer.value}/@${mention.acct}`;
        node.children = [h$1("span", { "data-type": "mention", "data-id": mention.acct }, `@${mention.username}`)];
        return node;
      }
    }
    return node;
  };
}

const currentUserDrafts = computed(() => ({})) ;
const ALL_VISIBILITY = ["public", "unlisted", "private", "direct"];
function getDefaultVisibility(currentVisibility) {
  const preferredVisibility = currentUser.value?.account.source.privacy || "public";
  return ALL_VISIBILITY.indexOf(currentVisibility) > ALL_VISIBILITY.indexOf(preferredVisibility) ? currentVisibility : preferredVisibility;
}
function getDefaultDraft(options = {}) {
  const {
    attachments = [],
    initialText = "",
    status,
    inReplyToId,
    visibility,
    sensitive,
    spoilerText,
    language,
    mentions,
    poll
  } = options;
  return {
    attachments,
    initialText,
    params: {
      status: status || "",
      poll,
      inReplyToId,
      visibility: getDefaultVisibility(visibility || "public"),
      sensitive: sensitive ?? false,
      spoilerText: spoilerText || "",
      language: language || ""
      // auto inferred from current language on posting
    },
    mentions,
    lastUpdated: Date.now()
  };
}
async function getDraftFromStatus(status) {
  const info = {
    status: await convertMastodonHTML(status.content),
    visibility: status.visibility,
    attachments: status.mediaAttachments,
    sensitive: status.sensitive,
    spoilerText: status.spoilerText,
    language: status.language,
    inReplyToId: status.inReplyToId
  };
  return getDefaultDraft(status.mediaAttachments !== void 0 && status.mediaAttachments.length > 0 ? { ...info, mediaIds: status.mediaAttachments.map((att) => att.id) } : {
    ...info,
    poll: status.poll ? {
      expiresIn: Math.abs((/* @__PURE__ */ new Date()).getTime() - new Date(status.poll.expiresAt).getTime()) / 1e3,
      options: [...status.poll.options.map(({ title }) => title), ""],
      multiple: status.poll.multiple,
      hideTotals: status.poll.options[0].votesCount === null
    } : void 0
  });
}
function getAccountsToMention(status) {
  const userId = currentUser.value?.account.id;
  const accountsToMention = /* @__PURE__ */ new Set();
  if (status.account.id !== userId)
    accountsToMention.add(status.account.acct);
  status.mentions.filter((mention) => mention.id !== userId).map((mention) => mention.acct).forEach((i) => accountsToMention.add(i));
  return Array.from(accountsToMention);
}
function getReplyDraft(status) {
  const accountsToMention = getAccountsToMention(status);
  return {
    key: `reply-${status.id}`,
    draft: () => {
      return getDefaultDraft({
        initialText: "",
        inReplyToId: status.id,
        sensitive: status.sensitive,
        spoilerText: status.spoilerText,
        visibility: status.visibility,
        mentions: accountsToMention,
        language: status.language
      });
    }
  };
}
function isEmptyDraft(draft) {
  if (!draft)
    return true;
  const { params, attachments } = draft;
  const status = params.status || "";
  const text = htmlToText(status).trim().replace(/^(@\S+\s?)+/, "").replaceAll(/```/g, "").trim();
  return text.length === 0 && attachments.length === 0;
}
function useDraft(draftKey, initial = () => getDefaultDraft({})) {
  const draft = draftKey ? computed({
    get() {
      if (!currentUserDrafts.value[draftKey])
        currentUserDrafts.value[draftKey] = initial();
      return currentUserDrafts.value[draftKey];
    },
    set(val) {
      currentUserDrafts.value[draftKey] = val;
    }
  }) : ref(initial());
  const isEmpty = computed(() => isEmptyDraft(draft.value));
  onUnmounted(async () => {
    if (isEmpty.value && draftKey) {
      await nextTick();
      delete currentUserDrafts.value[draftKey];
    }
  });
  return { draft, isEmpty };
}
function mentionUser(account) {
  openPublishDialog("dialog", getDefaultDraft({
    status: `@${account.acct} `
  }));
}
function directMessageUser(account) {
  openPublishDialog("dialog", getDefaultDraft({
    status: `@${account.acct} `,
    visibility: "direct"
  }));
}

const confirmDialogChoice = ref();
const confirmDialogLabel = ref();
const errorDialogData = ref();
const mediaPreviewList = ref([]);
const mediaPreviewIndex = ref(0);
const statusEdit = ref();
const dialogDraftKey = ref();
const reportAccount = ref();
const reportStatus = ref();
const commandPanelInput = ref("");
const isFirstVisit = useLocalStorage(STORAGE_KEY_FIRST_VISIT, !false);
const isSigninDialogOpen = ref(false);
const isPublishDialogOpen = ref(false);
const isKeyboardShortcutsDialogOpen = ref(false);
const isMediaPreviewOpen = ref(false);
const isEditHistoryDialogOpen = ref(false);
const isPreviewHelpOpen = ref(isFirstVisit.value);
const isCommandPanelOpen = ref(false);
const isConfirmDialogOpen = ref(false);
const isErrorDialogOpen = ref(false);
const isFavouritedBoostedByDialogOpen = ref(false);
const isReportDialogOpen = ref(false);
const lastPublishDialogStatus = ref(null);
const favouritedBoostedByStatusId = ref(null);
function openSigninDialog() {
  isSigninDialogOpen.value = true;
}
async function openConfirmDialog(label) {
  confirmDialogLabel.value = typeof label === "string" ? { title: label } : label;
  confirmDialogChoice.value = void 0;
  isConfirmDialogOpen.value = true;
  await until(isConfirmDialogOpen).toBe(false);
  return confirmDialogChoice.value;
}
async function openPublishDialog(draftKey = "dialog", draft, overwrite = false) {
  dialogDraftKey.value = draftKey;
  if (draft) {
    if (overwrite && !isEmptyDraft(currentUserDrafts.value[draftKey])) ;
    if (overwrite || !currentUserDrafts.value[draftKey])
      currentUserDrafts.value[draftKey] = draft;
  }
  isPublishDialogOpen.value = true;
  await until(isPublishDialogOpen).toBe(false);
}
async function openFavoridedBoostedByDialog(statusId) {
  isFavouritedBoostedByDialogOpen.value = true;
  favouritedBoostedByStatusId.value = statusId;
}
if (isPreviewHelpOpen.value) {
  watch(isPreviewHelpOpen, () => {
    isFirstVisit.value = false;
  });
}
function openMediaPreview(attachments, index = 0) {
  mediaPreviewList.value = attachments;
  mediaPreviewIndex.value = index;
  isMediaPreviewOpen.value = true;
  history.pushState({
    ...history.state,
    mediaPreview: true,
    mediaPreviewList: JSON.stringify(attachments),
    mediaPreviewIndex: index
  }, "");
}
async function openErrorDialog(data) {
  errorDialogData.value = data;
  isErrorDialogOpen.value = true;
  await until(isErrorDialogOpen).toBe(false);
}
function closeMediaPreview() {
  history.back();
}
function openEditHistoryDialog(edit) {
  statusEdit.value = edit;
  isEditHistoryDialogOpen.value = true;
}
function openPreviewHelp() {
  isPreviewHelpOpen.value = true;
}
function closePreviewHelp() {
  isPreviewHelpOpen.value = false;
}
function openCommandPanel(isCommandMode = false) {
  commandPanelInput.value = isCommandMode ? "> " : "";
  isCommandPanelOpen.value = true;
}
function closeCommandPanel() {
  isCommandPanelOpen.value = false;
}
function closeKeyboardShortcuts() {
  isKeyboardShortcutsDialogOpen.value = false;
}
function openReportDialog(account, status) {
  reportAccount.value = account;
  reportStatus.value = status;
  isReportDialogOpen.value = true;
}
function closeReportDialog() {
  isReportDialogOpen.value = false;
}

function initializeUsers() {
  let defaultUsers = [];
  let removeUsersOnLocalStorage = false;
  if (globalThis?.localStorage) {
    const usersOnLocalStorageString = globalThis.localStorage.getItem(STORAGE_KEY_USERS);
    if (usersOnLocalStorageString) {
      defaultUsers = JSON.parse(usersOnLocalStorageString);
      removeUsersOnLocalStorage = true;
    }
  }
  const users2 = ref(defaultUsers) ;
  if (removeUsersOnLocalStorage)
    globalThis.localStorage.removeItem(STORAGE_KEY_USERS);
  return users2;
}
const users = initializeUsers() ;
const nodes = useLocalStorage(STORAGE_KEY_NODES, {}, { deep: true });
const currentUserHandle = useLocalStorage(STORAGE_KEY_CURRENT_USER_HANDLE, "");
const instanceStorage = useLocalStorage(STORAGE_KEY_SERVERS, {}, { deep: true });
function getInstanceCache(server) {
  return instanceStorage.value[server];
}
const currentUser = computed(() => {
  if (currentUserHandle.value) {
    const user = users.value.find((user2) => user2.account?.acct === currentUserHandle.value);
    if (user)
      return user;
  }
  return users.value[0];
});
const publicInstance = ref(null);
const currentInstance = computed(() => currentUser.value ? instanceStorage.value[currentUser.value.server] ?? null : publicInstance.value);
function getInstanceDomain(instance) {
  return instance.accountDomain || withoutProtocol(instance.uri);
}
const publicServer = ref("");
const currentServer = computed(() => currentUser.value?.server || publicServer.value);
const currentNodeInfo = computed(() => nodes.value[currentServer.value] || null);
const isGotoSocial = computed(() => currentNodeInfo.value?.software?.name === "gotosocial");
const isGlitchEdition = computed(() => currentInstance.value?.version?.includes("+glitch"));
function useUsers() {
  return users;
}
function useSelfAccount(user) {
  return computed(() => currentUser.value && resolveUnref(user)?.id === currentUser.value.account.id);
}
const characterLimit = computed(() => currentInstance.value?.configuration?.statuses.maxCharacters ?? DEFAULT_POST_CHARS_LIMIT);
async function loginTo(masto, user) {
  const __$temp_1 = masto, client = toRef$1(__$temp_1, "client");
  const instance = mastoLogin(masto, user);
  const url = `https://${user.server}`;
  fetch(`${url}/nodeinfo/2.0`, { mode: "no-cors" }).then((r) => r.json()).then((info) => {
    nodes.value[user.server] = info;
  }).catch(() => void 0);
  if (!user?.token) {
    publicServer.value = user.server;
    publicInstance.value = instance;
    return;
  }
  function getUser() {
    return users.value.find((u) => u.server === user.server && u.token === user.token);
  }
  const account = getUser()?.account;
  if (account)
    currentUserHandle.value = account.acct;
  const [me, pushSubscription] = await Promise.all([
    fetchAccountInfo(client.value, user.server),
    // if PWA is not enabled, don't get push subscription
    useAppConfig().pwaEnabled ? client.value.v1.webPushSubscriptions.fetch().catch(() => Promise.resolve(void 0)) : Promise.resolve(void 0)
  ]);
  const existingUser = getUser();
  if (existingUser) {
    existingUser.account = me;
    existingUser.pushSubscription = pushSubscription;
  } else {
    users.value.push({
      ...user,
      account: me,
      pushSubscription
    });
  }
  currentUserHandle.value = me.acct;
}
const accountPreferencesMap = /* @__PURE__ */ new Map();
function getExpandSpoilersByDefault(account) {
  return accountPreferencesMap.get(account.acct)?.["reading:expand:spoilers"] ?? false;
}
function getExpandMediaByDefault(account) {
  return accountPreferencesMap.get(account.acct)?.["reading:expand:media"] === "show_all";
}
function getHideMediaByDefault(account) {
  return accountPreferencesMap.get(account.acct)?.["reading:expand:media"] === "hide_all";
}
async function fetchAccountInfo(client, server) {
  const fetchPrefs = async () => {
    try {
      return await client.v1.preferences.fetch();
    } catch (e) {
      console.warn(`Cannot fetch preferences: ${e}`);
      return {};
    }
  };
  const [account, preferences] = await Promise.all([
    client.v1.accounts.verifyCredentials(),
    fetchPrefs()
  ]);
  if (!account.acct.includes("@")) {
    const webDomain = getInstanceDomainFromServer(server);
    account.acct = `${account.acct}@${webDomain}`;
  }
  accountPreferencesMap.set(account.acct, preferences);
  cacheAccount(account, server, true);
  return account;
}
function getInstanceDomainFromServer(server) {
  const instance = getInstanceCache(server);
  const webDomain = instance ? getInstanceDomain(instance) : server;
  return webDomain;
}
async function refreshAccountInfo() {
  const account = await fetchAccountInfo(useMastoClient(), currentServer.value);
  currentUser.value.account = account;
  return account;
}
async function removePushNotificationData(user, fromSWPushManager = true) {
  user.pushSubscription = void 0;
  const { acct } = user.account;
  delete useLocalStorage(STORAGE_KEY_NOTIFICATION, {}).value[acct];
  delete useLocalStorage(STORAGE_KEY_NOTIFICATION_POLICY, {}).value[acct];
  const pwaEnabled = useAppConfig().pwaEnabled;
  const pwa = useNuxtApp().$pwa;
  const registrationError = pwa?.registrationError === true;
  const unregister = pwaEnabled && !registrationError && pwa?.registrationError === true && fromSWPushManager;
  if (unregister && (users.value.length === 0 || users.value.every((u) => !u.pushSubscription))) {
    try {
      const registration = await navigator.serviceWorker.ready;
      const subscription = await registration.pushManager.getSubscription();
      if (subscription)
        await subscription.unsubscribe();
    } catch {
    }
  }
}
async function removePushNotifications(user) {
  if (!user.pushSubscription)
    return;
  await useMastoClient().v1.webPushSubscriptions.remove().catch(() => Promise.resolve());
}
async function switchUser(user) {
  const masto = useMasto();
  await loginTo(masto, user);
  const route = useRoute();
  const router = useRouter();
  if ("server" in route.params && user?.token && !useNuxtApp()._processingMiddleware) {
    await router.push({
      ...route,
      force: true
    });
  }
}
async function signOut() {
  if (!currentUser.value)
    return;
  const masto = useMasto();
  const _currentUserId = currentUser.value.account.id;
  const index = users.value.findIndex((u) => u.account?.id === _currentUserId);
  if (index !== -1) {
    clearUserLocalStorage();
    if (!users.value.some((u, i) => u.server === currentUser.value.server && i !== index))
      delete instanceStorage.value[currentUser.value.server];
    await removePushNotifications(currentUser.value);
    await removePushNotificationData(currentUser.value);
    currentUserHandle.value = "";
    users.value.splice(index, 1);
  }
  currentUserHandle.value = users.value[0]?.account?.acct;
  if (!currentUserHandle.value)
    await useRouter().push("/");
  loginTo(masto, currentUser.value || { server: publicServer.value });
}
function checkLogin() {
  if (!currentUser.value) {
    openSigninDialog();
    return false;
  }
  return true;
}
function useUserLocalStorage(key, initial) {
  return shallowRef(initial());
}
function clearUserLocalStorage(account) {
  if (!account)
    account = currentUser.value?.account;
  if (!account)
    return;
  const id = `${account.acct}@${currentInstance.value ? getInstanceDomain(currentInstance.value) : currentServer.value}`;
  const cacheMap = useUserLocalStorage._;
  cacheMap?.forEach(({ value }) => {
    if (value.value[id])
      delete value.value[id];
  });
}

const __nuxt_page_meta$p = {
      key: (route) => `${route.params.server ?? currentServer.value}:${route.params.account}`
    };

const __nuxt_page_meta$o = {
      name: "list-accounts"
    };

const __nuxt_page_meta$n = {
      name: "list"
    };

const __nuxt_page_meta$m = {
      middleware: "auth"
    };

const __nuxt_page_meta$l = {
      middleware: "auth"
    };

function getDisplayName(account, options) {
  const displayName = account.displayName || account.username || account.acct || "";
  if (options?.rich)
    return displayName;
  return displayName.replace(/:([\w-]+?):/g, "");
}
function accountToShortHandle(acct) {
  return `@${acct.includes("@") ? acct.split("@")[0] : acct}`;
}
function getShortHandle({ acct }) {
  if (!acct)
    return "";
  return accountToShortHandle(acct);
}
function getServerName(account) {
  if (account.acct?.includes("@"))
    return account.acct.split("@")[1];
  return currentInstance.value ? getInstanceDomain(currentInstance.value) : "";
}
function getFullHandle(account) {
  const handle = `@${account.acct}`;
  if (!currentUser.value || account.acct.includes("@"))
    return handle;
  return `${handle}@${getServerName(account)}`;
}
function toShortHandle(fullHandle) {
  if (!currentUser.value)
    return fullHandle;
  const server = currentUser.value.server;
  if (fullHandle.endsWith(`@${server}`))
    return fullHandle.slice(0, -server.length - 1);
  return fullHandle;
}
function extractAccountHandle(account) {
  let handle = getFullHandle(account).slice(1);
  const uri = currentInstance.value ? getInstanceDomain(currentInstance.value) : currentServer.value;
  if (currentInstance.value && handle.endsWith(`@${uri}`))
    handle = handle.slice(0, -uri.length - 1);
  return handle;
}

function getAccountRoute(account) {
  return useRouter().resolve({
    name: "account-index",
    params: {
      server: currentServer.value,
      account: extractAccountHandle(account)
    }
  });
}
function getAccountFollowingRoute(account) {
  return useRouter().resolve({
    name: "account-following",
    params: {
      server: currentServer.value,
      account: extractAccountHandle(account)
    }
  });
}
function getAccountFollowersRoute(account) {
  return useRouter().resolve({
    name: "account-followers",
    params: {
      server: currentServer.value,
      account: extractAccountHandle(account)
    }
  });
}
function getReportRoute(id) {
  return `https://${currentUser.value?.server}/admin/reports/${encodeURIComponent(id)}`;
}
function getStatusRoute(status) {
  return useRouter().resolve({
    name: "status",
    params: {
      server: currentServer.value,
      account: extractAccountHandle(status.account),
      status: status.id
    }
  });
}
function getTagRoute(tag) {
  return useRouter().resolve({
    name: "tag",
    params: {
      server: currentServer.value,
      tag
    }
  });
}
function getStatusPermalinkRoute(status) {
  return status.url ? withoutProtocol(status.url) : null;
}
function getStatusInReplyToRoute(status) {
  return useRouter().resolve({
    name: "status-by-id",
    params: {
      server: currentServer.value,
      status: status.inReplyToId
    }
  });
}
function navigateToStatus({ status, focusReply = false }) {
  return navigateTo({
    path: getStatusRoute(status).href,
    state: { focusReply }
  });
}

const __nuxt_page_meta$k = {
      name: "status-by-id",
      middleware: async (to) => {let __temp, __restore;
        const params = to.params;
        const id = params.status;
        const status = (([__temp,__restore]=executeAsync(()=>fetchStatus(id))),__temp=await __temp,__restore(),__temp);
        return getStatusRoute(status);
      }
    };

const __nuxt_page_meta$j = {
      name: "tag"
    };

const __nuxt_page_meta$i = {
      middleware: "auth"
    };

const __nuxt_page_meta$h = {
      middleware: "auth"
    };

const __nuxt_page_meta$g = {
      middleware: "auth"
    };

const __nuxt_page_meta$f = {
      middleware: "auth"
    };

const __nuxt_page_meta$e = {
      middleware: "auth"
    };

const __nuxt_page_meta$d = {
      middleware: "auth"
    };

const __nuxt_page_meta$c = {
      middleware: "auth",
      alias: ["/signin/callback"]
    };

const __nuxt_page_meta$b = {
      middleware: "auth"
    };

const __nuxt_page_meta$a = {
      middleware: "auth"
    };

const __nuxt_page_meta$9 = {
      middleware: "auth"
    };

const __nuxt_page_meta$8 = {
      middleware: "auth"
    };

const __nuxt_page_meta$7 = {
      middleware: "auth"
    };

const __nuxt_page_meta$6 = {
      middleware: "auth"
    };

const __nuxt_page_meta$5 = {
      middleware: ["auth", () => {
        if (!useAppConfig().pwaEnabled)
          return navigateTo("/settings/notifications");
      }]
    };

const __nuxt_page_meta$4 = {
      middleware: "auth"
    };

const __nuxt_page_meta$3 = {
      middleware: "auth"
    };

const __nuxt_page_meta$2 = {
      middleware: "auth"
    };

const __nuxt_page_meta$1 = {
      wideLayout: true
    };

const __nuxt_page_meta = {
  middleware: () => {
    if (!useAppConfig().pwaEnabled)
      return navigateTo('/')
  },
};

const _routes = [
  {
    name: __nuxt_page_meta$w?.name ?? "permalink",
    path: __nuxt_page_meta$w?.path ?? "/:permalink(.*)*",
    meta: __nuxt_page_meta$w || {},
    alias: __nuxt_page_meta$w?.alias || [],
    redirect: __nuxt_page_meta$w?.redirect || undefined,
    component: () => import('./_nuxt/_...permalink_-6265ead4.mjs').then(m => m.default || m)
  },
  {
    name: __nuxt_page_meta$v?.name ?? "server-@account-status",
    path: __nuxt_page_meta$v?.path ?? "/:server?/@:account()/:status()",
    meta: __nuxt_page_meta$v || {},
    alias: __nuxt_page_meta$v?.alias || [],
    redirect: __nuxt_page_meta$v?.redirect || undefined,
    component: () => import('./_nuxt/_status_-3abdd04f.mjs').then(m => m.default || m)
  },
  {
    path: __nuxt_page_meta$p?.path ?? "/:server?/@:account()",
    children: [
  {
    name: __nuxt_page_meta$u?.name ?? "server-@account-index-followers",
    path: __nuxt_page_meta$u?.path ?? "followers",
    meta: __nuxt_page_meta$u || {},
    alias: __nuxt_page_meta$u?.alias || [],
    redirect: __nuxt_page_meta$u?.redirect || undefined,
    component: () => import('./_nuxt/followers-8226e14d.mjs').then(m => m.default || m)
  },
  {
    name: __nuxt_page_meta$t?.name ?? "server-@account-index-following",
    path: __nuxt_page_meta$t?.path ?? "following",
    meta: __nuxt_page_meta$t || {},
    alias: __nuxt_page_meta$t?.alias || [],
    redirect: __nuxt_page_meta$t?.redirect || undefined,
    component: () => import('./_nuxt/following-46db98a6.mjs').then(m => m.default || m)
  },
  {
    name: __nuxt_page_meta$s?.name ?? "server-@account-index",
    path: __nuxt_page_meta$s?.path ?? "",
    meta: __nuxt_page_meta$s || {},
    alias: __nuxt_page_meta$s?.alias || [],
    redirect: __nuxt_page_meta$s?.redirect || undefined,
    component: () => import('./_nuxt/index-7a4aae46.mjs').then(m => m.default || m)
  },
  {
    name: __nuxt_page_meta$r?.name ?? "server-@account-index-media",
    path: __nuxt_page_meta$r?.path ?? "media",
    meta: __nuxt_page_meta$r || {},
    alias: __nuxt_page_meta$r?.alias || [],
    redirect: __nuxt_page_meta$r?.redirect || undefined,
    component: () => import('./_nuxt/media-0cd52984.mjs').then(m => m.default || m)
  },
  {
    name: __nuxt_page_meta$q?.name ?? "server-@account-index-with_replies",
    path: __nuxt_page_meta$q?.path ?? "with_replies",
    meta: __nuxt_page_meta$q || {},
    alias: __nuxt_page_meta$q?.alias || [],
    redirect: __nuxt_page_meta$q?.redirect || undefined,
    component: () => import('./_nuxt/with_replies-ab020f08.mjs').then(m => m.default || m)
  }
],
    name: __nuxt_page_meta$p?.name ?? undefined,
    meta: __nuxt_page_meta$p || {},
    alias: __nuxt_page_meta$p?.alias || [],
    redirect: __nuxt_page_meta$p?.redirect || undefined,
    component: () => import('./_nuxt/index-ef156731.mjs').then(m => m.default || m)
  },
  {
    path: "/:server?/explore",
    children: [
  {
    name: "server-explore",
    path: "",
    meta: {},
    alias: [],
    redirect: undefined,
    component: () => import('./_nuxt/index-0f419eb4.mjs').then(m => m.default || m)
  },
  {
    name: "server-explore-links",
    path: "links",
    meta: {},
    alias: [],
    redirect: undefined,
    component: () => import('./_nuxt/links-609307df.mjs').then(m => m.default || m)
  },
  {
    name: "server-explore-tags",
    path: "tags",
    meta: {},
    alias: [],
    redirect: undefined,
    component: () => import('./_nuxt/tags-7d323f13.mjs').then(m => m.default || m)
  },
  {
    name: "server-explore-users",
    path: "users",
    meta: {},
    alias: [],
    redirect: undefined,
    component: () => import('./_nuxt/users-69c46f78.mjs').then(m => m.default || m)
  }
],
    name: undefined,
    meta: {},
    alias: [],
    redirect: undefined,
    component: () => import('./_nuxt/explore-f4bcf483.mjs').then(m => m.default || m)
  },
  {
    path: __nuxt_page_meta$m?.path ?? "/:server?/list/:list()",
    children: [
  {
    name: __nuxt_page_meta$o?.name ?? "server-list-list-index-accounts",
    path: __nuxt_page_meta$o?.path ?? "accounts",
    meta: __nuxt_page_meta$o || {},
    alias: __nuxt_page_meta$o?.alias || [],
    redirect: __nuxt_page_meta$o?.redirect || undefined,
    component: () => import('./_nuxt/accounts-f4fab1ef.mjs').then(m => m.default || m)
  },
  {
    name: __nuxt_page_meta$n?.name ?? "server-list-list-index",
    path: __nuxt_page_meta$n?.path ?? "",
    meta: __nuxt_page_meta$n || {},
    alias: __nuxt_page_meta$n?.alias || [],
    redirect: __nuxt_page_meta$n?.redirect || undefined,
    component: () => import('./_nuxt/index-378488b6.mjs').then(m => m.default || m)
  }
],
    name: __nuxt_page_meta$m?.name ?? undefined,
    meta: __nuxt_page_meta$m || {},
    alias: __nuxt_page_meta$m?.alias || [],
    redirect: __nuxt_page_meta$m?.redirect || undefined,
    component: () => import('./_nuxt/index-ca240c5f.mjs').then(m => m.default || m)
  },
  {
    name: __nuxt_page_meta$l?.name ?? "server-lists",
    path: __nuxt_page_meta$l?.path ?? "/:server?/lists",
    meta: __nuxt_page_meta$l || {},
    alias: __nuxt_page_meta$l?.alias || [],
    redirect: __nuxt_page_meta$l?.redirect || undefined,
    component: () => import('./_nuxt/lists-b3b3d78a.mjs').then(m => m.default || m)
  },
  {
    name: "server-public",
    path: "/:server?/public",
    meta: {},
    alias: [],
    redirect: undefined,
    component: () => import('./_nuxt/index-1644f83b.mjs').then(m => m.default || m)
  },
  {
    name: "server-public-local",
    path: "/:server?/public/local",
    meta: {},
    alias: [],
    redirect: undefined,
    component: () => import('./_nuxt/local-c737c725.mjs').then(m => m.default || m)
  },
  {
    name: "server-search",
    path: "/:server?/search",
    meta: {},
    alias: [],
    redirect: undefined,
    component: () => import('./_nuxt/search-886fbbb0.mjs').then(m => m.default || m)
  },
  {
    name: __nuxt_page_meta$k?.name ?? "server-status-status",
    path: __nuxt_page_meta$k?.path ?? "/:server?/status/:status()",
    meta: __nuxt_page_meta$k || {},
    alias: __nuxt_page_meta$k?.alias || [],
    redirect: __nuxt_page_meta$k?.redirect || undefined,
    component: () => import('./_nuxt/_status_-52efecea.mjs').then(m => m.default || m)
  },
  {
    name: __nuxt_page_meta$j?.name ?? "server-tags-tag",
    path: __nuxt_page_meta$j?.path ?? "/:server?/tags/:tag()",
    meta: __nuxt_page_meta$j || {},
    alias: __nuxt_page_meta$j?.alias || [],
    redirect: __nuxt_page_meta$j?.redirect || undefined,
    component: () => import('./_nuxt/_tag_-542012f2.mjs').then(m => m.default || m)
  },
  {
    name: __nuxt_page_meta$i?.name ?? "blocks",
    path: __nuxt_page_meta$i?.path ?? "/blocks",
    meta: __nuxt_page_meta$i || {},
    alias: __nuxt_page_meta$i?.alias || [],
    redirect: __nuxt_page_meta$i?.redirect || undefined,
    component: () => import('./_nuxt/blocks-80f50975.mjs').then(m => m.default || m)
  },
  {
    name: __nuxt_page_meta$h?.name ?? "bookmarks",
    path: __nuxt_page_meta$h?.path ?? "/bookmarks",
    meta: __nuxt_page_meta$h || {},
    alias: __nuxt_page_meta$h?.alias || [],
    redirect: __nuxt_page_meta$h?.redirect || undefined,
    component: () => import('./_nuxt/bookmarks-160a16aa.mjs').then(m => m.default || m)
  },
  {
    name: __nuxt_page_meta$g?.name ?? "compose",
    path: __nuxt_page_meta$g?.path ?? "/compose",
    meta: __nuxt_page_meta$g || {},
    alias: __nuxt_page_meta$g?.alias || [],
    redirect: __nuxt_page_meta$g?.redirect || undefined,
    component: () => import('./_nuxt/compose-affdf7be.mjs').then(m => m.default || m)
  },
  {
    name: __nuxt_page_meta$f?.name ?? "conversations",
    path: __nuxt_page_meta$f?.path ?? "/conversations",
    meta: __nuxt_page_meta$f || {},
    alias: __nuxt_page_meta$f?.alias || [],
    redirect: __nuxt_page_meta$f?.redirect || undefined,
    component: () => import('./_nuxt/conversations-41030739.mjs').then(m => m.default || m)
  },
  {
    name: __nuxt_page_meta$e?.name ?? "domain_blocks",
    path: __nuxt_page_meta$e?.path ?? "/domain_blocks",
    meta: __nuxt_page_meta$e || {},
    alias: __nuxt_page_meta$e?.alias || [],
    redirect: __nuxt_page_meta$e?.redirect || undefined,
    component: () => import('./_nuxt/domain_blocks-dfab0b22.mjs').then(m => m.default || m)
  },
  {
    name: __nuxt_page_meta$d?.name ?? "favourites",
    path: __nuxt_page_meta$d?.path ?? "/favourites",
    meta: __nuxt_page_meta$d || {},
    alias: __nuxt_page_meta$d?.alias || [],
    redirect: __nuxt_page_meta$d?.redirect || undefined,
    component: () => import('./_nuxt/favourites-befa641d.mjs').then(m => m.default || m)
  },
  {
    name: __nuxt_page_meta$c?.name ?? "home",
    path: __nuxt_page_meta$c?.path ?? "/home",
    meta: __nuxt_page_meta$c || {},
    alias: __nuxt_page_meta$c?.alias || [],
    redirect: __nuxt_page_meta$c?.redirect || undefined,
    component: () => import('./_nuxt/home-54b5eaf8.mjs').then(m => m.default || m)
  },
  {
    name: __nuxt_page_meta$b?.name ?? "index",
    path: __nuxt_page_meta$b?.path ?? "/",
    meta: __nuxt_page_meta$b || {},
    alias: __nuxt_page_meta$b?.alias || [],
    redirect: __nuxt_page_meta$b?.redirect || undefined,
    component: () => import('./_nuxt/index-82efde8d.mjs').then(m => m.default || m)
  },
  {
    name: "intent-post",
    path: "/intent/post",
    meta: {},
    alias: [],
    redirect: undefined,
    component: () => import('./_nuxt/post-dc1b67c8.mjs').then(m => m.default || m)
  },
  {
    name: __nuxt_page_meta$a?.name ?? "mutes",
    path: __nuxt_page_meta$a?.path ?? "/mutes",
    meta: __nuxt_page_meta$a || {},
    alias: __nuxt_page_meta$a?.alias || [],
    redirect: __nuxt_page_meta$a?.redirect || undefined,
    component: () => import('./_nuxt/mutes-f468880f.mjs').then(m => m.default || m)
  },
  {
    path: __nuxt_page_meta$9?.path ?? "/notifications",
    children: [
  {
    name: "notifications",
    path: "",
    meta: {},
    alias: [],
    redirect: undefined,
    component: () => import('./_nuxt/index-eb848db0.mjs').then(m => m.default || m)
  },
  {
    name: "notifications-mention",
    path: "mention",
    meta: {},
    alias: [],
    redirect: undefined,
    component: () => import('./_nuxt/mention-a6767260.mjs').then(m => m.default || m)
  }
],
    name: __nuxt_page_meta$9?.name ?? undefined,
    meta: __nuxt_page_meta$9 || {},
    alias: __nuxt_page_meta$9?.alias || [],
    redirect: __nuxt_page_meta$9?.redirect || undefined,
    component: () => import('./_nuxt/notifications-15da7a09.mjs').then(m => m.default || m)
  },
  {
    name: __nuxt_page_meta$8?.name ?? "pinned",
    path: __nuxt_page_meta$8?.path ?? "/pinned",
    meta: __nuxt_page_meta$8 || {},
    alias: __nuxt_page_meta$8?.alias || [],
    redirect: __nuxt_page_meta$8?.redirect || undefined,
    component: () => import('./_nuxt/pinned-d4cda8cc.mjs').then(m => m.default || m)
  },
  {
    path: __nuxt_page_meta$1?.path ?? "/settings",
    children: [
  {
    name: "settings-about",
    path: "about",
    meta: {},
    alias: [],
    redirect: undefined,
    component: () => import('./_nuxt/index-ab14bf89.mjs').then(m => m.default || m)
  },
  {
    name: "settings",
    path: "",
    meta: {},
    alias: [],
    redirect: undefined,
    component: () => import('./_nuxt/index-1a6f39c6.mjs').then(m => m.default || m)
  },
  {
    name: "settings-interface",
    path: "interface",
    meta: {},
    alias: [],
    redirect: undefined,
    component: () => import('./_nuxt/index-bfef37fb.mjs').then(m => m.default || m)
  },
  {
    name: "settings-language",
    path: "language",
    meta: {},
    alias: [],
    redirect: undefined,
    component: () => import('./_nuxt/index-53865f5d.mjs').then(m => m.default || m)
  },
  {
    name: __nuxt_page_meta$7?.name ?? "settings-notifications",
    path: __nuxt_page_meta$7?.path ?? "notifications",
    meta: __nuxt_page_meta$7 || {},
    alias: __nuxt_page_meta$7?.alias || [],
    redirect: __nuxt_page_meta$7?.redirect || undefined,
    component: () => import('./_nuxt/index-3944a268.mjs').then(m => m.default || m)
  },
  {
    name: __nuxt_page_meta$6?.name ?? "settings-notifications-notifications",
    path: __nuxt_page_meta$6?.path ?? "notifications/notifications",
    meta: __nuxt_page_meta$6 || {},
    alias: __nuxt_page_meta$6?.alias || [],
    redirect: __nuxt_page_meta$6?.redirect || undefined,
    component: () => import('./_nuxt/notifications-c1227db5.mjs').then(m => m.default || m)
  },
  {
    name: __nuxt_page_meta$5?.name ?? "settings-notifications-push-notifications",
    path: __nuxt_page_meta$5?.path ?? "notifications/push-notifications",
    meta: __nuxt_page_meta$5 || {},
    alias: __nuxt_page_meta$5?.alias || [],
    redirect: __nuxt_page_meta$5?.redirect || undefined,
    component: () => import('./_nuxt/push-notifications-d8efabc7.mjs').then(m => m.default || m)
  },
  {
    name: "settings-preferences",
    path: "preferences",
    meta: {},
    alias: [],
    redirect: undefined,
    component: () => import('./_nuxt/index-13424b59.mjs').then(m => m.default || m)
  },
  {
    name: __nuxt_page_meta$4?.name ?? "settings-profile-appearance",
    path: __nuxt_page_meta$4?.path ?? "profile/appearance",
    meta: __nuxt_page_meta$4 || {},
    alias: __nuxt_page_meta$4?.alias || [],
    redirect: __nuxt_page_meta$4?.redirect || undefined,
    component: () => import('./_nuxt/appearance-6116be9c.mjs').then(m => m.default || m)
  },
  {
    name: __nuxt_page_meta$3?.name ?? "settings-profile-featured-tags",
    path: __nuxt_page_meta$3?.path ?? "profile/featured-tags",
    meta: __nuxt_page_meta$3 || {},
    alias: __nuxt_page_meta$3?.alias || [],
    redirect: __nuxt_page_meta$3?.redirect || undefined,
    component: () => import('./_nuxt/featured-tags-ab3814d8.mjs').then(m => m.default || m)
  },
  {
    name: __nuxt_page_meta$2?.name ?? "settings-profile",
    path: __nuxt_page_meta$2?.path ?? "profile",
    meta: __nuxt_page_meta$2 || {},
    alias: __nuxt_page_meta$2?.alias || [],
    redirect: __nuxt_page_meta$2?.redirect || undefined,
    component: () => import('./_nuxt/index-08c7eaa7.mjs').then(m => m.default || m)
  },
  {
    name: "settings-users",
    path: "users",
    meta: {},
    alias: [],
    redirect: undefined,
    component: () => import('./_nuxt/index-122017fc.mjs').then(m => m.default || m)
  }
],
    name: __nuxt_page_meta$1?.name ?? undefined,
    meta: __nuxt_page_meta$1 || {},
    alias: __nuxt_page_meta$1?.alias || [],
    redirect: __nuxt_page_meta$1?.redirect || undefined,
    component: () => import('./_nuxt/settings-7e68d4ad.mjs').then(m => m.default || m)
  },
  {
    name: __nuxt_page_meta?.name ?? "share-target",
    path: __nuxt_page_meta?.path ?? "/share-target",
    meta: __nuxt_page_meta || {},
    alias: __nuxt_page_meta?.alias || [],
    redirect: __nuxt_page_meta?.redirect || undefined,
    component: () => import('./_nuxt/share-target-c2c337ce.mjs').then(m => m.default || m)
  }
];

const routerOptions0 = {
  scrollBehavior(to, from, savedPosition) {
    const nuxtApp = useNuxtApp();
    let position = savedPosition || void 0;
    if (!position && from && to && to.meta.scrollToTop !== false && _isDifferentRoute(from, to)) {
      position = { left: 0, top: 0 };
    }
    if (to.path === from.path) {
      if (from.hash && !to.hash) {
        return { left: 0, top: 0 };
      }
      if (to.hash) {
        return { el: to.hash, top: _getHashElementScrollMarginTop(to.hash) };
      }
    }
    const hasTransition = (route) => !!(route.meta.pageTransition ?? appPageTransition);
    const hookToWait = hasTransition(from) && hasTransition(to) ? "page:transition:finish" : "page:finish";
    return new Promise((resolve) => {
      nuxtApp.hooks.hookOnce(hookToWait, async () => {
        await nextTick();
        if (to.hash) {
          position = { el: to.hash, top: _getHashElementScrollMarginTop(to.hash) };
        }
        resolve(position);
      });
    });
  }
};
function _getHashElementScrollMarginTop(selector) {
  try {
    const elem = document.querySelector(selector);
    if (elem) {
      return parseFloat(getComputedStyle(elem).scrollMarginTop);
    }
  } catch {
  }
  return 0;
}
function _isDifferentRoute(from, to) {
  const samePageComponent = to.matched.every((comp, index) => comp.components?.default === from.matched[index]?.components?.default);
  if (!samePageComponent) {
    return true;
  }
  if (samePageComponent && JSON.stringify(from.params) !== JSON.stringify(to.params)) {
    return true;
  }
  return false;
}

const configRouterOptions = {};
const routerOptions = {
...configRouterOptions,
...routerOptions0,
};

/* _processed_nuxt_unctx_transform */
const validate = /* #__PURE__ */ defineNuxtRouteMiddleware(async (to) => {let __temp, __restore;
  if (!to.meta?.validate) {
    return;
  }
  useRouter();
  const result = (([__temp,__restore]=executeAsync(()=>Promise.resolve(to.meta.validate(to)))),__temp=await __temp,__restore(),__temp);
  if (result === true) {
    return;
  }
  {
    return result;
  }
});

/* _processed_nuxt_unctx_transform */
const _1_45permalink_45global = /* #__PURE__ */ defineNuxtRouteMiddleware(async (to, from) => {  return;
});

const _2_45single_45instance_45global = /* #__PURE__ */ defineNuxtRouteMiddleware(async (to) => {
  return;
});

const globalMiddleware = [
  validate,
  _1_45permalink_45global,
  _2_45single_45instance_45global
];
const namedMiddleware = {
  auth: () => import('./_nuxt/auth-75948450.mjs')
};

/* _processed_nuxt_unctx_transform */
const plugin$1 = /* #__PURE__ */ defineNuxtPlugin({
  name: "nuxt:router",
  enforce: "pre",
  async setup(nuxtApp) {let __temp, __restore;
    let routerBase =  useRuntimeConfig().app.baseURL;
    if (routerOptions.hashMode && !routerBase.includes("#")) {
      routerBase += "#";
    }
    const history = routerOptions.history?.(routerBase) ?? (createMemoryHistory(routerBase));
    const routes = routerOptions.routes?.(_routes) ?? _routes;
    let startPosition;
    const initialURL = nuxtApp.ssrContext.url ;
    const router = createRouter({
      ...routerOptions,
      scrollBehavior: (to, from, savedPosition) => {
        if (from === START_LOCATION) {
          startPosition = savedPosition;
          return;
        }
        router.options.scrollBehavior = routerOptions.scrollBehavior;
        return routerOptions.scrollBehavior?.(to, START_LOCATION, startPosition || savedPosition);
      },
      history,
      routes
    });
    nuxtApp.vueApp.use(router);
    const previousRoute = shallowRef(router.currentRoute.value);
    router.afterEach((_to, from) => {
      previousRoute.value = from;
    });
    Object.defineProperty(nuxtApp.vueApp.config.globalProperties, "previousRoute", {
      get: () => previousRoute.value
    });
    const _route = shallowRef(router.resolve(initialURL));
    const syncCurrentRoute = () => {
      _route.value = router.currentRoute.value;
    };
    nuxtApp.hook("page:finish", syncCurrentRoute);
    router.afterEach((to, from) => {
      if (to.matched[0]?.components?.default === from.matched[0]?.components?.default) {
        syncCurrentRoute();
      }
    });
    const route = {};
    for (const key in _route.value) {
      Object.defineProperty(route, key, {
        get: () => _route.value[key]
      });
    }
    nuxtApp._route = shallowReactive(route);
    nuxtApp._middleware = nuxtApp._middleware || {
      global: [],
      named: {}
    };
    useError();
    try {
      if (true) {
        ;(([__temp,__restore]=executeAsync(()=>router.push(initialURL))),await __temp,__restore());;
      }
      ;(([__temp,__restore]=executeAsync(()=>router.isReady())),await __temp,__restore());;
    } catch (error2) {
(([__temp,__restore]=executeAsync(()=>nuxtApp.runWithContext(() => showError(error2)))),await __temp,__restore());    }
    const initialLayout = useState("_layout");
    router.beforeEach(async (to, from) => {
      to.meta = reactive(to.meta);
      if (nuxtApp.isHydrating && initialLayout.value && !isReadonly(to.meta.layout)) {
        to.meta.layout = initialLayout.value;
      }
      nuxtApp._processingMiddleware = true;
      if (!nuxtApp.ssrContext?.islandContext) {
        const middlewareEntries = /* @__PURE__ */ new Set([...globalMiddleware, ...nuxtApp._middleware.global]);
        for (const component of to.matched) {
          const componentMiddleware = component.meta.middleware;
          if (!componentMiddleware) {
            continue;
          }
          if (Array.isArray(componentMiddleware)) {
            for (const entry of componentMiddleware) {
              middlewareEntries.add(entry);
            }
          } else {
            middlewareEntries.add(componentMiddleware);
          }
        }
        for (const entry of middlewareEntries) {
          const middleware = typeof entry === "string" ? nuxtApp._middleware.named[entry] || await namedMiddleware[entry]?.().then((r) => r.default || r) : entry;
          if (!middleware) {
            throw new Error(`Unknown route middleware: '${entry}'.`);
          }
          const result = await nuxtApp.runWithContext(() => middleware(to, from));
          {
            if (result === false || result instanceof Error) {
              const error2 = result || createError$1({
                statusCode: 404,
                statusMessage: `Page Not Found: ${initialURL}`
              });
              await nuxtApp.runWithContext(() => showError(error2));
              return false;
            }
          }
          if (result || result === false) {
            return result;
          }
        }
      }
    });
    router.onError(() => {
      delete nuxtApp._processingMiddleware;
    });
    router.afterEach(async (to, _from, failure) => {
      delete nuxtApp._processingMiddleware;
      if (failure?.type === 4) {
        return;
      }
      if (to.matched.length === 0 && (!nuxtApp.ssrContext?.islandContext)) {
        await nuxtApp.runWithContext(() => showError(createError$1({
          statusCode: 404,
          fatal: false,
          statusMessage: `Page not found: ${to.fullPath}`
        })));
      } else if (to.redirectedFrom && to.fullPath !== initialURL) {
        await nuxtApp.runWithContext(() => navigateTo(to.fullPath || "/"));
      }
    });
    nuxtApp.hooks.hookOnce("app:created", async () => {
      try {
        await router.replace({
          ...router.resolve(initialURL),
          name: void 0,
          // #4920, #4982
          force: true
        });
        router.options.scrollBehavior = routerOptions.scrollBehavior;
      } catch (error2) {
        await nuxtApp.runWithContext(() => showError(error2));
      }
    });
    return { provide: { router } };
  }
});

/*!
  * pinia v2.1.4
  * (c) 2023 Eduardo San Martin Morote
  * @license MIT
  */

/**
 * setActivePinia must be called to handle SSR at the top of functions like
 * `fetch`, `setup`, `serverPrefetch` and others
 */
let activePinia;
/**
 * Sets or unsets the active pinia. Used in SSR and internally when calling
 * actions and getters
 *
 * @param pinia - Pinia instance
 */
// @ts-expect-error: cannot constrain the type of the return
const setActivePinia = (pinia) => (activePinia = pinia);
const piniaSymbol = (/* istanbul ignore next */ Symbol());

function isPlainObject$1(
// eslint-disable-next-line @typescript-eslint/no-explicit-any
o) {
    return (o &&
        typeof o === 'object' &&
        Object.prototype.toString.call(o) === '[object Object]' &&
        typeof o.toJSON !== 'function');
}
// type DeepReadonly<T> = { readonly [P in keyof T]: DeepReadonly<T[P]> }
// TODO: can we change these to numbers?
/**
 * Possible types for SubscriptionCallback
 */
var MutationType;
(function (MutationType) {
    /**
     * Direct mutation of the state:
     *
     * - `store.name = 'new name'`
     * - `store.$state.name = 'new name'`
     * - `store.list.push('new item')`
     */
    MutationType["direct"] = "direct";
    /**
     * Mutated the state with `$patch` and an object
     *
     * - `store.$patch({ name: 'newName' })`
     */
    MutationType["patchObject"] = "patch object";
    /**
     * Mutated the state with `$patch` and a function
     *
     * - `store.$patch(state => state.name = 'newName')`
     */
    MutationType["patchFunction"] = "patch function";
    // maybe reset? for $state = {} and $reset
})(MutationType || (MutationType = {}));

/**
 * Creates a Pinia instance to be used by the application
 */
function createPinia() {
    const scope = effectScope(true);
    // NOTE: here we could check the window object for a state and directly set it
    // if there is anything like it with Vue 3 SSR
    const state = scope.run(() => ref({}));
    let _p = [];
    // plugins added before calling app.use(pinia)
    let toBeInstalled = [];
    const pinia = markRaw({
        install(app) {
            // this allows calling useStore() outside of a component setup after
            // installing pinia's plugin
            setActivePinia(pinia);
            {
                pinia._a = app;
                app.provide(piniaSymbol, pinia);
                app.config.globalProperties.$pinia = pinia;
                toBeInstalled.forEach((plugin) => _p.push(plugin));
                toBeInstalled = [];
            }
        },
        use(plugin) {
            if (!this._a && !isVue2) {
                toBeInstalled.push(plugin);
            }
            else {
                _p.push(plugin);
            }
            return this;
        },
        _p,
        // it's actually undefined here
        // @ts-expect-error
        _a: null,
        _e: scope,
        _s: new Map(),
        state,
    });
    return pinia;
}

const noop = () => { };
function addSubscription(subscriptions, callback, detached, onCleanup = noop) {
    subscriptions.push(callback);
    const removeSubscription = () => {
        const idx = subscriptions.indexOf(callback);
        if (idx > -1) {
            subscriptions.splice(idx, 1);
            onCleanup();
        }
    };
    if (!detached && getCurrentScope()) {
        onScopeDispose(removeSubscription);
    }
    return removeSubscription;
}
function triggerSubscriptions(subscriptions, ...args) {
    subscriptions.slice().forEach((callback) => {
        callback(...args);
    });
}

const fallbackRunWithContext = (fn) => fn();
function mergeReactiveObjects(target, patchToApply) {
    // Handle Map instances
    if (target instanceof Map && patchToApply instanceof Map) {
        patchToApply.forEach((value, key) => target.set(key, value));
    }
    // Handle Set instances
    if (target instanceof Set && patchToApply instanceof Set) {
        patchToApply.forEach(target.add, target);
    }
    // no need to go through symbols because they cannot be serialized anyway
    for (const key in patchToApply) {
        if (!patchToApply.hasOwnProperty(key))
            continue;
        const subPatch = patchToApply[key];
        const targetValue = target[key];
        if (isPlainObject$1(targetValue) &&
            isPlainObject$1(subPatch) &&
            target.hasOwnProperty(key) &&
            !isRef(subPatch) &&
            !isReactive(subPatch)) {
            // NOTE: here I wanted to warn about inconsistent types but it's not possible because in setup stores one might
            // start the value of a property as a certain type e.g. a Map, and then for some reason, during SSR, change that
            // to `undefined`. When trying to hydrate, we want to override the Map with `undefined`.
            target[key] = mergeReactiveObjects(targetValue, subPatch);
        }
        else {
            // @ts-expect-error: subPatch is a valid value
            target[key] = subPatch;
        }
    }
    return target;
}
const skipHydrateSymbol = /* istanbul ignore next */ Symbol();
/**
 * Returns whether a value should be hydrated
 *
 * @param obj - target variable
 * @returns true if `obj` should be hydrated
 */
function shouldHydrate(obj) {
    return !isPlainObject$1(obj) || !obj.hasOwnProperty(skipHydrateSymbol);
}
const { assign: assign$2 } = Object;
function isComputed(o) {
    return !!(isRef(o) && o.effect);
}
function createOptionsStore(id, options, pinia, hot) {
    const { state, actions, getters } = options;
    const initialState = pinia.state.value[id];
    let store;
    function setup() {
        if (!initialState && (!("production" !== 'production') )) {
            /* istanbul ignore if */
            {
                pinia.state.value[id] = state ? state() : {};
            }
        }
        // avoid creating a state in pinia.state.value
        const localState = toRefs(pinia.state.value[id]);
        return assign$2(localState, actions, Object.keys(getters || {}).reduce((computedGetters, name) => {
            computedGetters[name] = markRaw(computed(() => {
                setActivePinia(pinia);
                // it was created just before
                const store = pinia._s.get(id);
                // @ts-expect-error
                // return getters![name].call(context, context)
                // TODO: avoid reading the getter while assigning with a global variable
                return getters[name].call(store, store);
            }));
            return computedGetters;
        }, {}));
    }
    store = createSetupStore(id, setup, options, pinia, hot, true);
    return store;
}
function createSetupStore($id, setup, options = {}, pinia, hot, isOptionsStore) {
    let scope;
    const optionsForPlugin = assign$2({ actions: {} }, options);
    // watcher options for $subscribe
    const $subscribeOptions = {
        deep: true,
        // flush: 'post',
    };
    // internal state
    let isListening; // set to true at the end
    let isSyncListening; // set to true at the end
    let subscriptions = [];
    let actionSubscriptions = [];
    let debuggerEvents;
    const initialState = pinia.state.value[$id];
    // avoid setting the state for option stores if it is set
    // by the setup
    if (!isOptionsStore && !initialState && (!("production" !== 'production') )) {
        /* istanbul ignore if */
        {
            pinia.state.value[$id] = {};
        }
    }
    ref({});
    // avoid triggering too many listeners
    // https://github.com/vuejs/pinia/issues/1129
    let activeListener;
    function $patch(partialStateOrMutator) {
        let subscriptionMutation;
        isListening = isSyncListening = false;
        if (typeof partialStateOrMutator === 'function') {
            partialStateOrMutator(pinia.state.value[$id]);
            subscriptionMutation = {
                type: MutationType.patchFunction,
                storeId: $id,
                events: debuggerEvents,
            };
        }
        else {
            mergeReactiveObjects(pinia.state.value[$id], partialStateOrMutator);
            subscriptionMutation = {
                type: MutationType.patchObject,
                payload: partialStateOrMutator,
                storeId: $id,
                events: debuggerEvents,
            };
        }
        const myListenerId = (activeListener = Symbol());
        nextTick().then(() => {
            if (activeListener === myListenerId) {
                isListening = true;
            }
        });
        isSyncListening = true;
        // because we paused the watcher, we need to manually call the subscriptions
        triggerSubscriptions(subscriptions, subscriptionMutation, pinia.state.value[$id]);
    }
    const $reset = isOptionsStore
        ? function $reset() {
            const { state } = options;
            const newState = state ? state() : {};
            // we use a patch to group all changes into one single subscription
            this.$patch(($state) => {
                assign$2($state, newState);
            });
        }
        : /* istanbul ignore next */
            noop;
    function $dispose() {
        scope.stop();
        subscriptions = [];
        actionSubscriptions = [];
        pinia._s.delete($id);
    }
    /**
     * Wraps an action to handle subscriptions.
     *
     * @param name - name of the action
     * @param action - action to wrap
     * @returns a wrapped action to handle subscriptions
     */
    function wrapAction(name, action) {
        return function () {
            setActivePinia(pinia);
            const args = Array.from(arguments);
            const afterCallbackList = [];
            const onErrorCallbackList = [];
            function after(callback) {
                afterCallbackList.push(callback);
            }
            function onError(callback) {
                onErrorCallbackList.push(callback);
            }
            // @ts-expect-error
            triggerSubscriptions(actionSubscriptions, {
                args,
                name,
                store,
                after,
                onError,
            });
            let ret;
            try {
                ret = action.apply(this && this.$id === $id ? this : store, args);
                // handle sync errors
            }
            catch (error) {
                triggerSubscriptions(onErrorCallbackList, error);
                throw error;
            }
            if (ret instanceof Promise) {
                return ret
                    .then((value) => {
                    triggerSubscriptions(afterCallbackList, value);
                    return value;
                })
                    .catch((error) => {
                    triggerSubscriptions(onErrorCallbackList, error);
                    return Promise.reject(error);
                });
            }
            // trigger after callbacks
            triggerSubscriptions(afterCallbackList, ret);
            return ret;
        };
    }
    const partialStore = {
        _p: pinia,
        // _s: scope,
        $id,
        $onAction: addSubscription.bind(null, actionSubscriptions),
        $patch,
        $reset,
        $subscribe(callback, options = {}) {
            const removeSubscription = addSubscription(subscriptions, callback, options.detached, () => stopWatcher());
            const stopWatcher = scope.run(() => watch(() => pinia.state.value[$id], (state) => {
                if (options.flush === 'sync' ? isSyncListening : isListening) {
                    callback({
                        storeId: $id,
                        type: MutationType.direct,
                        events: debuggerEvents,
                    }, state);
                }
            }, assign$2({}, $subscribeOptions, options)));
            return removeSubscription;
        },
        $dispose,
    };
    const store = reactive(partialStore);
    // store the partial store now so the setup of stores can instantiate each other before they are finished without
    // creating infinite loops.
    pinia._s.set($id, store);
    const runWithContext = (pinia._a && pinia._a.runWithContext) || fallbackRunWithContext;
    // TODO: idea create skipSerialize that marks properties as non serializable and they are skipped
    const setupStore = pinia._e.run(() => {
        scope = effectScope();
        return runWithContext(() => scope.run(setup));
    });
    // overwrite existing actions to support $onAction
    for (const key in setupStore) {
        const prop = setupStore[key];
        if ((isRef(prop) && !isComputed(prop)) || isReactive(prop)) {
            // mark it as a piece of state to be serialized
            if (!isOptionsStore) {
                // in setup stores we must hydrate the state and sync pinia state tree with the refs the user just created
                if (initialState && shouldHydrate(prop)) {
                    if (isRef(prop)) {
                        prop.value = initialState[key];
                    }
                    else {
                        // probably a reactive object, lets recursively assign
                        // @ts-expect-error: prop is unknown
                        mergeReactiveObjects(prop, initialState[key]);
                    }
                }
                // transfer the ref to the pinia state to keep everything in sync
                /* istanbul ignore if */
                {
                    pinia.state.value[$id][key] = prop;
                }
            }
            // action
        }
        else if (typeof prop === 'function') {
            // @ts-expect-error: we are overriding the function we avoid wrapping if
            const actionValue = wrapAction(key, prop);
            // this a hot module replacement store because the hotUpdate method needs
            // to do it with the right context
            /* istanbul ignore if */
            {
                // @ts-expect-error
                setupStore[key] = actionValue;
            }
            // list actions so they can be used in plugins
            // @ts-expect-error
            optionsForPlugin.actions[key] = prop;
        }
        else ;
    }
    // add the state, getters, and action properties
    /* istanbul ignore if */
    {
        assign$2(store, setupStore);
        // allows retrieving reactive objects with `storeToRefs()`. Must be called after assigning to the reactive object.
        // Make `storeToRefs()` work with `reactive()` #799
        assign$2(toRaw(store), setupStore);
    }
    // use this instead of a computed with setter to be able to create it anywhere
    // without linking the computed lifespan to wherever the store is first
    // created.
    Object.defineProperty(store, '$state', {
        get: () => (pinia.state.value[$id]),
        set: (state) => {
            $patch(($state) => {
                assign$2($state, state);
            });
        },
    });
    // apply all plugins
    pinia._p.forEach((extender) => {
        /* istanbul ignore else */
        {
            assign$2(store, scope.run(() => extender({
                store,
                app: pinia._a,
                pinia,
                options: optionsForPlugin,
            })));
        }
    });
    // only apply hydrate to option stores with an initial state in pinia
    if (initialState &&
        isOptionsStore &&
        options.hydrate) {
        options.hydrate(store.$state, initialState);
    }
    isListening = true;
    isSyncListening = true;
    return store;
}
function defineStore(
// TODO: add proper types from above
idOrOptions, setup, setupOptions) {
    let id;
    let options;
    const isSetupStore = typeof setup === 'function';
    if (typeof idOrOptions === 'string') {
        id = idOrOptions;
        // the option store setup will contain the actual options in this case
        options = isSetupStore ? setupOptions : setup;
    }
    else {
        options = idOrOptions;
        id = idOrOptions.id;
    }
    function useStore(pinia, hot) {
        const hasContext = hasInjectionContext();
        pinia =
            // in test mode, ignore the argument provided as we can always retrieve a
            // pinia instance with getActivePinia()
            (pinia) ||
                (hasContext ? inject(piniaSymbol, null) : null);
        if (pinia)
            setActivePinia(pinia);
        pinia = activePinia;
        if (!pinia._s.has(id)) {
            // creating the store registers it in `pinia._s`
            if (isSetupStore) {
                createSetupStore(id, setup, options, pinia);
            }
            else {
                createOptionsStore(id, options, pinia);
            }
        }
        const store = pinia._s.get(id);
        // StoreGeneric cannot be casted towards Store
        return store;
    }
    useStore.$id = id;
    return useStore;
}

const plugin = /* #__PURE__ */ defineNuxtPlugin((nuxtApp) => {
  const pinia = createPinia();
  nuxtApp.vueApp.use(pinia);
  setActivePinia(pinia);
  {
    nuxtApp.payload.pinia = pinia.state.value;
  }
  return {
    provide: {
      pinia
    }
  };
});

const reducers = {
  NuxtError: (data) => isNuxtError(data) && data.toJSON(),
  EmptyShallowRef: (data) => isRef(data) && isShallow(data) && !data.value && (typeof data.value === "bigint" ? "0n" : JSON.stringify(data.value) || "_"),
  EmptyRef: (data) => isRef(data) && !data.value && (typeof data.value === "bigint" ? "0n" : JSON.stringify(data.value) || "_"),
  ShallowRef: (data) => isRef(data) && isShallow(data) && data.value,
  ShallowReactive: (data) => isReactive(data) && isShallow(data) && toRaw(data),
  Ref: (data) => isRef(data) && data.value,
  Reactive: (data) => isReactive(data) && toRaw(data)
};
const revive_payload_server_6KqwFkIr9i = /* #__PURE__ */ defineNuxtPlugin({
  name: "nuxt:revive-payload:server",
  setup() {
    for (const reducer in reducers) {
      definePayloadReducer(reducer, reducers[reducer]);
    }
  }
});

const components_plugin_KR1HBZs4kY = /* #__PURE__ */ defineNuxtPlugin({
  name: 'nuxt:global-components',
});

const unhead_5PVS46oVqH = /* #__PURE__ */ defineNuxtPlugin({
  name: "nuxt:head",
  setup(nuxtApp) {
    const createHead = createServerHead ;
    const head = createHead();
    head.push(appHead);
    nuxtApp.vueApp.use(head);
    {
      nuxtApp.ssrContext.renderMeta = async () => {
        const meta = await renderSSRHead(head);
        return {
          ...meta,
          bodyScriptsPrepend: meta.bodyTagsOpen,
          // resolves naming difference with NuxtMeta and Unhead
          bodyScripts: meta.bodyTags
        };
      };
    }
  }
});

const preference = "system";

const plugin_server_t6b1GsQQbb = /* #__PURE__ */ defineNuxtPlugin((nuxtApp) => {
  const colorMode = useState("color-mode", () => reactive({
    preference,
    value: preference,
    unknown: true,
    forced: false
  })).value;
  const htmlAttrs = {};
  {
    useHead({ htmlAttrs });
  }
  useRouter().afterEach((to) => {
    const forcedColorMode = to.meta.colorMode;
    if (forcedColorMode && forcedColorMode !== "system") {
      colorMode.value = htmlAttrs["data-color-mode-forced"] = forcedColorMode;
      colorMode.forced = true;
    } else if (forcedColorMode === "system") {
      console.warn("You cannot force the colorMode to system at the page level.");
    }
  });
  nuxtApp.provide("colorMode", colorMode);
});

const composition_LOKPa0E6OA = /* #__PURE__ */ defineNuxtPlugin(() => {
});

/*!
  * shared v9.3.0-beta.16
  * (c) 2023 kazuya kawaguchi
  * Released under the MIT License.
  */
/**
 * Original Utilities
 * written by kazuya kawaguchi
 */
const inBrowser = "undefined" !== 'undefined';
const makeSymbol$1 = (name, shareable = false) => !shareable ? Symbol(name) : Symbol.for(name);
const isNumber = (val) => typeof val === 'number' && isFinite(val);
const isRegExp = (val) => toTypeString(val) === '[object RegExp]';
const isEmptyObject = (val) => isPlainObject(val) && Object.keys(val).length === 0;
const assign$1 = Object.assign;
let _globalThis;
const getGlobalThis = () => {
    // prettier-ignore
    return (_globalThis ||
        (_globalThis =
            typeof globalThis !== 'undefined'
                ? globalThis
                : typeof self !== 'undefined'
                    ? self
                    : typeof global !== 'undefined'
                            ? global
                            : {}));
};
const hasOwnProperty = Object.prototype.hasOwnProperty;
function hasOwn(obj, key) {
    return hasOwnProperty.call(obj, key);
}
/* eslint-enable */
/**
 * Useful Utilities By Evan you
 * Modified by kazuya kawaguchi
 * MIT License
 * https://github.com/vuejs/vue-next/blob/master/packages/shared/src/index.ts
 * https://github.com/vuejs/vue-next/blob/master/packages/shared/src/codeframe.ts
 */
const isArray$1 = Array.isArray;
const isFunction$1 = (val) => typeof val === 'function';
const isString$1 = (val) => typeof val === 'string';
const isBoolean = (val) => typeof val === 'boolean';
// eslint-disable-next-line @typescript-eslint/no-explicit-any
const isObject$1 = (val) => val !== null && typeof val === 'object';
const objectToString = Object.prototype.toString;
const toTypeString = (value) => objectToString.call(value);
const isPlainObject = (val) => toTypeString(val) === '[object Object]';

/*!
  * vue-i18n v9.3.0-beta.16
  * (c) 2023 kazuya kawaguchi
  * Released under the MIT License.
  */

/**
 * Vue I18n Version
 *
 * @remarks
 * Semver format. Same format as the package.json `version` field.
 *
 * @VueI18nGeneral
 */
const VERSION = '9.3.0-beta.16';
/**
 * This is only called in esm-bundler builds.
 * istanbul-ignore-next
 */
function initFeatureFlags() {
    if (typeof __INTLIFY_PROD_DEVTOOLS__ !== 'boolean') {
        getGlobalThis().__INTLIFY_PROD_DEVTOOLS__ = false;
    }
}

CoreWarnCodes.__EXTEND_POINT__;

let code = CompileErrorCodes.__EXTEND_POINT__;
const inc = () => ++code;
const I18nErrorCodes = {
    // composer module errors
    UNEXPECTED_RETURN_TYPE: code,
    // legacy module errors
    INVALID_ARGUMENT: inc(),
    // i18n module errors
    MUST_BE_CALL_SETUP_TOP: inc(),
    NOT_INSLALLED: inc(),
    NOT_AVAILABLE_IN_LEGACY_MODE: inc(),
    // directive module errors
    REQUIRED_VALUE: inc(),
    INVALID_VALUE: inc(),
    // vue-devtools errors
    CANNOT_SETUP_VUE_DEVTOOLS_PLUGIN: inc(),
    NOT_INSLALLED_WITH_PROVIDE: inc(),
    // unexpected error
    UNEXPECTED_ERROR: inc(),
    // not compatible legacy vue-i18n constructor
    NOT_COMPATIBLE_LEGACY_VUE_I18N: inc(),
    // bridge support vue 2.x only
    BRIDGE_SUPPORT_VUE_2_ONLY: inc(),
    // need to define `i18n` option in `allowComposition: true` and `useScope: 'local' at `useI18n``
    MUST_DEFINE_I18N_OPTION_IN_ALLOW_COMPOSITION: inc(),
    // Not available Compostion API in Legacy API mode. Please make sure that the legacy API mode is working properly
    NOT_AVAILABLE_COMPOSITION_IN_LEGACY: inc(),
    // for enhancement
    __EXTEND_POINT__: inc() // 29
};
function createI18nError(code, ...args) {
    return createCompileError(code, null, undefined);
}

const TranslateVNodeSymbol = 
/* #__PURE__*/ makeSymbol$1('__translateVNode');
const DatetimePartsSymbol = /* #__PURE__*/ makeSymbol$1('__datetimeParts');
const NumberPartsSymbol = /* #__PURE__*/ makeSymbol$1('__numberParts');
const SetPluralRulesSymbol = makeSymbol$1('__setPluralRules');
const InejctWithOption = /* #__PURE__*/ makeSymbol$1('__injectWithOption');

/* eslint-disable @typescript-eslint/no-explicit-any */
/**
 * Transform flat json in obj to normal json in obj
 */
function handleFlatJson(obj) {
    // check obj
    if (!isObject$1(obj)) {
        return obj;
    }
    for (const key in obj) {
        // check key
        if (!hasOwn(obj, key)) {
            continue;
        }
        // handle for normal json
        if (!key.includes('.')) {
            // recursive process value if value is also a object
            if (isObject$1(obj[key])) {
                handleFlatJson(obj[key]);
            }
        }
        // handle for flat json, transform to normal json
        else {
            // go to the last object
            const subKeys = key.split('.');
            const lastIndex = subKeys.length - 1;
            let currentObj = obj;
            for (let i = 0; i < lastIndex; i++) {
                if (!(subKeys[i] in currentObj)) {
                    currentObj[subKeys[i]] = {};
                }
                currentObj = currentObj[subKeys[i]];
            }
            // update last object value, delete old property
            currentObj[subKeys[lastIndex]] = obj[key];
            delete obj[key];
            // recursive process value if value is also a object
            if (isObject$1(currentObj[subKeys[lastIndex]])) {
                handleFlatJson(currentObj[subKeys[lastIndex]]);
            }
        }
    }
    return obj;
}
function getLocaleMessages(locale, options) {
    const { messages, __i18n, messageResolver, flatJson } = options;
    // prettier-ignore
    const ret = (isPlainObject(messages)
        ? messages
        : isArray$1(__i18n)
            ? {}
            : { [locale]: {} });
    // merge locale messages of i18n custom block
    if (isArray$1(__i18n)) {
        __i18n.forEach(custom => {
            if ('locale' in custom && 'resource' in custom) {
                const { locale, resource } = custom;
                if (locale) {
                    ret[locale] = ret[locale] || {};
                    deepCopy$1(resource, ret[locale]);
                }
                else {
                    deepCopy$1(resource, ret);
                }
            }
            else {
                isString$1(custom) && deepCopy$1(JSON.parse(custom), ret);
            }
        });
    }
    // handle messages for flat json
    if (messageResolver == null && flatJson) {
        for (const key in ret) {
            if (hasOwn(ret, key)) {
                handleFlatJson(ret[key]);
            }
        }
    }
    return ret;
}
const isNotObjectOrIsArray = (val) => !isObject$1(val) || isArray$1(val);
// eslint-disable-next-line @typescript-eslint/no-explicit-any, @typescript-eslint/explicit-module-boundary-types
function deepCopy$1(src, des) {
    // src and des should both be objects, and non of then can be a array
    if (isNotObjectOrIsArray(src) || isNotObjectOrIsArray(des)) {
        throw createI18nError(I18nErrorCodes.INVALID_VALUE);
    }
    for (const key in src) {
        if (hasOwn(src, key)) {
            if (isNotObjectOrIsArray(src[key]) || isNotObjectOrIsArray(des[key])) {
                // replace with src[key] when:
                // src[key] or des[key] is not a object, or
                // src[key] or des[key] is a array
                des[key] = src[key];
            }
            else {
                // src[key] and des[key] are both object, merge them
                deepCopy$1(src[key], des[key]);
            }
        }
    }
}
// eslint-disable-next-line @typescript-eslint/no-explicit-any
function getComponentOptions(instance) {
    return instance.type ;
}
function adjustI18nResources(global, options, componentOptions // eslint-disable-line @typescript-eslint/no-explicit-any
) {
    let messages = isObject$1(options.messages) ? options.messages : {};
    if ('__i18nGlobal' in componentOptions) {
        messages = getLocaleMessages(globalThis.locale.value, {
            messages,
            __i18n: componentOptions.__i18nGlobal
        });
    }
    // merge locale messages
    const locales = Object.keys(messages);
    if (locales.length) {
        locales.forEach(locale => {
            global.mergeLocaleMessage(locale, messages[locale]);
        });
    }
    {
        // merge datetime formats
        if (isObject$1(options.datetimeFormats)) {
            const locales = Object.keys(options.datetimeFormats);
            if (locales.length) {
                locales.forEach(locale => {
                    global.mergeDateTimeFormat(locale, options.datetimeFormats[locale]);
                });
            }
        }
        // merge number formats
        if (isObject$1(options.numberFormats)) {
            const locales = Object.keys(options.numberFormats);
            if (locales.length) {
                locales.forEach(locale => {
                    global.mergeNumberFormat(locale, options.numberFormats[locale]);
                });
            }
        }
    }
}
function createTextNode(key) {
    return createVNode(Text, null, key, 0)
        ;
}
/* eslint-enable @typescript-eslint/no-explicit-any */

/* eslint-disable @typescript-eslint/no-explicit-any */
// extend VNode interface
const DEVTOOLS_META = '__INTLIFY_META__';
let composerID = 0;
function defineCoreMissingHandler(missing) {
    return ((ctx, locale, key, type) => {
        return missing(locale, key, getCurrentInstance() || undefined, type);
    });
}
// for Intlify DevTools
const getMetaInfo =  () => {
    const instance = getCurrentInstance();
    let meta = null; // eslint-disable-line @typescript-eslint/no-explicit-any
    return instance && (meta = getComponentOptions(instance)[DEVTOOLS_META])
        ? { [DEVTOOLS_META]: meta } // eslint-disable-line @typescript-eslint/no-explicit-any
        : null;
};
/**
 * Create composer interface factory
 *
 * @internal
 */
// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
function createComposer(options = {}, VueI18nLegacy) {
    const { __root } = options;
    const _isGlobal = __root === undefined;
    let _inheritLocale = isBoolean(options.inheritLocale)
        ? options.inheritLocale
        : true;
    const _locale = ref(
    // prettier-ignore
    __root && _inheritLocale
        ? __root.locale.value
        : isString$1(options.locale)
            ? options.locale
            : DEFAULT_LOCALE$1);
    const _fallbackLocale = ref(
    // prettier-ignore
    __root && _inheritLocale
        ? __root.fallbackLocale.value
        : isString$1(options.fallbackLocale) ||
            isArray$1(options.fallbackLocale) ||
            isPlainObject(options.fallbackLocale) ||
            options.fallbackLocale === false
            ? options.fallbackLocale
            : _locale.value);
    const _messages = ref(getLocaleMessages(_locale.value, options));
    // prettier-ignore
    const _datetimeFormats = ref(isPlainObject(options.datetimeFormats)
            ? options.datetimeFormats
            : { [_locale.value]: {} })
        ;
    // prettier-ignore
    const _numberFormats = ref(isPlainObject(options.numberFormats)
            ? options.numberFormats
            : { [_locale.value]: {} })
        ;
    // warning suppress options
    // prettier-ignore
    let _missingWarn = __root
        ? __root.missingWarn
        : isBoolean(options.missingWarn) || isRegExp(options.missingWarn)
            ? options.missingWarn
            : true;
    // prettier-ignore
    let _fallbackWarn = __root
        ? __root.fallbackWarn
        : isBoolean(options.fallbackWarn) || isRegExp(options.fallbackWarn)
            ? options.fallbackWarn
            : true;
    // prettier-ignore
    let _fallbackRoot = __root
        ? __root.fallbackRoot
        : isBoolean(options.fallbackRoot)
            ? options.fallbackRoot
            : true;
    // configure fall back to root
    let _fallbackFormat = !!options.fallbackFormat;
    // runtime missing
    let _missing = isFunction$1(options.missing) ? options.missing : null;
    let _runtimeMissing = isFunction$1(options.missing)
        ? defineCoreMissingHandler(options.missing)
        : null;
    // postTranslation handler
    let _postTranslation = isFunction$1(options.postTranslation)
        ? options.postTranslation
        : null;
    // prettier-ignore
    let _warnHtmlMessage = __root
        ? __root.warnHtmlMessage
        : isBoolean(options.warnHtmlMessage)
            ? options.warnHtmlMessage
            : true;
    let _escapeParameter = !!options.escapeParameter;
    // custom linked modifiers
    // prettier-ignore
    const _modifiers = __root
        ? __root.modifiers
        : isPlainObject(options.modifiers)
            ? options.modifiers
            : {};
    // pluralRules
    let _pluralRules = options.pluralRules || (__root && __root.pluralRules);
    // runtime context
    // eslint-disable-next-line prefer-const
    let _context;
    const getCoreContext = () => {
        _isGlobal && setFallbackContext(null);
        const ctxOptions = {
            version: VERSION,
            locale: _locale.value,
            fallbackLocale: _fallbackLocale.value,
            messages: _messages.value,
            modifiers: _modifiers,
            pluralRules: _pluralRules,
            missing: _runtimeMissing === null ? undefined : _runtimeMissing,
            missingWarn: _missingWarn,
            fallbackWarn: _fallbackWarn,
            fallbackFormat: _fallbackFormat,
            unresolving: true,
            postTranslation: _postTranslation === null ? undefined : _postTranslation,
            warnHtmlMessage: _warnHtmlMessage,
            escapeParameter: _escapeParameter,
            messageResolver: options.messageResolver,
            __meta: { framework: 'vue' }
        };
        {
            ctxOptions.datetimeFormats = _datetimeFormats.value;
            ctxOptions.numberFormats = _numberFormats.value;
            ctxOptions.__datetimeFormatters = isPlainObject(_context)
                ? _context.__datetimeFormatters
                : undefined;
            ctxOptions.__numberFormatters = isPlainObject(_context)
                ? _context.__numberFormatters
                : undefined;
        }
        const ctx = createCoreContext(ctxOptions);
        _isGlobal && setFallbackContext(ctx);
        return ctx;
    };
    _context = getCoreContext();
    updateFallbackLocale(_context, _locale.value, _fallbackLocale.value);
    // track reactivity
    function trackReactivityValues() {
        return [
                _locale.value,
                _fallbackLocale.value,
                _messages.value,
                _datetimeFormats.value,
                _numberFormats.value
            ]
            ;
    }
    // locale
    const locale = computed({
        get: () => _locale.value,
        set: val => {
            _locale.value = val;
            _context.locale = _locale.value;
        }
    });
    // fallbackLocale
    const fallbackLocale = computed({
        get: () => _fallbackLocale.value,
        set: val => {
            _fallbackLocale.value = val;
            _context.fallbackLocale = _fallbackLocale.value;
            updateFallbackLocale(_context, _locale.value, val);
        }
    });
    // messages
    const messages = computed(() => _messages.value);
    // datetimeFormats
    const datetimeFormats = /* #__PURE__*/ computed(() => _datetimeFormats.value);
    // numberFormats
    const numberFormats = /* #__PURE__*/ computed(() => _numberFormats.value);
    // getPostTranslationHandler
    function getPostTranslationHandler() {
        return isFunction$1(_postTranslation) ? _postTranslation : null;
    }
    // setPostTranslationHandler
    function setPostTranslationHandler(handler) {
        _postTranslation = handler;
        _context.postTranslation = handler;
    }
    // getMissingHandler
    function getMissingHandler() {
        return _missing;
    }
    // setMissingHandler
    function setMissingHandler(handler) {
        if (handler !== null) {
            _runtimeMissing = defineCoreMissingHandler(handler);
        }
        _missing = handler;
        _context.missing = _runtimeMissing;
    }
    const wrapWithDeps = (fn, argumentParser, warnType, fallbackSuccess, fallbackFail, successCondition) => {
        trackReactivityValues(); // track reactive dependency
        // NOTE: experimental !!
        let ret;
        if (__INTLIFY_PROD_DEVTOOLS__) {
            try {
                setAdditionalMeta(getMetaInfo());
                if (!_isGlobal) {
                    _context.fallbackContext = __root
                        ? getFallbackContext()
                        : undefined;
                }
                ret = fn(_context);
            }
            finally {
                setAdditionalMeta(null);
                if (!_isGlobal) {
                    _context.fallbackContext = undefined;
                }
            }
        }
        else {
            ret = fn(_context);
        }
        if (isNumber(ret) && ret === NOT_REOSLVED) {
            const [key, arg2] = argumentParser();
            return __root && _fallbackRoot
                ? fallbackSuccess(__root)
                : fallbackFail(key);
        }
        else if (successCondition(ret)) {
            return ret;
        }
        else {
            /* istanbul ignore next */
            throw createI18nError(I18nErrorCodes.UNEXPECTED_RETURN_TYPE);
        }
    };
    // t
    function t(...args) {
        return wrapWithDeps(context => Reflect.apply(translate, null, [context, ...args]), () => parseTranslateArgs(...args), 'translate', root => Reflect.apply(root.t, root, [...args]), key => key, val => isString$1(val));
    }
    // rt
    function rt(...args) {
        const [arg1, arg2, arg3] = args;
        if (arg3 && !isObject$1(arg3)) {
            throw createI18nError(I18nErrorCodes.INVALID_ARGUMENT);
        }
        return t(...[arg1, arg2, assign$1({ resolvedMessage: true }, arg3 || {})]);
    }
    // d
    function d(...args) {
        return wrapWithDeps(context => Reflect.apply(datetime, null, [context, ...args]), () => parseDateTimeArgs(...args), 'datetime format', root => Reflect.apply(root.d, root, [...args]), () => MISSING_RESOLVE_VALUE, val => isString$1(val));
    }
    // n
    function n(...args) {
        return wrapWithDeps(context => Reflect.apply(number, null, [context, ...args]), () => parseNumberArgs(...args), 'number format', root => Reflect.apply(root.n, root, [...args]), () => MISSING_RESOLVE_VALUE, val => isString$1(val));
    }
    // for custom processor
    function normalize(values) {
        return values.map(val => isString$1(val) || isNumber(val) || isBoolean(val)
            ? createTextNode(String(val))
            : val);
    }
    const interpolate = (val) => val;
    const processor = {
        normalize,
        interpolate,
        type: 'vnode'
    };
    // translateVNode, using for `i18n-t` component
    function translateVNode(...args) {
        return wrapWithDeps(context => {
            let ret;
            const _context = context;
            try {
                _context.processor = processor;
                ret = Reflect.apply(translate, null, [_context, ...args]);
            }
            finally {
                _context.processor = null;
            }
            return ret;
        }, () => parseTranslateArgs(...args), 'translate', 
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        root => root[TranslateVNodeSymbol](...args), key => [createTextNode(key)], val => isArray$1(val));
    }
    // numberParts, using for `i18n-n` component
    function numberParts(...args) {
        return wrapWithDeps(context => Reflect.apply(number, null, [context, ...args]), () => parseNumberArgs(...args), 'number format', 
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        root => root[NumberPartsSymbol](...args), () => [], val => isString$1(val) || isArray$1(val));
    }
    // datetimeParts, using for `i18n-d` component
    function datetimeParts(...args) {
        return wrapWithDeps(context => Reflect.apply(datetime, null, [context, ...args]), () => parseDateTimeArgs(...args), 'datetime format', 
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        root => root[DatetimePartsSymbol](...args), () => [], val => isString$1(val) || isArray$1(val));
    }
    function setPluralRules(rules) {
        _pluralRules = rules;
        _context.pluralRules = _pluralRules;
    }
    // te
    function te(key, locale) {
        const targetLocale = isString$1(locale) ? locale : _locale.value;
        const message = getLocaleMessage(targetLocale);
        return _context.messageResolver(message, key) !== null;
    }
    function resolveMessages(key) {
        let messages = null;
        const locales = fallbackWithLocaleChain(_context, _fallbackLocale.value, _locale.value);
        for (let i = 0; i < locales.length; i++) {
            const targetLocaleMessages = _messages.value[locales[i]] || {};
            const messageValue = _context.messageResolver(targetLocaleMessages, key);
            if (messageValue != null) {
                messages = messageValue;
                break;
            }
        }
        return messages;
    }
    // tm
    function tm(key) {
        const messages = resolveMessages(key);
        // prettier-ignore
        return messages != null
            ? messages
            : __root
                ? __root.tm(key) || {}
                : {};
    }
    // getLocaleMessage
    function getLocaleMessage(locale) {
        return (_messages.value[locale] || {});
    }
    // setLocaleMessage
    function setLocaleMessage(locale, message) {
        _messages.value[locale] = message;
        _context.messages = _messages.value;
    }
    // mergeLocaleMessage
    function mergeLocaleMessage(locale, message) {
        _messages.value[locale] = _messages.value[locale] || {};
        deepCopy$1(message, _messages.value[locale]);
        _context.messages = _messages.value;
    }
    // getDateTimeFormat
    function getDateTimeFormat(locale) {
        return _datetimeFormats.value[locale] || {};
    }
    // setDateTimeFormat
    function setDateTimeFormat(locale, format) {
        _datetimeFormats.value[locale] = format;
        _context.datetimeFormats = _datetimeFormats.value;
        clearDateTimeFormat(_context, locale, format);
    }
    // mergeDateTimeFormat
    function mergeDateTimeFormat(locale, format) {
        _datetimeFormats.value[locale] = assign$1(_datetimeFormats.value[locale] || {}, format);
        _context.datetimeFormats = _datetimeFormats.value;
        clearDateTimeFormat(_context, locale, format);
    }
    // getNumberFormat
    function getNumberFormat(locale) {
        return _numberFormats.value[locale] || {};
    }
    // setNumberFormat
    function setNumberFormat(locale, format) {
        _numberFormats.value[locale] = format;
        _context.numberFormats = _numberFormats.value;
        clearNumberFormat(_context, locale, format);
    }
    // mergeNumberFormat
    function mergeNumberFormat(locale, format) {
        _numberFormats.value[locale] = assign$1(_numberFormats.value[locale] || {}, format);
        _context.numberFormats = _numberFormats.value;
        clearNumberFormat(_context, locale, format);
    }
    // for debug
    composerID++;
    // watch root locale & fallbackLocale
    if (__root && inBrowser) {
        watch(__root.locale, (val) => {
            if (_inheritLocale) {
                _locale.value = val;
                _context.locale = val;
                updateFallbackLocale(_context, _locale.value, _fallbackLocale.value);
            }
        });
        watch(__root.fallbackLocale, (val) => {
            if (_inheritLocale) {
                _fallbackLocale.value = val;
                _context.fallbackLocale = val;
                updateFallbackLocale(_context, _locale.value, _fallbackLocale.value);
            }
        });
    }
    // define basic composition API!
    const composer = {
        id: composerID,
        locale,
        fallbackLocale,
        get inheritLocale() {
            return _inheritLocale;
        },
        set inheritLocale(val) {
            _inheritLocale = val;
            if (val && __root) {
                _locale.value = __root.locale.value;
                _fallbackLocale.value = __root.fallbackLocale.value;
                updateFallbackLocale(_context, _locale.value, _fallbackLocale.value);
            }
        },
        get availableLocales() {
            return Object.keys(_messages.value).sort();
        },
        messages,
        get modifiers() {
            return _modifiers;
        },
        get pluralRules() {
            return _pluralRules || {};
        },
        get isGlobal() {
            return _isGlobal;
        },
        get missingWarn() {
            return _missingWarn;
        },
        set missingWarn(val) {
            _missingWarn = val;
            _context.missingWarn = _missingWarn;
        },
        get fallbackWarn() {
            return _fallbackWarn;
        },
        set fallbackWarn(val) {
            _fallbackWarn = val;
            _context.fallbackWarn = _fallbackWarn;
        },
        get fallbackRoot() {
            return _fallbackRoot;
        },
        set fallbackRoot(val) {
            _fallbackRoot = val;
        },
        get fallbackFormat() {
            return _fallbackFormat;
        },
        set fallbackFormat(val) {
            _fallbackFormat = val;
            _context.fallbackFormat = _fallbackFormat;
        },
        get warnHtmlMessage() {
            return _warnHtmlMessage;
        },
        set warnHtmlMessage(val) {
            _warnHtmlMessage = val;
            _context.warnHtmlMessage = val;
        },
        get escapeParameter() {
            return _escapeParameter;
        },
        set escapeParameter(val) {
            _escapeParameter = val;
            _context.escapeParameter = val;
        },
        t,
        getLocaleMessage,
        setLocaleMessage,
        mergeLocaleMessage,
        getPostTranslationHandler,
        setPostTranslationHandler,
        getMissingHandler,
        setMissingHandler,
        [SetPluralRulesSymbol]: setPluralRules
    };
    {
        composer.datetimeFormats = datetimeFormats;
        composer.numberFormats = numberFormats;
        composer.rt = rt;
        composer.te = te;
        composer.tm = tm;
        composer.d = d;
        composer.n = n;
        composer.getDateTimeFormat = getDateTimeFormat;
        composer.setDateTimeFormat = setDateTimeFormat;
        composer.mergeDateTimeFormat = mergeDateTimeFormat;
        composer.getNumberFormat = getNumberFormat;
        composer.setNumberFormat = setNumberFormat;
        composer.mergeNumberFormat = mergeNumberFormat;
        composer[InejctWithOption] = options.__injectWithOption;
        composer[TranslateVNodeSymbol] = translateVNode;
        composer[DatetimePartsSymbol] = datetimeParts;
        composer[NumberPartsSymbol] = numberParts;
    }
    return composer;
}
/* eslint-enable @typescript-eslint/no-explicit-any */

const baseFormatProps = {
    tag: {
        type: [String, Object]
    },
    locale: {
        type: String
    },
    scope: {
        type: String,
        // NOTE: avoid https://github.com/microsoft/rushstack/issues/1050
        validator: (val /* ComponetI18nScope */) => val === 'parent' || val === 'global',
        default: 'parent' /* ComponetI18nScope */
    },
    i18n: {
        type: Object
    }
};

function getInterpolateArg(
// eslint-disable-next-line @typescript-eslint/no-explicit-any
{ slots }, // SetupContext,
keys) {
    if (keys.length === 1 && keys[0] === 'default') {
        // default slot with list
        const ret = slots.default ? slots.default() : [];
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        return ret.reduce((slot, current) => {
            return [
                ...slot,
                // prettier-ignore
                ...(current.type === Fragment ? current.children : [current]
                    )
            ];
        }, []);
    }
    else {
        // named slots
        return keys.reduce((arg, key) => {
            const slot = slots[key];
            if (slot) {
                arg[key] = slot();
            }
            return arg;
        }, {});
    }
}
// eslint-disable-next-line @typescript-eslint/no-explicit-any
function getFragmentableTag(tag) {
    return Fragment ;
}

const TranslationImpl = /*#__PURE__*/ /* #__PURE__ */ defineComponent({
    /* eslint-disable */
    name: 'i18n-t',
    props: assign$1({
        keypath: {
            type: String,
            required: true
        },
        plural: {
            type: [Number, String],
            // eslint-disable-next-line @typescript-eslint/no-explicit-any
            validator: (val) => isNumber(val) || !isNaN(val)
        }
    }, baseFormatProps),
    /* eslint-enable */
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    setup(props, context) {
        const { slots, attrs } = context;
        // NOTE: avoid https://github.com/microsoft/rushstack/issues/1050
        const i18n = props.i18n ||
            useI18n({
                useScope: props.scope,
                __useComponent: true
            });
        return () => {
            const keys = Object.keys(slots).filter(key => key !== '_');
            const options = {};
            if (props.locale) {
                options.locale = props.locale;
            }
            if (props.plural !== undefined) {
                options.plural = isString$1(props.plural) ? +props.plural : props.plural;
            }
            const arg = getInterpolateArg(context, keys);
            // eslint-disable-next-line @typescript-eslint/no-explicit-any
            const children = i18n[TranslateVNodeSymbol](props.keypath, arg, options);
            const assignedAttrs = assign$1({}, attrs);
            const tag = isString$1(props.tag) || isObject$1(props.tag)
                ? props.tag
                : getFragmentableTag();
            return h(tag, assignedAttrs, children);
        };
    }
});
/**
 * export the public type for h/tsx inference
 * also to avoid inline import() in generated d.ts files
 */
/**
 * Translation Component
 *
 * @remarks
 * See the following items for property about details
 *
 * @VueI18nSee [TranslationProps](component#translationprops)
 * @VueI18nSee [BaseFormatProps](component#baseformatprops)
 * @VueI18nSee [Component Interpolation](../guide/advanced/component)
 *
 * @example
 * ```html
 * <div id="app">
 *   <!-- ... -->
 *   <i18n path="term" tag="label" for="tos">
 *     <a :href="url" target="_blank">{{ $t('tos') }}</a>
 *   </i18n>
 *   <!-- ... -->
 * </div>
 * ```
 * ```js
 * import { createApp } from 'vue'
 * import { createI18n } from 'vue-i18n'
 *
 * const messages = {
 *   en: {
 *     tos: 'Term of Service',
 *     term: 'I accept xxx {0}.'
 *   },
 *   ja: {
 *     tos: '利用規約',
 *     term: '私は xxx の{0}に同意します。'
 *   }
 * }
 *
 * const i18n = createI18n({
 *   locale: 'en',
 *   messages
 * })
 *
 * const app = createApp({
 *   data: {
 *     url: '/term'
 *   }
 * }).use(i18n).mount('#app')
 * ```
 *
 * @VueI18nComponent
 */
const Translation = TranslationImpl;

function isVNode(target) {
    return isArray$1(target) && !isString$1(target[0]);
}
function renderFormatter(props, context, slotKeys, partFormatter) {
    const { slots, attrs } = context;
    return () => {
        const options = { part: true };
        let overrides = {};
        if (props.locale) {
            options.locale = props.locale;
        }
        if (isString$1(props.format)) {
            options.key = props.format;
        }
        else if (isObject$1(props.format)) {
            // eslint-disable-next-line @typescript-eslint/no-explicit-any
            if (isString$1(props.format.key)) {
                // eslint-disable-next-line @typescript-eslint/no-explicit-any
                options.key = props.format.key;
            }
            // Filter out number format options only
            overrides = Object.keys(props.format).reduce((options, prop) => {
                return slotKeys.includes(prop)
                    ? assign$1({}, options, { [prop]: props.format[prop] }) // eslint-disable-line @typescript-eslint/no-explicit-any
                    : options;
            }, {});
        }
        const parts = partFormatter(...[props.value, options, overrides]);
        let children = [options.key];
        if (isArray$1(parts)) {
            children = parts.map((part, index) => {
                const slot = slots[part.type];
                const node = slot
                    ? slot({ [part.type]: part.value, index, parts })
                    : [part.value];
                if (isVNode(node)) {
                    node[0].key = `${part.type}-${index}`;
                }
                return node;
            });
        }
        else if (isString$1(parts)) {
            children = [parts];
        }
        const assignedAttrs = assign$1({}, attrs);
        const tag = isString$1(props.tag) || isObject$1(props.tag)
            ? props.tag
            : getFragmentableTag();
        return h(tag, assignedAttrs, children);
    };
}

const NumberFormatImpl = /*#__PURE__*/ /* #__PURE__ */ defineComponent({
    /* eslint-disable */
    name: 'i18n-n',
    props: assign$1({
        value: {
            type: Number,
            required: true
        },
        format: {
            type: [String, Object]
        }
    }, baseFormatProps),
    /* eslint-enable */
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    setup(props, context) {
        const i18n = props.i18n ||
            useI18n({
                useScope: 'parent',
                __useComponent: true
            });
        return renderFormatter(props, context, NUMBER_FORMAT_OPTIONS_KEYS, (...args) => 
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        i18n[NumberPartsSymbol](...args));
    }
});
/**
 * export the public type for h/tsx inference
 * also to avoid inline import() in generated d.ts files
 */
/**
 * Number Format Component
 *
 * @remarks
 * See the following items for property about details
 *
 * @VueI18nSee [FormattableProps](component#formattableprops)
 * @VueI18nSee [BaseFormatProps](component#baseformatprops)
 * @VueI18nSee [Custom Formatting](../guide/essentials/number#custom-formatting)
 *
 * @VueI18nDanger
 * Not supported IE, due to no support `Intl.NumberFormat#formatToParts` in [IE](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl/NumberFormat/formatToParts)
 *
 * If you want to use it, you need to use [polyfill](https://github.com/formatjs/formatjs/tree/main/packages/intl-numberformat)
 *
 * @VueI18nComponent
 */
const NumberFormat = NumberFormatImpl;

const DatetimeFormatImpl = /* #__PURE__*/ /* #__PURE__ */ defineComponent({
    /* eslint-disable */
    name: 'i18n-d',
    props: assign$1({
        value: {
            type: [Number, Date],
            required: true
        },
        format: {
            type: [String, Object]
        }
    }, baseFormatProps),
    /* eslint-enable */
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    setup(props, context) {
        const i18n = props.i18n ||
            useI18n({
                useScope: 'parent',
                __useComponent: true
            });
        return renderFormatter(props, context, DATETIME_FORMAT_OPTIONS_KEYS, (...args) => 
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        i18n[DatetimePartsSymbol](...args));
    }
});
/**
 * Datetime Format Component
 *
 * @remarks
 * See the following items for property about details
 *
 * @VueI18nSee [FormattableProps](component#formattableprops)
 * @VueI18nSee [BaseFormatProps](component#baseformatprops)
 * @VueI18nSee [Custom Formatting](../guide/essentials/datetime#custom-formatting)
 *
 * @VueI18nDanger
 * Not supported IE, due to no support `Intl.DateTimeFormat#formatToParts` in [IE](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl/DateTimeFormat/formatToParts)
 *
 * If you want to use it, you need to use [polyfill](https://github.com/formatjs/formatjs/tree/main/packages/intl-datetimeformat)
 *
 * @VueI18nComponent
 */
const DatetimeFormat = DatetimeFormatImpl;

function getComposer$2(i18n, instance) {
    const i18nInternal = i18n;
    if (i18n.mode === 'composition') {
        return (i18nInternal.__getInstance(instance) || i18n.global);
    }
    else {
        const vueI18n = i18nInternal.__getInstance(instance);
        return vueI18n != null
            ? vueI18n.__composer
            : i18n.global.__composer;
    }
}
function vTDirective(i18n) {
    const _process = (binding) => {
        const { instance, modifiers, value } = binding;
        /* istanbul ignore if */
        if (!instance || !instance.$) {
            throw createI18nError(I18nErrorCodes.UNEXPECTED_ERROR);
        }
        const composer = getComposer$2(i18n, instance.$);
        const parsedValue = parseValue(value);
        return [
            Reflect.apply(composer.t, composer, [...makeParams(parsedValue)]),
            composer
        ];
    };
    const register = (el, binding) => {
        const [textContent, composer] = _process(binding);
        el.__composer = composer;
        el.textContent = textContent;
    };
    const unregister = (el) => {
        if (el.__composer) {
            el.__composer = undefined;
            delete el.__composer;
        }
    };
    const update = (el, { value }) => {
        if (el.__composer) {
            const composer = el.__composer;
            const parsedValue = parseValue(value);
            el.textContent = Reflect.apply(composer.t, composer, [
                ...makeParams(parsedValue)
            ]);
        }
    };
    const getSSRProps = (binding) => {
        const [textContent] = _process(binding);
        return { textContent };
    };
    return {
        created: register,
        unmounted: unregister,
        beforeUpdate: update,
        getSSRProps
    };
}
function parseValue(value) {
    if (isString$1(value)) {
        return { path: value };
    }
    else if (isPlainObject(value)) {
        if (!('path' in value)) {
            throw createI18nError(I18nErrorCodes.REQUIRED_VALUE, 'path');
        }
        return value;
    }
    else {
        throw createI18nError(I18nErrorCodes.INVALID_VALUE);
    }
}
function makeParams(value) {
    const { path, locale, args, choice, plural } = value;
    const options = {};
    const named = args || {};
    if (isString$1(locale)) {
        options.locale = locale;
    }
    if (isNumber(choice)) {
        options.plural = choice;
    }
    if (isNumber(plural)) {
        options.plural = plural;
    }
    return [path, named, options];
}

function apply(app, i18n, ...options) {
    const pluginOptions = isPlainObject(options[0])
        ? options[0]
        : {};
    const useI18nComponentName = !!pluginOptions.useI18nComponentName;
    const globalInstall = isBoolean(pluginOptions.globalInstall)
        ? pluginOptions.globalInstall
        : true;
    if (globalInstall) {
        // install components
        app.component(!useI18nComponentName ? Translation.name : 'i18n', Translation);
        app.component(NumberFormat.name, NumberFormat);
        app.component(DatetimeFormat.name, DatetimeFormat);
    }
    // install directive
    {
        app.directive('t', vTDirective(i18n));
    }
}

/**
 * Injection key for {@link useI18n}
 *
 * @remarks
 * The global injection key for I18n instances with `useI18n`. this injection key is used in Web Components.
 * Specify the i18n instance created by {@link createI18n} together with `provide` function.
 *
 * @VueI18nGeneral
 */
const I18nInjectionKey = 
/* #__PURE__*/ makeSymbol$1('global-vue-i18n');
// eslint-disable-next-line @typescript-eslint/no-explicit-any, @typescript-eslint/explicit-module-boundary-types
function createI18n(options = {}, VueI18nLegacy) {
    // prettier-ignore
    const __globalInjection = isBoolean(options.globalInjection)
        ? options.globalInjection
        : true;
    // prettier-ignore
    const __allowComposition = true;
    const __instances = new Map();
    const [globalScope, __global] = createGlobal(options);
    const symbol = /* #__PURE__*/ makeSymbol$1('');
    function __getInstance(component) {
        return __instances.get(component) || null;
    }
    function __setInstance(component, instance) {
        __instances.set(component, instance);
    }
    function __deleteInstance(component) {
        __instances.delete(component);
    }
    {
        const i18n = {
            // mode
            get mode() {
                return 'composition';
            },
            // allowComposition
            get allowComposition() {
                return __allowComposition;
            },
            // install plugin
            async install(app, ...options) {
                // setup global provider
                app.__VUE_I18N_SYMBOL__ = symbol;
                app.provide(app.__VUE_I18N_SYMBOL__, i18n);
                // set composer & vuei18n extend hook options from plugin options
                if (isPlainObject(options[0])) {
                    const opts = options[0];
                    i18n.__composerExtend =
                        opts.__composerExtend;
                    i18n.__vueI18nExtend =
                        opts.__vueI18nExtend;
                }
                // global method and properties injection for Composition API
                if (__globalInjection) {
                    injectGlobalFields(app, i18n.global);
                }
                // install built-in components and directive
                {
                    apply(app, i18n, ...options);
                }
                // release global scope
                const unmountApp = app.unmount;
                app.unmount = () => {
                    i18n.dispose();
                    unmountApp();
                };
            },
            // global accessor
            get global() {
                return __global;
            },
            dispose() {
                globalScope.stop();
            },
            // @internal
            __instances,
            // @internal
            __getInstance,
            // @internal
            __setInstance,
            // @internal
            __deleteInstance
        };
        return i18n;
    }
}
// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
function useI18n(options = {}) {
    const instance = getCurrentInstance();
    if (instance == null) {
        throw createI18nError(I18nErrorCodes.MUST_BE_CALL_SETUP_TOP);
    }
    if (!instance.isCE &&
        instance.appContext.app != null &&
        !instance.appContext.app.__VUE_I18N_SYMBOL__) {
        throw createI18nError(I18nErrorCodes.NOT_INSLALLED);
    }
    const i18n = getI18nInstance(instance);
    const global = getGlobalComposer(i18n);
    const componentOptions = getComponentOptions(instance);
    const scope = getScope(options, componentOptions);
    if (scope === 'global') {
        adjustI18nResources(global, options, componentOptions);
        return global;
    }
    if (scope === 'parent') {
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        let composer = getComposer$3(i18n, instance, options.__useComponent);
        if (composer == null) {
            composer = global;
        }
        return composer;
    }
    const i18nInternal = i18n;
    let composer = i18nInternal.__getInstance(instance);
    if (composer == null) {
        const composerOptions = assign$1({}, options);
        if ('__i18n' in componentOptions) {
            composerOptions.__i18n = componentOptions.__i18n;
        }
        if (global) {
            composerOptions.__root = global;
        }
        composer = createComposer(composerOptions);
        if (i18nInternal.__composerExtend) {
            i18nInternal.__composerExtend(composer);
        }
        setupLifeCycle(i18nInternal, instance);
        i18nInternal.__setInstance(instance, composer);
    }
    return composer;
}
function createGlobal(options, legacyMode, VueI18nLegacy // eslint-disable-line @typescript-eslint/no-explicit-any
) {
    const scope = effectScope();
    {
        const obj = scope.run(() => createComposer(options));
        if (obj == null) {
            throw createI18nError(I18nErrorCodes.UNEXPECTED_ERROR);
        }
        return [scope, obj];
    }
}
function getI18nInstance(instance) {
    {
        const i18n = inject(!instance.isCE
            ? instance.appContext.app.__VUE_I18N_SYMBOL__
            : I18nInjectionKey);
        /* istanbul ignore if */
        if (!i18n) {
            throw createI18nError(!instance.isCE
                ? I18nErrorCodes.UNEXPECTED_ERROR
                : I18nErrorCodes.NOT_INSLALLED_WITH_PROVIDE);
        }
        return i18n;
    }
}
// eslint-disable-next-line @typescript-eslint/no-explicit-any
function getScope(options, componentOptions) {
    // prettier-ignore
    return isEmptyObject(options)
        ? ('__i18n' in componentOptions)
            ? 'local'
            : 'global'
        : !options.useScope
            ? 'local'
            : options.useScope;
}
function getGlobalComposer(i18n) {
    // prettier-ignore
    return i18n.mode === 'composition'
            ? i18n.global
            : i18n.global.__composer
        ;
}
function getComposer$3(i18n, target, useComponent = false) {
    let composer = null;
    const root = target.root;
    let current = target.parent;
    while (current != null) {
        const i18nInternal = i18n;
        if (i18n.mode === 'composition') {
            composer = i18nInternal.__getInstance(current);
        }
        if (composer != null) {
            break;
        }
        if (root === current) {
            break;
        }
        current = current.parent;
    }
    return composer;
}
function setupLifeCycle(i18n, target, composer) {
    {
        onUnmounted(() => {
            i18n.__deleteInstance(target);
        }, target);
    }
}
const globalExportProps = [
    'locale',
    'fallbackLocale',
    'availableLocales'
];
const globalExportMethods = ['t', 'rt', 'd', 'n', 'tm', 'te']
    ;
function injectGlobalFields(app, composer) {
    const i18n = Object.create(null);
    globalExportProps.forEach(prop => {
        const desc = Object.getOwnPropertyDescriptor(composer, prop);
        if (!desc) {
            throw createI18nError(I18nErrorCodes.UNEXPECTED_ERROR);
        }
        const wrap = isRef(desc.value) // check computed props
            ? {
                get() {
                    return desc.value.value;
                },
                // eslint-disable-next-line @typescript-eslint/no-explicit-any
                set(val) {
                    desc.value.value = val;
                }
            }
            : {
                get() {
                    return desc.get && desc.get();
                }
            };
        Object.defineProperty(i18n, prop, wrap);
    });
    app.config.globalProperties.$i18n = i18n;
    globalExportMethods.forEach(method => {
        const desc = Object.getOwnPropertyDescriptor(composer, method);
        if (!desc || !desc.value) {
            throw createI18nError(I18nErrorCodes.UNEXPECTED_ERROR);
        }
        Object.defineProperty(app.config.globalProperties, `$${method}`, desc);
    });
}

// register message resolver at vue-i18n
registerMessageResolver(resolveValue);
// register fallback locale at vue-i18n
registerLocaleFallbacker(fallbackWithLocaleChain);
{
    initFeatureFlags();
}
// NOTE: experimental !!
if (__INTLIFY_PROD_DEVTOOLS__) {
    const target = getGlobalThis();
    target.__INTLIFY__ = true;
    setDevToolsHook(target.__INTLIFY_DEVTOOLS_GLOBAL_HOOK__);
}

const STRATEGIES = {
  PREFIX: "prefix",
  PREFIX_EXCEPT_DEFAULT: "prefix_except_default",
  PREFIX_AND_DEFAULT: "prefix_and_default",
  NO_PREFIX: "no_prefix"
};
const DEFAULT_LOCALE = "";
const DEFAULT_STRATEGY = STRATEGIES.PREFIX_EXCEPT_DEFAULT;
const DEFAULT_TRAILING_SLASH = false;
const DEFAULT_ROUTES_NAME_SEPARATOR = "___";
const DEFAULT_LOCALE_ROUTE_NAME_SUFFIX = "default";
const DEFAULT_DETECTION_DIRECTION = "ltr";
const DEFAULT_BASE_URL = "";
const DEFAULT_DYNAMIC_PARAMS_KEY = "";
/*!
  * shared v9.3.0-beta.16
  * (c) 2023 kazuya kawaguchi
  * Released under the MIT License.
  */
const makeSymbol = (name, shareable = false) => !shareable ? Symbol(name) : Symbol.for(name);
const assign = Object.assign;
const isArray = Array.isArray;
const isFunction = (val) => typeof val === "function";
const isString = (val) => typeof val === "string";
const isSymbol = (val) => typeof val === "symbol";
const isObject = (val) => val !== null && typeof val === "object";
const TRAILING_SLASH_RE = /\/$|\/\?/;
function hasTrailingSlash(input = "", queryParameters = false) {
  if (!queryParameters) {
    return input.endsWith("/");
  }
  return TRAILING_SLASH_RE.test(input);
}
function withoutTrailingSlash(input = "", queryParameters = false) {
  if (!queryParameters) {
    return (hasTrailingSlash(input) ? input.slice(0, -1) : input) || "/";
  }
  if (!hasTrailingSlash(input, true)) {
    return input || "/";
  }
  const [s0, ...s] = input.split("?");
  return (s0.slice(0, -1) || "/") + (s.length > 0 ? `?${s.join("?")}` : "");
}
function withTrailingSlash(input = "", queryParameters = false) {
  if (!queryParameters) {
    return input.endsWith("/") ? input : input + "/";
  }
  if (hasTrailingSlash(input, true)) {
    return input || "/";
  }
  const [s0, ...s] = input.split("?");
  return s0 + "/" + (s.length > 0 ? `?${s.join("?")}` : "");
}
function warn(msg, err) {
  if (typeof console !== "undefined") {
    console.warn(`[vue-i18n-routing] ` + msg);
    if (err) {
      console.warn(err.stack);
    }
  }
}
function getNormalizedLocales(locales) {
  locales = locales || [];
  const normalized = [];
  for (const locale of locales) {
    if (isString(locale)) {
      normalized.push({ code: locale });
    } else {
      normalized.push(locale);
    }
  }
  return normalized;
}
function isI18nInstance(i18n) {
  return i18n != null && "global" in i18n && "mode" in i18n;
}
function isComposer(target) {
  return target != null && !("__composer" in target) && isRef(target.locale);
}
function isVueI18n(target) {
  return target != null && "__composer" in target;
}
function isExportedGlobalComposer(target) {
  return target != null && !("__composer" in target) && !isRef(target.locale);
}
function isLegacyVueI18n$1(target) {
  return target != null && ("__VUE_I18N_BRIDGE__" in target || "_sync" in target);
}
function getComposer(i18n) {
  return isI18nInstance(i18n) ? isComposer(i18n.global) ? i18n.global : i18n.global.__composer : isVueI18n(i18n) ? i18n.__composer : i18n;
}
function getLocale(i18n) {
  const target = isI18nInstance(i18n) ? i18n.global : i18n;
  return isComposer(target) ? target.locale.value : isExportedGlobalComposer(target) || isVueI18n(target) || isLegacyVueI18n$1(target) ? target.locale : target.locale;
}
function getLocales(i18n) {
  const target = isI18nInstance(i18n) ? i18n.global : i18n;
  return isComposer(target) ? target.locales.value : isExportedGlobalComposer(target) || isVueI18n(target) || isLegacyVueI18n$1(target) ? target.locales : target.locales;
}
function getLocaleCodes(i18n) {
  const target = isI18nInstance(i18n) ? i18n.global : i18n;
  return isComposer(target) ? target.localeCodes.value : isExportedGlobalComposer(target) || isVueI18n(target) || isLegacyVueI18n$1(target) ? target.localeCodes : target.localeCodes;
}
function setLocale(i18n, locale) {
  const target = isI18nInstance(i18n) ? i18n.global : i18n;
  if (isComposer(target)) {
    {
      target.locale.value = locale;
    }
  } else if (isExportedGlobalComposer(target) || isVueI18n(target) || isLegacyVueI18n$1(target)) {
    target.locale = locale;
  } else {
    throw new Error("TODO:");
  }
}
function getRouteName(routeName) {
  return isString(routeName) ? routeName : isSymbol(routeName) ? routeName.toString() : "(null)";
}
function getLocaleRouteName(routeName, locale, {
  defaultLocale,
  strategy,
  routesNameSeparator,
  defaultLocaleRouteNameSuffix
}) {
  let name = getRouteName(routeName) + (strategy === "no_prefix" ? "" : routesNameSeparator + locale);
  if (locale === defaultLocale && strategy === "prefix_and_default") {
    name += routesNameSeparator + defaultLocaleRouteNameSuffix;
  }
  return name;
}
function resolveBaseUrl(baseUrl, context) {
  if (isFunction(baseUrl)) {
    return baseUrl(context);
  }
  return baseUrl;
}
function matchBrowserLocale(locales, browserLocales) {
  const matchedLocales = [];
  for (const [index, browserCode] of browserLocales.entries()) {
    const matchedLocale = locales.find((l) => l.iso.toLowerCase() === browserCode.toLowerCase());
    if (matchedLocale) {
      matchedLocales.push({ code: matchedLocale.code, score: 1 - index / browserLocales.length });
      break;
    }
  }
  for (const [index, browserCode] of browserLocales.entries()) {
    const languageCode = browserCode.split("-")[0].toLowerCase();
    const matchedLocale = locales.find((l) => l.iso.split("-")[0].toLowerCase() === languageCode);
    if (matchedLocale) {
      matchedLocales.push({ code: matchedLocale.code, score: 0.999 - index / browserLocales.length });
      break;
    }
  }
  return matchedLocales;
}
const DefaultBrowserLocaleMatcher = matchBrowserLocale;
function compareBrowserLocale(a, b) {
  if (a.score === b.score) {
    return b.code.length - a.code.length;
  }
  return b.score - a.score;
}
const DefaultBrowerLocaleComparer = compareBrowserLocale;
function findBrowserLocale(locales, browserLocales, { matcher = DefaultBrowserLocaleMatcher, comparer = DefaultBrowerLocaleComparer } = {}) {
  const normalizedLocales = [];
  for (const l of locales) {
    const { code } = l;
    const iso = l.iso || code;
    normalizedLocales.push({ code, iso });
  }
  const matchedLocales = matcher(normalizedLocales, browserLocales);
  if (matchedLocales.length > 1) {
    matchedLocales.sort(comparer);
  }
  return matchedLocales.length ? matchedLocales[0].code : "";
}
function proxyVueInstance(target) {
  return function() {
    return Reflect.apply(
      target,
      {
        getRouteBaseName: this.getRouteBaseName,
        localePath: this.localePath,
        localeRoute: this.localeRoute,
        localeLocation: this.localeLocation,
        resolveRoute: this.resolveRoute,
        switchLocalePath: this.switchLocalePath,
        localeHead: this.localeHead,
        i18n: this.$i18n,
        route: this.$route,
        router: this.$router
      },
      arguments
    );
  };
}
function extendI18n(i18n, {
  locales = [],
  localeCodes = [],
  baseUrl = DEFAULT_BASE_URL,
  hooks = {},
  context = {}
} = {}) {
  const scope = effectScope();
  const orgInstall = i18n.install;
  i18n.install = (vue, ...options) => {
    const pluginOptions = isPluginOptions(options[0]) ? assign({}, options[0]) : { inject: true };
    if (pluginOptions.inject == null) {
      pluginOptions.inject = true;
    }
    const orgComposerExtend = pluginOptions.__composerExtend;
    pluginOptions.__composerExtend = (c) => {
      const g = getComposer(i18n);
      c.locales = computed(() => g.locales.value);
      c.localeCodes = computed(() => g.localeCodes.value);
      c.baseUrl = computed(() => g.baseUrl.value);
      if (isFunction(orgComposerExtend)) {
        Reflect.apply(orgComposerExtend, pluginOptions, [c]);
      }
    };
    if (isVueI18n(i18n.global)) {
      const orgVueI18nExtend = pluginOptions.__vueI18nExtend;
      pluginOptions.__vueI18nExtend = (vueI18n) => {
        extendVueI18n(vueI18n, hooks.onExtendVueI18n);
        if (isFunction(orgVueI18nExtend)) {
          Reflect.apply(orgVueI18nExtend, pluginOptions, [vueI18n]);
        }
      };
    }
    options[0] = pluginOptions;
    Reflect.apply(orgInstall, i18n, [vue, ...options]);
    const composer = getComposer(i18n);
    scope.run(() => extendComposer(composer, { locales, localeCodes, baseUrl, hooks, context }));
    if (isVueI18n(i18n.global)) {
      extendVueI18n(i18n.global, hooks.onExtendVueI18n);
    }
    const app = vue;
    const exported = i18n.mode === "composition" ? app.config.globalProperties.$i18n  : null;
    if (exported) {
      extendExportedGlobal(exported, composer, hooks.onExtendExportedGlobal);
    }
    if (pluginOptions.inject) {
      vue.mixin({
        methods: {
          resolveRoute: proxyVueInstance(resolveRoute),
          localePath: proxyVueInstance(localePath),
          localeRoute: proxyVueInstance(localeRoute),
          localeLocation: proxyVueInstance(localeLocation),
          switchLocalePath: proxyVueInstance(switchLocalePath),
          getRouteBaseName: proxyVueInstance(getRouteBaseName),
          localeHead: proxyVueInstance(localeHead)
        }
      });
    }
    if (app.unmount) {
      const unmountApp = app.unmount;
      app.unmount = () => {
        scope.stop();
        unmountApp();
      };
    }
  };
  return scope;
}
function extendComposer(composer, options) {
  const { locales, localeCodes, baseUrl, context } = options;
  const _locales = ref(locales);
  const _localeCodes = ref(localeCodes);
  const _baseUrl = ref("");
  composer.locales = computed(() => _locales.value);
  composer.localeCodes = computed(() => _localeCodes.value);
  composer.baseUrl = computed(() => _baseUrl.value);
  {
    _baseUrl.value = resolveBaseUrl(baseUrl, context);
  }
  if (options.hooks && options.hooks.onExtendComposer) {
    options.hooks.onExtendComposer(composer);
  }
}
function extendExportedGlobal(exported, g, hook) {
  const properties = [
    {
      locales: {
        get() {
          return g.locales.value;
        }
      },
      localeCodes: {
        get() {
          return g.localeCodes.value;
        }
      },
      baseUrl: {
        get() {
          return g.baseUrl.value;
        }
      }
    }
  ];
  hook && properties.push(hook(g));
  for (const property of properties) {
    for (const [key, descriptor] of Object.entries(property)) {
      Object.defineProperty(exported, key, descriptor);
    }
  }
}
function extendVueI18n(vueI18n, hook) {
  const composer = getComposer(vueI18n);
  const properties = [
    {
      locales: {
        get() {
          return composer.locales.value;
        }
      },
      localeCodes: {
        get() {
          return composer.localeCodes.value;
        }
      },
      baseUrl: {
        get() {
          return composer.baseUrl.value;
        }
      }
    }
  ];
  hook && properties.push(hook(composer));
  for (const property of properties) {
    for (const [key, descriptor] of Object.entries(property)) {
      Object.defineProperty(vueI18n, key, descriptor);
    }
  }
}
function isPluginOptions(options) {
  return isObject(options) && ("inject" in options || "__composerExtend" in options || "__vueI18nExtend" in options);
}
const GlobalOptionsRegistory = makeSymbol("vue-i18n-routing-gor");
function registerGlobalOptions(router, options) {
  const _options = router[GlobalOptionsRegistory];
  if (_options) {
    warn("already registered global options");
  } else {
    router[GlobalOptionsRegistory] = options;
  }
}
function getGlobalOptions(router) {
  var _a;
  return (_a = router[GlobalOptionsRegistory]) != null ? _a : {};
}
function getLocalesRegex(localeCodes) {
  return new RegExp(`^/(${localeCodes.join("|")})(?:/|$)`, "i");
}
function createLocaleFromRouteGetter(localeCodes, routesNameSeparator, defaultLocaleRouteNameSuffix) {
  const localesPattern = `(${localeCodes.join("|")})`;
  const defaultSuffixPattern = `(?:${routesNameSeparator}${defaultLocaleRouteNameSuffix})?`;
  const regexpName = new RegExp(`${routesNameSeparator}${localesPattern}${defaultSuffixPattern}$`, "i");
  const regexpPath = getLocalesRegex(localeCodes);
  const getLocaleFromRoute = (route) => {
    if (isObject(route)) {
      if (route.name) {
        const name = isString(route.name) ? route.name : route.name.toString();
        const matches = name.match(regexpName);
        if (matches && matches.length > 1) {
          return matches[1];
        }
      } else if (route.path) {
        const matches = route.path.match(regexpPath);
        if (matches && matches.length > 1) {
          return matches[1];
        }
      }
    } else if (isString(route)) {
      const matches = route.match(regexpPath);
      if (matches && matches.length > 1) {
        return matches[1];
      }
    }
    return "";
  };
  return getLocaleFromRoute;
}
function getI18nRoutingOptions(router, proxy, {
  defaultLocale = DEFAULT_LOCALE,
  defaultDirection = DEFAULT_DETECTION_DIRECTION,
  defaultLocaleRouteNameSuffix = DEFAULT_LOCALE_ROUTE_NAME_SUFFIX,
  routesNameSeparator = DEFAULT_ROUTES_NAME_SEPARATOR,
  strategy = DEFAULT_STRATEGY,
  trailingSlash = DEFAULT_TRAILING_SLASH,
  localeCodes = [],
  prefixable: prefixable2 = DefaultPrefixable,
  switchLocalePathIntercepter = DefaultSwitchLocalePathIntercepter,
  dynamicRouteParamsKey = DEFAULT_DYNAMIC_PARAMS_KEY
} = {}) {
  const options = getGlobalOptions(router);
  return {
    defaultLocale: proxy.defaultLocale || options.defaultLocale || defaultLocale,
    defaultDirection: proxy.defaultDirection || options.defaultDirection || defaultDirection,
    defaultLocaleRouteNameSuffix: proxy.defaultLocaleRouteNameSuffix || options.defaultLocaleRouteNameSuffix || defaultLocaleRouteNameSuffix,
    routesNameSeparator: proxy.routesNameSeparator || options.routesNameSeparator || routesNameSeparator,
    strategy: proxy.strategy || options.strategy || strategy,
    trailingSlash: proxy.trailingSlash || options.trailingSlash || trailingSlash,
    localeCodes: proxy.localeCodes || options.localeCodes || localeCodes,
    prefixable: proxy.prefixable || options.prefixable || prefixable2,
    switchLocalePathIntercepter: proxy.switchLocalePathIntercepter || options.switchLocalePathIntercepter || switchLocalePathIntercepter,
    dynamicRouteParamsKey: proxy.dynamicRouteParamsKey || options.dynamicRouteParamsKey || dynamicRouteParamsKey
  };
}
function split(str, index) {
  const result = [str.slice(0, index), str.slice(index)];
  return result;
}
function resolve(router, route, strategy, locale) {
  if (strategy === "prefix") {
    if (isArray(route.matched) && route.matched.length > 0) {
      return route.matched[0];
    }
    const [rootSlash, restPath] = split(route.path, 1);
    const targetPath = `${rootSlash}${locale}${restPath === "" ? restPath : `/${restPath}`}`;
    const _route = router.options.routes.find((r) => r.path === targetPath);
    if (_route == null) {
      return route;
    } else {
      const _resolevableRoute = assign({}, _route);
      _resolevableRoute.path = targetPath;
      return router.resolve(_resolevableRoute);
    }
  } else {
    return router.resolve(route);
  }
}
const RESOLVED_PREFIXED = /* @__PURE__ */ new Set(["prefix_and_default", "prefix_except_default"]);
function prefixable(optons) {
  const { currentLocale, defaultLocale, strategy } = optons;
  const isDefaultLocale = currentLocale === defaultLocale;
  return !(isDefaultLocale && RESOLVED_PREFIXED.has(strategy)) && !(strategy === "no_prefix");
}
const DefaultPrefixable = prefixable;
function getRouteBaseName(givenRoute) {
  const router = this.router;
  const { routesNameSeparator } = getI18nRoutingOptions(router, this);
  const route = givenRoute != null ? isRef(givenRoute) ? unref(givenRoute) : givenRoute : this.route;
  if (route == null || !route.name) {
    return;
  }
  const name = getRouteName(route.name);
  return name.split(routesNameSeparator)[0];
}
function localePath(route, locale) {
  const localizedRoute = resolveRoute.call(this, route, locale);
  return localizedRoute == null ? "" : localizedRoute.redirectedFrom || localizedRoute.fullPath ;
}
function localeRoute(route, locale) {
  const resolved = resolveRoute.call(this, route, locale);
  return resolved == null ? void 0 : resolved ;
}
function localeLocation(route, locale) {
  const resolved = resolveRoute.call(this, route, locale);
  return resolved == null ? void 0 : resolved ;
}
function resolveRoute(route, locale) {
  const router = this.router;
  const i18n = this.i18n;
  const _locale = locale || getLocale(i18n);
  const { routesNameSeparator, defaultLocale, defaultLocaleRouteNameSuffix, strategy, trailingSlash, prefixable: prefixable2 } = getI18nRoutingOptions(router, this);
  let _route = route;
  if (isString(route)) {
    if (_route[0] === "/") {
      _route = { path: route };
    } else {
      _route = { name: route };
    }
  }
  let localizedRoute = assign({}, _route);
  if (localizedRoute.path && !localizedRoute.name) {
    let _resolvedRoute = null;
    try {
      _resolvedRoute = resolve(router, localizedRoute, strategy, _locale);
    } catch {
    }
    const resolvedRoute = _resolvedRoute ;
    const resolvedRouteName = getRouteBaseName.call(this, resolvedRoute);
    if (isString(resolvedRouteName)) {
      localizedRoute = {
        name: getLocaleRouteName(resolvedRouteName, _locale, {
          defaultLocale,
          strategy,
          routesNameSeparator,
          defaultLocaleRouteNameSuffix
        }),
        params: resolvedRoute.params,
        query: resolvedRoute.query,
        hash: resolvedRoute.hash
      };
      {
        localizedRoute.state = resolvedRoute.state;
      }
    } else {
      if (prefixable2({ currentLocale: _locale, defaultLocale, strategy })) {
        localizedRoute.path = `/${_locale}${localizedRoute.path}`;
      }
      localizedRoute.path = trailingSlash ? withTrailingSlash(localizedRoute.path, true) : withoutTrailingSlash(localizedRoute.path, true);
    }
  } else {
    if (!localizedRoute.name && !localizedRoute.path) {
      localizedRoute.name = getRouteBaseName.call(this, this.route);
    }
    localizedRoute.name = getLocaleRouteName(localizedRoute.name, _locale, {
      defaultLocale,
      strategy,
      routesNameSeparator,
      defaultLocaleRouteNameSuffix
    });
  }
  try {
    const resolvedRoute = router.resolve(localizedRoute);
    if (isVue3 ? resolvedRoute.name : resolvedRoute.route.name) {
      return resolvedRoute;
    }
    return router.resolve(route);
  } catch (e) {
    if (e.type === 1) {
      return null;
    }
  }
}
const DefaultSwitchLocalePathIntercepter = (path) => path;
function getLocalizableMetaFromDynamicParams(route, key) {
  const metaDefault = {};
  if (key === DEFAULT_DYNAMIC_PARAMS_KEY) {
    return metaDefault;
  }
  const meta = route.meta ;
  if (isRef(meta)) {
    return meta.value[key] || metaDefault;
  } else {
    return meta[key] || metaDefault;
  }
}
function switchLocalePath(locale) {
  const route = this.route;
  const name = getRouteBaseName.call(this, route);
  if (!name) {
    return "";
  }
  const { switchLocalePathIntercepter, dynamicRouteParamsKey } = getI18nRoutingOptions(this.router, this);
  const { params, ...routeCopy } = route ;
  const langSwitchParams = getLocalizableMetaFromDynamicParams(route, dynamicRouteParamsKey)[locale] || {};
  const _baseRoute = {
    name,
    params: {
      ...params,
      ...langSwitchParams
    }
  };
  const baseRoute = assign({}, routeCopy, _baseRoute);
  let path = localePath.call(this, baseRoute, locale);
  path = switchLocalePathIntercepter(path, locale);
  return path;
}
function localeHead({ addDirAttribute = false, addSeoAttributes = false, identifierAttribute = "hid" } = {}) {
  const router = this.router;
  const i18n = this.i18n;
  const { defaultDirection } = getI18nRoutingOptions(router, this);
  const metaObject = {
    htmlAttrs: {},
    link: [],
    meta: []
  };
  if (i18n.locales == null || i18n.baseUrl == null) {
    return metaObject;
  }
  const locale = getLocale(i18n);
  const locales = getLocales(i18n);
  const currentLocale = getNormalizedLocales(locales).find((l) => l.code === locale) || {
    code: locale
  };
  const currentLocaleIso = currentLocale.iso;
  const currentLocaleDir = currentLocale.dir || defaultDirection;
  if (addDirAttribute) {
    metaObject.htmlAttrs.dir = currentLocaleDir;
  }
  if (addSeoAttributes && locale && i18n.locales) {
    if (currentLocaleIso) {
      metaObject.htmlAttrs.lang = currentLocaleIso;
    }
    addHreflangLinks.call(this, locales, unref(i18n.baseUrl), metaObject.link, identifierAttribute);
    addCanonicalLinks.call(this, unref(i18n.baseUrl), metaObject.link, identifierAttribute, addSeoAttributes);
    addCurrentOgLocale(currentLocale, currentLocaleIso, metaObject.meta, identifierAttribute);
    addAlternateOgLocales(locales, currentLocaleIso, metaObject.meta, identifierAttribute);
  }
  return metaObject;
}
function addHreflangLinks(locales, baseUrl, link, identifierAttribute) {
  const router = this.router;
  const { defaultLocale, strategy } = getI18nRoutingOptions(router, this);
  if (strategy === STRATEGIES.NO_PREFIX) {
    return;
  }
  const localeMap = /* @__PURE__ */ new Map();
  for (const locale of locales) {
    const localeIso = locale.iso;
    if (!localeIso) {
      warn("Locale ISO code is required to generate alternate link");
      continue;
    }
    const [language, region] = localeIso.split("-");
    if (language && region && (locale.isCatchallLocale || !localeMap.has(language))) {
      localeMap.set(language, locale);
    }
    localeMap.set(localeIso, locale);
  }
  for (const [iso, mapLocale] of localeMap.entries()) {
    const localePath2 = switchLocalePath.call(this, mapLocale.code);
    if (localePath2) {
      link.push({
        [identifierAttribute]: `i18n-alt-${iso}`,
        rel: "alternate",
        href: toAbsoluteUrl(localePath2, baseUrl),
        hreflang: iso
      });
    }
  }
  if (defaultLocale) {
    const localePath2 = switchLocalePath.call(this, defaultLocale);
    if (localePath2) {
      link.push({
        [identifierAttribute]: "i18n-xd",
        rel: "alternate",
        href: toAbsoluteUrl(localePath2, baseUrl),
        hreflang: "x-default"
      });
    }
  }
}
function addCanonicalLinks(baseUrl, link, identifierAttribute, seoAttributesOptions) {
  const route = this.route;
  const currentRoute = localeRoute.call(this, {
    ...route,
    name: getRouteBaseName.call(this, route)
  });
  if (currentRoute) {
    let href = toAbsoluteUrl(currentRoute.path, baseUrl);
    const canonicalQueries = isObject(seoAttributesOptions) && seoAttributesOptions.canonicalQueries || [];
    if (canonicalQueries.length) {
      const currentRouteQueryParams = currentRoute.query;
      const params = new URLSearchParams();
      for (const queryParamName of canonicalQueries) {
        if (queryParamName in currentRouteQueryParams) {
          const queryParamValue = currentRouteQueryParams[queryParamName];
          if (isArray(queryParamValue)) {
            queryParamValue.forEach((v) => params.append(queryParamName, v || ""));
          } else {
            params.append(queryParamName, queryParamValue || "");
          }
        }
      }
      const queryString = params.toString();
      if (queryString) {
        href = `${href}?${queryString}`;
      }
    }
    link.push({
      [identifierAttribute]: "i18n-can",
      rel: "canonical",
      href
    });
  }
}
function addCurrentOgLocale(currentLocale, currentLocaleIso, meta, identifierAttribute) {
  const hasCurrentLocaleAndIso = currentLocale && currentLocaleIso;
  if (!hasCurrentLocaleAndIso) {
    return;
  }
  meta.push({
    [identifierAttribute]: "i18n-og",
    property: "og:locale",
    content: hypenToUnderscore(currentLocaleIso)
  });
}
function addAlternateOgLocales(locales, currentLocaleIso, meta, identifierAttribute) {
  const localesWithoutCurrent = locales.filter((locale) => {
    const localeIso = locale.iso;
    return localeIso && localeIso !== currentLocaleIso;
  });
  if (localesWithoutCurrent.length) {
    const alternateLocales = localesWithoutCurrent.map((locale) => ({
      [identifierAttribute]: `i18n-og-alt-${locale.iso}`,
      property: "og:locale:alternate",
      content: hypenToUnderscore(locale.iso)
    }));
    meta.push(...alternateLocales);
  }
}
function hypenToUnderscore(str) {
  return (str || "").replace(/-/g, "_");
}
function toAbsoluteUrl(urlOrPath, baseUrl) {
  if (urlOrPath.match(/^https?:\/\//)) {
    return urlOrPath;
  }
  return baseUrl + urlOrPath;
}
function proxyForComposable(options, target) {
  const {
    router,
    route,
    i18n,
    defaultLocale,
    strategy,
    defaultLocaleRouteNameSuffix,
    trailingSlash,
    routesNameSeparator
  } = options;
  return function(...args) {
    return Reflect.apply(
      target,
      {
        router,
        route,
        i18n,
        defaultLocale,
        strategy,
        defaultLocaleRouteNameSuffix,
        trailingSlash,
        routesNameSeparator
      },
      args
    );
  };
}
function useSwitchLocalePath({
  router = useRouter$1(),
  route = useRoute$1(),
  i18n = useI18n(),
  defaultLocale = void 0,
  defaultLocaleRouteNameSuffix = void 0,
  routesNameSeparator = void 0,
  strategy = void 0,
  trailingSlash = void 0
} = {}) {
  return proxyForComposable(
    {
      router,
      route,
      i18n,
      defaultLocale,
      defaultLocaleRouteNameSuffix,
      routesNameSeparator,
      strategy,
      trailingSlash
    },
    switchLocalePath
  );
}

const localeCodes = ["ar-EG","ca-ES","ca-valencia","cs-CZ","de-DE","en-GB","en-US","es-419","es-ES","eu-ES","fi-FI","fr-FR","gl-ES","id-ID","it-IT","ja-JP","ko-KR","nl-NL","pl-PL","pt-BR","pt-PT","ru-RU","th-TH","tl-PH","tr-TR","uk-UA","vi-VN","zh-CN","zh-TW"];

const localeMessages = {
  "ar-EG": [{ key: "../locales/ar.json", load: () => import('./_nuxt/ar-0c1140ce.mjs' /* webpackChunkName: "lang_ar_json_ar_json" */) },{ key: "../locales/ar-EG.json", load: () => import('./_nuxt/ar-EG-bc96d916.mjs' /* webpackChunkName: "lang_ar_EG_json_ar_EG_json" */) }],
  "ca-ES": [{ key: "../locales/ca.json", load: () => import('./_nuxt/ca-7e21265e.mjs' /* webpackChunkName: "lang_ca_json_ca_json" */) },{ key: "../locales/ca-ES.json", load: () => import('./_nuxt/ca-ES-c3cde38f.mjs' /* webpackChunkName: "lang_ca_ES_json_ca_ES_json" */) }],
  "ca-valencia": [{ key: "../locales/ca.json", load: () => import('./_nuxt/ca-7e21265e.mjs' /* webpackChunkName: "lang_ca_json_ca_json" */) },{ key: "../locales/ca-valencia.json", load: () => import('./_nuxt/ca-valencia-e38eb206.mjs' /* webpackChunkName: "lang_ca_valencia_json_ca_valencia_json" */) }],
  "cs-CZ": [{ key: "../locales/cs-CZ.json", load: () => import('./_nuxt/cs-CZ-8b854c3b.mjs' /* webpackChunkName: "lang_cs_CZ_json_cs_CZ_json" */) }],
  "de-DE": [{ key: "../locales/de-DE.json", load: () => import('./_nuxt/de-DE-4a21bc62.mjs' /* webpackChunkName: "lang_de_DE_json_de_DE_json" */) }],
  "en-GB": [{ key: "../locales/en.json", load: () => import('./_nuxt/en-5a5af342.mjs' /* webpackChunkName: "lang_en_json_en_json" */) },{ key: "../locales/en-GB.json", load: () => import('./_nuxt/en-GB-9d60e67f.mjs' /* webpackChunkName: "lang_en_GB_json_en_GB_json" */) }],
  "en-US": [{ key: "../locales/en.json", load: () => import('./_nuxt/en-5a5af342.mjs' /* webpackChunkName: "lang_en_json_en_json" */) },{ key: "../locales/en-US.json", load: () => import('./_nuxt/en-US-02819394.mjs' /* webpackChunkName: "lang_en_US_json_en_US_json" */) }],
  "es-419": [{ key: "../locales/es.json", load: () => import('./_nuxt/es-55777abc.mjs' /* webpackChunkName: "lang_es_json_es_json" */) },{ key: "../locales/es-419.json", load: () => import('./_nuxt/es-419-169450d6.mjs' /* webpackChunkName: "lang_es_419_json_es_419_json" */) }],
  "es-ES": [{ key: "../locales/es.json", load: () => import('./_nuxt/es-55777abc.mjs' /* webpackChunkName: "lang_es_json_es_json" */) },{ key: "../locales/es-ES.json", load: () => import('./_nuxt/es-ES-9528f4ad.mjs' /* webpackChunkName: "lang_es_ES_json_es_ES_json" */) }],
  "eu-ES": [{ key: "../locales/eu-ES.json", load: () => import('./_nuxt/eu-ES-add575fb.mjs' /* webpackChunkName: "lang_eu_ES_json_eu_ES_json" */) }],
  "fi-FI": [{ key: "../locales/fi-FI.json", load: () => import('./_nuxt/fi-FI-4b2662d8.mjs' /* webpackChunkName: "lang_fi_FI_json_fi_FI_json" */) }],
  "fr-FR": [{ key: "../locales/fr-FR.json", load: () => import('./_nuxt/fr-FR-c7b663e2.mjs' /* webpackChunkName: "lang_fr_FR_json_fr_FR_json" */) }],
  "gl-ES": [{ key: "../locales/gl-ES.json", load: () => import('./_nuxt/gl-ES-e5854ccd.mjs' /* webpackChunkName: "lang_gl_ES_json_gl_ES_json" */) }],
  "id-ID": [{ key: "../locales/id-ID.json", load: () => import('./_nuxt/id-ID-f415c993.mjs' /* webpackChunkName: "lang_id_ID_json_id_ID_json" */) }],
  "it-IT": [{ key: "../locales/it-IT.json", load: () => import('./_nuxt/it-IT-878321b9.mjs' /* webpackChunkName: "lang_it_IT_json_it_IT_json" */) }],
  "ja-JP": [{ key: "../locales/ja-JP.json", load: () => import('./_nuxt/ja-JP-b2b3ee8c.mjs' /* webpackChunkName: "lang_ja_JP_json_ja_JP_json" */) }],
  "ko-KR": [{ key: "../locales/ko-KR.json", load: () => import('./_nuxt/ko-KR-2b57b81f.mjs' /* webpackChunkName: "lang_ko_KR_json_ko_KR_json" */) }],
  "nl-NL": [{ key: "../locales/nl-NL.json", load: () => import('./_nuxt/nl-NL-7b0d2e66.mjs' /* webpackChunkName: "lang_nl_NL_json_nl_NL_json" */) }],
  "pl-PL": [{ key: "../locales/pl-PL.json", load: () => import('./_nuxt/pl-PL-85cf3e6b.mjs' /* webpackChunkName: "lang_pl_PL_json_pl_PL_json" */) }],
  "pt-BR": [{ key: "../locales/pt.json", load: () => import('./_nuxt/pt-94c2a29c.mjs' /* webpackChunkName: "lang_pt_json_pt_json" */) },{ key: "../locales/pt-BR.json", load: () => import('./_nuxt/pt-BR-170f8136.mjs' /* webpackChunkName: "lang_pt_BR_json_pt_BR_json" */) }],
  "pt-PT": [{ key: "../locales/pt.json", load: () => import('./_nuxt/pt-94c2a29c.mjs' /* webpackChunkName: "lang_pt_json_pt_json" */) },{ key: "../locales/pt-PT.json", load: () => import('./_nuxt/pt-PT-af272fb4.mjs' /* webpackChunkName: "lang_pt_PT_json_pt_PT_json" */) }],
  "ru-RU": [{ key: "../locales/ru-RU.json", load: () => import('./_nuxt/ru-RU-1f492860.mjs' /* webpackChunkName: "lang_ru_RU_json_ru_RU_json" */) }],
  "th-TH": [{ key: "../locales/th-TH.json", load: () => import('./_nuxt/th-TH-2236aabb.mjs' /* webpackChunkName: "lang_th_TH_json_th_TH_json" */) }],
  "tl-PH": [{ key: "../locales/tl-PH.json", load: () => import('./_nuxt/tl-PH-a73699d0.mjs' /* webpackChunkName: "lang_tl_PH_json_tl_PH_json" */) }],
  "tr-TR": [{ key: "../locales/tr-TR.json", load: () => import('./_nuxt/tr-TR-8a65d1bf.mjs' /* webpackChunkName: "lang_tr_TR_json_tr_TR_json" */) }],
  "uk-UA": [{ key: "../locales/uk-UA.json", load: () => import('./_nuxt/uk-UA-6fed2ccb.mjs' /* webpackChunkName: "lang_uk_UA_json_uk_UA_json" */) }],
  "vi-VN": [{ key: "../locales/vi-VN.json", load: () => import('./_nuxt/vi-VN-d593cebf.mjs' /* webpackChunkName: "lang_vi_VN_json_vi_VN_json" */) }],
  "zh-CN": [{ key: "../locales/zh-CN.json", load: () => import('./_nuxt/zh-CN-5780a092.mjs' /* webpackChunkName: "lang_zh_CN_json_zh_CN_json" */) }],
  "zh-TW": [{ key: "../locales/zh-TW.json", load: () => import('./_nuxt/zh-TW-2f4ad73c.mjs' /* webpackChunkName: "lang_zh_TW_json_zh_TW_json" */) }],
};

const additionalMessages = Object({"ar-EG":[],"ca-ES":[],"ca-valencia":[],"cs-CZ":[],"de-DE":[],"en-GB":[],"en-US":[],"es-419":[],"es-ES":[],"eu-ES":[],"fi-FI":[],"fr-FR":[],"gl-ES":[],"id-ID":[],"it-IT":[],"ja-JP":[],"ko-KR":[],"nl-NL":[],"pl-PL":[],"pt-BR":[],"pt-PT":[],"ru-RU":[],"th-TH":[],"tl-PH":[],"tr-TR":[],"uk-UA":[],"vi-VN":[],"zh-CN":[],"zh-TW":[],});

const resolveNuxtI18nOptions = async (context) => {
  const nuxtI18nOptions = Object({});
  const vueI18nOptionsLoader = async (context) => Object({"availableLocales":["ar-EG","ca-ES","ca-valencia","cs-CZ","de-DE","en-GB","en-US","es-419","es-ES","eu-ES","fi-FI","fr-FR","gl-ES","id-ID","it-IT","ja-JP","ko-KR","nl-NL","pl-PL","pt-BR","pt-PT","ru-RU","th-TH","tl-PH","tr-TR","uk-UA","vi-VN","zh-CN","zh-TW"],"fallbackLocale":"en-US","fallbackWarn":false,"missingWarn":false,"datetimeFormats":Object({"ar-EG":Object({"shortDate":Object({"dateStyle":"short"}),"short":Object({"dateStyle":"short","timeStyle":"short"}),"long":Object({"dateStyle":"long","timeStyle":"medium"})}),"ca-ES":Object({"shortDate":Object({"dateStyle":"short"}),"short":Object({"dateStyle":"short","timeStyle":"short"}),"long":Object({"dateStyle":"long","timeStyle":"medium"})}),"ca-valencia":Object({"shortDate":Object({"dateStyle":"short"}),"short":Object({"dateStyle":"short","timeStyle":"short"}),"long":Object({"dateStyle":"long","timeStyle":"medium"})}),"cs-CZ":Object({"shortDate":Object({"dateStyle":"short"}),"short":Object({"dateStyle":"short","timeStyle":"short"}),"long":Object({"dateStyle":"long","timeStyle":"medium"})}),"de-DE":Object({"shortDate":Object({"dateStyle":"short"}),"short":Object({"dateStyle":"short","timeStyle":"short"}),"long":Object({"dateStyle":"long","timeStyle":"medium"})}),"en-GB":Object({"shortDate":Object({"dateStyle":"short"}),"short":Object({"dateStyle":"short","timeStyle":"short"}),"long":Object({"dateStyle":"long","timeStyle":"medium"})}),"en-US":Object({"shortDate":Object({"dateStyle":"short"}),"short":Object({"dateStyle":"short","timeStyle":"short"}),"long":Object({"dateStyle":"long","timeStyle":"medium"})}),"es-419":Object({"shortDate":Object({"dateStyle":"short"}),"short":Object({"dateStyle":"short","timeStyle":"short"}),"long":Object({"dateStyle":"long","timeStyle":"medium"})}),"es-ES":Object({"shortDate":Object({"dateStyle":"short"}),"short":Object({"dateStyle":"short","timeStyle":"short"}),"long":Object({"dateStyle":"long","timeStyle":"medium"})}),"eu-ES":Object({"shortDate":Object({"dateStyle":"short"}),"short":Object({"dateStyle":"short","timeStyle":"short"}),"long":Object({"dateStyle":"long","timeStyle":"medium"})}),"fi-FI":Object({"shortDate":Object({"dateStyle":"short"}),"short":Object({"dateStyle":"short","timeStyle":"short"}),"long":Object({"dateStyle":"long","timeStyle":"medium"})}),"fr-FR":Object({"shortDate":Object({"dateStyle":"short"}),"short":Object({"dateStyle":"short","timeStyle":"short"}),"long":Object({"dateStyle":"long","timeStyle":"medium"})}),"gl-ES":Object({"shortDate":Object({"dateStyle":"short"}),"short":Object({"dateStyle":"short","timeStyle":"short"}),"long":Object({"dateStyle":"long","timeStyle":"medium"})}),"id-ID":Object({"shortDate":Object({"dateStyle":"short"}),"short":Object({"dateStyle":"short","timeStyle":"short"}),"long":Object({"dateStyle":"long","timeStyle":"medium"})}),"it-IT":Object({"shortDate":Object({"dateStyle":"short"}),"short":Object({"dateStyle":"short","timeStyle":"short"}),"long":Object({"dateStyle":"long","timeStyle":"medium"})}),"ja-JP":Object({"shortDate":Object({"dateStyle":"short"}),"short":Object({"dateStyle":"short","timeStyle":"short"}),"long":Object({"dateStyle":"long","timeStyle":"medium"})}),"ko-KR":Object({"shortDate":Object({"dateStyle":"short"}),"short":Object({"dateStyle":"short","timeStyle":"short"}),"long":Object({"dateStyle":"long","timeStyle":"medium"})}),"nl-NL":Object({"shortDate":Object({"dateStyle":"short"}),"short":Object({"dateStyle":"short","timeStyle":"short"}),"long":Object({"dateStyle":"long","timeStyle":"medium"})}),"pl-PL":Object({"shortDate":Object({"dateStyle":"short"}),"short":Object({"dateStyle":"short","timeStyle":"short"}),"long":Object({"dateStyle":"long","timeStyle":"medium"})}),"pt-BR":Object({"shortDate":Object({"dateStyle":"short"}),"short":Object({"dateStyle":"short","timeStyle":"short"}),"long":Object({"dateStyle":"long","timeStyle":"medium"})}),"pt-PT":Object({"shortDate":Object({"dateStyle":"short"}),"short":Object({"dateStyle":"short","timeStyle":"short"}),"long":Object({"dateStyle":"long","timeStyle":"medium"})}),"ru-RU":Object({"shortDate":Object({"dateStyle":"short"}),"short":Object({"dateStyle":"short","timeStyle":"short"}),"long":Object({"dateStyle":"long","timeStyle":"medium"})}),"th-TH":Object({"shortDate":Object({"dateStyle":"short"}),"short":Object({"dateStyle":"short","timeStyle":"short"}),"long":Object({"dateStyle":"long","timeStyle":"medium"})}),"tl-PH":Object({"shortDate":Object({"dateStyle":"short"}),"short":Object({"dateStyle":"short","timeStyle":"short"}),"long":Object({"dateStyle":"long","timeStyle":"medium"})}),"tr-TR":Object({"shortDate":Object({"dateStyle":"short"}),"short":Object({"dateStyle":"short","timeStyle":"short"}),"long":Object({"dateStyle":"long","timeStyle":"medium"})}),"uk-UA":Object({"shortDate":Object({"dateStyle":"short"}),"short":Object({"dateStyle":"short","timeStyle":"short"}),"long":Object({"dateStyle":"long","timeStyle":"medium"})}),"vi-VN":Object({"shortDate":Object({"dateStyle":"short"}),"short":Object({"dateStyle":"short","timeStyle":"short"}),"long":Object({"dateStyle":"long","timeStyle":"medium"})}),"zh-CN":Object({"shortDate":Object({"dateStyle":"short"}),"short":Object({"dateStyle":"short","timeStyle":"short"}),"long":Object({"dateStyle":"long","timeStyle":"medium"})}),"zh-TW":Object({"shortDate":Object({"dateStyle":"short"}),"short":Object({"dateStyle":"short","timeStyle":"short"}),"long":Object({"dateStyle":"long","timeStyle":"medium"})})}),"numberFormats":Object({"ar-EG":Object({"percentage":Object({"style":"percent","maximumFractionDigits":1}),"smallCounting":Object({"style":"decimal","maximumFractionDigits":0}),"kiloCounting":Object({"notation":"compact","compactDisplay":"short","maximumFractionDigits":1}),"millionCounting":Object({"notation":"compact","compactDisplay":"short","maximumFractionDigits":2})}),"ca-ES":Object({"percentage":Object({"style":"percent","maximumFractionDigits":1}),"smallCounting":Object({"style":"decimal","maximumFractionDigits":0}),"kiloCounting":Object({"notation":"compact","compactDisplay":"short","maximumFractionDigits":1}),"millionCounting":Object({"notation":"compact","compactDisplay":"short","maximumFractionDigits":2})}),"ca-valencia":Object({"percentage":Object({"style":"percent","maximumFractionDigits":1}),"smallCounting":Object({"style":"decimal","maximumFractionDigits":0}),"kiloCounting":Object({"notation":"compact","compactDisplay":"short","maximumFractionDigits":1}),"millionCounting":Object({"notation":"compact","compactDisplay":"short","maximumFractionDigits":2})}),"cs-CZ":Object({"percentage":Object({"style":"percent","maximumFractionDigits":1}),"smallCounting":Object({"style":"decimal","maximumFractionDigits":0}),"kiloCounting":Object({"notation":"compact","compactDisplay":"short","maximumFractionDigits":1}),"millionCounting":Object({"notation":"compact","compactDisplay":"short","maximumFractionDigits":2})}),"de-DE":Object({"percentage":Object({"style":"percent","maximumFractionDigits":1}),"smallCounting":Object({"style":"decimal","maximumFractionDigits":0}),"kiloCounting":Object({"notation":"compact","compactDisplay":"short","maximumFractionDigits":1}),"millionCounting":Object({"notation":"compact","compactDisplay":"short","maximumFractionDigits":2})}),"en-GB":Object({"percentage":Object({"style":"percent","maximumFractionDigits":1}),"smallCounting":Object({"style":"decimal","maximumFractionDigits":0}),"kiloCounting":Object({"notation":"compact","compactDisplay":"short","maximumFractionDigits":1}),"millionCounting":Object({"notation":"compact","compactDisplay":"short","maximumFractionDigits":2})}),"en-US":Object({"percentage":Object({"style":"percent","maximumFractionDigits":1}),"smallCounting":Object({"style":"decimal","maximumFractionDigits":0}),"kiloCounting":Object({"notation":"compact","compactDisplay":"short","maximumFractionDigits":1}),"millionCounting":Object({"notation":"compact","compactDisplay":"short","maximumFractionDigits":2})}),"es-419":Object({"percentage":Object({"style":"percent","maximumFractionDigits":1}),"smallCounting":Object({"style":"decimal","maximumFractionDigits":0}),"kiloCounting":Object({"notation":"compact","compactDisplay":"short","maximumFractionDigits":1}),"millionCounting":Object({"notation":"compact","compactDisplay":"short","maximumFractionDigits":2})}),"es-ES":Object({"percentage":Object({"style":"percent","maximumFractionDigits":1}),"smallCounting":Object({"style":"decimal","maximumFractionDigits":0}),"kiloCounting":Object({"notation":"compact","compactDisplay":"short","maximumFractionDigits":1}),"millionCounting":Object({"notation":"compact","compactDisplay":"short","maximumFractionDigits":2})}),"eu-ES":Object({"percentage":Object({"style":"percent","maximumFractionDigits":1}),"smallCounting":Object({"style":"decimal","maximumFractionDigits":0}),"kiloCounting":Object({"notation":"compact","compactDisplay":"short","maximumFractionDigits":1}),"millionCounting":Object({"notation":"compact","compactDisplay":"short","maximumFractionDigits":2})}),"fi-FI":Object({"percentage":Object({"style":"percent","maximumFractionDigits":1}),"smallCounting":Object({"style":"decimal","maximumFractionDigits":0}),"kiloCounting":Object({"notation":"compact","compactDisplay":"short","maximumFractionDigits":1}),"millionCounting":Object({"notation":"compact","compactDisplay":"short","maximumFractionDigits":2})}),"fr-FR":Object({"percentage":Object({"style":"percent","maximumFractionDigits":1}),"smallCounting":Object({"style":"decimal","maximumFractionDigits":0}),"kiloCounting":Object({"notation":"compact","compactDisplay":"short","maximumFractionDigits":1}),"millionCounting":Object({"notation":"compact","compactDisplay":"short","maximumFractionDigits":2})}),"gl-ES":Object({"percentage":Object({"style":"percent","maximumFractionDigits":1}),"smallCounting":Object({"style":"decimal","maximumFractionDigits":0}),"kiloCounting":Object({"notation":"compact","compactDisplay":"short","maximumFractionDigits":1}),"millionCounting":Object({"notation":"compact","compactDisplay":"short","maximumFractionDigits":2})}),"id-ID":Object({"percentage":Object({"style":"percent","maximumFractionDigits":1}),"smallCounting":Object({"style":"decimal","maximumFractionDigits":0}),"kiloCounting":Object({"notation":"compact","compactDisplay":"short","maximumFractionDigits":1}),"millionCounting":Object({"notation":"compact","compactDisplay":"short","maximumFractionDigits":2})}),"it-IT":Object({"percentage":Object({"style":"percent","maximumFractionDigits":1}),"smallCounting":Object({"style":"decimal","maximumFractionDigits":0}),"kiloCounting":Object({"notation":"compact","compactDisplay":"short","maximumFractionDigits":1}),"millionCounting":Object({"notation":"compact","compactDisplay":"short","maximumFractionDigits":2})}),"ja-JP":Object({"percentage":Object({"style":"percent","maximumFractionDigits":1}),"smallCounting":Object({"style":"decimal","maximumFractionDigits":0}),"kiloCounting":Object({"notation":"compact","compactDisplay":"short","maximumFractionDigits":1}),"millionCounting":Object({"notation":"compact","compactDisplay":"short","maximumFractionDigits":2})}),"ko-KR":Object({"percentage":Object({"style":"percent","maximumFractionDigits":1}),"smallCounting":Object({"style":"decimal","maximumFractionDigits":0}),"kiloCounting":Object({"notation":"compact","compactDisplay":"short","maximumFractionDigits":1}),"millionCounting":Object({"notation":"compact","compactDisplay":"short","maximumFractionDigits":2})}),"nl-NL":Object({"percentage":Object({"style":"percent","maximumFractionDigits":1}),"smallCounting":Object({"style":"decimal","maximumFractionDigits":0}),"kiloCounting":Object({"notation":"compact","compactDisplay":"short","maximumFractionDigits":1}),"millionCounting":Object({"notation":"compact","compactDisplay":"short","maximumFractionDigits":2})}),"pl-PL":Object({"percentage":Object({"style":"percent","maximumFractionDigits":1}),"smallCounting":Object({"style":"decimal","maximumFractionDigits":0}),"kiloCounting":Object({"notation":"compact","compactDisplay":"short","maximumFractionDigits":1}),"millionCounting":Object({"notation":"compact","compactDisplay":"short","maximumFractionDigits":2})}),"pt-BR":Object({"percentage":Object({"style":"percent","maximumFractionDigits":1}),"smallCounting":Object({"style":"decimal","maximumFractionDigits":0}),"kiloCounting":Object({"notation":"compact","compactDisplay":"short","maximumFractionDigits":1}),"millionCounting":Object({"notation":"compact","compactDisplay":"short","maximumFractionDigits":2})}),"pt-PT":Object({"percentage":Object({"style":"percent","maximumFractionDigits":1}),"smallCounting":Object({"style":"decimal","maximumFractionDigits":0}),"kiloCounting":Object({"notation":"compact","compactDisplay":"short","maximumFractionDigits":1}),"millionCounting":Object({"notation":"compact","compactDisplay":"short","maximumFractionDigits":2})}),"ru-RU":Object({"percentage":Object({"style":"percent","maximumFractionDigits":1}),"smallCounting":Object({"style":"decimal","maximumFractionDigits":0}),"kiloCounting":Object({"notation":"compact","compactDisplay":"short","maximumFractionDigits":1}),"millionCounting":Object({"notation":"compact","compactDisplay":"short","maximumFractionDigits":2})}),"th-TH":Object({"percentage":Object({"style":"percent","maximumFractionDigits":1}),"smallCounting":Object({"style":"decimal","maximumFractionDigits":0}),"kiloCounting":Object({"notation":"compact","compactDisplay":"short","maximumFractionDigits":1}),"millionCounting":Object({"notation":"compact","compactDisplay":"short","maximumFractionDigits":2})}),"tl-PH":Object({"percentage":Object({"style":"percent","maximumFractionDigits":1}),"smallCounting":Object({"style":"decimal","maximumFractionDigits":0}),"kiloCounting":Object({"notation":"compact","compactDisplay":"short","maximumFractionDigits":1}),"millionCounting":Object({"notation":"compact","compactDisplay":"short","maximumFractionDigits":2})}),"tr-TR":Object({"percentage":Object({"style":"percent","maximumFractionDigits":1}),"smallCounting":Object({"style":"decimal","maximumFractionDigits":0}),"kiloCounting":Object({"notation":"compact","compactDisplay":"short","maximumFractionDigits":1}),"millionCounting":Object({"notation":"compact","compactDisplay":"short","maximumFractionDigits":2})}),"uk-UA":Object({"percentage":Object({"style":"percent","maximumFractionDigits":1}),"smallCounting":Object({"style":"decimal","maximumFractionDigits":0}),"kiloCounting":Object({"notation":"compact","compactDisplay":"short","maximumFractionDigits":1}),"millionCounting":Object({"notation":"compact","compactDisplay":"short","maximumFractionDigits":2})}),"vi-VN":Object({"percentage":Object({"style":"percent","maximumFractionDigits":1}),"smallCounting":Object({"style":"decimal","maximumFractionDigits":0}),"kiloCounting":Object({"notation":"compact","compactDisplay":"short","maximumFractionDigits":1}),"millionCounting":Object({"notation":"compact","compactDisplay":"short","maximumFractionDigits":2})}),"zh-CN":Object({"percentage":Object({"style":"percent","maximumFractionDigits":1}),"smallCounting":Object({"style":"decimal","maximumFractionDigits":0}),"kiloCounting":Object({"notation":"compact","compactDisplay":"short","maximumFractionDigits":1}),"millionCounting":Object({"notation":"compact","compactDisplay":"short","maximumFractionDigits":2})}),"zh-TW":Object({"percentage":Object({"style":"percent","maximumFractionDigits":1}),"smallCounting":Object({"style":"decimal","maximumFractionDigits":0}),"kiloCounting":Object({"notation":"compact","compactDisplay":"short","maximumFractionDigits":1}),"millionCounting":Object({"notation":"compact","compactDisplay":"short","maximumFractionDigits":2})})}),"pluralRules":Object({"ar-EG":((choice) => {
    const name = new Intl.PluralRules('ar-EG').select(choice);
    return { zero: 0, one: 1, two: 2, few: 3, many: 4, other: 5 }[name];
  }),"pl-PL":((choice) => {
    if (choice === 0)
    return 0;

    const name = new Intl.PluralRules('pl-PL').select(choice);
    return { zero: 0, one: 1, two: 0 /* not used */, few: 2, many: 3, other: 4 }[name];
  }),"ru-RU":((choice) => {
    const name = new Intl.PluralRules('ru-RU').select(choice);
    return { zero: 2 /* not used */, one: 0, two: 1 /* not used */, few: 1, many: 2, other: 3 }[name];
  }),"uk-UA":((choice) => {
    if (choice === 0)
    return 0;

    const name = new Intl.PluralRules('uk-UA').select(choice);
    return { zero: 0, one: 1, two: 0 /* not used */, few: 2, many: 3, other: 4 }[name];
  })}),"messages": Object({}),});
  nuxtI18nOptions.vueI18n = await vueI18nOptionsLoader();
  nuxtI18nOptions.locales = [Object({"code":"ar-EG","name":"العربية","dir":"rtl","files":["ar.json","ar-EG.json"],"paths":["/Volumes/WD10EZEX HD/GitHub/elk/locales/ar.json","/Volumes/WD10EZEX HD/GitHub/elk/locales/ar-EG.json"]}),Object({"code":"ca-ES","name":"Català (Espanya)","files":["ca.json","ca-ES.json"],"paths":["/Volumes/WD10EZEX HD/GitHub/elk/locales/ca.json","/Volumes/WD10EZEX HD/GitHub/elk/locales/ca-ES.json"]}),Object({"code":"ca-valencia","name":"Català (valencià)","files":["ca.json","ca-valencia.json"],"paths":["/Volumes/WD10EZEX HD/GitHub/elk/locales/ca.json","/Volumes/WD10EZEX HD/GitHub/elk/locales/ca-valencia.json"]}),Object({"code":"cs-CZ","file":"cs-CZ.json","name":"Česky","path":"/Volumes/WD10EZEX HD/GitHub/elk/locales/cs-CZ.json"}),Object({"code":"de-DE","file":"de-DE.json","name":"Deutsch","path":"/Volumes/WD10EZEX HD/GitHub/elk/locales/de-DE.json"}),Object({"code":"en-GB","name":"English (UK)","files":["en.json","en-GB.json"],"paths":["/Volumes/WD10EZEX HD/GitHub/elk/locales/en.json","/Volumes/WD10EZEX HD/GitHub/elk/locales/en-GB.json"]}),Object({"code":"en-US","name":"English (US)","files":["en.json","en-US.json"],"paths":["/Volumes/WD10EZEX HD/GitHub/elk/locales/en.json","/Volumes/WD10EZEX HD/GitHub/elk/locales/en-US.json"]}),Object({"code":"es-419","name":"Español (Latinoamérica)","files":["es.json","es-419.json"],"paths":["/Volumes/WD10EZEX HD/GitHub/elk/locales/es.json","/Volumes/WD10EZEX HD/GitHub/elk/locales/es-419.json"]}),Object({"code":"es-ES","name":"Español (España)","files":["es.json","es-ES.json"],"paths":["/Volumes/WD10EZEX HD/GitHub/elk/locales/es.json","/Volumes/WD10EZEX HD/GitHub/elk/locales/es-ES.json"]}),Object({"code":"eu-ES","file":"eu-ES.json","name":"Euskara","path":"/Volumes/WD10EZEX HD/GitHub/elk/locales/eu-ES.json"}),Object({"code":"fi-FI","file":"fi-FI.json","name":"suomeksi","path":"/Volumes/WD10EZEX HD/GitHub/elk/locales/fi-FI.json"}),Object({"code":"fr-FR","file":"fr-FR.json","name":"Français","path":"/Volumes/WD10EZEX HD/GitHub/elk/locales/fr-FR.json"}),Object({"code":"gl-ES","file":"gl-ES.json","name":"Galego","path":"/Volumes/WD10EZEX HD/GitHub/elk/locales/gl-ES.json"}),Object({"code":"id-ID","file":"id-ID.json","name":"Indonesia","path":"/Volumes/WD10EZEX HD/GitHub/elk/locales/id-ID.json"}),Object({"code":"it-IT","file":"it-IT.json","name":"Italiano","path":"/Volumes/WD10EZEX HD/GitHub/elk/locales/it-IT.json"}),Object({"code":"ja-JP","file":"ja-JP.json","name":"日本語","path":"/Volumes/WD10EZEX HD/GitHub/elk/locales/ja-JP.json"}),Object({"code":"ko-KR","file":"ko-KR.json","name":"한국어","path":"/Volumes/WD10EZEX HD/GitHub/elk/locales/ko-KR.json"}),Object({"code":"nl-NL","file":"nl-NL.json","name":"Nederlands","path":"/Volumes/WD10EZEX HD/GitHub/elk/locales/nl-NL.json"}),Object({"code":"pl-PL","file":"pl-PL.json","name":"Polski","path":"/Volumes/WD10EZEX HD/GitHub/elk/locales/pl-PL.json"}),Object({"code":"pt-BR","name":"Português (Brasil)","files":["pt.json","pt-BR.json"],"paths":["/Volumes/WD10EZEX HD/GitHub/elk/locales/pt.json","/Volumes/WD10EZEX HD/GitHub/elk/locales/pt-BR.json"]}),Object({"code":"pt-PT","name":"Português (Portugal)","files":["pt.json","pt-PT.json"],"paths":["/Volumes/WD10EZEX HD/GitHub/elk/locales/pt.json","/Volumes/WD10EZEX HD/GitHub/elk/locales/pt-PT.json"]}),Object({"code":"ru-RU","file":"ru-RU.json","name":"Русский","path":"/Volumes/WD10EZEX HD/GitHub/elk/locales/ru-RU.json"}),Object({"code":"th-TH","file":"th-TH.json","name":"ไทย","path":"/Volumes/WD10EZEX HD/GitHub/elk/locales/th-TH.json"}),Object({"code":"tl-PH","file":"tl-PH.json","name":"Tagalog","path":"/Volumes/WD10EZEX HD/GitHub/elk/locales/tl-PH.json"}),Object({"code":"tr-TR","file":"tr-TR.json","name":"Türkçe","path":"/Volumes/WD10EZEX HD/GitHub/elk/locales/tr-TR.json"}),Object({"code":"uk-UA","file":"uk-UA.json","name":"Українська","path":"/Volumes/WD10EZEX HD/GitHub/elk/locales/uk-UA.json"}),Object({"code":"vi-VN","file":"vi-VN.json","name":"Tiếng Việt","path":"/Volumes/WD10EZEX HD/GitHub/elk/locales/vi-VN.json"}),Object({"code":"zh-CN","file":"zh-CN.json","name":"简体中文","path":"/Volumes/WD10EZEX HD/GitHub/elk/locales/zh-CN.json"}),Object({"code":"zh-TW","file":"zh-TW.json","name":"繁體中文","path":"/Volumes/WD10EZEX HD/GitHub/elk/locales/zh-TW.json"})];
  nuxtI18nOptions.defaultLocale = "en-US";
  nuxtI18nOptions.defaultDirection = "ltr";
  nuxtI18nOptions.routesNameSeparator = "___";
  nuxtI18nOptions.trailingSlash = false;
  nuxtI18nOptions.defaultLocaleRouteNameSuffix = "default";
  nuxtI18nOptions.strategy = "no_prefix";
  nuxtI18nOptions.lazy = true;
  nuxtI18nOptions.langDir = "locales";
  nuxtI18nOptions.rootRedirect = null;
  nuxtI18nOptions.detectBrowserLanguage = false;
  nuxtI18nOptions.differentDomains = false;
  nuxtI18nOptions.baseUrl = "";
  nuxtI18nOptions.dynamicRouteParams = false;
  nuxtI18nOptions.customRoutes = "page";
  nuxtI18nOptions.pages = Object({});
  nuxtI18nOptions.skipSettingLocaleOnNavigate = false;
  nuxtI18nOptions.onBeforeLanguageSwitch = (() => "");
  nuxtI18nOptions.onLanguageSwitched = (() => null);
  nuxtI18nOptions.types = undefined;
  nuxtI18nOptions.debug = false;
  return nuxtI18nOptions
};

const nuxtI18nOptionsDefault = Object({vueI18n: undefined,locales: [],defaultLocale: "",defaultDirection: "ltr",routesNameSeparator: "___",trailingSlash: false,defaultLocaleRouteNameSuffix: "default",strategy: "prefix_except_default",lazy: false,langDir: null,rootRedirect: null,detectBrowserLanguage: Object({"alwaysRedirect":false,"cookieCrossOrigin":false,"cookieDomain":null,"cookieKey":"i18n_redirected","cookieSecure":false,"fallbackLocale":"","redirectOn":"root","useCookie":true}),differentDomains: false,baseUrl: "",dynamicRouteParams: false,customRoutes: "page",pages: Object({}),skipSettingLocaleOnNavigate: false,onBeforeLanguageSwitch: (() => ""),onLanguageSwitched: (() => null),types: undefined,debug: false});

const nuxtI18nInternalOptions = Object({__normalizedLocales: [Object({"code":"ar-EG","name":"العربية","dir":"rtl","files":["ar.json","ar-EG.json"],"paths":["/Volumes/WD10EZEX HD/GitHub/elk/locales/ar.json","/Volumes/WD10EZEX HD/GitHub/elk/locales/ar-EG.json"]}),Object({"code":"ca-ES","name":"Català (Espanya)","files":["ca.json","ca-ES.json"],"paths":["/Volumes/WD10EZEX HD/GitHub/elk/locales/ca.json","/Volumes/WD10EZEX HD/GitHub/elk/locales/ca-ES.json"]}),Object({"code":"ca-valencia","name":"Català (valencià)","files":["ca.json","ca-valencia.json"],"paths":["/Volumes/WD10EZEX HD/GitHub/elk/locales/ca.json","/Volumes/WD10EZEX HD/GitHub/elk/locales/ca-valencia.json"]}),Object({"code":"cs-CZ","file":"cs-CZ.json","name":"Česky","path":"/Volumes/WD10EZEX HD/GitHub/elk/locales/cs-CZ.json"}),Object({"code":"de-DE","file":"de-DE.json","name":"Deutsch","path":"/Volumes/WD10EZEX HD/GitHub/elk/locales/de-DE.json"}),Object({"code":"en-GB","name":"English (UK)","files":["en.json","en-GB.json"],"paths":["/Volumes/WD10EZEX HD/GitHub/elk/locales/en.json","/Volumes/WD10EZEX HD/GitHub/elk/locales/en-GB.json"]}),Object({"code":"en-US","name":"English (US)","files":["en.json","en-US.json"],"paths":["/Volumes/WD10EZEX HD/GitHub/elk/locales/en.json","/Volumes/WD10EZEX HD/GitHub/elk/locales/en-US.json"]}),Object({"code":"es-419","name":"Español (Latinoamérica)","files":["es.json","es-419.json"],"paths":["/Volumes/WD10EZEX HD/GitHub/elk/locales/es.json","/Volumes/WD10EZEX HD/GitHub/elk/locales/es-419.json"]}),Object({"code":"es-ES","name":"Español (España)","files":["es.json","es-ES.json"],"paths":["/Volumes/WD10EZEX HD/GitHub/elk/locales/es.json","/Volumes/WD10EZEX HD/GitHub/elk/locales/es-ES.json"]}),Object({"code":"eu-ES","file":"eu-ES.json","name":"Euskara","path":"/Volumes/WD10EZEX HD/GitHub/elk/locales/eu-ES.json"}),Object({"code":"fi-FI","file":"fi-FI.json","name":"suomeksi","path":"/Volumes/WD10EZEX HD/GitHub/elk/locales/fi-FI.json"}),Object({"code":"fr-FR","file":"fr-FR.json","name":"Français","path":"/Volumes/WD10EZEX HD/GitHub/elk/locales/fr-FR.json"}),Object({"code":"gl-ES","file":"gl-ES.json","name":"Galego","path":"/Volumes/WD10EZEX HD/GitHub/elk/locales/gl-ES.json"}),Object({"code":"id-ID","file":"id-ID.json","name":"Indonesia","path":"/Volumes/WD10EZEX HD/GitHub/elk/locales/id-ID.json"}),Object({"code":"it-IT","file":"it-IT.json","name":"Italiano","path":"/Volumes/WD10EZEX HD/GitHub/elk/locales/it-IT.json"}),Object({"code":"ja-JP","file":"ja-JP.json","name":"日本語","path":"/Volumes/WD10EZEX HD/GitHub/elk/locales/ja-JP.json"}),Object({"code":"ko-KR","file":"ko-KR.json","name":"한국어","path":"/Volumes/WD10EZEX HD/GitHub/elk/locales/ko-KR.json"}),Object({"code":"nl-NL","file":"nl-NL.json","name":"Nederlands","path":"/Volumes/WD10EZEX HD/GitHub/elk/locales/nl-NL.json"}),Object({"code":"pl-PL","file":"pl-PL.json","name":"Polski","path":"/Volumes/WD10EZEX HD/GitHub/elk/locales/pl-PL.json"}),Object({"code":"pt-BR","name":"Português (Brasil)","files":["pt.json","pt-BR.json"],"paths":["/Volumes/WD10EZEX HD/GitHub/elk/locales/pt.json","/Volumes/WD10EZEX HD/GitHub/elk/locales/pt-BR.json"]}),Object({"code":"pt-PT","name":"Português (Portugal)","files":["pt.json","pt-PT.json"],"paths":["/Volumes/WD10EZEX HD/GitHub/elk/locales/pt.json","/Volumes/WD10EZEX HD/GitHub/elk/locales/pt-PT.json"]}),Object({"code":"ru-RU","file":"ru-RU.json","name":"Русский","path":"/Volumes/WD10EZEX HD/GitHub/elk/locales/ru-RU.json"}),Object({"code":"th-TH","file":"th-TH.json","name":"ไทย","path":"/Volumes/WD10EZEX HD/GitHub/elk/locales/th-TH.json"}),Object({"code":"tl-PH","file":"tl-PH.json","name":"Tagalog","path":"/Volumes/WD10EZEX HD/GitHub/elk/locales/tl-PH.json"}),Object({"code":"tr-TR","file":"tr-TR.json","name":"Türkçe","path":"/Volumes/WD10EZEX HD/GitHub/elk/locales/tr-TR.json"}),Object({"code":"uk-UA","file":"uk-UA.json","name":"Українська","path":"/Volumes/WD10EZEX HD/GitHub/elk/locales/uk-UA.json"}),Object({"code":"vi-VN","file":"vi-VN.json","name":"Tiếng Việt","path":"/Volumes/WD10EZEX HD/GitHub/elk/locales/vi-VN.json"}),Object({"code":"zh-CN","file":"zh-CN.json","name":"简体中文","path":"/Volumes/WD10EZEX HD/GitHub/elk/locales/zh-CN.json"}),Object({"code":"zh-TW","file":"zh-TW.json","name":"繁體中文","path":"/Volumes/WD10EZEX HD/GitHub/elk/locales/zh-TW.json"})]});
const NUXT_I18N_MODULE_ID = "@nuxtjs/i18n";
const isSSG = false;

function formatMessage(message) {
  return NUXT_I18N_MODULE_ID + " " + message;
}
function isLegacyVueI18n(target) {
  return target != null && ("__VUE_I18N_BRIDGE__" in target || "_sync" in target);
}
function callVueI18nInterfaces(i18n, name, ...args) {
  const target = isI18nInstance(i18n) ? i18n.global : i18n;
  const [obj, method] = [target, target[name]];
  return Reflect.apply(method, obj, [...args]);
}
function getVueI18nPropertyValue(i18n, name) {
  const target = isI18nInstance(i18n) ? i18n.global : i18n;
  const ret = isComposer(target) ? target[name].value : isExportedGlobalComposer(target) || isVueI18n(target) || isLegacyVueI18n(target) ? target[name] : target[name];
  return ret;
}
function defineGetter(obj, key, val) {
  Object.defineProperty(obj, key, { get: () => val });
}
function proxyNuxt(nuxt, target) {
  return function() {
    return Reflect.apply(
      target,
      {
        i18n: nuxt.$i18n,
        getRouteBaseName: nuxt.$getRouteBaseName,
        localePath: nuxt.$localePath,
        localeRoute: nuxt.$localeRoute,
        switchLocalePath: nuxt.$switchLocalePath,
        localeHead: nuxt.$localeHead,
        route: nuxt.$router.currentRoute.value,
        router: nuxt.$router
      },
      // eslint-disable-next-line prefer-rest-params
      arguments
    );
  };
}
function parseAcceptLanguage(input) {
  return input.split(",").map((tag) => tag.split(";")[0]);
}
function deepCopy(src, des) {
  for (const key in src) {
    if (isObject$1(src[key])) {
      if (!isObject$1(des[key]))
        des[key] = {};
      deepCopy(src[key], des[key]);
    } else {
      des[key] = src[key];
    }
  }
}
async function loadMessage(context, loader) {
  let message = null;
  try {
    const getter = await loader().then((r) => r.default || r);
    if (isFunction$1(getter)) {
      console.error(formatMessage("Not support executable file (e.g. js, cjs, mjs)"));
    } else {
      message = getter;
    }
  } catch (e) {
    console.error(formatMessage("Failed locale loading: " + e.message));
  }
  return message;
}
const loadedMessages = /* @__PURE__ */ new Map();
async function loadLocale(context, locale, setter) {
  {
    const loaders = localeMessages[locale];
    if (loaders != null) {
      if (loaders.length === 1) {
        const { key, load } = loaders[0];
        let message = null;
        if (loadedMessages.has(key)) {
          message = loadedMessages.get(key);
        } else {
          message = await loadMessage(context, load);
          if (message != null) {
            loadedMessages.set(key, message);
          }
        }
        if (message != null) {
          setter(locale, message);
        }
      } else if (loaders.length > 1) {
        const targetMessage = {};
        for (const { key, load } of loaders) {
          let message = null;
          if (loadedMessages.has(key)) {
            message = loadedMessages.get(key);
          } else {
            message = await loadMessage(context, load);
            if (message != null) {
              loadedMessages.set(key, message);
            }
          }
          if (message != null) {
            deepCopy(message, targetMessage);
          }
        }
        setter(locale, targetMessage);
      }
    }
  }
}
async function loadAdditionalLocale(context, locale, merger) {
  {
    const additionalLoaders = additionalMessages[locale] || [];
    for (const additionalLoader of additionalLoaders) {
      const message = await loadMessage(context, additionalLoader);
      if (message != null) {
        merger(locale, message);
      }
    }
  }
}
function getBrowserLocale(options, context) {
  let ret;
  {
    const header = useRequestHeaders(["accept-language"]);
    const accept = header["accept-language"];
    if (accept) {
      ret = findBrowserLocale(options.__normalizedLocales, parseAcceptLanguage(accept));
    }
  }
  return ret;
}
function getLocaleCookie(context, {
  useCookie = nuxtI18nOptionsDefault.detectBrowserLanguage.useCookie,
  cookieKey = nuxtI18nOptionsDefault.detectBrowserLanguage.cookieKey,
  localeCodes = []
} = {}) {
  if (useCookie) {
    let localeCode;
    {
      const cookie = useRequestHeaders(["cookie"]);
      if ("cookie" in cookie) {
        const parsedCookie = parse$1(cookie["cookie"]);
        localeCode = parsedCookie[cookieKey];
      }
    }
    if (localeCode && localeCodes.includes(localeCode)) {
      return localeCode;
    }
  }
}
function setLocaleCookie(locale, context, {
  useCookie = nuxtI18nOptionsDefault.detectBrowserLanguage.useCookie,
  cookieKey = nuxtI18nOptionsDefault.detectBrowserLanguage.cookieKey,
  cookieDomain = nuxtI18nOptionsDefault.detectBrowserLanguage.cookieDomain,
  cookieSecure = nuxtI18nOptionsDefault.detectBrowserLanguage.cookieSecure,
  cookieCrossOrigin = nuxtI18nOptionsDefault.detectBrowserLanguage.cookieCrossOrigin
} = {}) {
  if (!useCookie) {
    return;
  }
  const date = new Date();
  const cookieOptions = {
    expires: new Date(date.setDate(date.getDate() + 365)),
    path: "/",
    sameSite: cookieCrossOrigin ? "none" : "lax",
    secure: cookieCrossOrigin || cookieSecure
  };
  if (cookieDomain) {
    cookieOptions.domain = cookieDomain;
  }
  {
    if (context.res) {
      const { res } = context;
      let headers = res.getHeader("Set-Cookie") || [];
      if (!isArray$1(headers)) {
        headers = [String(headers)];
      }
      const redirectCookie = serialize(cookieKey, locale, cookieOptions);
      headers.push(redirectCookie);
      res.setHeader("Set-Cookie", headers);
    }
  }
}
const DefaultDetectBrowserLanguageFromResult = {
  locale: "",
  stat: false,
  reason: "unknown",
  from: "unknown"
};
function detectBrowserLanguage(route, context, nuxtI18nOptions, nuxtI18nInternalOptions, localeCodes = [], locale = "", mode) {
  const { strategy } = nuxtI18nOptions;
  const { redirectOn, alwaysRedirect, useCookie, fallbackLocale } = nuxtI18nOptions.detectBrowserLanguage;
  const path = isString$1(route) ? route : route.path;
  if (strategy !== "no_prefix") {
    if (redirectOn === "root") {
      if (path !== "/") {
        return { locale: "", stat: false, reason: "not_redirect_on_root" };
      }
    } else if (redirectOn === "no prefix") {
      if (!alwaysRedirect && path.match(getLocalesRegex(localeCodes))) {
        return { locale: "", stat: false, reason: "not_redirect_on_no_prefix" };
      }
    }
  }
  let localeFrom = "unknown";
  let cookieLocale;
  let matchedLocale;
  if (useCookie) {
    matchedLocale = cookieLocale = getLocaleCookie(context, { ...nuxtI18nOptions.detectBrowserLanguage, localeCodes });
    localeFrom = "cookie";
  }
  if (!matchedLocale) {
    matchedLocale = getBrowserLocale(nuxtI18nInternalOptions);
    localeFrom = "navigator_or_header";
  }
  const finalLocale = matchedLocale || fallbackLocale;
  if (!matchedLocale && fallbackLocale) {
    localeFrom = "fallback";
  }
  const vueI18nLocale = locale || nuxtI18nOptions.vueI18n.locale;
  if (finalLocale && (!useCookie || alwaysRedirect || !cookieLocale)) {
    if (strategy === "no_prefix") {
      return { locale: finalLocale, stat: true, from: localeFrom };
    } else {
      if (finalLocale !== vueI18nLocale) {
        return { locale: finalLocale, stat: true, from: localeFrom };
      } else {
        if (alwaysRedirect && path === "/") {
          return { locale: finalLocale, stat: true, from: localeFrom };
        }
      }
    }
  }
  if (mode === "ssg_setup" && finalLocale) {
    return { locale: finalLocale, stat: true, from: localeFrom };
  }
  return { locale: "", stat: false, reason: "not_found_match" };
}
function getHost() {
  let host;
  {
    const header = useRequestHeaders(["x-forwarded-host", "host"]);
    let detectedHost;
    if ("x-forwarded-host" in header) {
      detectedHost = header["x-forwarded-host"];
    } else if ("host" in header) {
      detectedHost = header["host"];
    }
    host = isArray$1(detectedHost) ? detectedHost[0] : detectedHost;
  }
  return host;
}
function getLocaleDomain(locales) {
  let host = getHost() || "";
  if (host) {
    const matchingLocale = locales.find((locale) => locale.domain === host);
    if (matchingLocale) {
      return matchingLocale.code;
    } else {
      host = "";
    }
  }
  return host;
}
function getDomainFromLocale(localeCode, locales, nuxt) {
  const lang = locales.find((locale) => locale.code === localeCode);
  if (lang && lang.domain) {
    if (hasProtocol(lang.domain)) {
      return lang.domain;
    }
    let protocol;
    {
      const {
        node: { req }
      } = useRequestEvent(nuxt);
      protocol = req && isHTTPS(req) ? "https" : "http";
    }
    return protocol + "://" + lang.domain;
  }
  console.warn(formatMessage("Could not find domain name for locale " + localeCode));
}

function setCookieLocale(i18n, locale) {
  return callVueI18nInterfaces(i18n, "setLocaleCookie", locale);
}
function mergeLocaleMessage(i18n, locale, messages) {
  return callVueI18nInterfaces(i18n, "mergeLocaleMessage", locale, messages);
}
function onBeforeLanguageSwitch(i18n, oldLocale, newLocale, initial, context) {
  return callVueI18nInterfaces(i18n, "onBeforeLanguageSwitch", oldLocale, newLocale, initial, context);
}
function onLanguageSwitched(i18n, oldLocale, newLocale) {
  return callVueI18nInterfaces(i18n, "onLanguageSwitched", oldLocale, newLocale);
}
function makeFallbackLocaleCodes(fallback, locales) {
  let fallbackLocales = [];
  if (isArray$1(fallback)) {
    fallbackLocales = fallback;
  } else if (isObject$1(fallback)) {
    const targets = [...locales, "default"];
    for (const locale of targets) {
      if (fallback[locale]) {
        fallbackLocales = [...fallbackLocales, ...fallback[locale].filter(Boolean)];
      }
    }
  } else if (isString$1(fallback) && locales.every((locale) => locale !== fallback)) {
    fallbackLocales.push(fallback);
  }
  return fallbackLocales;
}
async function loadInitialMessages(context, messages, options) {
  const { defaultLocale, initialLocale, localeCodes, fallbackLocale, langDir, lazy } = options;
  const setter = (locale, message) => {
    const base = messages[locale] || {};
    messages[locale] = { ...base, ...message };
  };
  if (langDir) {
    if (lazy && fallbackLocale) {
      const fallbackLocales = makeFallbackLocaleCodes(fallbackLocale, [defaultLocale, initialLocale]);
      await Promise.all(fallbackLocales.map((locale) => loadLocale(context, locale, setter)));
    }
    const locales = lazy ? [...(/* @__PURE__ */ new Set()).add(defaultLocale).add(initialLocale)] : localeCodes;
    await Promise.all(locales.map((locale) => loadLocale(context, locale, setter)));
  }
  return messages;
}
async function mergeAdditionalMessages(context, i18n, locale) {
  await loadAdditionalLocale(
    context,
    locale,
    (locale2, message) => mergeLocaleMessage(i18n, locale2, message)
  );
}
async function loadAndSetLocale(newLocale, context, i18n, {
  useCookie = nuxtI18nOptionsDefault.detectBrowserLanguage.useCookie,
  skipSettingLocaleOnNavigate = nuxtI18nOptionsDefault.skipSettingLocaleOnNavigate,
  differentDomains = nuxtI18nOptionsDefault.differentDomains,
  initial = false,
  lazy = false,
  langDir = null
} = {}) {
  let ret = false;
  const oldLocale = getLocale(i18n);
  if (!newLocale) {
    return [ret, oldLocale];
  }
  if (!initial && differentDomains) {
    return [ret, oldLocale];
  }
  if (oldLocale === newLocale) {
    return [ret, oldLocale];
  }
  const localeOverride = onBeforeLanguageSwitch(i18n, oldLocale, newLocale, initial, context);
  const localeCodes = getLocaleCodes(i18n);
  if (localeOverride && localeCodes && localeCodes.includes(localeOverride)) {
    if (localeOverride === oldLocale) {
      return [ret, oldLocale];
    }
    newLocale = localeOverride;
  }
  if (langDir) {
    const i18nFallbackLocales = getVueI18nPropertyValue(i18n, "fallbackLocale");
    if (lazy) {
      const setter = (locale, message) => mergeLocaleMessage(i18n, locale, message);
      if (i18nFallbackLocales) {
        const fallbackLocales = makeFallbackLocaleCodes(i18nFallbackLocales, [newLocale]);
        await Promise.all(fallbackLocales.map((locale) => loadLocale(context, locale, setter)));
      }
      await loadLocale(context, newLocale, setter);
    }
  }
  await mergeAdditionalMessages(context, i18n, newLocale);
  if (skipSettingLocaleOnNavigate) {
    return [ret, oldLocale];
  }
  if (useCookie) {
    setCookieLocale(i18n, newLocale);
  }
  setLocale(i18n, newLocale);
  onLanguageSwitched(i18n, oldLocale, newLocale);
  ret = true;
  return [ret, oldLocale];
}
function detectLocale(route, context, routeLocaleGetter, nuxtI18nOptions, initialLocaleLoader, normalizedLocales, localeCodes = [], ssgStatus = "normal") {
  const { strategy, defaultLocale, differentDomains } = nuxtI18nOptions;
  const initialLocale = isFunction$1(initialLocaleLoader) ? initialLocaleLoader() : initialLocaleLoader;
  const { locale: browserLocale, stat, reason, from } = nuxtI18nOptions.detectBrowserLanguage ? detectBrowserLanguage(route, context, nuxtI18nOptions, nuxtI18nInternalOptions, localeCodes, initialLocale, ssgStatus) : DefaultDetectBrowserLanguageFromResult;
  if (reason === "detect_ignore_on_ssg") {
    return initialLocale;
  }
  let finalLocale = browserLocale;
  if (!finalLocale) {
    if (differentDomains) {
      finalLocale = getLocaleDomain(normalizedLocales);
    } else if (strategy !== "no_prefix") {
      finalLocale = routeLocaleGetter(route);
    } else {
      if (!nuxtI18nOptions.detectBrowserLanguage) {
        finalLocale = initialLocale;
      }
    }
  }
  if (!finalLocale && nuxtI18nOptions.detectBrowserLanguage && nuxtI18nOptions.detectBrowserLanguage.useCookie) {
    finalLocale = getLocaleCookie(context, { ...nuxtI18nOptions.detectBrowserLanguage, localeCodes });
  }
  if (!finalLocale) {
    finalLocale = defaultLocale || "";
  }
  return finalLocale;
}
function detectRedirect(route, context, targetLocale, routeLocaleGetter, nuxtI18nOptions) {
  const { strategy, defaultLocale, differentDomains } = nuxtI18nOptions;
  let redirectPath = "";
  if (!differentDomains && strategy !== "no_prefix" && // skip if already on the new locale unless the strategy is "prefix_and_default" and this is the default
  // locale, in which case we might still redirect as we prefer unprefixed route in this case.
  (routeLocaleGetter(route) !== targetLocale || strategy === "prefix_and_default" && targetLocale === defaultLocale)) {
    const { fullPath } = route;
    const decodedRoute = decodeURI(fullPath);
    const routePath = context.$switchLocalePath(targetLocale) || context.$localePath(fullPath, targetLocale);
    if (isString$1(routePath) && routePath && routePath !== fullPath && routePath !== decodedRoute && !routePath.startsWith("//")) {
      redirectPath = routePath;
    }
  }
  if (differentDomains || isSSG ) {
    const switchLocalePath2 = useSwitchLocalePath({
      i18n: getComposer(context.$i18n),
      route,
      router: context.$router
    });
    const routePath = switchLocalePath2(targetLocale);
    if (isString$1(routePath)) {
      redirectPath = routePath;
    }
  }
  return redirectPath;
}
function isRootRedirectOptions(rootRedirect) {
  return isObject$1(rootRedirect) && "path" in rootRedirect && "statusCode" in rootRedirect;
}
const useRedirectState = () => useState(NUXT_I18N_MODULE_ID + ":redirect", () => "");
function _navigate(redirectPath, status) {
  {
    return navigateTo(redirectPath, { redirectCode: status });
  }
}
async function navigate(args, {
  status = 301,
  rootRedirect = nuxtI18nOptionsDefault.rootRedirect,
  differentDomains = nuxtI18nOptionsDefault.differentDomains,
  skipSettingLocaleOnNavigate = nuxtI18nOptionsDefault.skipSettingLocaleOnNavigate
} = {}) {
  const { i18n, locale, route } = args;
  let { redirectPath } = args;
  if (route.path === "/" && rootRedirect) {
    if (isString$1(rootRedirect)) {
      redirectPath = "/" + rootRedirect;
    } else if (isRootRedirectOptions(rootRedirect)) {
      redirectPath = "/" + rootRedirect.path;
      status = rootRedirect.statusCode;
    }
    return _navigate(redirectPath, status);
  }
  if (!differentDomains) {
    if (redirectPath) {
      return _navigate(redirectPath, status);
    }
  } else {
    const state = useRedirectState();
    {
      state.value = redirectPath;
    }
  }
}
function inejctNuxtHelpers(nuxt, i18n) {
  defineGetter(nuxt, "$i18n", i18n.global);
  for (const pair of [
    ["getRouteBaseName", getRouteBaseName],
    ["localePath", localePath],
    ["localeRoute", localeRoute],
    ["switchLocalePath", switchLocalePath],
    ["localeHead", localeHead]
  ]) {
    defineGetter(nuxt, "$" + pair[0], proxyNuxt(nuxt, pair[1]));
  }
}
function extendPrefixable(differentDomains) {
  return (opts) => {
    return DefaultPrefixable(opts) && !differentDomains;
  };
}
function extendSwitchLocalePathIntercepter(differentDomains, normalizedLocales, nuxt) {
  return (path, locale) => {
    if (differentDomains) {
      const domain = getDomainFromLocale(locale, normalizedLocales, nuxt);
      if (domain) {
        return joinURL(domain, path);
      } else {
        return path;
      }
    } else {
      return DefaultSwitchLocalePathIntercepter(path);
    }
  };
}
function extendBaseUrl(baseUrl, options) {
  return (context) => {
    if (isFunction$1(baseUrl)) {
      return baseUrl(context);
    }
    const { differentDomains, localeCodeLoader, normalizedLocales } = options;
    const localeCode = isFunction$1(localeCodeLoader) ? localeCodeLoader() : localeCodeLoader;
    if (differentDomains && localeCode) {
      const domain = getDomainFromLocale(localeCode, normalizedLocales, options.nuxt);
      if (domain) {
        return domain;
      }
    }
    return baseUrl;
  };
}

/* _processed_nuxt_unctx_transform */
const i18n_sxaoZuFCGR = /* #__PURE__ */ defineNuxtPlugin(async (nuxt) => {let __temp, __restore;
  const router = useRouter();
  const route = useRoute();
  const { vueApp: app } = nuxt;
  const nuxtContext = nuxt;
  const nuxtI18nOptions = (([__temp,__restore]=executeAsync(()=>resolveNuxtI18nOptions())),__temp=await __temp,__restore(),__temp);
  const useCookie = nuxtI18nOptions.detectBrowserLanguage && nuxtI18nOptions.detectBrowserLanguage.useCookie;
  const { __normalizedLocales: normalizedLocales } = nuxtI18nInternalOptions;
  const {
    defaultLocale,
    differentDomains,
    skipSettingLocaleOnNavigate,
    lazy,
    langDir,
    routesNameSeparator,
    defaultLocaleRouteNameSuffix,
    strategy,
    rootRedirect
  } = nuxtI18nOptions;
  nuxtI18nOptions.baseUrl = extendBaseUrl(nuxtI18nOptions.baseUrl, {
    differentDomains,
    nuxt: nuxtContext,
    localeCodeLoader: defaultLocale,
    normalizedLocales
  });
  const getLocaleFromRoute = createLocaleFromRouteGetter(localeCodes, routesNameSeparator, defaultLocaleRouteNameSuffix);
  const vueI18nOptions = nuxtI18nOptions.vueI18n;
  vueI18nOptions.messages = vueI18nOptions.messages || {};
  vueI18nOptions.fallbackLocale = vueI18nOptions.fallbackLocale ?? false;
  registerGlobalOptions(router, {
    ...nuxtI18nOptions,
    dynamicRouteParamsKey: "nuxtI18n",
    switchLocalePathIntercepter: extendSwitchLocalePathIntercepter(differentDomains, normalizedLocales, nuxtContext),
    prefixable: extendPrefixable(differentDomains)
  });
  const getDefaultLocale = (defaultLocale2) => defaultLocale2 || vueI18nOptions.locale || "en-US";
  let initialLocale = detectLocale(
    route,
    nuxt.ssrContext,
    getLocaleFromRoute,
    nuxtI18nOptions,
    getDefaultLocale(defaultLocale),
    normalizedLocales,
    localeCodes,
    "normal"
  );
  vueI18nOptions.messages = (([__temp,__restore]=executeAsync(()=>loadInitialMessages(nuxtContext, vueI18nOptions.messages, {
    ...nuxtI18nOptions,
    initialLocale,
    fallbackLocale: vueI18nOptions.fallbackLocale,
    localeCodes
  }))),__temp=await __temp,__restore(),__temp);
  initialLocale = getDefaultLocale(initialLocale);
  const i18n = createI18n({
    ...vueI18nOptions,
    locale: initialLocale
  });
  let notInitialSetup = true;
  const isInitialLocaleSetup = (locale) => initialLocale !== locale && notInitialSetup;
  extendI18n(i18n, {
    locales: nuxtI18nOptions.locales,
    localeCodes,
    baseUrl: nuxtI18nOptions.baseUrl,
    context: nuxtContext,
    hooks: {
      onExtendComposer(composer) {
        composer.strategy = strategy;
        composer.localeProperties = computed(() => {
          return normalizedLocales.find((l) => l.code === composer.locale.value) || {
            code: composer.locale.value
          };
        });
        composer.setLocale = async (locale) => {
          const localeSetup = isInitialLocaleSetup(locale);
          const [modified] = await loadAndSetLocale(locale, nuxtContext, i18n, {
            useCookie,
            differentDomains,
            initial: localeSetup,
            skipSettingLocaleOnNavigate,
            lazy,
            langDir
          });
          if (modified && localeSetup) {
            notInitialSetup = false;
          }
          const redirectPath = detectRedirect(route, nuxtContext, locale, getLocaleFromRoute, nuxtI18nOptions);
          await navigate(
            {
              i18n,
              redirectPath,
              locale,
              route
            },
            {
              differentDomains,
              skipSettingLocaleOnNavigate,
              rootRedirect
            }
          );
        };
        composer.differentDomains = differentDomains;
        composer.getBrowserLocale = () => getBrowserLocale(nuxtI18nInternalOptions, nuxt.ssrContext);
        composer.getLocaleCookie = () => getLocaleCookie(nuxt.ssrContext, { ...nuxtI18nOptions.detectBrowserLanguage, localeCodes });
        composer.setLocaleCookie = (locale) => setLocaleCookie(locale, nuxt.ssrContext, nuxtI18nOptions.detectBrowserLanguage || void 0);
        composer.onBeforeLanguageSwitch = nuxtI18nOptions.onBeforeLanguageSwitch;
        composer.onLanguageSwitched = nuxtI18nOptions.onLanguageSwitched;
        composer.finalizePendingLocaleChange = async () => {
          if (!i18n.__pendingLocale) {
            return;
          }
          setLocale(i18n, i18n.__pendingLocale);
          if (i18n.__resolvePendingLocalePromise) {
            await i18n.__resolvePendingLocalePromise();
          }
          i18n.__pendingLocale = void 0;
        };
        composer.waitForPendingLocaleChange = async () => {
          if (i18n.__pendingLocale && i18n.__pendingLocalePromise) {
            await i18n.__pendingLocalePromise;
          }
        };
      },
      onExtendExportedGlobal(g) {
        return {
          strategy: {
            get() {
              return g.strategy;
            }
          },
          localeProperties: {
            get() {
              return g.localeProperties.value;
            }
          },
          setLocale: {
            get() {
              return async (locale) => Reflect.apply(g.setLocale, g, [locale]);
            }
          },
          differentDomains: {
            get() {
              return g.differentDomains;
            }
          },
          getBrowserLocale: {
            get() {
              return () => Reflect.apply(g.getBrowserLocale, g, []);
            }
          },
          getLocaleCookie: {
            get() {
              return () => Reflect.apply(g.getLocaleCookie, g, []);
            }
          },
          setLocaleCookie: {
            get() {
              return (locale) => Reflect.apply(g.setLocaleCookie, g, [locale]);
            }
          },
          onBeforeLanguageSwitch: {
            get() {
              return (oldLocale, newLocale, initialSetup, context) => Reflect.apply(g.onBeforeLanguageSwitch, g, [oldLocale, newLocale, initialSetup, context]);
            }
          },
          onLanguageSwitched: {
            get() {
              return (oldLocale, newLocale) => Reflect.apply(g.onLanguageSwitched, g, [oldLocale, newLocale]);
            }
          },
          finalizePendingLocaleChange: {
            get() {
              return () => Reflect.apply(g.finalizePendingLocaleChange, g, []);
            }
          },
          waitForPendingLocaleChange: {
            get() {
              return () => Reflect.apply(g.waitForPendingLocaleChange, g, []);
            }
          }
        };
      },
      onExtendVueI18n(composer) {
        return {
          strategy: {
            get() {
              return composer.strategy;
            }
          },
          localeProperties: {
            get() {
              return composer.localeProperties.value;
            }
          },
          setLocale: {
            get() {
              return async (locale) => Reflect.apply(composer.setLocale, composer, [locale]);
            }
          },
          differentDomains: {
            get() {
              return composer.differentDomains;
            }
          },
          getBrowserLocale: {
            get() {
              return () => Reflect.apply(composer.getBrowserLocale, composer, []);
            }
          },
          getLocaleCookie: {
            get() {
              return () => Reflect.apply(composer.getLocaleCookie, composer, []);
            }
          },
          setLocaleCookie: {
            get() {
              return (locale) => Reflect.apply(composer.setLocaleCookie, composer, [locale]);
            }
          },
          onBeforeLanguageSwitch: {
            get() {
              return (oldLocale, newLocale, initialSetup, context) => Reflect.apply(composer.onBeforeLanguageSwitch, composer, [oldLocale, newLocale, initialSetup, context]);
            }
          },
          onLanguageSwitched: {
            get() {
              return (oldLocale, newLocale) => Reflect.apply(composer.onLanguageSwitched, composer, [oldLocale, newLocale]);
            }
          },
          finalizePendingLocaleChange: {
            get() {
              return () => Reflect.apply(composer.finalizePendingLocaleChange, composer, []);
            }
          },
          waitForPendingLocaleChange: {
            get() {
              return () => Reflect.apply(composer.waitForPendingLocaleChange, composer, []);
            }
          }
        };
      }
    }
  });
  const pluginOptions = {
    __composerExtend: (c) => {
      const g = getComposer(i18n);
      c.strategy = g.strategy;
      c.localeProperties = computed(() => g.localeProperties.value);
      c.setLocale = g.setLocale;
      c.differentDomains = g.differentDomains;
      c.getBrowserLocale = g.getBrowserLocale;
      c.getLocaleCookie = g.getLocaleCookie;
      c.setLocaleCookie = g.setLocaleCookie;
      c.onBeforeLanguageSwitch = g.onBeforeLanguageSwitch;
      c.onLanguageSwitched = g.onLanguageSwitched;
      c.finalizePendingLocaleChange = g.finalizePendingLocaleChange;
      c.waitForPendingLocaleChange = g.waitForPendingLocaleChange;
    }
  };
  app.use(i18n, pluginOptions);
  inejctNuxtHelpers(nuxtContext, i18n);
(([__temp,__restore]=executeAsync(()=>mergeAdditionalMessages(nuxtContext, i18n, initialLocale))),await __temp,__restore());  addRouteMiddleware(
    "locale-changing",
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    /* #__PURE__ */ defineNuxtRouteMiddleware(async (to, from) => {let __temp, __restore;
      const locale = detectLocale(
        to,
        nuxt.ssrContext,
        getLocaleFromRoute,
        nuxtI18nOptions,
        () => {
          return getLocale(i18n) || getDefaultLocale(defaultLocale);
        },
        normalizedLocales,
        localeCodes,
        "normal"
      );
      const localeSetup = isInitialLocaleSetup(locale);
      const [modified] = (([__temp,__restore]=executeAsync(()=>loadAndSetLocale(locale, nuxtContext, i18n, {
        useCookie,
        differentDomains,
        initial: localeSetup,
        skipSettingLocaleOnNavigate,
        lazy,
        langDir
      }))),__temp=await __temp,__restore(),__temp);
      if (modified && localeSetup) {
        notInitialSetup = false;
      }
      const redirectPath = detectRedirect(to, nuxtContext, locale, getLocaleFromRoute, nuxtI18nOptions);
      return navigate(
        {
          i18n,
          redirectPath,
          locale,
          route: to
        },
        {
          differentDomains,
          skipSettingLocaleOnNavigate,
          rootRedirect
        }
      );
    }),
    { global: true }
  );
});

const unocss_MzCDxu9LMj = /* #__PURE__ */ defineNuxtPlugin(() => {});

const _1_scroll_to_top_UkFDmv2kEl = /* #__PURE__ */ defineNuxtPlugin(() => {
  return {
    provide: {
      scrollToTop: () => {
        window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
      }
    }
  };
});

const useColorMode = () => {
  return useState("color-mode").value;
};

const color_mode_Tkxaf6OtwV = /* #__PURE__ */ defineNuxtPlugin(() => {
  const colorMode = useColorMode();
  useHead({
    meta: [{
      id: "theme-color",
      name: "theme-color",
      content: () => colorMode.value === "dark" ? "#111111" : "#fafafa"
    }]
  });
});

const floating_vue_BiOD74u9sH = /* #__PURE__ */ defineNuxtPlugin((nuxtApp) => {
  nuxtApp.vueApp.use(FloatingVue);
});

const masto_XvM57Hn2Y4 = /* #__PURE__ */ defineNuxtPlugin(() => {
  const { params, query } = useRoute();
  publicServer.value = params.server ||  useRuntimeConfig().public.defaultServer;
  const masto = createMasto();
  const user = typeof query.server === "string" && typeof query.token === "string" ? {
    server: query.server,
    token: query.token,
    vapidKey: typeof query.vapid_key === "string" ? query.vapid_key : void 0
  } : currentUser.value || { server: publicServer.value };
  loginTo(masto, user);
  return {
    provide: {
      masto
    }
  };
});

const oldFontSizeMap = {
  xs: "13px",
  sm: "14px",
  md: "15px",
  lg: "16px",
  xl: "17px"
};

const setup_head_script_server_v8QdxScEPh = /* #__PURE__ */ defineNuxtPlugin(() => {
  useHead({
    script: [
      {
        innerHTML: `
;(function() {
  const handle = localStorage.getItem('${STORAGE_KEY_CURRENT_USER_HANDLE}') || '[anonymous]'
  const allSettings = JSON.parse(localStorage.getItem('${STORAGE_KEY_SETTINGS}') || '{}')
  const settings = allSettings[handle]
  if (!settings) { return }

  const html = document.documentElement
  ${""}

  if (settings.fontSize) {
    const oldFontSizeMap = ${JSON.stringify(oldFontSizeMap)}
    html.style.setProperty('--font-size', oldFontSizeMap[settings.fontSize] || settings.fontSize)
  }
  if (settings.language) {
    html.setAttribute('lang', settings.language)
  }
  if (settings.preferences.zenMode) {
    html.classList.add('zen')
  }
  if (settings.themeColors) {
    Object.entries(settings.themeColors).map(i => html.style.setProperty(i[0], i[1]))
  }
})()`.trim().replace(/\s*\n+\s*/g, ";")
      }
    ]
  });
});

/* _processed_nuxt_unctx_transform */
const BOT_RE = /bot\b|index|spider|facebookexternalhit|crawl|wget|slurp|mediapartners-google|whatsapp/i;
const social_server_uPLBkz1xMM = /* #__PURE__ */ defineNuxtPlugin(async (nuxtApp) => {let __temp, __restore;
  const route = useRoute();
  if (!("server" in route.params))
    return;
  const userAgent = useRequestHeaders()["user-agent"];
  if (!userAgent)
    return;
  const isOpenGraphCrawler = BOT_RE.test(userAgent);
  if (isOpenGraphCrawler) {
(([__temp,__restore]=executeAsync(()=>sendRedirect(nuxtApp.ssrContext.event, `https:/${route.path}`, 301))),await __temp,__restore());  }
});

const plugins = [
  path_LH0ulmb5c1,
  plugin$1,
  plugin,
  revive_payload_server_6KqwFkIr9i,
  components_plugin_KR1HBZs4kY,
  unhead_5PVS46oVqH,
  plugin_server_t6b1GsQQbb,
  composition_LOKPa0E6OA,
  i18n_sxaoZuFCGR,
  unocss_MzCDxu9LMj,
  _1_scroll_to_top_UkFDmv2kEl,
  color_mode_Tkxaf6OtwV,
  floating_vue_BiOD74u9sH,
  masto_XvM57Hn2Y4,
  setup_head_script_server_v8QdxScEPh,
  social_server_uPLBkz1xMM
];

const __nuxt_component_0 = /* #__PURE__ */ defineComponent({
  name: "NuxtLoadingIndicator",
  props: {
    throttle: {
      type: Number,
      default: 200
    },
    duration: {
      type: Number,
      default: 2e3
    },
    height: {
      type: Number,
      default: 3
    },
    color: {
      type: [String, Boolean],
      default: "repeating-linear-gradient(to right,#00dc82 0%,#34cdfe 50%,#0047e1 100%)"
    }
  },
  setup(props, { slots }) {
    const indicator = useLoadingIndicator({
      duration: props.duration,
      throttle: props.throttle
    });
    const nuxtApp = useNuxtApp();
    const router = useRouter();
    globalMiddleware.unshift(indicator.start);
    router.onError(() => {
      indicator.finish();
    });
    router.beforeResolve((to, from) => {
      if (to === from || to.matched.every((comp, index) => comp.components && comp.components?.default === from.matched[index]?.components?.default)) {
        indicator.finish();
      }
    });
    router.afterEach((_to, _from, failure) => {
      if (failure) {
        indicator.finish();
      }
    });
    nuxtApp.hook("page:finish", indicator.finish);
    nuxtApp.hook("vue:error", indicator.finish);
    return () => h("div", {
      class: "nuxt-loading-indicator",
      style: {
        position: "fixed",
        top: 0,
        right: 0,
        left: 0,
        pointerEvents: "none",
        width: "auto",
        height: `${props.height}px`,
        opacity: indicator.isLoading.value ? 1 : 0,
        background: props.color || void 0,
        backgroundSize: `${100 / indicator.progress.value * 100}% auto`,
        transform: `scaleX(${indicator.progress.value}%)`,
        transformOrigin: "left",
        transition: "transform 0.1s, height 0.4s, opacity 0.4s",
        zIndex: 999999
      }
    }, slots);
  }
});
function useLoadingIndicator(opts) {
  const progress = ref(0);
  const isLoading = ref(false);
  computed(() => 1e4 / opts.duration);
  let _timer = null;
  let _throttle = null;
  function start() {
    clear();
    progress.value = 0;
    if (opts.throttle && false) {
      _throttle = setTimeout(() => {
        isLoading.value = true;
      }, opts.throttle);
    } else {
      isLoading.value = true;
    }
  }
  function finish() {
    progress.value = 100;
    _hide();
  }
  function clear() {
    clearInterval(_timer);
    clearTimeout(_throttle);
    _timer = null;
    _throttle = null;
  }
  function _hide() {
    clear();
  }
  return {
    progress,
    isLoading,
    start,
    finish,
    clear
  };
}

const _wrapIf = (component, props, slots) => {
  props = props === true ? {} : props;
  return { default: () => props ? h(component, props, slots) : slots.default?.() };
};

const layouts = {
  default: () => import('./_nuxt/default-f7c7e60e.mjs').then(m => m.default || m),
  none: () => import('./_nuxt/none-11474631.mjs').then(m => m.default || m)
};

const LayoutLoader = /* #__PURE__ */ defineComponent({
  name: "LayoutLoader",
  inheritAttrs: false,
  props: {
    name: String,
    layoutProps: Object
  },
  async setup(props, context) {
    const LayoutComponent = await layouts[props.name]().then((r) => r.default || r);
    return () => h(LayoutComponent, props.layoutProps, context.slots);
  }
});
const __nuxt_component_1 = /* #__PURE__ */ defineComponent({
  name: "NuxtLayout",
  inheritAttrs: false,
  props: {
    name: {
      type: [String, Boolean, Object],
      default: null
    }
  },
  setup(props, context) {
    const nuxtApp = useNuxtApp();
    const injectedRoute = inject(PageRouteSymbol);
    const route = injectedRoute === useRoute() ? useRoute$1() : injectedRoute;
    const layout = computed(() => unref(props.name) ?? route.meta.layout ?? "default");
    const layoutRef = ref();
    context.expose({ layoutRef });
    const done = nuxtApp.deferHydration();
    return () => {
      const hasLayout = layout.value && layout.value in layouts;
      const transitionProps = route.meta.layoutTransition ?? appLayoutTransition;
      return _wrapIf(Transition, hasLayout && transitionProps, {
        default: () => h(Suspense, { suspensible: true, onResolve: () => {
          nextTick(done);
        } }, {
          default: () => h(
            // @ts-expect-error seems to be an issue in vue types
            LayoutProvider,
            {
              layoutProps: mergeProps(context.attrs, { ref: layoutRef }),
              key: layout.value,
              name: layout.value,
              shouldProvide: !props.name,
              hasTransition: !!transitionProps
            },
            context.slots
          )
        })
      }).default();
    };
  }
});
const LayoutProvider = /* #__PURE__ */ defineComponent({
  name: "NuxtLayoutProvider",
  inheritAttrs: false,
  props: {
    name: {
      type: [String, Boolean]
    },
    layoutProps: {
      type: Object
    },
    hasTransition: {
      type: Boolean
    },
    shouldProvide: {
      type: Boolean
    }
  },
  setup(props, context) {
    const name = props.name;
    if (props.shouldProvide) {
      provide(LayoutMetaSymbol, {
        isCurrent: (route) => name === (route.meta.layout ?? "default")
      });
    }
    return () => {
      if (!name || typeof name === "string" && !(name in layouts)) {
        return context.slots.default?.();
      }
      return h(
        // @ts-expect-error seems to be an issue in vue types
        LayoutLoader,
        { key: name, layoutProps: props.layoutProps, name },
        context.slots
      );
    };
  }
});

const interpolatePath = (route, match) => {
  return match.path.replace(/(:\w+)\([^)]+\)/g, "$1").replace(/(:\w+)[?+*]/g, "$1").replace(/:\w+/g, (r) => route.params[r.slice(1)]?.toString() || "");
};
const generateRouteKey = (routeProps, override) => {
  const matchedRoute = routeProps.route.matched.find((m) => m.components?.default === routeProps.Component.type);
  const source = override ?? matchedRoute?.meta.key ?? (matchedRoute && interpolatePath(routeProps.route, matchedRoute));
  return typeof source === "function" ? source(routeProps.route) : source;
};
const wrapInKeepAlive = (props, children) => {
  return { default: () => children };
};

const RouteProvider = /* #__PURE__ */ defineComponent({
  name: "RouteProvider",
  props: {
    vnode: {
      type: Object,
      required: true
    },
    route: {
      type: Object,
      required: true
    },
    vnodeRef: Object,
    renderKey: String,
    trackRootNodes: Boolean
  },
  setup(props) {
    const previousKey = props.renderKey;
    const previousRoute = props.route;
    const route = {};
    for (const key in props.route) {
      Object.defineProperty(route, key, {
        get: () => previousKey === props.renderKey ? props.route[key] : previousRoute[key]
      });
    }
    provide(PageRouteSymbol, shallowReactive(route));
    return () => {
      return h(props.vnode, { ref: props.vnodeRef });
    };
  }
});

const __nuxt_component_4 = /* #__PURE__ */ defineComponent({
  name: "NuxtPage",
  inheritAttrs: false,
  props: {
    name: {
      type: String
    },
    transition: {
      type: [Boolean, Object],
      default: void 0
    },
    keepalive: {
      type: [Boolean, Object],
      default: void 0
    },
    route: {
      type: Object
    },
    pageKey: {
      type: [Function, String],
      default: null
    }
  },
  setup(props, { attrs, expose }) {
    const nuxtApp = useNuxtApp();
    const pageRef = ref();
    inject(PageRouteSymbol, null);
    expose({ pageRef });
    inject(LayoutMetaSymbol, null);
    let vnode;
    const done = nuxtApp.deferHydration();
    return () => {
      return h(RouterView, { name: props.name, route: props.route, ...attrs }, {
        default: (routeProps) => {
          if (!routeProps.Component) {
            return;
          }
          const key = generateRouteKey(routeProps, props.pageKey);
          const hasTransition = !!(props.transition ?? routeProps.route.meta.pageTransition ?? appPageTransition);
          const transitionProps = hasTransition && _mergeTransitionProps([
            props.transition,
            routeProps.route.meta.pageTransition,
            appPageTransition,
            { onAfterLeave: () => {
              nuxtApp.callHook("page:transition:finish", routeProps.Component);
            } }
          ].filter(Boolean));
          vnode = _wrapIf(
            Transition,
            hasTransition && transitionProps,
            wrapInKeepAlive(
              props.keepalive ?? routeProps.route.meta.keepalive ?? appKeepalive,
              h(Suspense, {
                suspensible: true,
                onPending: () => nuxtApp.callHook("page:start", routeProps.Component),
                onResolve: () => {
                  nextTick(() => nuxtApp.callHook("page:finish", routeProps.Component).finally(done));
                }
              }, {
                // @ts-expect-error seems to be an issue in vue types
                default: () => h(RouteProvider, {
                  key,
                  vnode: routeProps.Component,
                  route: routeProps.route,
                  renderKey: key,
                  trackRootNodes: hasTransition,
                  vnodeRef: pageRef
                })
              })
            )
          ).default();
          return vnode;
        }
      });
    };
  }
});
function _toArray(val) {
  return Array.isArray(val) ? val : val ? [val] : [];
}
function _mergeTransitionProps(routeProps) {
  const _props = routeProps.map((prop) => ({
    ...prop,
    onAfterLeave: _toArray(prop.onAfterLeave)
  }));
  return defu(..._props);
}

const ariaAnnouncer = useEventBus(Symbol("aria-announcer"));
function useAriaAnnouncer() {
  const announce = (message) => {
    ariaAnnouncer.emit("announce", message);
  };
  const mute = () => {
    ariaAnnouncer.emit("mute");
  };
  const unmute = () => {
    ariaAnnouncer.emit("unmute");
  };
  return { announce, ariaAnnouncer, mute, unmute };
}

const _sfc_main$p = /* @__PURE__ */ defineComponent({
  __name: "AriaAnnouncer",
  __ssrInlineRender: true,
  setup(__props) {
    useRouter();
    const { t, locale, locales } = useI18n();
    const { ariaAnnouncer, announce } = useAriaAnnouncer();
    const localeMap = locales.value.reduce((acc, l) => {
      acc[l.code] = l.name;
      return acc;
    }, {});
    let ariaLive = ref("polite");
    let ariaMessage = ref("");
    watch(locale, (l, ol) => {
      if (ol) {
        announce(t("a11y.locale_changing", [localeMap[ol] ?? ol]));
        setTimeout(() => {
          announce(t("a11y.locale_changed", [localeMap[l] ?? l]));
        }, 1e3);
      }
    }, { immediate: true });
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<p${ssrRenderAttrs(mergeProps({
        "sr-only": "",
        role: "status",
        "aria-live": unref(ariaLive)
      }, _attrs))}>${ssrInterpolate(unref(ariaMessage))}</p>`);
    };
  }
});

const _sfc_setup$p = _sfc_main$p.setup;
_sfc_main$p.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/aria/AriaAnnouncer.vue");
  return _sfc_setup$p ? _sfc_setup$p(props, ctx) : void 0;
};

const elkTeamMembers = [
  {
    github: "antfu",
    display: "Anthony Fu",
    twitter: "antfu7",
    mastodon: "antfu@webtoo.ls"
  },
  {
    github: "patak-dev",
    display: "Patak",
    twitter: "patak_dev",
    mastodon: "patak@webtoo.ls"
  },
  {
    github: "danielroe",
    display: "Daniel Roe",
    twitter: "danielcroe",
    mastodon: "daniel@roe.dev"
  },
  {
    github: "sxzz",
    display: "三咲智子 Kevin Deng",
    twitter: "sanxiaozhizi",
    mastodon: "sxzz@webtoo.ls"
  }
].sort(() => Math.random() - 0.5);
function useBuildInfo() {
  return useAppConfig().buildInfo;
}

function getDefaultLanguage(languages) {
  return "en-US";
}
const DEFAULT__PREFERENCES_SETTINGS = {
  hideAltIndicatorOnPosts: false,
  hideBoostCount: false,
  hideReplyCount: false,
  hideFavoriteCount: false,
  hideFollowerCount: false,
  hideTranslation: false,
  hideUsernameEmojis: false,
  hideAccountHoverCard: false,
  hideNews: false,
  grayscaleMode: false,
  enableAutoplay: true,
  enableDataSaving: false,
  enablePinchToZoom: false,
  useStarFavoriteIcon: false,
  zenMode: false,
  experimentalVirtualScroller: true,
  experimentalGitHubCards: true,
  experimentalUserPicker: true
};
function getDefaultUserSettings(locales) {
  return {
    language: getDefaultLanguage(),
    fontSize: DEFAULT_FONT_SIZE,
    disabledTranslationLanguages: [],
    preferences: DEFAULT__PREFERENCES_SETTINGS
  };
}

function useUserSettings() {
  const i18n = useNuxtApp().vueApp.config.globalProperties.$i18n;
  const { locales } = i18n;
  locales.map((locale) => locale.code);
  const settingsStorage = useUserLocalStorage(STORAGE_KEY_SETTINGS, () => getDefaultUserSettings());
  if (settingsStorage.value.fontSize && !settingsStorage.value.fontSize.includes("px"))
    settingsStorage.value.fontSize = oldFontSizeMap[settingsStorage.value.fontSize];
  return settingsStorage;
}
function usePreferences(name) {
  const userSettings = useUserSettings();
  return computed({
    get() {
      return getPreferences(userSettings.value, name);
    },
    set(value) {
      userSettings.value.preferences[name] = value;
    }
  });
}
function getPreferences(userSettings, name) {
  const preference = userSettings?.preferences?.[name] ?? DEFAULT__PREFERENCES_SETTINGS[name];
  if (name === "enableAutoplay")
    return getPreferences(userSettings, "enableDataSaving") ? false : preference;
  return preference;
}
function togglePreferences(key) {
  const flag = usePreferences(key);
  flag.value = !flag.value;
}

const isHydrated = ref(false);
function onHydrated(cb) {
  watchOnce(isHydrated, () => cb(), { immediate: isHydrated.value });
}
function useDeactivated() {
  const deactivated = ref(false);
  return deactivated;
}
function onReactivated(hook, target) {
  ref(true);
}
function useHydratedHead(input, options) {
  if (input && typeof input === "object" && !("value" in input)) {
    const title = "title" in input ? input.title : void 0;
    if (title) {
      input.meta = input.meta || [];
      if (Array.isArray(input.meta)) {
        input.meta.push(
          { property: "og:title", content: typeof input.title === "function" ? input.title() : input.title }
        );
      }
    } else if (title) {
      input.title = () => isHydrated.value ? typeof title === "function" ? title() : title : "";
    }
  }
  return useHead(() => {
    if (!isHydrated.value)
      return {};
    return resolveUnref(input);
  }, options);
}

function setupPageHeader() {
  const { locale, locales, t } = useI18n();
  useColorMode();
  const buildInfo = useBuildInfo();
  const enablePinchToZoom = usePreferences("enablePinchToZoom");
  const localeMap = locales.value.reduce((acc, l) => {
    acc[l.code] = l.dir ?? "ltr";
    return acc;
  }, {});
  useHydratedHead({
    htmlAttrs: {
      lang: () => locale.value,
      dir: () => localeMap[locale.value] ?? "ltr",
      class: () => enablePinchToZoom.value ? ["enable-pinch-to-zoom"] : []
    },
    meta: [{
      name: "viewport",
      content: () => `width=device-width,initial-scale=1${enablePinchToZoom.value ? "" : ",maximum-scale=1,user-scalable=0"},viewport-fit=cover`
    }],
    titleTemplate: (title) => {
      let titleTemplate = title ?? "";
      if (titleTemplate.match(/&[a-z0-9#]+;/gi)) {
        titleTemplate = unescapeTitleTemplate(titleTemplate, [
          ['"', ["&#34;", "&quot;"]],
          ["&", ["&#38;", "&amp;"]],
          ["'", ["&#39;", "&apos;"]],
          ["<", ["&#60;", "&lt;"]],
          [">", ["&#62;", "&gt;"]]
        ]);
        if (titleTemplate.length > 60)
          titleTemplate = `${titleTemplate.slice(0, 60)}...${titleTemplate.endsWith('"') ? '"' : ""}`;
        if (!titleTemplate.includes('"'))
          titleTemplate = `"${titleTemplate}"`;
      } else if (titleTemplate.length > 60) {
        titleTemplate = `${titleTemplate.slice(0, 60)}...${titleTemplate.endsWith('"') ? '"' : ""}`;
      }
      if (titleTemplate.length)
        titleTemplate += " | ";
      titleTemplate += t("app_name");
      if (buildInfo.env !== "release")
        titleTemplate += ` (${buildInfo.env})`;
      return titleTemplate;
    },
    link: []
  });
}
function unescapeTitleTemplate(titleTemplate, replacements) {
  let result = titleTemplate;
  for (const [replacement, entities] of replacements) {
    for (const e of entities)
      result = result.replaceAll(e, replacement);
  }
  return result.trim();
}

function useSignIn(input) {
  const singleInstanceServer =  useRuntimeConfig().public.singleInstance;
  const userSettings = useUserSettings();
  const users = useUsers();
  const { t } = useI18n();
  const busy = ref(false);
  const error = ref(false);
  const server = ref("");
  const displayError = ref(false);
  async function oauth() {
    if (busy.value)
      return;
    busy.value = true;
    error.value = false;
    displayError.value = false;
    await nextTick();
    if (!singleInstanceServer && server.value)
      server.value = server.value.split("/")[0];
    try {
      let href;
      if (singleInstanceServer) {
        href = await globalThis.$fetch(`/api/${publicServer.value}/login`, {
          method: "POST",
          body: {
            force_login: users.value.length > 0,
            origin: location.origin,
            lang: userSettings.value.language
          }
        });
        busy.value = false;
      } else {
        href = await globalThis.$fetch(`/api/${server.value || publicServer.value}/login`, {
          method: "POST",
          body: {
            force_login: users.value.some((u) => u.server === server.value),
            origin: location.origin,
            lang: userSettings.value.language
          }
        });
      }
      location.href = href;
    } catch (err) {
      if (singleInstanceServer) {
        console.error(err);
        busy.value = false;
        await openErrorDialog({
          title: t("common.error"),
          messages: [t("error.sign_in_error")],
          close: t("action.close")
        });
      } else {
        displayError.value = true;
        error.value = true;
        await nextTick();
        input?.value?.focus();
        await nextTick();
        setTimeout(() => {
          busy.value = false;
          error.value = false;
        }, 512);
      }
    }
  }
  return { busy, displayError, error, server, singleInstanceServer, oauth };
}

const scopes = [
  "",
  "Actions",
  "Tabs",
  "Navigation",
  "Preferences",
  "Account",
  "Languages",
  "Switch account",
  "Settings",
  "Hashtags",
  "Users"
];
function resolveFunction(i) {
  return typeof i === "function" ? i() : i;
}
const useCommandRegistry = defineStore("command", () => {
  const providers = reactive(/* @__PURE__ */ new Set());
  const commands = computed(() => [...providers].filter((command) => command.visible ? command.visible() : true).map((provider) => ({
    ...provider,
    icon: resolveFunction(provider.icon),
    name: resolveFunction(provider.name),
    description: resolveFunction(provider.description),
    bindings: resolveFunction(provider.bindings)
  })));
  let lastScope = "";
  let lastFuse;
  watch(commands, () => {
    lastFuse = void 0;
  });
  return {
    register: (provider) => {
      providers.add(provider);
    },
    remove: (provider) => {
      providers.delete(provider);
    },
    query: (scope, query) => {
      const cmds = commands.value.filter((cmd) => (cmd.parent ?? "") === scope);
      if (query) {
        const fuse = lastScope === scope && lastFuse ? lastFuse : new proxy(cmds, {
          keys: ["scope", "name", "description"],
          includeScore: true
        });
        lastScope = scope;
        lastFuse = fuse;
        const res = fuse.search(query).map(({ item }) => ({ ...item }));
        const grouped = /* @__PURE__ */ new Map();
        for (const cmd of res) {
          const scope2 = cmd.scope ?? "";
          if (!grouped.has(scope2))
            grouped.set(scope2, []);
          grouped.get(scope2).push({
            index: 0,
            type: "command",
            scope: scope2,
            cmd,
            onActivate: cmd.onActivate,
            onComplete: cmd.onComplete
          });
        }
        let index = 0;
        const indexed = [];
        for (const items of grouped.values()) {
          for (const cmd of items) {
            cmd.index = index++;
            indexed.push(cmd);
          }
        }
        return {
          length: res.length,
          items: indexed,
          grouped
        };
      } else {
        const indexed = cmds.map((cmd, index2) => ({ ...cmd, index: index2 }));
        const grouped = new Map(
          scopes.map((scope2) => [scope2, []])
        );
        for (const cmd of indexed) {
          const scope2 = cmd.scope ?? "";
          grouped.get(scope2).push({
            index: cmd.index,
            type: "command",
            scope: scope2,
            cmd,
            onActivate: cmd.onActivate,
            onComplete: cmd.onComplete
          });
        }
        let index = 0;
        const sorted = [];
        for (const [scope2, items] of grouped) {
          if (items.length === 0) {
            grouped.delete(scope2);
          } else {
            const o = (item) => (item.cmd.order ?? 0) * 100 + item.index;
            items.sort((a, b) => o(a) - o(b));
            for (const cmd of items) {
              cmd.index = index++;
              sorted.push(cmd);
            }
          }
        }
        return {
          length: indexed.length,
          items: sorted,
          grouped
        };
      }
    }
  };
});
function useCommand(cmd) {
  const registry = useCommandRegistry();
  const register = () => registry.register(cmd);
  const cleanup = () => registry.remove(cmd);
  register();
  tryOnScopeDispose(cleanup);
}
function useCommands(cmds) {
  const registry = useCommandRegistry();
  const commands = computed(cmds);
  watch(commands, (n, o = []) => {
    for (const cmd of o)
      registry.remove(cmd);
    for (const cmd of n)
      registry.register(cmd);
  }, { deep: true, immediate: true });
  const cleanup = () => {
    commands.value.forEach((cmd) => registry.remove(cmd));
  };
  tryOnScopeDispose(cleanup);
}
function provideGlobalCommands() {
  const { locale, t } = useI18n();
  const { locales } = useI18n();
  const router = useRouter();
  const users = useUsers();
  const masto = useMasto();
  const colorMode = useColorMode();
  const userSettings = useUserSettings();
  const { singleInstanceServer, oauth } = useSignIn();
  useCommand({
    scope: "Navigation",
    name: () => t("nav.settings"),
    icon: "i-ri:settings-3-line",
    onActivate() {
      router.push("/settings");
    }
  });
  useCommand({
    scope: "Preferences",
    name: () => t("command.toggle_dark_mode"),
    icon: () => colorMode.value === "light" ? "i-ri:sun-line" : "i-ri:moon-line",
    onActivate() {
      colorMode.preference = colorMode.value === "light" ? "dark" : "light";
    }
  });
  useCommand({
    scope: "Preferences",
    name: () => t("command.toggle_zen_mode"),
    icon: () => userSettings.value.preferences.zenMode ? "i-ri:layout-right-2-line" : "i-ri:layout-right-line",
    onActivate() {
      togglePreferences("zenMode");
    }
  });
  useCommand({
    scope: "Preferences",
    name: () => t("command.select_lang"),
    icon: "i-ri:earth-line",
    onComplete: () => ({
      id: "language",
      display: "Languages"
    })
  });
  useCommands(() => locales.value.map((l) => ({
    parent: "language",
    scope: "Languages",
    name: l.name,
    icon: "i-ri:earth-line",
    onActivate() {
      locale.value = l.code;
    }
  })));
  useCommand({
    scope: "Account",
    name: () => t("action.sign_in"),
    description: () => t("command.sign_in_desc"),
    icon: "i-ri:user-add-line",
    onActivate() {
      if (singleInstanceServer)
        oauth();
      else
        openSigninDialog();
    }
  });
  useCommand({
    scope: "Account",
    visible: () => users.value.length > 1,
    name: () => t("action.switch_account"),
    description: () => t("command.switch_account_desc"),
    icon: "i-ri:user-shared-line",
    onComplete: () => ({
      id: "account-switch",
      display: "Accounts"
    })
  });
  useCommands(() => users.value.map((user) => ({
    parent: "account-switch",
    scope: "Switch account",
    visible: () => user.account.id !== currentUser.value?.account.id,
    name: () => t("command.switch_account", [getFullHandle(user.account)]),
    icon: "i-ri:user-shared-line",
    onActivate() {
      loginTo(masto, user);
    }
  })));
  useCommand({
    scope: "Account",
    visible: () => currentUser.value,
    name: () => t("user.sign_out_account", [getFullHandle(currentUser.value.account)]),
    icon: "i-ri:logout-box-line",
    onActivate() {
      signOut();
    }
  });
}

const _sfc_main$o = /* @__PURE__ */ defineComponent({
  __name: "app",
  __ssrInlineRender: true,
  setup(__props) {
    setupPageHeader();
    provideGlobalCommands();
    const route = useRoute();
    if (!route.path.startsWith("/settings")) {
      useHead({
        meta: [
          { property: "og:url", content: `https://elk.zone${route.path}` }
        ]
      });
    }
    const key = computed(() => `${currentUser.value?.server ?? currentServer.value}:${currentUser.value?.account.id || ""}`);
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NuxtLoadingIndicator = __nuxt_component_0;
      const _component_NuxtLayout = __nuxt_component_1;
      const _component_NuxtPage = __nuxt_component_4;
      const _component_AriaAnnouncer = _sfc_main$p;
      _push(`<!--[-->`);
      _push(ssrRenderComponent(_component_NuxtLoadingIndicator, { color: "repeating-linear-gradient(to right,var(--c-primary) 0%,var(--c-primary-active) 100%)" }, null, _parent));
      _push(ssrRenderComponent(_component_NuxtLayout, { key: unref(key) }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_NuxtPage, null, null, _parent2, _scopeId));
          } else {
            return [
              createVNode(_component_NuxtPage)
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_component_AriaAnnouncer, null, null, _parent));
      _push(`<svg absolute op0 width="0" height="0"><defs><clipPath id="avatar-mask" clipPathUnits="objectBoundingBox"><path d="M 0,0.5 C 0,0 0,0 0.5,0 S 1,0 1,0.5 1,1 0.5,1 0,1 0,0.5"></path></clipPath></defs></svg><!--]-->`);
    };
  }
});

const _sfc_setup$o = _sfc_main$o.setup;
_sfc_main$o.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("app.vue");
  return _sfc_setup$o ? _sfc_setup$o(props, ctx) : void 0;
};

const __nuxt_component_11 = /* #__PURE__ */ defineComponent({
  name: "ServerPlaceholder",
  render() {
    return createElementBlock("div");
  }
});

const _sfc_main$n = /* @__PURE__ */ defineComponent({
  __name: "AccountAvatar",
  __ssrInlineRender: true,
  props: {
    account: {},
    square: { type: Boolean }
  },
  setup(__props) {
    const loaded = ref(false);
    const error = ref(false);
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<img${ssrRenderAttrs(mergeProps({
        key: _ctx.account.avatar,
        width: "400",
        height: "400",
        "select-none": "",
        src: error.value || !loaded.value ? "data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7" : _ctx.account.avatar,
        alt: _ctx.$t("account.avatar_description", [_ctx.account.username]),
        loading: "lazy",
        class: ["account-avatar", (loaded.value ? "bg-base" : "bg-gray:10") + (_ctx.square ? " " : " rounded-full")],
        style: { "clip-path": _ctx.square ? `url(#avatar-mask)` : "none" }
      }, _ctx.$attrs, _attrs))}>`);
    };
  }
});

const _sfc_setup$n = _sfc_main$n.setup;
_sfc_main$n.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/account/AccountAvatar.vue");
  return _sfc_setup$n ? _sfc_setup$n(props, ctx) : void 0;
};

function createPropsRestProxy(props,excludedKeys){const ret=Object.create(null);for(const key in props){if(!excludedKeys.includes(key)){Object.defineProperty(ret,key,{enumerable:true,get:()=>props[key]});}}return ret}

const requestedRelationships = /* @__PURE__ */ new Map();
let timeoutHandle;
function useRelationship(account) {
  if (!currentUser.value)
    return ref();
  let relationship = requestedRelationships.get(account.id);
  if (relationship)
    return relationship;
  relationship = ref();
  requestedRelationships.set(account.id, relationship);
  if (timeoutHandle)
    clearTimeout(timeoutHandle);
  timeoutHandle = setTimeout(() => {
    timeoutHandle = void 0;
    fetchRelationships();
  }, 100);
  return relationship;
}
async function fetchRelationships() {
  const requested = Array.from(requestedRelationships.entries()).filter(([, r]) => !r.value);
  const relationships = await useMastoClient().v1.accounts.fetchRelationships(requested.map(([id]) => id));
  for (let i = 0; i < requested.length; i++)
    requested[i][1].value = relationships[i];
}
async function toggleFollowAccount(relationship, account) {
  const __$temp_1 = useMasto(), client = toRef$1(__$temp_1, "client");
  const i18n = useNuxtApp().$i18n;
  const unfollow = relationship.following || relationship.requested;
  if (unfollow) {
    if (await openConfirmDialog({
      title: i18n.t("confirm.unfollow.title"),
      confirm: i18n.t("confirm.unfollow.confirm"),
      cancel: i18n.t("confirm.unfollow.cancel")
    }) !== "confirm")
      return;
  }
  if (unfollow) {
    relationship.following = false;
    relationship.requested = false;
  } else if (account.locked) {
    relationship.requested = true;
  } else {
    relationship.following = true;
  }
  relationship = await client.value.v1.accounts[unfollow ? "unfollow" : "follow"](account.id);
}
async function toggleMuteAccount(relationship, account) {
  const __$temp_2 = useMasto(), client = toRef$1(__$temp_2, "client");
  const i18n = useNuxtApp().$i18n;
  if (!relationship.muting && await openConfirmDialog({
    title: i18n.t("confirm.mute_account.title", [account.acct]),
    confirm: i18n.t("confirm.mute_account.confirm"),
    cancel: i18n.t("confirm.mute_account.cancel")
  }) !== "confirm")
    return;
  relationship.muting = !relationship.muting;
  relationship = relationship.muting ? await client.value.v1.accounts.mute(account.id, {
    // TODO support more options
  }) : await client.value.v1.accounts.unmute(account.id);
}
async function toggleBlockAccount(relationship, account) {
  const __$temp_3 = useMasto(), client = toRef$1(__$temp_3, "client");
  const i18n = useNuxtApp().$i18n;
  if (!relationship.blocking && await openConfirmDialog({
    title: i18n.t("confirm.block_account.title", [account.acct]),
    confirm: i18n.t("confirm.block_account.confirm"),
    cancel: i18n.t("confirm.block_account.cancel")
  }) !== "confirm")
    return;
  relationship.blocking = !relationship.blocking;
  relationship = await client.value.v1.accounts[relationship.blocking ? "block" : "unblock"](account.id);
}
async function toggleBlockDomain(relationship, account) {
  const __$temp_4 = useMasto(), client = toRef$1(__$temp_4, "client");
  const i18n = useNuxtApp().$i18n;
  if (!relationship.domainBlocking && await openConfirmDialog({
    title: i18n.t("confirm.block_domain.title", [getServerName(account)]),
    confirm: i18n.t("confirm.block_domain.confirm"),
    cancel: i18n.t("confirm.block_domain.cancel")
  }) !== "confirm")
    return;
  relationship.domainBlocking = !relationship.domainBlocking;
  await client.value.v1.domainBlocks[relationship.domainBlocking ? "block" : "unblock"](getServerName(account));
}

const _sfc_main$m = /* @__PURE__ */ defineComponent({
  __name: "AccountFollowButton",
  __ssrInlineRender: true,
  props: {
    account: {},
    relationship: {},
    context: {},
    command: { type: Boolean }
  },
  setup(__props) {
    const props = createPropsRestProxy(__props, ["account", "command", "context"]);
    const { t } = useI18n();
    const isSelf = useSelfAccount(() => __props.account);
    const enable = computed(() => !isSelf.value && currentUser.value);
    const relationship = computed(() => props.relationship || useRelationship(__props.account).value);
    const __$temp_1 = useMasto(); toRef$1(__$temp_1, "client");
    useCommand({
      scope: "Actions",
      order: -2,
      visible: () => __props.command && enable.value,
      name: () => `${relationship.value?.following ? t("account.unfollow") : t("account.follow")} ${getShortHandle(__props.account)}`,
      icon: "i-ri:star-line",
      onActivate: () => toggleFollowAccount(relationship.value, __props.account)
    });
    const buttonStyle = computed(() => {
      if (relationship.value?.blocking)
        return "text-inverted bg-red border-red";
      if (relationship.value?.muting)
        return "text-base bg-card border-base";
      if (relationship.value ? relationship.value.following : __props.context === "following")
        return `text-base ${relationship.value?.followedBy ? "border-strong" : "border-base"}`;
      return "text-inverted bg-primary border-primary";
    });
    return (_ctx, _push, _parent, _attrs) => {
      if (enable.value) {
        _push(`<button${ssrRenderAttrs(mergeProps({
          "gap-1": "",
          "items-center": "",
          group: "",
          "border-1": "",
          "rounded-full": "",
          flex: "~ gap2 center",
          "font-500": "",
          "min-w-30": "",
          "h-fit": "",
          px3: "",
          py1: "",
          class: buttonStyle.value,
          hover: !relationship.value?.blocking && !relationship.value?.muting && relationship.value?.following ? "border-red text-red" : "bg-base border-primary text-primary"
        }, _attrs))}>`);
        if (relationship.value?.blocking) {
          _push(`<!--[--><span elk-group-hover="hidden">${ssrInterpolate(_ctx.$t("account.blocking"))}</span><span hidden elk-group-hover="inline">${ssrInterpolate(_ctx.$t("account.unblock"))}</span><!--]-->`);
        } else {
          _push(`<!---->`);
        }
        if (relationship.value?.muting) {
          _push(`<!--[--><span elk-group-hover="hidden">${ssrInterpolate(_ctx.$t("account.muting"))}</span><span hidden elk-group-hover="inline">${ssrInterpolate(_ctx.$t("account.unmute"))}</span><!--]-->`);
        } else if (relationship.value ? relationship.value.following : _ctx.context === "following") {
          _push(`<!--[--><span elk-group-hover="hidden">${ssrInterpolate(relationship.value?.followedBy ? _ctx.$t("account.mutuals") : _ctx.$t("account.following"))}</span><span hidden elk-group-hover="inline">${ssrInterpolate(_ctx.$t("account.unfollow"))}</span><!--]-->`);
        } else if (relationship.value?.requested) {
          _push(`<!--[--><span elk-group-hover="hidden">${ssrInterpolate(_ctx.$t("account.follow_requested"))}</span><span hidden elk-group-hover="inline">Withdraw follow request</span><!--]-->`);
        } else if (relationship.value ? relationship.value.followedBy : _ctx.context === "followedBy") {
          _push(`<!--[--><span elk-group-hover="hidden">${ssrInterpolate(_ctx.$t("account.follows_you"))}</span><span hidden elk-group-hover="inline">${ssrInterpolate(_ctx.account.locked ? _ctx.$t("account.request_follow") : _ctx.$t("account.follow_back"))}</span><!--]-->`);
        } else {
          _push(`<span>${ssrInterpolate(_ctx.account.locked ? _ctx.$t("account.request_follow") : _ctx.$t("account.follow"))}</span>`);
        }
        _push(`</button>`);
      } else {
        _push(`<!---->`);
      }
    };
  }
});

const _sfc_setup$m = _sfc_main$m.setup;
_sfc_main$m.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/account/AccountFollowButton.vue");
  return _sfc_setup$m ? _sfc_setup$m(props, ctx) : void 0;
};

function getDefault() {
  return {
    lastUpdate: 0,
    emojis: []
  };
}
const currentCustomEmojis = computed(getDefault) ;
function transformEmojiData(emojis) {
  const result = [];
  for (const emoji of emojis) {
    if (!emoji.visibleInPicker)
      continue;
    result.push({
      id: emoji.shortcode,
      native: ":emoji.shortcode:",
      name: emoji.shortcode,
      skins: [{ src: emoji.url || emoji.staticUrl }]
    });
  }
  return result;
}
computed(() => currentCustomEmojis.value.emojis.length ? [{
  id: "custom",
  name: `Custom emojis on ${currentServer.value}`,
  emojis: transformEmojiData(currentCustomEmojis.value.emojis)
}] : void 0);
function useEmojisFallback(emojisGetter) {
  return computed(() => {
    const result = [];
    const emojis = emojisGetter();
    if (emojis)
      result.push(...emojis);
    result.push(...currentCustomEmojis.value.emojis);
    return emojisArrayToObject(result);
  });
}

const shiki = ref();
const registeredLang = ref(/* @__PURE__ */ new Map());
let shikiImport;
function useHighlighter(lang) {
  if (!shikiImport) {
    shikiImport = import('unenv/runtime/mock/proxy').then(async (r) => {
      r.setCDN("/shiki/");
      shiki.value = await r.getHighlighter({
        themes: [
          "vitesse-dark",
          "vitesse-light"
        ],
        langs: [
          "js",
          "css",
          "html"
        ]
      });
    });
  }
  if (!shiki.value)
    return void 0;
  if (!registeredLang.value.get(lang)) {
    shiki.value.loadLanguage(lang).then(() => {
      registeredLang.value.set(lang, true);
    }).catch(() => {
      const fallbackLang = "md";
      shiki.value?.loadLanguage(fallbackLang).then(() => {
        registeredLang.value.set(fallbackLang, true);
      });
    });
    return void 0;
  }
  return shiki.value;
}
function useShikiTheme() {
  return useColorMode().value === "dark" ? "vitesse-dark" : "vitesse-light";
}
const HTML_ENTITIES = {
  "<": "&lt;",
  ">": "&gt;",
  "&": "&amp;",
  "'": "&apos;",
  '"': "&quot;"
};
function escapeHtml(text) {
  return text.replace(/[<>&'"]/g, (ch) => HTML_ENTITIES[ch]);
}
function highlightCode(code, lang) {
  const shiki2 = useHighlighter(lang);
  if (!shiki2)
    return escapeHtml(code);
  return shiki2.codeToHtml(code, {
    lang,
    theme: useShikiTheme()
  });
}

const _sfc_main$l = /* @__PURE__ */ defineComponent({
  __name: "ContentCode",
  __ssrInlineRender: true,
  props: {
    code: {},
    lang: {}
  },
  setup(__props) {
    const props = __props;
    const raw = computed(() => decodeURIComponent(props.code).replace(/&#39;/g, "'"));
    const langMap = {
      js: "javascript",
      ts: "typescript",
      vue: "html"
    };
    const highlighted = computed(() => {
      return props.lang ? highlightCode(raw.value, langMap[props.lang] || props.lang) : raw.value;
    });
    return (_ctx, _push, _parent, _attrs) => {
      if (_ctx.lang) {
        _push(`<pre${ssrRenderAttrs(mergeProps({ class: "code-block" }, _attrs))}>${unref(highlighted)}</pre>`);
      } else {
        _push(`<pre${ssrRenderAttrs(mergeProps({ class: "code-block" }, _attrs))}>${ssrInterpolate(raw.value)}</pre>`);
      }
    };
  }
});

const _sfc_setup$l = _sfc_main$l.setup;
_sfc_main$l.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/content/ContentCode.vue");
  return _sfc_setup$l ? _sfc_setup$l(props, ctx) : void 0;
};

const _sfc_main$k = /* @__PURE__ */ defineComponent({
  __name: "ContentMentionGroup",
  __ssrInlineRender: true,
  props: {
    replying: { type: Boolean }
  },
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<p${ssrRenderAttrs(mergeProps({
        flex: "~ gap-1 wrap",
        "items-center": "",
        "text-sm": "",
        class: { "zen-none": !_ctx.replying }
      }, _attrs))}><span i-ri-arrow-right-line ml--1 text-secondary-light></span>`);
      ssrRenderSlot(_ctx.$slots, "default", {}, null, _push, _parent);
      _push(`</p>`);
    };
  }
});

const _sfc_setup$k = _sfc_main$k.setup;
_sfc_main$k.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/content/ContentMentionGroup.vue");
  return _sfc_setup$k ? _sfc_setup$k(props, ctx) : void 0;
};

function getTextualAstComponents(astChildren) {
  return astChildren.filter(({ type }) => type === TEXT_NODE).map(({ value }) => value).reduce((accumulator, current) => accumulator + current, "").trim();
}
function contentToVNode(content, options) {
  let tree = parseMastodonHTML(content, options);
  const textContents = getTextualAstComponents(tree.children);
  if (options?.hideEmojis && textContents.length === 0)
    tree = parseMastodonHTML(content, { ...options, hideEmojis: false });
  return h(Fragment, (tree.children || []).map((n) => treeToVNode(n)));
}
function nodeToVNode(node) {
  if (node.type === TEXT_NODE)
    return node.value;
  if (node.name === "mention-group")
    return h(_sfc_main$k, node.attributes, () => node.children.map(treeToVNode));
  if ("children" in node) {
    if (node.name === "a" && (node.attributes.href?.startsWith("/") || node.attributes.href?.startsWith("."))) {
      node.attributes.to = node.attributes.href;
      const { href: _href, target: _target, ...attrs } = node.attributes;
      return h(
        RouterLink,
        attrs,
        () => node.children.map(treeToVNode)
      );
    }
    return h(
      node.name,
      node.attributes,
      node.children.map(treeToVNode)
    );
  }
  return null;
}
function treeToVNode(input) {
  if (!input)
    return null;
  if (input.type === TEXT_NODE)
    return decode(input.value);
  if ("children" in input) {
    const node = handleNode(input);
    if (node == null)
      return null;
    if (isVNode$1(node))
      return node;
    return nodeToVNode(node);
  }
  return null;
}
function handleMention(el) {
  if (el.name === "a" && el.attributes.class?.includes("mention")) {
    const href = el.attributes.href;
    if (href) {
      const matchUser = href.match(UserLinkRE);
      if (matchUser) {
        const [, server, username] = matchUser;
        const handle = `${username}@${server.replace(/(.+\.)(.+\..+)/, "$2")}`;
        el.attributes.href = `/${server}/@${username}`;
        return h(_sfc_main$e, { handle, class: "inline-block" }, () => nodeToVNode(el));
      }
      const matchTag = href.match(TagLinkRE);
      if (matchTag) {
        const [, , name] = matchTag;
        el.attributes.href = `/${currentServer.value}/tags/${name}`;
      }
    }
  }
  return void 0;
}
function handleCodeBlock(el) {
  if (el.name === "pre" && el.children[0]?.name === "code") {
    const codeEl = el.children[0];
    const classes = codeEl.attributes.class;
    const lang = classes?.split(/\s/g).find((i) => i.startsWith("language-"))?.replace("language-", "");
    const code = codeEl.children && codeEl.children.length > 0 ? recursiveTreeToText(codeEl) : "";
    return h(_sfc_main$l, { lang, code: encodeURIComponent(code) });
  }
}
function handleNode(el) {
  return handleCodeBlock(el) || handleMention(el) || el;
}

const _sfc_main$j = /* @__PURE__ */ defineComponent({
  ...{
    name: "ContentRich"
  },
  __name: "ContentRich.setup",
  props: {
    content: {},
    emojis: {},
    hideEmojis: { type: Boolean, default: false },
    markdown: { type: Boolean, default: true }
  },
  setup(__props) {
    const emojisObject = useEmojisFallback(() => __props.emojis);
    
    return () => h(
      "span",
      { class: "content-rich", dir: "auto" },
      contentToVNode(__props.content, {
        emojis: emojisObject.value,
        hideEmojis: __props.hideEmojis,
        markdown: __props.markdown
      })
    )
  }
});

const _sfc_setup$j = _sfc_main$j.setup;
_sfc_main$j.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/content/ContentRich.setup.ts");
  return _sfc_setup$j ? _sfc_setup$j(props, ctx) : void 0;
};

const _sfc_main$i = /* @__PURE__ */ defineComponent({
  __name: "CommonTooltip",
  __ssrInlineRender: true,
  props: {
    content: {}
  },
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      const _component_VTooltip = resolveComponent("VTooltip");
      _push(ssrRenderComponent(_component_VTooltip, mergeProps(_ctx.$attrs, { "auto-hide": "" }, _attrs), {
        popper: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div text-3${_scopeId}>`);
            ssrRenderSlot(_ctx.$slots, "popper", {}, () => {
              _push2(`${ssrInterpolate(_ctx.content)}`);
            }, _push2, _parent2, _scopeId);
            _push2(`</div>`);
          } else {
            return [
              createVNode("div", { "text-3": "" }, [
                renderSlot(_ctx.$slots, "popper", {}, () => [
                  createTextVNode(toDisplayString(_ctx.content), 1)
                ])
              ])
            ];
          }
        }),
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            ssrRenderSlot(_ctx.$slots, "default", {}, null, _push2, _parent2, _scopeId);
          } else {
            return [
              renderSlot(_ctx.$slots, "default")
            ];
          }
        }),
        _: 3
      }, _parent));
    };
  }
});

const _sfc_setup$i = _sfc_main$i.setup;
_sfc_main$i.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/common/CommonTooltip.vue");
  return _sfc_setup$i ? _sfc_setup$i(props, ctx) : void 0;
};

function useHumanReadableNumber() {
  const { n, locale } = useI18n();
  const fn = (num) => {
    return n(
      num,
      num < 1e4 ? "smallCounting" : num < 1e6 ? "kiloCounting" : "millionCounting",
      locale.value
    );
  };
  return {
    formatHumanReadableNumber: (num) => fn(unref(num)),
    formatNumber: (num) => n(unref(num), "smallCounting", locale.value),
    formatPercentage: (num) => n(unref(num), "percentage", locale.value),
    forSR: (num) => unref(num) > 1e4
  };
}
function useFormattedDateTime(value, options = { dateStyle: "long", timeStyle: "medium" }) {
  const { locale } = useI18n();
  const formatter2 = computed(() => Intl.DateTimeFormat(locale.value, options));
  return computed(() => {
    const v = resolveUnref(value);
    return v ? formatter2.value.format(new Date(v)) : "";
  });
}
function useTimeAgoOptions(short = false) {
  const { d, t, n: fnf, locale } = useI18n();
  const prefix = short ? "short_" : "";
  const fn = (n, past, key) => {
    return t(`time_ago_options.${prefix}${key}_${past ? "past" : "future"}`, n, {
      named: {
        v: fnf(n, "smallCounting", locale.value)
      }
    });
  };
  return {
    rounding: "floor",
    showSecond: !short,
    updateInterval: short ? 6e4 : 1e3,
    messages: {
      justNow: t("time_ago_options.just_now"),
      // just return the value
      past: (n) => n,
      // just return the value
      future: (n) => n,
      second: (n, p) => fn(n, p, "second"),
      minute: (n, p) => fn(n, p, "minute"),
      hour: (n, p) => fn(n, p, "hour"),
      day: (n, p) => fn(n, p, "day"),
      week: (n, p) => fn(n, p, "week"),
      month: (n, p) => fn(n, p, "month"),
      year: (n, p) => fn(n, p, "year"),
      invalid: ""
    },
    fullDateFormatter(date) {
      return d(date, short ? "short" : "long");
    }
  };
}

const _sfc_main$h = /* @__PURE__ */ defineComponent({
  ...{
    inheritAttrs: false
  },
  __name: "LocalizedNumber",
  __ssrInlineRender: true,
  props: {
    count: {},
    keypath: {}
  },
  setup(__props) {
    const props = __props;
    const { formatHumanReadableNumber, formatNumber, forSR } = useHumanReadableNumber();
    const useSR = computed(() => forSR(props.count));
    const rawNumber = computed(() => formatNumber(props.count));
    const humanReadableNumber = computed(() => formatHumanReadableNumber(props.count));
    return (_ctx, _push, _parent, _attrs) => {
      const _component_i18n_t = resolveComponent("i18n-t");
      const _component_CommonTooltip = _sfc_main$i;
      _push(ssrRenderComponent(_component_i18n_t, mergeProps({
        keypath: _ctx.keypath,
        plural: _ctx.count,
        tag: "span",
        class: "flex gap-x-1"
      }, _attrs), {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            if (useSR.value) {
              _push2(ssrRenderComponent(_component_CommonTooltip, {
                content: rawNumber.value,
                placement: "bottom"
              }, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(`<span${ssrRenderAttrs(mergeProps({ "aria-hidden": "true" }, _ctx.$attrs))}${_scopeId2}>${ssrInterpolate(humanReadableNumber.value)}</span><span sr-only${_scopeId2}>${ssrInterpolate(rawNumber.value)}</span>`);
                  } else {
                    return [
                      createVNode("span", mergeProps({ "aria-hidden": "true" }, _ctx.$attrs), toDisplayString(humanReadableNumber.value), 17),
                      createVNode("span", { "sr-only": "" }, toDisplayString(rawNumber.value), 1)
                    ];
                  }
                }),
                _: 1
              }, _parent2, _scopeId));
            } else {
              _push2(`<span${ssrRenderAttrs(_ctx.$attrs)}${_scopeId}>${ssrInterpolate(humanReadableNumber.value)}</span>`);
            }
          } else {
            return [
              useSR.value ? (openBlock(), createBlock(_component_CommonTooltip, {
                key: 0,
                content: rawNumber.value,
                placement: "bottom"
              }, {
                default: withCtx(() => [
                  createVNode("span", mergeProps({ "aria-hidden": "true" }, _ctx.$attrs), toDisplayString(humanReadableNumber.value), 17),
                  createVNode("span", { "sr-only": "" }, toDisplayString(rawNumber.value), 1)
                ]),
                _: 1
              }, 8, ["content"])) : (openBlock(), createBlock("span", mergeProps({ key: 1 }, _ctx.$attrs), toDisplayString(humanReadableNumber.value), 17))
            ];
          }
        }),
        _: 1
      }, _parent));
    };
  }
});

const _sfc_setup$h = _sfc_main$h.setup;
_sfc_main$h.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/common/LocalizedNumber.vue");
  return _sfc_setup$h ? _sfc_setup$h(props, ctx) : void 0;
};

const _sfc_main$g = /* @__PURE__ */ defineComponent({
  __name: "AccountPostsFollowers",
  __ssrInlineRender: true,
  props: {
    account: {},
    isHoverCard: { type: Boolean }
  },
  setup(__props) {
    const userSettings = useUserSettings();
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NuxtLink = __nuxt_component_0$1;
      const _component_CommonLocalizedNumber = _sfc_main$h;
      _push(`<div${ssrRenderAttrs(mergeProps({
        flex: "",
        "gap-5": ""
      }, _attrs))}>`);
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: ("getAccountRoute" in _ctx ? _ctx.getAccountRoute : unref(getAccountRoute))(_ctx.account),
        replace: "",
        "text-secondary": "",
        "exact-active-class": "text-primary"
      }, {
        default: withCtx(({ isExactActive }, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_CommonLocalizedNumber, {
              keypath: "account.posts_count",
              count: _ctx.account.statusesCount,
              "font-bold": "",
              class: isExactActive ? "text-primary" : "text-base"
            }, null, _parent2, _scopeId));
          } else {
            return [
              createVNode(_component_CommonLocalizedNumber, {
                keypath: "account.posts_count",
                count: _ctx.account.statusesCount,
                "font-bold": "",
                class: isExactActive ? "text-primary" : "text-base"
              }, null, 8, ["count", "class"])
            ];
          }
        }),
        _: 1
      }, _parent));
      if (!(_ctx.isHoverCard && ("getPreferences" in _ctx ? _ctx.getPreferences : unref(getPreferences))(unref(userSettings), "hideFollowerCount"))) {
        _push(ssrRenderComponent(_component_NuxtLink, {
          to: ("getAccountFollowingRoute" in _ctx ? _ctx.getAccountFollowingRoute : unref(getAccountFollowingRoute))(_ctx.account),
          replace: "",
          "text-secondary": "",
          "exact-active-class": "text-primary"
        }, {
          default: withCtx(({ isExactActive }, _push2, _parent2, _scopeId) => {
            if (_push2) {
              if (!("getPreferences" in _ctx ? _ctx.getPreferences : unref(getPreferences))(unref(userSettings), "hideFollowerCount")) {
                _push2(`<!--[-->`);
                if (_ctx.account.followingCount >= 0) {
                  _push2(ssrRenderComponent(_component_CommonLocalizedNumber, {
                    keypath: "account.following_count",
                    count: _ctx.account.followingCount,
                    "font-bold": "",
                    class: isExactActive ? "text-primary" : "text-base"
                  }, null, _parent2, _scopeId));
                } else {
                  _push2(`<div flex gap-x-1${_scopeId}><span font-bold text-base${_scopeId}>Hidden</span><span${_scopeId}>${ssrInterpolate(_ctx.$t("account.following"))}</span></div>`);
                }
                _push2(`<!--]-->`);
              } else {
                _push2(`<span${_scopeId}>${ssrInterpolate(_ctx.$t("account.following"))}</span>`);
              }
            } else {
              return [
                !("getPreferences" in _ctx ? _ctx.getPreferences : unref(getPreferences))(unref(userSettings), "hideFollowerCount") ? (openBlock(), createBlock(Fragment, { key: 0 }, [
                  _ctx.account.followingCount >= 0 ? (openBlock(), createBlock(_component_CommonLocalizedNumber, {
                    key: 0,
                    keypath: "account.following_count",
                    count: _ctx.account.followingCount,
                    "font-bold": "",
                    class: isExactActive ? "text-primary" : "text-base"
                  }, null, 8, ["count", "class"])) : (openBlock(), createBlock("div", {
                    key: 1,
                    flex: "",
                    "gap-x-1": ""
                  }, [
                    createVNode("span", {
                      "font-bold": "",
                      "text-base": ""
                    }, "Hidden"),
                    createVNode("span", null, toDisplayString(_ctx.$t("account.following")), 1)
                  ]))
                ], 64)) : (openBlock(), createBlock("span", { key: 1 }, toDisplayString(_ctx.$t("account.following")), 1))
              ];
            }
          }),
          _: 1
        }, _parent));
      } else {
        _push(`<!---->`);
      }
      if (!(_ctx.isHoverCard && ("getPreferences" in _ctx ? _ctx.getPreferences : unref(getPreferences))(unref(userSettings), "hideFollowerCount"))) {
        _push(ssrRenderComponent(_component_NuxtLink, {
          to: ("getAccountFollowersRoute" in _ctx ? _ctx.getAccountFollowersRoute : unref(getAccountFollowersRoute))(_ctx.account),
          replace: "",
          "text-secondary": "",
          "exact-active-class": "text-primary"
        }, {
          default: withCtx(({ isExactActive }, _push2, _parent2, _scopeId) => {
            if (_push2) {
              if (!("getPreferences" in _ctx ? _ctx.getPreferences : unref(getPreferences))(unref(userSettings), "hideFollowerCount")) {
                _push2(`<!--[-->`);
                if (_ctx.account.followersCount >= 0) {
                  _push2(ssrRenderComponent(_component_CommonLocalizedNumber, {
                    keypath: "account.followers_count",
                    count: _ctx.account.followersCount,
                    "font-bold": "",
                    class: isExactActive ? "text-primary" : "text-base"
                  }, null, _parent2, _scopeId));
                } else {
                  _push2(`<div flex gap-x-1${_scopeId}><span font-bold text-base${_scopeId}>Hidden</span><span${_scopeId}>${ssrInterpolate(_ctx.$t("account.followers"))}</span></div>`);
                }
                _push2(`<!--]-->`);
              } else {
                _push2(`<span${_scopeId}>${ssrInterpolate(_ctx.$t("account.followers"))}</span>`);
              }
            } else {
              return [
                !("getPreferences" in _ctx ? _ctx.getPreferences : unref(getPreferences))(unref(userSettings), "hideFollowerCount") ? (openBlock(), createBlock(Fragment, { key: 0 }, [
                  _ctx.account.followersCount >= 0 ? (openBlock(), createBlock(_component_CommonLocalizedNumber, {
                    key: 0,
                    keypath: "account.followers_count",
                    count: _ctx.account.followersCount,
                    "font-bold": "",
                    class: isExactActive ? "text-primary" : "text-base"
                  }, null, 8, ["count", "class"])) : (openBlock(), createBlock("div", {
                    key: 1,
                    flex: "",
                    "gap-x-1": ""
                  }, [
                    createVNode("span", {
                      "font-bold": "",
                      "text-base": ""
                    }, "Hidden"),
                    createVNode("span", null, toDisplayString(_ctx.$t("account.followers")), 1)
                  ]))
                ], 64)) : (openBlock(), createBlock("span", { key: 1 }, toDisplayString(_ctx.$t("account.followers")), 1))
              ];
            }
          }),
          _: 1
        }, _parent));
      } else {
        _push(`<!---->`);
      }
      _push(`</div>`);
    };
  }
});

const _sfc_setup$g = _sfc_main$g.setup;
_sfc_main$g.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/account/AccountPostsFollowers.vue");
  return _sfc_setup$g ? _sfc_setup$g(props, ctx) : void 0;
};

const _sfc_main$f = /* @__PURE__ */ defineComponent({
  __name: "AccountHoverCard",
  __ssrInlineRender: true,
  props: {
    account: {}
  },
  setup(__props) {
    const relationship = useRelationship(__props.account);
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NuxtLink = __nuxt_component_0$1;
      const _component_AccountInfo = _sfc_main$7;
      const _component_AccountFollowButton = _sfc_main$m;
      const _component_ContentRich = _sfc_main$j;
      const _component_AccountPostsFollowers = _sfc_main$g;
      _push(`<div${ssrRenderAttrs(mergeProps({
        style: unref(relationship) ? null : { display: "none" },
        flex: "~ col gap2",
        rounded: "",
        "min-w-90": "",
        "max-w-120": "",
        "z-100": "",
        "overflow-hidden": "",
        "p-4": ""
      }, _attrs))}><div flex="~ gap2" items-center>`);
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: ("getAccountRoute" in _ctx ? _ctx.getAccountRoute : unref(getAccountRoute))(_ctx.account),
        "flex-auto": "",
        "rounded-full": "",
        "hover:bg-active": "",
        "transition-100": "",
        pe5: "",
        "me-a": ""
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_AccountInfo, { account: _ctx.account }, null, _parent2, _scopeId));
          } else {
            return [
              createVNode(_component_AccountInfo, { account: _ctx.account }, null, 8, ["account"])
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_component_AccountFollowButton, {
        "text-sm": "",
        account: _ctx.account,
        relationship: unref(relationship)
      }, null, _parent));
      _push(`</div>`);
      if (_ctx.account.note) {
        _push(`<div max-h-100 overflow-y-auto>`);
        _push(ssrRenderComponent(_component_ContentRich, {
          "text-4": "",
          "text-secondary": "",
          content: _ctx.account.note,
          emojis: _ctx.account.emojis
        }, null, _parent));
        _push(`</div>`);
      } else {
        _push(`<!---->`);
      }
      _push(ssrRenderComponent(_component_AccountPostsFollowers, {
        "text-sm": "",
        account: _ctx.account,
        "is-hover-card": true
      }, null, _parent));
      _push(`</div>`);
    };
  }
});

const _sfc_setup$f = _sfc_main$f.setup;
_sfc_main$f.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/account/AccountHoverCard.vue");
  return _sfc_setup$f ? _sfc_setup$f(props, ctx) : void 0;
};

const _sfc_main$e = /* @__PURE__ */ defineComponent({
  ...{
    inheritAttrs: false
  },
  __name: "AccountHoverWrapper",
  __ssrInlineRender: true,
  props: {
    account: {},
    handle: {},
    disabled: { type: Boolean }
  },
  setup(__props) {
    const props = __props;
    const account = computed(() => props.account || (props.handle ? useAccountByHandle(props.handle) : void 0));
    const userSettings = useUserSettings();
    return (_ctx, _push, _parent, _attrs) => {
      const _component_VMenu = resolveComponent("VMenu");
      const _component_AccountHoverCard = _sfc_main$f;
      if (!_ctx.disabled && unref(account) && !("getPreferences" in _ctx ? _ctx.getPreferences : unref(getPreferences))(unref(userSettings), "hideAccountHoverCard")) {
        _push(ssrRenderComponent(_component_VMenu, mergeProps({
          placement: "bottom-start",
          delay: { show: 500, hide: 100 }
        }, _ctx.$attrs, { "close-on-content-click": false }, _attrs), {
          popper: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              if (unref(account)) {
                _push2(ssrRenderComponent(_component_AccountHoverCard, { account: unref(account) }, null, _parent2, _scopeId));
              } else {
                _push2(`<!---->`);
              }
            } else {
              return [
                unref(account) ? (openBlock(), createBlock(_component_AccountHoverCard, {
                  key: 0,
                  account: unref(account)
                }, null, 8, ["account"])) : createCommentVNode("", true)
              ];
            }
          }),
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              ssrRenderSlot(_ctx.$slots, "default", {}, null, _push2, _parent2, _scopeId);
            } else {
              return [
                renderSlot(_ctx.$slots, "default")
              ];
            }
          }),
          _: 3
        }, _parent));
      } else {
        ssrRenderSlot(_ctx.$slots, "default", {}, null, _push, _parent);
      }
    };
  }
});

const _sfc_setup$e = _sfc_main$e.setup;
_sfc_main$e.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/account/AccountHoverWrapper.vue");
  return _sfc_setup$e ? _sfc_setup$e(props, ctx) : void 0;
};

const _sfc_main$d = /* @__PURE__ */ defineComponent({
  __name: "AccountBigAvatar",
  __ssrInlineRender: true,
  props: {
    account: {},
    square: { type: Boolean }
  },
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      const _component_AccountAvatar = _sfc_main$n;
      _push(`<div${ssrRenderAttrs(mergeProps({
        key: _ctx.account.avatar
      }, _ctx.$attrs, {
        style: { "clip-path": _ctx.square ? `url(#avatar-mask)` : "none" },
        class: { "rounded-full": !_ctx.square },
        "bg-base": "",
        "w-54px": "",
        "h-54px": "",
        flex: "",
        "items-center": "",
        "justify-center": ""
      }, _attrs))}>`);
      _push(ssrRenderComponent(_component_AccountAvatar, {
        account: _ctx.account,
        "w-48px": "",
        "h-48px": "",
        square: _ctx.square
      }, null, _parent));
      _push(`</div>`);
    };
  }
});

const _sfc_setup$d = _sfc_main$d.setup;
_sfc_main$d.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/account/AccountBigAvatar.vue");
  return _sfc_setup$d ? _sfc_setup$d(props, ctx) : void 0;
};

const _sfc_main$c = /* @__PURE__ */ defineComponent({
  __name: "AccountDisplayName",
  __ssrInlineRender: true,
  props: {
    account: {},
    hideEmojis: { type: Boolean, default: false }
  },
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      const _component_ContentRich = _sfc_main$j;
      _push(ssrRenderComponent(_component_ContentRich, mergeProps({
        content: ("getDisplayName" in _ctx ? _ctx.getDisplayName : unref(getDisplayName))(_ctx.account, { rich: true }),
        emojis: _ctx.account.emojis,
        "hide-emojis": _ctx.hideEmojis,
        markdown: false
      }, _attrs), null, _parent));
    };
  }
});

const _sfc_setup$c = _sfc_main$c.setup;
_sfc_main$c.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/account/AccountDisplayName.vue");
  return _sfc_setup$c ? _sfc_setup$c(props, ctx) : void 0;
};

const _sfc_main$b = /* @__PURE__ */ defineComponent({
  __name: "AccountRolesIndicator",
  __ssrInlineRender: true,
  props: {
    account: {},
    limit: {}
  },
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<!--[--><div flex="~ gap1" items-center class="border border-base rounded-md px-1" text-secondary-light>`);
      ssrRenderSlot(_ctx.$slots, "prepend", {}, null, _push, _parent);
      _push(`<!--[-->`);
      ssrRenderList(_ctx.account.roles?.slice(0, _ctx.limit), (role) => {
        _push(`<div flex><div style="${ssrRenderStyle(`color: ${role.color}; border-color: ${role.color}`)}">${ssrInterpolate(role.name)}</div></div>`);
      });
      _push(`<!--]--></div>`);
      if (_ctx.limit && _ctx.account.roles?.length > _ctx.limit) {
        _push(`<div flex="~ gap1" items-center class="border border-base rounded-md px-1" text-secondary-light> +${ssrInterpolate(_ctx.account.roles?.length - _ctx.limit)}</div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`<!--]-->`);
    };
  }
});

const _sfc_setup$b = _sfc_main$b.setup;
_sfc_main$b.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/account/AccountRolesIndicator.vue");
  return _sfc_setup$b ? _sfc_setup$b(props, ctx) : void 0;
};

const _sfc_main$a = /* @__PURE__ */ defineComponent({
  __name: "AccountLockIndicator",
  __ssrInlineRender: true,
  props: {
    showLabel: { type: Boolean }
  },
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      const _component_CommonTooltip = _sfc_main$i;
      _push(`<div${ssrRenderAttrs(mergeProps({
        flex: "~ gap1",
        "items-center": "",
        class: { "border border-base rounded-md px-1": _ctx.showLabel },
        "text-secondary-light": ""
      }, _attrs))}>`);
      ssrRenderSlot(_ctx.$slots, "prepend", {}, null, _push, _parent);
      _push(ssrRenderComponent(_component_CommonTooltip, {
        "no-auto-focus": "",
        content: "Lock",
        disabled: _ctx.showLabel
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div i-ri:lock-line${_scopeId}></div>`);
          } else {
            return [
              createVNode("div", { "i-ri:lock-line": "" })
            ];
          }
        }),
        _: 1
      }, _parent));
      if (_ctx.showLabel) {
        _push(`<div> Lock </div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div>`);
    };
  }
});

const _sfc_setup$a = _sfc_main$a.setup;
_sfc_main$a.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/account/AccountLockIndicator.vue");
  return _sfc_setup$a ? _sfc_setup$a(props, ctx) : void 0;
};

const _sfc_main$9 = /* @__PURE__ */ defineComponent({
  __name: "AccountBotIndicator",
  __ssrInlineRender: true,
  props: {
    showLabel: { type: Boolean }
  },
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      const _component_CommonTooltip = _sfc_main$i;
      _push(`<div${ssrRenderAttrs(mergeProps({
        flex: "~ gap1",
        "items-center": "",
        class: { "border border-base rounded-md px-1": _ctx.showLabel },
        "text-secondary-light": ""
      }, _attrs))}>`);
      ssrRenderSlot(_ctx.$slots, "prepend", {}, null, _push, _parent);
      _push(ssrRenderComponent(_component_CommonTooltip, {
        "no-auto-focus": "",
        content: _ctx.$t("account.bot"),
        disabled: _ctx.showLabel
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div i-mdi:robot-outline${_scopeId}></div>`);
          } else {
            return [
              createVNode("div", { "i-mdi:robot-outline": "" })
            ];
          }
        }),
        _: 1
      }, _parent));
      if (_ctx.showLabel) {
        _push(`<div>${ssrInterpolate(_ctx.$t("account.bot"))}</div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div>`);
    };
  }
});

const _sfc_setup$9 = _sfc_main$9.setup;
_sfc_main$9.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/account/AccountBotIndicator.vue");
  return _sfc_setup$9 ? _sfc_setup$9(props, ctx) : void 0;
};

const _sfc_main$8 = /* @__PURE__ */ defineComponent({
  __name: "AccountHandle",
  __ssrInlineRender: true,
  props: {
    account: {}
  },
  setup(__props) {
    const serverName = computed(() => getServerName(__props.account));
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<p${ssrRenderAttrs(mergeProps({
        "line-clamp-1": "",
        "whitespace-pre-wrap": "",
        "break-all": "",
        "text-secondary-light": "",
        "leading-tight": "",
        dir: "ltr"
      }, _attrs))}><span text-secondary>${ssrInterpolate(("getShortHandle" in _ctx ? _ctx.getShortHandle : unref(getShortHandle))(_ctx.account))}</span>`);
      if (serverName.value) {
        _push(`<span text-secondary-light>@${ssrInterpolate(serverName.value)}</span>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</p>`);
    };
  }
});

const _sfc_setup$8 = _sfc_main$8.setup;
_sfc_main$8.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/account/AccountHandle.vue");
  return _sfc_setup$8 ? _sfc_setup$8(props, ctx) : void 0;
};

const _sfc_main$7 = /* @__PURE__ */ defineComponent({
  ...{
    inheritAttrs: false
  },
  __name: "AccountInfo",
  __ssrInlineRender: true,
  props: {
    account: {},
    as: { default: "div" },
    hoverCard: { type: Boolean },
    square: { type: Boolean }
  },
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      const _component_AccountHoverWrapper = _sfc_main$e;
      const _component_AccountBigAvatar = _sfc_main$d;
      const _component_AccountDisplayName = _sfc_main$c;
      const _component_AccountRolesIndicator = _sfc_main$b;
      const _component_AccountLockIndicator = _sfc_main$a;
      const _component_AccountBotIndicator = _sfc_main$9;
      const _component_AccountHandle = _sfc_main$8;
      ssrRenderVNode(_push, createVNode(resolveDynamicComponent(_ctx.as), mergeProps({
        flex: "",
        "gap-3": ""
      }, _ctx.$attrs, _attrs), {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_AccountHoverWrapper, {
              disabled: !_ctx.hoverCard,
              account: _ctx.account
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_component_AccountBigAvatar, {
                    account: _ctx.account,
                    "shrink-0": "",
                    square: _ctx.square
                  }, null, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(_component_AccountBigAvatar, {
                      account: _ctx.account,
                      "shrink-0": "",
                      square: _ctx.square
                    }, null, 8, ["account", "square"])
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(`<div flex="~ col" shrink pt-1 h-full overflow-hidden justify-center leading-none select-none${_scopeId}><div flex="~" gap-2${_scopeId}>`);
            _push2(ssrRenderComponent(_component_AccountDisplayName, {
              account: _ctx.account,
              "font-bold": "",
              "line-clamp-1": "",
              "ws-pre-wrap": "",
              "break-all": "",
              "text-lg": ""
            }, null, _parent2, _scopeId));
            if (_ctx.account.roles?.length) {
              _push2(ssrRenderComponent(_component_AccountRolesIndicator, {
                account: _ctx.account,
                limit: 1
              }, null, _parent2, _scopeId));
            } else {
              _push2(`<!---->`);
            }
            if (_ctx.account.locked) {
              _push2(ssrRenderComponent(_component_AccountLockIndicator, { "text-xs": "" }, null, _parent2, _scopeId));
            } else {
              _push2(`<!---->`);
            }
            if (_ctx.account.bot) {
              _push2(ssrRenderComponent(_component_AccountBotIndicator, { "text-xs": "" }, null, _parent2, _scopeId));
            } else {
              _push2(`<!---->`);
            }
            _push2(`</div>`);
            _push2(ssrRenderComponent(_component_AccountHandle, {
              account: _ctx.account,
              "text-secondary-light": ""
            }, null, _parent2, _scopeId));
            _push2(`</div>`);
          } else {
            return [
              createVNode(_component_AccountHoverWrapper, {
                disabled: !_ctx.hoverCard,
                account: _ctx.account
              }, {
                default: withCtx(() => [
                  createVNode(_component_AccountBigAvatar, {
                    account: _ctx.account,
                    "shrink-0": "",
                    square: _ctx.square
                  }, null, 8, ["account", "square"])
                ]),
                _: 1
              }, 8, ["disabled", "account"]),
              createVNode("div", {
                flex: "~ col",
                shrink: "",
                "pt-1": "",
                "h-full": "",
                "overflow-hidden": "",
                "justify-center": "",
                "leading-none": "",
                "select-none": ""
              }, [
                createVNode("div", {
                  flex: "~",
                  "gap-2": ""
                }, [
                  createVNode(_component_AccountDisplayName, {
                    account: _ctx.account,
                    "font-bold": "",
                    "line-clamp-1": "",
                    "ws-pre-wrap": "",
                    "break-all": "",
                    "text-lg": ""
                  }, null, 8, ["account"]),
                  _ctx.account.roles?.length ? (openBlock(), createBlock(_component_AccountRolesIndicator, {
                    key: 0,
                    account: _ctx.account,
                    limit: 1
                  }, null, 8, ["account"])) : createCommentVNode("", true),
                  _ctx.account.locked ? (openBlock(), createBlock(_component_AccountLockIndicator, {
                    key: 1,
                    "text-xs": ""
                  })) : createCommentVNode("", true),
                  _ctx.account.bot ? (openBlock(), createBlock(_component_AccountBotIndicator, {
                    key: 2,
                    "text-xs": ""
                  })) : createCommentVNode("", true)
                ]),
                createVNode(_component_AccountHandle, {
                  account: _ctx.account,
                  "text-secondary-light": ""
                }, null, 8, ["account"])
              ])
            ];
          }
        }),
        _: 1
      }), _parent);
    };
  }
});

const _sfc_setup$7 = _sfc_main$7.setup;
_sfc_main$7.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/account/AccountInfo.vue");
  return _sfc_setup$7 ? _sfc_setup$7(props, ctx) : void 0;
};

const InjectionKeyDropdownContext = Symbol("dropdown-context");

function useDropdownContext() {
  return inject(InjectionKeyDropdownContext, void 0);
}

const _sfc_main$6 = /* @__PURE__ */ defineComponent({
  __name: "DropdownItem",
  __ssrInlineRender: true,
  props: {
    is: { default: "div" },
    text: {},
    description: {},
    icon: {},
    checked: { type: Boolean },
    command: { type: Boolean }
  },
  emits: ["click"],
  setup(__props, { emit }) {
    const props = __props;
    const { hide } = useDropdownContext() || {};
    const el = ref();
    function handleClick(evt) {
      hide?.();
      emit("click", evt);
    }
    useCommand({
      scope: "Actions",
      order: -1,
      visible: () => props.command && props.text,
      name: () => props.text,
      icon: () => props.icon ?? "i-ri:question-line",
      description: () => props.description,
      onActivate() {
        const clickEvent = new MouseEvent("click", {
          view: window,
          bubbles: true,
          cancelable: true
        });
        el.value?.dispatchEvent(clickEvent);
      }
    });
    return (_ctx, _push, _parent, _attrs) => {
      ssrRenderVNode(_push, createVNode(resolveDynamicComponent(_ctx.is), mergeProps(_ctx.$attrs, {
        ref_key: "el",
        ref: el,
        "w-full": "",
        flex: "",
        "gap-3": "",
        "items-center": "",
        "cursor-pointer": "",
        px4: "",
        py3: "",
        "select-none": "",
        "hover-bg-active": "",
        "aria-label": _ctx.text,
        onClick: handleClick
      }, _attrs), {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            if (_ctx.icon) {
              _push2(`<div class="${ssrRenderClass(_ctx.icon)}"${_scopeId}></div>`);
            } else {
              _push2(`<!---->`);
            }
            _push2(`<div flex="~ col"${_scopeId}><div text-15px${_scopeId}>`);
            ssrRenderSlot(_ctx.$slots, "default", {}, () => {
              _push2(`${ssrInterpolate(_ctx.text)}`);
            }, _push2, _parent2, _scopeId);
            _push2(`</div><div text-3 text-secondary${_scopeId}>`);
            ssrRenderSlot(_ctx.$slots, "description", {}, () => {
              if (_ctx.description) {
                _push2(`<p${_scopeId}>${ssrInterpolate(_ctx.description)}</p>`);
              } else {
                _push2(`<!---->`);
              }
            }, _push2, _parent2, _scopeId);
            _push2(`</div></div><div flex-auto${_scopeId}></div>`);
            if (_ctx.checked) {
              _push2(`<div i-ri:check-line${_scopeId}></div>`);
            } else {
              _push2(`<!---->`);
            }
            ssrRenderSlot(_ctx.$slots, "actions", {}, null, _push2, _parent2, _scopeId);
          } else {
            return [
              _ctx.icon ? (openBlock(), createBlock("div", {
                key: 0,
                class: _ctx.icon
              }, null, 2)) : createCommentVNode("", true),
              createVNode("div", { flex: "~ col" }, [
                createVNode("div", { "text-15px": "" }, [
                  renderSlot(_ctx.$slots, "default", {}, () => [
                    createTextVNode(toDisplayString(_ctx.text), 1)
                  ])
                ]),
                createVNode("div", {
                  "text-3": "",
                  "text-secondary": ""
                }, [
                  renderSlot(_ctx.$slots, "description", {}, () => [
                    _ctx.description ? (openBlock(), createBlock("p", { key: 0 }, toDisplayString(_ctx.description), 1)) : createCommentVNode("", true)
                  ])
                ])
              ]),
              createVNode("div", { "flex-auto": "" }),
              _ctx.checked ? (openBlock(), createBlock("div", {
                key: 1,
                "i-ri:check-line": ""
              })) : createCommentVNode("", true),
              renderSlot(_ctx.$slots, "actions")
            ];
          }
        }),
        _: 3
      }), _parent);
    };
  }
});

const _sfc_setup$6 = _sfc_main$6.setup;
_sfc_main$6.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/common/dropdown/DropdownItem.vue");
  return _sfc_setup$6 ? _sfc_setup$6(props, ctx) : void 0;
};

const _sfc_main$5 = /* @__PURE__ */ defineComponent({
  __name: "UserSwitcher",
  __ssrInlineRender: true,
  emits: ["click"],
  setup(__props, { emit }) {
    const all = useUsers();
    const { singleInstanceServer, oauth } = useSignIn();
    const sorted = computed(() => {
      return [
        currentUser.value,
        ...all.value.filter((account) => account.token !== currentUser.value?.token)
      ].filter(Boolean);
    });
    useRouter();
    function processSignIn() {
      if (singleInstanceServer)
        oauth();
      else
        openSigninDialog();
    }
    return (_ctx, _push, _parent, _attrs) => {
      const _component_AccountInfo = _sfc_main$7;
      const _component_CommonDropdownItem = _sfc_main$6;
      _push(`<div${ssrRenderAttrs(mergeProps({
        "sm:min-w-80": "",
        "max-w-100vw": "",
        mxa: "",
        py2: "",
        flex: "~ col"
      }, _attrs))}><!--[-->`);
      ssrRenderList(unref(sorted), (user) => {
        _push(`<button flex rounded px4 py3 text-left hover:bg-active cursor-pointer transition-100 aria-label="Switch user">`);
        _push(ssrRenderComponent(_component_AccountInfo, {
          account: user.account,
          "hover-card": false,
          square: ""
        }, null, _parent));
        _push(`<div flex-auto></div>`);
        if (user.token === ("currentUser" in _ctx ? _ctx.currentUser : unref(currentUser))?.token) {
          _push(`<div i-ri:check-line text-primary mya text-2xl></div>`);
        } else {
          _push(`<!---->`);
        }
        _push(`</button>`);
      });
      _push(`<!--]--><div border="t base" pt2>`);
      _push(ssrRenderComponent(_component_CommonDropdownItem, {
        is: "button",
        text: _ctx.$t("user.add_existing"),
        icon: "i-ri:user-add-line",
        "w-full": "",
        onClick: processSignIn
      }, null, _parent));
      if (("isHydrated" in _ctx ? _ctx.isHydrated : unref(isHydrated)) && ("currentUser" in _ctx ? _ctx.currentUser : unref(currentUser))) {
        _push(ssrRenderComponent(_component_CommonDropdownItem, {
          is: "button",
          text: _ctx.$t("user.sign_out_account", [("getFullHandle" in _ctx ? _ctx.getFullHandle : unref(getFullHandle))(("currentUser" in _ctx ? _ctx.currentUser : unref(currentUser)).account)]),
          icon: "i-ri:logout-box-line rtl-flip",
          "w-full": "",
          onClick: ("signOut" in _ctx ? _ctx.signOut : unref(signOut))
        }, null, _parent));
      } else {
        _push(`<!---->`);
      }
      _push(`</div></div>`);
    };
  }
});

const _sfc_setup$5 = _sfc_main$5.setup;
_sfc_main$5.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/user/UserSwitcher.vue");
  return _sfc_setup$5 ? _sfc_setup$5(props, ctx) : void 0;
};

const _sfc_main$4 = {
  __name: 'NavUser',
  __ssrInlineRender: true,
  setup(__props) {

const { busy, oauth, singleInstanceServer } = useSignIn();

return (_ctx, _push, _parent, _attrs) => {
  const _component_VDropdown = resolveComponent("VDropdown");
  const _component_AccountAvatar = _sfc_main$n;
  const _component_UserSwitcher = _sfc_main$5;
  const _component_i18n_t = resolveComponent("i18n-t");

  if (("isHydrated" in _ctx ? _ctx.isHydrated : unref(isHydrated)) && ("currentUser" in _ctx ? _ctx.currentUser : unref(currentUser))) {
    _push(ssrRenderComponent(_component_VDropdown, mergeProps({ "sm:hidden": "" }, _attrs), {
      popper: withCtx(({ hide }, _push, _parent, _scopeId) => {
        if (_push) {
          _push(ssrRenderComponent(_component_UserSwitcher, {
            onClick: $event => (hide())
          }, null, _parent, _scopeId));
        } else {
          return [
            createVNode(_component_UserSwitcher, {
              onClick: $event => (hide())
            }, null, 8, ["onClick"])
          ]
        }
      }),
      default: withCtx((_, _push, _parent, _scopeId) => {
        if (_push) {
          _push(`<div style="${
            ssrRenderStyle({"-webkit-touch-callout":"none"})
          }"${
            _scopeId
          }>`);
          _push(ssrRenderComponent(_component_AccountAvatar, {
            account: ("currentUser" in _ctx ? _ctx.currentUser : unref(currentUser)).account,
            "h-8": "",
            "w-8": "",
            draggable: false,
            square: ""
          }, null, _parent, _scopeId));
          _push(`</div>`);
        } else {
          return [
            createVNode("div", { style: {"-webkit-touch-callout":"none"} }, [
              createVNode(_component_AccountAvatar, {
                account: ("currentUser" in _ctx ? _ctx.currentUser : unref(currentUser)).account,
                "h-8": "",
                "w-8": "",
                draggable: false,
                square: ""
              }, null, 8, ["account"])
            ])
          ]
        }
      }),
      _: 1
    }, _parent));
  } else {
    _push(`<!--[-->`);
    if (unref(singleInstanceServer)) {
      _push(`<button flex="~ row" gap-x-1 items-center justify-center btn-solid text-sm px-2 py-1 xl:hidden${(ssrIncludeBooleanAttr(unref(busy))) ? " disabled" : ""}>`);
      if (unref(busy)) {
        _push(`<span aria-hidden="true" block animate animate-spin preserve-3d class="rtl-flip"><span block i-ri:loader-2-fill aria-hidden="true"></span></span>`);
      } else {
        _push(`<span aria-hidden="true" block i-ri:login-circle-line class="rtl-flip"></span>`);
      }
      _push(ssrRenderComponent(_component_i18n_t, { keypath: "action.sign_in_to" }, null, _parent));
      _push(`</button>`);
    } else {
      _push(`<button btn-solid text-sm px-2 py-1 text-center xl:hidden>${ssrInterpolate(_ctx.$t('action.sign_in'))}</button>`);
    }
    _push(`<!--]-->`);
  }
}
}

};
const _sfc_setup$4 = _sfc_main$4.setup;
_sfc_main$4.setup = (props, ctx) => {
  const ssrContext = useSSRContext()
  ;(ssrContext.modules || (ssrContext.modules = new Set())).add("components/nav/NavUser.vue");
  return _sfc_setup$4 ? _sfc_setup$4(props, ctx) : undefined
};

const _export_sfc = (sfc, props) => {
  const target = sfc.__vccOpts || sfc;
  for (const [key, val] of props) {
    target[key] = val;
  }
  return target;
};

const _sfc_main$3 = {};

function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  _push(`<div${ssrRenderAttrs(mergeProps({
    "bg-base": "",
    "h-8": "",
    "w-8": "",
    "rounded-full": ""
  }, _attrs))}></div>`);
}
const _sfc_setup$3 = _sfc_main$3.setup;
_sfc_main$3.setup = (props, ctx) => {
  const ssrContext = useSSRContext()
  ;(ssrContext.modules || (ssrContext.modules = new Set())).add("components/nav/NavUserSkeleton.vue");
  return _sfc_setup$3 ? _sfc_setup$3(props, ctx) : undefined
};
const __nuxt_component_3 = /*#__PURE__*/_export_sfc(_sfc_main$3, [['ssrRender',_sfc_ssrRender]]);

const _sfc_main$2 = /* @__PURE__ */ defineComponent({
  __name: "MainContent",
  __ssrInlineRender: true,
  props: {
    backOnSmallScreen: { type: Boolean },
    back: { type: Boolean },
    noOverflowHidden: { type: Boolean }
  },
  setup(__props) {
    const container = ref();
    const route = useRoute();
    const { height: windowHeight } = useWindowSize();
    const { height: containerHeight } = useElementBounding(container);
    const wideLayout = computed(() => route.meta.wideLayout ?? false);
    const sticky = computed(() => route.path?.startsWith("/settings/"));
    const containerClass = computed(() => {
      if (!isHydrated.value || !sticky.value || windowHeight.value < containerHeight.value)
        return null;
      return "lg:sticky lg:top-0";
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NuxtLink = __nuxt_component_0$1;
      const _component_PwaBadge = __nuxt_component_11;
      const _component_NavUser = _sfc_main$4;
      const _component_NavUserSkeleton = __nuxt_component_3;
      const _component_PwaInstallPrompt = __nuxt_component_11;
      _push(`<div${ssrRenderAttrs(mergeProps({
        ref_key: "container",
        ref: container,
        class: unref(containerClass)
      }, _attrs))}><div sticky top-0 z10 backdrop-blur pt="[env(safe-area-inset-top,0)]" bg="[rgba(var(--rgb-bg-base),0.7)]" class="native:lg:w-[calc(100vw-5rem)] native:xl:w-[calc(135%+(100vw-1200px)/2)]"><div flex justify-between px5 py2 class="${ssrRenderClass([{ "xl:hidden": _ctx.$route.name !== "tag" }, "native:xl:flex"])}" border="b base"><div flex gap-3 items-center${ssrRenderAttr("overflow-hidden", !_ctx.noOverflowHidden ? "" : false)} py2 w-full>`);
      if (_ctx.backOnSmallScreen || _ctx.back) {
        _push(ssrRenderComponent(_component_NuxtLink, {
          flex: "~ gap1",
          "items-center": "",
          "btn-text": "",
          "p-0": "",
          "xl:hidden": "",
          "aria-label": _ctx.$t("nav.back"),
          onClick: ($event) => _ctx.$router.go(-1)
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`<div i-ri:arrow-left-line class="rtl-flip"${_scopeId}></div>`);
            } else {
              return [
                createVNode("div", {
                  "i-ri:arrow-left-line": "",
                  class: "rtl-flip"
                })
              ];
            }
          }),
          _: 1
        }, _parent));
      } else {
        _push(`<!---->`);
      }
      _push(`<div${ssrRenderAttr("truncate", !_ctx.noOverflowHidden ? "" : false)} flex w-full data-tauri-drag-region class="native-mac:text-center native-mac:sm:justify-start">`);
      ssrRenderSlot(_ctx.$slots, "title", {}, null, _push, _parent);
      _push(`</div><div sm:hidden h-7 w-1px></div></div><div flex items-center flex-shrink-0 gap-x-2>`);
      ssrRenderSlot(_ctx.$slots, "actions", {}, null, _push, _parent);
      _push(ssrRenderComponent(_component_PwaBadge, { "xl:hidden": "" }, null, _parent));
      if (("isHydrated" in _ctx ? _ctx.isHydrated : unref(isHydrated))) {
        _push(ssrRenderComponent(_component_NavUser, null, null, _parent));
      } else {
        _push(ssrRenderComponent(_component_NavUserSkeleton, null, null, _parent));
      }
      _push(`</div></div>`);
      ssrRenderSlot(_ctx.$slots, "header", {}, () => {
        _push(`<div hidden></div>`);
      }, _push, _parent);
      _push(`</div>`);
      _push(ssrRenderComponent(_component_PwaInstallPrompt, { "xl:hidden": "" }, null, _parent));
      _push(`<div class="${ssrRenderClass(("isHydrated" in _ctx ? _ctx.isHydrated : unref(isHydrated)) && unref(wideLayout) ? "xl:w-full sm:max-w-600px" : "sm:max-w-600px md:shrink-0")}" m-auto><div hidden class="${ssrRenderClass({ "xl:block": _ctx.$route.name !== "tag" && !_ctx.$slots.header })}" h-6></div>`);
      ssrRenderSlot(_ctx.$slots, "default", {}, null, _push, _parent);
      _push(`</div></div>`);
    };
  }
});

const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/main/MainContent.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};

const defaultMessage = "Something went wrong";
const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  __name: "error",
  __ssrInlineRender: true,
  props: {
    error: {}
  },
  setup(__props) {
    const errorCodes = {
      404: "Page not found"
    };
    const message = __props.error.message ?? errorCodes[__props.error.statusCode] ?? defaultMessage;
    const state = ref("error");
    async function reload() {
      state.value = "reloading";
      try {
        clearError({ redirect: currentUser.value ? "/home" : `/${currentServer.value}/public/local` });
      } catch (err) {
        console.error(err);
        state.value = "error";
      }
    }
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NuxtLoadingIndicator = __nuxt_component_0;
      const _component_NuxtLayout = __nuxt_component_1;
      const _component_MainContent = _sfc_main$2;
      const _component_AriaAnnouncer = _sfc_main$p;
      _push(`<!--[-->`);
      _push(ssrRenderComponent(_component_NuxtLoadingIndicator, { color: "repeating-linear-gradient(to right,var(--c-primary) 0%,var(--c-primary-active) 100%)" }, null, _parent));
      _push(ssrRenderComponent(_component_NuxtLayout, null, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_MainContent, null, {
              title: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<span timeline-title-style${_scopeId2}>Error</span>`);
                } else {
                  return [
                    createVNode("span", { "timeline-title-style": "" }, "Error")
                  ];
                }
              }),
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  ssrRenderSlot(_ctx.$slots, "default", {}, () => {
                    _push3(`<form p5 grid gap-y-4${_scopeId2}><div text-lg${_scopeId2}> Something went wrong </div><div text-secondary${_scopeId2}>${ssrInterpolate(unref(message))}</div><button flex items-center gap-2 justify-center btn-solid text-center${ssrIncludeBooleanAttr(unref(state) === "reloading") ? " disabled" : ""}${_scopeId2}>`);
                    if (unref(state) === "reloading") {
                      _push3(`<span block animate-spin preserve-3d${_scopeId2}><span block i-ri:loader-2-fill${_scopeId2}></span></span>`);
                    } else {
                      _push3(`<!---->`);
                    }
                    _push3(` ${ssrInterpolate(unref(state) === "reloading" ? "Reloading" : "Reload")}</button></form>`);
                  }, _push3, _parent3, _scopeId2);
                } else {
                  return [
                    renderSlot(_ctx.$slots, "default", {}, () => [
                      createVNode("form", {
                        p5: "",
                        grid: "",
                        "gap-y-4": "",
                        onSubmit: reload
                      }, [
                        createVNode("div", { "text-lg": "" }, " Something went wrong "),
                        createVNode("div", { "text-secondary": "" }, toDisplayString(unref(message)), 1),
                        createVNode("button", {
                          flex: "",
                          "items-center": "",
                          "gap-2": "",
                          "justify-center": "",
                          "btn-solid": "",
                          "text-center": "",
                          disabled: unref(state) === "reloading"
                        }, [
                          unref(state) === "reloading" ? (openBlock(), createBlock("span", {
                            key: 0,
                            block: "",
                            "animate-spin": "",
                            "preserve-3d": ""
                          }, [
                            createVNode("span", {
                              block: "",
                              "i-ri:loader-2-fill": ""
                            })
                          ])) : createCommentVNode("", true),
                          createTextVNode(" " + toDisplayString(unref(state) === "reloading" ? "Reloading" : "Reload"), 1)
                        ], 8, ["disabled"])
                      ], 32)
                    ])
                  ];
                }
              }),
              _: 3
            }, _parent2, _scopeId));
          } else {
            return [
              createVNode(_component_MainContent, null, {
                title: withCtx(() => [
                  createVNode("span", { "timeline-title-style": "" }, "Error")
                ]),
                default: withCtx(() => [
                  renderSlot(_ctx.$slots, "default", {}, () => [
                    createVNode("form", {
                      p5: "",
                      grid: "",
                      "gap-y-4": "",
                      onSubmit: reload
                    }, [
                      createVNode("div", { "text-lg": "" }, " Something went wrong "),
                      createVNode("div", { "text-secondary": "" }, toDisplayString(unref(message)), 1),
                      createVNode("button", {
                        flex: "",
                        "items-center": "",
                        "gap-2": "",
                        "justify-center": "",
                        "btn-solid": "",
                        "text-center": "",
                        disabled: unref(state) === "reloading"
                      }, [
                        unref(state) === "reloading" ? (openBlock(), createBlock("span", {
                          key: 0,
                          block: "",
                          "animate-spin": "",
                          "preserve-3d": ""
                        }, [
                          createVNode("span", {
                            block: "",
                            "i-ri:loader-2-fill": ""
                          })
                        ])) : createCommentVNode("", true),
                        createTextVNode(" " + toDisplayString(unref(state) === "reloading" ? "Reloading" : "Reload"), 1)
                      ], 8, ["disabled"])
                    ], 32)
                  ])
                ]),
                _: 3
              })
            ];
          }
        }),
        _: 3
      }, _parent));
      _push(ssrRenderComponent(_component_AriaAnnouncer, null, null, _parent));
      _push(`<!--]-->`);
    };
  }
});

const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("error.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};

const _sfc_main = {
  __name: 'nuxt-root',
  __ssrInlineRender: true,
  setup(__props) {

const IslandRenderer = /* #__PURE__ */ defineAsyncComponent(() => import('./_nuxt/island-renderer-7cd26934.mjs').then(r => r.default || r))
  ;

const nuxtApp = useNuxtApp();
nuxtApp.deferHydration();

nuxtApp.ssrContext.url ;
const SingleRenderer = false    ;

// Inject default route (outside of pages) as active route
provide(PageRouteSymbol, useRoute());

// vue:setup hook
nuxtApp.hooks.callHookWith(hooks => hooks.map(hook => hook()), 'vue:setup');

// error handling
const error = useError();
onErrorCaptured((err, target, info) => {
  nuxtApp.hooks.callHook('vue:error', err, target, info).catch(hookError => console.error('[nuxt] Error in `vue:error` hook', hookError));
  {
    const p = nuxtApp.runWithContext(() => showError(err));
    onServerPrefetch(() => p);
    return false // suppress error from breaking render
  }
});

// Component islands context
const { islandContext } = nuxtApp.ssrContext;

return (_ctx, _push, _parent, _attrs) => {
  ssrRenderSuspense(_push, {
    default: () => {
      if (unref(error)) {
        _push(ssrRenderComponent(unref(_sfc_main$1), { error: unref(error) }, null, _parent));
      } else if (unref(islandContext)) {
        _push(ssrRenderComponent(unref(IslandRenderer), { context: unref(islandContext) }, null, _parent));
      } else if (unref(SingleRenderer)) {
        ssrRenderVNode(_push, createVNode(resolveDynamicComponent(unref(SingleRenderer)), null, null), _parent);
      } else {
        _push(ssrRenderComponent(unref(_sfc_main$o), null, null, _parent));
      }
    },
    _: 1
  });
}
}

};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext()
  ;(ssrContext.modules || (ssrContext.modules = new Set())).add("node_modules/.pnpm/nuxt@3.6.5_@types+node@20.3.3_eslint@8.46.0_idb-keyval@6.2.1_rollup@2.79.1_typescript@5.1.6_vue-tsc@1.8.8/node_modules/nuxt/dist/app/components/nuxt-root.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : undefined
};

if (!globalThis.$fetch) {
  globalThis.$fetch = $fetch.create({
    baseURL: baseURL()
  });
}
let entry;
{
  entry = async function createNuxtAppServer(ssrContext) {
    const vueApp = createApp(_sfc_main);
    const nuxt = createNuxtApp({ vueApp, ssrContext });
    try {
      await applyPlugins(nuxt, plugins);
      await nuxt.hooks.callHook("app:created", vueApp);
    } catch (err) {
      await nuxt.hooks.callHook("app:error", err);
      nuxt.payload.error = nuxt.payload.error || err;
    }
    if (ssrContext?._renderResponse) {
      throw new Error("skipping render");
    }
    return vueApp;
  };
}
const entry$1 = (ctx) => entry(ctx);

export { useLocalStorage as $, mentionUser as A, directMessageUser as B, toggleMuteAccount as C, toggleBlockAccount as D, getServerName as E, currentServer as F, toggleBlockDomain as G, openReportDialog as H, openConfirmDialog as I, _sfc_main$6 as J, _sfc_main$i as K, openMediaPreview as L, _sfc_main$n as M, _sfc_main$m as N, _sfc_main$c as O, _sfc_main$b as P, _sfc_main$a as Q, _sfc_main$9 as R, _sfc_main$8 as S, _sfc_main$j as T, _sfc_main$g as U, useUserSettings as V, getPreferences as W, __nuxt_component_4 as X, toShortHandle as Y, _export_sfc as Z, __nuxt_component_0$1 as _, useI18n as a, getTagRoute as a$, STORAGE_KEY_HIDE_EXPLORE_POSTS_TIPS as a0, STORAGE_KEY_HIDE_EXPLORE_NEWS_TIPS as a1, useRouter as a2, STORAGE_KEY_HIDE_EXPLORE_TAGS_TIPS as a3, cacheAccount as a4, useStreaming as a5, useNuxtApp as a6, __nuxt_component_11 as a7, getStatusRoute as a8, useAccountById as a9, useIntersectionObserver as aA, getDataUrlFromArr as aB, getHideMediaByDefault as aC, navigateToStatus as aD, _sfc_main$d as aE, currentInstance as aF, useDropZone as aG, htmlToText as aH, isGlitchEdition as aI, useHighlighter as aJ, useShikiTheme as aK, getEmojiAttributes as aL, getDefaultDraft as aM, useDraft as aN, characterLimit as aO, accountToShortHandle as aP, _sfc_main$k as aQ, useElementBounding as aR, useDeactivated as aS, useColorMode as aT, InjectionKeyDropdownContext as aU, useEventListener as aV, useCommands as aW, useBreakpoints as aX, breakpointsTailwind as aY, resolveUnref as aZ, watchDebounced as a_, getStatusInReplyToRoute as aa, useTimeAgoOptions as ab, formatTimeAgo as ac, openEditHistoryDialog as ad, useCommand as ae, checkLogin as af, cacheStatus as ag, noop$1 as ah, useClipboard as ai, removeCachedStatus as aj, openPublishDialog as ak, getDraftFromStatus as al, lastPublishDialogStatus as am, openFavoridedBoostedByDialog as an, getStatusPermalinkRoute as ao, useRuntimeConfig as ap, useEmojisFallback as aq, contentToVNode as ar, getExpandSpoilersByDefault as as, getExpandMediaByDefault as at, useToggle as au, useTimeAgo as av, useHumanReadableNumber as aw, _sfc_main$h as ax, clamp as ay, usePreferredReducedMotion as az, useHydratedHead as b, useFocusWithin as b0, getReportRoute as b1, onHydrated as b2, until as b3, useAppConfig as b4, useBuildInfo as b5, openPreviewHelp as b6, elkTeamMembers as b7, DEFAULT_FONT_SIZE as b8, togglePreferences as b9, isEditHistoryDialogOpen as bA, statusEdit as bB, isCommandPanelOpen as bC, closeCommandPanel as bD, isConfirmDialogOpen as bE, confirmDialogLabel as bF, isErrorDialogOpen as bG, errorDialogData as bH, isFavouritedBoostedByDialogOpen as bI, isKeyboardShortcutsDialogOpen as bJ, closeKeyboardShortcuts as bK, isReportDialogOpen as bL, reportAccount as bM, reportStatus as bN, closeReportDialog as bO, openCommandPanel as bP, confirmDialogChoice as bQ, toValue as bR, refreshAccountInfo as ba, useUsers as bb, defineNuxtRouteMiddleware as bc, useSignIn as bd, _sfc_main$5 as be, switchUser as bf, useOnline as bg, invoke as bh, onClickOutside as bi, useTimeout as bj, useScrollLock as bk, mediaPreviewList as bl, mediaPreviewIndex as bm, useMagicKeys as bn, whenever as bo, useIsMac as bp, useCommandRegistry as bq, commandPanelInput as br, favouritedBoostedByStatusId as bs, isSigninDialogOpen as bt, isPreviewHelpOpen as bu, closePreviewHelp as bv, isPublishDialogOpen as bw, dialogDraftKey as bx, isMediaPreviewOpen as by, closeMediaPreview as bz, createError as c, getAccountRoute as d, entry$1 as default, _sfc_main$e as e, _sfc_main$7 as f, getDisplayName as g, currentUser as h, useRoute as i, computedEager as j, isHydrated as k, fetchStatus as l, useMasto as m, getReplyDraft as n, onReactivated as o, _sfc_main$2 as p, unrefElement as q, removeHTMLTags as r, fetchAccountByHandle as s, useMastoClient as t, useFormattedDateTime as u, useSelfAccount as v, watchOnce as w, useRelationship as x, usePreferences as y, useShare as z };
