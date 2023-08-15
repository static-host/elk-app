import { i as useRoute, a as useI18n, F as currentServer, m as useMasto, b as useHydratedHead, o as onReactivated, k as isHydrated, p as _sfc_main$2, X as __nuxt_component_4 } from '../server.mjs';
import { _ as _sfc_main$1 } from './CommonRouteTabs-dfae9a80.mjs';
import { defineComponent, computed, toRef, withAsyncContext, mergeProps, withCtx, unref, createVNode, toDisplayString, openBlock, createBlock, createCommentVNode, useSSRContext, shallowRef } from 'vue';
import { ssrRenderComponent, ssrInterpolate } from 'vue/server-renderer';
import { u as useAsyncData } from './asyncData-8a1718f5.mjs';
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
  async setup(__props) {
    let __temp, __restore;
    const route = useRoute();
    const { t } = useI18n();
    const list = computed(() => route.params.list);
    const server = computed(() => route.params.server ?? currentServer.value);
    const tabs = computed(
      () => [
        {
          to: {
            name: "list",
            params: { server: server.value, list: list.value }
          },
          display: t("tab.posts"),
          icon: "i-ri:list-unordered"
        },
        {
          to: {
            name: "list-accounts",
            params: { server: server.value, list: list.value }
          },
          display: t("tab.accounts"),
          icon: "i-ri:user-line"
        }
      ]
    );
    const __$temp_1 = useMasto(), client = toRef(__$temp_1, "client");
    const __$temp_2 = ([__temp, __restore] = withAsyncContext(() => useAsyncData(() => client.value.v1.lists.fetch(list.value), { default: () => shallowRef() }, "$7Z23XGE2yw")), __temp = await __temp, __restore(), __temp), listInfo = toRef(__$temp_2, "data");
    toRef(__$temp_2, "refresh");
    if (listInfo.value) {
      useHydratedHead({
        title: () => `${listInfo.value.title} | ${route.fullPath.endsWith("/accounts") ? t("tab.accounts") : t("tab.posts")} | ${t("nav.lists")}`
      });
    }
    onReactivated();
    return (_ctx, _push, _parent, _attrs) => {
      const _component_MainContent = _sfc_main$2;
      const _component_CommonRouteTabs = _sfc_main$1;
      const _component_NuxtPage = __nuxt_component_4;
      _push(ssrRenderComponent(_component_MainContent, mergeProps({ back: "" }, _attrs), {
        title: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<span text-lg font-bold${_scopeId}>${ssrInterpolate(listInfo.value ? listInfo.value.title : unref(t)("nav.list"))}</span>`);
          } else {
            return [
              createVNode("span", {
                "text-lg": "",
                "font-bold": ""
              }, toDisplayString(listInfo.value ? listInfo.value.title : unref(t)("nav.list")), 1)
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/[[server]]/list/[list]/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
