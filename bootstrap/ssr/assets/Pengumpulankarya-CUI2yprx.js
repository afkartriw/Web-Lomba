import { reactive, ref, onMounted, mergeProps, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrRenderList, ssrRenderAttr, ssrRenderStyle, ssrInterpolate } from "vue/server-renderer";
import "@inertiajs/vue3";
import "sweetalert2";
const _sfc_main = {
  __name: "Pengumpulankarya",
  __ssrInlineRender: true,
  props: ["name", "username", "tim", "submissions", "settings", "logo1"],
  setup(__props) {
    const form = reactive({
      title: "",
      description: "",
      link: "",
      file: null,
      surat: null
    });
    const linkError = ref(false);
    const fileError = ref(false);
    const suratError = ref(false);
    const { name, username, tim, submissions, settings, logo1 } = __props;
    onMounted(() => {
      if (submissions) {
        form.title = submissions.title;
        form.description = submissions.description;
        form.link = submissions.link;
      }
    });
    return (_ctx, _push, _parent, _attrs) => {
      var _a, _b;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "wrapper" }, _attrs))}><header><div class="c-topbar"><nav class="navbar navbar-expand"><div class="navbar-tambah"><!--[-->`);
      ssrRenderList(__props.settings, (setting) => {
        _push(`<div class="navbar-left"><a href="/"><img${ssrRenderAttr("src", setting.logo1 ? `/storage/${setting.logo1}` : "/bootstrap/images/logo1default.jpg")} alt="Logo" style="${ssrRenderStyle({ "width": "100px", "margin-left": "-15px" })}"></a></div>`);
      });
      _push(`<!--]--></div><div class="search-bar flex-grow-1"></div><div class="top-menu ms-auto"><ul class="navbar-nav align-items-center"><div class="user-info ps-3"><p class="user-name mb-0">${ssrInterpolate(_ctx.$page.props.userData.name)}</p><p class="user-role">${ssrInterpolate(_ctx.$page.props.userData.username)}</p></div><div class="parent-icon posisi-icon"><i class="bx bx-user-circle c-font48"></i></div></ul></div></nav></div></header><div class="page-wrapper-new"><div class="page-content"><div class="card">`);
      if (__props.tim) {
        _push(`<div class="card-body"><h4 class="mb-0">PENGUMPULAN KARYA ${ssrInterpolate((_b = (_a = __props.tim) == null ? void 0 : _a.lomba) == null ? void 0 : _b.name_lomba)}</h4><hr><form enctype="multipart/form-data"><div class="row"><div><label class="jarak-input"><b>Judul</b></label><input${ssrRenderAttr("value", form.title)} type="text" class="form-control" placeholder="Masukan judul karya" required></div><div><label class="jarak-input"><b>Deskripsi</b></label><div class="col-12"><textarea class="c-mb10" id="descriptionaddl" rows="4" placeholder="Masukan deskripsi karya" required>${ssrInterpolate(form.description)}</textarea></div></div><div><label class="jarak-input"><b>Link</b></label><input${ssrRenderAttr("value", form.link)} type="text" class="form-control" placeholder="Masukan link karya" required>`);
        if (linkError.value) {
          _push(`<p class="text-danger">Link Invalid!</p>`);
        } else {
          _push(`<!---->`);
        }
        _push(`</div><div><label for="formFile" class="form-label jarak-teks12"><b>File</b></label><input class="form-control" type="file" name="file">`);
        if (fileError.value) {
          _push(`<p class="text-danger">File melebihi batas max!</p>`);
        } else {
          _push(`<!---->`);
        }
        _push(`</div><p class="keterangan-foto f-italic">Max file size: 20MB</p><p class="keterangan-foto f-italic">Format: zip</p><div><label for="formFile" class="form-label jarak-teks12"><b>Surat</b></label><input class="form-control" type="file" name="file">`);
        if (suratError.value) {
          _push(`<p class="text-danger">Surat melebihi batas max!</p>`);
        } else {
          _push(`<!---->`);
        }
        _push(`</div><p class="keterangan-foto f-italic">Max file size: 10MB</p><p class="keterangan-foto f-italic">Format: .pdf</p></div><div class="btn-posisi"><button class="btn btn-danger button-left">Batal</button><button type="submit" class="btn btn-primary button-right">Simpan</button></div></form></div>`);
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Pages/Roles/User/Daftar/Pengumpulankarya.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
