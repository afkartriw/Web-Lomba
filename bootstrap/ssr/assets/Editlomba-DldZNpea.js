import { reactive, ref, onMounted, mergeProps, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrRenderList, ssrRenderAttr, ssrRenderStyle, ssrInterpolate, ssrIncludeBooleanAttr, ssrLooseContain } from "vue/server-renderer";
import { usePage } from "@inertiajs/vue3";
import "sweetalert2";
const _sfc_main = {
  __name: "Editlomba",
  __ssrInlineRender: true,
  props: ["name", "username", "kriterias", "settings", "logo1", "lombaCriteria"],
  setup(__props) {
    const { name, username, settings, logo1, kriterias, lombaCriteria } = __props;
    const lomba = usePage().props.lombas;
    const form = reactive({
      name_lomba: lomba.data.name_lomba || "",
      pj: lomba.data.pj || "",
      description: lomba.data.description || "",
      kontak: lomba.data.kontak || "",
      tempat: lomba.data.tempat || "",
      biaya_pendaftaran: lomba.data.biaya_pendaftaran || "",
      picture: null,
      sertifikat: null,
      selectedCriteria: [],
      bobot: {}
    });
    const sertifikatError = ref("");
    onMounted(() => {
      lombaCriteria.forEach((criteria) => {
        form.selectedCriteria.push(criteria.id);
        form.bobot[criteria.id] = criteria.weight;
      });
    });
    const isKriteriaSelected = (kriteriaId) => {
      return form.selectedCriteria.includes(kriteriaId);
    };
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "wrapper" }, _attrs))}><header><div class="c-topbar"><nav class="navbar navbar-expand"><div class="navbar-tambah"><!--[-->`);
      ssrRenderList(__props.settings, (setting) => {
        _push(`<div class="navbar-left"><a href="/"><img${ssrRenderAttr("src", setting.logo1 ? `/storage/${setting.logo1}` : "/bootstrap/images/logo1default.jpg")} alt="Logo" style="${ssrRenderStyle({ "width": "100px", "margin-left": "-15px" })}"></a></div>`);
      });
      _push(`<!--]--></div><div class="search-bar flex-grow-1"></div><div class="top-menu ms-auto"><ul class="navbar-nav align-items-center"><div class="user-info ps-3"><p class="user-name mb-0">${ssrInterpolate(_ctx.$page.props.userData.name)}</p><p class="user-role">${ssrInterpolate(_ctx.$page.props.userData.username)}</p></div><div class="parent-icon posisi-icon"><i class="bx bx-user-circle c-font48"></i></div></ul></div></nav></div></header><div class="page-wrapper-new"><div class="page-content"><div class="card"><form enctype="multipart/form-data"><div class="card-body"><h4 class="mb-0">EDIT LOMBA</h4><hr><div class="row"><div class="col-md-6 c-mb10"><label class="c-mb5-black"><b>Nama Lomba</b></label><input type="text" class="form-control"${ssrRenderAttr("value", form.name_lomba)} id="name" placeholder="Masukan nama lomba"></div><div class="col-md-6 c-mb10"><label class="c-mb5-black"><b>Nama PJ</b></label><input type="text" class="form-control"${ssrRenderAttr("value", form.pj)} id="pj" placeholder="Masukan nama PJ"></div><div class="col-md-6"><label class="c-mb5-black"><b>Deskripsi</b></label><div class="col-12"><textarea class="form-control c-mb10" placeholder="Masukan deskripsi lomba" id="deskripsi" rows="4">${ssrInterpolate(form.description)}</textarea></div><div><label for="picture" class="form-label judul-form"><b>Gambar</b></label><input type="file" id="picture" accept="image/*" class="form-control"><p class="keterangan-foto f-italic">Max file size: 2MB (500 x 500 px)</p><p class="keterangan-foto f-italic">Format: .jpg, .png, .jpeg</p></div><br><div><label for="sertifikat" class="form-label judul-form"><b>Sertifikat</b></label><input type="file" id="sertifikat" class="form-control"><p class="keterangan-foto f-italic">Max file size: 2MB</p><p class="keterangan-foto f-italic">Format: .pdf</p>`);
      if (sertifikatError.value) {
        _push(`<span class="text-danger">${ssrInterpolate(sertifikatError.value)}</span>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div></div><div class="col-md-6"><label class="c-mb5-black"><b>Kontak PJ (+62)</b></label><input type="number" class="form-control"${ssrRenderAttr("value", form.kontak)} id="kontak" placeholder="Masukan kontak PJ"><div><label class="c-mb5-black"><b>Tempat</b></label><input type="text" class="form-control"${ssrRenderAttr("value", form.tempat)} id="tempat" placeholder="Masukan nama tempat"></div><div class="c-mt10"><label class="c-mb5-black"><b>Biaya Pendaftaran</b></label><input type="text" class="form-control"${ssrRenderAttr("value", form.biaya_pendaftaran)} placeholder="Masukan biaya pendaftaran" id="biaya_pendaftaran"></div><div><label class="role-add"><b class="warna-hitam">Kriteria Penilaian</b></label><!--[-->`);
      ssrRenderList(__props.kriterias.data, (kriteria) => {
        _push(`<div class="form-check"><input class="form-check-input" type="checkbox"${ssrRenderAttr("id", "kriteria" + kriteria.id)}${ssrIncludeBooleanAttr(Array.isArray(form.selectedCriteria) ? ssrLooseContain(form.selectedCriteria, kriteria.id) : form.selectedCriteria) ? " checked" : ""}${ssrRenderAttr("value", kriteria.id)}><label class="form-check-label"${ssrRenderAttr("for", "kriteria" + kriteria.id)}>${ssrInterpolate(kriteria.name_kriteria)}</label><input type="number" class="form-control" placeholder="Masukan bobot nilai"${ssrIncludeBooleanAttr(!isKriteriaSelected(kriteria.id)) ? " readonly" : ""}${ssrRenderAttr("value", form.bobot[kriteria.id])}></div>`);
      });
      _push(`<!--]--></div></div></div><div class="btn-posisi"><button class="btn btn-danger button-left">Kembali</button><button type="submit" class="btn btn-primary button-right">Update</button></div></div></form></div></div></div></div>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Pages/Roles/Admin/Lomba/Editlomba.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
