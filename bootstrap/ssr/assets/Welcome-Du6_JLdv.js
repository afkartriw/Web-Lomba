import { mergeProps, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrRenderList, ssrRenderAttr, ssrRenderStyle, ssrInterpolate } from "vue/server-renderer";
import "@inertiajs/vue3";
import { _ as _export_sfc } from "./_plugin-vue_export-helper-1tPrXgE0.js";
const _sfc_main = {
  __name: "Welcome",
  __ssrInlineRender: true,
  props: {
    canLogin: {
      type: Boolean
    },
    canRegister: {
      type: Boolean
    },
    laravelVersion: {
      type: String,
      required: true
    },
    phpVersion: {
      type: String,
      required: true
    },
    sponsors: {
      type: Array,
      required: true
    },
    settings: {
      type: Array,
      required: true
    },
    beritas: {
      type: Array,
      required: true
    },
    lombas: {
      type: Array,
      required: true
    }
  },
  setup(__props) {
    const getBeritaImageUrl = (imageName) => {
      return imageName ? `/storage/uploads/admin/berita/${imageName}` : "";
    };
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "bg-index" }, _attrs))} data-v-d2a6cea3><nav class="navbar navbar-expand-lg main_menu" data-v-d2a6cea3><div class="container" data-v-d2a6cea3><!--[-->`);
      ssrRenderList(__props.settings, (setting) => {
        _push(`<a class="navbar-brand" href="#" data-v-d2a6cea3><img${ssrRenderAttr("src", setting.logo1)}${ssrRenderAttr("alt", setting.name)} class="lg-index" data-v-d2a6cea3></a>`);
      });
      _push(`<!--]--><button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation" data-v-d2a6cea3><i class="far fa-bars menu_icon" data-v-d2a6cea3></i><i class="far fa-times close_icon" data-v-d2a6cea3></i></button><div class="collapse navbar-collapse" id="navbarNav" data-v-d2a6cea3><ul class="navbar-nav ms-auto" data-v-d2a6cea3><li class="nav-item" data-v-d2a6cea3><a class="nav-link active" href="/#" data-v-d2a6cea3>Beranda</a></li><li class="nav-item" data-v-d2a6cea3><a class="nav-link" href="/#tentang-section" data-v-d2a6cea3>Tentang</a></li><li class="nav-item" data-v-d2a6cea3><a class="nav-link" href="/#lomba-section" data-v-d2a6cea3>Lomba</a></li><li class="nav-item" data-v-d2a6cea3><a class="nav-link" href="/#timeline-section" data-v-d2a6cea3>Timeline</a></li><li class="nav-item" data-v-d2a6cea3><a class="nav-link" href="/#berita-section" data-v-d2a6cea3>Berita</a></li><li class="nav-item" data-v-d2a6cea3><a class="nav-link" href="/#sponsor-section" data-v-d2a6cea3>Sponsor</a></li><li class="nav-item" data-v-d2a6cea3><a class="nav-link"${ssrRenderAttr("href", _ctx.route("pesan.create"))} data-v-d2a6cea3>Kontak</a></li><li class="nav-item" data-v-d2a6cea3>`);
      if (!_ctx.$page.props.auth.user) {
        _push(`<div class="row" data-v-d2a6cea3><div class="col" data-v-d2a6cea3><a class="nav-link common_btn" href="/login" data-v-d2a6cea3>Login</a></div></div>`);
      } else {
        _push(`<a class="nav-link common_btn" href="/dashboard" data-v-d2a6cea3>Dashboard</a>`);
      }
      _push(`</li></ul></div></div></nav><!--[-->`);
      ssrRenderList(__props.settings, (setting) => {
        _push(`<section class="tf__banner" style="${ssrRenderStyle({ background: "url(" + setting.logo2 + ")" })}" data-v-d2a6cea3><div class="container" data-v-d2a6cea3><div class="row" data-v-d2a6cea3><div class="col-xl-7 col-lg-8" data-v-d2a6cea3><!--[-->`);
        ssrRenderList(__props.settings, (setting2) => {
          _push(`<div class="tf__banner_text wow fadeInUp" data-v-d2a6cea3><h1 class="teks-judul" data-v-d2a6cea3><b data-v-d2a6cea3>${ssrInterpolate(setting2.judul)}</b></h1><h1 class="teks-judul2" data-v-d2a6cea3><b data-v-d2a6cea3>${ssrInterpolate(setting2.sub_judul)}</b></h1></div>`);
        });
        _push(`<!--]--></div></div></div></section>`);
      });
      _push(`<!--]--><br data-v-d2a6cea3><section id="tentang-section" class="tf__home_2_about pt_100 pb_100" style="${ssrRenderStyle({ "background": "url(bootstrap/images/about_2_bg.jpg)" })}" data-v-d2a6cea3><div class="container" data-v-d2a6cea3><div class="row" data-v-d2a6cea3><div class="col-xl-6 col-lg-6 wow fadeInLeft" data-v-d2a6cea3><!--[-->`);
      ssrRenderList(__props.settings, (setting) => {
        _push(`<div class="tf__home_2_about_img" data-v-d2a6cea3><img${ssrRenderAttr("src", setting.logo3)}${ssrRenderAttr("alt", setting.name)} class="img-fluid w-100" data-v-d2a6cea3></div>`);
      });
      _push(`<!--]--></div><div class="col-xl-6 col-lg-6 wow fadeInRight" data-v-d2a6cea3><div data-v-d2a6cea3><!--[-->`);
      ssrRenderList(__props.settings, (setting) => {
        _push(`<div class="tf__heading_area tf__heading_area_left mb_25" data-v-d2a6cea3><h5 class="jud" data-v-d2a6cea3>${ssrInterpolate(setting.judul_des)}</h5></div>`);
      });
      _push(`<!--]--><!--[-->`);
      ssrRenderList(__props.settings, (setting) => {
        _push(`<div data-v-d2a6cea3><p class="tentang" data-v-d2a6cea3>${ssrInterpolate(setting.deskripsi)}</p></div>`);
      });
      _push(`<!--]--></div></div></div></div></section><section id="lomba-section" class="tf__categories mt_95" data-v-d2a6cea3><div class="tf__activities_slider_area" data-v-d2a6cea3><div class="container" data-v-d2a6cea3><div class="row" data-v-d2a6cea3><div class="col-xl-6 col-md-8 col-lg-6 m-auto wow fadeInUp" data-v-d2a6cea3><div class="tf__heading_area mb_15" data-v-d2a6cea3><h5 class="judul-lomba-index" data-v-d2a6cea3>Lomba</h5></div></div></div><div class="row row-cols-1 row-cols-lg-2 row-cols-xl-3" data-v-d2a6cea3><!--[-->`);
      ssrRenderList(__props.lombas, (lomba) => {
        _push(`<div class="col" data-v-d2a6cea3><div class="card radius-15 card-overview" data-v-d2a6cea3><img${ssrRenderAttr("src", lomba.picture ? `/storage/${lomba.picture}` : "/bootstrap/images/default.jpg")} class="border-radius" data-v-d2a6cea3><a class="btn btn-danger btn-landing-page"${ssrRenderAttr("href", `/detailpeserta/${lomba.id}`)} data-v-d2a6cea3>${ssrInterpolate(lomba.name_lomba)}</a></div></div>`);
      });
      _push(`<!--]--></div></div></div></section><br data-v-d2a6cea3><section id="timeline-section" class="bsb-timeline-4" data-v-d2a6cea3><div class="container" data-v-d2a6cea3><!--[-->`);
      ssrRenderList(__props.settings, (setting) => {
        _push(`<div class="row justify-content-center" data-v-d2a6cea3><div class="tf__heading_area mb_15" data-v-d2a6cea3><h5 class="c-mb-40" data-v-d2a6cea3>Timeline</h5><div class="card bg-timeline" data-v-d2a6cea3><div class="card-body p-4 text-center" data-v-d2a6cea3><ul class="timeline" data-v-d2a6cea3><li class="timeline-item left" data-v-d2a6cea3><div class="timeline-body" data-v-d2a6cea3><div class="timeline-meta" data-v-d2a6cea3><div class="d-inline-flex flex-column px-2 py-1 text-success-emphasis bg-success-subtle border border-success-subtle rounded-2 text-md-end" data-v-d2a6cea3><span data-v-d2a6cea3>${ssrInterpolate(setting.mulai)}</span></div></div><div class="timeline-content timeline-indicator" data-v-d2a6cea3><div class="card border-0 shadow" data-v-d2a6cea3><div class="card-body p-xl-4" data-v-d2a6cea3><h3 class="cuyy" data-v-d2a6cea3> PENDAFTARAN </h3><p class="card-text m-0 cuyyy" data-v-d2a6cea3>${ssrInterpolate(setting.des_pendaftaran)}</p></div></div></div></div></li><li class="timeline-item right" data-v-d2a6cea3><div class="timeline-body" data-v-d2a6cea3><div class="timeline-meta" data-v-d2a6cea3><div class="d-inline-flex flex-column px-2 py-1 text-success-emphasis bg-success-subtle border border-success-subtle rounded-2 text-md-end" data-v-d2a6cea3><span data-v-d2a6cea3>${ssrInterpolate(setting.pengumpulan)}</span></div></div><div class="timeline-content timeline-indicator" data-v-d2a6cea3><div class="card border-0 shadow" data-v-d2a6cea3><div class="card-body p-xl-4" data-v-d2a6cea3><h3 class="cuyy" data-v-d2a6cea3> PENGUMPULAN KARYA </h3><p class="card-text m-0 cuyyy" data-v-d2a6cea3>${ssrInterpolate(setting.des_pengumpulan)}</p></div></div></div></div></li><li class="timeline-item left" data-v-d2a6cea3><div class="timeline-body" data-v-d2a6cea3><div class="timeline-meta" data-v-d2a6cea3><div class="d-inline-flex flex-column px-2 py-1 text-success-emphasis bg-success-subtle border border-success-subtle rounded-2 text-md-end" data-v-d2a6cea3><span data-v-d2a6cea3>${ssrInterpolate(setting.pengumuman)}</span></div></div><div class="timeline-content timeline-indicator" data-v-d2a6cea3><div class="card border-0 shadow" data-v-d2a6cea3><div class="card-body p-xl-4" data-v-d2a6cea3><h3 class="cuyy" data-v-d2a6cea3> PENGUMUMAN FINALIS </h3><p class="card-text m-0 cuyyy" data-v-d2a6cea3>${ssrInterpolate(setting.des_pengumuman)}</p></div></div></div></div></li><li class="timeline-item right" data-v-d2a6cea3><div class="timeline-body" data-v-d2a6cea3><div class="timeline-meta" data-v-d2a6cea3><div class="d-inline-flex flex-column px-2 py-1 text-success-emphasis bg-success-subtle border border-success-subtle rounded-2 text-md-end" data-v-d2a6cea3><span data-v-d2a6cea3>${ssrInterpolate(setting.presentasi)}</span></div></div><div class="timeline-content timeline-indicator" data-v-d2a6cea3><div class="card border-0 shadow" data-v-d2a6cea3><div class="card-body p-xl-4" data-v-d2a6cea3><h3 class="cuyy" data-v-d2a6cea3> PRESENTASI FINAL </h3><p class="card-text m-0 cuyyy" data-v-d2a6cea3>${ssrInterpolate(setting.des_presentasi)}</p></div></div></div></div></li></ul></div></div></div></div>`);
      });
      _push(`<!--]--></div></section><section id="berita-section" class="tf__event mt_95" data-v-d2a6cea3><div class="container" data-v-d2a6cea3><div class="row" data-v-d2a6cea3><div class="col-xl-6 col-md-8 col-lg-6 m-auto wow fadeInUp" data-v-d2a6cea3><div class="tf__heading_area mb_40" data-v-d2a6cea3><h5 data-v-d2a6cea3>Berita</h5></div></div></div><div class="row event_slider" data-v-d2a6cea3><!--[-->`);
      ssrRenderList(__props.beritas, (berita) => {
        _push(`<div class="col-xl-4 wow fadeInUp" data-v-d2a6cea3><div class="tf__single_event" data-v-d2a6cea3><button data-v-d2a6cea3><div class="tf__single_courses_img" data-v-d2a6cea3><img${ssrRenderAttr("src", getBeritaImageUrl(berita.images))} alt="event" class="img-fluid w-100" data-v-d2a6cea3></div><div class="tf__single_event_text" data-v-d2a6cea3><a class="title" data-v-d2a6cea3>${ssrInterpolate(berita.judul)}</a><p data-v-d2a6cea3>${ssrInterpolate(berita.deskripsi_awal)}</p><div class="tf__single_event_footer" data-v-d2a6cea3><span data-v-d2a6cea3>${ssrInterpolate(berita.tanggal_upload)}</span></div></div></button></div></div>`);
      });
      _push(`<!--]--></div></div></section><section id="sponsor-section" class="tf__categories mt_95" data-v-d2a6cea3><div class="container" data-v-d2a6cea3><div class="row" data-v-d2a6cea3><div class="tf__heading_area mb_15" data-v-d2a6cea3><h5 data-v-d2a6cea3>Sponsor</h5><div class="sponsor-grid" data-v-d2a6cea3><!--[-->`);
      ssrRenderList(__props.sponsors, (sponsor) => {
        _push(`<div data-v-d2a6cea3><a${ssrRenderAttr("href", sponsor.link_file)} data-v-d2a6cea3><img${ssrRenderAttr("src", sponsor.logo)}${ssrRenderAttr("alt", sponsor.name)} class="img-fluid" data-v-d2a6cea3></a></div>`);
      });
      _push(`<!--]--></div></div></div></div></section><footer class="tf__footer mt_100" data-v-d2a6cea3><div class="text-center p-4 cfooter" data-v-d2a6cea3> Copyright ©2024 Tim Website OLINAS </div></footer></div>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Pages/Welcome.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const Welcome = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-d2a6cea3"]]);
export {
  Welcome as default
};
