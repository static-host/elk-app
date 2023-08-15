import { i as useRoute, a2 as useRouter, a as useI18n, b as useHydratedHead, k as isHydrated, t as useMastoClient, a5 as useStreaming, p as _sfc_main$2, _ as __nuxt_component_0$1 } from '../server.mjs';
import { _ as __nuxt_component_3 } from './PublishWidget-6fa2405b.mjs';
import { _ as _sfc_main$3 } from './TimelinePaginator-72332276.mjs';
import { useSSRContext, defineComponent, withCtx, createVNode, toDisplayString, unref, openBlock, createBlock, createCommentVNode, mergeProps } from 'vue';
import { ssrRenderComponent, ssrInterpolate, ssrRenderAttrs } from 'vue/server-renderer';
import { r as reorderedTimeline } from './timeline-7ffc89e5.mjs';
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
import './CommonErrorMessage-97222b87.mjs';
import './StatusCard-4ebd475e.mjs';
import './AccountInlineInfo-272708e4.mjs';
import './Dropdown-f5ab4219.mjs';
import './CommonPaginator-7edbb317.mjs';
import 'vue-virtual-scroller';
import './StatusPreviewCard-28487c3c.mjs';
import 'unlazy';
import 'blurhash';
import './ModalDialog-ca589b82.mjs';
import '@vueuse/integrations/useFocusTrap';
import 'iso-639-1';
import 'string-length';
import 'tippy.js';
import './SearchHashtagInfo-16b8b8d8.mjs';
import './CommonTrendingCharts-83a6641e.mjs';

const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  __name: "TimelineHome",
  __ssrInlineRender: true,
  setup(__props) {
    const paginator = useMastoClient().v1.timelines.listHome({ limit: 30 });
    const stream = useStreaming((client) => client.v1.stream.streamUser());
    function reorderAndFilter(items) {
      return reorderedTimeline(items, "home");
    }
    return (_ctx, _push, _parent, _attrs) => {
      const _component_PublishWidget = __nuxt_component_3;
      const _component_TimelinePaginator = _sfc_main$3;
      _push(`<div${ssrRenderAttrs(_attrs)}>`);
      _push(ssrRenderComponent(_component_PublishWidget, {
        "draft-key": "home",
        border: "b base"
      }, null, _parent));
      _push(ssrRenderComponent(_component_TimelinePaginator, mergeProps({ paginator: unref(paginator), stream: unref(stream) }, {
        preprocess: reorderAndFilter,
        context: "home"
      }), null, _parent));
      _push(`</div>`);
    };
  }
});
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/timeline/TimelineHome.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "home",
  __ssrInlineRender: true,
  setup(__props) {
    useRoute();
    useRouter();
    const { t } = useI18n();
    useHydratedHead({
      title: () => t("nav.home")
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_MainContent = _sfc_main$2;
      const _component_NuxtLink = __nuxt_component_0$1;
      const _component_TimelineHome = _sfc_main$1;
      _push(ssrRenderComponent(_component_MainContent, _attrs, {
        title: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_NuxtLink, {
              to: "/home",
              "timeline-title-style": "",
              flex: "",
              "items-center": "",
              "gap-2": "",
              onClick: _ctx.$scrollToTop
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<div i-ri:home-5-line${_scopeId2}></div><span${_scopeId2}>${ssrInterpolate(_ctx.$t("nav.home"))}</span>`);
                } else {
                  return [
                    createVNode("div", { "i-ri:home-5-line": "" }),
                    createVNode("span", null, toDisplayString(_ctx.$t("nav.home")), 1)
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
          } else {
            return [
              createVNode(_component_NuxtLink, {
                to: "/home",
                "timeline-title-style": "",
                flex: "",
                "items-center": "",
                "gap-2": "",
                onClick: _ctx.$scrollToTop
              }, {
                default: withCtx(() => [
                  createVNode("div", { "i-ri:home-5-line": "" }),
                  createVNode("span", null, toDisplayString(_ctx.$t("nav.home")), 1)
                ]),
                _: 1
              }, 8, ["onClick"])
            ];
          }
        }),
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            if ("isHydrated" in _ctx ? _ctx.isHydrated : unref(isHydrated)) {
              _push2(ssrRenderComponent(_component_TimelineHome, null, null, _parent2, _scopeId));
            } else {
              _push2(`<!---->`);
            }
          } else {
            return [
              ("isHydrated" in _ctx ? _ctx.isHydrated : unref(isHydrated)) ? (openBlock(), createBlock(_component_TimelineHome, { key: 0 })) : createCommentVNode("", true)
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/home.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
