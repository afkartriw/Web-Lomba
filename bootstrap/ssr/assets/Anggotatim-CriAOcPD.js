import { mergeProps, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrRenderStyle } from "vue/server-renderer";
import "@inertiajs/vue3";
const _sfc_main = {
  __name: "Anggotatim",
  __ssrInlineRender: true,
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "wrapper" }, _attrs))}><header><div class="c-topbar"><nav class="navbar navbar-expand"><div class="navbar-tambah"><div class="navbar-left"><a href="/"><img src="/bootstrap/images/logo.png" alt="Logo"></a></div></div><div class="mobile-toggle-menu"><i class="bx bx-menu"></i></div><div class="search-bar flex-grow-1"></div><div class="top-menu ms-auto"><ul class="navbar-nav align-items-center"><div class="user-info ps-3"><p class="user-name mb-0">Lionel Andres</p><p class="user-role">leon</p></div><div class="parent-icon posisi-icon"><i class="bx bx-user-circle c-font48"></i></div><li class="nav-item dropdown dropdown-large"><div class="dropdown-menu dropdown-menu-end"><div class="header-notifications-list"></div></div></li><li class="nav-item dropdown dropdown-large"><div class="dropdown-menu dropdown-menu-end"><div class="header-message-list"></div></div></li></ul></div></nav></div></header><div class="page-wrapper-baru"><div class="page-content"><div class="card"><div class="card-body"><h4 class="mb-0">ANGGOTA TIM</h4><hr><div class="row"><div><label class="jarak-input"><b>Nama Lengkap</b></label><input type="email" class="form-control"></div><div><label style="${ssrRenderStyle({ "margin-bottom": "5px", "margin-top": "10px" })}"><b style="${ssrRenderStyle({ "color": "black" })}">Jabatan</b></label><div class="col-12"><select class="form-select" id="inputProductType"><option value="1" selected>Satu</option><option value="2">Dua</option><option value="3">Tiga</option></select></div></div><div><label class="jarak-input"><b>NIK</b></label><input type="email" class="form-control" style="${ssrRenderStyle({ "margin-bottom": "8px" })}"></div><div><label class="jarak-input"><b>Instansi</b></label><input type="email" class="form-control" style="${ssrRenderStyle({ "margin-bottom": "8px" })}"></div><div><label for="formFile" class="form-label jarak-teks12"><b>Bukti Pembayaran</b></label><input class="form-control" type="file" id="formFile"></div></div><div class="btn-posisi"><button class="btn btn-primary button-tabel-right" onclick="window.location.href=&#39;/daftarlomba&#39;">Tambah</button><button class="btn btn-danger button-tabel-left" onclick="window.location.href=&#39;/daftarlomba&#39;">Batal</button></div></div></div></div></div></div>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Pages/Roles/User/Daftar/Anggotatim.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
