import { a as useI18n, b as useHydratedHead, bb as useUsers, p as _sfc_main$2, f as _sfc_main$7 } from '../server.mjs';
import { defineComponent, mergeProps, withCtx, createVNode, toDisplayString, unref, openBlock, createBlock, Fragment, renderList, createTextVNode, createCommentVNode, useSSRContext } from 'vue';
import { ssrRenderComponent, ssrInterpolate, ssrRenderList } from 'vue/server-renderer';
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
    useHydratedHead({
      title: () => `${t("settings.users.label")} | ${t("nav.settings")}`
    });
    const loggedInUsers = useUsers();
    async function exportTokens() {
      return;
    }
    async function importTokens() {
      return;
    }
    return (_ctx, _push, _parent, _attrs) => {
      const _component_MainContent = _sfc_main$2;
      const _component_AccountInfo = _sfc_main$7;
      _push(ssrRenderComponent(_component_MainContent, mergeProps({ "back-on-small-screen": "" }, _attrs), {
        title: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div text-lg font-bold flex items-center gap-2${_scopeId}><span${_scopeId}>${ssrInterpolate(_ctx.$t("settings.users.label"))}</span></div>`);
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
                createVNode("span", null, toDisplayString(_ctx.$t("settings.users.label")), 1)
              ], 8, ["onClick"])
            ];
          }
        }),
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div p6${_scopeId}>`);
            if (unref(loggedInUsers).length) {
              _push2(`<!--[--><div flex="~ col gap2"${_scopeId}><!--[-->`);
              ssrRenderList(unref(loggedInUsers), (user) => {
                _push2(`<div${_scopeId}>`);
                _push2(ssrRenderComponent(_component_AccountInfo, {
                  account: user.account,
                  "hover-card": false
                }, null, _parent2, _scopeId));
                _push2(`</div>`);
              });
              _push2(`<!--]--></div><div my4 border="t base"${_scopeId}></div><button btn-text flex="~ gap-2" items-center${_scopeId}><div i-ri-download-2-line${_scopeId}></div> ${ssrInterpolate(_ctx.$t("settings.users.export"))}</button><!--]-->`);
            } else {
              _push2(`<!---->`);
            }
            _push2(`<button btn-text flex="~ gap-2" items-center${_scopeId}><div i-ri-upload-2-line${_scopeId}></div> ${ssrInterpolate(_ctx.$t("settings.users.import"))}</button></div>`);
          } else {
            return [
              createVNode("div", { p6: "" }, [
                unref(loggedInUsers).length ? (openBlock(), createBlock(Fragment, { key: 0 }, [
                  createVNode("div", { flex: "~ col gap2" }, [
                    (openBlock(true), createBlock(Fragment, null, renderList(unref(loggedInUsers), (user) => {
                      return openBlock(), createBlock("div", {
                        key: user.account.id
                      }, [
                        createVNode(_component_AccountInfo, {
                          account: user.account,
                          "hover-card": false
                        }, null, 8, ["account"])
                      ]);
                    }), 128))
                  ]),
                  createVNode("div", {
                    my4: "",
                    border: "t base"
                  }),
                  createVNode("button", {
                    "btn-text": "",
                    flex: "~ gap-2",
                    "items-center": "",
                    onClick: exportTokens
                  }, [
                    createVNode("div", { "i-ri-download-2-line": "" }),
                    createTextVNode(" " + toDisplayString(_ctx.$t("settings.users.export")), 1)
                  ])
                ], 64)) : createCommentVNode("", true),
                createVNode("button", {
                  "btn-text": "",
                  flex: "~ gap-2",
                  "items-center": "",
                  onClick: importTokens
                }, [
                  createVNode("div", { "i-ri-upload-2-line": "" }),
                  createTextVNode(" " + toDisplayString(_ctx.$t("settings.users.import")), 1)
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/settings/users/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
