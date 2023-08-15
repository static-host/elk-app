import { _ as __nuxt_component_0$1 } from '../server.mjs';
import { b as _sfc_main$1 } from './StatusPreviewCard-28487c3c.mjs';
import { defineComponent, computed, ref, mergeProps, withCtx, openBlock, createBlock, Fragment, createVNode, toDisplayString, createCommentVNode, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent, ssrInterpolate, ssrRenderAttr } from 'vue/server-renderer';
import reservedNames from 'github-reserved-names';
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

const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "StatusPreviewGitHub",
  __ssrInlineRender: true,
  props: {
    card: {}
  },
  setup(__props) {
    const props = __props;
    const supportedReservedRoutes = ["sponsors"];
    const meta = computed(() => {
      const { url } = props.card;
      const path = url.split("https://github.com/")[1];
      const [firstName, secondName] = path?.split("/") || [];
      if (!firstName || reservedNames.check(firstName) && !supportedReservedRoutes.includes(firstName))
        return void 0;
      const firstIsUser = firstName && !supportedReservedRoutes.includes(firstName);
      const user = firstIsUser ? firstName : secondName;
      const repo = firstIsUser ? secondName : void 0;
      let type = repo ? "repo" : "user";
      let number;
      let details = (props.card.title ?? "").replace("GitHub - ", "").split(" \xB7 ")[0];
      if (repo) {
        const repoPath = `${user}/${repo}`;
        details = details.replace(`${repoPath}: `, "");
        const inRepoPath = path.split(`${repoPath}/`)?.[1];
        if (inRepoPath) {
          number = inRepoPath.match(/issues\/(\d+)/)?.[1];
          if (number) {
            type = "issue";
          } else {
            number = inRepoPath.match(/pull\/(\d+)/)?.[1];
            if (number)
              type = "pull";
          }
        }
      }
      const avatar = `https://github.com/${user}.png?size=256`;
      const author = props.card.authorName;
      const info = ref({
        type,
        user,
        titleUrl: `https://github.com/${user}${repo ? `/${repo}` : ""}`,
        details,
        repo,
        number,
        avatar,
        author: author ? {
          avatar: `https://github.com/${author}.png?size=64`,
          user: author
        } : void 0
      });
      return info.value;
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NuxtLink = __nuxt_component_0$1;
      const _component_StatusPreviewCardNormal = _sfc_main$1;
      if (_ctx.card.image && meta.value) {
        _push(`<div${ssrRenderAttrs(mergeProps({
          flex: "",
          "flex-col": "",
          "display-block": "",
          "of-hidden": "",
          "bg-card": "",
          relative: "",
          "w-full": "",
          "min-h-50": "",
          "md:min-h-60": "",
          "justify-center": "",
          "rounded-lg": ""
        }, _attrs))}><div p4 sm:px-8 flex flex-col justify-between min-h-50 md:min-h-60 h-full><div flex justify-between items-center gap-2 sm:gap-6 h-full mb-2 min-h-35 md:min-h-45><div flex flex-col gap-2>`);
        _push(ssrRenderComponent(_component_NuxtLink, {
          flex: "",
          "gap-1": "",
          "text-xl": "",
          "sm:text-3xl": "",
          "flex-wrap": "",
          "leading-none": "",
          href: meta.value.titleUrl,
          target: "_blank",
          external: ""
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              if (meta.value.repo) {
                _push2(`<!--[--><span${_scopeId}>${ssrInterpolate(meta.value.user)}</span><span text-secondary-light${_scopeId}>/</span><span text-primary font-bold${_scopeId}>${ssrInterpolate(meta.value.repo)}</span><!--]-->`);
              } else {
                _push2(`<span${_scopeId}>${ssrInterpolate(meta.value.user)}</span>`);
              }
            } else {
              return [
                meta.value.repo ? (openBlock(), createBlock(Fragment, { key: 0 }, [
                  createVNode("span", null, toDisplayString(meta.value.user), 1),
                  createVNode("span", { "text-secondary-light": "" }, "/"),
                  createVNode("span", {
                    "text-primary": "",
                    "font-bold": ""
                  }, toDisplayString(meta.value.repo), 1)
                ], 64)) : (openBlock(), createBlock("span", { key: 1 }, toDisplayString(meta.value.user), 1))
              ];
            }
          }),
          _: 1
        }, _parent));
        _push(ssrRenderComponent(_component_NuxtLink, {
          "sm:text-lg": "",
          href: _ctx.card.url,
          target: "_blank",
          external: ""
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              if (meta.value.type === "issue") {
                _push2(`<span text-secondary-light me-2${_scopeId}> #${ssrInterpolate(meta.value.number)}</span>`);
              } else {
                _push2(`<!---->`);
              }
              if (meta.value.type === "pull") {
                _push2(`<span text-secondary-light me-2${_scopeId}> PR #${ssrInterpolate(meta.value.number)}</span>`);
              } else {
                _push2(`<!---->`);
              }
              _push2(`<span text-secondary leading-tight${_scopeId}>${ssrInterpolate(meta.value.details)}</span>`);
            } else {
              return [
                meta.value.type === "issue" ? (openBlock(), createBlock("span", {
                  key: 0,
                  "text-secondary-light": "",
                  "me-2": ""
                }, " #" + toDisplayString(meta.value.number), 1)) : createCommentVNode("", true),
                meta.value.type === "pull" ? (openBlock(), createBlock("span", {
                  key: 1,
                  "text-secondary-light": "",
                  "me-2": ""
                }, " PR #" + toDisplayString(meta.value.number), 1)) : createCommentVNode("", true),
                createVNode("span", {
                  "text-secondary": "",
                  "leading-tight": ""
                }, toDisplayString(meta.value.details), 1)
              ];
            }
          }),
          _: 1
        }, _parent));
        _push(`</div><div shrink-0 w-18 sm:w-30>`);
        _push(ssrRenderComponent(_component_NuxtLink, {
          href: meta.value.titleUrl,
          target: "_blank",
          external: ""
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`<img w-full aspect-square width="112" height="112" rounded-2${ssrRenderAttr("src", meta.value.avatar)}${_scopeId}>`);
            } else {
              return [
                createVNode("img", {
                  "w-full": "",
                  "aspect-square": "",
                  width: "112",
                  height: "112",
                  "rounded-2": "",
                  src: meta.value.avatar
                }, null, 8, ["src"])
              ];
            }
          }),
          _: 1
        }, _parent));
        _push(`</div></div><div flex justify-between>`);
        if (meta.value.author) {
          _push(`<div flex class="gap-2.5" items-center><div><img w-8 aspect-square width="25" height="25" rounded-full${ssrRenderAttr("src", meta.value.author?.avatar)}></div><span text-lg text-primary>@${ssrInterpolate(meta.value.author?.user)}</span></div>`);
        } else {
          _push(`<div></div>`);
        }
        _push(`<div text-3xl i-ri:github-fill text-secondary></div></div></div></div>`);
      } else {
        _push(ssrRenderComponent(_component_StatusPreviewCardNormal, mergeProps({ card: _ctx.card }, _attrs), null, _parent));
      }
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/status/StatusPreviewGitHub.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
