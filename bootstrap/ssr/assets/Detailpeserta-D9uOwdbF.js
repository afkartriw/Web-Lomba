import { mergeProps, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrRenderList, ssrRenderAttr, ssrRenderStyle, ssrInterpolate } from "vue/server-renderer";
import "@inertiajs/vue3";
import "sweetalert2";
const _sfc_main = {
  __name: "Detailpeserta",
  __ssrInlineRender: true,
  props: {
    name: String,
    username: String,
    lombax: Object,
    settings: {
      type: Object,
      // Menggunakan "type" untuk menentukan tipe data props
      default: () => ({})
      // Menggunakan "default" jika props tidak diberikan
    },
    logo1: {
      type: String
      // Menentukan tipe data logo sebagai String
    }
  },
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "wrapper" }, _attrs))}><header><div class="c-topbar"><nav class="navbar navbar-expand"><div class="navbar-tambah"><!--[-->`);
      ssrRenderList(__props.settings, (setting) => {
        _push(`<div class="navbar-left"><a href="/"><img${ssrRenderAttr("src", setting.logo1 ? `/storage/${setting.logo1}` : "/bootstrap/images/logo1default.jpg")} alt="Logo" style="${ssrRenderStyle({ "width": "135px", "margin-left": "-15px" })}"></a></div>`);
      });
      _push(`<!--]--></div><div class="search-bar flex-grow-1"></div><div class="top-menu ms-auto"><ul class="navbar-nav align-items-center"><div class="user-info ps-3"><p class="user-name mb-0">${ssrInterpolate(_ctx.$page.props.userData.name)}</p><p class="user-role">${ssrInterpolate(_ctx.$page.props.userData.username)}</p></div><div class="parent-icon posisi-icon"><i class="bx bx-user-circle c-font48"></i></div></ul></div></nav></div></header><div class="kotak-putih"><div class="page-wrapper-peserta"><div class="page-content"><div class="card container-hgnew"><div class="card-body"><div class="row"><div class="col-md-7 label-left"><h5 class="judul-detail c-ml-25 c-mt10"><b>${ssrInterpolate(__props.lombax.name_lomba)}</b></h5><div class="judul-lomba-index c-ml-25 warna-hitam" id="name_lomba">OLINAS </div></div><div><div class="div-class"><a class="btn btn-pink c-mtkc" href="https://drive.google.com/drive/folders/1IJhmIv8W5TI7-kUyZyUx-bw5Eq2CD7GG?usp=sharing">BUKU PANDUAN</a></div></div></div></div></div></div></div></div><div class="des-biru"><a>${__props.lombax.description ?? ""}</a><br><br><h5 class="deskripsil"><b>E. Informasi Tambahan</b></h5><a class="deskripsil deskripsil-detailnew">Penanggung Jawab: ${ssrInterpolate(__props.lombax.pj)}</a><br><a class="deskripsil deskripsil-detailnew">Biaya Pendaftaran: ${ssrInterpolate(__props.lombax.biaya_pendaftaran)}</a><br><a class="deskripsil deskripsil-detailnew">Tempat: ${ssrInterpolate(__props.lombax.tempat)}</a><br><br></div></div>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Pages/Roles/User/Detailpeserta.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
