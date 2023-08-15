import { a as useI18n, b as useHydratedHead, k as isHydrated, p as _sfc_main$2, _ as __nuxt_component_0$1 } from '../server.mjs';
import { _ as _sfc_main$1 } from './SearchWidget-ef9ca4c4.mjs';
import { defineComponent, ref, watchEffect, withCtx, createVNode, toDisplayString, unref, openBlock, createBlock, createCommentVNode, useSSRContext } from 'vue';
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
import './SearchHashtagInfo-16b8b8d8.mjs';
import './CommonTrendingCharts-83a6641e.mjs';
import './StatusCard-4ebd475e.mjs';
import './AccountInlineInfo-272708e4.mjs';
import './Dropdown-f5ab4219.mjs';
import './CommonPaginator-7edbb317.mjs';
import 'vue-virtual-scroller';
import './StatusPreviewCard-28487c3c.mjs';
import 'unlazy';
import 'blurhash';

const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "search",
  __ssrInlineRender: true,
  setup(__props) {
    const { t } = useI18n();
    useHydratedHead({
      title: () => t("nav.search")
    });
    const search = ref();
    watchEffect(() => {
      if (search.value?.input)
        search.value?.input?.focus();
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_MainContent = _sfc_main$2;
      const _component_NuxtLink = __nuxt_component_0$1;
      const _component_SearchWidget = _sfc_main$1;
      _push(ssrRenderComponent(_component_MainContent, _attrs, {
        title: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_NuxtLink, {
              to: "/search",
              "timeline-title-style": "",
              flex: "",
              "items-center": "",
              "gap-2": "",
              onClick: _ctx.$scrollToTop
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<div i-ri:search-line class="rtl-flip"${_scopeId2}></div><span${_scopeId2}>${ssrInterpolate(_ctx.$t("nav.search"))}</span>`);
                } else {
                  return [
                    createVNode("div", {
                      "i-ri:search-line": "",
                      class: "rtl-flip"
                    }),
                    createVNode("span", null, toDisplayString(_ctx.$t("nav.search")), 1)
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
          } else {
            return [
              createVNode(_component_NuxtLink, {
                to: "/search",
                "timeline-title-style": "",
                flex: "",
                "items-center": "",
                "gap-2": "",
                onClick: _ctx.$scrollToTop
              }, {
                default: withCtx(() => [
                  createVNode("div", {
                    "i-ri:search-line": "",
                    class: "rtl-flip"
                  }),
                  createVNode("span", null, toDisplayString(_ctx.$t("nav.search")), 1)
                ]),
                _: 1
              }, 8, ["onClick"])
            ];
          }
        }),
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div px2 mt3${_scopeId}>`);
            if ("isHydrated" in _ctx ? _ctx.isHydrated : unref(isHydrated)) {
              _push2(ssrRenderComponent(_component_SearchWidget, {
                ref_key: "search",
                ref: search,
                "m-1": ""
              }, null, _parent2, _scopeId));
            } else {
              _push2(`<!---->`);
            }
            _push2(`</div>`);
          } else {
            return [
              createVNode("div", {
                px2: "",
                mt3: ""
              }, [
                ("isHydrated" in _ctx ? _ctx.isHydrated : unref(isHydrated)) ? (openBlock(), createBlock(_component_SearchWidget, {
                  key: 0,
                  ref_key: "search",
                  ref: search,
                  "m-1": ""
                }, null, 512)) : createCommentVNode("", true)
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/[[server]]/search.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
