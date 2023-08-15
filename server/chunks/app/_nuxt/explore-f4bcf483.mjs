import { a as useI18n, i as useRoute, V as useUserSettings, k as isHydrated, F as currentServer, h as currentUser, p as _sfc_main$2, X as __nuxt_component_4 } from '../server.mjs';
import { _ as _sfc_main$1 } from './CommonRouteTabs-dfae9a80.mjs';
import { defineComponent, ref, watchEffect, computed, withCtx, unref, createVNode, toDisplayString, openBlock, createBlock, createCommentVNode, useSSRContext } from 'vue';
import { ssrRenderComponent, ssrInterpolate } from 'vue/server-renderer';
import { i as isMediumOrLargeScreen } from './screen-2a06052d.mjs';
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
  __name: "explore",
  __ssrInlineRender: true,
  setup(__props) {
    const { t } = useI18n();
    const search = ref();
    const route = useRoute();
    watchEffect(() => {
      if (isMediumOrLargeScreen && route.name === "explore" && search.value?.input)
        search.value?.input?.focus();
    });
    const userSettings = useUserSettings();
    const tabs = computed(() => [
      {
        to: isHydrated.value ? `/${currentServer.value}/explore` : "/explore",
        display: isHydrated.value ? t("tab.posts") : ""
      },
      {
        to: isHydrated.value ? `/${currentServer.value}/explore/tags` : "/explore/tags",
        display: isHydrated.value ? t("tab.hashtags") : ""
      },
      {
        to: isHydrated.value ? `/${currentServer.value}/explore/links` : "/explore/links",
        display: isHydrated.value ? t("tab.news") : "",
        hide: userSettings.value.preferences.hideNews
      },
      // This section can only be accessed after logging in
      {
        to: isHydrated.value ? `/${currentServer.value}/explore/users` : "/explore/users",
        display: isHydrated.value ? t("tab.for_you") : "",
        disabled: !isHydrated.value || !currentUser.value
      }
    ]);
    return (_ctx, _push, _parent, _attrs) => {
      const _component_MainContent = _sfc_main$2;
      const _component_CommonRouteTabs = _sfc_main$1;
      const _component_NuxtPage = __nuxt_component_4;
      _push(ssrRenderComponent(_component_MainContent, _attrs, {
        title: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<span timeline-title-style flex items-center gap-2 cursor-pointer${_scopeId}><div i-ri:hashtag${_scopeId}></div><span${_scopeId}>${ssrInterpolate(unref(t)("nav.explore"))}</span></span>`);
          } else {
            return [
              createVNode("span", {
                "timeline-title-style": "",
                flex: "",
                "items-center": "",
                "gap-2": "",
                "cursor-pointer": "",
                onClick: _ctx.$scrollToTop
              }, [
                createVNode("div", { "i-ri:hashtag": "" }),
                createVNode("span", null, toDisplayString(unref(t)("nav.explore")), 1)
              ], 8, ["onClick"])
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
            if ("isHydrated" in _ctx ? _ctx.isHydrated : unref(isHydrated)) {
              _push2(ssrRenderComponent(_component_NuxtPage, null, null, _parent2, _scopeId));
            } else {
              _push2(`<!---->`);
            }
          } else {
            return [
              ("isHydrated" in _ctx ? _ctx.isHydrated : unref(isHydrated)) ? (openBlock(), createBlock(_component_NuxtPage, { key: 0 })) : createCommentVNode("", true)
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/[[server]]/explore.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
