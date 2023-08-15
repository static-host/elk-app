import { Z as _export_sfc, ar as contentToVNode, _ as __nuxt_component_0$1 } from '../server.mjs';
import { b as _sfc_main$1 } from './StatusPreviewCard-28487c3c.mjs';
import { useSSRContext, defineComponent, computed, ref, mergeProps, createVNode, resolveDynamicComponent, withCtx, createTextVNode, toDisplayString } from 'vue';
import { ssrRenderAttrs, ssrRenderVNode, ssrInterpolate, ssrRenderComponent } from 'vue/server-renderer';
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
import 'unlazy';

const maxLines = 20;
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "StatusPreviewStackBlitz",
  __ssrInlineRender: true,
  props: {
    card: {},
    smallPictureOnly: { type: Boolean },
    root: { type: Boolean }
  },
  setup(__props) {
    const props = __props;
    const meta = computed(() => {
      const { description } = props.card;
      const meta2 = description.match(/.*Code Snippet from (.+), lines (\S+)\n\n(.+)/s);
      const file = meta2?.[1];
      const lines = meta2?.[2];
      const code = meta2?.[3].split("\n").slice(0, maxLines).join("\n");
      const project = props.card.title?.replace(" - StackBlitz", "");
      const info = ref({
        file,
        lines,
        code,
        project
      });
      return info.value;
    });
    const vnodeCode = computed(() => {
      if (!meta.value.code)
        return null;
      const code = meta.value.code.replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/`/g, "&#96;");
      const vnode = contentToVNode(`<p>\`\`\`${meta.value.file?.split(".")?.[1] ?? ""}
${code}
\`\`\`</p>`, {
        markdown: true
      });
      return vnode;
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NuxtLink = __nuxt_component_0$1;
      const _component_StatusPreviewCardNormal = _sfc_main$1;
      if (meta.value.code) {
        _push(`<div${ssrRenderAttrs(mergeProps({
          flex: "",
          "flex-col": "",
          "gap-1": "",
          "display-block": "",
          "of-hidden": "",
          "w-full": "",
          "rounded-lg": "",
          "overflow-hidden": "",
          "pb-2": ""
        }, _attrs))} data-v-7f682a14><div whitespace-pre-wrap break-words data-v-7f682a14>`);
        if (vnodeCode.value) {
          _push(`<span class="content-rich line-compact" dir="auto" data-v-7f682a14>`);
          ssrRenderVNode(_push, createVNode(resolveDynamicComponent(vnodeCode.value), null, null), _parent);
          _push(`</span>`);
        } else {
          _push(`<!---->`);
        }
        _push(`</div><div flex justify-between display-block of-hidden bg-card w-full p-3 pb-4 data-v-7f682a14><div flex flex-col data-v-7f682a14><p flex gap-1 data-v-7f682a14><span data-v-7f682a14>${ssrInterpolate(_ctx.$t("custom_cards.stackblitz.snippet_from", [meta.value.file]))}</span><span text-secondary data-v-7f682a14>${ssrInterpolate(`- ${_ctx.$t("custom_cards.stackblitz.lines", [meta.value.lines])}`)}</span></p><div flex font-bold gap-2 data-v-7f682a14><span text-primary data-v-7f682a14>${ssrInterpolate(meta.value.project)}</span><span flex text-secondary data-v-7f682a14><span flex items-center data-v-7f682a14><svg h-5 width="22.27" height="32" viewBox="0 0 256 368" data-v-7f682a14><path fill="currentColor" d="M109.586 217.013H0L200.34 0l-53.926 150.233H256L55.645 367.246l53.927-150.233z" data-v-7f682a14></path></svg></span><span data-v-7f682a14>StackBlitz</span></span></div></div>`);
        _push(ssrRenderComponent(_component_NuxtLink, {
          external: "",
          target: "_blank",
          "btn-solid": "",
          "pt-0": "",
          "pb-1": "",
          "px-2": "",
          "h-fit": "",
          to: _ctx.card.url
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`${ssrInterpolate(_ctx.$t("custom_cards.stackblitz.open"))}`);
            } else {
              return [
                createTextVNode(toDisplayString(_ctx.$t("custom_cards.stackblitz.open")), 1)
              ];
            }
          }),
          _: 1
        }, _parent));
        _push(`</div></div>`);
      } else {
        _push(ssrRenderComponent(_component_StatusPreviewCardNormal, mergeProps({
          card: _ctx.card,
          "small-picture-only": _ctx.smallPictureOnly,
          root: _ctx.root
        }, _attrs), null, _parent));
      }
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/status/StatusPreviewStackBlitz.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const StatusPreviewStackBlitz = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-7f682a14"]]);

export { StatusPreviewStackBlitz as default };
