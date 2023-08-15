import { a2 as useRouter, aW as useCommands, _ as __nuxt_component_0$1 } from '../server.mjs';
import { defineComponent, mergeProps, withCtx, createVNode, toDisplayString, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderList, ssrRenderComponent, ssrInterpolate } from 'vue/server-renderer';

const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "CommonRouteTabs",
  __ssrInlineRender: true,
  props: {
    options: {},
    command: { type: Boolean },
    replace: { type: Boolean },
    preventScrollTop: { type: Boolean, default: false }
  },
  setup(__props) {
    const router = useRouter();
    useCommands(() => __props.command ? __props.options.map((tab) => ({
      scope: "Tabs",
      name: tab.display,
      icon: tab.icon ?? "i-ri:file-list-2-line",
      onActivate: () => router.replace(tab.to)
    })) : []);
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NuxtLink = __nuxt_component_0$1;
      _push(`<div${ssrRenderAttrs(mergeProps({
        flex: "",
        "w-full": "",
        "items-center": "",
        "lg:text-lg": "",
        "of-x-auto": "",
        "scrollbar-hide": "",
        border: "b base"
      }, _attrs))}><!--[-->`);
      ssrRenderList(_ctx.options.filter((item) => !item.hide), (option, index) => {
        _push(`<!--[-->`);
        if (!option.disabled) {
          _push(ssrRenderComponent(_component_NuxtLink, {
            to: option.to,
            replace: _ctx.replace,
            relative: "",
            flex: "",
            "flex-auto": "",
            "cursor-pointer": "",
            "sm:px6": "",
            px2: "",
            rounded: "",
            "transition-all": "",
            tabindex: "1",
            "hover:bg-active": "",
            "transition-100": "",
            "exact-active-class": "children:text-secondary !children:border-primary !children:op100 !children:text-base",
            onClick: ($event) => !_ctx.preventScrollTop && _ctx.$scrollToTop()
          }, {
            default: withCtx((_, _push2, _parent2, _scopeId) => {
              if (_push2) {
                _push2(`<span ws-nowrap mxa sm:px2 sm:py3 xl:pb4 xl:pt5 py2 text-center border-b-3 text-secondary-light hover:text-secondary border-transparent${_scopeId}>${ssrInterpolate(option.display || "\xA0")}</span>`);
              } else {
                return [
                  createVNode("span", {
                    "ws-nowrap": "",
                    mxa: "",
                    "sm:px2": "",
                    "sm:py3": "",
                    "xl:pb4": "",
                    "xl:pt5": "",
                    py2: "",
                    "text-center": "",
                    "border-b-3": "",
                    "text-secondary-light": "",
                    "hover:text-secondary": "",
                    "border-transparent": ""
                  }, toDisplayString(option.display || "\xA0"), 1)
                ];
              }
            }),
            _: 2
          }, _parent));
        } else {
          _push(`<div flex flex-auto sm:px6 px2 xl:pb4 xl:pt5><span ws-nowrap mxa sm:px2 sm:py3 py2 text-center text-secondary-light op50>${ssrInterpolate(option.display)}</span></div>`);
        }
        _push(`<!--]-->`);
      });
      _push(`<!--]--></div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/common/CommonRouteTabs.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as _ };
