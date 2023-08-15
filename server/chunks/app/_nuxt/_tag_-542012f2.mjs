import { i as useRoute, j as computedEager, m as useMasto, a5 as useStreaming, b as useHydratedHead, o as onReactivated, p as _sfc_main$2 } from '../server.mjs';
import { _ as _sfc_main$1 } from './TagActionButton-90d1ab07.mjs';
import { _ as _sfc_main$3 } from './TimelinePaginator-72332276.mjs';
import { defineComponent, toRef, withAsyncContext, mergeProps, withCtx, unref, createVNode, toDisplayString, openBlock, createBlock, createCommentVNode, renderSlot, useSSRContext, shallowRef } from 'vue';
import { ssrRenderComponent, ssrInterpolate, ssrRenderSlot } from 'vue/server-renderer';
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
import './CommonPaginator-7edbb317.mjs';
import 'vue-virtual-scroller';
import './StatusCard-4ebd475e.mjs';
import './AccountInlineInfo-272708e4.mjs';
import './Dropdown-f5ab4219.mjs';
import './StatusPreviewCard-28487c3c.mjs';
import 'unlazy';
import 'blurhash';

const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "[tag]",
  __ssrInlineRender: true,
  async setup(__props) {
    let __temp, __restore;
    const params = useRoute().params;
    const tagName = computedEager(() => params.tag);
    const __$temp_1 = useMasto(), client = toRef(__$temp_1, "client");
    const __$temp_2 = ([__temp, __restore] = withAsyncContext(() => useAsyncData(() => client.value.v1.tags.fetch(tagName.value), { default: () => shallowRef() }, "$U6L6yWc3J7")), __temp = await __temp, __restore(), __temp), tag = toRef(__$temp_2, "data"), refresh = toRef(__$temp_2, "refresh");
    const paginator = client.value.v1.timelines.listHashtag(tagName.value);
    const stream = useStreaming((client2) => client2.v1.stream.streamTagTimeline(tagName.value));
    if (tag.value) {
      useHydratedHead({
        title: () => `#${tag.value.name}`
      });
    }
    onReactivated();
    return (_ctx, _push, _parent, _attrs) => {
      const _component_MainContent = _sfc_main$2;
      const _component_TagActionButton = _sfc_main$1;
      const _component_TimelinePaginator = _sfc_main$3;
      _push(ssrRenderComponent(_component_MainContent, mergeProps({ back: "" }, _attrs), {
        title: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<span text-lg font-bold${_scopeId}>#${ssrInterpolate(unref(tagName))}</span>`);
          } else {
            return [
              createVNode("span", {
                "text-lg": "",
                "font-bold": ""
              }, "#" + toDisplayString(unref(tagName)), 1)
            ];
          }
        }),
        actions: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            if (typeof tag.value?.following === "boolean") {
              _push2(ssrRenderComponent(_component_TagActionButton, {
                tag: tag.value,
                onChange: ($event) => refresh.value()
              }, null, _parent2, _scopeId));
            } else {
              _push2(`<!---->`);
            }
          } else {
            return [
              typeof tag.value?.following === "boolean" ? (openBlock(), createBlock(_component_TagActionButton, {
                key: 0,
                tag: tag.value,
                onChange: ($event) => refresh.value()
              }, null, 8, ["tag", "onChange"])) : createCommentVNode("", true)
            ];
          }
        }),
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            ssrRenderSlot(_ctx.$slots, "default", {}, () => {
              _push2(ssrRenderComponent(_component_TimelinePaginator, mergeProps({ paginator: unref(paginator), stream: unref(stream) }, { context: "public" }), null, _parent2, _scopeId));
            }, _push2, _parent2, _scopeId);
          } else {
            return [
              renderSlot(_ctx.$slots, "default", {}, () => [
                createVNode(_component_TimelinePaginator, mergeProps({ paginator: unref(paginator), stream: unref(stream) }, { context: "public" }), null, 16)
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/[[server]]/tags/[tag].vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
