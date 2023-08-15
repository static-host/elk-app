import { a as useI18n, b as useHydratedHead, k as isHydrated, t as useMastoClient, p as _sfc_main$2$1, _ as __nuxt_component_0$1, M as _sfc_main$n, h as currentUser } from '../server.mjs';
import { b as _sfc_main$5 } from './CommonPaginator-7edbb317.mjs';
import { _ as _sfc_main$4 } from './StatusCard-4ebd475e.mjs';
import { useSSRContext, defineComponent, withCtx, unref, createVNode, toDisplayString, openBlock, createBlock, createCommentVNode, computed, mergeProps, Fragment, renderList } from 'vue';
import { ssrRenderComponent, ssrInterpolate, ssrRenderAttrs, ssrRenderList } from 'vue/server-renderer';
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
import 'vue-virtual-scroller';
import './AccountInlineInfo-272708e4.mjs';
import './Dropdown-f5ab4219.mjs';
import './StatusPreviewCard-28487c3c.mjs';
import 'unlazy';
import 'blurhash';

const _sfc_main$3 = /* @__PURE__ */ defineComponent({
  __name: "ConversationCard",
  __ssrInlineRender: true,
  props: {
    conversation: {}
  },
  setup(__props) {
    const withAccounts = computed(
      () => __props.conversation.accounts.filter((account) => account.id !== __props.conversation.lastStatus?.account.id)
    );
    return (_ctx, _push, _parent, _attrs) => {
      const _component_StatusCard = _sfc_main$4;
      const _component_AccountAvatar = _sfc_main$n;
      if (_ctx.conversation.lastStatus) {
        _push(`<article${ssrRenderAttrs(mergeProps({
          flex: "",
          "flex-col": "",
          "gap-2": ""
        }, _attrs))}>`);
        if (_ctx.conversation.lastStatus) {
          _push(ssrRenderComponent(_component_StatusCard, {
            status: _ctx.conversation.lastStatus,
            actions: false
          }, {
            meta: withCtx((_, _push2, _parent2, _scopeId) => {
              if (_push2) {
                _push2(`<div flex gap-2 text-sm text-secondary font-bold${_scopeId}><p me-1${_scopeId}>${ssrInterpolate(_ctx.$t("conversation.with"))}</p><!--[-->`);
                ssrRenderList(withAccounts.value, (account) => {
                  _push2(ssrRenderComponent(_component_AccountAvatar, {
                    key: account.id,
                    "h-5": "",
                    "w-5": "",
                    account
                  }, null, _parent2, _scopeId));
                });
                _push2(`<!--]--></div>`);
              } else {
                return [
                  createVNode("div", {
                    flex: "",
                    "gap-2": "",
                    "text-sm": "",
                    "text-secondary": "",
                    "font-bold": ""
                  }, [
                    createVNode("p", { "me-1": "" }, toDisplayString(_ctx.$t("conversation.with")), 1),
                    (openBlock(true), createBlock(Fragment, null, renderList(withAccounts.value, (account) => {
                      return openBlock(), createBlock(_component_AccountAvatar, {
                        key: account.id,
                        "h-5": "",
                        "w-5": "",
                        account
                      }, null, 8, ["account"]);
                    }), 128))
                  ])
                ];
              }
            }),
            _: 1
          }, _parent));
        } else {
          _push(`<!---->`);
        }
        _push(`</article>`);
      } else {
        _push(`<!---->`);
      }
    };
  }
});
const _sfc_setup$3 = _sfc_main$3.setup;
_sfc_main$3.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/conversation/ConversationCard.vue");
  return _sfc_setup$3 ? _sfc_setup$3(props, ctx) : void 0;
};
const _sfc_main$2 = /* @__PURE__ */ defineComponent({
  __name: "ConversationPaginator",
  __ssrInlineRender: true,
  props: {
    paginator: {}
  },
  setup(__props) {
    function preprocess(items) {
      const isAuthored = (conversation) => conversation.lastStatus ? conversation.lastStatus.account.id === currentUser.value?.account.id : false;
      return items.filter((item) => isAuthored(item) || !item.lastStatus?.filtered?.find(
        (filter) => filter.filter.filterAction === "hide" && filter.filter.context.includes("thread")
      ));
    }
    return (_ctx, _push, _parent, _attrs) => {
      const _component_CommonPaginator = _sfc_main$5;
      const _component_ConversationCard = _sfc_main$3;
      _push(ssrRenderComponent(_component_CommonPaginator, mergeProps({
        paginator: _ctx.paginator,
        preprocess
      }, _attrs), {
        default: withCtx(({ item }, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_ConversationCard, {
              conversation: item,
              border: "b base",
              "py-1": ""
            }, null, _parent2, _scopeId));
          } else {
            return [
              createVNode(_component_ConversationCard, {
                conversation: item,
                border: "b base",
                "py-1": ""
              }, null, 8, ["conversation"])
            ];
          }
        }),
        _: 1
      }, _parent));
    };
  }
});
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/conversation/ConversationPaginator.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  __name: "TimelineConversations",
  __ssrInlineRender: true,
  setup(__props) {
    const paginator = useMastoClient().v1.conversations.list();
    return (_ctx, _push, _parent, _attrs) => {
      const _component_ConversationPaginator = _sfc_main$2;
      _push(ssrRenderComponent(_component_ConversationPaginator, mergeProps({ paginator: unref(paginator) }, _attrs), null, _parent));
    };
  }
});
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/timeline/TimelineConversations.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "conversations",
  __ssrInlineRender: true,
  setup(__props) {
    const { t } = useI18n();
    useHydratedHead({
      title: () => t("nav.conversations")
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_MainContent = _sfc_main$2$1;
      const _component_NuxtLink = __nuxt_component_0$1;
      const _component_TimelineConversations = _sfc_main$1;
      _push(ssrRenderComponent(_component_MainContent, _attrs, {
        title: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_NuxtLink, {
              to: "/conversations",
              "timeline-title-style": "",
              flex: "",
              "items-center": "",
              "gap-2": "",
              onClick: _ctx.$scrollToTop
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<div i-ri:at-line${_scopeId2}></div><span${_scopeId2}>${ssrInterpolate(unref(t)("nav.conversations"))}</span>`);
                } else {
                  return [
                    createVNode("div", { "i-ri:at-line": "" }),
                    createVNode("span", null, toDisplayString(unref(t)("nav.conversations")), 1)
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
          } else {
            return [
              createVNode(_component_NuxtLink, {
                to: "/conversations",
                "timeline-title-style": "",
                flex: "",
                "items-center": "",
                "gap-2": "",
                onClick: _ctx.$scrollToTop
              }, {
                default: withCtx(() => [
                  createVNode("div", { "i-ri:at-line": "" }),
                  createVNode("span", null, toDisplayString(unref(t)("nav.conversations")), 1)
                ]),
                _: 1
              }, 8, ["onClick"])
            ];
          }
        }),
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            if ("isHydrated" in _ctx ? _ctx.isHydrated : unref(isHydrated)) {
              _push2(ssrRenderComponent(_component_TimelineConversations, null, null, _parent2, _scopeId));
            } else {
              _push2(`<!---->`);
            }
          } else {
            return [
              ("isHydrated" in _ctx ? _ctx.isHydrated : unref(isHydrated)) ? (openBlock(), createBlock(_component_TimelineConversations, { key: 0 })) : createCommentVNode("", true)
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/conversations.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
