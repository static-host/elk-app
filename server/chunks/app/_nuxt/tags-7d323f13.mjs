import { _ as _sfc_main$4 } from './CommonAlert-ed98824d.mjs';
import { b as _sfc_main$7 } from './CommonPaginator-7edbb317.mjs';
import { _ as _sfc_main$5 } from './TagActionButton-90d1ab07.mjs';
import { _ as _sfc_main$1$1, a as _sfc_main$6 } from './CommonTrendingCharts-83a6641e.mjs';
import { useSSRContext, defineComponent, toRef, unref, withCtx, createVNode, toDisplayString, computed, mergeProps } from 'vue';
import { ssrRenderComponent, ssrInterpolate, ssrRenderAttrs } from 'vue/server-renderer';
import { a as useI18n, m as useMasto, $ as useLocalStorage, a3 as STORAGE_KEY_HIDE_EXPLORE_TAGS_TIPS, b as useHydratedHead, a2 as useRouter, Z as _export_sfc } from '../server.mjs';
import 'vue-virtual-scroller';
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

const _sfc_main$3 = /* @__PURE__ */ defineComponent({
  __name: "TagCard",
  __ssrInlineRender: true,
  props: {
    tag: {}
  },
  setup(__props) {
    computed(() => {
      const { hostname, pathname } = new URL(__props.tag.url);
      return `/${hostname}${pathname}`;
    });
    useRouter();
    return (_ctx, _push, _parent, _attrs) => {
      const _component_TagActionButton = _sfc_main$5;
      const _component_CommonTrending = _sfc_main$1$1;
      const _component_CommonTrendingCharts = _sfc_main$6;
      _push(`<div${ssrRenderAttrs(mergeProps({
        block: "",
        p4: "",
        "hover:bg-active": "",
        flex: "",
        "justify-between": "",
        "cursor-pointer": ""
      }, _attrs))}><div><h4 flex items-center text-size-base leading-normal font-medium line-clamp-1 break-all ws-pre-wrap>`);
      _push(ssrRenderComponent(_component_TagActionButton, { tag: _ctx.tag }, null, _parent));
      _push(`<span>#</span><span hover:underline>${ssrInterpolate(_ctx.tag.name)}</span></h4>`);
      if (_ctx.tag.history) {
        _push(ssrRenderComponent(_component_CommonTrending, {
          history: _ctx.tag.history,
          "text-sm": "",
          "text-secondary": "",
          "line-clamp-1": "",
          "ws-pre-wrap": "",
          "break-all": ""
        }, null, _parent));
      } else {
        _push(`<!---->`);
      }
      _push(`</div>`);
      if (_ctx.tag.history) {
        _push(`<div flex items-center>`);
        _push(ssrRenderComponent(_component_CommonTrendingCharts, {
          history: _ctx.tag.history
        }, null, _parent));
        _push(`</div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div>`);
    };
  }
});
const _sfc_setup$3 = _sfc_main$3.setup;
_sfc_main$3.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/tag/TagCard.vue");
  return _sfc_setup$3 ? _sfc_setup$3(props, ctx) : void 0;
};
const _sfc_main$2 = {};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  _push(`<div${ssrRenderAttrs(mergeProps({
    p4: "",
    flex: "",
    "justify-between": ""
  }, _attrs))}><div flex="~ col 1 gap-2"><div flex class="skeleton-loading-bg" h-5 w-30 rounded></div><div flex class="skeleton-loading-bg" h-4 w-45 rounded></div></div><div flex items-center><div flex class="skeleton-loading-bg" h-9 w-15 rounded></div></div></div>`);
}
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/tag/TagCardSkeleton.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const __nuxt_component_2 = /* @__PURE__ */ _export_sfc(_sfc_main$2, [["ssrRender", _sfc_ssrRender]]);
const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  __name: "TagCardPaginator",
  __ssrInlineRender: true,
  props: {
    paginator: {}
  },
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      const _component_CommonPaginator = _sfc_main$7;
      const _component_TagCard = _sfc_main$3;
      const _component_TagCardSkeleton = __nuxt_component_2;
      _push(ssrRenderComponent(_component_CommonPaginator, mergeProps({
        paginator: _ctx.paginator,
        "key-prop": "name"
      }, _attrs), {
        default: withCtx(({ item }, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_TagCard, {
              tag: item,
              border: "b base"
            }, null, _parent2, _scopeId));
          } else {
            return [
              createVNode(_component_TagCard, {
                tag: item,
                border: "b base"
              }, null, 8, ["tag"])
            ];
          }
        }),
        loading: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_TagCardSkeleton, { border: "b base" }, null, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_TagCardSkeleton, { border: "b base" }, null, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_TagCardSkeleton, {
              border: "b base",
              op50: ""
            }, null, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_TagCardSkeleton, {
              border: "b base",
              op50: ""
            }, null, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_TagCardSkeleton, {
              border: "b base",
              op25: ""
            }, null, _parent2, _scopeId));
          } else {
            return [
              createVNode(_component_TagCardSkeleton, { border: "b base" }),
              createVNode(_component_TagCardSkeleton, { border: "b base" }),
              createVNode(_component_TagCardSkeleton, {
                border: "b base",
                op50: ""
              }),
              createVNode(_component_TagCardSkeleton, {
                border: "b base",
                op50: ""
              }),
              createVNode(_component_TagCardSkeleton, {
                border: "b base",
                op25: ""
              })
            ];
          }
        }),
        _: 1
      }, _parent));
    };
  }
});
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/tag/TagCardPaginator.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "tags",
  __ssrInlineRender: true,
  setup(__props) {
    const { t } = useI18n();
    const __$temp_1 = useMasto(), client = toRef(__$temp_1, "client");
    const paginator = client.value.v1.trends.listTags({
      limit: 20
    });
    const hideTagsTips = useLocalStorage(STORAGE_KEY_HIDE_EXPLORE_TAGS_TIPS, false);
    useHydratedHead({
      title: () => `${t("tab.hashtags")} | ${t("nav.explore")}`
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_CommonAlert = _sfc_main$4;
      const _component_TagCardPaginator = _sfc_main$1;
      _push(`<!--[-->`);
      if (!unref(hideTagsTips)) {
        _push(ssrRenderComponent(_component_CommonAlert, {
          onClose: ($event) => hideTagsTips.value = true
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`<p${_scopeId}>${ssrInterpolate(_ctx.$t("tooltip.explore_tags_intro"))}</p>`);
            } else {
              return [
                createVNode("p", null, toDisplayString(_ctx.$t("tooltip.explore_tags_intro")), 1)
              ];
            }
          }),
          _: 1
        }, _parent));
      } else {
        _push(`<!---->`);
      }
      _push(ssrRenderComponent(_component_TagCardPaginator, { paginator: unref(paginator) }, null, _parent));
      _push(`<!--]-->`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/[[server]]/explore/tags.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
