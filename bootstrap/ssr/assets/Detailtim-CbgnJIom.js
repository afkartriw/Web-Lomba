import { reactive, ref, mergeProps, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrRenderList, ssrRenderAttr, ssrRenderStyle, ssrInterpolate } from "vue/server-renderer";
import "sweetalert2";
import "@inertiajs/vue3";
import { _ as _export_sfc } from "./_plugin-vue_export-helper-1tPrXgE0.js";
const _sfc_main = {
  __name: "Detailtim",
  __ssrInlineRender: true,
  props: ["userData", "members", "team", "submissions", "reg_lombas", "lomba", "settings"],
  setup(__props) {
    const { userData, members, team, submissions, reg_lombas, lomba, settings } = __props;
    reactive({
      description: ""
    });
    ref(false);
    const getDownloadLink = () => {
      if (submissions && submissions.file) {
        return `/storage/${submissions.file}`;
      } else {
        return "#";
      }
    };
    return (_ctx, _push, _parent, _attrs) => {
      var _a, _b;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "wrapper" }, _attrs))} data-v-f49ec086><header data-v-f49ec086><div class="c-topbar" data-v-f49ec086><nav class="navbar navbar-expand" data-v-f49ec086><div class="navbar-tambah" data-v-f49ec086><!--[-->`);
      ssrRenderList(__props.settings, (setting) => {
        _push(`<div class="navbar-left" data-v-f49ec086><a href="/" data-v-f49ec086><img${ssrRenderAttr("src", setting.logo1 ? `/storage/${setting.logo1}` : "/bootstrap/images/logo1default.jpg")} alt="Logo" style="${ssrRenderStyle({ "width": "100px", "margin-left": "-15px" })}" data-v-f49ec086></a></div>`);
      });
      _push(`<!--]--></div><div class="search-bar flex-grow-1" data-v-f49ec086></div><div class="top-menu ms-auto" data-v-f49ec086><ul class="navbar-nav align-items-center" data-v-f49ec086><div class="user-info ps-3" data-v-f49ec086><p class="user-name mb-0" data-v-f49ec086>${ssrInterpolate(__props.userData.name)}</p><p class="user-role" data-v-f49ec086>${ssrInterpolate(__props.userData.username)}</p></div><div class="parent-icon posisi-icon" data-v-f49ec086><i class="bx bx-user-circle c-font48" data-v-f49ec086></i></div></ul></div></nav></div></header><div class="page-wrapper-new" data-v-f49ec086><div class="page-content" data-v-f49ec086><div class="card" data-v-f49ec086><div class="card-body" data-v-f49ec086><h4 class="mb-0" data-v-f49ec086>DETAIL TIM ${ssrInterpolate(__props.team.name_team)}</h4><hr data-v-f49ec086><div class="row" data-v-f49ec086><div class="col-md-3 c-mb10" data-v-f49ec086><label class="c-mb5-black" data-v-f49ec086><b data-v-f49ec086>INSTANSI</b></label><div class="c-mb20" data-v-f49ec086>${ssrInterpolate(__props.team.instansi)}</div></div><div class="col-md-2" data-v-f49ec086><label class="c-mb5-black" data-v-f49ec086><b data-v-f49ec086>LOMBA</b></label><div class="c-mb20" data-v-f49ec086>${ssrInterpolate((_b = (_a = __props.team) == null ? void 0 : _a.lomba) == null ? void 0 : _b.name_lomba)}</div></div><div class="col-md-3" data-v-f49ec086><label class="c-mb5-black" data-v-f49ec086><b data-v-f49ec086>EMAIL</b></label><div class="c-mb20" data-v-f49ec086>${ssrInterpolate(__props.team.email)}</div></div><div class="col-md-2" data-v-f49ec086><label class="c-mb5-black" data-v-f49ec086><b data-v-f49ec086>NO WHATSAPP</b></label><div class="c-mb20" data-v-f49ec086>${ssrInterpolate(__props.team.phone)}</div></div><div class="col-md-2" data-v-f49ec086><label class="c-mb5-black" data-v-f49ec086><b data-v-f49ec086>PEMBAYARAN</b></label><div class="c-mb20" data-v-f49ec086><a href="#" data-v-f49ec086>Lihat Bukti</a></div></div></div><br data-v-f49ec086><br data-v-f49ec086><br data-v-f49ec086><div class="row row-cards justify-content-center" data-v-f49ec086><!--[-->`);
      ssrRenderList(__props.members, (member) => {
        _push(`<div class="col-md-6 col-lg-3 crud-max-width260" data-v-f49ec086><div class="card" data-v-f49ec086><div class="card-header btn-crud" data-v-f49ec086><h6 data-v-f49ec086><b data-v-f49ec086>${ssrInterpolate(member.role)}</b></h6></div><div class="card-body p-4 text-center posisi-mb23" data-v-f49ec086><div class="btn-crud" data-v-f49ec086><img${ssrRenderAttr("src", member.photo ? `/storage/${member.photo}` : "/bootstrap/images/default2.png")} height="120" alt="..." class="img-fluidc rounded" data-v-f49ec086></div><br data-v-f49ec086><h6 data-v-f49ec086><b data-v-f49ec086>${ssrInterpolate(member.name)}</b></h6><br data-v-f49ec086><div class="posisi-mb7" data-v-f49ec086>${ssrInterpolate(member.nik)}</div><div class="text-muted" data-v-f49ec086>${ssrInterpolate(member.instansi)}</div></div></div></div>`);
      });
      _push(`<!--]--></div><div class="card card-height400" data-v-f49ec086><div class="card-body p-4 text-center" data-v-f49ec086><h6 class="sub-judul-tim" data-v-f49ec086><b data-v-f49ec086>KARYA TIM</b></h6><hr data-v-f49ec086><div class="row" data-v-f49ec086>`);
      if (__props.submissions) {
        _push(`<div class="col-md-4 label-left" data-v-f49ec086><label class="jarak-teks05" data-v-f49ec086><b data-v-f49ec086>JUDUL</b></label><div class="c-mb20" data-v-f49ec086>${ssrInterpolate(__props.submissions.title)}</div></div>`);
      } else {
        _push(`<!---->`);
      }
      if (__props.submissions) {
        _push(`<div class="col-md-3 label-left" data-v-f49ec086><label class="jarak-teks05" data-v-f49ec086><b data-v-f49ec086>SURAT</b></label><div class="data-tim" data-v-f49ec086><a${ssrRenderAttr("href", `/submissionsurat/${__props.submissions.id}`)} data-v-f49ec086>Dokumen.pdf </a></div></div>`);
      } else {
        _push(`<!---->`);
      }
      if (__props.submissions) {
        _push(`<div class="col-md-3 label-left" data-v-f49ec086><label class="jarak-teks05" data-v-f49ec086><b data-v-f49ec086>FILE</b></label><div class="data-tim" data-v-f49ec086><a${ssrRenderAttr("href", getDownloadLink())} download data-v-f49ec086>Lihat File</a></div></div>`);
      } else {
        _push(`<!---->`);
      }
      if (__props.submissions) {
        _push(`<div class="col-md-2 label-left" data-v-f49ec086><label class="jarak-teks05" data-v-f49ec086><b data-v-f49ec086>LINK KARYA</b></label><div class="data-tim c-mb-70" data-v-f49ec086><a${ssrRenderAttr("href", __props.submissions.link)} target="_blank" data-v-f49ec086>Buka Link</a></div></div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`<div class="label-left" data-v-f49ec086><label class="jarak-teks05" data-v-f49ec086><b data-v-f49ec086>DESKRIPSI</b></label><div class="c-mb20 rata-tengah" data-v-f49ec086>${ssrInterpolate(__props.submissions.description)}</div></div></div></div></div></div></div></div></div></div>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Pages/Roles/Admin/Tim/Detailtim.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const Detailtim = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-f49ec086"]]);
export {
  Detailtim as default
};
