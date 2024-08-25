import { ref, computed, mergeProps, unref, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrRenderList, ssrRenderAttr, ssrRenderStyle, ssrInterpolate } from "vue/server-renderer";
import "@inertiajs/vue3";
const _sfc_main = {
  __name: "Detaillomba",
  __ssrInlineRender: true,
  props: {
    name: String,
    username: String,
    lomba: Object,
    settings: Object,
    logo1: Object
  },
  setup(__props) {
    const props = __props;
    const showFullDescription = ref(false);
    const truncatedDescription = computed(() => {
      if (props.lomba && props.lomba.description) {
        const words = props.lomba.description.split(" ");
        return words.slice(0, 30).join(" ");
      }
      return "";
    });
    console.log(props.name);
    console.log(props.username);
    const pictureUrl = props.lomba && props.lomba.picture ? `/storage/${props.lomba.picture}` : null;
    console.log(pictureUrl);
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "wrapper" }, _attrs))}><header><div class="c-topbar"><nav class="navbar navbar-expand"><div class="navbar-tambah"><!--[-->`);
      ssrRenderList(__props.settings, (setting) => {
        _push(`<div class="navbar-left"><a href="/"><img${ssrRenderAttr("src", setting.logo1 ? `/storage/${setting.logo1}` : "/bootstrap/images/logo1default.jpg")} alt="Logo" style="${ssrRenderStyle({ "width": "135px", "margin-left": "-15px" })}"></a></div>`);
      });
      _push(`<!--]--></div><div class="search-bar flex-grow-1"></div><div class="top-menu ms-auto"><ul class="navbar-nav align-items-center"><div class="user-info ps-3"><p class="user-name mb-0">${ssrInterpolate(_ctx.$page.props.userData.name)}</p><p class="user-role">${ssrInterpolate(_ctx.$page.props.userData.username)}</p></div><div class="parent-icon posisi-icon"><i class="bx bx-user-circle c-font48"></i></div></ul></div></nav></div></header><div class="page-wrapper-new"><div class="page-content"><div class="card"><div class="card-body"><h4 class="mb-0">DETAIL LOMBA</h4><hr><div class="row"><div class="col-md-6 c-mb10"><label class="c-mb5-black"><b>NAMA LOMBA</b></label><div class="data-tim" id="name">${ssrInterpolate(__props.lomba && __props.lomba.name_lomba ? __props.lomba.name_lomba : "Nama Lomba tidak tersedia")}</div></div><div class="col-md-6"><label class="c-mb5-black"><b>NAMA PJ</b></label><div class="data-tim" id="pj">${ssrInterpolate(__props.lomba && __props.lomba.pj ? __props.lomba.pj : "Nama PJ tidak tersedia")}</div></div></div><div class="row"><div class="col-md-6"><label class="c-mb5-black"><b>DESKRIPSI</b></label><div class="col-12">`);
      if (!showFullDescription.value) {
        _push(`<span>${ssrInterpolate(truncatedDescription.value)}...</span>`);
      } else {
        _push(`<!---->`);
      }
      if (showFullDescription.value) {
        _push(`<span class="data-tim">${ssrInterpolate(__props.lomba && __props.lomba.description ? __props.lomba.description : "Deskripsi tidak tersedia")}</span>`);
      } else {
        _push(`<!---->`);
      }
      _push(`<a class="btn-link">${ssrInterpolate(showFullDescription.value ? "Sembunyikan" : "Lihat semuanya")}</a></div><div class="col-md-6"><label class="c-mb5-black"><b>GAMBAR</b></label><div class="col-12" id="picture"><img${ssrRenderAttr("src", unref(pictureUrl))} alt="Gambar" width="200"></div></div><div class="col-md-6 jarak-sertifikat"><label class="c-mb5-black"><b>SERTIFIKAT</b></label><div class="col-12" id="sertifikat"><a${ssrRenderAttr("href", `/sertikatlomba/${__props.lomba.id}`)}>Lihat Sertifikat</a></div></div></div><div class="col-md-6"><label class="c-mb5-black"><b>KONTAK PJ</b></label><div class="data-tim" id="kontak">${ssrInterpolate(__props.lomba && __props.lomba.kontak ? __props.lomba.kontak : "Kontak PJ tidak tersedia")}</div><label class="c-mb5-black"><b>TEMPAT</b></label><div class="data-tim" id="tempat">${ssrInterpolate(__props.lomba && __props.lomba.tempat ? __props.lomba.tempat : "Tempat tidak tersedia")}</div><div class="margin-top5-crud"><label class="c-mb5-black"><b>BIAYA PENDAFTARAN</b></label><div class="data-tim" id="biaya_pendaftaran">${ssrInterpolate(__props.lomba && __props.lomba.biaya_pendaftaran ? __props.lomba.biaya_pendaftaran : "Biaya Pendaftaran tidak tersedia")}</div></div><label class="c-mb5-black"><b>KRITERIA PENILAIAN (100/100%)</b></label><ul><!--[-->`);
      ssrRenderList(__props.lomba.kriteria, (kriteria) => {
        _push(`<li>${ssrInterpolate(kriteria.name_kriteria)} ${ssrInterpolate(kriteria.pivot.bobot)}% </li>`);
      });
      _push(`<!--]--></ul></div></div></div><div class="btn-posisi"><button class="btn btn-danger btn-kembali">Kembali</button></div></div></div></div></div>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Pages/Roles/Admin/Lomba/Detaillomba.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
