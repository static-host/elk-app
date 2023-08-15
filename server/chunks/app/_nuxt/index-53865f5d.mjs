import { a as useI18n, b as useHydratedHead, V as useUserSettings, p as _sfc_main$2 } from '../server.mjs';
import { useSSRContext, defineComponent, withAsyncContext, computed, mergeProps, withCtx, createVNode, toDisplayString, unref } from 'vue';
import { ssrRenderComponent, ssrInterpolate, ssrRenderAttrs, ssrRenderList, ssrRenderAttr, ssrIncludeBooleanAttr } from 'vue/server-renderer';
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
  __name: "SettingsLanguage",
  __ssrInlineRender: true,
  setup(__props) {
    const userSettings = useUserSettings();
    const { locales } = useI18n();
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<select${ssrRenderAttrs(_attrs)}><!--[-->`);
      ssrRenderList(unref(locales), (item) => {
        _push(`<option${ssrRenderAttr("value", item.code)}${ssrIncludeBooleanAttr(unref(userSettings).language === item.code) ? " selected" : ""}>${ssrInterpolate(item.name)}</option>`);
      });
      _push(`<!--]--></select>`);
    };
  }
});
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/settings/SettingsLanguage.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "index",
  __ssrInlineRender: true,
  async setup(__props) {
    let __temp, __restore;
    const { t, locale } = useI18n();
    const translationStatus = ([__temp, __restore] = withAsyncContext(() => import('./elk-translation-status-628b2a02.mjs').then((m) => m.default)), __temp = await __temp, __restore(), __temp);
    useHydratedHead({
      title: () => `${t("settings.language.label")} | ${t("nav.settings")}`
    });
    const status = computed(() => {
      const entry = translationStatus.locales[locale.value];
      return t("settings.language.status", [entry.total, translationStatus.total, entry.percentage]);
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_MainContent = _sfc_main$2;
      const _component_SettingsLanguage = _sfc_main$1;
      _push(ssrRenderComponent(_component_MainContent, mergeProps({ "back-on-small-screen": "" }, _attrs), {
        title: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div text-lg font-bold flex items-center gap-2${_scopeId}><span${_scopeId}>${ssrInterpolate(_ctx.$t("settings.language.label"))}</span></div>`);
          } else {
            return [
              createVNode("div", {
                "text-lg": "",
                "font-bold": "",
                flex: "",
                "items-center": "",
                "gap-2": "",
                onClick: _ctx.$scrollToTop
              }, [
                createVNode("span", null, toDisplayString(_ctx.$t("settings.language.label")), 1)
              ], 8, ["onClick"])
            ];
          }
        }),
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div p6${_scopeId}><div space-y-2${_scopeId}><h2 py2 font-bold text-xl flex="~ gap-1" items-center${_scopeId}>${ssrInterpolate(_ctx.$t("settings.language.display_language"))}</h2><div${_scopeId}>${ssrInterpolate(unref(status))}</div>`);
            _push2(ssrRenderComponent(_component_SettingsLanguage, { "select-settings": "" }, null, _parent2, _scopeId));
            _push2(`</div></div>`);
          } else {
            return [
              createVNode("div", { p6: "" }, [
                createVNode("div", { "space-y-2": "" }, [
                  createVNode("h2", {
                    py2: "",
                    "font-bold": "",
                    "text-xl": "",
                    flex: "~ gap-1",
                    "items-center": ""
                  }, toDisplayString(_ctx.$t("settings.language.display_language")), 1),
                  createVNode("div", null, toDisplayString(unref(status)), 1),
                  createVNode(_component_SettingsLanguage, { "select-settings": "" })
                ])
              ])
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/settings/language/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
