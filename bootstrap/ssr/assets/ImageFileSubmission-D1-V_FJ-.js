import { mergeProps, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrRenderAttr } from "vue/server-renderer";
import { _ as _export_sfc } from "./_plugin-vue_export-helper-1tPrXgE0.js";
const _sfc_main = {
  __name: "ImageFileSubmission",
  __ssrInlineRender: true,
  props: ["UserData"],
  setup(__props) {
    const props = __props;
    const getDownloadLink = () => {
      if (props.UserData.file) {
        return `/storage/${props.UserData.file}`;
      } else {
        return "/bootstrap/images/default2.png";
      }
    };
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "image-container" }, _attrs))} data-v-5769c763><div class="btn-posisi" data-v-5769c763><a${ssrRenderAttr("href", getDownloadLink())} class="btn btn-success" download data-v-5769c763>Download zip</a></div><div class="btn-back" data-v-5769c763><a class="btn btn-primary" data-v-5769c763>Kembali</a></div></div>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Pages/Roles/User/Daftar/ImageFileSubmission.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const ImageFileSubmission = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-5769c763"]]);
export {
  ImageFileSubmission as default
};
