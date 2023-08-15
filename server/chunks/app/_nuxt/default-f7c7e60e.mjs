import { bj as useTimeout, i as useRoute, b5 as useBuildInfo, y as usePreferences, k as isHydrated, h as currentUser, d as getAccountRoute, a2 as useRouter, ae as useCommand, b2 as onHydrated, bd as useSignIn, bg as useOnline, aT as useColorMode, V as useUserSettings, bh as invoke, aV as useEventListener, W as getPreferences, ab as useTimeAgoOptions, av as useTimeAgo, b9 as togglePreferences, bi as onClickOutside, b7 as elkTeamMembers, bk as useScrollLock, bl as mediaPreviewList, bm as mediaPreviewIndex, bn as useMagicKeys, bo as whenever, u as useFormattedDateTime, bp as useIsMac, bq as useCommandRegistry, m as useMasto, a as useI18n, E as getServerName, F as currentServer, x as useRelationship, bP as openCommandPanel, bt as isSigninDialogOpen, bu as isPreviewHelpOpen, bv as closePreviewHelp, bw as isPublishDialogOpen, bx as dialogDraftKey, by as isMediaPreviewOpen, bz as closeMediaPreview, bA as isEditHistoryDialogOpen, bB as statusEdit, bC as isCommandPanelOpen, bD as closeCommandPanel, bE as isConfirmDialogOpen, bF as confirmDialogLabel, bG as isErrorDialogOpen, bH as errorDialogData, bI as isFavouritedBoostedByDialogOpen, bJ as isKeyboardShortcutsDialogOpen, bK as closeKeyboardShortcuts, bL as isReportDialogOpen, bM as reportAccount, bN as reportStatus, bO as closeReportDialog, bR as toValue, bb as useUsers, _ as __nuxt_component_0$1, f as _sfc_main$7$1, a7 as __nuxt_component_11, K as _sfc_main$i$1, Z as _export_sfc, M as _sfc_main$n$1, be as _sfc_main$5$1, bf as switchUser, O as _sfc_main$c$1, S as _sfc_main$8$1, br as commandPanelInput, bs as favouritedBoostedByStatusId, am as lastPublishDialogStatus, bQ as confirmDialogChoice, a6 as useNuxtApp } from '../server.mjs';
import { useSSRContext, defineComponent, mergeModels, useModel, ref, computed, watch, mergeProps, unref, withCtx, createVNode, withDirectives, createTextVNode, toDisplayString, vShow, nextTick, renderSlot, openBlock, createBlock, createCommentVNode, resolveComponent, isRef, shallowRef, onUnmounted, toRef, withAsyncContext, defineAsyncComponent, h, render } from 'vue';
import { ssrRenderAttrs, ssrRenderStyle, ssrRenderList, ssrRenderAttr, ssrRenderSlot, ssrRenderComponent, ssrRenderClass, ssrInterpolate, ssrIncludeBooleanAttr, ssrLooseEqual, ssrLooseContain } from 'vue/server-renderer';
import { i as isMediumOrLargeScreen } from './screen-2a06052d.mjs';
import { u as useNotifications } from './notification-5fbec450.mjs';
import { u as useSearch, _ as _sfc_main$r, a as __nuxt_component_1$2, b as _sfc_main$2$1 } from './SearchWidget-ef9ca4c4.mjs';
import { _ as __nuxt_component_0$2 } from './ModalDialog-ca589b82.mjs';
import proxy from 'unenv/runtime/mock/proxy';
import { _ as __nuxt_component_3 } from './PublishWidget-6fa2405b.mjs';
import { useGesture } from '@vueuse/gesture';
import { number } from 'style-value-types';
import { _ as _sfc_main$s } from './AccountInlineInfo-272708e4.mjs';
import { k as _sfc_main$7$2, h as _sfc_main$8$2, i as _sfc_main$3$1, _ as _sfc_main$u } from './StatusCard-4ebd475e.mjs';
import { _ as _sfc_main$t } from './AccountPaginator-8c31064e.mjs';
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
import './SearchHashtagInfo-16b8b8d8.mjs';
import './CommonTrendingCharts-83a6641e.mjs';
import '@vueuse/integrations/useFocusTrap';
import './CommonErrorMessage-97222b87.mjs';
import './Dropdown-f5ab4219.mjs';
import 'iso-639-1';
import 'string-length';
import 'tippy.js';
import './CommonPaginator-7edbb317.mjs';
import 'vue-virtual-scroller';
import './StatusPreviewCard-28487c3c.mjs';
import 'unlazy';
import 'blurhash';
import './AccountCard-08c1550e.mjs';

const _sfc_main$q = {};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  _push(`<span${ssrRenderAttrs(mergeProps({
    "shrink-0": "",
    aspect: "1/1",
    "sm:h-8": "",
    "xl:h-10": "",
    class: "rtl-flip"
  }, _attrs))} data-v-5cb58bfe><svg xmlns="http://www.w3.org/2000/svg" w-full aspect="1/1" sm:h-8 xl:h-10 sm:w-8 xl:w-10 viewBox="0 0 250 250" fill="none" data-v-5cb58bfe><mask id="a" width="240" height="234" x="4" y="1" maskUnits="userSpaceOnUse" style="${ssrRenderStyle({ "mask-type": "alpha" })}" data-v-5cb58bfe><path id="path19" fill="#D9D9D9" d="M244 123c0 64.617-38.383 112-103 112-64.617 0-103-30.883-103-95.5C38 111.194-8.729 36.236 8 16 29.46-9.959 88.689 6 125 6c64.617 0 119 52.383 119 117Z" data-v-5cb58bfe></path></mask><g id="g28" mask="url(#a)" transform="matrix(0.90923731,0,0,1.0049564,13.520015,-3.1040835)" data-v-5cb58bfe><path id="path22" class="body" d="m 116.94,88.1 c -13.344,1.552 -20.436,-2.019 -24.706,10.71 0,0 14.336,21.655 52.54,21.112 -2.135,8.848 -1.144,15.368 -1.144,23.207 0,26.079 -20.589,48.821 -65.961,48.821 -23.03,0 -51.015,4.191 -72.367,15.911 -15.175,8.305 -27.048,20.336 -32.302,37.023 l 5.956,8.461 11.4,0.155 v 47.889 l -13.91,21.966 3.998,63.645 H -6.364 L -5.22,335.773 C 1.338,331.892 16.36,321.802 29.171,306.279 46.557,285.4 59.902,255.052 44.193,217.486 l 11.744,-5.045 c 12.887,30.814 8.388,57.514 -2.898,79.013 21.58,-0.698 40.11,-2.095 55.819,-4.734 l -3.584,-43.698 12.659,-1.087 L 129.98,387 h 13.116 l 2.212,-94.459 c 10.447,-4.502 34.239,-21.034 45.372,-78.47 1.372,-6.986 2.135,-12.885 2.516,-17.93 1.754,-12.806 2.745,-27.243 3.051,-43.698 l -18.683,-5.976 h 57.42 l 5.567,-12.807 c -5.414,0.233 -11.896,-2.639 -11.896,-2.639 l 1.297,-6.209 H 242 L 176.801,90.428 c -7.244,2.794 -14.87,6.442 -20.208,10.866 -4.27,-3.105 -19.063,-12.807 -39.653,-13.195 z" data-v-5cb58bfe></path><path id="path24" class="wood" d="M 6.217,24.493 18.494,21 c 5.948,21.577 13.345,33.375 22.648,39.352 8.388,5.099 19.75,5.239 31.799,4.579 C 69.433,63.767 66.154,62.137 63.104,59.886 56.317,54.841 50.522,46.458 46.175,31.246 l 12.201,-3.649 c 3.279,11.488 7.092,18.085 12.201,21.888 5.11,3.726 11.286,4.657 18.606,5.433 13.726,1.553 30.884,2.174 52.312,12.264 2.898,1.086 5.872,2.483 8.769,4.036 -0.381,-0.776 -0.762,-1.553 -1.296,-2.406 -3.66,-5.822 -10.828,-11.953 -24.097,-16.92 l 4.27,-12.109 c 21.581,7.917 30.121,19.171 33.553,28.097 3.965,10.168 1.525,18.124 1.525,18.124 -3.05,1.009 -6.1,2.406 -9.608,3.492 -6.634,-4.579 -12.887,-8.033 -18.835,-10.75 C 113.814,70.442 92.31,76.108 73.246,77.893 58.91,79.213 45.794,78.591 34.432,71.295 23.222,64.155 13.385,50.495 6.217,24.493 Z" data-v-5cb58bfe></path><path id="path26" class="wood" d="M 90.098,45.294 C 87.582,39.55 86.057,32.487 86.743,23.794 l 12.659,0.932 c -0.763,10.555 2.897,17.696 7.015,22.353 -5.338,-0.931 -10.447,-1.04 -16.319,-1.785 z m 80.069,-1.32 8.312,-9.702 c 21.58,19.094 8.159,46.415 8.159,46.415 l -11.819,-1.32 c -0.382,-6.24 -1.144,-17.836 -6.635,-24.371 3.584,1.84 6.635,3.865 9.99,6.908 0,-5.666 -1.754,-12.341 -8.007,-17.93 z" data-v-5cb58bfe></path></g></svg></span>`);
}
const _sfc_setup$q = _sfc_main$q.setup;
_sfc_main$q.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/nav/NavLogo.vue");
  return _sfc_setup$q ? _sfc_setup$q(props, ctx) : void 0;
};
const __nuxt_component_1$1 = /* @__PURE__ */ _export_sfc(_sfc_main$q, [["ssrRender", _sfc_ssrRender], ["__scopeId", "data-v-5cb58bfe"]]);
const _sfc_main$p = /* @__PURE__ */ defineComponent({
  __name: "NavTitle",
  __ssrInlineRender: true,
  setup(__props) {
    const { env } = useBuildInfo();
    const router = useRouter();
    const back = ref("");
    const nuxtApp = useNuxtApp();
    function onClickLogo() {
      nuxtApp.hooks.callHook("elk-logo:click");
    }
    router.afterEach(() => {
      back.value = router.options.history.state.back;
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NuxtLink = __nuxt_component_0$1;
      const _component_NavLogo = __nuxt_component_1$1;
      const _component_CommonTooltip = _sfc_main$i$1;
      _push(`<div${ssrRenderAttrs(mergeProps({
        flex: "",
        "justify-between": "",
        sticky: "",
        "top-0": "",
        "bg-base": "",
        "z-1": "",
        "py-4": "",
        "native:py-7": "",
        "data-tauri-drag-region": ""
      }, _attrs))}>`);
      _push(ssrRenderComponent(_component_NuxtLink, {
        flex: "",
        "items-end": "",
        "gap-3": "",
        py2: "",
        "px-5": "",
        "text-2xl": "",
        "select-none": "",
        "focus-visible:ring": "2 current",
        to: "/home",
        onClick: onClickLogo
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_NavLogo, {
              "shrink-0": "",
              aspect: "1/1",
              "sm:h-8": "",
              "xl:h-10": "",
              class: "rtl-flip"
            }, null, _parent2, _scopeId));
            _push2(`<div style="${ssrRenderStyle(("isHydrated" in _ctx ? _ctx.isHydrated : unref(isHydrated)) ? null : { display: "none" })}" hidden xl:block text-secondary${_scopeId}>${ssrInterpolate(_ctx.$t("app_name"))} <sup text-sm italic mt-1${_scopeId}>${ssrInterpolate(unref(env) === "release" ? "alpha" : unref(env))}</sup></div>`);
          } else {
            return [
              createVNode(_component_NavLogo, {
                "shrink-0": "",
                aspect: "1/1",
                "sm:h-8": "",
                "xl:h-10": "",
                class: "rtl-flip"
              }),
              withDirectives(createVNode("div", {
                hidden: "",
                "xl:block": "",
                "text-secondary": ""
              }, [
                createTextVNode(toDisplayString(_ctx.$t("app_name")) + " ", 1),
                createVNode("sup", {
                  "text-sm": "",
                  italic: "",
                  "mt-1": ""
                }, toDisplayString(unref(env) === "release" ? "alpha" : unref(env)), 1)
              ], 512), [
                [vShow, "isHydrated" in _ctx ? _ctx.isHydrated : unref(isHydrated)]
              ])
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`<div hidden xl:flex items-center me-8 mt-2 gap-1>`);
      _push(ssrRenderComponent(_component_CommonTooltip, {
        content: _ctx.$t("nav.back")
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_NuxtLink, {
              "aria-label": _ctx.$t("nav.back"),
              class: { "pointer-events-none op0": !unref(back) || unref(back) === "/", "xl:flex": _ctx.$route.name !== "tag" },
              onClick: ($event) => _ctx.$router.go(-1)
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<div text-xl i-ri:arrow-left-line class="rtl-flip" btn-text${_scopeId2}></div>`);
                } else {
                  return [
                    createVNode("div", {
                      "text-xl": "",
                      "i-ri:arrow-left-line": "",
                      class: "rtl-flip",
                      "btn-text": ""
                    })
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
          } else {
            return [
              createVNode(_component_NuxtLink, {
                "aria-label": _ctx.$t("nav.back"),
                class: { "pointer-events-none op0": !unref(back) || unref(back) === "/", "xl:flex": _ctx.$route.name !== "tag" },
                onClick: ($event) => _ctx.$router.go(-1)
              }, {
                default: withCtx(() => [
                  createVNode("div", {
                    "text-xl": "",
                    "i-ri:arrow-left-line": "",
                    class: "rtl-flip",
                    "btn-text": ""
                  })
                ]),
                _: 1
              }, 8, ["aria-label", "class", "onClick"])
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div></div>`);
    };
  }
});
const _sfc_setup$p = _sfc_main$p.setup;
_sfc_main$p.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/nav/NavTitle.vue");
  return _sfc_setup$p ? _sfc_setup$p(props, ctx) : void 0;
};
const _sfc_main$o = /* @__PURE__ */ defineComponent({
  __name: "NavSideItem",
  __ssrInlineRender: true,
  props: {
    text: {},
    icon: {},
    to: {},
    userOnly: { type: Boolean, default: false },
    command: { type: Boolean }
  },
  setup(__props) {
    const props = __props;
    const router = useRouter();
    useCommand({
      scope: "Navigation",
      name: () => props.text ?? (typeof props.to === "string" ? props.to : props.to.name),
      icon: () => props.icon,
      visible: () => props.command,
      onActivate() {
        router.push(props.to);
      }
    });
    let activeClass = ref("text-primary");
    onHydrated(async () => {
      activeClass.value = "";
      await nextTick();
      activeClass.value = "text-primary";
    });
    const noUserDisable = computed(() => !isHydrated.value || props.userOnly && !currentUser.value);
    const noUserVisual = computed(() => isHydrated.value && props.userOnly && !currentUser.value);
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NuxtLink = __nuxt_component_0$1;
      const _component_CommonTooltip = _sfc_main$i$1;
      _push(ssrRenderComponent(_component_NuxtLink, mergeProps({
        to: _ctx.to,
        disabled: unref(noUserDisable),
        class: unref(noUserVisual) ? "op25 pointer-events-none " : "",
        "active-class": unref(activeClass),
        group: "",
        "focus:outline-none": "",
        "disabled:pointer-events-none": "",
        tabindex: unref(noUserDisable) ? -1 : null,
        onClick: _ctx.$scrollToTop
      }, _attrs), {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_CommonTooltip, {
              disabled: !("isMediumOrLargeScreen" in _ctx ? _ctx.isMediumOrLargeScreen : unref(isMediumOrLargeScreen)),
              content: _ctx.text,
              placement: "right"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<div class="item" flex items-center gap4 w-fit rounded-3 px2 mx3 sm:mxa xl="ml0 mr5 px5 w-auto" transition-100 elk-group-hover="bg-active" group-focus-visible:ring="2 current" data-v-98863956${_scopeId2}>`);
                  ssrRenderSlot(_ctx.$slots, "icon", {}, () => {
                    _push3(`<div class="${ssrRenderClass(_ctx.icon)}" text-xl data-v-98863956${_scopeId2}></div>`);
                  }, _push3, _parent3, _scopeId2);
                  ssrRenderSlot(_ctx.$slots, "default", {}, () => {
                    _push3(`<span block sm:hidden xl:block select-none data-v-98863956${_scopeId2}>${ssrInterpolate(("isHydrated" in _ctx ? _ctx.isHydrated : unref(isHydrated)) ? _ctx.text : "\xA0")}</span>`);
                  }, _push3, _parent3, _scopeId2);
                  _push3(`</div>`);
                } else {
                  return [
                    createVNode("div", {
                      class: "item",
                      flex: "",
                      "items-center": "",
                      gap4: "",
                      "w-fit": "",
                      "rounded-3": "",
                      px2: "",
                      mx3: "",
                      "sm:mxa": "",
                      xl: "ml0 mr5 px5 w-auto",
                      "transition-100": "",
                      "elk-group-hover": "bg-active",
                      "group-focus-visible:ring": "2 current"
                    }, [
                      renderSlot(_ctx.$slots, "icon", {}, () => [
                        createVNode("div", {
                          class: _ctx.icon,
                          "text-xl": ""
                        }, null, 2)
                      ], true),
                      renderSlot(_ctx.$slots, "default", {}, () => [
                        createVNode("span", {
                          block: "",
                          "sm:hidden": "",
                          "xl:block": "",
                          "select-none": ""
                        }, toDisplayString(("isHydrated" in _ctx ? _ctx.isHydrated : unref(isHydrated)) ? _ctx.text : "\xA0"), 1)
                      ], true)
                    ])
                  ];
                }
              }),
              _: 3
            }, _parent2, _scopeId));
          } else {
            return [
              createVNode(_component_CommonTooltip, {
                disabled: !("isMediumOrLargeScreen" in _ctx ? _ctx.isMediumOrLargeScreen : unref(isMediumOrLargeScreen)),
                content: _ctx.text,
                placement: "right"
              }, {
                default: withCtx(() => [
                  createVNode("div", {
                    class: "item",
                    flex: "",
                    "items-center": "",
                    gap4: "",
                    "w-fit": "",
                    "rounded-3": "",
                    px2: "",
                    mx3: "",
                    "sm:mxa": "",
                    xl: "ml0 mr5 px5 w-auto",
                    "transition-100": "",
                    "elk-group-hover": "bg-active",
                    "group-focus-visible:ring": "2 current"
                  }, [
                    renderSlot(_ctx.$slots, "icon", {}, () => [
                      createVNode("div", {
                        class: _ctx.icon,
                        "text-xl": ""
                      }, null, 2)
                    ], true),
                    renderSlot(_ctx.$slots, "default", {}, () => [
                      createVNode("span", {
                        block: "",
                        "sm:hidden": "",
                        "xl:block": "",
                        "select-none": ""
                      }, toDisplayString(("isHydrated" in _ctx ? _ctx.isHydrated : unref(isHydrated)) ? _ctx.text : "\xA0"), 1)
                    ], true)
                  ])
                ]),
                _: 3
              }, 8, ["disabled", "content"])
            ];
          }
        }),
        _: 3
      }, _parent));
    };
  }
});
const _sfc_setup$o = _sfc_main$o.setup;
_sfc_main$o.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/nav/NavSideItem.vue");
  return _sfc_setup$o ? _sfc_setup$o(props, ctx) : void 0;
};
const __nuxt_component_0 = /* @__PURE__ */ _export_sfc(_sfc_main$o, [["__scopeId", "data-v-98863956"]]);
const _sfc_main$n = /* @__PURE__ */ defineComponent({
  __name: "NavSide",
  __ssrInlineRender: true,
  props: {
    command: { type: Boolean }
  },
  setup(__props) {
    const { notifications } = useNotifications();
    const useStarFavoriteIcon = usePreferences("useStarFavoriteIcon");
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NavSideItem = __nuxt_component_0;
      _push(`<nav${ssrRenderAttrs(mergeProps({
        "sm:px3": "",
        flex: "~ col gap2",
        shrink: "",
        "text-size-base": "",
        "leading-normal": "",
        "md:text-lg": "",
        "h-full": "",
        "mt-1": "",
        "overflow-y-auto": ""
      }, _attrs))} data-v-d387562f>`);
      _push(ssrRenderComponent(_component_NavSideItem, {
        text: _ctx.$t("nav.search"),
        to: "/search",
        icon: "i-ri:search-line",
        "xl:hidden": "",
        command: _ctx.command
      }, null, _parent));
      _push(`<div class="spacer" shrink xl:hidden data-v-d387562f></div>`);
      _push(ssrRenderComponent(_component_NavSideItem, {
        text: _ctx.$t("nav.home"),
        to: "/home",
        icon: "i-ri:home-5-line",
        "user-only": "",
        command: _ctx.command
      }, null, _parent));
      _push(ssrRenderComponent(_component_NavSideItem, {
        text: _ctx.$t("nav.notifications"),
        to: "/notifications",
        icon: "i-ri:notification-4-line",
        "user-only": "",
        command: _ctx.command
      }, {
        icon: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div flex relative data-v-d387562f${_scopeId}><div class="i-ri:notification-4-line" text-xl data-v-d387562f${_scopeId}></div>`);
            if (unref(notifications)) {
              _push2(`<div class="top-[-0.3rem] right-[-0.3rem]" absolute font-bold rounded-full h-4 w-4 text-xs bg-primary text-inverted flex items-center justify-center data-v-d387562f${_scopeId}>${ssrInterpolate(unref(notifications) < 10 ? unref(notifications) : "\u2022")}</div>`);
            } else {
              _push2(`<!---->`);
            }
            _push2(`</div>`);
          } else {
            return [
              createVNode("div", {
                flex: "",
                relative: ""
              }, [
                createVNode("div", {
                  class: "i-ri:notification-4-line",
                  "text-xl": ""
                }),
                unref(notifications) ? (openBlock(), createBlock("div", {
                  key: 0,
                  class: "top-[-0.3rem] right-[-0.3rem]",
                  absolute: "",
                  "font-bold": "",
                  "rounded-full": "",
                  "h-4": "",
                  "w-4": "",
                  "text-xs": "",
                  "bg-primary": "",
                  "text-inverted": "",
                  flex: "",
                  "items-center": "",
                  "justify-center": ""
                }, toDisplayString(unref(notifications) < 10 ? unref(notifications) : "\u2022"), 1)) : createCommentVNode("", true)
              ])
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_component_NavSideItem, {
        text: _ctx.$t("nav.conversations"),
        to: "/conversations",
        icon: "i-ri:at-line",
        "user-only": "",
        command: _ctx.command
      }, null, _parent));
      _push(ssrRenderComponent(_component_NavSideItem, {
        text: _ctx.$t("nav.favourites"),
        to: "/favourites",
        icon: unref(useStarFavoriteIcon) ? "i-ri:star-line" : "i-ri:heart-3-line",
        "user-only": "",
        command: _ctx.command
      }, null, _parent));
      _push(ssrRenderComponent(_component_NavSideItem, {
        text: _ctx.$t("nav.bookmarks"),
        to: "/bookmarks",
        icon: "i-ri:bookmark-line",
        "user-only": "",
        command: _ctx.command
      }, null, _parent));
      _push(`<div class="spacer" shrink hidden sm:block data-v-d387562f></div>`);
      _push(ssrRenderComponent(_component_NavSideItem, {
        text: _ctx.$t("action.compose"),
        to: "/compose",
        icon: "i-ri:quill-pen-line",
        "user-only": "",
        command: _ctx.command
      }, null, _parent));
      _push(`<div class="spacer" shrink hidden sm:block data-v-d387562f></div>`);
      _push(ssrRenderComponent(_component_NavSideItem, {
        text: _ctx.$t("nav.explore"),
        to: ("isHydrated" in _ctx ? _ctx.isHydrated : unref(isHydrated)) ? `/explore` : "/explore",
        icon: "i-ri:hashtag",
        command: _ctx.command
      }, null, _parent));
      _push(ssrRenderComponent(_component_NavSideItem, {
        text: _ctx.$t("nav.local"),
        to: ("isHydrated" in _ctx ? _ctx.isHydrated : unref(isHydrated)) ? `/public/local` : "/public/local",
        icon: "i-ri:group-2-line ",
        command: _ctx.command
      }, null, _parent));
      _push(ssrRenderComponent(_component_NavSideItem, {
        text: _ctx.$t("nav.federated"),
        to: ("isHydrated" in _ctx ? _ctx.isHydrated : unref(isHydrated)) ? `/public` : "/public",
        icon: "i-ri:earth-line",
        command: _ctx.command
      }, null, _parent));
      _push(ssrRenderComponent(_component_NavSideItem, {
        text: _ctx.$t("nav.lists"),
        to: ("isHydrated" in _ctx ? _ctx.isHydrated : unref(isHydrated)) ? `/lists` : "/lists",
        icon: "i-ri:list-check",
        "user-only": "",
        command: _ctx.command
      }, null, _parent));
      _push(`<div class="spacer" shrink hidden sm:block data-v-d387562f></div>`);
      _push(ssrRenderComponent(_component_NavSideItem, {
        text: _ctx.$t("nav.settings"),
        to: "/settings",
        icon: "i-ri:settings-3-line",
        command: _ctx.command
      }, null, _parent));
      _push(`</nav>`);
    };
  }
});
const _sfc_setup$n = _sfc_main$n.setup;
_sfc_main$n.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/nav/NavSide.vue");
  return _sfc_setup$n ? _sfc_setup$n(props, ctx) : void 0;
};
const __nuxt_component_1 = /* @__PURE__ */ _export_sfc(_sfc_main$n, [["__scopeId", "data-v-d387562f"]]);
const _sfc_main$m = /* @__PURE__ */ defineComponent({
  __name: "UserSignInEntry",
  __ssrInlineRender: true,
  setup(__props) {
    const { busy, oauth, singleInstanceServer } = useSignIn();
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({
        p8: "",
        "lg:flex": "~ col gap2",
        hidden: ""
      }, _attrs))}>`);
      if (unref(singleInstanceServer)) {
        _push(`<button flex="~ row" gap-x-2 items-center justify-center btn-solid text-center text-white rounded-3${ssrIncludeBooleanAttr(unref(busy)) ? " disabled" : ""}>`);
        if (unref(busy)) {
          _push(`<span aria-hidden="true" block animate animate-spin preserve-3d class="rtl-flip"><span block i-ri:loader-2-fill aria-hidden="true"></span></span>`);
        } else {
          _push(`<span aria-hidden="true" block i-ri:login-circle-line class="rtl-flip"></span>`);
        }
        _push(` ${ssrInterpolate(_ctx.$t("action.sign_in"))}</button>`);
      } else {
        _push(`<button btn-solid rounded-3 text-center mt-2 select-none>${ssrInterpolate(_ctx.$t("action.sign_in"))}</button>`);
      }
      _push(`</div>`);
    };
  }
});
const _sfc_setup$m = _sfc_main$m.setup;
_sfc_main$m.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/user/UserSignInEntry.vue");
  return _sfc_setup$m ? _sfc_setup$m(props, ctx) : void 0;
};
const _sfc_main$l = /* @__PURE__ */ defineComponent({
  __name: "CommonMask",
  __ssrInlineRender: true,
  props: {
    zIndex: { default: 100 },
    background: { default: "transparent" }
  },
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({
        fixed: "",
        "top-0": "",
        "bottom-0": "",
        "left-0": "",
        "right-0": "",
        style: { background: _ctx.background, zIndex: _ctx.zIndex }
      }, _attrs))}></div>`);
    };
  }
});
const _sfc_setup$l = _sfc_main$l.setup;
_sfc_main$l.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/common/CommonMask.vue");
  return _sfc_setup$l ? _sfc_setup$l(props, ctx) : void 0;
};
function useMask(options = {}) {
  const {
    background = "transparent",
    getContainer = () => document.body,
    zIndex = 100
  } = options;
  const wrapperEl = null;
  function show() {
    const container = getContainer();
    container?.appendChild(wrapperEl);
    const MaskComp = h(_sfc_main$l, { background, zIndex });
    render(MaskComp, wrapperEl);
  }
  function hide() {
    render(null, wrapperEl);
    wrapperEl.parentNode?.removeChild(wrapperEl);
  }
  return {
    show,
    hide
  };
}
const _sfc_main$k = /* @__PURE__ */ defineComponent({
  __name: "UserDropdown",
  __ssrInlineRender: true,
  setup(__props) {
    const mask = useMask();
    return (_ctx, _push, _parent, _attrs) => {
      const _component_VDropdown = resolveComponent("VDropdown");
      const _component_AccountAvatar = _sfc_main$n$1;
      const _component_UserSwitcher = _sfc_main$5$1;
      _push(ssrRenderComponent(_component_VDropdown, mergeProps({
        distance: 0,
        placement: "top-start",
        strategy: "fixed",
        onApplyShow: ($event) => unref(mask).show(),
        onApplyHide: ($event) => unref(mask).hide()
      }, _attrs), {
        popper: withCtx(({ hide }, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_UserSwitcher, { onClick: hide }, null, _parent2, _scopeId));
          } else {
            return [
              createVNode(_component_UserSwitcher, { onClick: hide }, null, 8, ["onClick"])
            ];
          }
        }),
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<button btn-action-icon${ssrRenderAttr("aria-label", _ctx.$t("action.switch_account"))}${_scopeId}><div class="${ssrRenderClass({ "hidden xl:block": "currentUser" in _ctx ? _ctx.currentUser : unref(currentUser) })}" i-ri:more-2-line${_scopeId}></div>`);
            if ("currentUser" in _ctx ? _ctx.currentUser : unref(currentUser)) {
              _push2(ssrRenderComponent(_component_AccountAvatar, {
                "xl:hidden": "",
                account: ("currentUser" in _ctx ? _ctx.currentUser : unref(currentUser)).account,
                "w-9": "",
                "h-9": "",
                square: ""
              }, null, _parent2, _scopeId));
            } else {
              _push2(`<!---->`);
            }
            _push2(`</button>`);
          } else {
            return [
              createVNode("button", {
                "btn-action-icon": "",
                "aria-label": _ctx.$t("action.switch_account")
              }, [
                createVNode("div", {
                  class: { "hidden xl:block": "currentUser" in _ctx ? _ctx.currentUser : unref(currentUser) },
                  "i-ri:more-2-line": ""
                }, null, 2),
                ("currentUser" in _ctx ? _ctx.currentUser : unref(currentUser)) ? (openBlock(), createBlock(_component_AccountAvatar, {
                  key: 0,
                  "xl:hidden": "",
                  account: ("currentUser" in _ctx ? _ctx.currentUser : unref(currentUser)).account,
                  "w-9": "",
                  "h-9": "",
                  square: ""
                }, null, 8, ["account"])) : createCommentVNode("", true)
              ], 8, ["aria-label"])
            ];
          }
        }),
        _: 1
      }, _parent));
    };
  }
});
const _sfc_setup$k = _sfc_main$k.setup;
_sfc_main$k.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/user/UserDropdown.vue");
  return _sfc_setup$k ? _sfc_setup$k(props, ctx) : void 0;
};
const _sfc_main$j = /* @__PURE__ */ defineComponent({
  __name: "UserPicker",
  __ssrInlineRender: true,
  setup(__props) {
    const all = useUsers();
    const router = useRouter();
    function clickUser(user) {
      if (user.account.acct === currentUser.value?.account.acct)
        router.push(getAccountRoute(user.account));
      else
        switchUser(user);
    }
    return (_ctx, _push, _parent, _attrs) => {
      const _component_CommonTooltip = _sfc_main$i$1;
      const _component_AccountAvatar = _sfc_main$n$1;
      const _component_AccountDisplayName = _sfc_main$c$1;
      const _component_AccountHandle = _sfc_main$8$1;
      const _component_UserDropdown = _sfc_main$k;
      _push(`<div${ssrRenderAttrs(mergeProps({
        flex: "",
        "justify-start": "",
        "items-end": "",
        "px-2": "",
        "gap-5": ""
      }, _attrs))}><div flex="~ wrap-reverse" gap-5><!--[-->`);
      ssrRenderList(unref(all), (user) => {
        _push(ssrRenderComponent(_component_CommonTooltip, {
          distance: 8,
          delay: { show: 300, hide: 100 }
        }, {
          popper: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`<div text-center${_scopeId}><span text-4${_scopeId}>`);
              _push2(ssrRenderComponent(_component_AccountDisplayName, {
                account: user.account
              }, null, _parent2, _scopeId));
              _push2(`</span>`);
              _push2(ssrRenderComponent(_component_AccountHandle, {
                account: user.account
              }, null, _parent2, _scopeId));
              _push2(`</div>`);
            } else {
              return [
                createVNode("div", { "text-center": "" }, [
                  createVNode("span", { "text-4": "" }, [
                    createVNode(_component_AccountDisplayName, {
                      account: user.account
                    }, null, 8, ["account"])
                  ]),
                  createVNode(_component_AccountHandle, {
                    account: user.account
                  }, null, 8, ["account"])
                ])
              ];
            }
          }),
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`<button flex rounded cursor-pointer aria-label="Switch user" class="${ssrRenderClass(user.account.acct === ("currentUser" in _ctx ? _ctx.currentUser : unref(currentUser))?.account.acct ? "" : "op25 grayscale")}" hover="filter-none op100"${_scopeId}>`);
              _push2(ssrRenderComponent(_component_AccountAvatar, {
                "w-13": "",
                "h-13": "",
                account: user.account,
                square: ""
              }, null, _parent2, _scopeId));
              _push2(`</button>`);
            } else {
              return [
                createVNode("button", {
                  flex: "",
                  rounded: "",
                  "cursor-pointer": "",
                  "aria-label": "Switch user",
                  class: user.account.acct === ("currentUser" in _ctx ? _ctx.currentUser : unref(currentUser))?.account.acct ? "" : "op25 grayscale",
                  hover: "filter-none op100",
                  onClick: ($event) => clickUser(user)
                }, [
                  createVNode(_component_AccountAvatar, {
                    "w-13": "",
                    "h-13": "",
                    account: user.account,
                    square: ""
                  }, null, 8, ["account"])
                ], 10, ["onClick"])
              ];
            }
          }),
          _: 2
        }, _parent));
      });
      _push(`<!--]--></div><div flex items-center justify-center w-13 h-13>`);
      _push(ssrRenderComponent(_component_UserDropdown, null, null, _parent));
      _push(`</div></div>`);
    };
  }
});
const _sfc_setup$j = _sfc_main$j.setup;
_sfc_main$j.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/user/UserPicker.vue");
  return _sfc_setup$j ? _sfc_setup$j(props, ctx) : void 0;
};
const _sfc_main$i = /* @__PURE__ */ defineComponent({
  __name: "OfflineChecker",
  __ssrInlineRender: true,
  setup(__props) {
    const online = useOnline();
    return (_ctx, _push, _parent, _attrs) => {
      if (!unref(online)) {
        _push(`<div${ssrRenderAttrs(mergeProps({
          "w-full": "",
          "min-h-30px": "",
          px4: "",
          py3: "",
          "text-primary": "",
          "bg-base": "",
          border: "t base",
          flex: "~ gap-2 center"
        }, _attrs))}><div i-ri:wifi-off-line></div> ${ssrInterpolate(_ctx.$t("common.offline_desc"))}</div>`);
      } else {
        _push(`<!---->`);
      }
    };
  }
});
const _sfc_setup$i = _sfc_main$i.setup;
_sfc_main$i.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/common/OfflineChecker.vue");
  return _sfc_setup$i ? _sfc_setup$i(props, ctx) : void 0;
};
const _sfc_main$h = /* @__PURE__ */ defineComponent({
  __name: "NavBottomMoreMenu",
  __ssrInlineRender: true,
  props: {
    "modelValue": { type: Boolean, ...{ required: true } }
  },
  emits: ["update:modelValue"],
  setup(__props) {
    const modelValue = useModel(__props, "modelValue");
    const colorMode = useColorMode();
    const userSettings = useUserSettings();
    const drawerEl = ref();
    function toggleVisible() {
      modelValue.value = !modelValue.value;
    }
    const buttonEl = ref();
    function clickEvent(mouse) {
      if (mouse.target && !buttonEl.value?.children[0].contains(mouse.target)) {
        if (modelValue.value) {
          document.removeEventListener("click", clickEvent);
          modelValue.value = false;
        }
      }
    }
    watch(modelValue, (val) => {
      if (val && false)
        document.addEventListener("click", clickEvent);
    });
    const { dragging, dragDistance } = invoke(() => {
      const triggerDistance = 120;
      let scrollTop = 0;
      let beforeTouchPointY = 0;
      const dragDistance2 = ref(0);
      const dragging2 = ref(false);
      useEventListener(drawerEl, "scroll", (e) => {
        scrollTop = e.target.scrollTop;
        if (dragDistance2.value > 0)
          e.target.scrollTop = 0;
      }, { passive: true });
      useEventListener(drawerEl, "touchstart", (e) => {
        if (!modelValue.value)
          return;
        beforeTouchPointY = e.touches[0].pageY;
        dragDistance2.value = 0;
      }, { passive: true });
      useEventListener(drawerEl, "touchmove", (e) => {
        if (!modelValue.value)
          return;
        if (scrollTop > 0 && dragDistance2.value <= 0) {
          dragging2.value = false;
          beforeTouchPointY = e.touches[0].pageY;
          return;
        }
        const { pageY } = e.touches[0];
        dragDistance2.value += pageY - beforeTouchPointY;
        if (dragDistance2.value < 0)
          dragDistance2.value = 0;
        beforeTouchPointY = pageY;
        if (dragDistance2.value > 1)
          dragging2.value = true;
        if (dragDistance2.value > 0) {
          if (e?.cancelable && e?.preventDefault)
            e.preventDefault();
          e?.stopPropagation();
        }
      }, { passive: true });
      useEventListener(drawerEl, "touchend", () => {
        if (!modelValue.value)
          return;
        if (dragDistance2.value >= triggerDistance)
          modelValue.value = false;
        dragging2.value = false;
      }, { passive: true });
      return {
        dragDistance: dragDistance2,
        dragging: dragging2
      };
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NavSide = __nuxt_component_1;
      _push(`<div${ssrRenderAttrs(mergeProps({
        ref_key: "buttonEl",
        ref: buttonEl,
        flex: "",
        "items-center": "",
        static: ""
      }, _attrs))}>`);
      ssrRenderSlot(_ctx.$slots, "default", {
        toggleVisible,
        show: modelValue.value
      }, null, _push, _parent);
      _push(`<div style="${ssrRenderStyle(modelValue.value ? null : { display: "none" })}" absolute inset-x-0 top-auto bottom-full z-20 h-100vh flex items-end of-y-scroll of-x-hidden scrollbar-hide overscroll-none bg="black/50"><div absolute inset-0 opacity-0 h="[calc(100vh+0.5px)]"></div><div style="${ssrRenderStyle({
        transform: unref(dragging) ? `translateY(${unref(dragDistance)}px)` : ""
      })}" class="${ssrRenderClass({
        "duration-0": unref(dragging),
        "duration-250": !unref(dragging)
      })}" transition="transform ease-in" flex-1 min-w-48 py-6 mb="-1px" of-y-auto scrollbar-hide overscroll-none max-h="[calc(100vh-200px)]" rounded-t-lg bg="white/85 dark:neutral-900/85" backdrop-filter backdrop-blur-md border-t-1 border-base>`);
      _push(ssrRenderComponent(_component_NavSide, null, null, _parent));
      _push(`<div border="neutral-300 dark:neutral-700 t-1" m="x-3 y-2"></div><div flex="~ col gap2"><button flex flex-row items-center block px-5 py-2 focus-blue w-full text-sm text-base capitalize text-left whitespace-nowrap transition-colors duration-200 transform hover="bg-gray-100 dark:bg-gray-700 dark:text-white"><span class="i-ri:sun-line dark:i-ri:moon-line flex-shrink-0 text-xl me-4 !align-middle"></span> ${ssrInterpolate(unref(colorMode).value === "light" ? _ctx.$t("menu.toggle_theme.dark") : _ctx.$t("menu.toggle_theme.light"))}</button><button flex flex-row items-center block px-5 py-2 focus-blue w-full text-sm text-base capitalize text-left whitespace-nowrap transition-colors duration-200 transform hover="bg-gray-100 dark:bg-gray-700 dark:text-white"${ssrRenderAttr("aria-label", _ctx.$t("nav.zen_mode"))}><span class="${ssrRenderClass([("getPreferences" in _ctx ? _ctx.getPreferences : unref(getPreferences))(unref(userSettings), "zenMode") ? "i-ri:layout-right-2-line" : "i-ri:layout-right-line", "flex-shrink-0 text-xl me-4 !align-middle"])}"></span> ${ssrInterpolate(_ctx.$t("nav.zen_mode"))}</button></div></div></div></div>`);
    };
  }
});
const _sfc_setup$h = _sfc_main$h.setup;
_sfc_main$h.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/nav/NavBottomMoreMenu.vue");
  return _sfc_setup$h ? _sfc_setup$h(props, ctx) : void 0;
};
const _sfc_main$g = /* @__PURE__ */ defineComponent({
  __name: "NavBottom",
  __ssrInlineRender: true,
  setup(__props) {
    const moreMenuVisible = ref(false);
    const { notifications } = useNotifications();
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NuxtLink = __nuxt_component_0$1;
      const _component_NavBottomMoreMenu = _sfc_main$h;
      _push(`<nav${ssrRenderAttrs(mergeProps({
        "h-14": "",
        border: "t base",
        flex: "",
        "flex-row": "",
        "text-xl": "",
        "of-y-scroll": "",
        "scrollbar-hide": "",
        "overscroll-none": "",
        class: "after-content-empty after:h-[calc(100%+0.5px)] after:w-0.1px after:pointer-events-none"
      }, _attrs))}>`);
      if ("currentUser" in _ctx ? _ctx.currentUser : unref(currentUser)) {
        _push(`<!--[-->`);
        _push(ssrRenderComponent(_component_NuxtLink, {
          to: "/home",
          "aria-label": _ctx.$t("nav.home"),
          "active-class": unref(moreMenuVisible) ? "" : "text-primary",
          flex: "",
          "flex-row": "",
          "items-center": "",
          "place-content-center": "",
          "h-full": "",
          "flex-1": "",
          class: "coarse-pointer:select-none",
          onClick: _ctx.$scrollToTop
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`<div i-ri:home-5-line${_scopeId}></div>`);
            } else {
              return [
                createVNode("div", { "i-ri:home-5-line": "" })
              ];
            }
          }),
          _: 1
        }, _parent));
        _push(ssrRenderComponent(_component_NuxtLink, {
          to: "/search",
          "aria-label": _ctx.$t("nav.search"),
          "active-class": unref(moreMenuVisible) ? "" : "text-primary",
          flex: "",
          "flex-row": "",
          "items-center": "",
          "place-content-center": "",
          "h-full": "",
          "flex-1": "",
          class: "coarse-pointer:select-none",
          onClick: _ctx.$scrollToTop
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`<div i-ri:search-line${_scopeId}></div>`);
            } else {
              return [
                createVNode("div", { "i-ri:search-line": "" })
              ];
            }
          }),
          _: 1
        }, _parent));
        _push(ssrRenderComponent(_component_NuxtLink, {
          to: "/notifications",
          "aria-label": _ctx.$t("nav.notifications"),
          "active-class": unref(moreMenuVisible) ? "" : "text-primary",
          flex: "",
          "flex-row": "",
          "items-center": "",
          "place-content-center": "",
          "h-full": "",
          "flex-1": "",
          class: "coarse-pointer:select-none",
          onClick: _ctx.$scrollToTop
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`<div flex relative${_scopeId}><div class="i-ri:notification-4-line" text-xl${_scopeId}></div>`);
              if (unref(notifications)) {
                _push2(`<div class="top-[-0.3rem] right-[-0.3rem]" absolute font-bold rounded-full h-4 w-4 text-xs bg-primary text-inverted flex items-center justify-center${_scopeId}>${ssrInterpolate(unref(notifications) < 10 ? unref(notifications) : "\u2022")}</div>`);
              } else {
                _push2(`<!---->`);
              }
              _push2(`</div>`);
            } else {
              return [
                createVNode("div", {
                  flex: "",
                  relative: ""
                }, [
                  createVNode("div", {
                    class: "i-ri:notification-4-line",
                    "text-xl": ""
                  }),
                  unref(notifications) ? (openBlock(), createBlock("div", {
                    key: 0,
                    class: "top-[-0.3rem] right-[-0.3rem]",
                    absolute: "",
                    "font-bold": "",
                    "rounded-full": "",
                    "h-4": "",
                    "w-4": "",
                    "text-xs": "",
                    "bg-primary": "",
                    "text-inverted": "",
                    flex: "",
                    "items-center": "",
                    "justify-center": ""
                  }, toDisplayString(unref(notifications) < 10 ? unref(notifications) : "\u2022"), 1)) : createCommentVNode("", true)
                ])
              ];
            }
          }),
          _: 1
        }, _parent));
        _push(ssrRenderComponent(_component_NuxtLink, {
          to: "/conversations",
          "aria-label": _ctx.$t("nav.conversations"),
          "active-class": unref(moreMenuVisible) ? "" : "text-primary",
          flex: "",
          "flex-row": "",
          "items-center": "",
          "place-content-center": "",
          "h-full": "",
          "flex-1": "",
          class: "coarse-pointer:select-none",
          onClick: _ctx.$scrollToTop
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`<div i-ri:at-line${_scopeId}></div>`);
            } else {
              return [
                createVNode("div", { "i-ri:at-line": "" })
              ];
            }
          }),
          _: 1
        }, _parent));
        _push(`<!--]-->`);
      } else {
        _push(`<!--[-->`);
        _push(ssrRenderComponent(_component_NuxtLink, {
          to: "/explore",
          "aria-label": _ctx.$t("nav.explore"),
          "active-class": unref(moreMenuVisible) ? "" : "text-primary",
          flex: "",
          "flex-row": "",
          "items-center": "",
          "place-content-center": "",
          "h-full": "",
          "flex-1": "",
          class: "coarse-pointer:select-none",
          onClick: _ctx.$scrollToTop
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`<div i-ri:hashtag${_scopeId}></div>`);
            } else {
              return [
                createVNode("div", { "i-ri:hashtag": "" })
              ];
            }
          }),
          _: 1
        }, _parent));
        _push(ssrRenderComponent(_component_NuxtLink, {
          group: "",
          to: "/public/local",
          "aria-label": _ctx.$t("nav.local"),
          "active-class": unref(moreMenuVisible) ? "" : "text-primary",
          flex: "",
          "flex-row": "",
          "items-center": "",
          "place-content-center": "",
          "h-full": "",
          "flex-1": "",
          class: "coarse-pointer:select-none",
          onClick: _ctx.$scrollToTop
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`<div i-ri:group-2-line${_scopeId}></div>`);
            } else {
              return [
                createVNode("div", { "i-ri:group-2-line": "" })
              ];
            }
          }),
          _: 1
        }, _parent));
        _push(ssrRenderComponent(_component_NuxtLink, {
          to: "/public",
          "aria-label": _ctx.$t("nav.federated"),
          "active-class": unref(moreMenuVisible) ? "" : "text-primary",
          flex: "",
          "flex-row": "",
          "items-center": "",
          "place-content-center": "",
          "h-full": "",
          "flex-1": "",
          class: "coarse-pointer:select-none",
          onClick: _ctx.$scrollToTop
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`<div i-ri:earth-line${_scopeId}></div>`);
            } else {
              return [
                createVNode("div", { "i-ri:earth-line": "" })
              ];
            }
          }),
          _: 1
        }, _parent));
        _push(`<!--]-->`);
      }
      _push(ssrRenderComponent(_component_NavBottomMoreMenu, {
        modelValue: unref(moreMenuVisible),
        "onUpdate:modelValue": ($event) => isRef(moreMenuVisible) ? moreMenuVisible.value = $event : null,
        flex: "",
        "flex-row": "",
        "items-center": "",
        "place-content-center": "",
        "h-full": "",
        "flex-1": "",
        "cursor-pointer": ""
      }, {
        default: withCtx(({ toggleVisible, show }, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<button flex items-center place-content-center h-full flex-1 class="${ssrRenderClass([show ? "!text-primary" : "", "select-none"])}" aria-label="More menu"${_scopeId}><span class="${ssrRenderClass(show ? "i-ri:close-fill" : "i-ri:more-fill")}"${_scopeId}></span></button>`);
          } else {
            return [
              createVNode("button", {
                flex: "",
                "items-center": "",
                "place-content-center": "",
                "h-full": "",
                "flex-1": "",
                class: ["select-none", show ? "!text-primary" : ""],
                "aria-label": "More menu",
                onClick: toggleVisible
              }, [
                createVNode("span", {
                  class: show ? "i-ri:close-fill" : "i-ri:more-fill"
                }, null, 2)
              ], 10, ["onClick"])
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</nav>`);
    };
  }
});
const _sfc_setup$g = _sfc_main$g.setup;
_sfc_main$g.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/nav/NavBottom.vue");
  return _sfc_setup$g ? _sfc_setup$g(props, ctx) : void 0;
};
const _sfc_main$f = /* @__PURE__ */ defineComponent({
  __name: "NavFooter",
  __ssrInlineRender: true,
  setup(__props) {
    const buildInfo = useBuildInfo();
    const timeAgoOptions = useTimeAgoOptions();
    const userSettings = useUserSettings();
    const buildTimeDate = new Date(buildInfo.time);
    const buildTimeAgo = useTimeAgo(buildTimeDate, timeAgoOptions);
    const colorMode = useColorMode();
    function toggleDark() {
      colorMode.preference = colorMode.value === "dark" ? "light" : "dark";
    }
    return (_ctx, _push, _parent, _attrs) => {
      const _component_CommonTooltip = _sfc_main$i$1;
      const _component_i18n_t = resolveComponent("i18n-t");
      const _component_NuxtLink = __nuxt_component_0$1;
      _push(`<footer${ssrRenderAttrs(mergeProps({
        p4: "",
        "text-sm": "",
        "text-secondary-light": "",
        flex: "~ col"
      }, _attrs))}><div flex="~ gap2" items-center mb4>`);
      _push(ssrRenderComponent(_component_CommonTooltip, {
        content: _ctx.$t("nav.toggle_theme")
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<button flex i-ri:sun-line dark-i-ri:moon-line text-lg${ssrRenderAttr("aria-label", _ctx.$t("nav.toggle_theme"))}${_scopeId}></button>`);
          } else {
            return [
              createVNode("button", {
                flex: "",
                "i-ri:sun-line": "",
                "dark-i-ri:moon-line": "",
                "text-lg": "",
                "aria-label": _ctx.$t("nav.toggle_theme"),
                onClick: ($event) => toggleDark()
              }, null, 8, ["aria-label", "onClick"])
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_component_CommonTooltip, {
        content: _ctx.$t("nav.zen_mode")
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<button flex text-lg class="${ssrRenderClass(("getPreferences" in _ctx ? _ctx.getPreferences : unref(getPreferences))(unref(userSettings), "zenMode") ? "i-ri:layout-right-2-line" : "i-ri:layout-right-line")}"${ssrRenderAttr("aria-label", _ctx.$t("nav.zen_mode"))}${_scopeId}></button>`);
          } else {
            return [
              createVNode("button", {
                flex: "",
                "text-lg": "",
                class: ("getPreferences" in _ctx ? _ctx.getPreferences : unref(getPreferences))(unref(userSettings), "zenMode") ? "i-ri:layout-right-2-line" : "i-ri:layout-right-line",
                "aria-label": _ctx.$t("nav.zen_mode"),
                onClick: ($event) => ("togglePreferences" in _ctx ? _ctx.togglePreferences : unref(togglePreferences))("zenMode")
              }, null, 10, ["aria-label", "onClick"])
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div><div>`);
      if ("isHydrated" in _ctx ? _ctx.isHydrated : unref(isHydrated)) {
        _push(ssrRenderComponent(_component_i18n_t, { keypath: "nav.built_at" }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`<time${ssrRenderAttr("datetime", String(unref(buildTimeDate)))}${ssrRenderAttr("title", _ctx.$d(unref(buildTimeDate), "long"))}${_scopeId}>${ssrInterpolate(unref(buildTimeAgo))}</time>`);
            } else {
              return [
                createVNode("time", {
                  datetime: String(unref(buildTimeDate)),
                  title: _ctx.$d(unref(buildTimeDate), "long")
                }, toDisplayString(unref(buildTimeAgo)), 9, ["datetime", "title"])
              ];
            }
          }),
          _: 1
        }, _parent));
      } else {
        _push(`<span>${ssrInterpolate(_ctx.$t("nav.built_at", [_ctx.$d(unref(buildTimeDate), "shortDate")]))}</span>`);
      }
      _push(` \xB7 `);
      if (unref(buildInfo).env === "release") {
        _push(ssrRenderComponent(_component_NuxtLink, {
          external: "",
          href: `https://github.com/elk-zone/elk/releases/tag/v${unref(buildInfo).version}`,
          target: "_blank",
          "font-mono": ""
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(` v${ssrInterpolate(unref(buildInfo).version)}`);
            } else {
              return [
                createTextVNode(" v" + toDisplayString(unref(buildInfo).version), 1)
              ];
            }
          }),
          _: 1
        }, _parent));
      } else {
        _push(`<span>${ssrInterpolate(unref(buildInfo).env)}</span>`);
      }
      if (unref(buildInfo).commit && unref(buildInfo).branch !== "release") {
        _push(`<!--[--> \xB7 `);
        _push(ssrRenderComponent(_component_NuxtLink, {
          external: "",
          href: `https://github.com/elk-zone/elk/commit/${unref(buildInfo).commit}`,
          target: "_blank",
          "font-mono": ""
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`${ssrInterpolate(unref(buildInfo).shortCommit)}`);
            } else {
              return [
                createTextVNode(toDisplayString(unref(buildInfo).shortCommit), 1)
              ];
            }
          }),
          _: 1
        }, _parent));
        _push(`<!--]-->`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div></footer>`);
    };
  }
});
const _sfc_setup$f = _sfc_main$f.setup;
_sfc_main$f.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/nav/NavFooter.vue");
  return _sfc_setup$f ? _sfc_setup$f(props, ctx) : void 0;
};
const _sfc_main$e = /* @__PURE__ */ defineComponent({
  __name: "UserSignIn",
  __ssrInlineRender: true,
  setup(__props) {
    const input = ref();
    ref([]);
    let autocompleteIndex = ref(0);
    let autocompleteShow = ref(false);
    const { busy, error, displayError, server, oauth } = useSignIn(input);
    let fuse = shallowRef(new proxy([]));
    const filteredServers = computed(() => {
      if (!server.value)
        return [];
      const results = fuse.value.search(server.value, { limit: 6 }).map((result) => result.item);
      if (results[0] === server.value)
        return [];
      return results;
    });
    function toSelector(server2) {
      return server2.replace(/[^\w-]/g, "-");
    }
    onClickOutside(input, () => {
      autocompleteShow.value = false;
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_i18n_t = resolveComponent("i18n-t");
      const _component_NuxtLink = __nuxt_component_0$1;
      _push(`<form${ssrRenderAttrs(mergeProps({
        "text-center": "",
        "justify-center": "",
        "items-center": "",
        "max-w-150": "",
        py6: "",
        flex: "~ col gap-3"
      }, _attrs))}><div flex="~ center" items-end mb2 gap-x-2><img${ssrRenderAttr("src", `/${""}logo.svg`)} w-12 h-12 mxa height="48" width="48"${ssrRenderAttr("alt", _ctx.$t("app_logo"))} class="rtl-flip"><div text-3xl>${ssrInterpolate(_ctx.$t("action.sign_in"))}</div></div><div>${ssrInterpolate(_ctx.$t("user.server_address_label"))}</div><div class="${ssrRenderClass(unref(error) ? "animate animate-shake-x animate-delay-100" : null)}"><div dir="ltr" flex bg-gray:10 px4 py2 mxa rounded border="~ base" items-center font-mono focus:outline-none focus:ring="2 primary inset" relative class="${ssrRenderClass(unref(displayError) ? "border-red-600 dark:border-red-400" : null)}"><span text-secondary-light me1>https://</span><input${ssrRenderAttr("value", unref(server))} autocapitalize="off" inputmode="url" outline-none bg-transparent w-full max-w-50 spellcheck="false" autocorrect="off" autocomplete="off">`);
      if (unref(autocompleteShow) && filteredServers.value.length) {
        _push(`<div absolute left-6em right-0 top="100%" bg-base rounded border="~ base" z-10 shadow of-auto overflow-y-auto class="max-h-[8rem]"><!--[-->`);
        ssrRenderList(filteredServers.value, (name, idx) => {
          _push(`<button${ssrRenderAttr("id", toSelector(name))}${ssrRenderAttr("value", name)} px-2 py1 font-mono w-full text-left class="${ssrRenderClass(unref(autocompleteIndex) === idx ? "text-primary font-bold" : null)}">${ssrInterpolate(name)}</button>`);
        });
        _push(`<!--]--></div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div><div min-h-4>`);
      if (unref(displayError)) {
        _push(`<p role="alert" p-0 m-0 text-xs text-red-600 dark:text-red-400>${ssrInterpolate(_ctx.$t("error.sign_in_error"))}</p>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div></div><div text-secondary text-sm flex><div i-ri:lightbulb-line me-1></div><span>`);
      _push(ssrRenderComponent(_component_i18n_t, { keypath: "user.tip_no_account" }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_NuxtLink, {
              href: "https://joinmastodon.org/servers",
              target: "_blank",
              external: "",
              class: "text-primary",
              hover: "underline"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`${ssrInterpolate(_ctx.$t("user.tip_register_account"))}`);
                } else {
                  return [
                    createTextVNode(toDisplayString(_ctx.$t("user.tip_register_account")), 1)
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
          } else {
            return [
              createVNode(_component_NuxtLink, {
                href: "https://joinmastodon.org/servers",
                target: "_blank",
                external: "",
                class: "text-primary",
                hover: "underline"
              }, {
                default: withCtx(() => [
                  createTextVNode(toDisplayString(_ctx.$t("user.tip_register_account")), 1)
                ]),
                _: 1
              })
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</span></div><button flex="~ row" gap-x-2 items-center btn-solid mt2${ssrIncludeBooleanAttr(!unref(server) || unref(busy)) ? " disabled" : ""}>`);
      if (unref(busy)) {
        _push(`<span aria-hidden="true" block animate animate-spin preserve-3d class="rtl-flip"><span block i-ri:loader-2-fill aria-hidden="true"></span></span>`);
      } else {
        _push(`<span aria-hidden="true" block i-ri:login-circle-line class="rtl-flip"></span>`);
      }
      _push(` ${ssrInterpolate(_ctx.$t("action.sign_in"))}</button></form>`);
    };
  }
});
const _sfc_setup$e = _sfc_main$e.setup;
_sfc_main$e.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/user/UserSignIn.vue");
  return _sfc_setup$e ? _sfc_setup$e(props, ctx) : void 0;
};
const _sfc_main$d = /* @__PURE__ */ defineComponent({
  __name: "HelpPreview",
  __ssrInlineRender: true,
  emits: ["close"],
  setup(__props, { emit }) {
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NuxtLink = __nuxt_component_0$1;
      _push(`<div${ssrRenderAttrs(mergeProps({
        "my-8": "",
        "px-3": "",
        "sm:px-8": "",
        "md:max-w-200": "",
        flex: "~ col gap-4",
        relative: ""
      }, _attrs))}><button btn-action-icon absolute top--8 right-0 m1 aria-label="Close"><div i-ri:close-line></div></button><img${ssrRenderAttr("alt", _ctx.$t("app_logo"))}${ssrRenderAttr("src", `/${""}logo.svg`)} w-20 h-20 height="80" width="80" mxa class="rtl-flip"><h1 mxa text-4xl mb4>${ssrInterpolate(_ctx.$t("help.title"))}</h1><p>${ssrInterpolate(_ctx.$t("help.desc_para1"))}</p><p><b text-primary>${ssrInterpolate(_ctx.$t("help.desc_highlight"))}</b> ${ssrInterpolate(_ctx.$t("help.desc_para2"))}</p><p>${ssrInterpolate(_ctx.$t("help.desc_para4"))} `);
      _push(ssrRenderComponent(_component_NuxtLink, {
        "font-bold": "",
        "text-primary": "",
        href: "https://github.com/elk-zone/elk",
        target: "_blank"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`${ssrInterpolate(_ctx.$t("help.desc_para5"))}`);
          } else {
            return [
              createTextVNode(toDisplayString(_ctx.$t("help.desc_para5")), 1)
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(` ${ssrInterpolate(_ctx.$t("help.desc_para6"))}</p> ${ssrInterpolate(_ctx.$t("help.desc_para3"))} <p flex="~ gap-2 wrap" mxa><!--[-->`);
      ssrRenderList("elkTeamMembers" in _ctx ? _ctx.elkTeamMembers : unref(elkTeamMembers), (team) => {
        _push(ssrRenderComponent(_component_NuxtLink, {
          href: `https://github.com/sponsors/${team.github}`,
          target: "_blank",
          external: "",
          "rounded-full": "",
          transition: "",
          "duration-300": "",
          border: "~ transparent",
          hover: "scale-105 border-primary"
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`<img${ssrRenderAttr("src", `/avatars/${team.github}-100x100.png`)}${ssrRenderAttr("alt", team.display)} rounded-full w-15 h-15 height="60" width="60"${_scopeId}>`);
            } else {
              return [
                createVNode("img", {
                  src: `/avatars/${team.github}-100x100.png`,
                  alt: team.display,
                  "rounded-full": "",
                  "w-15": "",
                  "h-15": "",
                  height: "60",
                  width: "60"
                }, null, 8, ["src", "alt"])
              ];
            }
          }),
          _: 2
        }, _parent));
      });
      _push(`<!--]--></p><p italic flex justify-center w-full>`);
      _push(ssrRenderComponent(_component_NuxtLink, {
        href: "https://github.com/sponsors/elk-zone",
        target: "_blank"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<span text-xl font-script hover:text-primary transition duration-300${_scopeId}>${ssrInterpolate(_ctx.$t("help.footer_team"))}</span>`);
          } else {
            return [
              createVNode("span", {
                "text-xl": "",
                "font-script": "",
                "hover:text-primary": "",
                transition: "",
                "duration-300": ""
              }, toDisplayString(_ctx.$t("help.footer_team")), 1)
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</p><button btn-solid mxa tabindex="2">${ssrInterpolate(_ctx.$t("action.enter_app"))}</button></div>`);
    };
  }
});
const _sfc_setup$d = _sfc_main$d.setup;
_sfc_main$d.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/help/HelpPreview.vue");
  return _sfc_setup$d ? _sfc_setup$d(props, ctx) : void 0;
};
({
  ...number,
  transform: Math.round
});
const transformAxes = ["", "X", "Y", "Z"];
const order = ["perspective", "translate", "scale", "rotate", "skew"];
const transformProps = ["transformPerspective", "x", "y", "z"];
order.forEach((operationKey) => {
  transformAxes.forEach((axesKey) => {
    const key = operationKey + axesKey;
    transformProps.push(key);
  });
});
new Set(transformProps);
const slideGap = 20;
const doubleTapTreshold = 250;
const _sfc_main$c = /* @__PURE__ */ defineComponent({
  __name: "ModalMediaPreviewCarousel",
  __ssrInlineRender: true,
  props: mergeModels({
    media: { default: [] }
  }, {
    "modelValue": { required: true }
  }),
  emits: mergeModels(["close"], ["update:modelValue"]),
  setup(__props, { emit }) {
    const modelValue = useModel(__props, "modelValue");
    const view = ref();
    ref();
    const slide = ref();
    const image = ref();
    const reduceMotion = ref(false);
    const isInitialScrollDone = useTimeout(350);
    const canAnimate = computed(() => isInitialScrollDone.value && !reduceMotion.value);
    const scale = ref(1);
    const x = ref(0);
    const y = ref(0);
    const isDragging = ref(false);
    const isPinching = ref(false);
    const maxZoomOut = ref(1);
    const isZoomedIn = computed(() => scale.value > 1);
    function goToFocusedSlide() {
      scale.value = 1;
      x.value = slide.value[modelValue.value].offsetLeft * scale.value;
      y.value = 0;
    }
    watch(modelValue, goToFocusedSlide);
    let lastOrigin = [0, 0];
    let initialScale = 0;
    useGesture({
      onPinch({ first, initial: [initialDistance], movement: [deltaDistance], da: [distance], origin, touches }) {
        isPinching.value = true;
        if (first) {
          initialScale = scale.value;
        } else {
          if (touches === 0)
            handleMouseWheelZoom(initialScale, deltaDistance, origin);
          else
            handlePinchZoom(initialScale, initialDistance, distance, origin);
        }
        lastOrigin = origin;
      },
      onPinchEnd() {
        isPinching.value = false;
        isDragging.value = false;
        if (!isZoomedIn.value)
          goToFocusedSlide();
      },
      onDrag({ movement, delta, pinching, tap, last, swipe, event, xy }) {
        event.preventDefault();
        if (pinching)
          return;
        if (last)
          handleLastDrag(tap, swipe, movement, xy);
        else
          handleDrag(delta, movement);
      }
    }, {
      domTarget: view,
      eventOptions: {
        passive: false
      }
    });
    const shiftRestrictions = computed(() => {
      const focusedImage = image.value[modelValue.value];
      const focusedSlide = slide.value[modelValue.value];
      const scaledImageWidth = focusedImage.offsetWidth * scale.value;
      const scaledHorizontalOverflow = scaledImageWidth / 2 - view.value.clientWidth / 2 + slideGap;
      const horizontalOverflow = Math.max(0, scaledHorizontalOverflow / scale.value);
      const scaledImageHeight = focusedImage.offsetHeight * scale.value;
      const scaledVerticalOverflow = scaledImageHeight / 2 - view.value.clientHeight / 2 + slideGap;
      const verticalOverflow = Math.max(0, scaledVerticalOverflow / scale.value);
      return {
        left: focusedSlide.offsetLeft - horizontalOverflow,
        right: focusedSlide.offsetLeft + horizontalOverflow,
        top: focusedSlide.offsetTop - verticalOverflow,
        bottom: focusedSlide.offsetTop + verticalOverflow
      };
    });
    function handlePinchZoom(initialScale2, initialDistance, distance, [originX, originY]) {
      scale.value = initialScale2 * (distance / initialDistance);
      scale.value = Math.max(maxZoomOut.value, scale.value);
      const deltaCenterX = originX - lastOrigin[0];
      const deltaCenterY = originY - lastOrigin[1];
      handleZoomDrag([deltaCenterX, deltaCenterY]);
    }
    function handleMouseWheelZoom(initialScale2, deltaDistance, [originX, originY]) {
      scale.value = initialScale2 + deltaDistance / 1e3;
      scale.value = Math.max(maxZoomOut.value, scale.value);
      const deltaCenterX = lastOrigin[0] - originX;
      const deltaCenterY = lastOrigin[1] - originY;
      handleZoomDrag([deltaCenterX, deltaCenterY]);
    }
    function handleLastDrag(tap, swipe, movement, position) {
      isDragging.value = false;
      if (tap)
        handleTap(position);
      else if (swipe[0] || swipe[1])
        handleSwipe(swipe, movement);
      else if (!isZoomedIn.value)
        slideToClosestSlide();
    }
    let lastTapAt = 0;
    function handleTap([positionX, positionY]) {
      const now = Date.now();
      const isDoubleTap = now - lastTapAt < doubleTapTreshold;
      lastTapAt = now;
      if (!isDoubleTap)
        return;
      if (isZoomedIn.value) {
        goToFocusedSlide();
      } else {
        const focusedSlideBounding = slide.value[modelValue.value].getBoundingClientRect();
        const slideCenterX = focusedSlideBounding.left + focusedSlideBounding.width / 2;
        const slideCenterY = focusedSlideBounding.top + focusedSlideBounding.height / 2;
        scale.value = 3;
        x.value += positionX - slideCenterX;
        y.value += positionY - slideCenterY;
        restrictShiftToInsideSlide();
      }
    }
    function handleSwipe([horiz, vert], [movementX, movementY]) {
      if (isZoomedIn.value || isPinching.value)
        return;
      const isHorizontalDrag = Math.abs(movementX) >= Math.abs(movementY);
      if (isHorizontalDrag) {
        if (horiz === 1)
          modelValue.value = Math.max(0, modelValue.value - 1);
        if (horiz === -1)
          modelValue.value = Math.min(__props.media.length - 1, modelValue.value + 1);
      } else if (vert === 1 || vert === -1) {
        emit("close");
      }
      goToFocusedSlide();
    }
    function slideToClosestSlide() {
      const startOfFocusedSlide = slide.value[modelValue.value].offsetLeft * scale.value;
      const slideWidth = slide.value[modelValue.value].offsetWidth * scale.value;
      if (x.value > startOfFocusedSlide + slideWidth / 2)
        modelValue.value = Math.min(__props.media.length - 1, modelValue.value + 1);
      else if (x.value < startOfFocusedSlide - slideWidth / 2)
        modelValue.value = Math.max(0, modelValue.value - 1);
      goToFocusedSlide();
    }
    function handleDrag(delta, movement) {
      isDragging.value = true;
      if (isZoomedIn.value)
        handleZoomDrag(delta);
      else
        handleSlideDrag(movement);
    }
    function handleZoomDrag([deltaX, deltaY]) {
      x.value -= deltaX / scale.value;
      y.value -= deltaY / scale.value;
      restrictShiftToInsideSlide();
    }
    function handleSlideDrag([movementX, movementY]) {
      goToFocusedSlide();
      if (Math.abs(movementY) > Math.abs(movementX))
        y.value -= movementY / scale.value;
      else
        x.value -= movementX / scale.value;
      if (__props.media.length === 1)
        x.value = 0;
    }
    function restrictShiftToInsideSlide() {
      x.value = Math.min(shiftRestrictions.value.right, Math.max(shiftRestrictions.value.left, x.value));
      y.value = Math.min(shiftRestrictions.value.bottom, Math.max(shiftRestrictions.value.top, y.value));
    }
    const sliderStyle = computed(() => {
      const style = {
        transform: `scale(${scale.value}) translate(${-x.value}px, ${-y.value}px)`,
        transition: "none",
        gap: `${slideGap}px`
      };
      if (canAnimate.value && !isDragging.value && !isPinching.value)
        style.transition = "all 0.3s ease";
      return style;
    });
    const imageStyle = computed(() => ({
      cursor: isDragging.value ? "grabbing" : "grab"
    }));
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({
        ref_key: "view",
        ref: view,
        flex: "",
        "flex-row": "",
        "h-full": "",
        "w-full": "",
        "overflow-hidden": ""
      }, _attrs))}><div style="${ssrRenderStyle(unref(sliderStyle))}" w-full h-full flex items-center><!--[-->`);
      ssrRenderList(_ctx.media, (item) => {
        _push(`<div flex-shrink-0 w-full h-full flex items-center justify-center><img select-none max-w-full max-h-full style="${ssrRenderStyle(unref(imageStyle))}"${ssrRenderAttr("draggable", false)}${ssrRenderAttr("src", item.url || item.previewUrl)}${ssrRenderAttr("alt", item.description || "")}></div>`);
      });
      _push(`<!--]--></div></div>`);
    };
  }
});
const _sfc_setup$c = _sfc_main$c.setup;
_sfc_main$c.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/modal/ModalMediaPreviewCarousel.vue");
  return _sfc_setup$c ? _sfc_setup$c(props, ctx) : void 0;
};
const _sfc_main$b = /* @__PURE__ */ defineComponent({
  __name: "ModalMediaPreview",
  __ssrInlineRender: true,
  emits: ["close"],
  setup(__props, { emit }) {
    const locked = useScrollLock(document.body);
    const index = mediaPreviewIndex;
    const current = computed(() => mediaPreviewList.value[mediaPreviewIndex.value]);
    const hasNext = computed(() => index.value < mediaPreviewList.value.length - 1);
    const hasPrev = computed(() => index.value > 0);
    const keys = useMagicKeys();
    whenever(keys.arrowLeft, prev);
    whenever(keys.arrowRight, next);
    function next() {
      if (hasNext.value)
        index.value++;
    }
    function prev() {
      if (hasPrev.value)
        index.value--;
    }
    onUnmounted(() => locked.value = false);
    return (_ctx, _push, _parent, _attrs) => {
      const _component_ModalMediaPreviewCarousel = _sfc_main$c;
      _push(`<div${ssrRenderAttrs(mergeProps({
        relative: "",
        "h-full": "",
        "w-full": "",
        flex: "",
        "pt-12": "",
        "w-100vh": ""
      }, _attrs))}>`);
      if (unref(hasNext)) {
        _push(`<button pointer-events-auto btn-action-icon bg="black/20"${ssrRenderAttr("aria-label", _ctx.$t("action.previous"))} hover:bg="black/40" dark:bg="white/30" dark-hover:bg="white/20" absolute top="1/2" right-1 z5${ssrRenderAttr("title", _ctx.$t("action.next"))}><div i-ri:arrow-right-s-line text-white></div></button>`);
      } else {
        _push(`<!---->`);
      }
      if (unref(hasPrev)) {
        _push(`<button pointer-events-auto btn-action-icon bg="black/20" aria-label="action.next" hover:bg="black/40" dark:bg="white/30" dark:hover-bg="white/20" absolute top="1/2" left-1 z5${ssrRenderAttr("title", _ctx.$t("action.prev"))}><div i-ri:arrow-left-s-line text-white></div></button>`);
      } else {
        _push(`<!---->`);
      }
      _push(`<div flex="~ col center" h-full w-full>`);
      _push(ssrRenderComponent(_component_ModalMediaPreviewCarousel, {
        modelValue: unref(index),
        "onUpdate:modelValue": ($event) => isRef(index) ? index.value = $event : null,
        media: "mediaPreviewList" in _ctx ? _ctx.mediaPreviewList : unref(mediaPreviewList),
        onClose: ($event) => emit("close")
      }, null, _parent));
      _push(`<div bg="black/30" dark:bg="white/10" mb-6 mt-4 text-white rounded-full flex="~ center shrink-0" overflow-hidden>`);
      if (("mediaPreviewList" in _ctx ? _ctx.mediaPreviewList : unref(mediaPreviewList)).length > 1) {
        _push(`<div p="y-1 x-3" rounded-r-0 shrink-0>${ssrInterpolate(unref(index) + 1)} / ${ssrInterpolate(("mediaPreviewList" in _ctx ? _ctx.mediaPreviewList : unref(mediaPreviewList)).length)}</div>`);
      } else {
        _push(`<!---->`);
      }
      if (unref(current).description) {
        _push(`<p bg="dark/30" dark:bg="white/10" p="y-1 x-3" rounded-ie-full line-clamp-1 ws-pre-wrap break-all${ssrRenderAttr("title", unref(current).description)} w-full>${ssrInterpolate(unref(current).description)}</p>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div></div><div absolute top-0 w-full flex justify-end><button btn-action-icon bg="black/30" aria-label="action.close" hover:bg="black/40" dark:bg="white/30" dark:hover-bg="white/20" pointer-events-auto shrink-0><div i-ri:close-line text-white></div></button></div></div>`);
    };
  }
});
const _sfc_setup$b = _sfc_main$b.setup;
_sfc_main$b.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/modal/ModalMediaPreview.vue");
  return _sfc_setup$b ? _sfc_setup$b(props, ctx) : void 0;
};
const _sfc_main$a = /* @__PURE__ */ defineComponent({
  __name: "StatusEditPreview",
  __ssrInlineRender: true,
  props: {
    edit: {}
  },
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      const _component_AccountInlineInfo = _sfc_main$s;
      const _component_StatusSpoiler = _sfc_main$7$2;
      const _component_StatusBody = _sfc_main$8$2;
      const _component_StatusMedia = _sfc_main$3$1;
      _push(`<div${ssrRenderAttrs(mergeProps({
        px3: "",
        "py-4": "",
        flex: "~ col"
      }, _attrs))}><div text-center flex="~ row gap-1 wrap">`);
      _push(ssrRenderComponent(_component_AccountInlineInfo, {
        account: _ctx.edit.account
      }, null, _parent));
      _push(`<span>${ssrInterpolate(_ctx.$t("status_history.edited", [("useFormattedDateTime" in _ctx ? _ctx.useFormattedDateTime : unref(useFormattedDateTime))(_ctx.edit.createdAt).value]))}</span></div><div h1px bg="gray/20" my2></div>`);
      _push(ssrRenderComponent(_component_StatusSpoiler, {
        enabled: _ctx.edit.sensitive
      }, {
        spoiler: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`${ssrInterpolate(_ctx.edit.spoilerText)}`);
          } else {
            return [
              createTextVNode(toDisplayString(_ctx.edit.spoilerText), 1)
            ];
          }
        }),
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_StatusBody, { status: _ctx.edit }, null, _parent2, _scopeId));
            if (_ctx.edit.mediaAttachments.length) {
              _push2(ssrRenderComponent(_component_StatusMedia, { status: _ctx.edit }, null, _parent2, _scopeId));
            } else {
              _push2(`<!---->`);
            }
          } else {
            return [
              createVNode(_component_StatusBody, { status: _ctx.edit }, null, 8, ["status"]),
              _ctx.edit.mediaAttachments.length ? (openBlock(), createBlock(_component_StatusMedia, {
                key: 0,
                status: _ctx.edit
              }, null, 8, ["status"])) : createCommentVNode("", true)
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div>`);
    };
  }
});
const _sfc_setup$a = _sfc_main$a.setup;
_sfc_main$a.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/status/edit/StatusEditPreview.vue");
  return _sfc_setup$a ? _sfc_setup$a(props, ctx) : void 0;
};
const _sfc_main$9 = /* @__PURE__ */ defineComponent({
  __name: "CommandKey",
  __ssrInlineRender: true,
  props: {
    name: {}
  },
  setup(__props) {
    const props = __props;
    const isMac = useIsMac();
    const keys = computed(() => props.name.toLowerCase().split("+"));
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "flex items-center px-1" }, _attrs))}><!--[-->`);
      ssrRenderList(keys.value, (key, index) => {
        _push(`<!--[-->`);
        if (index > 0) {
          _push(`<div class="inline-block px-.5"> + </div>`);
        } else {
          _push(`<!---->`);
        }
        _push(`<div class="p-1 grid place-items-center rounded-lg shadow-sm" text="xs secondary" border="1 base">`);
        if (key === "enter") {
          _push(`<div i-material-symbols:keyboard-return-rounded></div>`);
        } else if (key === "meta" && unref(isMac)) {
          _push(`<div i-material-symbols:keyboard-command-key></div>`);
        } else if (key === "meta" && !unref(isMac)) {
          _push(`<div i-material-symbols:window-sharp></div>`);
        } else if (key === "alt" && unref(isMac)) {
          _push(`<div i-material-symbols:keyboard-option-key-rounded></div>`);
        } else if (key === "arrowup") {
          _push(`<div i-ri:arrow-up-line></div>`);
        } else if (key === "arrowdown") {
          _push(`<div i-ri:arrow-down-line></div>`);
        } else if (key === "arrowleft") {
          _push(`<div i-ri:arrow-left-line></div>`);
        } else if (key === "arrowright") {
          _push(`<div i-ri:arrow-right-line></div>`);
        } else if (key === "escape") {
          _push(`<!--[--> ESC <!--]-->`);
        } else {
          _push(`<div class="${ssrRenderClass({ "px-.5": key.length === 1 })}">${ssrInterpolate(key[0].toUpperCase() + key.slice(1))}</div>`);
        }
        _push(`</div><!--]-->`);
      });
      _push(`<!--]--></div>`);
    };
  }
});
const _sfc_setup$9 = _sfc_main$9.setup;
_sfc_main$9.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/command/CommandKey.vue");
  return _sfc_setup$9 ? _sfc_setup$9(props, ctx) : void 0;
};
const _sfc_main$8 = /* @__PURE__ */ defineComponent({
  __name: "CommandItem",
  __ssrInlineRender: true,
  props: {
    cmd: {},
    index: {},
    active: { type: Boolean, default: false }
  },
  emits: ["activate"],
  setup(__props, { emit }) {
    return (_ctx, _push, _parent, _attrs) => {
      const _component_CommandKey = _sfc_main$9;
      _push(`<div${ssrRenderAttrs(mergeProps({
        class: ["flex px-3 py-2 my-1 items-center rounded-lg hover:bg-active transition-all duration-65 ease-in-out cursor-pointer scroll-m-10", { "bg-active": _ctx.active }],
        "data-index": _ctx.index
      }, _attrs))}>`);
      if (_ctx.cmd.icon) {
        _push(`<div me-2 class="${ssrRenderClass(_ctx.cmd.icon)}"></div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`<div class="flex-1 flex items-baseline gap-2"><div class="${ssrRenderClass({ "font-medium": _ctx.active })}">${ssrInterpolate(_ctx.cmd.name)}</div>`);
      if (_ctx.cmd.description) {
        _push(`<div class="text-xs text-secondary">${ssrInterpolate(_ctx.cmd.description)}</div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div>`);
      if (_ctx.cmd.onComplete) {
        _push(`<div class="${ssrRenderClass([_ctx.active ? "opacity-100" : "opacity-0", "flex items-center gap-1 transition-all duration-65 ease-in-out"])}"><div class="text-xs text-secondary">${ssrInterpolate(_ctx.$t("command.complete"))}</div>`);
        _push(ssrRenderComponent(_component_CommandKey, { name: "Tab" }, null, _parent));
        _push(`</div>`);
      } else {
        _push(`<!---->`);
      }
      if (_ctx.cmd.onActivate) {
        _push(`<div class="${ssrRenderClass([_ctx.active ? "opacity-100" : "opacity-0", "flex items-center gap-1 transition-all duration-65 ease-in-out"])}"><div class="text-xs text-secondary">${ssrInterpolate(_ctx.$t("command.activate"))}</div>`);
        _push(ssrRenderComponent(_component_CommandKey, { name: "Enter" }, null, _parent));
        _push(`</div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div>`);
    };
  }
});
const _sfc_setup$8 = _sfc_main$8.setup;
_sfc_main$8.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/command/CommandItem.vue");
  return _sfc_setup$8 ? _sfc_setup$8(props, ctx) : void 0;
};
const _sfc_main$7 = /* @__PURE__ */ defineComponent({
  __name: "CommandPanel",
  __ssrInlineRender: true,
  emits: ["close"],
  setup(__props, { emit }) {
    const registry = useCommandRegistry();
    const router = useRouter();
    ref();
    ref();
    const scopes = ref([]);
    let input = commandPanelInput;
    const commandMode = computed(() => input.value.startsWith(">"));
    const query = computed(() => commandMode.value ? "" : input.value.trim());
    const { accounts, hashtags, loading } = useSearch(query);
    function toSearchQueryResultItem(search) {
      return {
        index: 0,
        type: "search",
        search,
        onActivate: () => router.push(search.to)
      };
    }
    const searchResult = computed(() => {
      if (query.value.length === 0 || loading.value)
        return { length: 0, items: [], grouped: {} };
      const hashtagList = hashtags.value.slice(0, 3).map(toSearchQueryResultItem);
      const accountList = accounts.value.map(toSearchQueryResultItem);
      const grouped = /* @__PURE__ */ new Map();
      grouped.set("Hashtags", hashtagList);
      grouped.set("Users", accountList);
      let index = 0;
      for (const items of grouped.values()) {
        for (const item of items)
          item.index = index++;
      }
      return {
        grouped,
        items: [...hashtagList, ...accountList],
        length: hashtagList.length + accountList.length
      };
    });
    const result = computed(
      () => commandMode.value ? registry.query(scopes.value.map((s) => s.id).join("."), input.value.slice(1).trim()) : searchResult.value
    );
    const isMac = useIsMac();
    const modifierKeyName = computed(() => isMac.value ? "\u2318" : "Ctrl");
    let active = ref(0);
    watch(result, (n, o) => {
      if (n.length !== o.length || !n.items.every((i, idx) => i === o.items[idx]))
        active.value = 0;
    });
    function onCommandActivate(item) {
      if (item.onActivate) {
        item.onActivate();
        emit("close");
      } else if (item.onComplete) {
        scopes.value.push(item.onComplete());
        input.value = "> ";
      }
    }
    return (_ctx, _push, _parent, _attrs) => {
      const _component_CommandKey = _sfc_main$9;
      const _component_SearchResultSkeleton = __nuxt_component_1$2;
      const _component_SearchResult = _sfc_main$2$1;
      const _component_CommandItem = _sfc_main$8;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "flex flex-col w-50vw max-w-180 h-50vh max-h-120" }, _attrs))}><label class="flex mx-3 my-1 items-center"><div mx-1 i-ri:search-line></div><!--[-->`);
      ssrRenderList(scopes.value, (scope) => {
        _push(`<div class="flex items-center mx-1 gap-2"><div class="text-sm">${ssrInterpolate(scope.display)}</div><span class="text-secondary">/</span></div>`);
      });
      _push(`<!--]--><input${ssrRenderAttr("value", unref(input))} class="focus:outline-none flex-1 p-2 rounded bg-base" placeholder="Search">`);
      _push(ssrRenderComponent(_component_CommandKey, { name: "Escape" }, null, _parent));
      _push(`</label><div class="w-full border-b-1 border-base"></div><div class="flex-1 mx-1 overflow-y-auto">`);
      if (unref(loading)) {
        _push(`<!--[-->`);
        _push(ssrRenderComponent(_component_SearchResultSkeleton, null, null, _parent));
        _push(ssrRenderComponent(_component_SearchResultSkeleton, null, null, _parent));
        _push(ssrRenderComponent(_component_SearchResultSkeleton, null, null, _parent));
        _push(`<!--]-->`);
      } else if (result.value.length) {
        _push(`<!--[-->`);
        ssrRenderList(result.value.grouped, ([scope, group]) => {
          _push(`<!--[--><div class="mt-2 px-2 py-1 text-sm text-secondary">${ssrInterpolate(scope)}</div><!--[-->`);
          ssrRenderList(group, (item) => {
            _push(`<!--[-->`);
            if (item.type === "search") {
              _push(ssrRenderComponent(_component_SearchResult, {
                active: unref(active) === item.index,
                result: item.search
              }, null, _parent));
            } else {
              _push(ssrRenderComponent(_component_CommandItem, {
                index: item.index,
                cmd: item.cmd,
                active: unref(active) === item.index,
                onActivate: ($event) => onCommandActivate(item)
              }, null, _parent));
            }
            _push(`<!--]-->`);
          });
          _push(`<!--]--><!--]-->`);
        });
        _push(`<!--]-->`);
      } else {
        _push(`<div p5 text-center text-secondary italic>${ssrInterpolate(unref(input).trim().length ? _ctx.$t("common.not_found") : _ctx.$t("search.search_desc"))}</div>`);
      }
      _push(`</div><div class="w-full border-b-1 border-base"></div><div class="flex items-center px-3 py-1 text-xs"><div i-ri:lightbulb-flash-line></div> Tip: Use `);
      _push(ssrRenderComponent(_component_CommandKey, {
        name: `${modifierKeyName.value}+K`
      }, null, _parent));
      _push(` to search, `);
      _push(ssrRenderComponent(_component_CommandKey, {
        name: `${modifierKeyName.value}+/`
      }, null, _parent));
      _push(` to activate command mode. </div></div>`);
    };
  }
});
const _sfc_setup$7 = _sfc_main$7.setup;
_sfc_main$7.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/command/CommandPanel.vue");
  return _sfc_setup$7 ? _sfc_setup$7(props, ctx) : void 0;
};
const _sfc_main$6 = /* @__PURE__ */ defineComponent({
  __name: "ModalConfirm",
  __ssrInlineRender: true,
  props: {
    title: {},
    description: {},
    confirm: {},
    cancel: {}
  },
  emits: ["choice"],
  setup(__props, { emit }) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({
        flex: "~ col",
        "gap-6": ""
      }, _attrs))}><div font-bold text-lg text-center>${ssrInterpolate(_ctx.title)}</div>`);
      if (_ctx.description) {
        _push(`<div>${ssrInterpolate(_ctx.description)}</div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`<div flex justify-end gap-2><button btn-text>${ssrInterpolate(_ctx.cancel || _ctx.$t("confirm.common.cancel"))}</button><button btn-solid>${ssrInterpolate(_ctx.confirm || _ctx.$t("confirm.common.confirm"))}</button></div></div>`);
    };
  }
});
const _sfc_setup$6 = _sfc_main$6.setup;
_sfc_main$6.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/modal/ModalConfirm.vue");
  return _sfc_setup$6 ? _sfc_setup$6(props, ctx) : void 0;
};
const _sfc_main$5 = /* @__PURE__ */ defineComponent({
  __name: "ModalError",
  __ssrInlineRender: true,
  props: {
    title: {},
    messages: {},
    close: {}
  },
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({
        flex: "~ col",
        "gap-6": ""
      }, _attrs))}><div font-bold text-lg text-center>${ssrInterpolate(_ctx.title)}</div><div flex="~ col" gap-1 text-sm pt-1 ps-2 pe-1 pb-2 text-red-600 dark:text-red-400 border="~ base rounded red-600 dark:red-400"><ol ps-2 sm:ps-1><!--[-->`);
      ssrRenderList(_ctx.messages, (message, i) => {
        _push(`<li flex="~ col sm:row" gap-y-1 sm:gap-x-2>${ssrInterpolate(message)}</li>`);
      });
      _push(`<!--]--></ol></div><div flex justify-end gap-2><button btn-text>${ssrInterpolate(_ctx.close)}</button></div></div>`);
    };
  }
});
const _sfc_setup$5 = _sfc_main$5.setup;
_sfc_main$5.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/modal/ModalError.vue");
  return _sfc_setup$5 ? _sfc_setup$5(props, ctx) : void 0;
};
const _sfc_main$4 = /* @__PURE__ */ defineComponent({
  __name: "StatusFavouritedBoostedBy",
  __ssrInlineRender: true,
  setup(__props) {
    const type = ref("favourited-by");
    const __$temp_1 = useMasto(), client = toRef(__$temp_1, "client");
    function load() {
      return client.value.v1.statuses[type.value === "favourited-by" ? "listFavouritedBy" : "listRebloggedBy"](favouritedBoostedByStatusId.value);
    }
    const paginator = computed(() => load());
    function showFavouritedBy() {
      type.value = "favourited-by";
    }
    function showRebloggedBy() {
      type.value = "boosted-by";
    }
    const { t } = useI18n();
    const tabs = [
      {
        name: "favourited-by",
        display: t("status.favourited_by"),
        onClick: showFavouritedBy
      },
      {
        name: "boosted-by",
        display: t("status.boosted_by"),
        onClick: showRebloggedBy
      }
    ];
    return (_ctx, _push, _parent, _attrs) => {
      const _component_AccountPaginator = _sfc_main$t;
      _push(`<!--[--><div flex w-full items-center lg:text-lg of-x-auto scrollbar-hide><!--[-->`);
      ssrRenderList(tabs, (option) => {
        _push(`<div relative flex flex-auto cursor-pointer sm:px6 px2 rounded transition-all tabindex="1" hover:bg-active transition-100><span ws-nowrap mxa sm:px2 sm:py3 xl:pb4 xl:pt5 py2 text-center border-b-3 class="${ssrRenderClass(option.name === unref(type) ? "border-primary op100 text-base" : "border-transparent text-secondary-light hover:text-secondary op50")}">${ssrInterpolate(option.display)}</span></div>`);
      });
      _push(`<!--]--></div>`);
      _push(ssrRenderComponent(_component_AccountPaginator, {
        key: `paginator-${unref(type)}`,
        paginator: paginator.value
      }, null, _parent));
      _push(`<!--]-->`);
    };
  }
});
const _sfc_setup$4 = _sfc_main$4.setup;
_sfc_main$4.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/status/StatusFavouritedBoostedBy.vue");
  return _sfc_setup$4 ? _sfc_setup$4(props, ctx) : void 0;
};
const _sfc_main$3 = /* @__PURE__ */ defineComponent({
  __name: "MagickeysKeyboardShortcuts",
  __ssrInlineRender: true,
  emits: ["close"],
  setup(__props, { emit }) {
    const { t } = useI18n();
    const isMac = useIsMac();
    const modifierKeyName = computed(() => isMac.value ? "\u2318" : "Ctrl");
    const shortcutItemGroups = [
      {
        name: t("magic_keys.groups.navigation.title"),
        items: [
          {
            description: t("magic_keys.groups.navigation.shortcut_help"),
            shortcut: { keys: ["?"], isSequence: false }
          },
          // {
          //   description: t('magic_keys.groups.navigation.next_status'),
          //   shortcut: { keys: ['j'], isSequence: false },
          // },
          // {
          //   description: t('magic_keys.groups.navigation.previous_status'),
          //   shortcut: { keys: ['k'], isSequence: false },
          // },
          {
            description: t("magic_keys.groups.navigation.go_to_home"),
            shortcut: { keys: ["g", "h"], isSequence: true }
          },
          {
            description: t("magic_keys.groups.navigation.go_to_notifications"),
            shortcut: { keys: ["g", "n"], isSequence: true }
          }
        ]
      },
      {
        name: t("magic_keys.groups.actions.title"),
        items: [
          {
            description: t("magic_keys.groups.actions.command_mode"),
            shortcut: { keys: [modifierKeyName.value, "/"], isSequence: false }
          },
          {
            description: t("magic_keys.groups.actions.compose"),
            shortcut: { keys: ["c"], isSequence: false }
          },
          {
            description: t("magic_keys.groups.actions.favourite"),
            shortcut: { keys: ["f"], isSequence: false }
          },
          {
            description: t("magic_keys.groups.actions.boost"),
            shortcut: { keys: ["b"], isSequence: false }
          }
        ]
      },
      {
        name: t("magic_keys.groups.media.title"),
        items: []
      }
    ];
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({
        "px-3": "",
        "sm:px-5": "",
        "py-2": "",
        "sm:py-4": "",
        "max-w-220": "",
        relative: "",
        "max-h-screen": ""
      }, _attrs))}><button btn-action-icon absolute top-1 sm:top-2 right-1 sm:right-2 m1${ssrRenderAttr("aria-label", _ctx.$t("modals.aria_label_close"))}><div i-ri:close-fill></div></button><h2 text-xl font-700 mb3>${ssrInterpolate(_ctx.$t("magic_keys.dialog_header"))}</h2><div mb2 grid grid-cols-1 md:grid-cols-3 gap-y- md:gap-x-6 lg:gap-x-8><!--[-->`);
      ssrRenderList(shortcutItemGroups, (group) => {
        _push(`<div><h3 font-700 my-2 text-lg>${ssrInterpolate(group.name)}</h3><!--[-->`);
        ssrRenderList(group.items, (item) => {
          _push(`<div flex my-1 lg:my-2 justify-between place-items-center max-w-full text-base><div mr-2 break-words overflow-hidden leading-4 h-full inline-block align-middle>${ssrInterpolate(item.description)}</div><div><!--[-->`);
          ssrRenderList(item.shortcut.keys, (key, idx) => {
            _push(`<!--[-->`);
            if (idx !== 0) {
              _push(`<span mx1 text-sm op80>${ssrInterpolate(item.shortcut.isSequence ? _ctx.$t("magic_keys.sequence_then") : "+")}</span>`);
            } else {
              _push(`<!---->`);
            }
            _push(`<code class="px2 md:px1.5 lg:px2 lg:px2 py0 lg:py-0.5" rounded bg-code border="px $c-border-code" shadow-sm my1 font-mono font-600>${ssrInterpolate(key)}</code><!--]-->`);
          });
          _push(`<!--]--></div></div>`);
        });
        _push(`<!--]--></div>`);
      });
      _push(`<!--]--></div></div>`);
    };
  }
});
const _sfc_setup$3 = _sfc_main$3.setup;
_sfc_main$3.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/magickeys/MagickeysKeyboardShortcuts.vue");
  return _sfc_setup$3 ? _sfc_setup$3(props, ctx) : void 0;
};
const _sfc_main$2 = /* @__PURE__ */ defineComponent({
  __name: "ReportModal",
  __ssrInlineRender: true,
  props: {
    account: {},
    status: {}
  },
  emits: ["close"],
  async setup(__props, { emit }) {
    let __temp, __restore;
    const { client } = useMasto();
    const step = ref("selectCategory");
    const serverRules = ref(([__temp, __restore] = withAsyncContext(() => client.value.v2.instance.fetch()), __temp = await __temp, __restore(), __temp).rules || []);
    const reportReason = ref("");
    const selectedRuleIds = ref([]);
    const availableStatuses = ref(__props.status ? [__props.status] : []);
    const selectedStatusIds = ref(__props.status ? [__props.status.id] : []);
    const additionalComments = ref("");
    const forwardReport = ref(false);
    ref();
    loadStatuses();
    async function loadStatuses() {
      if (__props.status) {
        const prevStatuses = await client.value.v1.accounts.listStatuses(__props.account.id, {
          maxId: __props.status.id,
          limit: 5
        });
        const nextStatuses = await client.value.v1.accounts.listStatuses(__props.account.id, {
          minId: __props.status.id,
          limit: 5
        });
        availableStatuses.value = availableStatuses.value.concat(prevStatuses);
        availableStatuses.value = availableStatuses.value.concat(nextStatuses);
      } else {
        const mostRecentStatuses = await client.value.v1.accounts.listStatuses(__props.account.id, {
          limit: 10
        });
        availableStatuses.value = mostRecentStatuses;
      }
      availableStatuses.value.sort((a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime());
    }
    return (_ctx, _push, _parent, _attrs) => {
      const _component_i18n_t = resolveComponent("i18n-t");
      const _component_StatusCard = _sfc_main$u;
      _push(`<div${ssrRenderAttrs(mergeProps({
        "my-8": "",
        "px-3": "",
        "sm:px-8": "",
        flex: "~ col gap-4",
        relative: ""
      }, _attrs))}><h2 mxa text-xl>`);
      _push(ssrRenderComponent(_component_i18n_t, {
        keypath: unref(reportReason) === "dontlike" ? "report.limiting" : "report.reporting"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<b text-primary${_scopeId}>@${ssrInterpolate(_ctx.account.acct)}</b>`);
          } else {
            return [
              createVNode("b", { "text-primary": "" }, "@" + toDisplayString(_ctx.account.acct), 1)
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</h2><button btn-action-icon absolute top--8 right-0 m1 aria-label="Close"><div i-ri:close-line></div></button>`);
      if (unref(step) === "selectCategory") {
        _push(`<!--[--><h1 mxa text-4xl mb4>${ssrInterpolate(_ctx.status ? _ctx.$t("report.whats_wrong_post") : _ctx.$t("report.whats_wrong_account"))}</h1><p text-xl>${ssrInterpolate(_ctx.$t("report.select_one"))}</p><div><input id="dontlike"${ssrIncludeBooleanAttr(ssrLooseEqual(unref(reportReason), "dontlike")) ? " checked" : ""} type="radio" value="dontlike"><label pl-2 for="dontlike" font-bold>${ssrInterpolate(_ctx.$t("report.dontlike"))}</label><p pl-6>${ssrInterpolate(_ctx.$t("report.dontlike_desc"))}</p></div><div><input id="spam"${ssrIncludeBooleanAttr(ssrLooseEqual(unref(reportReason), "spam")) ? " checked" : ""} type="radio" value="spam"><label pl-2 for="spam" font-bold>${ssrInterpolate(_ctx.$t("report.spam"))}</label><p pl-6>${ssrInterpolate(_ctx.$t("report.spam_desc"))}</p></div>`);
        if (unref(serverRules).length > 0) {
          _push(`<div><input id="violation"${ssrIncludeBooleanAttr(ssrLooseEqual(unref(reportReason), "violation")) ? " checked" : ""} type="radio" value="violation"><label pl-2 for="violation" font-bold>${ssrInterpolate(_ctx.$t("report.violation"))}</label>`);
          if (unref(reportReason) === "violation") {
            _push(`<p pl-6 pt-2 text-primary font-bold>${ssrInterpolate(_ctx.$t("report.select_many"))}</p>`);
          } else {
            _push(`<!---->`);
          }
          _push(`<ul pl-6><!--[-->`);
          ssrRenderList(unref(serverRules), (rule) => {
            _push(`<li pt-2><input${ssrRenderAttr("id", rule.id)}${ssrIncludeBooleanAttr(Array.isArray(unref(selectedRuleIds)) ? ssrLooseContain(unref(selectedRuleIds), rule.id) : unref(selectedRuleIds)) ? " checked" : ""} type="checkbox"${ssrRenderAttr("value", rule.id)}${ssrIncludeBooleanAttr(unref(reportReason) !== "violation") ? " disabled" : ""}><label pl-2${ssrRenderAttr("for", rule.id)}>${ssrInterpolate(rule.text)}</label></li>`);
          });
          _push(`<!--]--></ul></div>`);
        } else {
          _push(`<!---->`);
        }
        _push(`<div><input id="other"${ssrIncludeBooleanAttr(ssrLooseEqual(unref(reportReason), "other")) ? " checked" : ""} type="radio" value="other"><label pl-2 for="other" font-bold>${ssrInterpolate(_ctx.$t("report.other"))}</label><p pl-6>${ssrInterpolate(_ctx.$t("report.other_desc"))}</p></div>`);
        if (unref(reportReason) && unref(reportReason) !== "dontlike") {
          _push(`<div><h3 mt-8 mb-4 font-bold>${ssrInterpolate(_ctx.$t("report.anything_else"))}</h3><textarea w-full h-20 p-3 border${ssrRenderAttr("placeholder", _ctx.$t("report.additional_comments"))}>${ssrInterpolate(unref(additionalComments))}</textarea>`);
          if (("getServerName" in _ctx ? _ctx.getServerName : unref(getServerName))(_ctx.account) && ("getServerName" in _ctx ? _ctx.getServerName : unref(getServerName))(_ctx.account) !== ("currentServer" in _ctx ? _ctx.currentServer : unref(currentServer))) {
            _push(`<div><h3 mt-8 mb-2 font-bold>${ssrInterpolate(_ctx.$t("report.another_server"))}</h3><p pb-1>${ssrInterpolate(_ctx.$t("report.forward_question"))}</p><input id="forward"${ssrIncludeBooleanAttr(Array.isArray(unref(forwardReport)) ? ssrLooseContain(unref(forwardReport), "rule.id") : unref(forwardReport)) ? " checked" : ""} type="checkbox" value="rule.id"><label pl-2 for="forward"><b>${ssrInterpolate(_ctx.$t("report.forward", [("getServerName" in _ctx ? _ctx.getServerName : unref(getServerName))(_ctx.account)]))}</b></label></div>`);
          } else {
            _push(`<!---->`);
          }
          _push(`</div>`);
        } else {
          _push(`<!---->`);
        }
        _push(`<button btn-solid mxa mt-10${ssrIncludeBooleanAttr(!unref(reportReason) || unref(reportReason) === "violation" && unref(selectedRuleIds).length < 1) ? " disabled" : ""}>${ssrInterpolate(_ctx.$t("action.next"))}</button><!--]-->`);
      } else if (unref(step) === "selectStatuses") {
        _push(`<!--[--><h1 mxa text-4xl mb4>${ssrInterpolate(_ctx.status ? _ctx.$t("report.select_posts_other") : _ctx.$t("report.select_posts"))}</h1><p text-primary font-bold>${ssrInterpolate(_ctx.$t("report.select_many"))}</p><table><!--[-->`);
        ssrRenderList(unref(availableStatuses), (availableStatus) => {
          _push(`<tr><td><input${ssrRenderAttr("id", availableStatus.id)}${ssrIncludeBooleanAttr(Array.isArray(unref(selectedStatusIds)) ? ssrLooseContain(unref(selectedStatusIds), availableStatus.id) : unref(selectedStatusIds)) ? " checked" : ""} type="checkbox"${ssrRenderAttr("value", availableStatus.id)}></td><td><label${ssrRenderAttr("for", availableStatus.id)}>`);
          _push(ssrRenderComponent(_component_StatusCard, {
            status: availableStatus,
            actions: false,
            "pointer-events-none": ""
          }, null, _parent));
          _push(`</label></td></tr>`);
        });
        _push(`<!--]--></table><button btn-solid mxa mt-5>${ssrInterpolate(_ctx.$t("report.submit"))}</button><!--]-->`);
      } else if (unref(step) === "furtherActions") {
        _push(`<!--[--><h1 mxa text-4xl mb4>${ssrInterpolate(unref(reportReason) === "dontlike" ? _ctx.$t("report.further_actions.limit.title") : _ctx.$t("report.further_actions.report.title"))}</h1><p text-xl>${ssrInterpolate(unref(reportReason) === "dontlike" ? _ctx.$t("report.further_actions.limit.description") : _ctx.$t("report.further_actions.report.description"))}</p>`);
        if (unref(useRelationship)(_ctx.account).value?.following) {
          _push(`<div><button btn-outline mxa mt-4 mb-2>`);
          _push(ssrRenderComponent(_component_i18n_t, { keypath: "menu.unfollow_account" }, {
            default: withCtx((_, _push2, _parent2, _scopeId) => {
              if (_push2) {
                _push2(`<b${_scopeId}>@${ssrInterpolate(_ctx.account.acct)}</b>`);
              } else {
                return [
                  createVNode("b", null, "@" + toDisplayString(_ctx.account.acct), 1)
                ];
              }
            }),
            _: 1
          }, _parent));
          _push(`</button><br> ${ssrInterpolate(_ctx.$t("report.unfollow_desc"))}</div>`);
        } else {
          _push(`<!---->`);
        }
        if (!unref(useRelationship)(_ctx.account).value?.muting) {
          _push(`<div><button btn-outline mxa mt-4 mb-2>`);
          _push(ssrRenderComponent(_component_i18n_t, { keypath: "menu.mute_account" }, {
            default: withCtx((_, _push2, _parent2, _scopeId) => {
              if (_push2) {
                _push2(`<b${_scopeId}>@${ssrInterpolate(_ctx.account.acct)}</b>`);
              } else {
                return [
                  createVNode("b", null, "@" + toDisplayString(_ctx.account.acct), 1)
                ];
              }
            }),
            _: 1
          }, _parent));
          _push(`</button><br> ${ssrInterpolate(_ctx.$t("report.mute_desc"))}</div>`);
        } else {
          _push(`<!---->`);
        }
        if (!unref(useRelationship)(_ctx.account).value?.blocking) {
          _push(`<div><button btn-outline mxa mt-4 mb-2>`);
          _push(ssrRenderComponent(_component_i18n_t, { keypath: "menu.block_account" }, {
            default: withCtx((_, _push2, _parent2, _scopeId) => {
              if (_push2) {
                _push2(`<b${_scopeId}>@${ssrInterpolate(_ctx.account.acct)}</b>`);
              } else {
                return [
                  createVNode("b", null, "@" + toDisplayString(_ctx.account.acct), 1)
                ];
              }
            }),
            _: 1
          }, _parent));
          _push(`</button><br> ${ssrInterpolate(_ctx.$t("report.block_desc"))}</div>`);
        } else {
          _push(`<!---->`);
        }
        _push(`<button btn-solid mxa mt-10>${ssrInterpolate(_ctx.$t("action.done"))}</button><!--]-->`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div>`);
    };
  }
});
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/report/ReportModal.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  __name: "ModalContainer",
  __ssrInlineRender: true,
  setup(__props) {
    const isMac = useIsMac();
    useEventListener("keydown", (e) => {
      if ((e.key === "k" || e.key === "\u043B") && (isMac.value ? e.metaKey : e.ctrlKey)) {
        e.preventDefault();
        openCommandPanel(e.shiftKey);
      }
      if ((e.key === "/" || e.key === ",") && (isMac.value ? e.metaKey : e.ctrlKey)) {
        e.preventDefault();
        openCommandPanel(true);
      }
    });
    function handlePublished(status) {
      lastPublishDialogStatus.value = status;
      isPublishDialogOpen.value = false;
    }
    function handlePublishClose() {
      lastPublishDialogStatus.value = null;
    }
    function handleConfirmChoice(choice) {
      confirmDialogChoice.value = choice;
      isConfirmDialogOpen.value = false;
    }
    function handleFavouritedBoostedByClose() {
      isFavouritedBoostedByDialogOpen.value = false;
    }
    return (_ctx, _push, _parent, _attrs) => {
      const _component_ModalDialog = __nuxt_component_0$2;
      const _component_UserSignIn = _sfc_main$e;
      const _component_HelpPreview = _sfc_main$d;
      const _component_PublishWidget = __nuxt_component_3;
      const _component_ModalMediaPreview = _sfc_main$b;
      const _component_StatusEditPreview = _sfc_main$a;
      const _component_CommandPanel = _sfc_main$7;
      const _component_ModalConfirm = _sfc_main$6;
      const _component_ModalError = _sfc_main$5;
      const _component_StatusFavouritedBoostedBy = _sfc_main$4;
      const _component_MagickeysKeyboardShortcuts = _sfc_main$3;
      const _component_ReportModal = _sfc_main$2;
      if ("isHydrated" in _ctx ? _ctx.isHydrated : unref(isHydrated)) {
        _push(`<!--[-->`);
        _push(ssrRenderComponent(_component_ModalDialog, {
          modelValue: unref(isSigninDialogOpen),
          "onUpdate:modelValue": ($event) => isRef(isSigninDialogOpen) ? isSigninDialogOpen.value = $event : null,
          "py-4": "",
          "px-8": "",
          "max-w-125": ""
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(ssrRenderComponent(_component_UserSignIn, null, null, _parent2, _scopeId));
            } else {
              return [
                createVNode(_component_UserSignIn)
              ];
            }
          }),
          _: 1
        }, _parent));
        _push(ssrRenderComponent(_component_ModalDialog, {
          modelValue: unref(isPreviewHelpOpen),
          "onUpdate:modelValue": ($event) => isRef(isPreviewHelpOpen) ? isPreviewHelpOpen.value = $event : null,
          "keep-alive": "",
          "max-w-125": ""
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(ssrRenderComponent(_component_HelpPreview, {
                onClose: ($event) => ("closePreviewHelp" in _ctx ? _ctx.closePreviewHelp : unref(closePreviewHelp))()
              }, null, _parent2, _scopeId));
            } else {
              return [
                createVNode(_component_HelpPreview, {
                  onClose: ($event) => ("closePreviewHelp" in _ctx ? _ctx.closePreviewHelp : unref(closePreviewHelp))()
                }, null, 8, ["onClose"])
              ];
            }
          }),
          _: 1
        }, _parent));
        _push(ssrRenderComponent(_component_ModalDialog, {
          modelValue: unref(isPublishDialogOpen),
          "onUpdate:modelValue": ($event) => isRef(isPublishDialogOpen) ? isPublishDialogOpen.value = $event : null,
          "max-w-180": "",
          flex: "",
          onClose: handlePublishClose
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              if ("dialogDraftKey" in _ctx ? _ctx.dialogDraftKey : unref(dialogDraftKey)) {
                _push2(ssrRenderComponent(_component_PublishWidget, {
                  "draft-key": "dialogDraftKey" in _ctx ? _ctx.dialogDraftKey : unref(dialogDraftKey),
                  expanded: "",
                  "flex-1": "",
                  "w-0": "",
                  onPublished: handlePublished
                }, null, _parent2, _scopeId));
              } else {
                _push2(`<!---->`);
              }
            } else {
              return [
                ("dialogDraftKey" in _ctx ? _ctx.dialogDraftKey : unref(dialogDraftKey)) ? (openBlock(), createBlock(_component_PublishWidget, {
                  key: 0,
                  "draft-key": "dialogDraftKey" in _ctx ? _ctx.dialogDraftKey : unref(dialogDraftKey),
                  expanded: "",
                  "flex-1": "",
                  "w-0": "",
                  onPublished: handlePublished
                }, null, 8, ["draft-key"])) : createCommentVNode("", true)
              ];
            }
          }),
          _: 1
        }, _parent));
        _push(ssrRenderComponent(_component_ModalDialog, {
          "model-value": unref(isMediaPreviewOpen),
          "w-full": "",
          "max-w-full": "",
          "h-full": "",
          "max-h-full": "",
          "bg-transparent": "",
          "border-0": "",
          "shadow-none": "",
          "onUpdate:modelValue": "closeMediaPreview" in _ctx ? _ctx.closeMediaPreview : unref(closeMediaPreview)
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              if (unref(isMediaPreviewOpen)) {
                _push2(ssrRenderComponent(_component_ModalMediaPreview, {
                  onClose: ($event) => ("closeMediaPreview" in _ctx ? _ctx.closeMediaPreview : unref(closeMediaPreview))()
                }, null, _parent2, _scopeId));
              } else {
                _push2(`<!---->`);
              }
            } else {
              return [
                unref(isMediaPreviewOpen) ? (openBlock(), createBlock(_component_ModalMediaPreview, {
                  key: 0,
                  onClose: ($event) => ("closeMediaPreview" in _ctx ? _ctx.closeMediaPreview : unref(closeMediaPreview))()
                }, null, 8, ["onClose"])) : createCommentVNode("", true)
              ];
            }
          }),
          _: 1
        }, _parent));
        _push(ssrRenderComponent(_component_ModalDialog, {
          modelValue: unref(isEditHistoryDialogOpen),
          "onUpdate:modelValue": ($event) => isRef(isEditHistoryDialogOpen) ? isEditHistoryDialogOpen.value = $event : null,
          "max-w-125": ""
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              if ("statusEdit" in _ctx ? _ctx.statusEdit : unref(statusEdit)) {
                _push2(ssrRenderComponent(_component_StatusEditPreview, { edit: "statusEdit" in _ctx ? _ctx.statusEdit : unref(statusEdit) }, null, _parent2, _scopeId));
              } else {
                _push2(`<!---->`);
              }
            } else {
              return [
                ("statusEdit" in _ctx ? _ctx.statusEdit : unref(statusEdit)) ? (openBlock(), createBlock(_component_StatusEditPreview, {
                  key: 0,
                  edit: "statusEdit" in _ctx ? _ctx.statusEdit : unref(statusEdit)
                }, null, 8, ["edit"])) : createCommentVNode("", true)
              ];
            }
          }),
          _: 1
        }, _parent));
        _push(ssrRenderComponent(_component_ModalDialog, {
          modelValue: unref(isCommandPanelOpen),
          "onUpdate:modelValue": ($event) => isRef(isCommandPanelOpen) ? isCommandPanelOpen.value = $event : null,
          "max-w-fit": "",
          flex: ""
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(ssrRenderComponent(_component_CommandPanel, {
                onClose: ($event) => ("closeCommandPanel" in _ctx ? _ctx.closeCommandPanel : unref(closeCommandPanel))()
              }, null, _parent2, _scopeId));
            } else {
              return [
                createVNode(_component_CommandPanel, {
                  onClose: ($event) => ("closeCommandPanel" in _ctx ? _ctx.closeCommandPanel : unref(closeCommandPanel))()
                }, null, 8, ["onClose"])
              ];
            }
          }),
          _: 1
        }, _parent));
        _push(ssrRenderComponent(_component_ModalDialog, {
          modelValue: unref(isConfirmDialogOpen),
          "onUpdate:modelValue": ($event) => isRef(isConfirmDialogOpen) ? isConfirmDialogOpen.value = $event : null,
          "py-4": "",
          "px-8": "",
          "max-w-125": ""
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              if ("confirmDialogLabel" in _ctx ? _ctx.confirmDialogLabel : unref(confirmDialogLabel)) {
                _push2(ssrRenderComponent(_component_ModalConfirm, mergeProps("confirmDialogLabel" in _ctx ? _ctx.confirmDialogLabel : unref(confirmDialogLabel), { onChoice: handleConfirmChoice }), null, _parent2, _scopeId));
              } else {
                _push2(`<!---->`);
              }
            } else {
              return [
                ("confirmDialogLabel" in _ctx ? _ctx.confirmDialogLabel : unref(confirmDialogLabel)) ? (openBlock(), createBlock(_component_ModalConfirm, mergeProps({ key: 0 }, "confirmDialogLabel" in _ctx ? _ctx.confirmDialogLabel : unref(confirmDialogLabel), { onChoice: handleConfirmChoice }), null, 16)) : createCommentVNode("", true)
              ];
            }
          }),
          _: 1
        }, _parent));
        _push(ssrRenderComponent(_component_ModalDialog, {
          modelValue: unref(isErrorDialogOpen),
          "onUpdate:modelValue": ($event) => isRef(isErrorDialogOpen) ? isErrorDialogOpen.value = $event : null,
          "py-4": "",
          "px-8": "",
          "max-w-125": ""
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              if ("errorDialogData" in _ctx ? _ctx.errorDialogData : unref(errorDialogData)) {
                _push2(ssrRenderComponent(_component_ModalError, "errorDialogData" in _ctx ? _ctx.errorDialogData : unref(errorDialogData), null, _parent2, _scopeId));
              } else {
                _push2(`<!---->`);
              }
            } else {
              return [
                ("errorDialogData" in _ctx ? _ctx.errorDialogData : unref(errorDialogData)) ? (openBlock(), createBlock(_component_ModalError, mergeProps({ key: 0 }, "errorDialogData" in _ctx ? _ctx.errorDialogData : unref(errorDialogData)), null, 16)) : createCommentVNode("", true)
              ];
            }
          }),
          _: 1
        }, _parent));
        _push(ssrRenderComponent(_component_ModalDialog, {
          modelValue: unref(isFavouritedBoostedByDialogOpen),
          "onUpdate:modelValue": ($event) => isRef(isFavouritedBoostedByDialogOpen) ? isFavouritedBoostedByDialogOpen.value = $event : null,
          "max-w-180": "",
          onClose: handleFavouritedBoostedByClose
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(ssrRenderComponent(_component_StatusFavouritedBoostedBy, null, null, _parent2, _scopeId));
            } else {
              return [
                createVNode(_component_StatusFavouritedBoostedBy)
              ];
            }
          }),
          _: 1
        }, _parent));
        _push(ssrRenderComponent(_component_ModalDialog, {
          modelValue: unref(isKeyboardShortcutsDialogOpen),
          "onUpdate:modelValue": ($event) => isRef(isKeyboardShortcutsDialogOpen) ? isKeyboardShortcutsDialogOpen.value = $event : null,
          "max-w-full": "",
          "sm:max-w-140": "",
          "md:max-w-170": "",
          "lg:max-w-220": "",
          "md:min-w-160": ""
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(ssrRenderComponent(_component_MagickeysKeyboardShortcuts, {
                onClose: ($event) => ("closeKeyboardShortcuts" in _ctx ? _ctx.closeKeyboardShortcuts : unref(closeKeyboardShortcuts))()
              }, null, _parent2, _scopeId));
            } else {
              return [
                createVNode(_component_MagickeysKeyboardShortcuts, {
                  onClose: ($event) => ("closeKeyboardShortcuts" in _ctx ? _ctx.closeKeyboardShortcuts : unref(closeKeyboardShortcuts))()
                }, null, 8, ["onClose"])
              ];
            }
          }),
          _: 1
        }, _parent));
        _push(ssrRenderComponent(_component_ModalDialog, {
          modelValue: unref(isReportDialogOpen),
          "onUpdate:modelValue": ($event) => isRef(isReportDialogOpen) ? isReportDialogOpen.value = $event : null,
          "keep-alive": "",
          "max-w-175": ""
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              if ("reportAccount" in _ctx ? _ctx.reportAccount : unref(reportAccount)) {
                _push2(ssrRenderComponent(_component_ReportModal, {
                  account: "reportAccount" in _ctx ? _ctx.reportAccount : unref(reportAccount),
                  status: "reportStatus" in _ctx ? _ctx.reportStatus : unref(reportStatus),
                  onClose: ($event) => ("closeReportDialog" in _ctx ? _ctx.closeReportDialog : unref(closeReportDialog))()
                }, null, _parent2, _scopeId));
              } else {
                _push2(`<!---->`);
              }
            } else {
              return [
                ("reportAccount" in _ctx ? _ctx.reportAccount : unref(reportAccount)) ? (openBlock(), createBlock(_component_ReportModal, {
                  key: 0,
                  account: "reportAccount" in _ctx ? _ctx.reportAccount : unref(reportAccount),
                  status: "reportStatus" in _ctx ? _ctx.reportStatus : unref(reportStatus),
                  onClose: ($event) => ("closeReportDialog" in _ctx ? _ctx.closeReportDialog : unref(closeReportDialog))()
                }, null, 8, ["account", "status", "onClose"])) : createCommentVNode("", true)
              ];
            }
          }),
          _: 1
        }, _parent));
        _push(`<!--]-->`);
      } else {
        _push(`<!---->`);
      }
    };
  }
});
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/modal/ModalContainer.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
function logicAnd(...args) {
  return computed(() => args.every((i) => toValue(i)));
}
const __nuxt_component_12_lazy = /* @__PURE__ */ defineAsyncComponent(() => import('./CommonPreviewPrompt-eb7f3707.mjs').then((m) => m.default || m));
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "default",
  __ssrInlineRender: true,
  setup(__props) {
    const route = useRoute();
    const info = useBuildInfo();
    const wideLayout = computed(() => route.meta.wideLayout ?? false);
    const showUserPicker = logicAnd(
      usePreferences("experimentalUserPicker"),
      () => useUsers().value.length > 1
    );
    const isGrayscale = usePreferences("grayscaleMode");
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NavTitle = _sfc_main$p;
      const _component_NavSide = __nuxt_component_1;
      const _component_UserSignInEntry = _sfc_main$m;
      const _component_UserPicker = _sfc_main$j;
      const _component_NuxtLink = __nuxt_component_0$1;
      const _component_AccountInfo = _sfc_main$7$1;
      const _component_UserDropdown = _sfc_main$k;
      const _component_CommonOfflineChecker = _sfc_main$i;
      const _component_NavBottom = _sfc_main$g;
      const _component_SearchWidget = _sfc_main$r;
      const _component_PwaPrompt = __nuxt_component_11;
      const _component_PwaInstallPrompt = __nuxt_component_11;
      const _component_LazyCommonPreviewPrompt = __nuxt_component_12_lazy;
      const _component_NavFooter = _sfc_main$f;
      const _component_ModalContainer = _sfc_main$1;
      _push(`<div${ssrRenderAttrs(mergeProps({
        "h-full": "",
        "data-mode": ("isHydrated" in _ctx ? _ctx.isHydrated : unref(isHydrated)) && unref(isGrayscale) ? "grayscale" : "",
        "data-tauri-drag-region": ""
      }, _attrs))}><main flex w-full mxa lg:max-w-80rem class="native:grid native:sm:grid-cols-[auto_1fr] native:lg:grid-cols-[auto_minmax(600px,2fr)_1fr]"><aside class="native:w-auto w-1/8 md:w-1/6 lg:w-1/5 xl:w-1/4 zen-hide" hidden sm:flex justify-end xl:me-4 native:me-0 relative><div sticky top-0 w-20 xl:w-100 h-100dvh flex="~ col" lt-xl-items-center>`);
      ssrRenderSlot(_ctx.$slots, "left", {}, () => {
        _push(`<div flex="~ col" overflow-y-auto justify-between h-full max-w-full overflow-x-hidden>`);
        _push(ssrRenderComponent(_component_NavTitle, null, null, _parent));
        _push(ssrRenderComponent(_component_NavSide, { command: "" }, null, _parent));
        _push(`<div flex-auto></div>`);
        if ("isHydrated" in _ctx ? _ctx.isHydrated : unref(isHydrated)) {
          _push(`<div flex flex-col sticky bottom-0 bg-base><div hidden xl:block>`);
          if (!("currentUser" in _ctx ? _ctx.currentUser : unref(currentUser))) {
            _push(ssrRenderComponent(_component_UserSignInEntry, null, null, _parent));
          } else {
            _push(`<!---->`);
          }
          _push(`</div>`);
          if ("currentUser" in _ctx ? _ctx.currentUser : unref(currentUser)) {
            _push(`<div p6 pb8 w-full><div hidden xl-block>`);
            if (unref(showUserPicker)) {
              _push(ssrRenderComponent(_component_UserPicker, null, null, _parent));
            } else {
              _push(`<div flex="~" items-center justify-between>`);
              _push(ssrRenderComponent(_component_NuxtLink, {
                hidden: "",
                "xl:block": "",
                "rounded-3": "",
                "text-primary": "",
                "text-start": "",
                "w-full": "",
                "hover:bg-active": "",
                "cursor-pointer": "",
                "transition-100": "",
                to: ("getAccountRoute" in _ctx ? _ctx.getAccountRoute : unref(getAccountRoute))(("currentUser" in _ctx ? _ctx.currentUser : unref(currentUser)).account)
              }, {
                default: withCtx((_, _push2, _parent2, _scopeId) => {
                  if (_push2) {
                    _push2(ssrRenderComponent(_component_AccountInfo, {
                      account: ("currentUser" in _ctx ? _ctx.currentUser : unref(currentUser)).account,
                      "md:break-words": "",
                      square: ""
                    }, null, _parent2, _scopeId));
                  } else {
                    return [
                      createVNode(_component_AccountInfo, {
                        account: ("currentUser" in _ctx ? _ctx.currentUser : unref(currentUser)).account,
                        "md:break-words": "",
                        square: ""
                      }, null, 8, ["account"])
                    ];
                  }
                }),
                _: 1
              }, _parent));
              _push(ssrRenderComponent(_component_UserDropdown, null, null, _parent));
              _push(`</div>`);
            }
            _push(`</div>`);
            _push(ssrRenderComponent(_component_UserDropdown, { "xl:hidden": "" }, null, _parent));
            _push(`</div>`);
          } else {
            _push(`<!---->`);
          }
          _push(`</div>`);
        } else {
          _push(`<!---->`);
        }
        _push(`</div>`);
      }, _push, _parent);
      _push(`</div></aside><div w-full min-h-screen class="${ssrRenderClass(("isHydrated" in _ctx ? _ctx.isHydrated : unref(isHydrated)) && unref(wideLayout) ? "xl:w-full sm:w-600px" : "sm:w-600px md:shrink-0")}" border-base><div min-h="[calc(100vh-3.5rem)]" sm:min-h-screen>`);
      ssrRenderSlot(_ctx.$slots, "default", {}, null, _push, _parent);
      _push(`</div><div sticky left-0 right-0 bottom-0 z-10 bg-base pb="[env(safe-area-inset-bottom)]" transition="padding 20">`);
      if ("isHydrated" in _ctx ? _ctx.isHydrated : unref(isHydrated)) {
        _push(ssrRenderComponent(_component_CommonOfflineChecker, null, null, _parent));
      } else {
        _push(`<!---->`);
      }
      if ("isHydrated" in _ctx ? _ctx.isHydrated : unref(isHydrated)) {
        _push(ssrRenderComponent(_component_NavBottom, { "sm:hidden": "" }, null, _parent));
      } else {
        _push(`<!---->`);
      }
      _push(`</div></div>`);
      if (("isHydrated" in _ctx ? _ctx.isHydrated : unref(isHydrated)) && !unref(wideLayout)) {
        _push(`<aside class="hidden lg:w-1/5 xl:w-1/4 sm:none xl:block native:w-full zen-hide"><div sticky top-0 h-100dvh flex="~ col" gap-2 py3 ms-2>`);
        ssrRenderSlot(_ctx.$slots, "right", {}, () => {
          _push(ssrRenderComponent(_component_SearchWidget, {
            "mt-4": "",
            "mx-1": "",
            hidden: "",
            "xl:block": ""
          }, null, _parent));
          _push(`<div flex-auto></div>`);
          _push(ssrRenderComponent(_component_PwaPrompt, null, null, _parent));
          _push(ssrRenderComponent(_component_PwaInstallPrompt, null, null, _parent));
          if (unref(info).env === "preview") {
            _push(ssrRenderComponent(_component_LazyCommonPreviewPrompt, null, null, _parent));
          } else {
            _push(`<!---->`);
          }
          _push(ssrRenderComponent(_component_NavFooter, null, null, _parent));
        }, _push, _parent);
        _push(`</div></aside>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</main>`);
      _push(ssrRenderComponent(_component_ModalContainer, null, null, _parent));
      _push(`</div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("layouts/default.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
