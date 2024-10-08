import { ssrRenderStyle, ssrRenderAttr } from "vue/server-renderer";
import { reactive, useSSRContext } from "vue";
import "@inertiajs/vue3";
const _sfc_main = {
  __name: "KontakStarter",
  __ssrInlineRender: true,
  setup(__props) {
    const form = reactive({
      nama: null,
      email: null,
      nomor: null,
      pesan: null
    });
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<!--[--><nav class="navbar navbar-expand-lg main_menu"><div class="container"><a class="navbar-brand" href="/"><img src="/bootstrap/images/logo.png" alt="Eduor" class="img-fluid w-100"></a><button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation"><i class="far fa-bars menu_icon"></i><i class="far fa-times close_icon"></i></button><div class="collapse navbar-collapse" id="navbarNav"><ul class="navbar-nav ms-auto"><li class="nav-item"><a class="nav-link" href="/">Beranda</a></li><li class="nav-item"><a class="nav-link" href="/#tentang-section">Tentang</a></li><li class="nav-item"><a class="nav-link" href="/#lomba-section">Lomba</a></li><li class="nav-item"><a class="nav-link" href="/#timeline-section">Timeline</a></li><li class="nav-item"><a class="nav-link" href="/#berita-section">Berita</a></li><li class="nav-item"><a class="nav-link" href="/#sponsor-section">Sponsor</a></li><li class="nav-item"><a class="nav-link active" href="#">Kontak</a></li><li class="nav-item"><a class="nav-link common_btn" href="/login">Login</a></li></ul></div></div></nav><section class="tf__breadcrumb" style="${ssrRenderStyle({ "background": "url(bootstrap/images/home.jpg)" })}"><div class="container"><div class="row"><div class="col-12"><div class="tf__breadcrumb_text"><h2 style="${ssrRenderStyle({ "color": "#000000" })}">Kontak</h2></div></div></div></div></section><section class="tf__contact_page mt_190 xs_mt_95"><div class="container"><div class="row"><div class="col-xxl-8 col-xl-7 wow fadeInLeft"><div class="tf__contact_form"><div class="tf__heading_area tf__heading_area_left mb_25"><h5 class="c-mb-13">HUBUNGI KAMI</h5></div><form><input id="nama"${ssrRenderAttr("value", form.nama)} placeholder="Nama"><input id="email"${ssrRenderAttr("value", form.email)} placeholder="Email"><input id="nomor"${ssrRenderAttr("value", form.nomor)} placeholder="No. WhatsApp"><input id="pesan"${ssrRenderAttr("value", form.pesan)} placeholder="Pesan"><button type="submit" class="common_btn_2">Kirim</button></form></div></div><div class="col-xl-12 wow fadeInUp"><div class="tf__contact_map mt_30"><iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3012.4794374146772!2d110.98160354801688!3d-7.591865364294748!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e7a19d07a714fd3%3A0xaea18d5d16dea09d!2sWaduk%20Delingan!5e1!3m2!1sen!2sid!4v1711694566155!5m2!1sen!2sid" width="600" height="450" style="${ssrRenderStyle({ "border": "0" })}" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe></div></div></div></div></section><!--]-->`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Pages/Utama/KontakStarter.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
