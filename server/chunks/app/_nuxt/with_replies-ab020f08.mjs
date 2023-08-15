import { _ as _sfc_main$1 } from './AccountTabs-14f8edec.mjs';
import { _ as _sfc_main$2 } from './TimelinePaginator-72332276.mjs';
import { r as reorderedTimeline } from './timeline-7ffc89e5.mjs';
import { defineComponent, withAsyncContext, unref, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent } from 'vue/server-renderer';
import { a as useI18n, i as useRoute, j as computedEager, s as fetchAccountByHandle, t as useMastoClient, b as useHydratedHead, g as getDisplayName } from '../server.mjs';
import './CommonRouteTabs-dfae9a80.mjs';
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
  __name: "with_replies",
  __ssrInlineRender: true,
  async setup(__props) {
    let __temp, __restore;
    const { t } = useI18n();
    const params = useRoute().params;
    const handle = computedEager(() => params.account);
    const account = ([__temp, __restore] = withAsyncContext(() => fetchAccountByHandle(handle.value)), __temp = await __temp, __restore(), __temp);
    const paginator = useMastoClient().v1.accounts.listStatuses(account.id, { excludeReplies: false });
    if (account) {
      useHydratedHead({
        title: () => `${t("tab.posts_with_replies")} | ${getDisplayName(account)} (@${account.acct})`
      });
    }
    return (_ctx, _push, _parent, _attrs) => {
      const _component_AccountTabs = _sfc_main$1;
      const _component_TimelinePaginator = _sfc_main$2;
      _push(`<div${ssrRenderAttrs(_attrs)}>`);
      _push(ssrRenderComponent(_component_AccountTabs, null, null, _parent));
      _push(ssrRenderComponent(_component_TimelinePaginator, {
        paginator: unref(paginator),
        preprocess: "reorderedTimeline" in _ctx ? _ctx.reorderedTimeline : unref(reorderedTimeline),
        context: "account",
        account: unref(account)
      }, null, _parent));
      _push(`</div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/[[server]]/@[account]/index/with_replies.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
