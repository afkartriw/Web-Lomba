import { reactive, ref, mergeProps, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrRenderList, ssrRenderAttr, ssrRenderStyle, ssrInterpolate } from "vue/server-renderer";
import "sweetalert2";
import "@inertiajs/vue3";
import { _ as _export_sfc } from "./_plugin-vue_export-helper-1tPrXgE0.js";
const _sfc_main = {
  __name: "Timdetailjuri",
  __ssrInlineRender: true,
  props: ["userData", "members", "team", "submissions", "reg_lombas", "lomba", "settings", "logo1"],
  setup(__props) {
    reactive({
      description: ""
    });
    ref(false);
    return (_ctx, _push, _parent, _attrs) => {
      var _a, _b;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "wrapper" }, _attrs))} data-v-fc9f0762><header data-v-fc9f0762><div class="c-topbar" data-v-fc9f0762><nav class="navbar navbar-expand" data-v-fc9f0762><div class="navbar-tambah" data-v-fc9f0762><!--[-->`);
      ssrRenderList(__props.settings, (setting) => {
        _push(`<div class="navbar-left" data-v-fc9f0762><a href="/" data-v-fc9f0762><img${ssrRenderAttr("src", setting.logo1 ? `/storage/${setting.logo1}` : "/bootstrap/images/logo1default.jpg")} alt="Logo" style="${ssrRenderStyle({ "width": "100px", "margin-left": "-15px" })}" data-v-fc9f0762></a></div>`);
      });
      _push(`<!--]--></div><div class="search-bar flex-grow-1" data-v-fc9f0762></div><div class="top-menu ms-auto" data-v-fc9f0762><ul class="navbar-nav align-items-center" data-v-fc9f0762><div class="user-info ps-3" data-v-fc9f0762><p class="user-name mb-0" data-v-fc9f0762>${ssrInterpolate(__props.userData.name)}</p><p class="user-role" data-v-fc9f0762>${ssrInterpolate(__props.userData.username)}</p></div><div class="parent-icon posisi-icon" data-v-fc9f0762><i class="bx bx-user-circle c-font48" data-v-fc9f0762></i></div></ul></div></nav></div></header><div class="page-wrapper-new" data-v-fc9f0762><div class="page-content" data-v-fc9f0762><div class="card" data-v-fc9f0762><div class="card-body" data-v-fc9f0762><h4 class="mb-0" data-v-fc9f0762>DETAIL TIM ${ssrInterpolate(__props.team.name_team)}</h4><button class="btn btn-primary crud-width-150 btn-petugas btn-verifikasi posisi-ver" data-v-fc9f0762>Beri Nilai</button><hr data-v-fc9f0762><div class="row" data-v-fc9f0762>`);
      if (__props.team) {
        _push(`<div class="col-md-3 c-mb10" data-v-fc9f0762><label class="c-mb5-black" data-v-fc9f0762><b data-v-fc9f0762>INSTANSI</b></label><div class="c-mb20" data-v-fc9f0762>${ssrInterpolate(__props.team.instansi)}</div></div>`);
      } else {
        _push(`<!---->`);
      }
      if (__props.team) {
        _push(`<div class="col-md-3" data-v-fc9f0762><label class="c-mb5-black" data-v-fc9f0762><b data-v-fc9f0762>KETUA</b></label><div class="c-mb20" data-v-fc9f0762>${ssrInterpolate((_b = (_a = __props.team) == null ? void 0 : _a.user) == null ? void 0 : _b.name)}</div></div>`);
      } else {
        _push(`<!---->`);
      }
      if (__props.team) {
        _push(`<div class="col-md-3" data-v-fc9f0762><label class="c-mb5-black" data-v-fc9f0762><b data-v-fc9f0762>EMAIL</b></label><div class="c-mb20" data-v-fc9f0762>${ssrInterpolate(__props.team.email)}</div></div>`);
      } else {
        _push(`<!---->`);
      }
      if (__props.team) {
        _push(`<div class="col-md-3" data-v-fc9f0762><label class="c-mb5-black" data-v-fc9f0762><b data-v-fc9f0762>NO WHATSAPP</b></label><div class="c-mb20" data-v-fc9f0762>${ssrInterpolate(__props.team.phone)}</div></div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div><br data-v-fc9f0762><br data-v-fc9f0762><br data-v-fc9f0762><div class="card card-height400" data-v-fc9f0762><div class="card-body p-4 text-center" data-v-fc9f0762><h6 class="sub-judul-tim" data-v-fc9f0762><b data-v-fc9f0762>KARYA TIM</b></h6><hr data-v-fc9f0762><div class="row" data-v-fc9f0762>`);
      if (__props.submissions) {
        _push(`<div class="col-md-4 label-left" data-v-fc9f0762><label class="jarak-teks05" data-v-fc9f0762><b data-v-fc9f0762>JUDUL</b></label><div class="c-mb20" data-v-fc9f0762>${ssrInterpolate(__props.submissions.title)}</div></div>`);
      } else {
        _push(`<!---->`);
      }
      if (__props.submissions) {
        _push(`<div class="col-md-3 label-left" data-v-fc9f0762><label class="jarak-teks05" data-v-fc9f0762><b data-v-fc9f0762>DOKUMEN</b></label><div class="data-tim" data-v-fc9f0762><a${ssrRenderAttr("href", `/submissionsurat/${__props.submissions.id}`)} data-v-fc9f0762>Lihat Dokumen</a></div></div>`);
      } else {
        _push(`<!---->`);
      }
      if (__props.submissions) {
        _push(`<div class="col-md-3 label-left" data-v-fc9f0762><label class="jarak-teks05" data-v-fc9f0762><b data-v-fc9f0762>FILE</b></label><div class="data-tim" data-v-fc9f0762><a${ssrRenderAttr("href", `/submissionshow/${__props.submissions.id}`)} data-v-fc9f0762>Lihat File</a></div></div>`);
      } else {
        _push(`<!---->`);
      }
      if (__props.submissions) {
        _push(`<div class="col-md-2 label-left" data-v-fc9f0762><label class="jarak-teks05" data-v-fc9f0762><b data-v-fc9f0762>LINK</b></label><div class="data-tim c-mb-70" data-v-fc9f0762><a${ssrRenderAttr("href", __props.submissions.link)} target="_blank" data-v-fc9f0762>Buka Link</a></div></div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`<div class="label-left" data-v-fc9f0762><label class="jarak-teks05" data-v-fc9f0762><b data-v-fc9f0762>DESKRIPSI</b></label><div class="c-mb20 rata-tengah" data-v-fc9f0762>${ssrInterpolate(__props.submissions.description)}</div></div></div></div></div></div></div></div></div></div>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Pages/Roles/Panelis/Lomba/Timdetailjuri.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const Timdetailjuri = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-fc9f0762"]]);
export {
  Timdetailjuri as default
};
