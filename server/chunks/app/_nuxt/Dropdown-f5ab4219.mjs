import { useSSRContext, defineComponent, ref, provide, resolveComponent, mergeProps, unref, withCtx, renderSlot } from 'vue';
import { ssrRenderComponent, ssrRenderSlot } from 'vue/server-renderer';
import { aT as useColorMode, aU as InjectionKeyDropdownContext } from '../server.mjs';

const accountFieldIcons = Object.fromEntries(Object.entries({
  Alipay: "i-ri:alipay-line",
  Bilibili: "i-ri:bilibili-line",
  Birth: "i-ri:calendar-line",
  Blog: "i-ri:newspaper-line",
  City: "i-ri:map-pin-2-line",
  Dingding: "i-ri:dingding-line",
  Discord: "i-ri:discord-line",
  Douban: "i-ri:douban-line",
  Facebook: "i-ri:facebook-line",
  GitHub: "i-ri:github-line",
  GitLab: "i-ri:gitlab-line",
  GPG: "i-ri:key-2-line",
  Home: "i-ri:home-2-line",
  Instagram: "i-ri:instagram-line",
  Joined: "i-ri:user-add-line",
  Keyoxide: "i-ri:key-2-line",
  Language: "i-ri:translate-2",
  Languages: "i-ri:translate-2",
  LinkedIn: "i-ri:linkedin-box-line",
  Location: "i-ri:map-pin-2-line",
  Mastodon: "i-ri:mastodon-line",
  Matrix: "i-tabler:brand-matrix",
  Medium: "i-ri:medium-line",
  OpenPGP: "i-ri:key-2-line",
  Patreon: "i-ri:patreon-line",
  PayPal: "i-ri:paypal-line",
  PGP: "i-ri:key-2-line",
  Photos: "i-ri:camera-2-line",
  PlayStation: "i-ri:playstation-line",
  Portfolio: "i-ri:link",
  Pronouns: "i-ri:contacts-line",
  QQ: "i-ri:qq-line",
  Site: "i-ri:link",
  Sponsors: "i-ri:heart-3-line",
  Spotify: "i-ri:spotify-line",
  Steam: "i-ri:steam-line",
  Switch: "i-ri:switch-line",
  Telegram: "i-ri:telegram-line",
  Tumblr: "i-ri:tumblr-line",
  Twitch: "i-ri:twitch-line",
  Twitter: "i-ri:twitter-line",
  Website: "i-ri:link",
  WeChat: "i-ri:wechat-line",
  Weibo: "i-ri:weibo-line",
  Xbox: "i-ri:xbox-line",
  YouTube: "i-ri:youtube-line",
  Zhihu: "i-ri:zhihu-line"
}).sort(([a], [b]) => a.localeCompare(b)));
const accountFieldIconsLowercase = Object.fromEntries(
  Object.entries(accountFieldIcons).map(
    ([k, v]) => [k.toLowerCase(), v]
  )
);
function getAccountFieldIcon(value) {
  const name = value.trim().toLowerCase();
  return accountFieldIconsLowercase[name] || void 0;
}
const statusVisibilities = [
  {
    value: "public",
    icon: "i-ri:global-line"
  },
  {
    value: "unlisted",
    icon: "i-ri:lock-unlock-line"
  },
  {
    value: "private",
    icon: "i-ri:lock-line"
  },
  {
    value: "direct",
    icon: "i-ri:at-line"
  }
];
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "Dropdown",
  __ssrInlineRender: true,
  props: {
    placement: {},
    autoBoundaryMaxSize: { type: Boolean }
  },
  setup(__props, { expose: __expose }) {
    const dropdown = ref();
    const colorMode = useColorMode();
    function hide() {
      return dropdown.value.hide();
    }
    provide(InjectionKeyDropdownContext, {
      hide
    });
    __expose({
      hide
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_VDropdown = resolveComponent("VDropdown");
      _push(ssrRenderComponent(_component_VDropdown, mergeProps(_ctx.$attrs, {
        ref_key: "dropdown",
        ref: dropdown,
        class: unref(colorMode).value,
        placement: _ctx.placement || "auto",
        "auto-boundary-max-size": _ctx.autoBoundaryMaxSize
      }, _attrs), {
        popper: withCtx((scope, _push2, _parent2, _scopeId) => {
          if (_push2) {
            ssrRenderSlot(_ctx.$slots, "popper", scope, null, _push2, _parent2, _scopeId);
          } else {
            return [
              renderSlot(_ctx.$slots, "popper", scope)
            ];
          }
        }),
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            ssrRenderSlot(_ctx.$slots, "default", {}, null, _push2, _parent2, _scopeId);
          } else {
            return [
              renderSlot(_ctx.$slots, "default")
            ];
          }
        }),
        _: 3
      }, _parent));
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/common/dropdown/Dropdown.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as _, accountFieldIcons as a, getAccountFieldIcon as g, statusVisibilities as s };
