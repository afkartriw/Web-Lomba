import { reactive, ref, mergeProps, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrRenderList, ssrRenderAttr, ssrRenderStyle, ssrInterpolate } from "vue/server-renderer";
import "sweetalert2";
import "@inertiajs/vue3";
import { _ as _export_sfc } from "./_plugin-vue_export-helper-1tPrXgE0.js";
const _sfc_main = {
  __name: "Timdetail",
  __ssrInlineRender: true,
  props: ["userData", "members", "team", "submissions", "settings", "userStatus"],
  setup(__props) {
    const form = reactive({
      description: ""
    });
    const isPopupVisible = ref(false);
    return (_ctx, _push, _parent, _attrs) => {
      var _a, _b;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "wrapper" }, _attrs))} data-v-131bc248><header data-v-131bc248><div class="c-topbar" data-v-131bc248><nav class="navbar navbar-expand" data-v-131bc248><div class="navbar-tambah" data-v-131bc248><!--[-->`);
      ssrRenderList(__props.settings, (setting) => {
        _push(`<div class="navbar-left" data-v-131bc248><a href="/" data-v-131bc248><img${ssrRenderAttr("src", setting.logo1 ? `/storage/${setting.logo1}` : "/bootstrap/images/logo1default.jpg")} alt="Logo" style="${ssrRenderStyle({ "width": "135px", "margin-left": "-15px" })}" data-v-131bc248></a></div>`);
      });
      _push(`<!--]--></div><div class="search-bar flex-grow-1" data-v-131bc248></div><div class="top-menu ms-auto" data-v-131bc248><ul class="navbar-nav align-items-center" data-v-131bc248><div class="user-info ps-3" data-v-131bc248><p class="user-name mb-0" data-v-131bc248>${ssrInterpolate(__props.userData.name)}</p><p class="user-role" data-v-131bc248>${ssrInterpolate(__props.userData.username)}</p></div><div class="parent-icon posisi-icon" data-v-131bc248><i class="bx bx-user-circle c-font48" data-v-131bc248></i></div></ul></div></nav></div></header><div class="page-wrapper-new" data-v-131bc248><div class="page-content" data-v-131bc248><div class="card" data-v-131bc248>`);
      if (__props.team) {
        _push(`<div class="card-body" data-v-131bc248><h4 class="mb-0" data-v-131bc248>DETAIL TIM ${ssrInterpolate(__props.team.name_team)}</h4>`);
        if (__props.team.status !== "verified" && __props.userStatus.status_kelulusan !== "tidak_lolos") {
          _push(`<button class="btn btn-danger crud-width-150 btn-petugas btn-gagal" data-v-131bc248>Gagal</button>`);
        } else {
          _push(`<!---->`);
        }
        if (isPopupVisible.value) {
          _push(`<div class="popup" data-v-131bc248><div class="popup-content" data-v-131bc248><span class="close" data-v-131bc248>×</span><h5 data-v-131bc248>Input Notifikasi</h5><hr data-v-131bc248><div data-v-131bc248><label class="c-mb5-black c-ml20" data-v-131bc248><b data-v-131bc248>Deskripsi</b></label><div class="col-11" data-v-131bc248><textarea class="form-control c-mb10 c-ml20" id="inputProductDescription" rows="3" placeholder="Tulis Notifikasi" data-v-131bc248>${ssrInterpolate(form.description)}</textarea></div><button class="btn btn-primary crud-width100 btn-mid c-mt40" data-v-131bc248>Kirim</button></div></div></div>`);
        } else {
          _push(`<!---->`);
        }
        if (__props.team.status !== "verified" && __props.userStatus.status_kelulusan !== "tidak_lolos") {
          _push(`<button class="btn btn-primary crud-width-150 btn-petugas btn-verifikasi posisi-ver" data-v-131bc248>Verifikasi</button>`);
        } else {
          _push(`<!---->`);
        }
        if (__props.team.status === "verified") {
          _push(`<button class="btn btn-success crud-width-150 btn-petugas btn-verifikasi posisi-ver" data-v-131bc248>Tervifikasi</button>`);
        } else {
          _push(`<!---->`);
        }
        _push(`<hr data-v-131bc248><div class="row" data-v-131bc248>`);
        if (__props.team) {
          _push(`<div class="col-md-3 c-mb10" data-v-131bc248><label class="c-mb5-black" data-v-131bc248><b data-v-131bc248>INSTANSI</b></label><div class="c-mb20" data-v-131bc248>${ssrInterpolate(__props.team.instansi)}</div></div>`);
        } else {
          _push(`<!---->`);
        }
        if (__props.team) {
          _push(`<div class="col-md-2" data-v-131bc248><label class="c-mb5-black" data-v-131bc248><b data-v-131bc248>LOMBA</b></label><ul data-v-131bc248><li data-v-131bc248>${ssrInterpolate((_b = (_a = __props.team) == null ? void 0 : _a.lomba) == null ? void 0 : _b.name_lomba)}</li></ul></div>`);
        } else {
          _push(`<!---->`);
        }
        if (__props.team) {
          _push(`<div class="col-md-3" data-v-131bc248><label class="c-mb5-black" data-v-131bc248><b data-v-131bc248>EMAIL</b></label><div class="c-mb20" data-v-131bc248>${ssrInterpolate(__props.team.email)}</div></div>`);
        } else {
          _push(`<!---->`);
        }
        if (__props.team) {
          _push(`<div class="col-md-2" data-v-131bc248><label class="c-mb5-black" data-v-131bc248><b data-v-131bc248>NO WHATSAPP</b></label><div class="c-mb20" data-v-131bc248>${ssrInterpolate(__props.team.phone)}</div></div>`);
        } else {
          _push(`<!---->`);
        }
        if (__props.team) {
          _push(`<div class="col-md-2" data-v-131bc248><label class="c-mb5-black" data-v-131bc248><b data-v-131bc248>PEMBAYARAN</b></label><div class="c-mb20" data-v-131bc248><a${ssrRenderAttr("href", `/datatimshow/${__props.team.id}`)} data-v-131bc248>Lihat Bukti</a></div></div>`);
        } else {
          _push(`<!---->`);
        }
        if (__props.team) {
          _push(`<div class="col-md-3" data-v-131bc248><label class="c-mb5-black" data-v-131bc248><b data-v-131bc248>STATUS</b></label><div class="c-mb20" data-v-131bc248>${ssrInterpolate(__props.team.status)}</div></div>`);
        } else {
          _push(`<!---->`);
        }
        _push(`</div><br data-v-131bc248><br data-v-131bc248><br data-v-131bc248><div class="row row-cards justify-content-center" data-v-131bc248><!--[-->`);
        ssrRenderList(__props.members, (member) => {
          _push(`<div class="col-md-4 col-lg-3 crud-max-width260" data-v-131bc248><div class="card" data-v-131bc248><div class="card-header btn-crud" data-v-131bc248><h6 data-v-131bc248><b data-v-131bc248>${ssrInterpolate(member.role)}</b></h6></div><div class="card-body p-4 text-center posisi-mb23" data-v-131bc248><div class="btn-crud" data-v-131bc248><img${ssrRenderAttr("src", member.user.photo ? `/storage/${member.user.photo}` : "/bootstrap/images/default2.png")} height="120" alt="..." class="img-fluidc rounded" data-v-131bc248></div><br data-v-131bc248><h6 data-v-131bc248><b data-v-131bc248>${ssrInterpolate(member.user.name)}</b></h6><br data-v-131bc248><div class="posisi-mb7" data-v-131bc248>${ssrInterpolate(member.user.nik)}</div><div class="text-muted" data-v-131bc248>${ssrInterpolate(member.user.instansi)}</div></div></div></div>`);
        });
        _push(`<!--]--></div><div class="card card-height400" data-v-131bc248><div class="card-body p-4 text-center" data-v-131bc248><h6 class="sub-judul-tim" data-v-131bc248><b data-v-131bc248>KARYA TIM</b></h6><hr data-v-131bc248><div class="row" data-v-131bc248>`);
        if (__props.submissions) {
          _push(`<div class="col-md-4 label-left" data-v-131bc248><label class="jarak-teks05" data-v-131bc248><b data-v-131bc248>JUDUL</b></label><div class="c-mb20" data-v-131bc248>${ssrInterpolate(__props.submissions.title)}</div></div>`);
        } else {
          _push(`<!---->`);
        }
        _push(`<div class="col-md-3 label-left" data-v-131bc248><label class="jarak-teks05" data-v-131bc248><b data-v-131bc248>SURAT</b></label><div class="data-tim" data-v-131bc248><a${ssrRenderAttr("href", `/submissionsurat/${__props.submissions.id}`)} data-v-131bc248>Dokumen.pdf</a></div></div>`);
        if (__props.submissions) {
          _push(`<div class="col-md-3 label-left" data-v-131bc248><label class="jarak-teks05" data-v-131bc248><b data-v-131bc248>FILE</b></label><div class="data-tim" data-v-131bc248><a${ssrRenderAttr("href", `/submissionshow/${__props.submissions.id}`)} data-v-131bc248>Lihat File</a></div></div>`);
        } else {
          _push(`<!---->`);
        }
        if (__props.submissions) {
          _push(`<div class="col-md-2 label-left" data-v-131bc248><label class="jarak-teks05" data-v-131bc248><b data-v-131bc248>LINK KARYA</b></label><div class="data-tim c-mb-70" data-v-131bc248><a${ssrRenderAttr("href", __props.submissions.link)} target="_blank" data-v-131bc248>Buka Link</a></div></div>`);
        } else {
          _push(`<!---->`);
        }
        if (__props.submissions) {
          _push(`<div class="label-left" data-v-131bc248><label class="jarak-teks05" data-v-131bc248><b data-v-131bc248>DESKRIPSI</b></label><div class="c-mb20 rata-tengah" data-v-131bc248>${ssrInterpolate(__props.submissions.description)}</div></div>`);
        } else {
          _push(`<!---->`);
        }
        _push(`</div></div></div></div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div></div></div></div>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Pages/Roles/EventAdmin/Tim/Timdetail.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const Timdetail = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-131bc248"]]);
export {
  Timdetail as default
};
