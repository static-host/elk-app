import { b as _sfc_main$2 } from './CommonPaginator-7edbb317.mjs';
import { i as useRoute, j as computedEager, t as useMastoClient, a4 as cacheAccount, d as getAccountRoute, f as _sfc_main$7, K as _sfc_main$i } from '../server.mjs';
import { useSSRContext, defineComponent, mergeProps, unref, withCtx, createVNode, ref } from 'vue';
import { ssrRenderComponent, ssrRenderAttrs, ssrRenderClass } from 'vue/server-renderer';
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

const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  __name: "Account",
  __ssrInlineRender: true,
  props: {
    account: {},
    hoverCard: { type: Boolean },
    list: {}
  },
  setup(__props) {
    cacheAccount(__props.account);
    const client = useMastoClient();
    const isRemoved = ref(false);
    async function edit() {
      try {
        isRemoved.value ? await client.v1.lists.addAccount(__props.list, { accountIds: [__props.account.id] }) : await client.v1.lists.removeAccount(__props.list, { accountIds: [__props.account.id] });
        isRemoved.value = !isRemoved.value;
      } catch (err) {
        console.error(err);
      }
    }
    return (_ctx, _push, _parent, _attrs) => {
      const _component_AccountInfo = _sfc_main$7;
      const _component_CommonTooltip = _sfc_main$i;
      _push(`<div${ssrRenderAttrs(mergeProps({
        flex: "",
        "justify-between": "",
        "hover:bg-active": "",
        "transition-100": "",
        "items-center": ""
      }, _attrs))}>`);
      _push(ssrRenderComponent(_component_AccountInfo, {
        account: _ctx.account,
        hover: "",
        p1: "",
        as: "router-link",
        "hover-card": _ctx.hoverCard,
        shrink: "",
        "overflow-hidden": "",
        to: ("getAccountRoute" in _ctx ? _ctx.getAccountRoute : unref(getAccountRoute))(_ctx.account)
      }, null, _parent));
      _push(`<div>`);
      _push(ssrRenderComponent(_component_CommonTooltip, {
        content: unref(isRemoved) ? _ctx.$t("list.add_account") : _ctx.$t("list.remove_account"),
        hover: unref(isRemoved) ? "text-green" : "text-red",
        "no-auto-focus": ""
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<button text-sm p2 border-1 transition-colors border-dark btn-action-icon${_scopeId}><span class="${ssrRenderClass(unref(isRemoved) ? "i-ri:user-add-line" : "i-ri:user-unfollow-line")}"${_scopeId}></span></button>`);
          } else {
            return [
              createVNode("button", {
                "text-sm": "",
                p2: "",
                "border-1": "",
                "transition-colors": "",
                "border-dark": "",
                "btn-action-icon": "",
                onClick: edit
              }, [
                createVNode("span", {
                  class: unref(isRemoved) ? "i-ri:user-add-line" : "i-ri:user-unfollow-line"
                }, null, 2)
              ])
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div></div>`);
    };
  }
});
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/list/Account.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "accounts",
  __ssrInlineRender: true,
  setup(__props) {
    const params = useRoute().params;
    const listId = computedEager(() => params.list);
    const paginator = useMastoClient().v1.lists.listAccounts(listId.value);
    return (_ctx, _push, _parent, _attrs) => {
      const _component_CommonPaginator = _sfc_main$2;
      const _component_ListAccount = _sfc_main$1;
      _push(ssrRenderComponent(_component_CommonPaginator, mergeProps({ paginator: unref(paginator) }, _attrs), {
        default: withCtx(({ item }, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_ListAccount, {
              account: item,
              list: unref(listId),
              "hover-card": "",
              border: "b base",
              py2: "",
              px4: ""
            }, null, _parent2, _scopeId));
          } else {
            return [
              createVNode(_component_ListAccount, {
                account: item,
                list: unref(listId),
                "hover-card": "",
                border: "b base",
                py2: "",
                px4: ""
              }, null, 8, ["account", "list"])
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/[[server]]/list/[list]/index/accounts.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
