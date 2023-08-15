import { a as useI18n, b as useHydratedHead, k as isHydrated, h as currentUser, p as _sfc_main$2 } from '../server.mjs';
import { _ as _sfc_main$1 } from './SettingsItem-9fa7ec23.mjs';
import { defineComponent, mergeProps, withCtx, unref, createVNode, toDisplayString, openBlock, createBlock, createCommentVNode, useSSRContext } from 'vue';
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
  __name: "index",
  __ssrInlineRender: true,
  setup(__props) {
    const { t } = useI18n();
    useHydratedHead({
      title: () => `${t("settings.profile.label")} | ${t("nav.settings")}`
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_MainContent = _sfc_main$2;
      const _component_SettingsItem = _sfc_main$1;
      _push(ssrRenderComponent(_component_MainContent, mergeProps({ "back-on-small-screen": "" }, _attrs), {
        title: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div text-lg font-bold flex items-center gap-2${_scopeId}><span${_scopeId}>${ssrInterpolate(("isHydrated" in _ctx ? _ctx.isHydrated : unref(isHydrated)) ? _ctx.$t("settings.profile.label") : "")}</span></div>`);
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
                createVNode("span", null, toDisplayString(("isHydrated" in _ctx ? _ctx.isHydrated : unref(isHydrated)) ? _ctx.$t("settings.profile.label") : ""), 1)
              ], 8, ["onClick"])
            ];
          }
        }),
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_SettingsItem, {
              command: "",
              large: "",
              icon: "i-ri:user-settings-line",
              text: ("isHydrated" in _ctx ? _ctx.isHydrated : unref(isHydrated)) ? _ctx.$t("settings.profile.appearance.label") : "",
              description: ("isHydrated" in _ctx ? _ctx.isHydrated : unref(isHydrated)) ? _ctx.$t("settings.profile.appearance.description") : "",
              to: "/settings/profile/appearance"
            }, null, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_SettingsItem, {
              command: "",
              large: "",
              icon: "i-ri:hashtag",
              text: ("isHydrated" in _ctx ? _ctx.isHydrated : unref(isHydrated)) ? _ctx.$t("settings.profile.featured_tags.label") : "",
              description: ("isHydrated" in _ctx ? _ctx.isHydrated : unref(isHydrated)) ? _ctx.$t("settings.profile.featured_tags.description") : "",
              to: "/settings/profile/featured-tags"
            }, null, _parent2, _scopeId));
            if (("isHydrated" in _ctx ? _ctx.isHydrated : unref(isHydrated)) && ("currentUser" in _ctx ? _ctx.currentUser : unref(currentUser))) {
              _push2(ssrRenderComponent(_component_SettingsItem, {
                command: "",
                large: "",
                icon: "i-ri:settings-line",
                text: _ctx.$t("settings.account_settings.label"),
                description: _ctx.$t("settings.account_settings.description"),
                to: `https://${("currentUser" in _ctx ? _ctx.currentUser : unref(currentUser)).server}/auth/edit`,
                external: "",
                target: "_blank"
              }, null, _parent2, _scopeId));
            } else {
              _push2(`<!---->`);
            }
          } else {
            return [
              createVNode(_component_SettingsItem, {
                command: "",
                large: "",
                icon: "i-ri:user-settings-line",
                text: ("isHydrated" in _ctx ? _ctx.isHydrated : unref(isHydrated)) ? _ctx.$t("settings.profile.appearance.label") : "",
                description: ("isHydrated" in _ctx ? _ctx.isHydrated : unref(isHydrated)) ? _ctx.$t("settings.profile.appearance.description") : "",
                to: "/settings/profile/appearance"
              }, null, 8, ["text", "description"]),
              createVNode(_component_SettingsItem, {
                command: "",
                large: "",
                icon: "i-ri:hashtag",
                text: ("isHydrated" in _ctx ? _ctx.isHydrated : unref(isHydrated)) ? _ctx.$t("settings.profile.featured_tags.label") : "",
                description: ("isHydrated" in _ctx ? _ctx.isHydrated : unref(isHydrated)) ? _ctx.$t("settings.profile.featured_tags.description") : "",
                to: "/settings/profile/featured-tags"
              }, null, 8, ["text", "description"]),
              ("isHydrated" in _ctx ? _ctx.isHydrated : unref(isHydrated)) && ("currentUser" in _ctx ? _ctx.currentUser : unref(currentUser)) ? (openBlock(), createBlock(_component_SettingsItem, {
                key: 0,
                command: "",
                large: "",
                icon: "i-ri:settings-line",
                text: _ctx.$t("settings.account_settings.label"),
                description: _ctx.$t("settings.account_settings.description"),
                to: `https://${("currentUser" in _ctx ? _ctx.currentUser : unref(currentUser)).server}/auth/edit`,
                external: "",
                target: "_blank"
              }, null, 8, ["text", "description", "to"])) : createCommentVNode("", true)
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/settings/profile/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
