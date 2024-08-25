import { ref, onMounted, mergeProps, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrRenderList, ssrRenderAttr, ssrRenderStyle, ssrInterpolate } from "vue/server-renderer";
import { useForm } from "@inertiajs/vue3";
import { _ as _export_sfc } from "./_plugin-vue_export-helper-1tPrXgE0.js";
const _sfc_main = {
  __name: "Detailtimreport",
  __ssrInlineRender: true,
  props: ["userData", "members", "team", "submissions", "reg_lombas", "lomba", "kriterias", "value", "settings", "logo1"],
  setup(__props) {
    const { userData, members, team, submissions, reg_lombas, lomba, kriterias, value, settings, log01 } = __props;
    const form = useForm({
      value_count: {}
    });
    ref([]);
    onMounted(() => {
      kriterias.forEach((kriteria) => {
        var _a;
        form.value_count[kriteria.id] = ((_a = value.find((v) => v.kriteria_lomba_id === kriteria.id)) == null ? void 0 : _a.value_count) || "";
      });
    });
    return (_ctx, _push, _parent, _attrs) => {
      var _a, _b, _c, _d, _e, _f;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "wrapper" }, _attrs))} data-v-ad91d9db><header data-v-ad91d9db><div class="c-topbar" data-v-ad91d9db><nav class="navbar navbar-expand" data-v-ad91d9db><div class="navbar-tambah" data-v-ad91d9db><!--[-->`);
      ssrRenderList(__props.settings, (setting) => {
        _push(`<div class="navbar-left" data-v-ad91d9db><a href="/" data-v-ad91d9db><img${ssrRenderAttr("src", setting.logo1 ? `/storage/${setting.logo1}` : "/bootstrap/images/logo1default.jpg")} alt="Logo" style="${ssrRenderStyle({ "width": "135px", "margin-left": "-15px" })}" data-v-ad91d9db></a></div>`);
      });
      _push(`<!--]--></div><div class="search-bar flex-grow-1" data-v-ad91d9db></div><div class="top-menu ms-auto" data-v-ad91d9db><ul class="navbar-nav align-items-center" data-v-ad91d9db><div class="user-info ps-3" data-v-ad91d9db><p class="user-name mb-0" data-v-ad91d9db>${ssrInterpolate(__props.userData.name)}</p><p class="user-role" data-v-ad91d9db>${ssrInterpolate(__props.userData.username)}</p></div><div class="parent-icon posisi-icon" data-v-ad91d9db><i class="bx bx-user-circle c-font48" data-v-ad91d9db></i></div></ul></div></nav></div></header><div class="page-wrapper-new" data-v-ad91d9db><div class="page-content" data-v-ad91d9db><div class="card" data-v-ad91d9db>`);
      if (__props.team) {
        _push(`<div class="card-body" data-v-ad91d9db><h4 class="mb-0" data-v-ad91d9db>DETAIL TIM ${ssrInterpolate(__props.team.name_team)}</h4><hr data-v-ad91d9db><div class="row" data-v-ad91d9db>`);
        if (__props.team) {
          _push(`<div class="col-md-3 c-mb10" data-v-ad91d9db><label class="c-mb5-black" data-v-ad91d9db><b data-v-ad91d9db>INSTANSI</b></label><div class="c-mb20" data-v-ad91d9db>${ssrInterpolate(__props.team.instansi)}</div></div>`);
        } else {
          _push(`<!---->`);
        }
        if (__props.team) {
          _push(`<div class="col-md-3" data-v-ad91d9db><label class="c-mb5-black" data-v-ad91d9db><b data-v-ad91d9db>KETUA</b></label><div class="c-mb20" data-v-ad91d9db>${ssrInterpolate((_b = (_a = __props.team) == null ? void 0 : _a.user) == null ? void 0 : _b.name)}</div></div>`);
        } else {
          _push(`<!---->`);
        }
        if (__props.team) {
          _push(`<div class="col-md-3" data-v-ad91d9db><label class="c-mb5-black" data-v-ad91d9db><b data-v-ad91d9db>EMAIL</b></label><div class="c-mb20" data-v-ad91d9db>${ssrInterpolate(__props.team.email)}</div></div>`);
        } else {
          _push(`<!---->`);
        }
        if (__props.team) {
          _push(`<div class="col-md-3" data-v-ad91d9db><label class="c-mb5-black" data-v-ad91d9db><b data-v-ad91d9db>NO WHATSAPP</b></label><div class="c-mb20" data-v-ad91d9db>${ssrInterpolate(__props.team.phone)}</div></div>`);
        } else {
          _push(`<!---->`);
        }
        _push(`<div class="col-md-2" data-v-ad91d9db><label class="c-mb5-black" data-v-ad91d9db><b data-v-ad91d9db>PEMBAYARAN</b></label><div class="c-mb20" data-v-ad91d9db><a${ssrRenderAttr("href", `/datatimshow/${__props.team.id}`)} data-v-ad91d9db>Lihat Bukti</a></div></div></div><br data-v-ad91d9db><br data-v-ad91d9db><br data-v-ad91d9db><div class="row row-cards justify-content-center" data-v-ad91d9db><!--[-->`);
        ssrRenderList(__props.members, (member) => {
          _push(`<div class="col-md-6 col-lg-3 crud-max-width260" data-v-ad91d9db><div class="card" data-v-ad91d9db><div class="card-header btn-crud" data-v-ad91d9db><h6 data-v-ad91d9db><b data-v-ad91d9db>${ssrInterpolate(member.role)}</b></h6></div><div class="card-body p-4 text-center posisi-mb23" data-v-ad91d9db><div class="btn-crud" data-v-ad91d9db><img${ssrRenderAttr("src", member.photo ? `/storage/${member.photo}` : "/bootstrap/images/default2.png")} height="120" alt="..." class="img-fluidc rounded" data-v-ad91d9db></div><br data-v-ad91d9db><h6 data-v-ad91d9db><b data-v-ad91d9db>${ssrInterpolate(member.name)}</b></h6><br data-v-ad91d9db><div class="posisi-mb7" data-v-ad91d9db>${ssrInterpolate(member.nik)}</div><div class="text-muted" data-v-ad91d9db>${ssrInterpolate(member.instansi)}</div></div></div></div>`);
        });
        _push(`<!--]--></div><div class="card card-height400" data-v-ad91d9db><div class="card-body p-4 text-center" data-v-ad91d9db><h6 class="sub-judul-tim" data-v-ad91d9db><b data-v-ad91d9db>KARYA TIM</b></h6><hr data-v-ad91d9db><div class="row" data-v-ad91d9db>`);
        if (__props.submissions) {
          _push(`<div class="col-md-4 label-left" data-v-ad91d9db><label class="jarak-teks05" data-v-ad91d9db><b data-v-ad91d9db>JUDUL</b></label><div class="c-mb20" data-v-ad91d9db>${ssrInterpolate(__props.submissions.title)}</div></div>`);
        } else {
          _push(`<!---->`);
        }
        if (__props.submissions) {
          _push(`<div class="col-md-3 label-left" data-v-ad91d9db><label class="jarak-teks05" data-v-ad91d9db><b data-v-ad91d9db>SURAT</b></label><div class="data-tim" data-v-ad91d9db><a${ssrRenderAttr("href", `/submissionsurat/${__props.submissions.id}`)} data-v-ad91d9db>Dokumen.pdf</a></div></div>`);
        } else {
          _push(`<!---->`);
        }
        if (__props.submissions) {
          _push(`<div class="col-md-3 label-left" data-v-ad91d9db><label class="jarak-teks05" data-v-ad91d9db><b data-v-ad91d9db>FILE</b></label><div class="data-tim" data-v-ad91d9db><a${ssrRenderAttr("href", `/submissionshow/${__props.submissions.id}`)} data-v-ad91d9db>Lihat File</a></div></div>`);
        } else {
          _push(`<!---->`);
        }
        if (__props.submissions) {
          _push(`<div class="col-md-2 label-left" data-v-ad91d9db><label class="jarak-teks05" data-v-ad91d9db><b data-v-ad91d9db>LINK KARYA</b></label><div class="data-tim c-mb-70" data-v-ad91d9db><a${ssrRenderAttr("href", __props.submissions.link)} target="_blank" data-v-ad91d9db>Buka Link</a></div></div>`);
        } else {
          _push(`<!---->`);
        }
        _push(`<div class="label-left" data-v-ad91d9db><label class="jarak-teks05" data-v-ad91d9db><b data-v-ad91d9db>DESKRIPSI</b></label><div class="c-mb20 rata-tengah" data-v-ad91d9db>${ssrInterpolate(__props.submissions.description)}</div></div></div></div></div></div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div></div></div><h5 class="c-ml-160 jarak-top-kurang18 jarak-bottom-kurang13" data-v-ad91d9db>HASIL PENILAIAN OLINAS</h5>`);
      if (__props.reg_lombas) {
        _push(`<div class="page-wrapper-report" data-v-ad91d9db><div class="page-content" data-v-ad91d9db><div class="card" data-v-ad91d9db><div class="card-body" data-v-ad91d9db><h6 class="warna-abu" data-v-ad91d9db>${ssrInterpolate((_d = (_c = __props.reg_lombas) == null ? void 0 : _c.lomba) == null ? void 0 : _d.name_lomba)}</h6><h6 class="c-mb20" data-v-ad91d9db>${ssrInterpolate((_f = (_e = __props.reg_lombas) == null ? void 0 : _e.submission) == null ? void 0 : _f.title)}</h6><div class="card" data-v-ad91d9db><h5 class="p-3" data-v-ad91d9db>Penilaian</h5><div class="card-body p-4 text-center" data-v-ad91d9db><div class="row" data-v-ad91d9db><table class="table table-bordered jarak-top-kurang25" data-v-ad91d9db><thead class="table-dark" data-v-ad91d9db><tr data-v-ad91d9db><th class="width-id" data-v-ad91d9db>NO.</th><th class="crud-width-400 posisi-text" data-v-ad91d9db>KRITERIA</th><th class="crud-width-40" data-v-ad91d9db>BOBOT</th><th class="crud-width-40" data-v-ad91d9db>NILAI</th></tr></thead><tbody data-v-ad91d9db><!--[-->`);
        ssrRenderList(__props.kriterias, (kriteria, index) => {
          var _a2;
          _push(`<tr data-v-ad91d9db><th data-v-ad91d9db>${ssrInterpolate(index + 1)}</th><td class="text-left" data-v-ad91d9db>${ssrInterpolate((_a2 = kriteria == null ? void 0 : kriteria.kriteria) == null ? void 0 : _a2.name_kriteria)}</td><td class="text-center" data-v-ad91d9db>${ssrInterpolate(kriteria.bobot)} %</td><td class="text-center" data-v-ad91d9db>${ssrInterpolate(kriteria.value_count)}</td></tr>`);
        });
        _push(`<!--]--><tr data-v-ad91d9db><th colspan="3" class="text-left" data-v-ad91d9db>Total</th><td class="crud-width-40" data-v-ad91d9db>${ssrInterpolate(__props.reg_lombas.value_total)}</td></tr></tbody></table></div></div></div></div></div></div></div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Pages/Roles/User/Report/Detailtimreport.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const Detailtimreport = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-ad91d9db"]]);
export {
  Detailtimreport as default
};
