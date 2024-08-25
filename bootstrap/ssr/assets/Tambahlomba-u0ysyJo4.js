import { reactive, mergeProps, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrRenderList, ssrRenderAttr, ssrRenderStyle, ssrInterpolate, ssrIncludeBooleanAttr, ssrLooseContain } from "vue/server-renderer";
import "@inertiajs/vue3";
import "sweetalert2";
const _sfc_main = {
  __name: "Tambahlomba",
  __ssrInlineRender: true,
  props: ["name", "username", "kriteriaz", "settings", "logo1"],
  setup(__props) {
    const form = reactive({
      name_lomba: "",
      description: "",
      sertifikat: null,
      picture: null,
      pj: "",
      kontak: "",
      tempat: "",
      biaya_pendaftaran: "",
      selectedCriteria: [],
      bobot: {}
      // Object to store bobot values for each kriteria
    });
    const errors = reactive({
      sertifikat: "",
      picture: ""
    });
    const isKriteriaSelected = (kriteriaId) => {
      return form.selectedCriteria.includes(kriteriaId);
    };
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "wrapper" }, _attrs))}><header><div class="c-topbar"><nav class="navbar navbar-expand"><div class="navbar-tambah"><!--[-->`);
      ssrRenderList(__props.settings, (setting) => {
        _push(`<div class="navbar-left"><a href="/"><img${ssrRenderAttr("src", setting.logo1 ? `/storage/${setting.logo1}` : "/bootstrap/images/logo1default.jpg")} alt="Logo" style="${ssrRenderStyle({ "width": "135px", "margin-left": "-15px" })}"></a></div>`);
      });
      _push(`<!--]--></div><div class="search-bar flex-grow-1"></div><div class="top-menu ms-auto"><ul class="navbar-nav align-items-center"><div class="user-info ps-3"><p class="user-name mb-0">${ssrInterpolate(_ctx.$page.props.userData.name)}</p><p class="user-role">${ssrInterpolate(_ctx.$page.props.userData.username)}</p></div><div class="parent-icon posisi-icon"><i class="bx bx-user-circle c-font48"></i></div></ul></div></nav></div></header><div class="page-wrapper-new"><div class="page-content"><div class="card"><div class="card-body"><h4 class="mb-0">TAMBAH LOMBA</h4><hr><form enctype="multipart/form-data"><div class="row"><div class="col-md-6 c-mb10"><label class="c-mb5-black" for="name_lomba"><b>Nama Lomba</b></label><input type="text" class="form-control" id="name_lomba" placeholder="Masukan nama lomba"${ssrRenderAttr("value", form.name_lomba)} required></div><div class="col-md-6"><label class="c-mb5-black" for="pj"><b>Nama PJ</b></label><input type="text" class="form-control" id="pj" placeholder="Masukan nama PJ"${ssrRenderAttr("value", form.pj)} required></div><div class="col-md-6"><label class="c-mb5-black" for="descriptionaddl"><b>Deskripsi</b></label><div class="col-12"><textarea class="c-mb10" id="descriptionaddl" placeholder="Masukan deskripsi lomba" rows="4" required>${ssrInterpolate(form.description)}</textarea></div><div><label for="picture" class="form-label judul-form"><b>Gambar</b></label><input class="form-control" type="file" name="picture"><p class="keterangan-foto f-italic">Max file size: 2MB (500 x 500 px)</p><p class="keterangan-foto f-italic">Format: .jpg, .png, .jpeg</p>`);
      if (errors.picture) {
        _push(`<p class="text-danger">${ssrInterpolate(errors.picture)}</p>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div><br><div><label for="sertifikat" class="form-label judul-form"><b>Sertifikat</b></label><input class="form-control" type="file" name="sertifikat"><p class="keterangan-foto f-italic">Max file size: 2MB</p><p class="keterangan-foto f-italic">Format: .pdf</p>`);
      if (errors.sertifikat) {
        _push(`<p class="text-danger">${ssrInterpolate(errors.sertifikat)}</p>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div></div><div class="col-md-6"><label class="c-mb5-black" for="kontak"><b>Kontak PJ (+62)</b></label><input type="number" class="form-control label-8" id="kontak" placeholder="Masukan kontak PJ"${ssrRenderAttr("value", form.kontak)} required><div><label class="c-mb5-black" for="tempat"><b>Tempat</b></label><input type="text" class="form-control" id="tempat" placeholder="Masukan nama tempat"${ssrRenderAttr("value", form.tempat)} required></div><div class="c-mt10"><label class="c-mb5-black" for="biaya_pendaftaran"><b>Biaya Pendaftaran</b></label><input type="number" class="form-control label-8" placeholder="Masukan biaya pendaftaran" id="biaya_pendaftaran"${ssrRenderAttr("value", form.biaya_pendaftaran)} required></div><div><label class="role-add"><b class="warna-hitam">Kriteria Penilaian</b></label><div><!--[-->`);
      ssrRenderList(__props.kriteriaz.data, (kriteria) => {
        _push(`<div class="form-check"><input class="form-check-input" type="checkbox"${ssrRenderAttr("id", "kriteria" + kriteria.id)}${ssrIncludeBooleanAttr(Array.isArray(form.selectedCriteria) ? ssrLooseContain(form.selectedCriteria, kriteria.id) : form.selectedCriteria) ? " checked" : ""}${ssrRenderAttr("value", kriteria.id)}><label class="form-check-label"${ssrRenderAttr("for", "kriteria" + kriteria.id)}>${ssrInterpolate(kriteria.name_kriteria)}</label><input type="number" class="form-control" placeholder="Masukan bobot nilai"${ssrIncludeBooleanAttr(!isKriteriaSelected(kriteria.id)) ? " readonly" : ""}${ssrRenderAttr("value", form.bobot[kriteria.id])}></div>`);
      });
      _push(`<!--]--></div></div></div></div><div class="btn-posisi"><a class="btn btn-danger button-left"${ssrRenderAttr("href", _ctx.route("lomba.index"))}>Batal</a><button type="submit" class="btn btn-primary button-right">Tambah</button></div></form></div></div></div></div></div>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Pages/Roles/Admin/Lomba/Tambahlomba.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
