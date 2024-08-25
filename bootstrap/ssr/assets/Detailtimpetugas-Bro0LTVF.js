import { ref, onMounted, mergeProps, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrRenderList, ssrRenderAttr, ssrRenderStyle, ssrInterpolate } from "vue/server-renderer";
import { useForm } from "@inertiajs/vue3";
import { _ as _export_sfc } from "./_plugin-vue_export-helper-1tPrXgE0.js";
const _sfc_main = {
  __name: "Detailtimpetugas",
  __ssrInlineRender: true,
  props: ["userData", "members", "team", "submissions", "reg_lombas", "lomba", "kriterias", "value", "settings", "logo1"],
  setup(__props) {
    const { userData, members, team, submissions, reg_lombas, lomba, kriterias, value, settings, logo1 } = __props;
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
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "wrapper" }, _attrs))} data-v-ce1c1a57><header data-v-ce1c1a57><div class="c-topbar" data-v-ce1c1a57><nav class="navbar navbar-expand" data-v-ce1c1a57><div class="navbar-tambah" data-v-ce1c1a57><!--[-->`);
      ssrRenderList(__props.settings, (setting) => {
        _push(`<div class="navbar-left" data-v-ce1c1a57><a href="/" data-v-ce1c1a57><img${ssrRenderAttr("src", setting.logo1 ? `/storage/${setting.logo1}` : "/bootstrap/images/logo1default.jpg")} alt="Logo" style="${ssrRenderStyle({ "width": "135px", "margin-left": "-15px" })}" data-v-ce1c1a57></a></div>`);
      });
      _push(`<!--]--></div><div class="search-bar flex-grow-1" data-v-ce1c1a57></div><div class="top-menu ms-auto" data-v-ce1c1a57><ul class="navbar-nav align-items-center" data-v-ce1c1a57><div class="user-info ps-3" data-v-ce1c1a57><p class="user-name mb-0" data-v-ce1c1a57>${ssrInterpolate(__props.userData.name)}</p><p class="user-role" data-v-ce1c1a57>${ssrInterpolate(__props.userData.username)}</p></div><div class="parent-icon posisi-icon" data-v-ce1c1a57><i class="bx bx-user-circle c-font48" data-v-ce1c1a57></i></div></ul></div></nav></div></header><div class="page-wrapper-new" data-v-ce1c1a57><div class="page-content" data-v-ce1c1a57><div class="card" data-v-ce1c1a57>`);
      if (__props.team) {
        _push(`<div class="card-body" data-v-ce1c1a57><h4 class="mb-0" data-v-ce1c1a57>DETAIL TIM ${ssrInterpolate(__props.team.name_team)}</h4><hr data-v-ce1c1a57><div class="row" data-v-ce1c1a57>`);
        if (__props.team) {
          _push(`<div class="col-md-3 c-mb10" data-v-ce1c1a57><label class="c-mb5-black" data-v-ce1c1a57><b data-v-ce1c1a57>INSTANSI</b></label><div class="c-mb20" data-v-ce1c1a57>${ssrInterpolate(__props.team.instansi)}</div></div>`);
        } else {
          _push(`<!---->`);
        }
        if (__props.team) {
          _push(`<div class="col-md-3" data-v-ce1c1a57><label class="c-mb5-black" data-v-ce1c1a57><b data-v-ce1c1a57>KETUA</b></label><div class="c-mb20" data-v-ce1c1a57>${ssrInterpolate((_b = (_a = __props.team) == null ? void 0 : _a.user) == null ? void 0 : _b.name)}</div></div>`);
        } else {
          _push(`<!---->`);
        }
        if (__props.team) {
          _push(`<div class="col-md-3" data-v-ce1c1a57><label class="c-mb5-black" data-v-ce1c1a57><b data-v-ce1c1a57>EMAIL</b></label><div class="c-mb20" data-v-ce1c1a57>${ssrInterpolate(__props.team.email)}</div></div>`);
        } else {
          _push(`<!---->`);
        }
        if (__props.team) {
          _push(`<div class="col-md-3" data-v-ce1c1a57><label class="c-mb5-black" data-v-ce1c1a57><b data-v-ce1c1a57>NO WHATSAPP</b></label><div class="c-mb20" data-v-ce1c1a57>${ssrInterpolate(__props.team.phone)}</div></div>`);
        } else {
          _push(`<!---->`);
        }
        _push(`<div class="col-md-2" data-v-ce1c1a57><label class="c-mb5-black" data-v-ce1c1a57><b data-v-ce1c1a57>PEMBAYARAN</b></label><div class="c-mb20" data-v-ce1c1a57><a${ssrRenderAttr("href", `/datatimshow/${__props.team.id}`)} data-v-ce1c1a57>Lihat Bukti</a></div></div></div><br data-v-ce1c1a57><br data-v-ce1c1a57><br data-v-ce1c1a57><div class="row row-cards justify-content-center" data-v-ce1c1a57><!--[-->`);
        ssrRenderList(__props.members, (member) => {
          _push(`<div class="col-md-6 col-lg-3 crud-max-width260" data-v-ce1c1a57><div class="card" data-v-ce1c1a57><div class="card-header btn-crud" data-v-ce1c1a57><h6 data-v-ce1c1a57><b data-v-ce1c1a57>${ssrInterpolate(member.role)}</b></h6></div><div class="card-body p-4 text-center posisi-mb23" data-v-ce1c1a57><div class="btn-crud" data-v-ce1c1a57><img${ssrRenderAttr("src", member.photo ? `/storage/${member.photo}` : "/bootstrap/images/default2.png")} height="120" alt="..." class="img-fluidc rounded" data-v-ce1c1a57></div><br data-v-ce1c1a57><h6 data-v-ce1c1a57><b data-v-ce1c1a57>${ssrInterpolate(member.name)}</b></h6><br data-v-ce1c1a57><div class="posisi-mb7" data-v-ce1c1a57>${ssrInterpolate(member.nik)}</div><div class="text-muted" data-v-ce1c1a57>${ssrInterpolate(member.instansi)}</div></div></div></div>`);
        });
        _push(`<!--]--></div><div class="card card-height400" data-v-ce1c1a57><div class="card-body p-4 text-center" data-v-ce1c1a57><h6 class="sub-judul-tim" data-v-ce1c1a57><b data-v-ce1c1a57>KARYA TIM</b></h6><hr data-v-ce1c1a57><div class="row" data-v-ce1c1a57>`);
        if (__props.submissions) {
          _push(`<div class="col-md-4 label-left" data-v-ce1c1a57><label class="jarak-teks05" data-v-ce1c1a57><b data-v-ce1c1a57>JUDUL</b></label><div class="c-mb20" data-v-ce1c1a57>${ssrInterpolate(__props.submissions.title)}</div></div>`);
        } else {
          _push(`<!---->`);
        }
        if (__props.submissions) {
          _push(`<div class="col-md-3 label-left" data-v-ce1c1a57><label class="jarak-teks05" data-v-ce1c1a57><b data-v-ce1c1a57>SURAT</b></label><div class="data-tim" data-v-ce1c1a57><a${ssrRenderAttr("href", `/submissionsurat/${__props.submissions.id}`)} data-v-ce1c1a57>Dokumen.pdf</a></div></div>`);
        } else {
          _push(`<!---->`);
        }
        if (__props.submissions) {
          _push(`<div class="col-md-3 label-left" data-v-ce1c1a57><label class="jarak-teks05" data-v-ce1c1a57><b data-v-ce1c1a57>FILE</b></label><div class="data-tim" data-v-ce1c1a57><a${ssrRenderAttr("href", `/submissionshow/${__props.submissions.id}`)} data-v-ce1c1a57>Lihat File</a></div></div>`);
        } else {
          _push(`<!---->`);
        }
        if (__props.submissions) {
          _push(`<div class="col-md-2 label-left" data-v-ce1c1a57><label class="jarak-teks05" data-v-ce1c1a57><b data-v-ce1c1a57>LINK KARYA</b></label><div class="data-tim c-mb-70" data-v-ce1c1a57><a${ssrRenderAttr("href", __props.submissions.link)} target="_blank" data-v-ce1c1a57>Buka Link</a></div></div>`);
        } else {
          _push(`<!---->`);
        }
        _push(`<div class="label-left" data-v-ce1c1a57><label class="jarak-teks05" data-v-ce1c1a57><b data-v-ce1c1a57>DESKRIPSI</b></label><div class="c-mb20 rata-tengah" data-v-ce1c1a57>${ssrInterpolate(__props.submissions.description)}</div></div></div></div></div></div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div></div></div><h5 class="c-ml-160 jarak-top-kurang18 jarak-bottom-kurang13" data-v-ce1c1a57>HASIL PENILAIAN </h5>`);
      if (__props.reg_lombas) {
        _push(`<div class="page-wrapper-report" data-v-ce1c1a57><div class="page-content" data-v-ce1c1a57><div class="card" data-v-ce1c1a57><div class="card-body" data-v-ce1c1a57><h6 class="warna-abu" data-v-ce1c1a57>${ssrInterpolate((_d = (_c = __props.reg_lombas) == null ? void 0 : _c.lomba) == null ? void 0 : _d.name_lomba)}</h6><h6 class="c-mb20" data-v-ce1c1a57>${ssrInterpolate((_f = (_e = __props.reg_lombas) == null ? void 0 : _e.submission) == null ? void 0 : _f.title)}</h6><div class="card" data-v-ce1c1a57><h5 class="p-3" data-v-ce1c1a57>Penilaian</h5><div class="card-body p-4 text-center" data-v-ce1c1a57><div class="row" data-v-ce1c1a57><table class="table table-bordered jarak-top-kurang25" data-v-ce1c1a57><thead class="table-dark" data-v-ce1c1a57><tr data-v-ce1c1a57><th class="width-id" data-v-ce1c1a57>NO.</th><th class="crud-width-400 posisi-text" data-v-ce1c1a57>KRITERIA</th><th class="crud-width-40" data-v-ce1c1a57>BOBOT</th><th class="crud-width-40" data-v-ce1c1a57>NILAI</th></tr></thead><tbody data-v-ce1c1a57><!--[-->`);
        ssrRenderList(__props.kriterias, (kriteria, index) => {
          var _a2;
          _push(`<tr data-v-ce1c1a57><th data-v-ce1c1a57>${ssrInterpolate(index + 1)}</th><td class="text-left" data-v-ce1c1a57>${ssrInterpolate((_a2 = kriteria == null ? void 0 : kriteria.kriteria) == null ? void 0 : _a2.name_kriteria)}</td><td class="text-center" data-v-ce1c1a57>${ssrInterpolate(kriteria.bobot)} %</td><td class="text-center" data-v-ce1c1a57>${ssrInterpolate(kriteria.value_count)}</td></tr>`);
        });
        _push(`<!--]--><tr data-v-ce1c1a57><th colspan="3" class="text-left" data-v-ce1c1a57>Total</th><td class="crud-width-40" data-v-ce1c1a57>${ssrInterpolate(__props.reg_lombas.value_total)}</td></tr></tbody></table></div></div></div></div></div></div></div>`);
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Pages/Roles/EventAdmin/Rangking/Detailtimpetugas.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const Detailtimpetugas = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-ce1c1a57"]]);
export {
  Detailtimpetugas as default
};
