import { h as currentUser, p as _sfc_main$2, _ as __nuxt_component_0$1 } from '../server.mjs';
import { withCtx, createVNode, toDisplayString, unref, renderSlot, openBlock, createBlock, createCommentVNode, useSSRContext } from 'vue';
import { ssrRenderComponent, ssrInterpolate, ssrRenderSlot } from 'vue/server-renderer';
import 'ofetch';
import 'hookable';
import 'unctx';
import 'klona';
import 'vue-router';
import 'h3';
import 'ufo';
import 'unenv/runtime/npm/node-fetch';
import 'form-data';
import 'buffer';
import 'unenv/runtime/mock/empty';
import 'unenv/runtime/mock/proxy';
import 'qs';
import 'scule';
import 'lru-cache';
import 'ultrahtml';
import '@iconify/utils';
import 'tiny-decode';
import '@iconify-emoji/twemoji';
import '@iconify/utils/lib/emoji/replace/find';
import '@unhead/ssr';
import 'unhead';
import '@unhead/shared';
import '@intlify/core-base';
import 'cookie-es';
import 'is-https';
import 'floating-vue';
import 'defu';
import '../../nitro/node-server.mjs';
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

const _sfc_main = {
  __name: "share-target",
  __ssrInlineRender: true,
  setup(__props) {
    const pwaIsInstalled = false;
    return (_ctx, _push, _parent, _attrs) => {
      const _component_MainContent = _sfc_main$2;
      const _component_NuxtLink = __nuxt_component_0$1;
      _push(ssrRenderComponent(_component_MainContent, _attrs, {
        title: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_NuxtLink, {
              to: "/share-target",
              flex: "",
              "items-center": "",
              "gap-2": ""
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<div i-ri:share-line${_scopeId2}></div><span${_scopeId2}>${ssrInterpolate(_ctx.$t("share-target.title"))}</span>`);
                } else {
                  return [
                    createVNode("div", { "i-ri:share-line": "" }),
                    createVNode("span", null, toDisplayString(_ctx.$t("share-target.title")), 1)
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
          } else {
            return [
              createVNode(_component_NuxtLink, {
                to: "/share-target",
                flex: "",
                "items-center": "",
                "gap-2": ""
              }, {
                default: withCtx(() => [
                  createVNode("div", { "i-ri:share-line": "" }),
                  createVNode("span", null, toDisplayString(_ctx.$t("share-target.title")), 1)
                ]),
                _: 1
              })
            ];
          }
        }),
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            ssrRenderSlot(_ctx.$slots, "default", {}, () => {
              _push2(`<div flex="~ col" px5 py2 gap-y-4${_scopeId}>`);
              if (!unref(pwaIsInstalled) || !("currentUser" in _ctx ? _ctx.currentUser : unref(currentUser))) {
                _push2(`<div role="alert" gap-1 p-2 text-red-600 dark:text-red-400 border="~ base rounded red-600 dark:red-400"${_scopeId}>${ssrInterpolate(_ctx.$t("share-target.hint"))}</div>`);
              } else {
                _push2(`<!---->`);
              }
              _push2(`<div${_scopeId}>${ssrInterpolate(_ctx.$t("share-target.description"))}</div></div>`);
            }, _push2, _parent2, _scopeId);
          } else {
            return [
              renderSlot(_ctx.$slots, "default", {}, () => [
                createVNode("div", {
                  flex: "~ col",
                  px5: "",
                  py2: "",
                  "gap-y-4": ""
                }, [
                  !unref(pwaIsInstalled) || !("currentUser" in _ctx ? _ctx.currentUser : unref(currentUser)) ? (openBlock(), createBlock("div", {
                    key: 0,
                    role: "alert",
                    "gap-1": "",
                    "p-2": "",
                    "text-red-600": "",
                    "dark:text-red-400": "",
                    border: "~ base rounded red-600 dark:red-400"
                  }, toDisplayString(_ctx.$t("share-target.hint")), 1)) : createCommentVNode("", true),
                  createVNode("div", null, toDisplayString(_ctx.$t("share-target.description")), 1)
                ])
              ])
            ];
          }
        }),
        _: 3
      }, _parent));
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/share-target.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
