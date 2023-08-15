import { i as useRoute, j as computedEager, Y as toShortHandle, a as useI18n, x as useRelationship, V as useUserSettings, o as onReactivated, g as getDisplayName, W as getPreferences, d as getAccountRoute, v as useSelfAccount, m as useMasto, y as usePreferences, z as useShare, h as currentUser, A as mentionUser, B as directMessageUser, C as toggleMuteAccount, D as toggleBlockAccount, E as getServerName, F as currentServer, G as toggleBlockDomain, H as openReportDialog, u as useFormattedDateTime, s as fetchAccountByHandle, p as _sfc_main$2$1, T as _sfc_main$j, X as __nuxt_component_4, _ as __nuxt_component_0$1, f as _sfc_main$7, I as openConfirmDialog, J as _sfc_main$6$1, K as _sfc_main$i, L as openMediaPreview, M as _sfc_main$n, N as _sfc_main$m, O as _sfc_main$c, P as _sfc_main$b, Q as _sfc_main$a, R as _sfc_main$9, S as _sfc_main$8$1, U as _sfc_main$g } from '../server.mjs';
import { _ as _sfc_main$5 } from './AccountInlineInfo-272708e4.mjs';
import { useSSRContext, defineComponent, withAsyncContext, toRef, computed, mergeProps, withCtx, unref, createVNode, createTextVNode, toDisplayString, openBlock, createBlock, Fragment, createCommentVNode, ref, watchEffect, watch, resolveComponent, resolveDynamicComponent, shallowRef } from 'vue';
import { ssrRenderComponent, ssrInterpolate, ssrRenderAttrs, ssrRenderClass, ssrRenderVNode, ssrRenderAttr, ssrRenderStyle, ssrRenderList } from 'vue/server-renderer';
import { g as getAccountFieldIcon, _ as _sfc_main$6 } from './Dropdown-f5ab4219.mjs';
import { b as _sfc_main$8 } from './CommonPaginator-7edbb317.mjs';
import { _ as __nuxt_component_5 } from './CommonNotFound-a00b8aad.mjs';
import { u as useAsyncData } from './asyncData-8a1718f5.mjs';
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

const _sfc_main$4 = /* @__PURE__ */ defineComponent({
  __name: "AccountMoved",
  __ssrInlineRender: true,
  props: {
    account: {}
  },
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      const _component_AccountInlineInfo = _sfc_main$5;
      const _component_NuxtLink = __nuxt_component_0$1;
      const _component_AccountInfo = _sfc_main$7;
      _push(`<div${ssrRenderAttrs(mergeProps({
        flex: "~ col gap-2",
        p4: ""
      }, _attrs))}><div flex="~ gap-1" justify-center>`);
      _push(ssrRenderComponent(_component_AccountInlineInfo, {
        account: _ctx.account,
        link: false
      }, null, _parent));
      _push(` ${ssrInterpolate(_ctx.$t("account.moved_title"))}</div><div flex>`);
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: ("getAccountRoute" in _ctx ? _ctx.getAccountRoute : unref(getAccountRoute))(_ctx.account.moved)
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_AccountInfo, {
              account: _ctx.account.moved
            }, null, _parent2, _scopeId));
          } else {
            return [
              createVNode(_component_AccountInfo, {
                account: _ctx.account.moved
              }, null, 8, ["account"])
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`<div flex-auto></div><div flex items-center>`);
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: ("getAccountRoute" in _ctx ? _ctx.getAccountRoute : unref(getAccountRoute))(_ctx.account.moved),
        "btn-solid": "",
        "inline-block": "",
        "h-fit": ""
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`${ssrInterpolate(_ctx.$t("account.go_to_profile"))}`);
          } else {
            return [
              createTextVNode(toDisplayString(_ctx.$t("account.go_to_profile")), 1)
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div></div></div>`);
    };
  }
});
const _sfc_setup$4 = _sfc_main$4.setup;
_sfc_main$4.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/account/AccountMoved.vue");
  return _sfc_setup$4 ? _sfc_setup$4(props, ctx) : void 0;
};
const _sfc_main$3 = /* @__PURE__ */ defineComponent({
  __name: "AccountMoreButton",
  __ssrInlineRender: true,
  props: {
    account: {},
    command: { type: Boolean }
  },
  emits: ["addNote", "removeNote"],
  setup(__props, { emit }) {
    let relationship = useRelationship(__props.account);
    const isSelf = useSelfAccount(() => __props.account);
    const { t } = useI18n();
    const __$temp_1 = useMasto(), client = toRef(__$temp_1, "client");
    const useStarFavoriteIcon = usePreferences("useStarFavoriteIcon");
    const { share, isSupported: isShareSupported } = useShare();
    function shareAccount() {
      share({ url: location.href });
    }
    async function toggleReblogs() {
      if (!relationship.value.showingReblogs && await openConfirmDialog({
        title: t("confirm.show_reblogs.title", [__props.account.acct]),
        confirm: t("confirm.show_reblogs.confirm"),
        cancel: t("confirm.show_reblogs.cancel")
      }) !== "confirm")
        return;
      const showingReblogs = !relationship.value?.showingReblogs;
      relationship.value = await client.value.v1.accounts.follow(__props.account.id, { reblogs: showingReblogs });
    }
    async function addUserNote() {
      emit("addNote");
    }
    async function removeUserNote() {
      if (!relationship.value.note || relationship.value.note.length === 0)
        return;
      const newNote = await client.value.v1.accounts.createNote(__props.account.id, { comment: "" });
      relationship.value.note = newNote.note;
      emit("removeNote");
    }
    return (_ctx, _push, _parent, _attrs) => {
      const _component_CommonDropdown = _sfc_main$6;
      const _component_NuxtLink = __nuxt_component_0$1;
      const _component_CommonDropdownItem = _sfc_main$6$1;
      _push(ssrRenderComponent(_component_CommonDropdown, mergeProps({ "eager-mount": _ctx.command }, _attrs), {
        popper: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_NuxtLink, {
              to: _ctx.account.url,
              external: "",
              target: "_blank"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_component_CommonDropdownItem, {
                    text: _ctx.$t("menu.open_in_original_site"),
                    icon: "i-ri:arrow-right-up-line",
                    command: _ctx.command
                  }, null, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(_component_CommonDropdownItem, {
                      text: _ctx.$t("menu.open_in_original_site"),
                      icon: "i-ri:arrow-right-up-line",
                      command: _ctx.command
                    }, null, 8, ["text", "command"])
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            if (unref(isShareSupported)) {
              _push2(ssrRenderComponent(_component_CommonDropdownItem, {
                text: `Share @${_ctx.account.acct}`,
                icon: "i-ri:share-line",
                command: _ctx.command,
                onClick: ($event) => shareAccount()
              }, null, _parent2, _scopeId));
            } else {
              _push2(`<!---->`);
            }
            if ("currentUser" in _ctx ? _ctx.currentUser : unref(currentUser)) {
              _push2(`<!--[-->`);
              if (!unref(isSelf)) {
                _push2(`<!--[-->`);
                _push2(ssrRenderComponent(_component_CommonDropdownItem, {
                  text: _ctx.$t("menu.mention_account", [`@${_ctx.account.acct}`]),
                  icon: "i-ri:at-line",
                  command: _ctx.command,
                  onClick: ($event) => ("mentionUser" in _ctx ? _ctx.mentionUser : unref(mentionUser))(_ctx.account)
                }, null, _parent2, _scopeId));
                _push2(ssrRenderComponent(_component_CommonDropdownItem, {
                  text: _ctx.$t("menu.direct_message_account", [`@${_ctx.account.acct}`]),
                  icon: "i-ri:message-3-line",
                  command: _ctx.command,
                  onClick: ($event) => ("directMessageUser" in _ctx ? _ctx.directMessageUser : unref(directMessageUser))(_ctx.account)
                }, null, _parent2, _scopeId));
                if (!unref(relationship)?.showingReblogs) {
                  _push2(ssrRenderComponent(_component_CommonDropdownItem, {
                    icon: "i-ri:repeat-line",
                    text: _ctx.$t("menu.show_reblogs", [`@${_ctx.account.acct}`]),
                    command: _ctx.command,
                    onClick: ($event) => toggleReblogs()
                  }, null, _parent2, _scopeId));
                } else {
                  _push2(ssrRenderComponent(_component_CommonDropdownItem, {
                    text: _ctx.$t("menu.hide_reblogs", [`@${_ctx.account.acct}`]),
                    icon: "i-ri:repeat-line",
                    command: _ctx.command,
                    onClick: ($event) => toggleReblogs()
                  }, null, _parent2, _scopeId));
                }
                if (!unref(relationship)?.note || unref(relationship)?.note?.length === 0) {
                  _push2(ssrRenderComponent(_component_CommonDropdownItem, {
                    text: _ctx.$t("menu.add_personal_note", [`@${_ctx.account.acct}`]),
                    icon: "i-ri-edit-2-line",
                    command: _ctx.command,
                    onClick: ($event) => addUserNote()
                  }, null, _parent2, _scopeId));
                } else {
                  _push2(ssrRenderComponent(_component_CommonDropdownItem, {
                    text: _ctx.$t("menu.remove_personal_note", [`@${_ctx.account.acct}`]),
                    icon: "i-ri-edit-2-line",
                    command: _ctx.command,
                    onClick: ($event) => removeUserNote()
                  }, null, _parent2, _scopeId));
                }
                if (!unref(relationship)?.muting) {
                  _push2(ssrRenderComponent(_component_CommonDropdownItem, {
                    text: _ctx.$t("menu.mute_account", [`@${_ctx.account.acct}`]),
                    icon: "i-ri:volume-mute-line",
                    command: _ctx.command,
                    onClick: ($event) => unref(toggleMuteAccount)(unref(relationship), _ctx.account)
                  }, null, _parent2, _scopeId));
                } else {
                  _push2(ssrRenderComponent(_component_CommonDropdownItem, {
                    text: _ctx.$t("menu.unmute_account", [`@${_ctx.account.acct}`]),
                    icon: "i-ri:volume-up-fill",
                    command: _ctx.command,
                    onClick: ($event) => unref(toggleMuteAccount)(unref(relationship), _ctx.account)
                  }, null, _parent2, _scopeId));
                }
                if (!unref(relationship)?.blocking) {
                  _push2(ssrRenderComponent(_component_CommonDropdownItem, {
                    text: _ctx.$t("menu.block_account", [`@${_ctx.account.acct}`]),
                    icon: "i-ri:forbid-2-line",
                    command: _ctx.command,
                    onClick: ($event) => unref(toggleBlockAccount)(unref(relationship), _ctx.account)
                  }, null, _parent2, _scopeId));
                } else {
                  _push2(ssrRenderComponent(_component_CommonDropdownItem, {
                    text: _ctx.$t("menu.unblock_account", [`@${_ctx.account.acct}`]),
                    icon: "i-ri:checkbox-circle-line",
                    command: _ctx.command,
                    onClick: ($event) => unref(toggleBlockAccount)(unref(relationship), _ctx.account)
                  }, null, _parent2, _scopeId));
                }
                if (("getServerName" in _ctx ? _ctx.getServerName : unref(getServerName))(_ctx.account) !== ("currentServer" in _ctx ? _ctx.currentServer : unref(currentServer))) {
                  _push2(`<!--[-->`);
                  if (!unref(relationship)?.domainBlocking) {
                    _push2(ssrRenderComponent(_component_CommonDropdownItem, {
                      text: _ctx.$t("menu.block_domain", [("getServerName" in _ctx ? _ctx.getServerName : unref(getServerName))(_ctx.account)]),
                      icon: "i-ri:shut-down-line",
                      command: _ctx.command,
                      onClick: ($event) => unref(toggleBlockDomain)(unref(relationship), _ctx.account)
                    }, null, _parent2, _scopeId));
                  } else {
                    _push2(ssrRenderComponent(_component_CommonDropdownItem, {
                      text: _ctx.$t("menu.unblock_domain", [("getServerName" in _ctx ? _ctx.getServerName : unref(getServerName))(_ctx.account)]),
                      icon: "i-ri:restart-line",
                      command: _ctx.command,
                      onClick: ($event) => unref(toggleBlockDomain)(unref(relationship), _ctx.account)
                    }, null, _parent2, _scopeId));
                  }
                  _push2(`<!--]-->`);
                } else {
                  _push2(`<!---->`);
                }
                _push2(ssrRenderComponent(_component_CommonDropdownItem, {
                  text: _ctx.$t("menu.report_account", [`@${_ctx.account.acct}`]),
                  icon: "i-ri:flag-2-line",
                  command: _ctx.command,
                  onClick: ($event) => ("openReportDialog" in _ctx ? _ctx.openReportDialog : unref(openReportDialog))(_ctx.account)
                }, null, _parent2, _scopeId));
                _push2(`<!--]-->`);
              } else {
                _push2(`<!--[-->`);
                _push2(ssrRenderComponent(_component_NuxtLink, { to: "/pinned" }, {
                  default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                    if (_push3) {
                      _push3(ssrRenderComponent(_component_CommonDropdownItem, {
                        text: _ctx.$t("account.pinned"),
                        icon: "i-ri:pushpin-line",
                        command: _ctx.command
                      }, null, _parent3, _scopeId2));
                    } else {
                      return [
                        createVNode(_component_CommonDropdownItem, {
                          text: _ctx.$t("account.pinned"),
                          icon: "i-ri:pushpin-line",
                          command: _ctx.command
                        }, null, 8, ["text", "command"])
                      ];
                    }
                  }),
                  _: 1
                }, _parent2, _scopeId));
                _push2(ssrRenderComponent(_component_NuxtLink, { to: "/favourites" }, {
                  default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                    if (_push3) {
                      _push3(ssrRenderComponent(_component_CommonDropdownItem, {
                        text: _ctx.$t("account.favourites"),
                        icon: unref(useStarFavoriteIcon) ? "i-ri:star-line" : "i-ri:heart-3-line",
                        command: _ctx.command
                      }, null, _parent3, _scopeId2));
                    } else {
                      return [
                        createVNode(_component_CommonDropdownItem, {
                          text: _ctx.$t("account.favourites"),
                          icon: unref(useStarFavoriteIcon) ? "i-ri:star-line" : "i-ri:heart-3-line",
                          command: _ctx.command
                        }, null, 8, ["text", "icon", "command"])
                      ];
                    }
                  }),
                  _: 1
                }, _parent2, _scopeId));
                _push2(ssrRenderComponent(_component_NuxtLink, { to: "/mutes" }, {
                  default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                    if (_push3) {
                      _push3(ssrRenderComponent(_component_CommonDropdownItem, {
                        text: _ctx.$t("account.muted_users"),
                        icon: "i-ri:volume-mute-line",
                        command: _ctx.command
                      }, null, _parent3, _scopeId2));
                    } else {
                      return [
                        createVNode(_component_CommonDropdownItem, {
                          text: _ctx.$t("account.muted_users"),
                          icon: "i-ri:volume-mute-line",
                          command: _ctx.command
                        }, null, 8, ["text", "command"])
                      ];
                    }
                  }),
                  _: 1
                }, _parent2, _scopeId));
                _push2(ssrRenderComponent(_component_NuxtLink, { to: "/blocks" }, {
                  default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                    if (_push3) {
                      _push3(ssrRenderComponent(_component_CommonDropdownItem, {
                        text: _ctx.$t("account.blocked_users"),
                        icon: "i-ri:forbid-2-line",
                        command: _ctx.command
                      }, null, _parent3, _scopeId2));
                    } else {
                      return [
                        createVNode(_component_CommonDropdownItem, {
                          text: _ctx.$t("account.blocked_users"),
                          icon: "i-ri:forbid-2-line",
                          command: _ctx.command
                        }, null, 8, ["text", "command"])
                      ];
                    }
                  }),
                  _: 1
                }, _parent2, _scopeId));
                _push2(ssrRenderComponent(_component_NuxtLink, { to: "/domain_blocks" }, {
                  default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                    if (_push3) {
                      _push3(ssrRenderComponent(_component_CommonDropdownItem, {
                        text: _ctx.$t("account.blocked_domains"),
                        icon: "i-ri:shut-down-line",
                        command: _ctx.command
                      }, null, _parent3, _scopeId2));
                    } else {
                      return [
                        createVNode(_component_CommonDropdownItem, {
                          text: _ctx.$t("account.blocked_domains"),
                          icon: "i-ri:shut-down-line",
                          command: _ctx.command
                        }, null, 8, ["text", "command"])
                      ];
                    }
                  }),
                  _: 1
                }, _parent2, _scopeId));
                _push2(`<!--]-->`);
              }
              _push2(`<!--]-->`);
            } else {
              _push2(`<!---->`);
            }
          } else {
            return [
              createVNode(_component_NuxtLink, {
                to: _ctx.account.url,
                external: "",
                target: "_blank"
              }, {
                default: withCtx(() => [
                  createVNode(_component_CommonDropdownItem, {
                    text: _ctx.$t("menu.open_in_original_site"),
                    icon: "i-ri:arrow-right-up-line",
                    command: _ctx.command
                  }, null, 8, ["text", "command"])
                ]),
                _: 1
              }, 8, ["to"]),
              unref(isShareSupported) ? (openBlock(), createBlock(_component_CommonDropdownItem, {
                key: 0,
                text: `Share @${_ctx.account.acct}`,
                icon: "i-ri:share-line",
                command: _ctx.command,
                onClick: ($event) => shareAccount()
              }, null, 8, ["text", "command", "onClick"])) : createCommentVNode("", true),
              ("currentUser" in _ctx ? _ctx.currentUser : unref(currentUser)) ? (openBlock(), createBlock(Fragment, { key: 1 }, [
                !unref(isSelf) ? (openBlock(), createBlock(Fragment, { key: 0 }, [
                  createVNode(_component_CommonDropdownItem, {
                    text: _ctx.$t("menu.mention_account", [`@${_ctx.account.acct}`]),
                    icon: "i-ri:at-line",
                    command: _ctx.command,
                    onClick: ($event) => ("mentionUser" in _ctx ? _ctx.mentionUser : unref(mentionUser))(_ctx.account)
                  }, null, 8, ["text", "command", "onClick"]),
                  createVNode(_component_CommonDropdownItem, {
                    text: _ctx.$t("menu.direct_message_account", [`@${_ctx.account.acct}`]),
                    icon: "i-ri:message-3-line",
                    command: _ctx.command,
                    onClick: ($event) => ("directMessageUser" in _ctx ? _ctx.directMessageUser : unref(directMessageUser))(_ctx.account)
                  }, null, 8, ["text", "command", "onClick"]),
                  !unref(relationship)?.showingReblogs ? (openBlock(), createBlock(_component_CommonDropdownItem, {
                    key: 0,
                    icon: "i-ri:repeat-line",
                    text: _ctx.$t("menu.show_reblogs", [`@${_ctx.account.acct}`]),
                    command: _ctx.command,
                    onClick: ($event) => toggleReblogs()
                  }, null, 8, ["text", "command", "onClick"])) : (openBlock(), createBlock(_component_CommonDropdownItem, {
                    key: 1,
                    text: _ctx.$t("menu.hide_reblogs", [`@${_ctx.account.acct}`]),
                    icon: "i-ri:repeat-line",
                    command: _ctx.command,
                    onClick: ($event) => toggleReblogs()
                  }, null, 8, ["text", "command", "onClick"])),
                  !unref(relationship)?.note || unref(relationship)?.note?.length === 0 ? (openBlock(), createBlock(_component_CommonDropdownItem, {
                    key: 2,
                    text: _ctx.$t("menu.add_personal_note", [`@${_ctx.account.acct}`]),
                    icon: "i-ri-edit-2-line",
                    command: _ctx.command,
                    onClick: ($event) => addUserNote()
                  }, null, 8, ["text", "command", "onClick"])) : (openBlock(), createBlock(_component_CommonDropdownItem, {
                    key: 3,
                    text: _ctx.$t("menu.remove_personal_note", [`@${_ctx.account.acct}`]),
                    icon: "i-ri-edit-2-line",
                    command: _ctx.command,
                    onClick: ($event) => removeUserNote()
                  }, null, 8, ["text", "command", "onClick"])),
                  !unref(relationship)?.muting ? (openBlock(), createBlock(_component_CommonDropdownItem, {
                    key: 4,
                    text: _ctx.$t("menu.mute_account", [`@${_ctx.account.acct}`]),
                    icon: "i-ri:volume-mute-line",
                    command: _ctx.command,
                    onClick: ($event) => unref(toggleMuteAccount)(unref(relationship), _ctx.account)
                  }, null, 8, ["text", "command", "onClick"])) : (openBlock(), createBlock(_component_CommonDropdownItem, {
                    key: 5,
                    text: _ctx.$t("menu.unmute_account", [`@${_ctx.account.acct}`]),
                    icon: "i-ri:volume-up-fill",
                    command: _ctx.command,
                    onClick: ($event) => unref(toggleMuteAccount)(unref(relationship), _ctx.account)
                  }, null, 8, ["text", "command", "onClick"])),
                  !unref(relationship)?.blocking ? (openBlock(), createBlock(_component_CommonDropdownItem, {
                    key: 6,
                    text: _ctx.$t("menu.block_account", [`@${_ctx.account.acct}`]),
                    icon: "i-ri:forbid-2-line",
                    command: _ctx.command,
                    onClick: ($event) => unref(toggleBlockAccount)(unref(relationship), _ctx.account)
                  }, null, 8, ["text", "command", "onClick"])) : (openBlock(), createBlock(_component_CommonDropdownItem, {
                    key: 7,
                    text: _ctx.$t("menu.unblock_account", [`@${_ctx.account.acct}`]),
                    icon: "i-ri:checkbox-circle-line",
                    command: _ctx.command,
                    onClick: ($event) => unref(toggleBlockAccount)(unref(relationship), _ctx.account)
                  }, null, 8, ["text", "command", "onClick"])),
                  ("getServerName" in _ctx ? _ctx.getServerName : unref(getServerName))(_ctx.account) !== ("currentServer" in _ctx ? _ctx.currentServer : unref(currentServer)) ? (openBlock(), createBlock(Fragment, { key: 8 }, [
                    !unref(relationship)?.domainBlocking ? (openBlock(), createBlock(_component_CommonDropdownItem, {
                      key: 0,
                      text: _ctx.$t("menu.block_domain", [("getServerName" in _ctx ? _ctx.getServerName : unref(getServerName))(_ctx.account)]),
                      icon: "i-ri:shut-down-line",
                      command: _ctx.command,
                      onClick: ($event) => unref(toggleBlockDomain)(unref(relationship), _ctx.account)
                    }, null, 8, ["text", "command", "onClick"])) : (openBlock(), createBlock(_component_CommonDropdownItem, {
                      key: 1,
                      text: _ctx.$t("menu.unblock_domain", [("getServerName" in _ctx ? _ctx.getServerName : unref(getServerName))(_ctx.account)]),
                      icon: "i-ri:restart-line",
                      command: _ctx.command,
                      onClick: ($event) => unref(toggleBlockDomain)(unref(relationship), _ctx.account)
                    }, null, 8, ["text", "command", "onClick"]))
                  ], 64)) : createCommentVNode("", true),
                  createVNode(_component_CommonDropdownItem, {
                    text: _ctx.$t("menu.report_account", [`@${_ctx.account.acct}`]),
                    icon: "i-ri:flag-2-line",
                    command: _ctx.command,
                    onClick: ($event) => ("openReportDialog" in _ctx ? _ctx.openReportDialog : unref(openReportDialog))(_ctx.account)
                  }, null, 8, ["text", "command", "onClick"])
                ], 64)) : (openBlock(), createBlock(Fragment, { key: 1 }, [
                  createVNode(_component_NuxtLink, { to: "/pinned" }, {
                    default: withCtx(() => [
                      createVNode(_component_CommonDropdownItem, {
                        text: _ctx.$t("account.pinned"),
                        icon: "i-ri:pushpin-line",
                        command: _ctx.command
                      }, null, 8, ["text", "command"])
                    ]),
                    _: 1
                  }),
                  createVNode(_component_NuxtLink, { to: "/favourites" }, {
                    default: withCtx(() => [
                      createVNode(_component_CommonDropdownItem, {
                        text: _ctx.$t("account.favourites"),
                        icon: unref(useStarFavoriteIcon) ? "i-ri:star-line" : "i-ri:heart-3-line",
                        command: _ctx.command
                      }, null, 8, ["text", "icon", "command"])
                    ]),
                    _: 1
                  }),
                  createVNode(_component_NuxtLink, { to: "/mutes" }, {
                    default: withCtx(() => [
                      createVNode(_component_CommonDropdownItem, {
                        text: _ctx.$t("account.muted_users"),
                        icon: "i-ri:volume-mute-line",
                        command: _ctx.command
                      }, null, 8, ["text", "command"])
                    ]),
                    _: 1
                  }),
                  createVNode(_component_NuxtLink, { to: "/blocks" }, {
                    default: withCtx(() => [
                      createVNode(_component_CommonDropdownItem, {
                        text: _ctx.$t("account.blocked_users"),
                        icon: "i-ri:forbid-2-line",
                        command: _ctx.command
                      }, null, 8, ["text", "command"])
                    ]),
                    _: 1
                  }),
                  createVNode(_component_NuxtLink, { to: "/domain_blocks" }, {
                    default: withCtx(() => [
                      createVNode(_component_CommonDropdownItem, {
                        text: _ctx.$t("account.blocked_domains"),
                        icon: "i-ri:shut-down-line",
                        command: _ctx.command
                      }, null, 8, ["text", "command"])
                    ]),
                    _: 1
                  })
                ], 64))
              ], 64)) : createCommentVNode("", true)
            ];
          }
        }),
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<button flex gap-1 items-center w-full rounded op75 hover="op100 text-purple" group aria-label="More actions"${_scopeId}><div rounded-5 p2 elk-group-hover="bg-purple/10"${_scopeId}><div i-ri:more-2-fill${_scopeId}></div></div></button>`);
          } else {
            return [
              createVNode("button", {
                flex: "",
                "gap-1": "",
                "items-center": "",
                "w-full": "",
                rounded: "",
                op75: "",
                hover: "op100 text-purple",
                group: "",
                "aria-label": "More actions"
              }, [
                createVNode("div", {
                  "rounded-5": "",
                  p2: "",
                  "elk-group-hover": "bg-purple/10"
                }, [
                  createVNode("div", { "i-ri:more-2-fill": "" })
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
const _sfc_setup$3 = _sfc_main$3.setup;
_sfc_main$3.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/account/AccountMoreButton.vue");
  return _sfc_setup$3 ? _sfc_setup$3(props, ctx) : void 0;
};
const _sfc_main$2 = /* @__PURE__ */ defineComponent({
  __name: "Lists",
  __ssrInlineRender: true,
  props: {
    userId: {}
  },
  async setup(__props) {
    let __temp, __restore;
    const __$temp_1 = useMasto(), client = toRef(__$temp_1, "client");
    const paginator = client.value.v1.lists.list();
    const listsWithUser = ref(([__temp, __restore] = withAsyncContext(() => client.value.v1.accounts.listLists(__props.userId)), __temp = await __temp, __restore(), __temp).map((list) => list.id));
    function indexOfUserInList(listId) {
      return listsWithUser.value.indexOf(listId);
    }
    async function edit(listId) {
      try {
        const index = indexOfUserInList(listId);
        if (index === -1) {
          await client.value.v1.lists.addAccount(listId, { accountIds: [__props.userId] });
          listsWithUser.value.push(listId);
        } else {
          await client.value.v1.lists.removeAccount(listId, { accountIds: [__props.userId] });
          listsWithUser.value = listsWithUser.value.filter((id) => id !== listId);
        }
      } catch (err) {
        console.error(err);
      }
    }
    return (_ctx, _push, _parent, _attrs) => {
      const _component_CommonPaginator = _sfc_main$8;
      const _component_CommonTooltip = _sfc_main$i;
      _push(ssrRenderComponent(_component_CommonPaginator, mergeProps({
        "end-message": false,
        paginator: unref(paginator)
      }, _attrs), {
        default: withCtx(({ item }, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div p4 hover:bg-active block w="100%" flex justify-between items-center gap-4${_scopeId}><p${_scopeId}>${ssrInterpolate(item.title)}</p>`);
            _push2(ssrRenderComponent(_component_CommonTooltip, {
              content: indexOfUserInList(item.id) === -1 ? _ctx.$t("list.add_account") : _ctx.$t("list.remove_account"),
              hover: indexOfUserInList(item.id) === -1 ? "text-green" : "text-red"
            }, {
              default: withCtx((_, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<button text-sm p2 border-1 transition-colors border-dark btn-action-icon${_scopeId2}><span class="${ssrRenderClass(indexOfUserInList(item.id) === -1 ? "i-ri:user-add-line" : "i-ri:user-unfollow-line")}"${_scopeId2}></span></button>`);
                } else {
                  return [
                    createVNode("button", {
                      "text-sm": "",
                      p2: "",
                      "border-1": "",
                      "transition-colors": "",
                      "border-dark": "",
                      "btn-action-icon": "",
                      onClick: () => edit(item.id)
                    }, [
                      createVNode("span", {
                        class: indexOfUserInList(item.id) === -1 ? "i-ri:user-add-line" : "i-ri:user-unfollow-line"
                      }, null, 2)
                    ], 8, ["onClick"])
                  ];
                }
              }),
              _: 2
            }, _parent2, _scopeId));
            _push2(`</div>`);
          } else {
            return [
              createVNode("div", {
                p4: "",
                "hover:bg-active": "",
                block: "",
                w: "100%",
                flex: "",
                "justify-between": "",
                "items-center": "",
                "gap-4": ""
              }, [
                createVNode("p", null, toDisplayString(item.title), 1),
                createVNode(_component_CommonTooltip, {
                  content: indexOfUserInList(item.id) === -1 ? _ctx.$t("list.add_account") : _ctx.$t("list.remove_account"),
                  hover: indexOfUserInList(item.id) === -1 ? "text-green" : "text-red"
                }, {
                  default: withCtx(() => [
                    createVNode("button", {
                      "text-sm": "",
                      p2: "",
                      "border-1": "",
                      "transition-colors": "",
                      "border-dark": "",
                      "btn-action-icon": "",
                      onClick: () => edit(item.id)
                    }, [
                      createVNode("span", {
                        class: indexOfUserInList(item.id) === -1 ? "i-ri:user-add-line" : "i-ri:user-unfollow-line"
                      }, null, 2)
                    ], 8, ["onClick"])
                  ]),
                  _: 2
                }, 1032, ["content", "hover"])
              ])
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/list/Lists.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const personalNoteMaxLength = 2e3;
const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  __name: "AccountHeader",
  __ssrInlineRender: true,
  props: {
    account: {},
    command: { type: Boolean }
  },
  setup(__props) {
    const __$temp_1 = useMasto(), client = toRef(__$temp_1, "client");
    const { t } = useI18n();
    const createdAt = useFormattedDateTime(() => __props.account.createdAt, {
      month: "long",
      day: "numeric",
      year: "numeric"
    });
    const relationship = useRelationship(__props.account);
    const namedFields = ref([]);
    const iconFields = ref([]);
    const isEditingPersonalNote = ref(false);
    const hasHeader = computed(() => !__props.account.header.endsWith("/original/missing.png"));
    function getFieldIconTitle(fieldName) {
      return fieldName === "Joined" ? t("account.joined") : fieldName;
    }
    function getNotificationIconTitle() {
      return relationship.value?.notifying ? t("account.notifications_on_post_disable", { username: `@${__props.account.username}` }) : t("account.notifications_on_post_enable", { username: `@${__props.account.username}` });
    }
    function previewHeader() {
      openMediaPreview([{
        id: `${__props.account.acct}:header`,
        type: "image",
        previewUrl: __props.account.header,
        description: t("account.profile_description", [__props.account.username])
      }]);
    }
    async function toggleNotifications() {
      relationship.value.notifying = !relationship.value?.notifying;
      try {
        const newRel = await client.value.v1.accounts.follow(__props.account.id, { notify: relationship.value?.notifying });
        Object.assign(relationship.value, newRel);
      } catch {
        relationship.value.notifying = !relationship.value?.notifying;
      }
    }
    watchEffect(() => {
      const named = [];
      const icons = [];
      __props.account.fields?.forEach((field) => {
        const icon = getAccountFieldIcon(field.name);
        if (icon)
          icons.push(field);
        else
          named.push(field);
      });
      icons.push({
        name: "Joined",
        value: createdAt.value
      });
      namedFields.value = named;
      iconFields.value = icons;
    });
    const personalNoteDraft = ref(relationship.value?.note ?? "");
    watch(relationship, (relationship2, oldValue) => {
      if (!oldValue && relationship2)
        personalNoteDraft.value = relationship2.note ?? "";
    });
    const isSelf = useSelfAccount(() => __props.account);
    const isNotifiedOnPost = computed(() => !!relationship.value?.notifying);
    return (_ctx, _push, _parent, _attrs) => {
      const _component_AccountAvatar = _sfc_main$n;
      const _component_NuxtLink = __nuxt_component_0$1;
      const _component_AccountFollowButton = _sfc_main$m;
      const _component_AccountMoreButton = _sfc_main$3;
      const _component_CommonTooltip = _sfc_main$i;
      const _component_VDropdown = resolveComponent("VDropdown");
      const _component_ListLists = _sfc_main$2;
      const _component_AccountDisplayName = _sfc_main$c;
      const _component_AccountRolesIndicator = _sfc_main$b;
      const _component_AccountLockIndicator = _sfc_main$a;
      const _component_AccountBotIndicator = _sfc_main$9;
      const _component_AccountHandle = _sfc_main$8$1;
      const _component_ContentRich = _sfc_main$j;
      const _component_AccountPostsFollowers = _sfc_main$g;
      _push(`<div${ssrRenderAttrs(mergeProps({
        flex: "",
        "flex-col": ""
      }, _attrs))}>`);
      ssrRenderVNode(_push, createVNode(resolveDynamicComponent(hasHeader.value ? "button" : "div"), {
        border: "b base",
        "z-1": "",
        onClick: ($event) => hasHeader.value ? previewHeader() : void 0
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<img h-50 height="200" w-full object-cover${ssrRenderAttr("src", _ctx.account.header)}${ssrRenderAttr("alt", unref(t)("account.profile_description", [_ctx.account.username]))}${_scopeId}>`);
          } else {
            return [
              createVNode("img", {
                "h-50": "",
                height: "200",
                "w-full": "",
                "object-cover": "",
                src: _ctx.account.header,
                alt: unref(t)("account.profile_description", [_ctx.account.username])
              }, null, 8, ["src", "alt"])
            ];
          }
        }),
        _: 1
      }), _parent);
      _push(`<div p4 mt--18 flex flex-col gap-4><div relative><div flex justify-between><button shrink-0 class="${ssrRenderClass({ "rounded-full": !unref(isSelf), "squircle": unref(isSelf) })}" p1 bg-base border-bg-base z-2>`);
      _push(ssrRenderComponent(_component_AccountAvatar, {
        square: unref(isSelf),
        account: _ctx.account,
        "hover:opacity-90": "",
        "transition-opacity": "",
        "w-28": "",
        "h-28": ""
      }, null, _parent));
      _push(`</button><div inset-ie-0 flex="~ wrap row-reverse" gap-2 items-center pt18 justify-start>`);
      if (unref(isSelf)) {
        _push(ssrRenderComponent(_component_NuxtLink, {
          to: "/settings/profile/appearance",
          "gap-1": "",
          "items-center": "",
          border: "1",
          "rounded-full": "",
          flex: "~ gap2 center",
          "font-500": "",
          "min-w-30": "",
          "h-fit": "",
          px3: "",
          py1: "",
          hover: "border-primary text-primary bg-active"
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`${ssrInterpolate(_ctx.$t("settings.profile.appearance.title"))}`);
            } else {
              return [
                createTextVNode(toDisplayString(_ctx.$t("settings.profile.appearance.title")), 1)
              ];
            }
          }),
          _: 1
        }, _parent));
      } else {
        _push(`<!---->`);
      }
      _push(ssrRenderComponent(_component_AccountFollowButton, {
        account: _ctx.account,
        command: _ctx.command
      }, null, _parent));
      _push(`<span inset-ie-0 flex gap-2 items-center>`);
      _push(ssrRenderComponent(_component_AccountMoreButton, {
        account: _ctx.account,
        command: _ctx.command,
        onAddNote: ($event) => isEditingPersonalNote.value = true,
        onRemoveNote: () => {
          isEditingPersonalNote.value = false;
          personalNoteDraft.value = "";
        }
      }, null, _parent));
      if (!unref(isSelf) && unref(relationship)?.following) {
        _push(ssrRenderComponent(_component_CommonTooltip, {
          content: getNotificationIconTitle()
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`<button${ssrRenderAttr("aria-pressed", isNotifiedOnPost.value)}${ssrRenderAttr("aria-label", unref(t)("account.notifications_on_post_enable", { username: `@${_ctx.account.username}` }))} rounded-full text-sm p2 border-1 transition-colors class="${ssrRenderClass(isNotifiedOnPost.value ? "text-primary border-primary hover:bg-red/20 hover:text-red hover:border-red" : "border-base hover:text-primary")}"${_scopeId}>`);
              if (isNotifiedOnPost.value) {
                _push2(`<span i-ri:notification-4-fill block text-current${_scopeId}></span>`);
              } else {
                _push2(`<span i-ri-notification-4-line block text-current${_scopeId}></span>`);
              }
              _push2(`</button>`);
            } else {
              return [
                createVNode("button", {
                  "aria-pressed": isNotifiedOnPost.value,
                  "aria-label": unref(t)("account.notifications_on_post_enable", { username: `@${_ctx.account.username}` }),
                  "rounded-full": "",
                  "text-sm": "",
                  p2: "",
                  "border-1": "",
                  "transition-colors": "",
                  class: isNotifiedOnPost.value ? "text-primary border-primary hover:bg-red/20 hover:text-red hover:border-red" : "border-base hover:text-primary",
                  onClick: toggleNotifications
                }, [
                  isNotifiedOnPost.value ? (openBlock(), createBlock("span", {
                    key: 0,
                    "i-ri:notification-4-fill": "",
                    block: "",
                    "text-current": ""
                  })) : (openBlock(), createBlock("span", {
                    key: 1,
                    "i-ri-notification-4-line": "",
                    block: "",
                    "text-current": ""
                  }))
                ], 10, ["aria-pressed", "aria-label"])
              ];
            }
          }),
          _: 1
        }, _parent));
      } else {
        _push(`<!---->`);
      }
      _push(ssrRenderComponent(_component_CommonTooltip, {
        content: _ctx.$t("list.modify_account")
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            if (!unref(isSelf) && unref(relationship)?.following) {
              _push2(ssrRenderComponent(_component_VDropdown, null, {
                popper: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(ssrRenderComponent(_component_ListLists, {
                      "user-id": _ctx.account.id
                    }, null, _parent3, _scopeId2));
                  } else {
                    return [
                      createVNode(_component_ListLists, {
                        "user-id": _ctx.account.id
                      }, null, 8, ["user-id"])
                    ];
                  }
                }),
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(`<button${ssrRenderAttr("aria-label", _ctx.$t("list.modify_account"))} rounded-full text-sm p2 border-1 transition-colors border-base hover:text-primary${_scopeId2}><span i-ri:play-list-add-fill block text-current${_scopeId2}></span></button>`);
                  } else {
                    return [
                      createVNode("button", {
                        "aria-label": _ctx.$t("list.modify_account"),
                        "rounded-full": "",
                        "text-sm": "",
                        p2: "",
                        "border-1": "",
                        "transition-colors": "",
                        "border-base": "",
                        "hover:text-primary": ""
                      }, [
                        createVNode("span", {
                          "i-ri:play-list-add-fill": "",
                          block: "",
                          "text-current": ""
                        })
                      ], 8, ["aria-label"])
                    ];
                  }
                }),
                _: 1
              }, _parent2, _scopeId));
            } else {
              _push2(`<!---->`);
            }
          } else {
            return [
              !unref(isSelf) && unref(relationship)?.following ? (openBlock(), createBlock(_component_VDropdown, { key: 0 }, {
                popper: withCtx(() => [
                  createVNode(_component_ListLists, {
                    "user-id": _ctx.account.id
                  }, null, 8, ["user-id"])
                ]),
                default: withCtx(() => [
                  createVNode("button", {
                    "aria-label": _ctx.$t("list.modify_account"),
                    "rounded-full": "",
                    "text-sm": "",
                    p2: "",
                    "border-1": "",
                    "transition-colors": "",
                    "border-base": "",
                    "hover:text-primary": ""
                  }, [
                    createVNode("span", {
                      "i-ri:play-list-add-fill": "",
                      block: "",
                      "text-current": ""
                    })
                  ], 8, ["aria-label"])
                ]),
                _: 1
              })) : createCommentVNode("", true)
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</span></div></div><div flex="~ col gap1" pt2><div flex gap2 items-center flex-wrap>`);
      _push(ssrRenderComponent(_component_AccountDisplayName, {
        account: _ctx.account,
        "font-bold": "",
        "sm:text-2xl": "",
        "text-xl": ""
      }, null, _parent));
      if (_ctx.account.roles?.length) {
        _push(ssrRenderComponent(_component_AccountRolesIndicator, { account: _ctx.account }, null, _parent));
      } else {
        _push(`<!---->`);
      }
      if (_ctx.account.locked) {
        _push(ssrRenderComponent(_component_AccountLockIndicator, { "show-label": "" }, null, _parent));
      } else {
        _push(`<!---->`);
      }
      if (_ctx.account.bot) {
        _push(ssrRenderComponent(_component_AccountBotIndicator, { "show-label": "" }, null, _parent));
      } else {
        _push(`<!---->`);
      }
      _push(`</div>`);
      _push(ssrRenderComponent(_component_AccountHandle, {
        account: _ctx.account,
        "overflow-unset": "",
        "line-clamp-unset": ""
      }, null, _parent));
      _push(`</div></div>`);
      if (unref(isEditingPersonalNote) || unref(relationship)?.note && unref(relationship).note.length > 0) {
        _push(`<label space-y-2 pb-4 block border="b base"><div flex flex-row space-x-2 flex-v-center><div i-ri-edit-2-line></div><p font-medium>${ssrInterpolate(_ctx.$t("account.profile_personal_note"))}</p><p text-secondary text-sm class="${ssrRenderClass({ "text-orange": unref(personalNoteDraft).length > personalNoteMaxLength - 100 })}">${ssrInterpolate(unref(personalNoteDraft).length)} / ${ssrInterpolate(personalNoteMaxLength)}</p></div><div position-relative><div input-base min-h-10ex whitespace-pre-wrap opacity-0 class="${ssrRenderClass({ "trailing-newline": unref(personalNoteDraft).endsWith("\n") })}">${ssrInterpolate(unref(personalNoteDraft))}</div><textarea input-base position-absolute style="${ssrRenderStyle({ "height": "100%" })}" top-0 resize-none${ssrRenderAttr("maxlength", personalNoteMaxLength)}>${ssrInterpolate(unref(personalNoteDraft))}</textarea></div></label>`);
      } else {
        _push(`<!---->`);
      }
      if (_ctx.account.note) {
        _push(`<div max-h-100 overflow-y-auto>`);
        _push(ssrRenderComponent(_component_ContentRich, {
          "text-4": "",
          "text-base": "",
          content: _ctx.account.note,
          emojis: _ctx.account.emojis
        }, null, _parent));
        _push(`</div>`);
      } else {
        _push(`<!---->`);
      }
      if (unref(namedFields).length) {
        _push(`<div flex="~ col wrap gap1"><!--[-->`);
        ssrRenderList(unref(namedFields), (field) => {
          _push(`<div flex="~ gap-1" items-center><div mt="0.5" text-secondary uppercase text-xs font-bold>`);
          _push(ssrRenderComponent(_component_ContentRich, {
            content: field.name,
            emojis: _ctx.account.emojis
          }, null, _parent));
          _push(`</div><span text-secondary text-xs font-bold>|</span>`);
          _push(ssrRenderComponent(_component_ContentRich, {
            content: field.value,
            emojis: _ctx.account.emojis
          }, null, _parent));
          _push(`</div>`);
        });
        _push(`<!--]--></div>`);
      } else {
        _push(`<!---->`);
      }
      if (unref(iconFields).length) {
        _push(`<div flex="~ wrap gap-2"><!--[-->`);
        ssrRenderList(unref(iconFields), (field) => {
          _push(`<div flex="~ gap-1" px1 items-center class="${ssrRenderClass(`${field.verifiedAt ? "border-1 rounded-full border-dark" : ""}`)}">`);
          _push(ssrRenderComponent(_component_CommonTooltip, {
            content: getFieldIconTitle(field.name)
          }, {
            default: withCtx((_, _push2, _parent2, _scopeId) => {
              if (_push2) {
                _push2(`<div text-secondary class="${ssrRenderClass(("getAccountFieldIcon" in _ctx ? _ctx.getAccountFieldIcon : unref(getAccountFieldIcon))(field.name))}"${ssrRenderAttr("title", getFieldIconTitle(field.name))}${_scopeId}></div>`);
              } else {
                return [
                  createVNode("div", {
                    "text-secondary": "",
                    class: ("getAccountFieldIcon" in _ctx ? _ctx.getAccountFieldIcon : unref(getAccountFieldIcon))(field.name),
                    title: getFieldIconTitle(field.name)
                  }, null, 10, ["title"])
                ];
              }
            }),
            _: 2
          }, _parent));
          _push(ssrRenderComponent(_component_ContentRich, {
            "text-sm": "",
            content: field.value,
            emojis: _ctx.account.emojis
          }, null, _parent));
          _push(`</div>`);
        });
        _push(`<!--]--></div>`);
      } else {
        _push(`<!---->`);
      }
      _push(ssrRenderComponent(_component_AccountPostsFollowers, { account: _ctx.account }, null, _parent));
      _push(`</div></div>`);
    };
  }
});
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/account/AccountHeader.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "index",
  __ssrInlineRender: true,
  async setup(__props) {
    let __temp, __restore;
    const params = useRoute().params;
    const accountName = computedEager(() => toShortHandle(params.account));
    const { t } = useI18n();
    const __$temp_1 = ([__temp, __restore] = withAsyncContext(() => useAsyncData(() => fetchAccountByHandle(accountName.value).catch(() => null), { immediate: false, default: () => shallowRef() }, "$NnZymwqz1Y")), __temp = await __temp, __restore(), __temp), account = toRef(__$temp_1, "data"), pending = toRef(__$temp_1, "pending");
    toRef(__$temp_1, "refresh");
    const relationship = computed(() => account.value ? useRelationship(account.value).value : void 0);
    const userSettings = useUserSettings();
    onReactivated();
    return (_ctx, _push, _parent, _attrs) => {
      const _component_MainContent = _sfc_main$2$1;
      const _component_ContentRich = _sfc_main$j;
      const _component_AccountMoved = _sfc_main$4;
      const _component_AccountHeader = _sfc_main$1;
      const _component_NuxtPage = __nuxt_component_4;
      const _component_CommonNotFound = __nuxt_component_5;
      _push(ssrRenderComponent(_component_MainContent, mergeProps({ back: "" }, _attrs), {
        title: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_ContentRich, {
              "timeline-title-style": "",
              content: account.value ? ("getDisplayName" in _ctx ? _ctx.getDisplayName : unref(getDisplayName))(account.value) : unref(t)("nav.profile"),
              "show-emojis": !("getPreferences" in _ctx ? _ctx.getPreferences : unref(getPreferences))(unref(userSettings), "hideUsernameEmojis"),
              markdown: false
            }, null, _parent2, _scopeId));
          } else {
            return [
              createVNode(_component_ContentRich, {
                "timeline-title-style": "",
                content: account.value ? ("getDisplayName" in _ctx ? _ctx.getDisplayName : unref(getDisplayName))(account.value) : unref(t)("nav.profile"),
                "show-emojis": !("getPreferences" in _ctx ? _ctx.getPreferences : unref(getPreferences))(unref(userSettings), "hideUsernameEmojis"),
                markdown: false
              }, null, 8, ["content", "show-emojis"])
            ];
          }
        }),
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            if (pending.value) {
              _push2(`<!--[--><!--]-->`);
            } else if (account.value) {
              _push2(`<!--[-->`);
              if (account.value.moved) {
                _push2(ssrRenderComponent(_component_AccountMoved, { account: account.value }, null, _parent2, _scopeId));
              } else {
                _push2(`<!---->`);
              }
              _push2(ssrRenderComponent(_component_AccountHeader, {
                account: account.value,
                command: "",
                border: "b base",
                class: { "op-50 grayscale-50": !!account.value.moved }
              }, null, _parent2, _scopeId));
              if (relationship.value?.blockedBy) {
                _push2(`<div h-30 flex="~ col center gap-2"${_scopeId}><div text-secondary${_scopeId}>${ssrInterpolate(_ctx.$t("account.profile_unavailable"))}</div><div text-secondary-light text-sm${_scopeId}>${ssrInterpolate(_ctx.$t("account.blocked_by"))}</div></div>`);
              } else {
                _push2(ssrRenderComponent(_component_NuxtPage, null, null, _parent2, _scopeId));
              }
              _push2(`<!--]-->`);
            } else {
              _push2(ssrRenderComponent(_component_CommonNotFound, null, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(`${ssrInterpolate(_ctx.$t("error.account_not_found", [`@${unref(accountName)}`]))}`);
                  } else {
                    return [
                      createTextVNode(toDisplayString(_ctx.$t("error.account_not_found", [`@${unref(accountName)}`])), 1)
                    ];
                  }
                }),
                _: 1
              }, _parent2, _scopeId));
            }
          } else {
            return [
              pending.value ? (openBlock(), createBlock(Fragment, { key: 0 }, [], 64)) : account.value ? (openBlock(), createBlock(Fragment, { key: 1 }, [
                account.value.moved ? (openBlock(), createBlock(_component_AccountMoved, {
                  key: 0,
                  account: account.value
                }, null, 8, ["account"])) : createCommentVNode("", true),
                createVNode(_component_AccountHeader, {
                  account: account.value,
                  command: "",
                  border: "b base",
                  class: { "op-50 grayscale-50": !!account.value.moved }
                }, null, 8, ["account", "class"]),
                relationship.value?.blockedBy ? (openBlock(), createBlock("div", {
                  key: 1,
                  "h-30": "",
                  flex: "~ col center gap-2"
                }, [
                  createVNode("div", { "text-secondary": "" }, toDisplayString(_ctx.$t("account.profile_unavailable")), 1),
                  createVNode("div", {
                    "text-secondary-light": "",
                    "text-sm": ""
                  }, toDisplayString(_ctx.$t("account.blocked_by")), 1)
                ])) : (openBlock(), createBlock(_component_NuxtPage, { key: 2 }))
              ], 64)) : (openBlock(), createBlock(_component_CommonNotFound, { key: 2 }, {
                default: withCtx(() => [
                  createTextVNode(toDisplayString(_ctx.$t("error.account_not_found", [`@${unref(accountName)}`])), 1)
                ]),
                _: 1
              }))
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/[[server]]/@[account]/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
