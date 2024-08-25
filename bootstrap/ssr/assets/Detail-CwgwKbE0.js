import { mergeProps, unref, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrRenderList, ssrRenderAttr, ssrInterpolate } from "vue/server-renderer";
import { useForm } from "@inertiajs/vue3";
import { _ as _export_sfc } from "./_plugin-vue_export-helper-1tPrXgE0.js";
const _sfc_main = {
  __name: "Detail",
  __ssrInlineRender: true,
  props: {
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
    const form = useForm({
      judul: props.berita.judul,
      deskripsi: props.berita.deskripsi,
      penerbit: props.berita.penerbit,
      tanggal_upload: props.berita.tanggal_upload,
      images: props.berita.images
    });
    const getBeritaImageUrl = (imageName) => {
      return imageName ? `/storage/uploads/admin/berita/${imageName}` : "";
    };
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "bg-index" }, _attrs))} data-v-76251a91><nav class="navbar navbar-expand-lg main_menu" data-v-76251a91><div class="container" data-v-76251a91><!--[-->`);
      ssrRenderList(__props.settings, (setting) => {
        _push(`<a class="navbar-brand" href="/" data-v-76251a91><img${ssrRenderAttr("src", setting.logo1)}${ssrRenderAttr("alt", setting.name)} class="lg-index" data-v-76251a91></a>`);
      });
      _push(`<!--]--><button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation" data-v-76251a91><i class="far fa-bars menu_icon" data-v-76251a91></i><i class="far fa-times close_icon" data-v-76251a91></i></button><div class="collapse navbar-collapse" id="navbarNav" data-v-76251a91><ul class="navbar-nav ms-auto" data-v-76251a91><li class="nav-item" data-v-76251a91><a class="nav-link" href="/#" data-v-76251a91>Beranda</a></li><li class="nav-item" data-v-76251a91><a class="nav-link" href="/#tentang-section" data-v-76251a91>Tentang</a></li><li class="nav-item" data-v-76251a91><a class="nav-link" href="/#lomba-section" data-v-76251a91>Lomba</a></li><li class="nav-item" data-v-76251a91><a class="nav-link" href="/#timeline-section" data-v-76251a91>Timeline</a></li><li class="nav-item" data-v-76251a91><a class="nav-link active" href="/#berita-section" data-v-76251a91>Berita</a></li><li class="nav-item" data-v-76251a91><a class="nav-link" href="/#sponsor-section" data-v-76251a91>Sponsor</a></li><li class="nav-item" data-v-76251a91><a class="nav-link" href="/pesan/create" data-v-76251a91>Kontak</a></li><li class="nav-item" data-v-76251a91>`);
      if (!_ctx.$page.props.auth.user) {
        _push(`<div class="row" data-v-76251a91><div class="col" data-v-76251a91><a class="nav-link common_btn" href="/login" data-v-76251a91>Login</a></div></div>`);
      } else {
        _push(`<a class="nav-link common_btn" href="/dashboard" data-v-76251a91>Dashboard</a>`);
      }
      _push(`</li></ul></div></div></nav><br data-v-76251a91><br data-v-76251a91><section class="tf__event_details mt_195 xs_mt_100" data-v-76251a91><div class="container" data-v-76251a91><div class="row" data-v-76251a91><div class="col-12" data-v-76251a91><h2 class="c-mb50 btn-crud c-mt50" data-v-76251a91><b data-v-76251a91>${ssrInterpolate(unref(form).judul)}</b></h2><div class="paragraf-container" data-v-76251a91><p class="warna-p" data-v-76251a91>Oleh : ${ssrInterpolate(unref(form).penerbit)}</p><p class="warna-p p-right c-mb50" data-v-76251a91>Tanggal : ${ssrInterpolate(unref(form).tanggal_upload)}</p></div><div class="tf__event_details_img" data-v-76251a91><img${ssrRenderAttr("src", getBeritaImageUrl(__props.berita.images))} alt="event details" class="w-100" data-v-76251a91></div><div class="tf__event_details_text mt_35 wow fadeInUp" data-v-76251a91><p class="isi-p" data-v-76251a91>${unref(form).deskripsi ?? ""}</p></div></div></div></div></section><footer class="tf__footer mt_100" data-v-76251a91><div class="text-center p-4 cfooter" data-v-76251a91> Copyright ©2024 Tim Website OLINAS </div></footer></div>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Pages/Utama/Detail.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const Detail = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-76251a91"]]);
export {
  Detail as default
};
