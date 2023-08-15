import { _ as _sfc_main$2 } from './CommonAlert-ed98824d.mjs';
import { b as _sfc_main$3 } from './CommonPaginator-7edbb317.mjs';
import { _ as _sfc_main$4 } from './StatusPreviewCard-28487c3c.mjs';
import { useSSRContext, defineComponent, unref, withCtx, createVNode, toDisplayString, mergeProps } from 'vue';
import { ssrRenderComponent, ssrInterpolate, ssrRenderAttrs, ssrRenderClass } from 'vue/server-renderer';
import { a as useI18n, t as useMastoClient, $ as useLocalStorage, a1 as STORAGE_KEY_HIDE_EXPLORE_NEWS_TIPS, b as useHydratedHead, k as isHydrated } from '../server.mjs';
import 'vue-virtual-scroller';
import 'unlazy';
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

const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  __name: "StatusPreviewCardSkeleton",
  __ssrInlineRender: true,
  props: {
    square: { type: Boolean },
    root: { type: Boolean }
  },
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({
        "of-hidden": "",
        class: {
          "flex": _ctx.square,
          "p-4": _ctx.root,
          "rounded-lg border border-base": !_ctx.root
        }
      }, _attrs))}><div flex flex-col display-block of-hidden border="base" class="${ssrRenderClass({
        "sm:min-w-32 sm:w-32 sm:h-32 min-w-22 w-22 h-22 border-r": _ctx.square,
        "w-full aspect-[1.91] border-b": !_ctx.square,
        "rounded-lg": _ctx.root
      })}"><div w-full h-full class="skeleton-loading-bg"></div></div><div px3 max-h-2xl flex-1 flex flex-col flex-gap-2 sm:flex-gap-3 class="${ssrRenderClass([
        _ctx.root ? "py2.5 sm:py3" : "py3  justify-center sm:justify-start"
      ])}"><div flex h-4 w-30 rounded class="${ssrRenderClass([_ctx.root ? "" : "hidden sm:block", "skeleton-loading-bg"])}"></div><div flex class="skeleton-loading-bg" h-5 w="4/5" rounded></div><div flex="~ col gap-2"><div flex class="skeleton-loading-bg" h-4 w-full rounded></div><div sm:flex hidden class="skeleton-loading-bg" h-4 w="2/5" rounded></div></div></div></div>`);
    };
  }
});
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/status/StatusPreviewCardSkeleton.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "links",
  __ssrInlineRender: true,
  setup(__props) {
    const { t } = useI18n();
    const paginator = useMastoClient().v1.trends.listLinks();
    const hideNewsTips = useLocalStorage(STORAGE_KEY_HIDE_EXPLORE_NEWS_TIPS, false);
    useHydratedHead({
      title: () => `${t("tab.news")} | ${t("nav.explore")}`
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_CommonAlert = _sfc_main$2;
      const _component_CommonPaginator = _sfc_main$3;
      const _component_StatusPreviewCard = _sfc_main$4;
      const _component_StatusPreviewCardSkeleton = _sfc_main$1;
      _push(`<!--[-->`);
      if (("isHydrated" in _ctx ? _ctx.isHydrated : unref(isHydrated)) && !unref(hideNewsTips)) {
        _push(ssrRenderComponent(_component_CommonAlert, {
          onClose: ($event) => hideNewsTips.value = true
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`<p${_scopeId}>${ssrInterpolate(_ctx.$t("tooltip.explore_links_intro"))}</p>`);
            } else {
              return [
                createVNode("p", null, toDisplayString(_ctx.$t("tooltip.explore_links_intro")), 1)
              ];
            }
          }),
          _: 1
        }, _parent));
      } else {
        _push(`<!---->`);
      }
      _push(ssrRenderComponent(_component_CommonPaginator, { paginator: unref(paginator) }, {
        default: withCtx(({ item }, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_StatusPreviewCard, {
              card: item,
              border: "!b base",
              rounded: "!none",
              p: "!4",
              "small-picture-only": "",
              root: ""
            }, null, _parent2, _scopeId));
          } else {
            return [
              createVNode(_component_StatusPreviewCard, {
                card: item,
                border: "!b base",
                rounded: "!none",
                p: "!4",
                "small-picture-only": "",
                root: ""
              }, null, 8, ["card"])
            ];
          }
        }),
        loading: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_StatusPreviewCardSkeleton, {
              square: "",
              root: "",
              border: "b base"
            }, null, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_StatusPreviewCardSkeleton, {
              square: "",
              root: "",
              border: "b base",
              op50: ""
            }, null, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_StatusPreviewCardSkeleton, {
              square: "",
              root: "",
              border: "b base",
              op25: ""
            }, null, _parent2, _scopeId));
          } else {
            return [
              createVNode(_component_StatusPreviewCardSkeleton, {
                square: "",
                root: "",
                border: "b base"
              }),
              createVNode(_component_StatusPreviewCardSkeleton, {
                square: "",
                root: "",
                border: "b base",
                op50: ""
              }),
              createVNode(_component_StatusPreviewCardSkeleton, {
                square: "",
                root: "",
                border: "b base",
                op25: ""
              })
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`<!--]-->`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/[[server]]/explore/links.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
