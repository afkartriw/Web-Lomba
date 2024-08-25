import { ref, computed, mergeProps, unref, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrRenderList, ssrRenderAttr, ssrRenderStyle, ssrInterpolate } from "vue/server-renderer";
import { useForm } from "@inertiajs/vue3";
const _sfc_main = {
  __name: "Detailberita",
  __ssrInlineRender: true,
  props: {
    errors: Object,
    berita: Object,
    settings: Object,
    settingsz: {
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
    const form = useForm({
      judul: props.berita.judul,
      deskripsi_awal: props.berita.deskripsi_awal,
      deskripsi: props.berita.deskripsi,
      penerbit: props.berita.penerbit,
      tanggal_upload: props.berita.tanggal_upload,
      images: props.berita.images
    });
    const showFullDescription = ref(false);
    const truncatedDescription = computed(() => {
      const words = form.deskripsi.split(" ");
      return words.slice(0, 30).join(" ");
    });
    const getBeritaImageUrl = (imageName) => {
      return imageName ? `/storage/uploads/admin/berita/${imageName}` : "";
    };
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "wrapper" }, _attrs))}><header><div class="c-topbar"><nav class="navbar navbar-expand"><div class="navbar-tambah"><!--[-->`);
      ssrRenderList(__props.settingsz, (setting) => {
        _push(`<div class="navbar-left"><a href="/"><img${ssrRenderAttr("src", setting.logo1 ? `/storage/${setting.logo1}` : "/bootstrap/images/logo1default.jpg")} alt="Logo" style="${ssrRenderStyle({ "width": "135px", "margin-left": "-15px" })}"></a></div>`);
      });
      _push(`<!--]--></div><div class="search-bar flex-grow-1"></div><div class="top-menu ms-auto"><ul class="navbar-nav align-items-center"><div class="user-info ps-3"><p class="user-name mb-0">${ssrInterpolate(_ctx.$page.props.userData.name)}</p><p class="user-role">${ssrInterpolate(_ctx.$page.props.userData.username)}</p></div><div class="parent-icon posisi-icon"><i class="bx bx-user-circle c-font48"></i></div></ul></div></nav></div></header><div class="page-wrapper-new"><div class="page-content"><div class="card"><div class="card-body"><h4 class="mb-0">DETAIL BERITA</h4><hr><div><div class="col-md-6 c-mb10"><label class="c-mb5-black"><b>JUDUL</b></label><div class="c-mb20">${ssrInterpolate(unref(form).judul)}</div></div><div><label class="c-mb5-black"><b>DESKRIPSI AWAL</b></label><div class="c-mb20">${ssrInterpolate(unref(form).deskripsi_awal)}</div></div><div><label class="c-mb5-black"><b>DESKRIPSI</b></label><div class="c-mb20">`);
      if (!showFullDescription.value) {
        _push(`<span>${ssrInterpolate(truncatedDescription.value)}...</span>`);
      } else {
        _push(`<!---->`);
      }
      if (showFullDescription.value) {
        _push(`<span>${ssrInterpolate(unref(form).deskripsi)}</span>`);
      } else {
        _push(`<!---->`);
      }
      _push(`<a class="btn-link">${ssrInterpolate(showFullDescription.value ? "Sembunyikan" : "Lihat semuanya")}</a></div></div><div class="col-md-6 c-mb10"><label class="c-mb5-black"><b>PENERBIT</b></label><div class="c-mb20">${ssrInterpolate(unref(form).penerbit)}</div></div><div class="col-md-6 c-mb10"><label class="c-mb5-black"><b>TANGGAL UPLOAD</b></label><div class="c-mb20">${ssrInterpolate(unref(form).tanggal_upload)}</div></div><div class="c-mb10"><label class="c-mb5-black"><b>GAMBAR</b></label><br><img${ssrRenderAttr("src", getBeritaImageUrl(unref(form).images))} class="c-maxw400"></div></div><div class="btn-posisi"><button class="btn btn-danger btn-kembali" onclick="window.location.href=&#39;/berita&#39;">Kembali</button></div></div></div></div></div></div>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Pages/Roles/Admin/Berita/Detailberita.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
