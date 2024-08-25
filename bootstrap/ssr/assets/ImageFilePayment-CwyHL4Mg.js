import { mergeProps, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrRenderAttr } from "vue/server-renderer";
import { _ as _export_sfc } from "./_plugin-vue_export-helper-1tPrXgE0.js";
const _sfc_main = {
  __name: "ImageFilePayment",
  __ssrInlineRender: true,
  props: ["UserData"],
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "image-container" }, _attrs))} data-v-489af80d><div class="btn-posisi" data-v-489af80d><button class="btn btn-danger btn-kembali" data-v-489af80d>Kembali</button></div><img${ssrRenderAttr("src", __props.UserData.payment ? `/storage/${__props.UserData.payment}` : "/bootstrap/images/default2.png")} alt="..." class="img-fluid rounded full-screen" data-v-489af80d></div>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Pages/Roles/User/Daftar/ImageFilePayment.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const ImageFilePayment = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-489af80d"]]);
export {
  ImageFilePayment as default
};
