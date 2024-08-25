import { mergeProps, unref, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrRenderStyle, ssrInterpolate } from "vue/server-renderer";
import { useForm } from "@inertiajs/vue3";
const _sfc_main = {
  __name: "Detailkriteria",
  __ssrInlineRender: true,
  props: {
    name: String,
    username: String,
    kriteria: Object
  },
  setup(__props) {
    const props = __props;
    console.log(props.name);
    console.log(props.username);
    const form = useForm({
      name_kriteria: props.kriteria.name_kriteria
    });
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "wrapper" }, _attrs))}><header><div class="c-topbar"><nav class="navbar navbar-expand"><div class="navbar-tambah"><div class="navbar-left"><a href="/"><img src="/bootstrap/images/lg.png" alt="Logo" style="${ssrRenderStyle({ "width": "100px", "margin-left": "-15px" })}"></a></div></div><div class="search-bar flex-grow-1"></div><div class="top-menu ms-auto"><ul class="navbar-nav align-items-center"><div class="user-info ps-3"><p class="user-name mb-0">${ssrInterpolate(_ctx.$page.props.userData.name)}</p><p class="user-role">${ssrInterpolate(_ctx.$page.props.userData.username)}</p></div><div class="parent-icon posisi-icon"><i class="bx bx-user-circle c-font48"></i></div></ul></div></nav></div></header><div class="page-wrapper-new"><div class="page-content"><div class="card"><div class="card-body"><h4 class="mb-0">DETAIL KRITERIA LOMBA</h4><hr><div class="row"><div class="col-md-6 c-mb10"><label class="c-mb5-black"><b>NAMA KRITERIA</b></label><div class="data-tim">${ssrInterpolate(unref(form).name_kriteria)}</div></div></div><div class="btn-posisi"><button class="btn btn-danger btn-kembali">Kembali</button></div></div></div></div></div></div>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Pages/Roles/Admin/Kriteria/Detailkriteria.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
