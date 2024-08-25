import { mergeProps, unref, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrRenderList, ssrRenderAttr, ssrRenderStyle, ssrInterpolate } from "vue/server-renderer";
import { useForm } from "@inertiajs/vue3";
import "sweetalert2";
const _sfc_main = {
  __name: "Settingproject",
  __ssrInlineRender: true,
  props: {
    name: String,
    username: String,
    settings: Array,
    logo1: String,
    appName: String
  },
  setup(__props) {
    const form = useForm({
      appName: "",
      emailName: ""
    });
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "wrapper" }, _attrs))}><header><div class="c-topbar"><nav class="navbar navbar-expand"><div class="navbar-tambah"><!--[-->`);
      ssrRenderList(__props.settings, (setting) => {
        _push(`<div class="navbar-left"><a href="/"><img${ssrRenderAttr("src", setting.logo1 ? `/storage/${setting.logo1}` : "/bootstrap/images/logo1default.jpg")} alt="Logo" style="${ssrRenderStyle({ "width": "135px", "margin-left": "-15px" })}"></a></div>`);
      });
      _push(`<!--]--></div><div class="search-bar flex-grow-1"></div><div class="top-menu ms-auto"><ul class="navbar-nav align-items-center"><div class="user-info ps-3"><p class="user-name mb-0">${ssrInterpolate(_ctx.$page.props.userData.name)}</p><p class="user-role">${ssrInterpolate(_ctx.$page.props.userData.username)}</p></div><div class="parent-icon posisi-icon"><i class="bx bx-user-circle c-font48"></i></div></ul></div></nav></div></header><div class="page-wrapper-new"><div class="page-content"><div class="card"><div class="card-body"><h4 class="mb-0">SETTING EMAIL PROJECT</h4><hr><form enctype="multipart/form-data"><div><label class="c-mb5-black">Name</label><input type="text"${ssrRenderAttr("value", unref(form).appName)} class="form-control c-mb20" placeholder="Masukkan nama">`);
      if (unref(form).errors.appName) {
        _push(`<span>${ssrInterpolate(unref(form).errors.appName)}</span>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div><div><label class="c-mb5-black">Email</label><input type="text"${ssrRenderAttr("value", unref(form).emailName)} class="form-control c-mb20" placeholder="Masukkan email">`);
      if (unref(form).errors.emailName) {
        _push(`<span>${ssrInterpolate(unref(form).errors.emailName)}</span>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div><div class="btn-posisi"><button class="btn btn-danger button-left">Batal</button><button type="submit" class="btn btn-primary button-right">Simpan</button></div></form></div></div></div></div></div>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Pages/Roles/Admin/Settingproject.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
