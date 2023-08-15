import { a as useI18n, b as useHydratedHead, k as isHydrated, p as _sfc_main$2 } from '../server.mjs';
import { defineComponent, mergeProps, withCtx, unref, createVNode, toDisplayString, createTextVNode, useSSRContext } from 'vue';
import { ssrRenderComponent, ssrInterpolate } from 'vue/server-renderer';
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

const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "notifications",
  __ssrInlineRender: true,
  setup(__props) {
    const { t } = useI18n();
    useHydratedHead({
      title: () => `${t("settings.notifications.notifications.label")} | ${t("settings.notifications.label")} | ${t("nav.settings")}`
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_MainContent = _sfc_main$2;
      _push(ssrRenderComponent(_component_MainContent, mergeProps({ back: "" }, _attrs), {
        title: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div text-lg font-bold flex items-center gap-2${_scopeId}><span${_scopeId}>${ssrInterpolate(("isHydrated" in _ctx ? _ctx.isHydrated : unref(isHydrated)) ? _ctx.$t("settings.notifications.notifications.label") : "")}</span></div>`);
          } else {
            return [
              createVNode("div", {
                "text-lg": "",
                "font-bold": "",
                flex: "",
                "items-center": "",
                "gap-2": "",
                onClick: _ctx.$scrollToTop
              }, [
                createVNode("span", null, toDisplayString(("isHydrated" in _ctx ? _ctx.isHydrated : unref(isHydrated)) ? _ctx.$t("settings.notifications.notifications.label") : ""), 1)
              ], 8, ["onClick"])
            ];
          }
        }),
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<h3 px6 py4 mt2 font-bold text-xl flex="~ gap-1" items-center${_scopeId}>${ssrInterpolate(("isHydrated" in _ctx ? _ctx.isHydrated : unref(isHydrated)) ? _ctx.$t("settings.notifications.notifications.label") : "")}</h3><p text-4xl text-center${_scopeId}><span sr-only${_scopeId}>${ssrInterpolate(("isHydrated" in _ctx ? _ctx.isHydrated : unref(isHydrated)) ? _ctx.$t("settings.notifications.under_construction") : "")}</span> \u{1F6A7} </p>`);
          } else {
            return [
              createVNode("h3", {
                px6: "",
                py4: "",
                mt2: "",
                "font-bold": "",
                "text-xl": "",
                flex: "~ gap-1",
                "items-center": ""
              }, toDisplayString(("isHydrated" in _ctx ? _ctx.isHydrated : unref(isHydrated)) ? _ctx.$t("settings.notifications.notifications.label") : ""), 1),
              createVNode("p", {
                "text-4xl": "",
                "text-center": ""
              }, [
                createVNode("span", { "sr-only": "" }, toDisplayString(("isHydrated" in _ctx ? _ctx.isHydrated : unref(isHydrated)) ? _ctx.$t("settings.notifications.under_construction") : ""), 1),
                createTextVNode(" \u{1F6A7} ")
              ])
            ];
          }
        }),
        _: 1
      }, _parent));
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/settings/notifications/notifications.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
