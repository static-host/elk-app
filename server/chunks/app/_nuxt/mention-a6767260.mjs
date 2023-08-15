import { _ as _sfc_main$2 } from './NotificationPaginator-f2a948e0.mjs';
import { useSSRContext, defineComponent, unref, mergeProps } from 'vue';
import { ssrRenderComponent } from 'vue/server-renderer';
import { a as useI18n, b as useHydratedHead, k as isHydrated, t as useMastoClient, a5 as useStreaming } from '../server.mjs';
import { u as useNotifications } from './notification-5fbec450.mjs';
import './CommonPaginator-7edbb317.mjs';
import 'vue-virtual-scroller';
import './AccountCard-08c1550e.mjs';
import './StatusCard-4ebd475e.mjs';
import './AccountInlineInfo-272708e4.mjs';
import './Dropdown-f5ab4219.mjs';
import './StatusPreviewCard-28487c3c.mjs';
import 'unlazy';
import 'blurhash';
import './AccountBigCard-98c6df7d.mjs';
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
  __name: "TimelineMentions",
  __ssrInlineRender: true,
  setup(__props) {
    const paginator = useMastoClient().v1.notifications.list({ limit: 30, types: ["mention"] });
    const stream = useStreaming((client) => client.v1.stream.streamUser());
    useNotifications();
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NotificationPaginator = _sfc_main$2;
      _push(ssrRenderComponent(_component_NotificationPaginator, mergeProps({ paginator: unref(paginator), stream: unref(stream) }, _attrs), null, _parent));
    };
  }
});
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/timeline/TimelineMentions.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "mention",
  __ssrInlineRender: true,
  setup(__props) {
    const { t } = useI18n();
    useHydratedHead({
      title: () => `${t("tab.notifications_mention")} | ${t("nav.notifications")}`
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_TimelineMentions = _sfc_main$1;
      if ("isHydrated" in _ctx ? _ctx.isHydrated : unref(isHydrated)) {
        _push(ssrRenderComponent(_component_TimelineMentions, _attrs, null, _parent));
      } else {
        _push(`<!---->`);
      }
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/notifications/mention.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
