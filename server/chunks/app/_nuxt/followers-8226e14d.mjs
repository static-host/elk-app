import { _ as _sfc_main$1 } from './AccountPaginator-8c31064e.mjs';
import { defineComponent, withAsyncContext, unref, mergeProps, useSSRContext } from 'vue';
import { ssrRenderComponent } from 'vue/server-renderer';
import { a as useI18n, i as useRoute, j as computedEager, s as fetchAccountByHandle, t as useMastoClient, v as useSelfAccount, b as useHydratedHead, g as getDisplayName } from '../server.mjs';
import './CommonPaginator-7edbb317.mjs';
import 'vue-virtual-scroller';
import './AccountCard-08c1550e.mjs';
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
  __name: "followers",
  __ssrInlineRender: true,
  async setup(__props) {
    let __temp, __restore;
    const { t } = useI18n();
    const params = useRoute().params;
    const handle = computedEager(() => params.account);
    const account = ([__temp, __restore] = withAsyncContext(() => fetchAccountByHandle(handle.value)), __temp = await __temp, __restore(), __temp);
    const paginator = account ? useMastoClient().v1.accounts.listFollowers(account.id, {}) : null;
    const isSelf = useSelfAccount(account);
    if (account) {
      useHydratedHead({
        title: () => `${t("account.followers")} | ${getDisplayName(account)} (@${account.acct})`
      });
    }
    return (_ctx, _push, _parent, _attrs) => {
      const _component_AccountPaginator = _sfc_main$1;
      if (unref(paginator)) {
        _push(ssrRenderComponent(_component_AccountPaginator, mergeProps({
          paginator: unref(paginator),
          "relationship-context": unref(isSelf) ? "followedBy" : void 0,
          context: "followers",
          account: unref(account)
        }, _attrs), null, _parent));
      } else {
        _push(`<!---->`);
      }
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/[[server]]/@[account]/index/followers.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
