import { ref, mergeProps, unref, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrRenderList, ssrRenderAttr, ssrRenderStyle, ssrInterpolate } from "vue/server-renderer";
import { useForm } from "@inertiajs/vue3";
const _sfc_main = {
  __name: "Editberita",
  __ssrInlineRender: true,
  props: {
    errors: Object,
    berita: Object,
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
    const props = __props;
    ref(null);
    const form = useForm({
      judul: props.berita.judul,
      deskripsi_awal: props.berita.deskripsi_awal,
      deskripsi: props.berita.deskripsi,
      penerbit: props.berita.penerbit,
      tanggal_upload: props.berita.tanggal_upload,
      images: null
    });
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "wrapper" }, _attrs))}><header><div class="c-topbar"><nav class="navbar navbar-expand"><div class="navbar-tambah"><!--[-->`);
      ssrRenderList(__props.settings, (setting) => {
        _push(`<div class="navbar-left"><a href="/"><img${ssrRenderAttr("src", setting.logo1 ? `/storage/${setting.logo1}` : "/bootstrap/images/logo1default.jpg")} alt="Logo" style="${ssrRenderStyle({ "width": "135px", "margin-left": "-15px" })}"></a></div>`);
      });
      _push(`<!--]--></div><div class="search-bar flex-grow-1"></div><div class="top-menu ms-auto"><ul class="navbar-nav align-items-center"><div class="user-info ps-3"><p class="user-name mb-0">${ssrInterpolate(_ctx.$page.props.userData.name)}</p><p class="user-role">${ssrInterpolate(_ctx.$page.props.userData.username)}</p></div><div class="parent-icon posisi-icon"><i class="bx bx-user-circle c-font48"></i></div></ul></div></nav></div></header><div class="page-wrapper-new"><div class="page-content"><div class="card"><div class="card-body"><h4 class="mb-0">EDIT BERITA</h4><hr><form><div class="c-mb10"><label class="c-mb5-black"><b>Judul</b></label><input type="text" class="form-control" placeholder="Masukan judul berita"${ssrRenderAttr("value", unref(form).judul)}></div><div><label class="c-mb5-black"><b>Deskripsi Awal</b></label><div class="col-12"><textarea class="form-control c-mb10" placeholder="Masukan deskripsi awal berita (max 20 kata)" id="inputProductDescription" rows="2">${ssrInterpolate(unref(form).deskripsi_awal)}</textarea></div></div><div><label class="c-mb5-black"><b>Deskripsi</b></label><div class="col-12"><textarea class="form-control c-mb10" placeholder="Masukan deskripsi berita" id="inputProductDescription" rows="7">${ssrInterpolate(unref(form).deskripsi)}</textarea></div></div><div class="c-mb10"><label class="c-mb5-black"><b>Penerbit</b></label><input type="text" class="form-control" placeholder="Masukan penerbit berita"${ssrRenderAttr("value", unref(form).penerbit)}></div><div><label class="form-label warna-hitam"><b>Tanggal Upload</b></label><input type="date" class="form-control jarak-btn8"${ssrRenderAttr("value", unref(form).tanggal_upload)}></div><div><label for="formFile" class="form-label warna-hitam"><b>Upload Gambar</b></label><input class="form-control" type="file" id="formFile"><p class="keterangan-foto f-italic">Max file size: 2MB (640 x 500 px)</p><p class="keterangan-foto f-italic">Format: .jpg, .png, .jpeg</p></div><div class="btn-posisi"><a class="btn btn-danger button-left" onclick="window.location.href=&#39;/berita&#39;">Batal</a><button class="btn btn-primary button-right" type="submit">Simpan</button></div></form></div></div></div></div></div>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Pages/Roles/Admin/Berita/Editberita.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
