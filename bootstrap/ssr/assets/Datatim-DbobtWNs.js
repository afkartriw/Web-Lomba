import { mergeProps, unref, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrRenderList, ssrRenderAttr, ssrRenderStyle, ssrInterpolate } from "vue/server-renderer";
import { usePage, useForm } from "@inertiajs/vue3";
import "sweetalert2";
const _sfc_main = {
  __name: "Datatim",
  __ssrInlineRender: true,
  props: ["userData", "teamz", "settings", "logo1"],
  setup(__props) {
    const team = usePage().props.teams;
    const form = useForm({
      name_team: team.data.name_team,
      phone: team.data.phone,
      email: team.data.email,
      instansi: team.data.instansi,
      payment: null
    });
    return (_ctx, _push, _parent, _attrs) => {
      var _a, _b;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "wrapper" }, _attrs))}><header><div class="c-topbar"><nav class="navbar navbar-expand"><div class="navbar-tambah"><!--[-->`);
      ssrRenderList(__props.settings, (setting) => {
        _push(`<div class="navbar-left"><a href="/"><img${ssrRenderAttr("src", setting.logo1 ? `/storage/${setting.logo1}` : "/bootstrap/images/logo1default.jpg")} alt="Logo" style="${ssrRenderStyle({ "width": "135px", "margin-left": "-15px" })}"></a></div>`);
      });
      _push(`<!--]--></div><div class="search-bar flex-grow-1"></div><div class="top-menu ms-auto"><ul class="navbar-nav align-items-center"><div class="user-info ps-3"><p class="user-name mb-0">${ssrInterpolate(_ctx.$page.props.userData.name)}</p><p class="user-role">${ssrInterpolate(_ctx.$page.props.userData.username)}</p></div><div class="parent-icon posisi-icon"><i class="bx bx-user-circle c-font48"></i></div></ul></div></nav></div></header><div class="page-wrapper-new"><div class="page-content"><div class="card">`);
      if (__props.teamz) {
        _push(`<div class="card-body"><h4 class="mb-0">LOMBA ${ssrInterpolate((_b = (_a = __props.teamz) == null ? void 0 : _a.lomba) == null ? void 0 : _b.name_lomba)}</h4><hr><form><div class="row"><div class="col-md-6 c-mb10"><label class="jarak-input"><b>Nama Tim</b></label><input${ssrRenderAttr("value", unref(form).name_team)} type="text" class="form-control" placeholder="Masukan nama tim anda" required></div><div class="col-md-6"><label class="jarak-input"><b>Instansi</b></label><input${ssrRenderAttr("value", unref(form).instansi)} type="text" class="form-control" placeholder="Masukan nama instansi" required></div><div class="col-md-6"><label class="jarak-input"><b>No WhatsApp</b></label><input${ssrRenderAttr("value", unref(form).phone)} type="text" class="form-control c-mb8" placeholder="Masukan no whatsapp" required></div><div class="col-md-6"><label class="jarak-input"><b>Email</b></label><input${ssrRenderAttr("value", unref(form).email)} type="email" class="form-control" placeholder="Masukan email" required></div><div class="col-md-6"><label for="formFile" class="form-label jarak-teks12"><b>Bukti Pembayaran</b></label><input class="form-control" type="file" name="payment"></div><p class="keterangan-foto f-italic">Max file size: 2MB </p><p class="keterangan-foto f-italic">Format: .jpg, .png, .jpeg</p></div><div class="btn-posisi"><button type="button" class="btn btn-danger button-left">Batal</button><button type="submit" class="btn btn-primary button-right">Simpan</button></div></form></div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div></div></div></div>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Pages/Roles/User/Daftar/Datatim.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
