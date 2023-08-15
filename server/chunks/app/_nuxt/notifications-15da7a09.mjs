import { a as useI18n, b4 as useAppConfig, k as isHydrated, p as _sfc_main$2, _ as __nuxt_component_0$1, a7 as __nuxt_component_11, X as __nuxt_component_4 } from '../server.mjs';
import { _ as _sfc_main$1 } from './CommonRouteTabs-dfae9a80.mjs';
import { defineComponent, computed, withCtx, unref, createVNode, toDisplayString, renderSlot, openBlock, createBlock, createCommentVNode, useSSRContext } from 'vue';
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

const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "notifications",
  __ssrInlineRender: true,
  setup(__props) {
    const { t } = useI18n();
    const pwaEnabled = useAppConfig().pwaEnabled;
    const tabs = computed(() => [
      {
        name: "all",
        to: "/notifications",
        display: isHydrated.value ? t("tab.notifications_all") : ""
      },
      {
        name: "mention",
        to: "/notifications/mention",
        display: isHydrated.value ? t("tab.notifications_mention") : ""
      }
    ]);
    return (_ctx, _push, _parent, _attrs) => {
      const _component_MainContent = _sfc_main$2;
      const _component_NuxtLink = __nuxt_component_0$1;
      const _component_CommonRouteTabs = _sfc_main$1;
      const _component_NotificationPreferences = __nuxt_component_11;
      const _component_NuxtPage = __nuxt_component_4;
      _push(ssrRenderComponent(_component_MainContent, _attrs, {
        title: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_NuxtLink, {
              to: "/notifications",
              "timeline-title-style": "",
              flex: "",
              "items-center": "",
              "gap-2": "",
              onClick: _ctx.$scrollToTop
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<div i-ri:notification-4-line${_scopeId2}></div><span${_scopeId2}>${ssrInterpolate(unref(t)("nav.notifications"))}</span>`);
                } else {
                  return [
                    createVNode("div", { "i-ri:notification-4-line": "" }),
                    createVNode("span", null, toDisplayString(unref(t)("nav.notifications")), 1)
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
          } else {
            return [
              createVNode(_component_NuxtLink, {
                to: "/notifications",
                "timeline-title-style": "",
                flex: "",
                "items-center": "",
                "gap-2": "",
                onClick: _ctx.$scrollToTop
              }, {
                default: withCtx(() => [
                  createVNode("div", { "i-ri:notification-4-line": "" }),
                  createVNode("span", null, toDisplayString(unref(t)("nav.notifications")), 1)
                ]),
                _: 1
              }, 8, ["onClick"])
            ];
          }
        }),
        actions: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_NuxtLink, {
              flex: "",
              "rounded-4": "",
              p1: "",
              "hover:bg-active": "",
              "cursor-pointer": "",
              "transition-100": "",
              title: unref(t)("settings.notifications.show_btn"),
              to: "/settings/notifications"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<span aria-hidden="true" i-ri:notification-badge-line${_scopeId2}></span>`);
                } else {
                  return [
                    createVNode("span", {
                      "aria-hidden": "true",
                      "i-ri:notification-badge-line": ""
                    })
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
          } else {
            return [
              createVNode(_component_NuxtLink, {
                flex: "",
                "rounded-4": "",
                p1: "",
                "hover:bg-active": "",
                "cursor-pointer": "",
                "transition-100": "",
                title: unref(t)("settings.notifications.show_btn"),
                to: "/settings/notifications"
              }, {
                default: withCtx(() => [
                  createVNode("span", {
                    "aria-hidden": "true",
                    "i-ri:notification-badge-line": ""
                  })
                ]),
                _: 1
              }, 8, ["title"])
            ];
          }
        }),
        header: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_CommonRouteTabs, {
              replace: "",
              options: tabs.value
            }, null, _parent2, _scopeId));
          } else {
            return [
              createVNode(_component_CommonRouteTabs, {
                replace: "",
                options: tabs.value
              }, null, 8, ["options"])
            ];
          }
        }),
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            ssrRenderSlot(_ctx.$slots, "default", {}, () => {
              if (unref(pwaEnabled)) {
                _push2(ssrRenderComponent(_component_NotificationPreferences, null, null, _parent2, _scopeId));
              } else {
                _push2(`<!---->`);
              }
              _push2(ssrRenderComponent(_component_NuxtPage, null, null, _parent2, _scopeId));
            }, _push2, _parent2, _scopeId);
          } else {
            return [
              renderSlot(_ctx.$slots, "default", {}, () => [
                unref(pwaEnabled) ? (openBlock(), createBlock(_component_NotificationPreferences, { key: 0 })) : createCommentVNode("", true),
                createVNode(_component_NuxtPage)
              ])
            ];
          }
        }),
        _: 3
      }, _parent));
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/notifications.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
