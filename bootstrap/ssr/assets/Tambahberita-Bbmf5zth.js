import { reactive, ref, mergeProps, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrRenderList, ssrRenderAttr, ssrRenderStyle, ssrInterpolate } from "vue/server-renderer";
import "@inertiajs/vue3";
const _sfc_main = {
  __name: "Tambahberita",
  __ssrInlineRender: true,
  props: {
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
    const form = reactive({
      judul: null,
      deskripsi_awal: null,
      deskripsi: null,
      penerbit: null,
      tanggal_upload: null,
      images: null
    });
    ref(null);
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "wrapper" }, _attrs))}><header><div class="c-topbar"><nav class="navbar navbar-expand"><div class="navbar-tambah"><!--[-->`);
      ssrRenderList(__props.settings, (setting) => {
        _push(`<div class="navbar-left"><a href="/"><img${ssrRenderAttr("src", setting.logo1 ? `/storage/${setting.logo1}` : "/bootstrap/images/logo1default.jpg")} alt="Logo" style="${ssrRenderStyle({ "width": "135px", "margin-left": "-15px" })}"></a></div>`);
      });
      _push(`<!--]--></div><div class="search-bar flex-grow-1"></div><div class="top-menu ms-auto"><ul class="navbar-nav align-items-center"><div class="user-info ps-3"><p class="user-name mb-0">${ssrInterpolate(_ctx.$page.props.userData.name)}</p><p class="user-role">${ssrInterpolate(_ctx.$page.props.userData.username)}</p></div><div class="parent-icon posisi-icon"><i class="bx bx-user-circle c-font48"></i></div></ul></div></nav></div></header><div class="page-wrapper-new"><div class="page-content"><div class="card"><div class="card-body"><h4 class="mb-0">TAMBAH BERITA</h4><hr><form><div class="c-mb10"><label class="c-mb5-black"><b>Judul</b></label><input type="text" class="form-control"${ssrRenderAttr("value", form.judul)} placeholder="Masukan judul berita" required></div><div><label class="c-mb5-black"><b>Deskripsi Awal</b></label><div class="col-12"><textarea class="c-mb10" id="descriptionaddl" rows="2" placeholder="Masukan deskripsi awal berita (max 20 kata)" required>${ssrInterpolate(form.deskripsi_awal)}</textarea></div></div><div><label class="c-mb5-black"><b>Deskripsi</b></label><div class="col-12"><textarea class="c-mb10" id="descriptionaddl" rows="5" placeholder="Masukan deskripsi berita" required>${ssrInterpolate(form.deskripsi)}</textarea></div></div><div class="c-mb10"><label class="c-mb5-black"><b>Penerbit</b></label><input type="text" class="form-control"${ssrRenderAttr("value", form.penerbit)} placeholder="Masukan penerbit berita" required></div><div><label class="form-label warna-hitam"><b>Tanggal Upload</b></label><input type="date" class="form-control jarak-btn8"${ssrRenderAttr("value", form.tanggal_upload)}></div><div><label for="formFile" class="form-label warna-hitam"><b>Upload Gambar</b></label><input class="form-control" type="file" id="formFile" required><p class="keterangan-foto f-italic">Max file size: 2MB (640 x 500 px)</p><p class="keterangan-foto f-italic">Format: .jpg, .png, .jpeg</p></div><div class="btn-posisi"><button class="btn btn-danger button-left" onclick="window.location.href=&#39;/berita&#39;">Batal</button><button class="btn btn-primary button-right" type="submit">Tambah</button></div></form></div></div></div></div></div>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Pages/Roles/Admin/Berita/Tambahberita.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
