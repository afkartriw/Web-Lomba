import { ref, onMounted, mergeProps, unref, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrRenderList, ssrRenderAttr, ssrRenderStyle, ssrInterpolate, ssrIncludeBooleanAttr } from "vue/server-renderer";
import { useForm } from "@inertiajs/vue3";
import "sweetalert2";
const _sfc_main = {
  __name: "Nilai",
  __ssrInlineRender: true,
  props: {
    userData: {
      type: Object,
      required: true
    },
    kriterias: {
      type: Array,
      required: true
    },
    lombas: {
      type: Object,
      required: true
    },
    teams: {
      type: Object,
      required: true
    },
    reg_lombas: {
      type: Object,
      required: true
    },
    settings: {
      type: Object,
      default: () => ({})
    },
    logo1: {
      type: String
    }
  },
  setup(__props) {
    const props = __props;
    const form = useForm({
      value_count: {},
      user_id: props.userData.id
    });
    const errors = ref([]);
    const bobotErrors = ref({});
    onMounted(() => {
      props.kriterias.forEach((kriteria) => {
        form.value_count[kriteria.id] = "";
      });
    });
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "wrapper" }, _attrs))}><header><div class="c-topbar"><nav class="navbar navbar-expand"><div class="navbar-tambah"><!--[-->`);
      ssrRenderList(__props.settings, (setting) => {
        _push(`<div class="navbar-left"><a href="/"><img${ssrRenderAttr("src", setting.logo1 ? `/storage/${setting.logo1}` : "/bootstrap/images/logo1default.jpg")} alt="Logo" style="${ssrRenderStyle({ "width": "100px", "margin-left": "-15px" })}"></a></div>`);
      });
      _push(`<!--]--></div><div class="search-bar flex-grow-1"></div><div class="top-menu ms-auto"><ul class="navbar-nav align-items-center"><div class="user-info ps-3"><p class="user-name mb-0">${ssrInterpolate(_ctx.$page.props.userData.name)}</p><p class="user-role">${ssrInterpolate(_ctx.$page.props.userData.username)}</p></div><div class="parent-icon posisi-icon"><i class="bx bx-user-circle c-font48"></i></div></ul></div></nav></div></header><div class="page-wrapper-new"><div class="page-content"><div class="card">`);
      if (__props.teams) {
        _push(`<div class="card-body"><h4 class="mb-0">BERI NILAI TIM ${ssrInterpolate(__props.teams.name_team)}</h4><hr><form><!--[-->`);
        ssrRenderList(__props.kriterias, (kriteria, index) => {
          var _a;
          _push(`<div class="row"><div class="col-md-6 c-mb10"><label class="c-mb5-black"><b>${ssrInterpolate(index + 1)}. ${ssrInterpolate((_a = kriteria == null ? void 0 : kriteria.kriteria) == null ? void 0 : _a.name_kriteria)}</b></label></div><div class="col-md-6"><label class="c-mb5-black">Nilai ${ssrInterpolate(kriteria.bobot)} %</label><input type="number" class="form-control c-mb20"${ssrRenderAttr("id", "value_count_" + kriteria.id)}${ssrRenderAttr("value", unref(form).value_count[kriteria.id])}><input type="hidden"${ssrRenderAttr("name", "kriteria_lomba_id" + kriteria.id)}${ssrRenderAttr("value", kriteria.id)}>`);
          if (bobotErrors.value[kriteria.id]) {
            _push(`<div class="text-danger">${ssrInterpolate(bobotErrors.value[kriteria.id])}</div>`);
          } else {
            _push(`<!---->`);
          }
          _push(`</div></div>`);
        });
        _push(`<!--]-->`);
        if (errors.value.length) {
          _push(`<div class="alert alert-danger"><ul><!--[-->`);
          ssrRenderList(errors.value, (error, index) => {
            _push(`<li>${ssrInterpolate(error)}</li>`);
          });
          _push(`<!--]--></ul></div>`);
        } else {
          _push(`<!---->`);
        }
        _push(`<div class="btn-posisi"><button type="button" class="btn btn-danger button-left">Batal</button><button type="submit" class="btn btn-primary button-right"${ssrIncludeBooleanAttr(__props.reg_lombas.status === "sudah_dinilai") ? " disabled" : ""}>Simpan</button></div></form></div>`);
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Pages/Roles/Panelis/Lomba/Nilai.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
