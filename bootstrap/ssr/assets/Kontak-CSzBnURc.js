import { mergeProps, unref, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrRenderList, ssrRenderAttr, ssrRenderStyle, ssrInterpolate } from "vue/server-renderer";
import { useForm } from "@inertiajs/vue3";
import "sweetalert2";
import { _ as _export_sfc } from "./_plugin-vue_export-helper-1tPrXgE0.js";
const _sfc_main = {
  __name: "Kontak",
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
    settings: {
      type: Object,
      required: true
    }
  },
  setup(__props) {
    const form = useForm({
      name: null,
      email: null,
      phone: null,
      value: null
    });
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "bg-index" }, _attrs))} data-v-775f4a4b><nav class="navbar navbar-expand-lg main_menu" data-v-775f4a4b><!--[-->`);
      ssrRenderList(__props.settings, (setting) => {
        _push(`<div class="container" data-v-775f4a4b><a class="navbar-brand" href="/" data-v-775f4a4b><img${ssrRenderAttr("src", setting.logo1 ? `/storage/${setting.logo1}` : "/bootstrap/images/logo1default.jpg")} class="lg-index" data-v-775f4a4b></a><button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation" data-v-775f4a4b><i class="far fa-bars menu_icon" data-v-775f4a4b></i><i class="far fa-times close_icon" data-v-775f4a4b></i></button><div class="collapse navbar-collapse" id="navbarNav" data-v-775f4a4b><ul class="navbar-nav ms-auto" data-v-775f4a4b><li class="nav-item" data-v-775f4a4b><a class="nav-link" href="/#" data-v-775f4a4b>Beranda</a></li><li class="nav-item" data-v-775f4a4b><a class="nav-link" href="/#tentang-section" data-v-775f4a4b>Tentang</a></li><li class="nav-item" data-v-775f4a4b><a class="nav-link" href="/#lomba-section" data-v-775f4a4b>Lomba</a></li><li class="nav-item" data-v-775f4a4b><a class="nav-link" href="/#timeline-section" data-v-775f4a4b>Timeline</a></li><li class="nav-item" data-v-775f4a4b><a class="nav-link" href="/#berita-section" data-v-775f4a4b>Berita</a></li><li class="nav-item" data-v-775f4a4b><a class="nav-link" href="/#sponsor-section" data-v-775f4a4b>Sponsor</a></li><li class="nav-item" data-v-775f4a4b><a class="nav-link active"${ssrRenderAttr("href", _ctx.route("pesan.create"))} data-v-775f4a4b>Kontak</a></li><li class="nav-item" data-v-775f4a4b>`);
        if (!_ctx.$page.props.auth.user) {
          _push(`<div class="row" data-v-775f4a4b><div class="col" data-v-775f4a4b><a class="nav-link common_btn" href="/login" data-v-775f4a4b>Login</a></div></div>`);
        } else {
          _push(`<a class="nav-link common_btn" href="/dashboard" data-v-775f4a4b>Dashboard</a>`);
        }
        _push(`</li></ul></div></div>`);
      });
      _push(`<!--]--></nav><!--[-->`);
      ssrRenderList(__props.settings, (setting) => {
        _push(`<div data-v-775f4a4b><section class="tf__breadcrumb" style="${ssrRenderStyle({ backgroundImage: `url(${setting.logo2 ? `/storage/${setting.logo2}` : "/bootstrap/images/logo1default.jpg"})` })}" data-v-775f4a4b></section></div>`);
      });
      _push(`<!--]--><section class="tf__contact_page mt_190" data-v-775f4a4b><!--[-->`);
      ssrRenderList(__props.settings, (setting) => {
        _push(`<div class="container" data-v-775f4a4b><div class="row" data-v-775f4a4b><div class="tf__heading_area tf__heading_area_left mb_25" data-v-775f4a4b><h5 class="c-mb-8 text25" data-v-775f4a4b>INFORMASI KONTAK</h5></div><div class="row" data-v-775f4a4b><div class="col-md-c3" data-v-775f4a4b><h6 class="c-mb-13" data-v-775f4a4b><b data-v-775f4a4b>WhatsApp</b></h6><h6 class="c-mb20" data-v-775f4a4b>${ssrInterpolate(setting.whatsApp)}</h6></div><div class="col-md-3" data-v-775f4a4b><h6 class="c-mb-13" data-v-775f4a4b><b data-v-775f4a4b>Instagram</b></h6><h6 class="c-mb20" data-v-775f4a4b>${ssrInterpolate(setting.instagram)}</h6></div><div class="col-md-3" data-v-775f4a4b><h6 class="c-mb-13" data-v-775f4a4b><b data-v-775f4a4b>Email</b></h6><h6 class="c-mb20" data-v-775f4a4b>${ssrInterpolate(setting.email)}</h6></div><div class="col-md-2 cml30" data-v-775f4a4b><h6 class="c-mb-13" data-v-775f4a4b><b data-v-775f4a4b>Youtube</b></h6><h6 class="c-mb20" data-v-775f4a4b>${ssrInterpolate(setting.youtube)}</h6></div></div><br data-v-775f4a4b><br data-v-775f4a4b><br data-v-775f4a4b><br data-v-775f4a4b><br data-v-775f4a4b><div class="col-xxl-8 col-xl-7 wow fadeInLeft" data-v-775f4a4b><div class="tf__contact_form" data-v-775f4a4b><form data-v-775f4a4b><input class="form-control ckontak" id="nama" type="text"${ssrRenderAttr("value", unref(form).name)} placeholder="Nama Lengkap" data-v-775f4a4b><input class="form-control ckontak c-mtkc" id="nama" type="email"${ssrRenderAttr("value", unref(form).email)} placeholder="Email" data-v-775f4a4b><input class="form-control ckontak c-mtkc" id="nomor" type="number"${ssrRenderAttr("value", unref(form).phone)} placeholder="No. WhatsApp (cont. 085xxxxxxx)" data-v-775f4a4b><textarea class="c-mtkc" rows="4" type="textarea" placeholder="Pesan" data-v-775f4a4b>${ssrInterpolate(unref(form).value)}</textarea><button type="submit" class="common_btn_2" data-v-775f4a4b> Kirim </button></form></div></div><div class="col-xxl-4 col-xl-5 col-lg-6 wow fadeInRight" data-v-775f4a4b><div class="col-xl-12 wow fadeInUp" data-v-775f4a4b><div class="tf__contact_map cmt_30" data-v-775f4a4b><iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3012.4794374146772!2d110.98160354801688!3d-7.591865364294748!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e7a19d07a714fd3%3A0xaea18d5d16dea09d!2sWaduk%20Delingan!5e1!3m2!1sen!2sid!4v1711694566155!5m2!1sen!2sid" width="600" height="450" style="${ssrRenderStyle({ "border": "0" })}" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade" data-v-775f4a4b></iframe></div></div></div></div></div>`);
      });
      _push(`<!--]--></section><footer class="tf__footer mt_100" data-v-775f4a4b><div class="text-center p-4 cfooter" data-v-775f4a4b> Copyright ©2024 Tim Website OLINAS </div></footer></div>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Pages/Utama/Kontak.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const Kontak = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-775f4a4b"]]);
export {
  Kontak as default
};
