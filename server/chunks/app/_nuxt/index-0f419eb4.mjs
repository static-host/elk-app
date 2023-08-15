import { _ as _sfc_main$1 } from './CommonAlert-ed98824d.mjs';
import { _ as _sfc_main$2 } from './TimelinePaginator-72332276.mjs';
import { a as useI18n, t as useMastoClient, $ as useLocalStorage, a0 as STORAGE_KEY_HIDE_EXPLORE_POSTS_TIPS, b as useHydratedHead, k as isHydrated } from '../server.mjs';
import { defineComponent, unref, withCtx, createVNode, toDisplayString, useSSRContext } from 'vue';
import { ssrRenderComponent, ssrInterpolate } from 'vue/server-renderer';
import './CommonPaginator-7edbb317.mjs';
import 'vue-virtual-scroller';
import './StatusCard-4ebd475e.mjs';
import './AccountInlineInfo-272708e4.mjs';
import './Dropdown-f5ab4219.mjs';
import './StatusPreviewCard-28487c3c.mjs';
import 'unlazy';
import 'blurhash';
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
    const paginator = useMastoClient().v1.trends.listStatuses();
    const hideNewsTips = useLocalStorage(STORAGE_KEY_HIDE_EXPLORE_POSTS_TIPS, false);
    useHydratedHead({
      title: () => `${t("tab.posts")} | ${t("nav.explore")}`
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_CommonAlert = _sfc_main$1;
      const _component_TimelinePaginator = _sfc_main$2;
      _push(`<!--[-->`);
      if (("isHydrated" in _ctx ? _ctx.isHydrated : unref(isHydrated)) && !unref(hideNewsTips)) {
        _push(ssrRenderComponent(_component_CommonAlert, {
          onClose: ($event) => hideNewsTips.value = true
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`<p${_scopeId}>${ssrInterpolate(_ctx.$t("tooltip.explore_posts_intro"))}</p>`);
            } else {
              return [
                createVNode("p", null, toDisplayString(_ctx.$t("tooltip.explore_posts_intro")), 1)
              ];
            }
          }),
          _: 1
        }, _parent));
      } else {
        _push(`<!---->`);
      }
      _push(ssrRenderComponent(_component_TimelinePaginator, {
        paginator: unref(paginator),
        context: "public"
      }, null, _parent));
      _push(`<!--]-->`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/[[server]]/explore/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
