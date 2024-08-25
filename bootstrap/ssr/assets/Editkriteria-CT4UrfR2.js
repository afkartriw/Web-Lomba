import { mergeProps, unref, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrRenderList, ssrRenderAttr, ssrRenderStyle, ssrInterpolate } from "vue/server-renderer";
import { usePage, useForm } from "@inertiajs/vue3";
import "sweetalert2";
const _sfc_main = {
  __name: "Editkriteria",
  __ssrInlineRender: true,
  props: ["name", "username", "settings", "logo1"],
  setup(__props) {
    const kriteria = usePage().props.kriterias;
    const form = useForm({
      name_kriteria: kriteria.data.name_kriteria
    });
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "wrapper" }, _attrs))}><header><div class="c-topbar"><nav class="navbar navbar-expand"><div class="navbar-tambah"><!--[-->`);
      ssrRenderList(__props.settings, (setting) => {
        _push(`<div class="navbar-left"><a href="/"><img${ssrRenderAttr("src", setting.logo1 ? `/storage/${setting.logo1}` : "/bootstrap/images/logo1default.jpg")} alt="Logo" style="${ssrRenderStyle({ "width": "135px", "margin-left": "-15px" })}"></a></div>`);
      });
      _push(`<!--]--></div><div class="search-bar flex-grow-1"></div><div class="top-menu ms-auto"><ul class="navbar-nav align-items-center"><div class="user-info ps-3"><p class="user-name mb-0">${ssrInterpolate(_ctx.$page.props.userData.name)}</p><p class="user-role">${ssrInterpolate(_ctx.$page.props.userData.username)}</p></div><div class="parent-icon posisi-icon"><i class="bx bx-user-circle c-font48"></i></div></ul></div></nav></div></header><div class="page-wrapper-new"><div class="page-content"><div class="card"><form><div class="card-body"><h4 class="mb-0">EDIT KRITERIA PENILAIAN</h4><hr><div class="row"><div class="c-mb10"><label class="c-mb5-black"><b>Kriteria Penilaian</b></label><input type="text" class="form-control" placeholder="Masukan kriteria penilaian"${ssrRenderAttr("value", unref(form).name_kriteria)} id="name_kriteria" required></div></div><div class="btn-posisi"><button class="btn btn-danger button-left">Kembali</button><button type="submit" class="btn btn-primary button-right">Simpan</button></div></div></form></div></div></div></div>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Pages/Roles/Admin/Kriteria/Editkriteria.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
