try {
  self["workbox:core:7.0.0"] && _();
} catch {
}
const ue = {
  "invalid-value": ({ paramName: s, validValueDescription: e, value: t }) => {
    if (!s || !e)
      throw new Error("Unexpected input to 'invalid-value' error.");
    return `The '${s}' parameter was given a value with an unexpected value. ${e} Received a value of ${JSON.stringify(t)}.`;
  },
  "not-an-array": ({ moduleName: s, className: e, funcName: t, paramName: r }) => {
    if (!s || !e || !t || !r)
      throw new Error("Unexpected input to 'not-an-array' error.");
    return `The parameter '${r}' passed into '${s}.${e}.${t}()' must be an array.`;
  },
  "incorrect-type": ({ expectedType: s, paramName: e, moduleName: t, className: r, funcName: n }) => {
    if (!s || !e || !t || !n)
      throw new Error("Unexpected input to 'incorrect-type' error.");
    const a = r ? `${r}.` : "";
    return `The parameter '${e}' passed into '${t}.${a}${n}()' must be of type ${s}.`;
  },
  "incorrect-class": ({ expectedClassName: s, paramName: e, moduleName: t, className: r, funcName: n, isReturnValueProblem: a }) => {
    if (!s || !t || !n)
      throw new Error("Unexpected input to 'incorrect-class' error.");
    const o = r ? `${r}.` : "";
    return a ? `The return value from '${t}.${o}${n}()' must be an instance of class ${s}.` : `The parameter '${e}' passed into '${t}.${o}${n}()' must be an instance of class ${s}.`;
  },
  "missing-a-method": ({ expectedMethod: s, paramName: e, moduleName: t, className: r, funcName: n }) => {
    if (!s || !e || !t || !r || !n)
      throw new Error("Unexpected input to 'missing-a-method' error.");
    return `${t}.${r}.${n}() expected the '${e}' parameter to expose a '${s}' method.`;
  },
  "add-to-cache-list-unexpected-type": ({ entry: s }) => `An unexpected entry was passed to 'workbox-precaching.PrecacheController.addToCacheList()' The entry '${JSON.stringify(s)}' isn't supported. You must supply an array of strings with one or more characters, objects with a url property or Request objects.`,
  "add-to-cache-list-conflicting-entries": ({ firstEntry: s, secondEntry: e }) => {
    if (!s || !e)
      throw new Error("Unexpected input to 'add-to-cache-list-duplicate-entries' error.");
    return `Two of the entries passed to 'workbox-precaching.PrecacheController.addToCacheList()' had the URL ${s} but different revision details. Workbox is unable to cache and version the asset correctly. Please remove one of the entries.`;
  },
  "plugin-error-request-will-fetch": ({ thrownErrorMessage: s }) => {
    if (!s)
      throw new Error("Unexpected input to 'plugin-error-request-will-fetch', error.");
    return `An error was thrown by a plugins 'requestWillFetch()' method. The thrown error message was: '${s}'.`;
  },
  "invalid-cache-name": ({ cacheNameId: s, value: e }) => {
    if (!s)
      throw new Error("Expected a 'cacheNameId' for error 'invalid-cache-name'");
    return `You must provide a name containing at least one character for setCacheDetails({${s}: '...'}). Received a value of '${JSON.stringify(e)}'`;
  },
  "unregister-route-but-not-found-with-method": ({ method: s }) => {
    if (!s)
      throw new Error("Unexpected input to 'unregister-route-but-not-found-with-method' error.");
    return `The route you're trying to unregister was not  previously registered for the method type '${s}'.`;
  },
  "unregister-route-route-not-registered": () => "The route you're trying to unregister was not previously registered.",
  "queue-replay-failed": ({ name: s }) => `Replaying the background sync queue '${s}' failed.`,
  "duplicate-queue-name": ({ name: s }) => `The Queue name '${s}' is already being used. All instances of backgroundSync.Queue must be given unique names.`,
  "expired-test-without-max-age": ({ methodName: s, paramName: e }) => `The '${s}()' method can only be used when the '${e}' is used in the constructor.`,
  "unsupported-route-type": ({ moduleName: s, className: e, funcName: t, paramName: r }) => `The supplied '${r}' parameter was an unsupported type. Please check the docs for ${s}.${e}.${t} for valid input types.`,
  "not-array-of-class": ({ value: s, expectedClass: e, moduleName: t, className: r, funcName: n, paramName: a }) => `The supplied '${a}' parameter must be an array of '${e}' objects. Received '${JSON.stringify(s)},'. Please check the call to ${t}.${r}.${n}() to fix the issue.`,
  "max-entries-or-age-required": ({ moduleName: s, className: e, funcName: t }) => `You must define either config.maxEntries or config.maxAgeSecondsin ${s}.${e}.${t}`,
  "statuses-or-headers-required": ({ moduleName: s, className: e, funcName: t }) => `You must define either config.statuses or config.headersin ${s}.${e}.${t}`,
  "invalid-string": ({ moduleName: s, funcName: e, paramName: t }) => {
    if (!t || !s || !e)
      throw new Error("Unexpected input to 'invalid-string' error.");
    return `When using strings, the '${t}' parameter must start with 'http' (for cross-origin matches) or '/' (for same-origin matches). Please see the docs for ${s}.${e}() for more info.`;
  },
  "channel-name-required": () => "You must provide a channelName to construct a BroadcastCacheUpdate instance.",
  "invalid-responses-are-same-args": () => "The arguments passed into responsesAreSame() appear to be invalid. Please ensure valid Responses are used.",
  "expire-custom-caches-only": () => "You must provide a 'cacheName' property when using the expiration plugin with a runtime caching strategy.",
  "unit-must-be-bytes": ({ normalizedRangeHeader: s }) => {
    if (!s)
      throw new Error("Unexpected input to 'unit-must-be-bytes' error.");
    return `The 'unit' portion of the Range header must be set to 'bytes'. The Range header provided was "${s}"`;
  },
  "single-range-only": ({ normalizedRangeHeader: s }) => {
    if (!s)
      throw new Error("Unexpected input to 'single-range-only' error.");
    return `Multiple ranges are not supported. Please use a  single start value, and optional end value. The Range header provided was "${s}"`;
  },
  "invalid-range-values": ({ normalizedRangeHeader: s }) => {
    if (!s)
      throw new Error("Unexpected input to 'invalid-range-values' error.");
    return `The Range header is missing both start and end values. At least one of those values is needed. The Range header provided was "${s}"`;
  },
  "no-range-header": () => "No Range header was found in the Request provided.",
  "range-not-satisfiable": ({ size: s, start: e, end: t }) => `The start (${e}) and end (${t}) values in the Range are not satisfiable by the cached response, which is ${s} bytes.`,
  "attempt-to-cache-non-get-request": ({ url: s, method: e }) => `Unable to cache '${s}' because it is a '${e}' request and only 'GET' requests can be cached.`,
  "cache-put-with-no-response": ({ url: s }) => `There was an attempt to cache '${s}' but the response was not defined.`,
  "no-response": ({ url: s, error: e }) => {
    let t = `The strategy could not generate a response for '${s}'.`;
    return e && (t += ` The underlying error is ${e}.`), t;
  },
  "bad-precaching-response": ({ url: s, status: e }) => `The precaching request for '${s}' failed` + (e ? ` with an HTTP status of ${e}.` : "."),
  "non-precached-url": ({ url: s }) => `createHandlerBoundToURL('${s}') was called, but that URL is not precached. Please pass in a URL that is precached instead.`,
  "add-to-cache-list-conflicting-integrities": ({ url: s }) => `Two of the entries passed to 'workbox-precaching.PrecacheController.addToCacheList()' had the URL ${s} with different integrity values. Please remove one of them.`,
  "missing-precache-entry": ({ cacheName: s, url: e }) => `Unable to find a precached response in ${s} for ${e}.`,
  "cross-origin-copy-response": ({ origin: s }) => `workbox-core.copyResponse() can only be used with same-origin responses. It was passed a response with origin ${s}.`,
  "opaque-streams-source": ({ type: s }) => {
    const e = `One of the workbox-streams sources resulted in an '${s}' response.`;
    return s === "opaqueredirect" ? `${e} Please do not use a navigation request that results in a redirect as a source.` : `${e} Please ensure your sources are CORS-enabled.`;
  }
}, le = (s, e = {}) => {
  const t = ue[s];
  if (!t)
    throw new Error(`Unable to find message for code '${s}'.`);
  return t(e);
}, he = le;
class h extends Error {
  /**
   *
   * @param {string} errorCode The error code that
   * identifies this particular error.
   * @param {Object=} details Any relevant arguments
   * that will help developers identify issues should
   * be added as a key on the context object.
   */
  constructor(e, t) {
    const r = he(e, t);
    super(r), this.name = e, this.details = t;
  }
}
const de = (s, e) => {
  if (!Array.isArray(s))
    throw new h("not-an-array", e);
}, fe = (s, e, t) => {
  if (typeof s[e] !== "function")
    throw t.expectedMethod = e, new h("missing-a-method", t);
}, pe = (s, e, t) => {
  if (typeof s !== e)
    throw t.expectedType = e, new h("incorrect-type", t);
}, me = (s, e, t) => {
  if (!(s instanceof e))
    throw t.expectedClassName = e.name, new h("incorrect-class", t);
}, ge = (s, e, t) => {
  if (!e.includes(s))
    throw t.validValueDescription = `Valid values are ${JSON.stringify(e)}.`, new h("invalid-value", t);
}, we = (s, e, t) => {
  const r = new h("not-array-of-class", t);
  if (!Array.isArray(s))
    throw r;
  for (const n of s)
    if (!(n instanceof e))
      throw r;
}, l = {
  hasMethod: fe,
  isArray: de,
  isInstance: me,
  isOneOf: ge,
  isType: pe,
  isArrayOfClass: we
}, w = {
  googleAnalytics: "googleAnalytics",
  precache: "precache-v2",
  prefix: "workbox",
  runtime: "runtime",
  suffix: typeof registration < "u" ? registration.scope : ""
}, P = (s) => [w.prefix, s, w.suffix].filter((e) => e && e.length > 0).join("-"), ye = (s) => {
  for (const e of Object.keys(w))
    s(e);
}, k = {
  updateDetails: (s) => {
    ye((e) => {
      typeof s[e] == "string" && (w[e] = s[e]);
    });
  },
  getGoogleAnalyticsName: (s) => s || P(w.googleAnalytics),
  getPrecacheName: (s) => s || P(w.precache),
  getPrefix: () => w.prefix,
  getRuntimeName: (s) => s || P(w.runtime),
  getSuffix: () => w.suffix
}, i = (() => {
  "__WB_DISABLE_DEV_LOGS" in globalThis || (self.__WB_DISABLE_DEV_LOGS = !1);
  let s = !1;
  const e = {
    debug: "#7f8c8d",
    log: "#2ecc71",
    warn: "#f39c12",
    error: "#c0392b",
    groupCollapsed: "#3498db",
    groupEnd: null
    // No colored prefix on groupEnd
  }, t = function(a, o) {
    if (self.__WB_DISABLE_DEV_LOGS)
      return;
    if (a === "groupCollapsed" && /^((?!chrome|android).)*safari/i.test(navigator.userAgent)) {
      console[a](...o);
      return;
    }
    const c = [
      `background: ${e[a]}`,
      "border-radius: 0.5em",
      "color: white",
      "font-weight: bold",
      "padding: 2px 0.5em"
    ], u = s ? [] : ["%cworkbox", c.join(";")];
    console[a](...u, ...o), a === "groupCollapsed" && (s = !0), a === "groupEnd" && (s = !1);
  }, r = {}, n = Object.keys(e);
  for (const a of n) {
    const o = a;
    r[o] = (...c) => {
      t(o, c);
    };
  }
  return r;
})();
function J(s, e) {
  const t = e();
  return s.waitUntil(t), t;
}
try {
  self["workbox:precaching:7.0.0"] && _();
} catch {
}
const be = "__WB_REVISION__";
function Re(s) {
  if (!s)
    throw new h("add-to-cache-list-unexpected-type", { entry: s });
  if (typeof s == "string") {
    const a = new URL(s, location.href);
    return {
      cacheKey: a.href,
      url: a.href
    };
  }
  const { revision: e, url: t } = s;
  if (!t)
    throw new h("add-to-cache-list-unexpected-type", { entry: s });
  if (!e) {
    const a = new URL(t, location.href);
    return {
      cacheKey: a.href,
      url: a.href
    };
  }
  const r = new URL(t, location.href), n = new URL(t, location.href);
  return r.searchParams.set(be, e), {
    cacheKey: r.href,
    url: n.href
  };
}
class _e {
  constructor() {
    this.updatedURLs = [], this.notUpdatedURLs = [], this.handlerWillStart = async ({ request: e, state: t }) => {
      t && (t.originalRequest = e);
    }, this.cachedResponseWillBeUsed = async ({ event: e, state: t, cachedResponse: r }) => {
      if (e.type === "install" && t && t.originalRequest && t.originalRequest instanceof Request) {
        const n = t.originalRequest.url;
        r ? this.notUpdatedURLs.push(n) : this.updatedURLs.push(n);
      }
      return r;
    };
  }
}
class xe {
  constructor({ precacheController: e }) {
    this.cacheKeyWillBeUsed = async ({ request: t, params: r }) => {
      const n = (r == null ? void 0 : r.cacheKey) || this._precacheController.getCacheKeyForURL(t.url);
      return n ? new Request(n, { headers: t.headers }) : t;
    }, this._precacheController = e;
  }
}
const Ce = (s, e) => {
  i.groupCollapsed(s);
  for (const t of e)
    i.log(t);
  i.groupEnd();
};
function Ne(s) {
  const e = s.length;
  e > 0 && (i.groupCollapsed(`During precaching cleanup, ${e} cached request${e === 1 ? " was" : "s were"} deleted.`), Ce("Deleted Cache Requests", s), i.groupEnd());
}
function Q(s, e) {
  if (e.length !== 0) {
    i.groupCollapsed(s);
    for (const t of e)
      i.log(t);
    i.groupEnd();
  }
}
function Ee(s, e) {
  const t = s.length, r = e.length;
  if (t || r) {
    let n = `Precaching ${t} file${t === 1 ? "" : "s"}.`;
    r > 0 && (n += ` ${r} file${r === 1 ? " is" : "s are"} already cached.`), i.groupCollapsed(n), Q("View newly precached URLs.", s), Q("View previously precached URLs.", e), i.groupEnd();
  }
}
let x;
function ke() {
  if (x === void 0) {
    const s = new Response("");
    if ("body" in s)
      try {
        new Response(s.body), x = !0;
      } catch {
        x = !1;
      }
    x = !1;
  }
  return x;
}
async function Te(s, e) {
  let t = null;
  if (s.url && (t = new URL(s.url).origin), t !== self.location.origin)
    throw new h("cross-origin-copy-response", { origin: t });
  const r = s.clone(), n = {
    headers: new Headers(r.headers),
    status: r.status,
    statusText: r.statusText
  }, a = e ? e(n) : n, o = ke() ? r.body : await r.blob();
  return new Response(o, a);
}
const p = (s) => new URL(String(s), location.href).href.replace(new RegExp(`^${location.origin}`), "");
function Y(s, e) {
  const t = new URL(s);
  for (const r of e)
    t.searchParams.delete(r);
  return t.href;
}
async function $e(s, e, t, r) {
  const n = Y(e.url, t);
  if (e.url === n)
    return s.match(e, r);
  const a = Object.assign(Object.assign({}, r), { ignoreSearch: !0 }), o = await s.keys(e, a);
  for (const c of o) {
    const u = Y(c.url, t);
    if (n === u)
      return s.match(c, r);
  }
}
class ve {
  /**
   * Creates a promise and exposes its resolve and reject functions as methods.
   */
  constructor() {
    this.promise = new Promise((e, t) => {
      this.resolve = e, this.reject = t;
    });
  }
}
const q = /* @__PURE__ */ new Set();
async function Ue() {
  i.log(`About to run ${q.size} callbacks to clean up caches.`);
  for (const s of q)
    await s(), i.log(s, "is complete.");
  i.log("Finished running callbacks.");
}
function Pe(s) {
  return new Promise((e) => setTimeout(e, s));
}
try {
  self["workbox:strategies:7.0.0"] && _();
} catch {
}
function T(s) {
  return typeof s == "string" ? new Request(s) : s;
}
class Le {
  /**
   * Creates a new instance associated with the passed strategy and event
   * that's handling the request.
   *
   * The constructor also initializes the state that will be passed to each of
   * the plugins handling this request.
   *
   * @param {workbox-strategies.Strategy} strategy
   * @param {Object} options
   * @param {Request|string} options.request A request to run this strategy for.
   * @param {ExtendableEvent} options.event The event associated with the
   *     request.
   * @param {URL} [options.url]
   * @param {*} [options.params] The return value from the
   *     {@link workbox-routing~matchCallback} (if applicable).
   */
  constructor(e, t) {
    this._cacheKeys = {}, l.isInstance(t.event, ExtendableEvent, {
      moduleName: "workbox-strategies",
      className: "StrategyHandler",
      funcName: "constructor",
      paramName: "options.event"
    }), Object.assign(this, t), this.event = t.event, this._strategy = e, this._handlerDeferred = new ve(), this._extendLifetimePromises = [], this._plugins = [...e.plugins], this._pluginStateMap = /* @__PURE__ */ new Map();
    for (const r of this._plugins)
      this._pluginStateMap.set(r, {});
    this.event.waitUntil(this._handlerDeferred.promise);
  }
  /**
   * Fetches a given request (and invokes any applicable plugin callback
   * methods) using the `fetchOptions` (for non-navigation requests) and
   * `plugins` defined on the `Strategy` object.
   *
   * The following plugin lifecycle methods are invoked when using this method:
   * - `requestWillFetch()`
   * - `fetchDidSucceed()`
   * - `fetchDidFail()`
   *
   * @param {Request|string} input The URL or request to fetch.
   * @return {Promise<Response>}
   */
  async fetch(e) {
    const { event: t } = this;
    let r = T(e);
    if (r.mode === "navigate" && t instanceof FetchEvent && t.preloadResponse) {
      const o = await t.preloadResponse;
      if (o)
        return i.log(`Using a preloaded navigation response for '${p(r.url)}'`), o;
    }
    const n = this.hasCallback("fetchDidFail") ? r.clone() : null;
    try {
      for (const o of this.iterateCallbacks("requestWillFetch"))
        r = await o({ request: r.clone(), event: t });
    } catch (o) {
      if (o instanceof Error)
        throw new h("plugin-error-request-will-fetch", {
          thrownErrorMessage: o.message
        });
    }
    const a = r.clone();
    try {
      let o;
      o = await fetch(r, r.mode === "navigate" ? void 0 : this._strategy.fetchOptions), i.debug(`Network request for '${p(r.url)}' returned a response with status '${o.status}'.`);
      for (const c of this.iterateCallbacks("fetchDidSucceed"))
        o = await c({
          event: t,
          request: a,
          response: o
        });
      return o;
    } catch (o) {
      throw i.log(`Network request for '${p(r.url)}' threw an error.`, o), n && await this.runCallbacks("fetchDidFail", {
        error: o,
        event: t,
        originalRequest: n.clone(),
        request: a.clone()
      }), o;
    }
  }
  /**
   * Calls `this.fetch()` and (in the background) runs `this.cachePut()` on
   * the response generated by `this.fetch()`.
   *
   * The call to `this.cachePut()` automatically invokes `this.waitUntil()`,
   * so you do not have to manually call `waitUntil()` on the event.
   *
   * @param {Request|string} input The request or URL to fetch and cache.
   * @return {Promise<Response>}
   */
  async fetchAndCachePut(e) {
    const t = await this.fetch(e), r = t.clone();
    return this.waitUntil(this.cachePut(e, r)), t;
  }
  /**
   * Matches a request from the cache (and invokes any applicable plugin
   * callback methods) using the `cacheName`, `matchOptions`, and `plugins`
   * defined on the strategy object.
   *
   * The following plugin lifecycle methods are invoked when using this method:
   * - cacheKeyWillByUsed()
   * - cachedResponseWillByUsed()
   *
   * @param {Request|string} key The Request or URL to use as the cache key.
   * @return {Promise<Response|undefined>} A matching response, if found.
   */
  async cacheMatch(e) {
    const t = T(e);
    let r;
    const { cacheName: n, matchOptions: a } = this._strategy, o = await this.getCacheKey(t, "read"), c = Object.assign(Object.assign({}, a), { cacheName: n });
    r = await caches.match(o, c), r ? i.debug(`Found a cached response in '${n}'.`) : i.debug(`No cached response found in '${n}'.`);
    for (const u of this.iterateCallbacks("cachedResponseWillBeUsed"))
      r = await u({
        cacheName: n,
        matchOptions: a,
        cachedResponse: r,
        request: o,
        event: this.event
      }) || void 0;
    return r;
  }
  /**
   * Puts a request/response pair in the cache (and invokes any applicable
   * plugin callback methods) using the `cacheName` and `plugins` defined on
   * the strategy object.
   *
   * The following plugin lifecycle methods are invoked when using this method:
   * - cacheKeyWillByUsed()
   * - cacheWillUpdate()
   * - cacheDidUpdate()
   *
   * @param {Request|string} key The request or URL to use as the cache key.
   * @param {Response} response The response to cache.
   * @return {Promise<boolean>} `false` if a cacheWillUpdate caused the response
   * not be cached, and `true` otherwise.
   */
  async cachePut(e, t) {
    const r = T(e);
    await Pe(0);
    const n = await this.getCacheKey(r, "write");
    {
      if (n.method && n.method !== "GET")
        throw new h("attempt-to-cache-non-get-request", {
          url: p(n.url),
          method: n.method
        });
      const d = t.headers.get("Vary");
      d && i.debug(`The response for ${p(n.url)} has a 'Vary: ${d}' header. Consider setting the {ignoreVary: true} option on your strategy to ensure cache matching and deletion works as expected.`);
    }
    if (!t)
      throw i.error(`Cannot cache non-existent response for '${p(n.url)}'.`), new h("cache-put-with-no-response", {
        url: p(n.url)
      });
    const a = await this._ensureResponseSafeToCache(t);
    if (!a)
      return i.debug(`Response '${p(n.url)}' will not be cached.`, a), !1;
    const { cacheName: o, matchOptions: c } = this._strategy, u = await self.caches.open(o), f = this.hasCallback("cacheDidUpdate"), m = f ? await $e(
      // TODO(philipwalton): the `__WB_REVISION__` param is a precaching
      // feature. Consider into ways to only add this behavior if using
      // precaching.
      u,
      n.clone(),
      ["__WB_REVISION__"],
      c
    ) : null;
    i.debug(`Updating the '${o}' cache with a new Response for ${p(n.url)}.`);
    try {
      await u.put(n, f ? a.clone() : a);
    } catch (d) {
      if (d instanceof Error)
        throw d.name === "QuotaExceededError" && await Ue(), d;
    }
    for (const d of this.iterateCallbacks("cacheDidUpdate"))
      await d({
        cacheName: o,
        oldResponse: m,
        newResponse: a.clone(),
        request: n,
        event: this.event
      });
    return !0;
  }
  /**
   * Checks the list of plugins for the `cacheKeyWillBeUsed` callback, and
   * executes any of those callbacks found in sequence. The final `Request`
   * object returned by the last plugin is treated as the cache key for cache
   * reads and/or writes. If no `cacheKeyWillBeUsed` plugin callbacks have
   * been registered, the passed request is returned unmodified
   *
   * @param {Request} request
   * @param {string} mode
   * @return {Promise<Request>}
   */
  async getCacheKey(e, t) {
    const r = `${e.url} | ${t}`;
    if (!this._cacheKeys[r]) {
      let n = e;
      for (const a of this.iterateCallbacks("cacheKeyWillBeUsed"))
        n = T(await a({
          mode: t,
          request: n,
          event: this.event,
          // params has a type any can't change right now.
          params: this.params
          // eslint-disable-line
        }));
      this._cacheKeys[r] = n;
    }
    return this._cacheKeys[r];
  }
  /**
   * Returns true if the strategy has at least one plugin with the given
   * callback.
   *
   * @param {string} name The name of the callback to check for.
   * @return {boolean}
   */
  hasCallback(e) {
    for (const t of this._strategy.plugins)
      if (e in t)
        return !0;
    return !1;
  }
  /**
   * Runs all plugin callbacks matching the given name, in order, passing the
   * given param object (merged ith the current plugin state) as the only
   * argument.
   *
   * Note: since this method runs all plugins, it's not suitable for cases
   * where the return value of a callback needs to be applied prior to calling
   * the next callback. See
   * {@link workbox-strategies.StrategyHandler#iterateCallbacks}
   * below for how to handle that case.
   *
   * @param {string} name The name of the callback to run within each plugin.
   * @param {Object} param The object to pass as the first (and only) param
   *     when executing each callback. This object will be merged with the
   *     current plugin state prior to callback execution.
   */
  async runCallbacks(e, t) {
    for (const r of this.iterateCallbacks(e))
      await r(t);
  }
  /**
   * Accepts a callback and returns an iterable of matching plugin callbacks,
   * where each callback is wrapped with the current handler state (i.e. when
   * you call each callback, whatever object parameter you pass it will
   * be merged with the plugin's current state).
   *
   * @param {string} name The name fo the callback to run
   * @return {Array<Function>}
   */
  *iterateCallbacks(e) {
    for (const t of this._strategy.plugins)
      if (typeof t[e] == "function") {
        const r = this._pluginStateMap.get(t);
        yield (a) => {
          const o = Object.assign(Object.assign({}, a), { state: r });
          return t[e](o);
        };
      }
  }
  /**
   * Adds a promise to the
   * [extend lifetime promises]{@link https://w3c.github.io/ServiceWorker/#extendableevent-extend-lifetime-promises}
   * of the event event associated with the request being handled (usually a
   * `FetchEvent`).
   *
   * Note: you can await
   * {@link workbox-strategies.StrategyHandler~doneWaiting}
   * to know when all added promises have settled.
   *
   * @param {Promise} promise A promise to add to the extend lifetime promises
   *     of the event that triggered the request.
   */
  waitUntil(e) {
    return this._extendLifetimePromises.push(e), e;
  }
  /**
   * Returns a promise that resolves once all promises passed to
   * {@link workbox-strategies.StrategyHandler~waitUntil}
   * have settled.
   *
   * Note: any work done after `doneWaiting()` settles should be manually
   * passed to an event's `waitUntil()` method (not this handler's
   * `waitUntil()` method), otherwise the service worker thread my be killed
   * prior to your work completing.
   */
  async doneWaiting() {
    let e;
    for (; e = this._extendLifetimePromises.shift(); )
      await e;
  }
  /**
   * Stops running the strategy and immediately resolves any pending
   * `waitUntil()` promises.
   */
  destroy() {
    this._handlerDeferred.resolve(null);
  }
  /**
   * This method will call cacheWillUpdate on the available plugins (or use
   * status === 200) to determine if the Response is safe and valid to cache.
   *
   * @param {Request} options.request
   * @param {Response} options.response
   * @return {Promise<Response|undefined>}
   *
   * @private
   */
  async _ensureResponseSafeToCache(e) {
    let t = e, r = !1;
    for (const n of this.iterateCallbacks("cacheWillUpdate"))
      if (t = await n({
        request: this.request,
        response: t,
        event: this.event
      }) || void 0, r = !0, !t)
        break;
    return r || (t && t.status !== 200 && (t = void 0), t && t.status !== 200 && (t.status === 0 ? i.warn(`The response for '${this.request.url}' is an opaque response. The caching strategy that you're using will not cache opaque responses by default.`) : i.debug(`The response for '${this.request.url}' returned a status code of '${e.status}' and won't be cached as a result.`))), t;
  }
}
class j {
  /**
   * Creates a new instance of the strategy and sets all documented option
   * properties as public instance properties.
   *
   * Note: if a custom strategy class extends the base Strategy class and does
   * not need more than these properties, it does not need to define its own
   * constructor.
   *
   * @param {Object} [options]
   * @param {string} [options.cacheName] Cache name to store and retrieve
   * requests. Defaults to the cache names provided by
   * {@link workbox-core.cacheNames}.
   * @param {Array<Object>} [options.plugins] [Plugins]{@link https://developers.google.com/web/tools/workbox/guides/using-plugins}
   * to use in conjunction with this caching strategy.
   * @param {Object} [options.fetchOptions] Values passed along to the
   * [`init`](https://developer.mozilla.org/en-US/docs/Web/API/WindowOrWorkerGlobalScope/fetch#Parameters)
   * of [non-navigation](https://github.com/GoogleChrome/workbox/issues/1796)
   * `fetch()` requests made by this strategy.
   * @param {Object} [options.matchOptions] The
   * [`CacheQueryOptions`]{@link https://w3c.github.io/ServiceWorker/#dictdef-cachequeryoptions}
   * for any `cache.match()` or `cache.put()` calls made by this strategy.
   */
  constructor(e = {}) {
    this.cacheName = k.getRuntimeName(e.cacheName), this.plugins = e.plugins || [], this.fetchOptions = e.fetchOptions, this.matchOptions = e.matchOptions;
  }
  /**
   * Perform a request strategy and returns a `Promise` that will resolve with
   * a `Response`, invoking all relevant plugin callbacks.
   *
   * When a strategy instance is registered with a Workbox
   * {@link workbox-routing.Route}, this method is automatically
   * called when the route matches.
   *
   * Alternatively, this method can be used in a standalone `FetchEvent`
   * listener by passing it to `event.respondWith()`.
   *
   * @param {FetchEvent|Object} options A `FetchEvent` or an object with the
   *     properties listed below.
   * @param {Request|string} options.request A request to run this strategy for.
   * @param {ExtendableEvent} options.event The event associated with the
   *     request.
   * @param {URL} [options.url]
   * @param {*} [options.params]
   */
  handle(e) {
    const [t] = this.handleAll(e);
    return t;
  }
  /**
   * Similar to {@link workbox-strategies.Strategy~handle}, but
   * instead of just returning a `Promise` that resolves to a `Response` it
   * it will return an tuple of `[response, done]` promises, where the former
   * (`response`) is equivalent to what `handle()` returns, and the latter is a
   * Promise that will resolve once any promises that were added to
   * `event.waitUntil()` as part of performing the strategy have completed.
   *
   * You can await the `done` promise to ensure any extra work performed by
   * the strategy (usually caching responses) completes successfully.
   *
   * @param {FetchEvent|Object} options A `FetchEvent` or an object with the
   *     properties listed below.
   * @param {Request|string} options.request A request to run this strategy for.
   * @param {ExtendableEvent} options.event The event associated with the
   *     request.
   * @param {URL} [options.url]
   * @param {*} [options.params]
   * @return {Array<Promise>} A tuple of [response, done]
   *     promises that can be used to determine when the response resolves as
   *     well as when the handler has completed all its work.
   */
  handleAll(e) {
    e instanceof FetchEvent && (e = {
      event: e,
      request: e.request
    });
    const t = e.event, r = typeof e.request == "string" ? new Request(e.request) : e.request, n = "params" in e ? e.params : void 0, a = new Le(this, { event: t, request: r, params: n }), o = this._getResponse(a, r, t), c = this._awaitComplete(o, a, r, t);
    return [o, c];
  }
  async _getResponse(e, t, r) {
    await e.runCallbacks("handlerWillStart", { event: r, request: t });
    let n;
    try {
      if (n = await this._handle(t, e), !n || n.type === "error")
        throw new h("no-response", { url: t.url });
    } catch (a) {
      if (a instanceof Error) {
        for (const o of e.iterateCallbacks("handlerDidError"))
          if (n = await o({ error: a, event: r, request: t }), n)
            break;
      }
      if (n)
        i.log(`While responding to '${p(t.url)}', an ${a instanceof Error ? a.toString() : ""} error occurred. Using a fallback response provided by a handlerDidError plugin.`);
      else
        throw a;
    }
    for (const a of e.iterateCallbacks("handlerWillRespond"))
      n = await a({ event: r, request: t, response: n });
    return n;
  }
  async _awaitComplete(e, t, r, n) {
    let a, o;
    try {
      a = await e;
    } catch {
    }
    try {
      await t.runCallbacks("handlerDidRespond", {
        event: n,
        request: r,
        response: a
      }), await t.doneWaiting();
    } catch (c) {
      c instanceof Error && (o = c);
    }
    if (await t.runCallbacks("handlerDidComplete", {
      event: n,
      request: r,
      response: a,
      error: o
    }), t.destroy(), o)
      throw o;
  }
}
class b extends j {
  /**
   *
   * @param {Object} [options]
   * @param {string} [options.cacheName] Cache name to store and retrieve
   * requests. Defaults to the cache names provided by
   * {@link workbox-core.cacheNames}.
   * @param {Array<Object>} [options.plugins] {@link https://developers.google.com/web/tools/workbox/guides/using-plugins|Plugins}
   * to use in conjunction with this caching strategy.
   * @param {Object} [options.fetchOptions] Values passed along to the
   * {@link https://developer.mozilla.org/en-US/docs/Web/API/WindowOrWorkerGlobalScope/fetch#Parameters|init}
   * of all fetch() requests made by this strategy.
   * @param {Object} [options.matchOptions] The
   * {@link https://w3c.github.io/ServiceWorker/#dictdef-cachequeryoptions|CacheQueryOptions}
   * for any `cache.match()` or `cache.put()` calls made by this strategy.
   * @param {boolean} [options.fallbackToNetwork=true] Whether to attempt to
   * get the response from the network if there's a precache miss.
   */
  constructor(e = {}) {
    e.cacheName = k.getPrecacheName(e.cacheName), super(e), this._fallbackToNetwork = e.fallbackToNetwork !== !1, this.plugins.push(b.copyRedirectedCacheableResponsesPlugin);
  }
  /**
   * @private
   * @param {Request|string} request A request to run this strategy for.
   * @param {workbox-strategies.StrategyHandler} handler The event that
   *     triggered the request.
   * @return {Promise<Response>}
   */
  async _handle(e, t) {
    const r = await t.cacheMatch(e);
    return r || (t.event && t.event.type === "install" ? await this._handleInstall(e, t) : await this._handleFetch(e, t));
  }
  async _handleFetch(e, t) {
    let r;
    const n = t.params || {};
    if (this._fallbackToNetwork) {
      i.warn(`The precached response for ${p(e.url)} in ${this.cacheName} was not found. Falling back to the network.`);
      const a = n.integrity, o = e.integrity, c = !o || o === a;
      r = await t.fetch(new Request(e, {
        integrity: e.mode !== "no-cors" ? o || a : void 0
      })), a && c && e.mode !== "no-cors" && (this._useDefaultCacheabilityPluginIfNeeded(), await t.cachePut(e, r.clone()) && i.log(`A response for ${p(e.url)} was used to "repair" the precache.`));
    } else
      throw new h("missing-precache-entry", {
        cacheName: this.cacheName,
        url: e.url
      });
    {
      const a = n.cacheKey || await t.getCacheKey(e, "read");
      i.groupCollapsed("Precaching is responding to: " + p(e.url)), i.log(`Serving the precached url: ${p(a instanceof Request ? a.url : a)}`), i.groupCollapsed("View request details here."), i.log(e), i.groupEnd(), i.groupCollapsed("View response details here."), i.log(r), i.groupEnd(), i.groupEnd();
    }
    return r;
  }
  async _handleInstall(e, t) {
    this._useDefaultCacheabilityPluginIfNeeded();
    const r = await t.fetch(e);
    if (!await t.cachePut(e, r.clone()))
      throw new h("bad-precaching-response", {
        url: e.url,
        status: r.status
      });
    return r;
  }
  /**
   * This method is complex, as there a number of things to account for:
   *
   * The `plugins` array can be set at construction, and/or it might be added to
   * to at any time before the strategy is used.
   *
   * At the time the strategy is used (i.e. during an `install` event), there
   * needs to be at least one plugin that implements `cacheWillUpdate` in the
   * array, other than `copyRedirectedCacheableResponsesPlugin`.
   *
   * - If this method is called and there are no suitable `cacheWillUpdate`
   * plugins, we need to add `defaultPrecacheCacheabilityPlugin`.
   *
   * - If this method is called and there is exactly one `cacheWillUpdate`, then
   * we don't have to do anything (this might be a previously added
   * `defaultPrecacheCacheabilityPlugin`, or it might be a custom plugin).
   *
   * - If this method is called and there is more than one `cacheWillUpdate`,
   * then we need to check if one is `defaultPrecacheCacheabilityPlugin`. If so,
   * we need to remove it. (This situation is unlikely, but it could happen if
   * the strategy is used multiple times, the first without a `cacheWillUpdate`,
   * and then later on after manually adding a custom `cacheWillUpdate`.)
   *
   * See https://github.com/GoogleChrome/workbox/issues/2737 for more context.
   *
   * @private
   */
  _useDefaultCacheabilityPluginIfNeeded() {
    let e = null, t = 0;
    for (const [r, n] of this.plugins.entries())
      n !== b.copyRedirectedCacheableResponsesPlugin && (n === b.defaultPrecacheCacheabilityPlugin && (e = r), n.cacheWillUpdate && t++);
    t === 0 ? this.plugins.push(b.defaultPrecacheCacheabilityPlugin) : t > 1 && e !== null && this.plugins.splice(e, 1);
  }
}
b.defaultPrecacheCacheabilityPlugin = {
  async cacheWillUpdate({ response: s }) {
    return !s || s.status >= 400 ? null : s;
  }
};
b.copyRedirectedCacheableResponsesPlugin = {
  async cacheWillUpdate({ response: s }) {
    return s.redirected ? await Te(s) : s;
  }
};
class Se {
  /**
   * Create a new PrecacheController.
   *
   * @param {Object} [options]
   * @param {string} [options.cacheName] The cache to use for precaching.
   * @param {string} [options.plugins] Plugins to use when precaching as well
   * as responding to fetch events for precached assets.
   * @param {boolean} [options.fallbackToNetwork=true] Whether to attempt to
   * get the response from the network if there's a precache miss.
   */
  constructor({ cacheName: e, plugins: t = [], fallbackToNetwork: r = !0 } = {}) {
    this._urlsToCacheKeys = /* @__PURE__ */ new Map(), this._urlsToCacheModes = /* @__PURE__ */ new Map(), this._cacheKeysToIntegrities = /* @__PURE__ */ new Map(), this._strategy = new b({
      cacheName: k.getPrecacheName(e),
      plugins: [
        ...t,
        new xe({ precacheController: this })
      ],
      fallbackToNetwork: r
    }), this.install = this.install.bind(this), this.activate = this.activate.bind(this);
  }
  /**
   * @type {workbox-precaching.PrecacheStrategy} The strategy created by this controller and
   * used to cache assets and respond to fetch events.
   */
  get strategy() {
    return this._strategy;
  }
  /**
   * Adds items to the precache list, removing any duplicates and
   * stores the files in the
   * {@link workbox-core.cacheNames|"precache cache"} when the service
   * worker installs.
   *
   * This method can be called multiple times.
   *
   * @param {Array<Object|string>} [entries=[]] Array of entries to precache.
   */
  precache(e) {
    this.addToCacheList(e), this._installAndActiveListenersAdded || (self.addEventListener("install", this.install), self.addEventListener("activate", this.activate), this._installAndActiveListenersAdded = !0);
  }
  /**
   * This method will add items to the precache list, removing duplicates
   * and ensuring the information is valid.
   *
   * @param {Array<workbox-precaching.PrecacheController.PrecacheEntry|string>} entries
   *     Array of entries to precache.
   */
  addToCacheList(e) {
    l.isArray(e, {
      moduleName: "workbox-precaching",
      className: "PrecacheController",
      funcName: "addToCacheList",
      paramName: "entries"
    });
    const t = [];
    for (const r of e) {
      typeof r == "string" ? t.push(r) : r && r.revision === void 0 && t.push(r.url);
      const { cacheKey: n, url: a } = Re(r), o = typeof r != "string" && r.revision ? "reload" : "default";
      if (this._urlsToCacheKeys.has(a) && this._urlsToCacheKeys.get(a) !== n)
        throw new h("add-to-cache-list-conflicting-entries", {
          firstEntry: this._urlsToCacheKeys.get(a),
          secondEntry: n
        });
      if (typeof r != "string" && r.integrity) {
        if (this._cacheKeysToIntegrities.has(n) && this._cacheKeysToIntegrities.get(n) !== r.integrity)
          throw new h("add-to-cache-list-conflicting-integrities", {
            url: a
          });
        this._cacheKeysToIntegrities.set(n, r.integrity);
      }
      if (this._urlsToCacheKeys.set(a, n), this._urlsToCacheModes.set(a, o), t.length > 0) {
        const c = `Workbox is precaching URLs without revision info: ${t.join(", ")}
This is generally NOT safe. Learn more at https://bit.ly/wb-precache`;
        i.warn(c);
      }
    }
  }
  /**
   * Precaches new and updated assets. Call this method from the service worker
   * install event.
   *
   * Note: this method calls `event.waitUntil()` for you, so you do not need
   * to call it yourself in your event handlers.
   *
   * @param {ExtendableEvent} event
   * @return {Promise<workbox-precaching.InstallResult>}
   */
  install(e) {
    return J(e, async () => {
      const t = new _e();
      this.strategy.plugins.push(t);
      for (const [a, o] of this._urlsToCacheKeys) {
        const c = this._cacheKeysToIntegrities.get(o), u = this._urlsToCacheModes.get(a), f = new Request(a, {
          integrity: c,
          cache: u,
          credentials: "same-origin"
        });
        await Promise.all(this.strategy.handleAll({
          params: { cacheKey: o },
          request: f,
          event: e
        }));
      }
      const { updatedURLs: r, notUpdatedURLs: n } = t;
      return Ee(r, n), { updatedURLs: r, notUpdatedURLs: n };
    });
  }
  /**
   * Deletes assets that are no longer present in the current precache manifest.
   * Call this method from the service worker activate event.
   *
   * Note: this method calls `event.waitUntil()` for you, so you do not need
   * to call it yourself in your event handlers.
   *
   * @param {ExtendableEvent} event
   * @return {Promise<workbox-precaching.CleanupResult>}
   */
  activate(e) {
    return J(e, async () => {
      const t = await self.caches.open(this.strategy.cacheName), r = await t.keys(), n = new Set(this._urlsToCacheKeys.values()), a = [];
      for (const o of r)
        n.has(o.url) || (await t.delete(o), a.push(o.url));
      return Ne(a), { deletedURLs: a };
    });
  }
  /**
   * Returns a mapping of a precached URL to the corresponding cache key, taking
   * into account the revision information for the URL.
   *
   * @return {Map<string, string>} A URL to cache key mapping.
   */
  getURLsToCacheKeys() {
    return this._urlsToCacheKeys;
  }
  /**
   * Returns a list of all the URLs that have been precached by the current
   * service worker.
   *
   * @return {Array<string>} The precached URLs.
   */
  getCachedURLs() {
    return [...this._urlsToCacheKeys.keys()];
  }
  /**
   * Returns the cache key used for storing a given URL. If that URL is
   * unversioned, like `/index.html', then the cache key will be the original
   * URL with a search parameter appended to it.
   *
   * @param {string} url A URL whose cache key you want to look up.
   * @return {string} The versioned URL that corresponds to a cache key
   * for the original URL, or undefined if that URL isn't precached.
   */
  getCacheKeyForURL(e) {
    const t = new URL(e, location.href);
    return this._urlsToCacheKeys.get(t.href);
  }
  /**
   * @param {string} url A cache key whose SRI you want to look up.
   * @return {string} The subresource integrity associated with the cache key,
   * or undefined if it's not set.
   */
  getIntegrityForCacheKey(e) {
    return this._cacheKeysToIntegrities.get(e);
  }
  /**
   * This acts as a drop-in replacement for
   * [`cache.match()`](https://developer.mozilla.org/en-US/docs/Web/API/Cache/match)
   * with the following differences:
   *
   * - It knows what the name of the precache is, and only checks in that cache.
   * - It allows you to pass in an "original" URL without versioning parameters,
   * and it will automatically look up the correct cache key for the currently
   * active revision of that URL.
   *
   * E.g., `matchPrecache('index.html')` will find the correct precached
   * response for the currently active service worker, even if the actual cache
   * key is `'/index.html?__WB_REVISION__=1234abcd'`.
   *
   * @param {string|Request} request The key (without revisioning parameters)
   * to look up in the precache.
   * @return {Promise<Response|undefined>}
   */
  async matchPrecache(e) {
    const t = e instanceof Request ? e.url : e, r = this.getCacheKeyForURL(t);
    if (r)
      return (await self.caches.open(this.strategy.cacheName)).match(r);
  }
  /**
   * Returns a function that looks up `url` in the precache (taking into
   * account revision information), and returns the corresponding `Response`.
   *
   * @param {string} url The precached URL which will be used to lookup the
   * `Response`.
   * @return {workbox-routing~handlerCallback}
   */
  createHandlerBoundToURL(e) {
    const t = this.getCacheKeyForURL(e);
    if (!t)
      throw new h("non-precached-url", { url: e });
    return (r) => (r.request = new Request(e), r.params = Object.assign({ cacheKey: t }, r.params), this.strategy.handle(r));
  }
}
let L;
const B = () => (L || (L = new Se()), L);
try {
  self["workbox:routing:7.0.0"] && _();
} catch {
}
const se = "GET", De = [
  "DELETE",
  "GET",
  "HEAD",
  "PATCH",
  "POST",
  "PUT"
], v = (s) => s && typeof s == "object" ? (l.hasMethod(s, "handle", {
  moduleName: "workbox-routing",
  className: "Route",
  funcName: "constructor",
  paramName: "handler"
}), s) : (l.isType(s, "function", {
  moduleName: "workbox-routing",
  className: "Route",
  funcName: "constructor",
  paramName: "handler"
}), { handle: s });
class R {
  /**
   * Constructor for Route class.
   *
   * @param {workbox-routing~matchCallback} match
   * A callback function that determines whether the route matches a given
   * `fetch` event by returning a non-falsy value.
   * @param {workbox-routing~handlerCallback} handler A callback
   * function that returns a Promise resolving to a Response.
   * @param {string} [method='GET'] The HTTP method to match the Route
   * against.
   */
  constructor(e, t, r = se) {
    l.isType(e, "function", {
      moduleName: "workbox-routing",
      className: "Route",
      funcName: "constructor",
      paramName: "match"
    }), r && l.isOneOf(r, De, { paramName: "method" }), this.handler = v(t), this.match = e, this.method = r;
  }
  /**
   *
   * @param {workbox-routing-handlerCallback} handler A callback
   * function that returns a Promise resolving to a Response
   */
  setCatchHandler(e) {
    this.catchHandler = v(e);
  }
}
class Ae extends R {
  /**
   * If the regular expression contains
   * [capture groups]{@link https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/RegExp#grouping-back-references},
   * the captured values will be passed to the
   * {@link workbox-routing~handlerCallback} `params`
   * argument.
   *
   * @param {RegExp} regExp The regular expression to match against URLs.
   * @param {workbox-routing~handlerCallback} handler A callback
   * function that returns a Promise resulting in a Response.
   * @param {string} [method='GET'] The HTTP method to match the Route
   * against.
   */
  constructor(e, t, r) {
    l.isInstance(e, RegExp, {
      moduleName: "workbox-routing",
      className: "RegExpRoute",
      funcName: "constructor",
      paramName: "pattern"
    });
    const n = ({ url: a }) => {
      const o = e.exec(a.href);
      if (o) {
        if (a.origin !== location.origin && o.index !== 0) {
          i.debug(`The regular expression '${e.toString()}' only partially matched against the cross-origin URL '${a.toString()}'. RegExpRoute's will only handle cross-origin requests if they match the entire URL.`);
          return;
        }
        return o.slice(1);
      }
    };
    super(n, t, r);
  }
}
class Ie {
  /**
   * Initializes a new Router.
   */
  constructor() {
    this._routes = /* @__PURE__ */ new Map(), this._defaultHandlerMap = /* @__PURE__ */ new Map();
  }
  /**
   * @return {Map<string, Array<workbox-routing.Route>>} routes A `Map` of HTTP
   * method name ('GET', etc.) to an array of all the corresponding `Route`
   * instances that are registered.
   */
  get routes() {
    return this._routes;
  }
  /**
   * Adds a fetch event listener to respond to events when a route matches
   * the event's request.
   */
  addFetchListener() {
    self.addEventListener("fetch", (e) => {
      const { request: t } = e, r = this.handleRequest({ request: t, event: e });
      r && e.respondWith(r);
    });
  }
  /**
   * Adds a message event listener for URLs to cache from the window.
   * This is useful to cache resources loaded on the page prior to when the
   * service worker started controlling it.
   *
   * The format of the message data sent from the window should be as follows.
   * Where the `urlsToCache` array may consist of URL strings or an array of
   * URL string + `requestInit` object (the same as you'd pass to `fetch()`).
   *
   * ```
   * {
   *   type: 'CACHE_URLS',
   *   payload: {
   *     urlsToCache: [
   *       './script1.js',
   *       './script2.js',
   *       ['./script3.js', {mode: 'no-cors'}],
   *     ],
   *   },
   * }
   * ```
   */
  addCacheListener() {
    self.addEventListener("message", (e) => {
      if (e.data && e.data.type === "CACHE_URLS") {
        const { payload: t } = e.data;
        i.debug("Caching URLs from the window", t.urlsToCache);
        const r = Promise.all(t.urlsToCache.map((n) => {
          typeof n == "string" && (n = [n]);
          const a = new Request(...n);
          return this.handleRequest({ request: a, event: e });
        }));
        e.waitUntil(r), e.ports && e.ports[0] && r.then(() => e.ports[0].postMessage(!0));
      }
    });
  }
  /**
   * Apply the routing rules to a FetchEvent object to get a Response from an
   * appropriate Route's handler.
   *
   * @param {Object} options
   * @param {Request} options.request The request to handle.
   * @param {ExtendableEvent} options.event The event that triggered the
   *     request.
   * @return {Promise<Response>|undefined} A promise is returned if a
   *     registered route can handle the request. If there is no matching
   *     route and there's no `defaultHandler`, `undefined` is returned.
   */
  handleRequest({ request: e, event: t }) {
    l.isInstance(e, Request, {
      moduleName: "workbox-routing",
      className: "Router",
      funcName: "handleRequest",
      paramName: "options.request"
    });
    const r = new URL(e.url, location.href);
    if (!r.protocol.startsWith("http")) {
      i.debug("Workbox Router only supports URLs that start with 'http'.");
      return;
    }
    const n = r.origin === location.origin, { params: a, route: o } = this.findMatchingRoute({
      event: t,
      request: e,
      sameOrigin: n,
      url: r
    });
    let c = o && o.handler;
    const u = [];
    c && (u.push(["Found a route to handle this request:", o]), a && u.push([
      "Passing the following params to the route's handler:",
      a
    ]));
    const f = e.method;
    if (!c && this._defaultHandlerMap.has(f) && (u.push(`Failed to find a matching route. Falling back to the default handler for ${f}.`), c = this._defaultHandlerMap.get(f)), !c) {
      i.debug(`No route found for: ${p(r)}`);
      return;
    }
    i.groupCollapsed(`Router is responding to: ${p(r)}`), u.forEach((g) => {
      Array.isArray(g) ? i.log(...g) : i.log(g);
    }), i.groupEnd();
    let m;
    try {
      m = c.handle({ url: r, request: e, event: t, params: a });
    } catch (g) {
      m = Promise.reject(g);
    }
    const d = o && o.catchHandler;
    return m instanceof Promise && (this._catchHandler || d) && (m = m.catch(async (g) => {
      if (d) {
        i.groupCollapsed(`Error thrown when responding to:  ${p(r)}. Falling back to route's Catch Handler.`), i.error("Error thrown by:", o), i.error(g), i.groupEnd();
        try {
          return await d.handle({ url: r, request: e, event: t, params: a });
        } catch (G) {
          G instanceof Error && (g = G);
        }
      }
      if (this._catchHandler)
        return i.groupCollapsed(`Error thrown when responding to:  ${p(r)}. Falling back to global Catch Handler.`), i.error("Error thrown by:", o), i.error(g), i.groupEnd(), this._catchHandler.handle({ url: r, request: e, event: t });
      throw g;
    })), m;
  }
  /**
   * Checks a request and URL (and optionally an event) against the list of
   * registered routes, and if there's a match, returns the corresponding
   * route along with any params generated by the match.
   *
   * @param {Object} options
   * @param {URL} options.url
   * @param {boolean} options.sameOrigin The result of comparing `url.origin`
   *     against the current origin.
   * @param {Request} options.request The request to match.
   * @param {Event} options.event The corresponding event.
   * @return {Object} An object with `route` and `params` properties.
   *     They are populated if a matching route was found or `undefined`
   *     otherwise.
   */
  findMatchingRoute({ url: e, sameOrigin: t, request: r, event: n }) {
    const a = this._routes.get(r.method) || [];
    for (const o of a) {
      let c;
      const u = o.match({ url: e, sameOrigin: t, request: r, event: n });
      if (u)
        return u instanceof Promise && i.warn(`While routing ${p(e)}, an async matchCallback function was used. Please convert the following route to use a synchronous matchCallback function:`, o), c = u, (Array.isArray(c) && c.length === 0 || u.constructor === Object && // eslint-disable-line
        Object.keys(u).length === 0 || typeof u == "boolean") && (c = void 0), { route: o, params: c };
    }
    return {};
  }
  /**
   * Define a default `handler` that's called when no routes explicitly
   * match the incoming request.
   *
   * Each HTTP method ('GET', 'POST', etc.) gets its own default handler.
   *
   * Without a default handler, unmatched requests will go against the
   * network as if there were no service worker present.
   *
   * @param {workbox-routing~handlerCallback} handler A callback
   * function that returns a Promise resulting in a Response.
   * @param {string} [method='GET'] The HTTP method to associate with this
   * default handler. Each method has its own default.
   */
  setDefaultHandler(e, t = se) {
    this._defaultHandlerMap.set(t, v(e));
  }
  /**
   * If a Route throws an error while handling a request, this `handler`
   * will be called and given a chance to provide a response.
   *
   * @param {workbox-routing~handlerCallback} handler A callback
   * function that returns a Promise resulting in a Response.
   */
  setCatchHandler(e) {
    this._catchHandler = v(e);
  }
  /**
   * Registers a route with the router.
   *
   * @param {workbox-routing.Route} route The route to register.
   */
  registerRoute(e) {
    l.isType(e, "object", {
      moduleName: "workbox-routing",
      className: "Router",
      funcName: "registerRoute",
      paramName: "route"
    }), l.hasMethod(e, "match", {
      moduleName: "workbox-routing",
      className: "Router",
      funcName: "registerRoute",
      paramName: "route"
    }), l.isType(e.handler, "object", {
      moduleName: "workbox-routing",
      className: "Router",
      funcName: "registerRoute",
      paramName: "route"
    }), l.hasMethod(e.handler, "handle", {
      moduleName: "workbox-routing",
      className: "Router",
      funcName: "registerRoute",
      paramName: "route.handler"
    }), l.isType(e.method, "string", {
      moduleName: "workbox-routing",
      className: "Router",
      funcName: "registerRoute",
      paramName: "route.method"
    }), this._routes.has(e.method) || this._routes.set(e.method, []), this._routes.get(e.method).push(e);
  }
  /**
   * Unregisters a route with the router.
   *
   * @param {workbox-routing.Route} route The route to unregister.
   */
  unregisterRoute(e) {
    if (!this._routes.has(e.method))
      throw new h("unregister-route-but-not-found-with-method", {
        method: e.method
      });
    const t = this._routes.get(e.method).indexOf(e);
    if (t > -1)
      this._routes.get(e.method).splice(t, 1);
    else
      throw new h("unregister-route-route-not-registered");
  }
}
let C;
const Oe = () => (C || (C = new Ie(), C.addFetchListener(), C.addCacheListener()), C);
function E(s, e, t) {
  let r;
  if (typeof s == "string") {
    const a = new URL(s, location.href);
    {
      if (!(s.startsWith("/") || s.startsWith("http")))
        throw new h("invalid-string", {
          moduleName: "workbox-routing",
          funcName: "registerRoute",
          paramName: "capture"
        });
      const c = s.startsWith("http") ? a.pathname : s, u = "[*:?+]";
      new RegExp(`${u}`).exec(c) && i.debug(`The '$capture' parameter contains an Express-style wildcard character (${u}). Strings are now always interpreted as exact matches; use a RegExp for partial or wildcard matches.`);
    }
    const o = ({ url: c }) => (c.pathname === a.pathname && c.origin !== a.origin && i.debug(`${s} only partially matches the cross-origin URL ${c.toString()}. This route will only handle cross-origin requests if they match the entire URL.`), c.href === a.href);
    r = new R(o, e, t);
  } else if (s instanceof RegExp)
    r = new Ae(s, e, t);
  else if (typeof s == "function")
    r = new R(s, e, t);
  else if (s instanceof R)
    r = s;
  else
    throw new h("unsupported-route-type", {
      moduleName: "workbox-routing",
      funcName: "registerRoute",
      paramName: "capture"
    });
  return Oe().registerRoute(r), r;
}
function Me(s, e = []) {
  for (const t of [...s.searchParams.keys()])
    e.some((r) => r.test(t)) && s.searchParams.delete(t);
  return s;
}
function* qe(s, { ignoreURLParametersMatching: e = [/^utm_/, /^fbclid$/], directoryIndex: t = "index.html", cleanURLs: r = !0, urlManipulation: n } = {}) {
  const a = new URL(s, location.href);
  a.hash = "", yield a.href;
  const o = Me(a, e);
  if (yield o.href, t && o.pathname.endsWith("/")) {
    const c = new URL(o.href);
    c.pathname += t, yield c.href;
  }
  if (r) {
    const c = new URL(o.href);
    c.pathname += ".html", yield c.href;
  }
  if (n) {
    const c = n({ url: a });
    for (const u of c)
      yield u.href;
  }
}
class We extends R {
  /**
   * @param {PrecacheController} precacheController A `PrecacheController`
   * instance used to both match requests and respond to fetch events.
   * @param {Object} [options] Options to control how requests are matched
   * against the list of precached URLs.
   * @param {string} [options.directoryIndex=index.html] The `directoryIndex` will
   * check cache entries for a URLs ending with '/' to see if there is a hit when
   * appending the `directoryIndex` value.
   * @param {Array<RegExp>} [options.ignoreURLParametersMatching=[/^utm_/, /^fbclid$/]] An
   * array of regex's to remove search params when looking for a cache match.
   * @param {boolean} [options.cleanURLs=true] The `cleanURLs` option will
   * check the cache for the URL with a `.html` added to the end of the end.
   * @param {workbox-precaching~urlManipulation} [options.urlManipulation]
   * This is a function that should take a URL and return an array of
   * alternative URLs that should be checked for precache matches.
   */
  constructor(e, t) {
    const r = ({ request: n }) => {
      const a = e.getURLsToCacheKeys();
      for (const o of qe(n.url, t)) {
        const c = a.get(o);
        if (c) {
          const u = e.getIntegrityForCacheKey(c);
          return { cacheKey: c, integrity: u };
        }
      }
      i.debug("Precaching did not find a match for " + p(n.url));
    };
    super(r, e.strategy);
  }
}
function Ke(s) {
  const e = B(), t = new We(e, s);
  E(t);
}
const Fe = "-precache-", je = async (s, e = Fe) => {
  const r = (await self.caches.keys()).filter((n) => n.includes(e) && n.includes(self.registration.scope) && n !== s);
  return await Promise.all(r.map((n) => self.caches.delete(n))), r;
};
function Be() {
  self.addEventListener("activate", (s) => {
    const e = k.getPrecacheName();
    s.waitUntil(je(e).then((t) => {
      t.length > 0 && i.log("The following out-of-date precaches were cleaned up automatically:", t);
    }));
  });
}
function He(s) {
  return B().createHandlerBoundToURL(s);
}
function Ve(s) {
  B().precache(s);
}
function Ge(s, e) {
  Ve(s), Ke(e);
}
class Je extends R {
  /**
   * If both `denylist` and `allowlist` are provided, the `denylist` will
   * take precedence and the request will not match this route.
   *
   * The regular expressions in `allowlist` and `denylist`
   * are matched against the concatenated
   * [`pathname`]{@link https://developer.mozilla.org/en-US/docs/Web/API/HTMLHyperlinkElementUtils/pathname}
   * and [`search`]{@link https://developer.mozilla.org/en-US/docs/Web/API/HTMLHyperlinkElementUtils/search}
   * portions of the requested URL.
   *
   * *Note*: These RegExps may be evaluated against every destination URL during
   * a navigation. Avoid using
   * [complex RegExps](https://github.com/GoogleChrome/workbox/issues/3077),
   * or else your users may see delays when navigating your site.
   *
   * @param {workbox-routing~handlerCallback} handler A callback
   * function that returns a Promise resulting in a Response.
   * @param {Object} options
   * @param {Array<RegExp>} [options.denylist] If any of these patterns match,
   * the route will not handle the request (even if a allowlist RegExp matches).
   * @param {Array<RegExp>} [options.allowlist=[/./]] If any of these patterns
   * match the URL's pathname and search parameter, the route will handle the
   * request (assuming the denylist doesn't match).
   */
  constructor(e, { allowlist: t = [/./], denylist: r = [] } = {}) {
    l.isArrayOfClass(t, RegExp, {
      moduleName: "workbox-routing",
      className: "NavigationRoute",
      funcName: "constructor",
      paramName: "options.allowlist"
    }), l.isArrayOfClass(r, RegExp, {
      moduleName: "workbox-routing",
      className: "NavigationRoute",
      funcName: "constructor",
      paramName: "options.denylist"
    }), super((n) => this._match(n), e), this._allowlist = t, this._denylist = r;
  }
  /**
   * Routes match handler.
   *
   * @param {Object} options
   * @param {URL} options.url
   * @param {Request} options.request
   * @return {boolean}
   *
   * @private
   */
  _match({ url: e, request: t }) {
    if (t && t.mode !== "navigate")
      return !1;
    const r = e.pathname + e.search;
    for (const n of this._denylist)
      if (n.test(r))
        return i.log(`The navigation route ${r} is not being used, since the URL matches this denylist pattern: ${n.toString()}`), !1;
    return this._allowlist.some((n) => n.test(r)) ? (i.debug(`The navigation route ${r} is being used.`), !0) : (i.log(`The navigation route ${r} is not being used, since the URL being navigated to doesn't match the allowlist.`), !1);
  }
}
try {
  self["workbox:cacheable-response:7.0.0"] && _();
} catch {
}
class Qe {
  /**
   * To construct a new CacheableResponse instance you must provide at least
   * one of the `config` properties.
   *
   * If both `statuses` and `headers` are specified, then both conditions must
   * be met for the `Response` to be considered cacheable.
   *
   * @param {Object} config
   * @param {Array<number>} [config.statuses] One or more status codes that a
   * `Response` can have and be considered cacheable.
   * @param {Object<string,string>} [config.headers] A mapping of header names
   * and expected values that a `Response` can have and be considered cacheable.
   * If multiple headers are provided, only one needs to be present.
   */
  constructor(e = {}) {
    {
      if (!(e.statuses || e.headers))
        throw new h("statuses-or-headers-required", {
          moduleName: "workbox-cacheable-response",
          className: "CacheableResponse",
          funcName: "constructor"
        });
      e.statuses && l.isArray(e.statuses, {
        moduleName: "workbox-cacheable-response",
        className: "CacheableResponse",
        funcName: "constructor",
        paramName: "config.statuses"
      }), e.headers && l.isType(e.headers, "object", {
        moduleName: "workbox-cacheable-response",
        className: "CacheableResponse",
        funcName: "constructor",
        paramName: "config.headers"
      });
    }
    this._statuses = e.statuses, this._headers = e.headers;
  }
  /**
   * Checks a response to see whether it's cacheable or not, based on this
   * object's configuration.
   *
   * @param {Response} response The response whose cacheability is being
   * checked.
   * @return {boolean} `true` if the `Response` is cacheable, and `false`
   * otherwise.
   */
  isResponseCacheable(e) {
    l.isInstance(e, Response, {
      moduleName: "workbox-cacheable-response",
      className: "CacheableResponse",
      funcName: "isResponseCacheable",
      paramName: "response"
    });
    let t = !0;
    if (this._statuses && (t = this._statuses.includes(e.status)), this._headers && t && (t = Object.keys(this._headers).some((r) => e.headers.get(r) === this._headers[r])), !t) {
      i.groupCollapsed(`The request for '${p(e.url)}' returned a response that does not meet the criteria for being cached.`), i.groupCollapsed("View cacheability criteria here."), i.log("Cacheable statuses: " + JSON.stringify(this._statuses)), i.log("Cacheable headers: " + JSON.stringify(this._headers, null, 2)), i.groupEnd();
      const r = {};
      e.headers.forEach((n, a) => {
        r[a] = n;
      }), i.groupCollapsed("View response status and headers here."), i.log(`Response status: ${e.status}`), i.log("Response headers: " + JSON.stringify(r, null, 2)), i.groupEnd(), i.groupCollapsed("View full response details here."), i.log(e.headers), i.log(e), i.groupEnd(), i.groupEnd();
    }
    return t;
  }
}
class S {
  /**
   * To construct a new CacheableResponsePlugin instance you must provide at
   * least one of the `config` properties.
   *
   * If both `statuses` and `headers` are specified, then both conditions must
   * be met for the `Response` to be considered cacheable.
   *
   * @param {Object} config
   * @param {Array<number>} [config.statuses] One or more status codes that a
   * `Response` can have and be considered cacheable.
   * @param {Object<string,string>} [config.headers] A mapping of header names
   * and expected values that a `Response` can have and be considered cacheable.
   * If multiple headers are provided, only one needs to be present.
   */
  constructor(e) {
    this.cacheWillUpdate = async ({ response: t }) => this._cacheableResponse.isResponseCacheable(t) ? t : null, this._cacheableResponse = new Qe(e);
  }
}
const U = {
  strategyStart: (s, e) => `Using ${s} to respond to '${p(e.url)}'`,
  printFinalResponse: (s) => {
    s && (i.groupCollapsed("View the final response here."), i.log(s || "[No response returned]"), i.groupEnd());
  }
}, re = {
  /**
   * Returns a valid response (to allow caching) if the status is 200 (OK) or
   * 0 (opaque).
   *
   * @param {Object} options
   * @param {Response} options.response
   * @return {Response|null}
   *
   * @private
   */
  cacheWillUpdate: async ({ response: s }) => s.status === 200 || s.status === 0 ? s : null
};
class Ye extends j {
  /**
   * @param {Object} [options]
   * @param {string} [options.cacheName] Cache name to store and retrieve
   * requests. Defaults to cache names provided by
   * {@link workbox-core.cacheNames}.
   * @param {Array<Object>} [options.plugins] [Plugins]{@link https://developers.google.com/web/tools/workbox/guides/using-plugins}
   * to use in conjunction with this caching strategy.
   * @param {Object} [options.fetchOptions] Values passed along to the
   * [`init`](https://developer.mozilla.org/en-US/docs/Web/API/WindowOrWorkerGlobalScope/fetch#Parameters)
   * of [non-navigation](https://github.com/GoogleChrome/workbox/issues/1796)
   * `fetch()` requests made by this strategy.
   * @param {Object} [options.matchOptions] [`CacheQueryOptions`](https://w3c.github.io/ServiceWorker/#dictdef-cachequeryoptions)
   * @param {number} [options.networkTimeoutSeconds] If set, any network requests
   * that fail to respond within the timeout will fallback to the cache.
   *
   * This option can be used to combat
   * "[lie-fi]{@link https://developers.google.com/web/fundamentals/performance/poor-connectivity/#lie-fi}"
   * scenarios.
   */
  constructor(e = {}) {
    super(e), this.plugins.some((t) => "cacheWillUpdate" in t) || this.plugins.unshift(re), this._networkTimeoutSeconds = e.networkTimeoutSeconds || 0, this._networkTimeoutSeconds && l.isType(this._networkTimeoutSeconds, "number", {
      moduleName: "workbox-strategies",
      className: this.constructor.name,
      funcName: "constructor",
      paramName: "networkTimeoutSeconds"
    });
  }
  /**
   * @private
   * @param {Request|string} request A request to run this strategy for.
   * @param {workbox-strategies.StrategyHandler} handler The event that
   *     triggered the request.
   * @return {Promise<Response>}
   */
  async _handle(e, t) {
    const r = [];
    l.isInstance(e, Request, {
      moduleName: "workbox-strategies",
      className: this.constructor.name,
      funcName: "handle",
      paramName: "makeRequest"
    });
    const n = [];
    let a;
    if (this._networkTimeoutSeconds) {
      const { id: u, promise: f } = this._getTimeoutPromise({ request: e, logs: r, handler: t });
      a = u, n.push(f);
    }
    const o = this._getNetworkPromise({
      timeoutId: a,
      request: e,
      logs: r,
      handler: t
    });
    n.push(o);
    const c = await t.waitUntil((async () => await t.waitUntil(Promise.race(n)) || // If Promise.race() resolved with null, it might be due to a network
    // timeout + a cache miss. If that were to happen, we'd rather wait until
    // the networkPromise resolves instead of returning null.
    // Note that it's fine to await an already-resolved promise, so we don't
    // have to check to see if it's still "in flight".
    await o)());
    {
      i.groupCollapsed(U.strategyStart(this.constructor.name, e));
      for (const u of r)
        i.log(u);
      U.printFinalResponse(c), i.groupEnd();
    }
    if (!c)
      throw new h("no-response", { url: e.url });
    return c;
  }
  /**
   * @param {Object} options
   * @param {Request} options.request
   * @param {Array} options.logs A reference to the logs array
   * @param {Event} options.event
   * @return {Promise<Response>}
   *
   * @private
   */
  _getTimeoutPromise({ request: e, logs: t, handler: r }) {
    let n;
    return {
      promise: new Promise((o) => {
        n = setTimeout(async () => {
          t.push(`Timing out the network response at ${this._networkTimeoutSeconds} seconds.`), o(await r.cacheMatch(e));
        }, this._networkTimeoutSeconds * 1e3);
      }),
      id: n
    };
  }
  /**
   * @param {Object} options
   * @param {number|undefined} options.timeoutId
   * @param {Request} options.request
   * @param {Array} options.logs A reference to the logs Array.
   * @param {Event} options.event
   * @return {Promise<Response>}
   *
   * @private
   */
  async _getNetworkPromise({ timeoutId: e, request: t, logs: r, handler: n }) {
    let a, o;
    try {
      o = await n.fetchAndCachePut(t);
    } catch (c) {
      c instanceof Error && (a = c);
    }
    return e && clearTimeout(e), o ? r.push("Got response from network.") : r.push("Unable to get a response from the network. Will respond with a cached response."), (a || !o) && (o = await n.cacheMatch(t), o ? r.push(`Found a cached response in the '${this.cacheName}' cache.`) : r.push(`No response found in the '${this.cacheName}' cache.`)), o;
  }
}
class z extends j {
  /**
   * @param {Object} [options]
   * @param {string} [options.cacheName] Cache name to store and retrieve
   * requests. Defaults to cache names provided by
   * {@link workbox-core.cacheNames}.
   * @param {Array<Object>} [options.plugins] [Plugins]{@link https://developers.google.com/web/tools/workbox/guides/using-plugins}
   * to use in conjunction with this caching strategy.
   * @param {Object} [options.fetchOptions] Values passed along to the
   * [`init`](https://developer.mozilla.org/en-US/docs/Web/API/WindowOrWorkerGlobalScope/fetch#Parameters)
   * of [non-navigation](https://github.com/GoogleChrome/workbox/issues/1796)
   * `fetch()` requests made by this strategy.
   * @param {Object} [options.matchOptions] [`CacheQueryOptions`](https://w3c.github.io/ServiceWorker/#dictdef-cachequeryoptions)
   */
  constructor(e = {}) {
    super(e), this.plugins.some((t) => "cacheWillUpdate" in t) || this.plugins.unshift(re);
  }
  /**
   * @private
   * @param {Request|string} request A request to run this strategy for.
   * @param {workbox-strategies.StrategyHandler} handler The event that
   *     triggered the request.
   * @return {Promise<Response>}
   */
  async _handle(e, t) {
    const r = [];
    l.isInstance(e, Request, {
      moduleName: "workbox-strategies",
      className: this.constructor.name,
      funcName: "handle",
      paramName: "request"
    });
    const n = t.fetchAndCachePut(e).catch(() => {
    });
    t.waitUntil(n);
    let a = await t.cacheMatch(e), o;
    if (a)
      r.push(`Found a cached response in the '${this.cacheName}' cache. Will update with the network response in the background.`);
    else {
      r.push(`No response found in the '${this.cacheName}' cache. Will wait for the network response.`);
      try {
        a = await n;
      } catch (c) {
        c instanceof Error && (o = c);
      }
    }
    {
      i.groupCollapsed(U.strategyStart(this.constructor.name, e));
      for (const c of r)
        i.log(c);
      U.printFinalResponse(a), i.groupEnd();
    }
    if (!a)
      throw new h("no-response", { url: e.url, error: o });
    return a;
  }
}
function ne(s) {
  s.then(() => {
  });
}
const ze = (s, e) => e.some((t) => s instanceof t);
let Z, X;
function Ze() {
  return Z || (Z = [
    IDBDatabase,
    IDBObjectStore,
    IDBIndex,
    IDBCursor,
    IDBTransaction
  ]);
}
function Xe() {
  return X || (X = [
    IDBCursor.prototype.advance,
    IDBCursor.prototype.continue,
    IDBCursor.prototype.continuePrimaryKey
  ]);
}
const ae = /* @__PURE__ */ new WeakMap(), W = /* @__PURE__ */ new WeakMap(), oe = /* @__PURE__ */ new WeakMap(), D = /* @__PURE__ */ new WeakMap(), H = /* @__PURE__ */ new WeakMap();
function et(s) {
  const e = new Promise((t, r) => {
    const n = () => {
      s.removeEventListener("success", a), s.removeEventListener("error", o);
    }, a = () => {
      t(y(s.result)), n();
    }, o = () => {
      r(s.error), n();
    };
    s.addEventListener("success", a), s.addEventListener("error", o);
  });
  return e.then((t) => {
    t instanceof IDBCursor && ae.set(t, s);
  }).catch(() => {
  }), H.set(e, s), e;
}
function tt(s) {
  if (W.has(s))
    return;
  const e = new Promise((t, r) => {
    const n = () => {
      s.removeEventListener("complete", a), s.removeEventListener("error", o), s.removeEventListener("abort", o);
    }, a = () => {
      t(), n();
    }, o = () => {
      r(s.error || new DOMException("AbortError", "AbortError")), n();
    };
    s.addEventListener("complete", a), s.addEventListener("error", o), s.addEventListener("abort", o);
  });
  W.set(s, e);
}
let K = {
  get(s, e, t) {
    if (s instanceof IDBTransaction) {
      if (e === "done")
        return W.get(s);
      if (e === "objectStoreNames")
        return s.objectStoreNames || oe.get(s);
      if (e === "store")
        return t.objectStoreNames[1] ? void 0 : t.objectStore(t.objectStoreNames[0]);
    }
    return y(s[e]);
  },
  set(s, e, t) {
    return s[e] = t, !0;
  },
  has(s, e) {
    return s instanceof IDBTransaction && (e === "done" || e === "store") ? !0 : e in s;
  }
};
function st(s) {
  K = s(K);
}
function rt(s) {
  return s === IDBDatabase.prototype.transaction && !("objectStoreNames" in IDBTransaction.prototype) ? function(e, ...t) {
    const r = s.call(A(this), e, ...t);
    return oe.set(r, e.sort ? e.sort() : [e]), y(r);
  } : Xe().includes(s) ? function(...e) {
    return s.apply(A(this), e), y(ae.get(this));
  } : function(...e) {
    return y(s.apply(A(this), e));
  };
}
function nt(s) {
  return typeof s == "function" ? rt(s) : (s instanceof IDBTransaction && tt(s), ze(s, Ze()) ? new Proxy(s, K) : s);
}
function y(s) {
  if (s instanceof IDBRequest)
    return et(s);
  if (D.has(s))
    return D.get(s);
  const e = nt(s);
  return e !== s && (D.set(s, e), H.set(e, s)), e;
}
const A = (s) => H.get(s);
function at(s, e, { blocked: t, upgrade: r, blocking: n, terminated: a } = {}) {
  const o = indexedDB.open(s, e), c = y(o);
  return r && o.addEventListener("upgradeneeded", (u) => {
    r(y(o.result), u.oldVersion, u.newVersion, y(o.transaction), u);
  }), t && o.addEventListener("blocked", (u) => t(
    // Casting due to https://github.com/microsoft/TypeScript-DOM-lib-generator/pull/1405
    u.oldVersion,
    u.newVersion,
    u
  )), c.then((u) => {
    a && u.addEventListener("close", () => a()), n && u.addEventListener("versionchange", (f) => n(f.oldVersion, f.newVersion, f));
  }).catch(() => {
  }), c;
}
function ot(s, { blocked: e } = {}) {
  const t = indexedDB.deleteDatabase(s);
  return e && t.addEventListener("blocked", (r) => e(
    // Casting due to https://github.com/microsoft/TypeScript-DOM-lib-generator/pull/1405
    r.oldVersion,
    r
  )), y(t).then(() => {
  });
}
const it = ["get", "getKey", "getAll", "getAllKeys", "count"], ct = ["put", "add", "delete", "clear"], I = /* @__PURE__ */ new Map();
function ee(s, e) {
  if (!(s instanceof IDBDatabase && !(e in s) && typeof e == "string"))
    return;
  if (I.get(e))
    return I.get(e);
  const t = e.replace(/FromIndex$/, ""), r = e !== t, n = ct.includes(t);
  if (
    // Bail if the target doesn't exist on the target. Eg, getAll isn't in Edge.
    !(t in (r ? IDBIndex : IDBObjectStore).prototype) || !(n || it.includes(t))
  )
    return;
  const a = async function(o, ...c) {
    const u = this.transaction(o, n ? "readwrite" : "readonly");
    let f = u.store;
    return r && (f = f.index(c.shift())), (await Promise.all([
      f[t](...c),
      n && u.done
    ]))[0];
  };
  return I.set(e, a), a;
}
st((s) => ({
  ...s,
  get: (e, t, r) => ee(e, t) || s.get(e, t, r),
  has: (e, t) => !!ee(e, t) || s.has(e, t)
}));
try {
  self["workbox:expiration:7.0.0"] && _();
} catch {
}
const ut = "workbox-expiration", N = "cache-entries", te = (s) => {
  const e = new URL(s, location.href);
  return e.hash = "", e.href;
};
class lt {
  /**
   *
   * @param {string} cacheName
   *
   * @private
   */
  constructor(e) {
    this._db = null, this._cacheName = e;
  }
  /**
   * Performs an upgrade of indexedDB.
   *
   * @param {IDBPDatabase<CacheDbSchema>} db
   *
   * @private
   */
  _upgradeDb(e) {
    const t = e.createObjectStore(N, { keyPath: "id" });
    t.createIndex("cacheName", "cacheName", { unique: !1 }), t.createIndex("timestamp", "timestamp", { unique: !1 });
  }
  /**
   * Performs an upgrade of indexedDB and deletes deprecated DBs.
   *
   * @param {IDBPDatabase<CacheDbSchema>} db
   *
   * @private
   */
  _upgradeDbAndDeleteOldDbs(e) {
    this._upgradeDb(e), this._cacheName && ot(this._cacheName);
  }
  /**
   * @param {string} url
   * @param {number} timestamp
   *
   * @private
   */
  async setTimestamp(e, t) {
    e = te(e);
    const r = {
      url: e,
      timestamp: t,
      cacheName: this._cacheName,
      // Creating an ID from the URL and cache name won't be necessary once
      // Edge switches to Chromium and all browsers we support work with
      // array keyPaths.
      id: this._getId(e)
    }, a = (await this.getDb()).transaction(N, "readwrite", {
      durability: "relaxed"
    });
    await a.store.put(r), await a.done;
  }
  /**
   * Returns the timestamp stored for a given URL.
   *
   * @param {string} url
   * @return {number | undefined}
   *
   * @private
   */
  async getTimestamp(e) {
    const r = await (await this.getDb()).get(N, this._getId(e));
    return r == null ? void 0 : r.timestamp;
  }
  /**
   * Iterates through all the entries in the object store (from newest to
   * oldest) and removes entries once either `maxCount` is reached or the
   * entry's timestamp is less than `minTimestamp`.
   *
   * @param {number} minTimestamp
   * @param {number} maxCount
   * @return {Array<string>}
   *
   * @private
   */
  async expireEntries(e, t) {
    const r = await this.getDb();
    let n = await r.transaction(N).store.index("timestamp").openCursor(null, "prev");
    const a = [];
    let o = 0;
    for (; n; ) {
      const u = n.value;
      u.cacheName === this._cacheName && (e && u.timestamp < e || t && o >= t ? a.push(n.value) : o++), n = await n.continue();
    }
    const c = [];
    for (const u of a)
      await r.delete(N, u.id), c.push(u.url);
    return c;
  }
  /**
   * Takes a URL and returns an ID that will be unique in the object store.
   *
   * @param {string} url
   * @return {string}
   *
   * @private
   */
  _getId(e) {
    return this._cacheName + "|" + te(e);
  }
  /**
   * Returns an open connection to the database.
   *
   * @private
   */
  async getDb() {
    return this._db || (this._db = await at(ut, 1, {
      upgrade: this._upgradeDbAndDeleteOldDbs.bind(this)
    })), this._db;
  }
}
class ht {
  /**
   * To construct a new CacheExpiration instance you must provide at least
   * one of the `config` properties.
   *
   * @param {string} cacheName Name of the cache to apply restrictions to.
   * @param {Object} config
   * @param {number} [config.maxEntries] The maximum number of entries to cache.
   * Entries used the least will be removed as the maximum is reached.
   * @param {number} [config.maxAgeSeconds] The maximum age of an entry before
   * it's treated as stale and removed.
   * @param {Object} [config.matchOptions] The [`CacheQueryOptions`](https://developer.mozilla.org/en-US/docs/Web/API/Cache/delete#Parameters)
   * that will be used when calling `delete()` on the cache.
   */
  constructor(e, t = {}) {
    this._isRunning = !1, this._rerunRequested = !1;
    {
      if (l.isType(e, "string", {
        moduleName: "workbox-expiration",
        className: "CacheExpiration",
        funcName: "constructor",
        paramName: "cacheName"
      }), !(t.maxEntries || t.maxAgeSeconds))
        throw new h("max-entries-or-age-required", {
          moduleName: "workbox-expiration",
          className: "CacheExpiration",
          funcName: "constructor"
        });
      t.maxEntries && l.isType(t.maxEntries, "number", {
        moduleName: "workbox-expiration",
        className: "CacheExpiration",
        funcName: "constructor",
        paramName: "config.maxEntries"
      }), t.maxAgeSeconds && l.isType(t.maxAgeSeconds, "number", {
        moduleName: "workbox-expiration",
        className: "CacheExpiration",
        funcName: "constructor",
        paramName: "config.maxAgeSeconds"
      });
    }
    this._maxEntries = t.maxEntries, this._maxAgeSeconds = t.maxAgeSeconds, this._matchOptions = t.matchOptions, this._cacheName = e, this._timestampModel = new lt(e);
  }
  /**
   * Expires entries for the given cache and given criteria.
   */
  async expireEntries() {
    if (this._isRunning) {
      this._rerunRequested = !0;
      return;
    }
    this._isRunning = !0;
    const e = this._maxAgeSeconds ? Date.now() - this._maxAgeSeconds * 1e3 : 0, t = await this._timestampModel.expireEntries(e, this._maxEntries), r = await self.caches.open(this._cacheName);
    for (const n of t)
      await r.delete(n, this._matchOptions);
    t.length > 0 ? (i.groupCollapsed(`Expired ${t.length} ${t.length === 1 ? "entry" : "entries"} and removed ${t.length === 1 ? "it" : "them"} from the '${this._cacheName}' cache.`), i.log(`Expired the following ${t.length === 1 ? "URL" : "URLs"}:`), t.forEach((n) => i.log(`    ${n}`)), i.groupEnd()) : i.debug("Cache expiration ran and found no entries to remove."), this._isRunning = !1, this._rerunRequested && (this._rerunRequested = !1, ne(this.expireEntries()));
  }
  /**
   * Update the timestamp for the given URL. This ensures the when
   * removing entries based on maximum entries, most recently used
   * is accurate or when expiring, the timestamp is up-to-date.
   *
   * @param {string} url
   */
  async updateTimestamp(e) {
    l.isType(e, "string", {
      moduleName: "workbox-expiration",
      className: "CacheExpiration",
      funcName: "updateTimestamp",
      paramName: "url"
    }), await this._timestampModel.setTimestamp(e, Date.now());
  }
  /**
   * Can be used to check if a URL has expired or not before it's used.
   *
   * This requires a look up from IndexedDB, so can be slow.
   *
   * Note: This method will not remove the cached entry, call
   * `expireEntries()` to remove indexedDB and Cache entries.
   *
   * @param {string} url
   * @return {boolean}
   */
  async isURLExpired(e) {
    if (this._maxAgeSeconds) {
      const t = await this._timestampModel.getTimestamp(e), r = Date.now() - this._maxAgeSeconds * 1e3;
      return t !== void 0 ? t < r : !0;
    } else
      throw new h("expired-test-without-max-age", {
        methodName: "isURLExpired",
        paramName: "maxAgeSeconds"
      });
  }
  /**
   * Removes the IndexedDB object store used to keep track of cache expiration
   * metadata.
   */
  async delete() {
    this._rerunRequested = !1, await this._timestampModel.expireEntries(1 / 0);
  }
}
function dt(s) {
  l.isType(s, "function", {
    moduleName: "workbox-core",
    funcName: "register",
    paramName: "callback"
  }), q.add(s), i.log("Registered a callback to respond to quota errors.", s);
}
class O {
  /**
   * @param {ExpirationPluginOptions} config
   * @param {number} [config.maxEntries] The maximum number of entries to cache.
   * Entries used the least will be removed as the maximum is reached.
   * @param {number} [config.maxAgeSeconds] The maximum age of an entry before
   * it's treated as stale and removed.
   * @param {Object} [config.matchOptions] The [`CacheQueryOptions`](https://developer.mozilla.org/en-US/docs/Web/API/Cache/delete#Parameters)
   * that will be used when calling `delete()` on the cache.
   * @param {boolean} [config.purgeOnQuotaError] Whether to opt this cache in to
   * automatic deletion if the available storage quota has been exceeded.
   */
  constructor(e = {}) {
    this.cachedResponseWillBeUsed = async ({ event: t, request: r, cacheName: n, cachedResponse: a }) => {
      if (!a)
        return null;
      const o = this._isResponseDateFresh(a), c = this._getCacheExpiration(n);
      ne(c.expireEntries());
      const u = c.updateTimestamp(r.url);
      if (t)
        try {
          t.waitUntil(u);
        } catch {
          "request" in t && i.warn(`Unable to ensure service worker stays alive when updating cache entry for '${p(t.request.url)}'.`);
        }
      return o ? a : null;
    }, this.cacheDidUpdate = async ({ cacheName: t, request: r }) => {
      l.isType(t, "string", {
        moduleName: "workbox-expiration",
        className: "Plugin",
        funcName: "cacheDidUpdate",
        paramName: "cacheName"
      }), l.isInstance(r, Request, {
        moduleName: "workbox-expiration",
        className: "Plugin",
        funcName: "cacheDidUpdate",
        paramName: "request"
      });
      const n = this._getCacheExpiration(t);
      await n.updateTimestamp(r.url), await n.expireEntries();
    };
    {
      if (!(e.maxEntries || e.maxAgeSeconds))
        throw new h("max-entries-or-age-required", {
          moduleName: "workbox-expiration",
          className: "Plugin",
          funcName: "constructor"
        });
      e.maxEntries && l.isType(e.maxEntries, "number", {
        moduleName: "workbox-expiration",
        className: "Plugin",
        funcName: "constructor",
        paramName: "config.maxEntries"
      }), e.maxAgeSeconds && l.isType(e.maxAgeSeconds, "number", {
        moduleName: "workbox-expiration",
        className: "Plugin",
        funcName: "constructor",
        paramName: "config.maxAgeSeconds"
      });
    }
    this._config = e, this._maxAgeSeconds = e.maxAgeSeconds, this._cacheExpirations = /* @__PURE__ */ new Map(), e.purgeOnQuotaError && dt(() => this.deleteCacheAndMetadata());
  }
  /**
   * A simple helper method to return a CacheExpiration instance for a given
   * cache name.
   *
   * @param {string} cacheName
   * @return {CacheExpiration}
   *
   * @private
   */
  _getCacheExpiration(e) {
    if (e === k.getRuntimeName())
      throw new h("expire-custom-caches-only");
    let t = this._cacheExpirations.get(e);
    return t || (t = new ht(e, this._config), this._cacheExpirations.set(e, t)), t;
  }
  /**
   * @param {Response} cachedResponse
   * @return {boolean}
   *
   * @private
   */
  _isResponseDateFresh(e) {
    if (!this._maxAgeSeconds)
      return !0;
    const t = this._getDateHeaderTimestamp(e);
    if (t === null)
      return !0;
    const r = Date.now();
    return t >= r - this._maxAgeSeconds * 1e3;
  }
  /**
   * This method will extract the data header and parse it into a useful
   * value.
   *
   * @param {Response} cachedResponse
   * @return {number|null}
   *
   * @private
   */
  _getDateHeaderTimestamp(e) {
    if (!e.headers.has("date"))
      return null;
    const t = e.headers.get("date"), n = new Date(t).getTime();
    return isNaN(n) ? null : n;
  }
  /**
   * This is a helper method that performs two operations:
   *
   * - Deletes *all* the underlying Cache instances associated with this plugin
   * instance, by calling caches.delete() on your behalf.
   * - Deletes the metadata from IndexedDB used to keep track of expiration
   * details for each Cache instance.
   *
   * When using cache expiration, calling this method is preferable to calling
   * `caches.delete()` directly, since this will ensure that the IndexedDB
   * metadata is also cleanly removed and open IndexedDB instances are deleted.
   *
   * Note that if you're *not* using cache expiration for a given cache, calling
   * `caches.delete()` and passing in the cache's name should be sufficient.
   * There is no Workbox-specific method needed for cleanup in that case.
   */
  async deleteCacheAndMetadata() {
    for (const [e, t] of this._cacheExpirations)
      await self.caches.delete(e), await t.delete();
    this._cacheExpirations = /* @__PURE__ */ new Map();
  }
}
const ft = "elk-frozen";
function V(s) {
  return new Promise((e, t) => {
    s.oncomplete = s.onsuccess = () => e(s.result), s.onabort = s.onerror = () => t(s.error);
  });
}
function pt(s, e) {
  const t = indexedDB.open(s);
  t.onupgradeneeded = () => t.result.createObjectStore(e);
  const r = V(t);
  return (n, a) => r.then((o) => a(o.transaction(e, n).objectStore(e)));
}
let M;
function mt() {
  return M || (M = pt("keyval-store", "keyval")), M;
}
function gt(s, e = mt()) {
  return e("readonly", (t) => V(t.get(s)));
}
const ie = [];
function wt() {
  const s = "keyval", e = indexedDB.open("keyval-store");
  ie.push(e), e.onupgradeneeded = () => e.result.createObjectStore(s);
  const t = V(e);
  return (r, n) => t.then((a) => n(a.transaction(s, r).objectStore(s)));
}
let $;
function yt() {
  return $ || ($ = wt()), $;
}
function bt(s) {
  return gt(s, yt());
}
function Rt() {
  ie.forEach((s) => {
    s.result && s.result.close();
  }), $ = void 0;
}
async function _t({
  access_token: s,
  notification_id: e
  /* , notification_type */
}) {
  const t = await bt("elk-users");
  if (!t)
    return;
  const r = t.filter((n) => n.token === s);
  if (!(!r || r.length === 0))
    for (const n of r)
      try {
        const a = await fetch(`https://${n.server}/api/v1/notifications/${e}`, {
          method: "get",
          headers: {
            Authorization: `Bearer ${n.token}`,
            "Content-Type": "application/json"
          }
        });
        if (a && a.ok) {
          const o = await a.json();
          return { user: n, notification: o };
        }
      } catch {
      }
}
function xt(s, e) {
  const {
    access_token: t,
    body: r,
    icon: n,
    notification_id: a,
    notification_type: o,
    preferred_locale: c
  } = s, f = {
    badge: "/pwa-192x192.png",
    body: r,
    data: {
      access_token: t,
      preferred_locale: c,
      url: `/${o === "mention" ? "notifications/mention" : "notifications"}`
    },
    dir: "auto",
    icon: n,
    lang: c,
    tag: a,
    timestamp: (/* @__PURE__ */ new Date()).getTime()
  };
  if (e) {
    const { user: m, notification: d } = e;
    f.tag = d.id, d.created_at && (f.timestamp = new Date(d.created_at).getTime()), d.status ? (d.status.media_attachments && d.status.media_attachments.length > 0 && d.status.media_attachments[0].preview_url && (f.image = d.status.media_attachments[0].preview_url), (d.type === "favourite" || d.type === "reblog" || d.type === "mention") && (f.data.url = `${m.server}/@${m.account.username}/${d.status.id}`)) : d.type === "follow" && (f.data.url = `${m.server}/@${d.account.acct}`);
  }
  return f;
}
function Ct() {
  Rt();
}
self.addEventListener("message", (s) => {
  s.data === ft && Ct();
});
function Nt(s) {
  const e = $t().then((t) => {
    if (t)
      return Promise.resolve();
    const r = s.data.json();
    return _t(r).catch((n) => (console.error("unhandled error finding notification", n), Promise.resolve(void 0))).then((n) => self.registration.showNotification(r.title, xt(r, n)));
  });
  s.waitUntil(e);
}
function Et(s) {
  const e = new Promise((t) => {
    s.notification.close(), t(Tt(s.notification.data.url));
  });
  s.waitUntil(e);
}
function kt(s) {
  const e = s.find((r) => r.focused), t = s.find((r) => r.visibilityState === "visible");
  return e || t || s[0];
}
async function Tt(s) {
  const e = await self.clients.matchAll({ type: "window" });
  e.length !== 0 && "navigate" in e[0] && await kt(e).navigate(s).then((r) => r == null ? void 0 : r.focus()), await self.clients.openWindow(s);
}
function $t() {
  return self.clients.matchAll({ type: "window", includeUncontrolled: !0 }).then((s) => Promise.resolve(s.some((e) => e.focused)));
}
const F = {};
self.addEventListener("message", (s) => {
  var t;
  if (s.data.action !== "ready-to-receive")
    return;
  const e = ((t = s.source) == null ? void 0 : t.id) ?? void 0;
  e && F[e] !== void 0 && F[e]();
});
function vt(s) {
  !s.request.url.endsWith("/web-share-target") || s.request.method !== "POST" || s.waitUntil(Ut(s));
}
async function Ut(s) {
  s.respondWith(Response.redirect("/home?share-target=true", 303)), await Lt(s.resultingClientId);
  const [e, t] = await St(s);
  e !== void 0 && await Pt(e, t);
}
async function Pt(s, e) {
  const t = {
    textParts: [],
    files: []
  }, r = e.get("title");
  r !== null && t.textParts.push(r.toString());
  const n = e.get("text");
  n !== null && t.textParts.push(n.toString());
  const a = e.get("link");
  a !== null && t.textParts.push(a.toString());
  for (const [o, c] of e.entries())
    o === "files" && c instanceof File && t.files.push(c);
  s.postMessage({ data: t, action: "compose-with-shared-data" });
}
function Lt(s) {
  return new Promise((e) => {
    F[s] = e;
  });
}
function St(s) {
  return Promise.all([
    self.clients.get(s.resultingClientId),
    s.request.formData()
  ]);
}
self.addEventListener("message", (s) => {
  s.data && s.data.type === "SKIP_WAITING" && self.skipWaiting();
});
const Dt = [{"revision":null,"url":"_nuxt/_...permalink_.38db77d0.js"},{"revision":null,"url":"_nuxt/_status_.150d5bfc.js"},{"revision":null,"url":"_nuxt/_status_.b3f05b93.js"},{"revision":null,"url":"_nuxt/_tag_.0b3a6b57.js"},{"revision":null,"url":"_nuxt/AccountBigCard.vue.d39f6f06.js"},{"revision":null,"url":"_nuxt/AccountCard.vue.4086cce4.js"},{"revision":null,"url":"_nuxt/AccountInlineInfo.vue.1d2999da.js"},{"revision":null,"url":"_nuxt/AccountPaginator.vue.ef09dab4.js"},{"revision":null,"url":"_nuxt/accounts.6e54a3db.js"},{"revision":null,"url":"_nuxt/AccountTabs.vue.09872d14.js"},{"revision":null,"url":"_nuxt/appearance.29bf0803.css"},{"revision":null,"url":"_nuxt/appearance.9357e5f4.js"},{"revision":null,"url":"_nuxt/ar-EG.0f1044b8.js"},{"revision":null,"url":"_nuxt/ar.4305bbb1.js"},{"revision":null,"url":"_nuxt/ar.c6b66de0.js"},{"revision":null,"url":"_nuxt/asyncData.d016a388.js"},{"revision":null,"url":"_nuxt/auth.6b613860.js"},{"revision":null,"url":"_nuxt/blocks.834e3650.js"},{"revision":null,"url":"_nuxt/bookmarks.847583df.js"},{"revision":null,"url":"_nuxt/ca-ES.0f1044b8.js"},{"revision":null,"url":"_nuxt/ca-valencia.75895b25.js"},{"revision":null,"url":"_nuxt/ca.573c0b6a.js"},{"revision":null,"url":"_nuxt/CommonAlert.vue.7769a78e.js"},{"revision":null,"url":"_nuxt/CommonBlurhash.vue.63c08ee4.js"},{"revision":null,"url":"_nuxt/CommonCheckbox.41632f9d.css"},{"revision":null,"url":"_nuxt/CommonCheckbox.vue.87c89bd7.js"},{"revision":null,"url":"_nuxt/CommonErrorMessage.vue.8ac3d45b.js"},{"revision":null,"url":"_nuxt/CommonNotFound.7245bde1.js"},{"revision":null,"url":"_nuxt/CommonPaginator.eaff7058.css"},{"revision":null,"url":"_nuxt/CommonPaginator.vue.26cfe48c.js"},{"revision":null,"url":"_nuxt/CommonPreviewPrompt.23b8e4ac.js"},{"revision":null,"url":"_nuxt/CommonRouteTabs.vue.701a8e87.js"},{"revision":null,"url":"_nuxt/CommonTrendingCharts.vue.860ab26d.js"},{"revision":null,"url":"_nuxt/compose.45b8627e.js"},{"revision":null,"url":"_nuxt/conversations.e052b817.js"},{"revision":null,"url":"_nuxt/cs-CZ.50ada121.js"},{"revision":null,"url":"_nuxt/cs.baf838da.js"},{"revision":null,"url":"_nuxt/de-DE.01863d0b.js"},{"revision":null,"url":"_nuxt/de.168ec492.js"},{"revision":null,"url":"_nuxt/default.8c7fb1ea.css"},{"revision":null,"url":"_nuxt/default.cb65499a.js"},{"revision":null,"url":"_nuxt/domain_blocks.fbc2d53f.js"},{"revision":null,"url":"_nuxt/Dropdown.vue.aa86e3bf.js"},{"revision":null,"url":"_nuxt/elk-translation-status.66deeda8.js"},{"revision":null,"url":"_nuxt/en-GB.e4a4dc73.js"},{"revision":null,"url":"_nuxt/en-US.b25bb000.js"},{"revision":null,"url":"_nuxt/en.33c2dfab.js"},{"revision":null,"url":"_nuxt/en.fd926ede.js"},{"revision":null,"url":"_nuxt/entry.6470c283.js"},{"revision":null,"url":"_nuxt/entry.fd1aa0b4.css"},{"revision":null,"url":"_nuxt/es-419.293fbc25.js"},{"revision":null,"url":"_nuxt/es-ES.b25bb000.js"},{"revision":null,"url":"_nuxt/es.00907792.js"},{"revision":null,"url":"_nuxt/es.d47b81f3.js"},{"revision":null,"url":"_nuxt/eu-ES.75642da0.js"},{"revision":null,"url":"_nuxt/explore.95c0d928.js"},{"revision":null,"url":"_nuxt/favourites.d1339d76.js"},{"revision":null,"url":"_nuxt/featured-tags.996621d0.js"},{"revision":null,"url":"_nuxt/fi-FI.4456b5eb.js"},{"revision":null,"url":"_nuxt/fi.2fae0f14.js"},{"revision":null,"url":"_nuxt/FileSaver.min.dea9a14f.js"},{"revision":null,"url":"_nuxt/followers.a623c1d0.js"},{"revision":null,"url":"_nuxt/following.a86282c8.js"},{"revision":null,"url":"_nuxt/fr-FR.70541fc9.js"},{"revision":null,"url":"_nuxt/fr.01702dd3.js"},{"revision":null,"url":"_nuxt/gl-ES.fa3ac590.js"},{"revision":null,"url":"_nuxt/home.18d66b6a.js"},{"revision":null,"url":"_nuxt/id-ID.f0163ac4.js"},{"revision":null,"url":"_nuxt/index.00381ad7.js"},{"revision":null,"url":"_nuxt/index.24d84626.js"},{"revision":null,"url":"_nuxt/index.2b3515c8.css"},{"revision":null,"url":"_nuxt/index.3eb91ebe.js"},{"revision":null,"url":"_nuxt/index.561adbce.css"},{"revision":null,"url":"_nuxt/index.59f1e6a5.js"},{"revision":null,"url":"_nuxt/index.5ec2fe9e.js"},{"revision":null,"url":"_nuxt/index.5f6c7103.js"},{"revision":null,"url":"_nuxt/index.6211d7f4.js"},{"revision":null,"url":"_nuxt/index.71ef9ac3.js"},{"revision":null,"url":"_nuxt/index.78b4730c.js"},{"revision":null,"url":"_nuxt/index.7c9e882d.js"},{"revision":null,"url":"_nuxt/index.b43e8091.js"},{"revision":null,"url":"_nuxt/index.bb7d891c.js"},{"revision":null,"url":"_nuxt/index.c80fc016.js"},{"revision":null,"url":"_nuxt/index.dcb768b9.js"},{"revision":null,"url":"_nuxt/index.df48fe13.js"},{"revision":null,"url":"_nuxt/index.ee668ea0.js"},{"revision":null,"url":"_nuxt/index.fa69cf8c.js"},{"revision":null,"url":"_nuxt/index.modern.9fe7b5ad.js"},{"revision":null,"url":"_nuxt/it-IT.f1bffc6b.js"},{"revision":null,"url":"_nuxt/it.a532b1f9.js"},{"revision":null,"url":"_nuxt/ja-JP.7bc5976a.js"},{"revision":null,"url":"_nuxt/ja.42369feb.js"},{"revision":null,"url":"_nuxt/ko-KR.db374d31.js"},{"revision":null,"url":"_nuxt/links.86963328.js"},{"revision":null,"url":"_nuxt/lists.96c72e76.js"},{"revision":null,"url":"_nuxt/local.12df6137.js"},{"revision":null,"url":"_nuxt/media.3247c28d.js"},{"revision":null,"url":"_nuxt/mention.112df616.js"},{"revision":null,"url":"_nuxt/ModalDialog.7f5b2796.js"},{"revision":null,"url":"_nuxt/ModalDialog.d6946f93.css"},{"revision":null,"url":"_nuxt/module.2bfc16a8.js"},{"revision":null,"url":"_nuxt/mutes.54f43bf3.js"},{"revision":null,"url":"_nuxt/native.edcedb22.js"},{"revision":null,"url":"_nuxt/nl-NL.06fb4ee7.js"},{"revision":null,"url":"_nuxt/nl.79ec122b.js"},{"revision":null,"url":"_nuxt/none.ad1623de.js"},{"revision":null,"url":"_nuxt/notification.318359a8.js"},{"revision":null,"url":"_nuxt/NotificationPaginator.vue.ac808a56.js"},{"revision":null,"url":"_nuxt/NotificationPreferences.client.bf26a81c.css"},{"revision":null,"url":"_nuxt/NotificationPreferences.client.vue.d68208eb.js"},{"revision":null,"url":"_nuxt/notifications.b8fa77e2.js"},{"revision":null,"url":"_nuxt/notifications.eb6e43d0.js"},{"revision":null,"url":"_nuxt/pinned.20eda687.js"},{"revision":null,"url":"_nuxt/pl-PL.ef27d8d2.js"},{"revision":null,"url":"_nuxt/pl.64d1c88c.js"},{"revision":null,"url":"_nuxt/post.e6384e29.js"},{"revision":null,"url":"_nuxt/pt-BR.7cd71539.js"},{"revision":null,"url":"_nuxt/pt-PT.afb87ea8.js"},{"revision":null,"url":"_nuxt/pt.31fdb4e2.js"},{"revision":null,"url":"_nuxt/pt.d3b7d94d.js"},{"revision":null,"url":"_nuxt/PublishWidget.99c41a95.js"},{"revision":null,"url":"_nuxt/PublishWidget.fbd62724.css"},{"revision":null,"url":"_nuxt/push-notifications.7b255936.js"},{"revision":null,"url":"_nuxt/ru-RU.30fbd529.js"},{"revision":null,"url":"_nuxt/ru.c9a40641.js"},{"revision":null,"url":"_nuxt/screen.c74cb8ad.js"},{"revision":null,"url":"_nuxt/search.a60a94b0.js"},{"revision":null,"url":"_nuxt/SearchHashtagInfo.vue.6773582e.js"},{"revision":null,"url":"_nuxt/SearchWidget.vue.c04ef304.js"},{"revision":null,"url":"_nuxt/settings.24fd000e.js"},{"revision":null,"url":"_nuxt/SettingsItem.vue.a5eeff58.js"},{"revision":null,"url":"_nuxt/SettingsSponsorsList.7bc7b3ab.js"},{"revision":null,"url":"_nuxt/share-target.794f33f6.js"},{"revision":null,"url":"_nuxt/shiki.a0d627ba.js"},{"revision":null,"url":"_nuxt/StatusAttachment.b90b2125.css"},{"revision":null,"url":"_nuxt/StatusAttachment.vue.65a4200d.js"},{"revision":null,"url":"_nuxt/StatusCard.cca7d8d2.css"},{"revision":null,"url":"_nuxt/StatusCard.vue.1da0e372.js"},{"revision":null,"url":"_nuxt/StatusPreviewCard.0c56ebad.css"},{"revision":null,"url":"_nuxt/StatusPreviewCard.vue.01b2746b.js"},{"revision":null,"url":"_nuxt/StatusPreviewGitHub.6ad2f430.js"},{"revision":null,"url":"_nuxt/StatusPreviewStackBlitz.3f7d55b8.css"},{"revision":null,"url":"_nuxt/StatusPreviewStackBlitz.d32e39ae.js"},{"revision":null,"url":"_nuxt/TagActionButton.vue.78522b7e.js"},{"revision":null,"url":"_nuxt/tags.5716b0ee.js"},{"revision":null,"url":"_nuxt/th-TH.4e790025.js"},{"revision":null,"url":"_nuxt/themes.dacad3c0.js"},{"revision":null,"url":"_nuxt/timeline.5b19be5b.js"},{"revision":null,"url":"_nuxt/TimelinePaginator.vue.2ff95fae.js"},{"revision":null,"url":"_nuxt/tl-PH.069004ba.js"},{"revision":null,"url":"_nuxt/tr-TR.b2b3eae8.js"},{"revision":null,"url":"_nuxt/tr.6a086467.js"},{"revision":null,"url":"_nuxt/twitter.6e06be47.js"},{"revision":null,"url":"_nuxt/uk-UA.2eda13ae.js"},{"revision":null,"url":"_nuxt/uk.ff93b1ad.js"},{"revision":null,"url":"_nuxt/users.9120a704.js"},{"revision":null,"url":"_nuxt/vi-VN.eb7c2dae.js"},{"revision":null,"url":"_nuxt/vi.51012004.js"},{"revision":null,"url":"_nuxt/web-share-target.81d4b600.js"},{"revision":null,"url":"_nuxt/with_replies.2538ffd6.js"},{"revision":null,"url":"_nuxt/workbox-window.prod.es5.a7b12eab.js"},{"revision":null,"url":"_nuxt/zh-CN.70445745.js"},{"revision":null,"url":"_nuxt/zh-TW.157f03a3.js"},{"revision":null,"url":"_nuxt/zh.36731bcb.js"},{"revision":"e4a01db7b0e90a7710a83f79279ff498","url":"apple-touch-icon.png"},{"revision":"2b8c575a8a07515e37a53c0008142ea5","url":"avatars/antfu-100x100.png"},{"revision":"fe50c69a76057bd17d0970d7ee50a3ad","url":"avatars/antfu-60x60.png"},{"revision":"8bd4776b95c1fc75f92eb2855ee42301","url":"avatars/danielroe-100x100.png"},{"revision":"3f4419a13075d951f157da815c30da1c","url":"avatars/danielroe-60x60.png"},{"revision":"35f48f0f9ccc3129815bb45628afebc7","url":"avatars/patak-dev-100x100.png"},{"revision":"b86a2ddf5e0f2560e0eff10f3bf83a43","url":"avatars/patak-dev-60x60.png"},{"revision":"5deeeb81ae3acc6c72af87d3be09dc61","url":"avatars/sxzz-100x100.png"},{"revision":"e2cf16189289aeadd8338712dc4672aa","url":"avatars/sxzz-60x60.png"},{"revision":"a831662dedf5838859ed946470cf6cfb","url":"bookmarks"},{"revision":"7065e5e7af8c04870e78203794861824","url":"compose"},{"revision":"01e1eaffed70dbd0b33359b71055dba3","url":"conversations"},{"revision":"54155c24c383109984a42c08f847439a","url":"elk-og.png"},{"revision":"d7751d87806dae66e2fe541adfa61d18","url":"explore"},{"revision":"f9937ae00d1279a4016afaea4b4a4de7","url":"explore/links"},{"revision":"cfcf915ad85f591e9c226fabb7248184","url":"explore/tags"},{"revision":"008fc2f20f5ac294b1bd96c5d292944b","url":"favicon.ico"},{"revision":"ec56b63eee05acbbba0912858fa7d7e0","url":"favourites"},{"revision":"1d46b182e64184a2d31ba4f8066787af","url":"fonts/DM-mono-v10.ttf"},{"revision":"f7267252c3060be5b78df9723cfff85a","url":"fonts/DM-sans-v11.ttf"},{"revision":"328327eccb5dffedb610476e935f6b62","url":"fonts/DM-serif-display-v10.ttf"},{"revision":"f44c948b413d4c2a4befc56a54dd7fcf","url":"fonts/homemade-apple-v18.ttf"},{"revision":"508fff49ecbfbc854fcdf9f9363656d7","url":"home"},{"revision":"413163f110809290276af421b177d65f","url":"/"},{"revision":"c0bb57f175815bab3082cc161e4d7f7b","url":"lists"},{"revision":"79450a0c3c43df939931534679452f15","url":"logo.svg"},{"revision":"e7506d7c9574922dd0382d7a5ef1a9a3","url":"maskable-icon.png"},{"revision":"700a7a2c88bdeaad293fc5c253e51e7e","url":"notifications"},{"revision":"ce0af794ec5c30bd3a9c02f835860102","url":"notifications/mention"},{"revision":"b51ff61e61393f459d95f481dae79262","url":"public"},{"revision":"124fde0e8b126dc808b93fd4b66ae0f6","url":"public/local"},{"revision":"88b4141aa7efff67827e88883d9a691d","url":"pwa-192x192.png"},{"revision":"ed5fb64e5ae32c380dccf91d81e21b1a","url":"pwa-512x512.png"},{"revision":"4a25f71eff51a460c20a31c2fe2e3f26","url":"pwa-64x64.png"},{"revision":"f71d20196d4caf35b6a670db8c70b03d","url":"robots.txt"},{"revision":"8d8ea28cac969529731e62632847cf96","url":"screenshots/dark-1.webp"},{"revision":"53333f5467adf61816ef4645f942babe","url":"screenshots/light-1.webp"},{"revision":"bd6325f98336455dcb6705ef378b5430","url":"search"},{"revision":"d80c1c209b7ca3b05b874855690f1a0b","url":"shortcuts/compose-96x96.png"},{"revision":"feab73139ed1d377bfc13fdbbbb4c377","url":"shortcuts/compose.png"},{"revision":"d59dfe721b01269e9f4046c831c16106","url":"shortcuts/home-96x96.png"},{"revision":"63e0298eae7754032ba170059e6cf4a5","url":"shortcuts/home.png"},{"revision":"a6413a0cd64c409abfba531640f03185","url":"shortcuts/local-96x96.png"},{"revision":"00309747838a9ec71c99960bb777d64e","url":"shortcuts/local.png"},{"revision":"1503d0539e00948d2d0c461137132ef8","url":"shortcuts/notifications-96x96.png"},{"revision":"efed0d35d4f66ba88438b72ac8abd6f3","url":"shortcuts/notifications.png"},{"revision":"3b0fe1f48e9d0e4197c6c007f52d7d7c","url":"shortcuts/settings-96x96.png"},{"revision":"14f5a8556bb04a8847930e4a57aaef1e","url":"shortcuts/settings.png"}];
Ge(Dt);
Be();
let At, ce;
ce = [
  /^\/api\//,
  /^\/login\//,
  /^\/oauth\//,
  /^\/signin\//,
  /^\/web-share-target\//,
  // exclude shiki: has its own cache
  /^\/shiki\//,
  // exclude shiki: has its own cache
  /^\/emojis\//,
  // exclude sw: if the user navigates to it, fallback to index.html
  /^\/sw.js$/,
  // exclude webmanifest: has its own cache
  /^\/manifest-(.*).webmanifest$/
];
E(
  ({ request: s, sameOrigin: e }) => e && s.destination === "manifest",
  new Ye({
    cacheName: "elk-webmanifest",
    plugins: [
      new S({ statuses: [200] }),
      // we only need a few entries
      new O({ maxEntries: 100 })
    ]
  })
), E(
  ({ sameOrigin: s, url: e }) => s && e.pathname.startsWith("/shiki/"),
  new z({
    cacheName: "elk-shiki",
    plugins: [
      new S({ statuses: [200] }),
      // 365 days max
      new O({ purgeOnQuotaError: !0, maxAgeSeconds: 60 * 60 * 24 * 365 })
    ]
  })
), E(
  ({ sameOrigin: s, request: e, url: t }) => s && e.destination === "image" && t.pathname.startsWith("/emojis/"),
  new z({
    cacheName: "elk-emojis",
    plugins: [
      new S({ statuses: [200] }),
      // 15 days max
      new O({ purgeOnQuotaError: !0, maxAgeSeconds: 60 * 60 * 24 * 15 })
    ]
  })
);
E(new Je(
  He("/"),
  { allowlist: At, denylist: ce }
));
self.addEventListener("push", Nt);
self.addEventListener("notificationclick", Et);
self.addEventListener("fetch", vt);
