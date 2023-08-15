import { m as useMasto, K as _sfc_main$i } from '../server.mjs';
import { defineComponent, toRef, mergeProps, withCtx, createVNode, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderClass } from 'vue/server-renderer';

const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "TagActionButton",
  __ssrInlineRender: true,
  props: {
    tag: {}
  },
  emits: ["change"],
  setup(__props, { emit }) {
    const __$temp_1 = useMasto();
    toRef(__$temp_1, "client");
    return (_ctx, _push, _parent, _attrs) => {
      const _component_CommonTooltip = _sfc_main$i;
      _push(`<button${ssrRenderAttrs(mergeProps({
        rounded: "",
        group: "",
        "focus:outline-none": "",
        "hover:text-primary": "",
        "focus-visible:text-primary": "",
        "aria-label": _ctx.tag.following ? _ctx.$t("tag.unfollow_label", [_ctx.tag.name]) : _ctx.$t("tag.follow_label", [_ctx.tag.name])
      }, _attrs))}>`);
      _push(ssrRenderComponent(_component_CommonTooltip, {
        placement: "bottom",
        content: _ctx.tag.following ? _ctx.$t("tag.unfollow") : _ctx.$t("tag.follow")
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div rounded-full p2 elk-group-hover="bg-orange/10" group-focus-visible="bg-orange/10" group-focus-visible:ring="2 current"${_scopeId}><div class="${ssrRenderClass([_ctx.tag.following ? "i-ri:star-fill" : "i-ri:star-line"])}"${_scopeId}></div></div>`);
          } else {
            return [
              createVNode("div", {
                "rounded-full": "",
                p2: "",
                "elk-group-hover": "bg-orange/10",
                "group-focus-visible": "bg-orange/10",
                "group-focus-visible:ring": "2 current"
              }, [
                createVNode("div", {
                  class: [_ctx.tag.following ? "i-ri:star-fill" : "i-ri:star-line"]
                }, null, 2)
              ])
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</button>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/tag/TagActionButton.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as _ };
