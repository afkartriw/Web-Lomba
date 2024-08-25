import { mergeProps, unref, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrRenderAttr, ssrRenderStyle, ssrInterpolate } from "vue/server-renderer";
import { useForm } from "@inertiajs/vue3";
const _sfc_main = {
  __name: "Editsetting",
  __ssrInlineRender: true,
  props: {
    settings: Object,
    logo1: String,
    logo2: String,
    logo3: String
  },
  setup(__props) {
    const props = __props;
    const form = useForm({
      name: props.settings.name,
      judul: props.settings.judul,
      sub_judul: props.settings.sub_judul,
      judul_des: props.settings.judul_des,
      deskripsi: props.settings.deskripsi,
      mulai: props.settings.mulai,
      berakhir: props.settings.berakhir,
      des_pendaftaran: props.settings.des_pendaftaran,
      pengumpulan: props.settings.pengumpulan,
      des_pengumpulan: props.settings.des_pengumpulan,
      pengumuman: props.settings.pengumuman,
      des_pengumuman: props.settings.des_pengumuman,
      presentasi: props.settings.presentasi,
      des_presentasi: props.settings.des_presentasi,
      whatsApp: props.settings.whatsApp,
      instagram: props.settings.instagram,
      email: props.settings.email,
      youtube: props.settings.youtube,
      logo1: null,
      logo2: null,
      logo3: null
    });
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "wrapper" }, _attrs))}><header><div class="c-topbar"><nav class="navbar navbar-expand"><div class="navbar-tambah"><div class="navbar-left"><a href="/"><img${ssrRenderAttr("src", __props.logo1)} alt="Logo" style="${ssrRenderStyle({ "width": "135px", "margin-left": "-15px" })}"></a></div></div><div class="search-bar flex-grow-1"></div><div class="top-menu ms-auto"><ul class="navbar-nav align-items-center"><div class="user-info ps-3"><p class="user-name mb-0">${ssrInterpolate(_ctx.$page.props.userData.name)}</p><p class="user-role">${ssrInterpolate(_ctx.$page.props.userData.username)}</p></div><div class="parent-icon posisi-icon"><i class="bx bx-user-circle c-font48"></i></div></ul></div></nav></div></header><div class="page-wrapper-new"><div class="page-content"><div class="card"><form><div class="card-body"><h4 class="mb-0">EDIT SETTING</h4><hr><div><div class="c-mb10"><label for="name" class="c-mb5-black"><b>Nama Event</b></label><input type="text" class="form-control" placeholder="Masukan nama event"${ssrRenderAttr("value", unref(form).name)} id="name"></div><div class="c-mb10"><label for="judul" class="c-mb5-black"><b>Judul</b></label><input type="text" class="form-control" placeholder="Masukan judul event"${ssrRenderAttr("value", unref(form).judul)} id="judul"></div><div class="c-mb10"><label for="sub_judul" class="c-mb5-black"><b>Sub Judul</b></label><input type="text" class="form-control" placeholder="Masukan sub judul event"${ssrRenderAttr("value", unref(form).sub_judul)} id="sub_judul"></div><div class="c-mb10"><label for="judul_des" class="c-mb5-black"><b>Judul Deskripsi</b></label><input type="text" class="form-control" placeholder="Masukan judul deskripsi"${ssrRenderAttr("value", unref(form).judul_des)} id="judul_des"></div><div class="c-mb10"><label for="deskripsi" class="c-mb5-black"><b>Deskripsi</b></label><textarea rows="4" placeholder="Masukan deskripsi event" id="descriptionaddl" required>${ssrInterpolate(unref(form).deskripsi)}</textarea></div><div class="row"><div class="col-md-5 c-mb10"><label for="mulai" class="c-mb5-black"><b>Tanggal Mulai</b></label><input type="date" class="form-control"${ssrRenderAttr("value", unref(form).mulai)} id="mulai"></div><div class="col-md-2 dash-container"><span class="dash">-</span></div><div class="col-md-5 c-mb10"><label for="berakhir" class="c-mb5-black"><b>Tanggal Berakhir</b></label><input type="date" class="form-control"${ssrRenderAttr("value", unref(form).berakhir)} id="berakhir"></div></div><div class="c-mb10"><label for="des_pendaftaran" class="c-mb5-black"><b>Deskripsi Mulai Pendaftaran</b></label><textarea rows="2" placeholder="Masukan deskripsi mulai pendaftaran" id="descriptionaddl" required>${ssrInterpolate(unref(form).des_pendaftaran)}</textarea></div><div class="c-mb10"><label for="pengumpulan" class="form-label warna-hitam"><b>Pengumpulan Karya</b></label><input type="date" class="form-control label-8 date370"${ssrRenderAttr("value", unref(form).pengumpulan)} id="pengumpulan"></div><div class="c-mb10"><label for="des_pengumpulan" class="c-mb5-black"><b>Deskripsi Pengumpulan Karya</b></label><textarea rows="2" placeholder="Masukan deskripsi pengumpulan karya" id="descriptionaddl" required>${ssrInterpolate(unref(form).des_pengumpulan)}</textarea></div><div class="c-mb10"><label for="pengumuman" class="form-label warna-hitam"><b>Pengumuman Finalis</b></label><input type="date" class="form-control label-8 date370"${ssrRenderAttr("value", unref(form).pengumuman)} id="pengumuman"></div><div class="c-mb10"><label for="des_pengumuman" class="c-mb5-black"><b>Deskripsi Pengumuman Finalis</b></label><textarea rows="2" placeholder="Masukan deskripsi pengumuman finalis" id="descriptionaddl" required>${ssrInterpolate(unref(form).des_pengumuman)}</textarea></div><div class="c-mb10"><label for="presentasi" class="form-label warna-hitam"><b>Presentasi Finalis</b></label><input type="date" class="form-control label-8 date370"${ssrRenderAttr("value", unref(form).presentasi)} id="presentasi"></div><div class="c-mb10"><label for="des_presentasi" class="c-mb5-black"><b>Deskripsi Presentasi Finalis</b></label><textarea rows="2" placeholder="Masukan deskripsi presentasi finalis" id="des_presentasi" required>${ssrInterpolate(unref(form).des_presentasi)}</textarea></div><div class="c-mb10"><label for="whatsApp" class="c-mb5-black"><b>WhatsApp</b></label><input type="text" class="form-control"${ssrRenderAttr("value", unref(form).whatsApp)} placeholder="Masukan no whatsapp" id="whatsApp"></div><div class="c-mb10"><label for="instagram" class="c-mb5-black"><b>Instagram</b></label><input type="text" class="form-control"${ssrRenderAttr("value", unref(form).instagram)} placeholder="Masukan username instagram" id="instagram"></div><div class="c-mb10"><label for="email" class="c-mb5-black"><b>Email</b></label><input type="text" class="form-control"${ssrRenderAttr("value", unref(form).email)} placeholder="Masukan email yang dapat dihubungi" id="email"></div><div class="c-mb10"><label for="youtube" class="c-mb5-black"><b>Youtube</b></label><input type="text" class="form-control"${ssrRenderAttr("value", unref(form).youtube)} placeholder="Masukan link youtube" id="youtube"></div><div class="c-mb10"><label for="logo1" class="c-mb5-black"><b>Logo 1</b></label><div class="m-2 p-2"><img${ssrRenderAttr("src", __props.logo1)} alt="Product Image" class="img-fluid c-maxw400new"></div><input class="form-control" type="file" id="logo1"><p class="keterangan-foto f-italic">Max file size: 2MB (180 x 55 px)</p><p class="keterangan-foto f-italic">Format: .jpg, .png, .jpeg</p></div><br><div class="c-mb10"><label for="logo2" class="c-mb5-black"><b>Logo 2 (background)</b></label><div class="m-2 p-2"><img${ssrRenderAttr("src", __props.logo2)} alt="Product Image" class="img-fluid c-maxw400new"></div><input class="form-control" type="file" id="logo2"><p class="keterangan-foto f-italic">Max file size: 2MB (1200 x 800 px)</p><p class="keterangan-foto f-italic">Format: .jpg, .png, .jpeg</p></div><br><div class="c-mb10"><label for="logo3" class="c-mb5-black"><b>Logo 3</b></label><div class="m-2 p-2"><img${ssrRenderAttr("src", __props.logo3)} alt="Product Image" class="img-fluid c-maxw400new"></div><input class="form-control" type="file" id="logo3"><p class="keterangan-foto f-italic">Max file size: 2MB (450 x 450 px)</p><p class="keterangan-foto f-italic">Format: .jpg, .png, .jpeg</p></div></div><div class="btn-posisi"><a class="btn btn-danger button-left"${ssrRenderAttr("href", _ctx.route("setting.index"))}>Batal</a><button type="submit" class="btn btn-primary button-right">Update</button></div></div></form></div></div></div></div>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Pages/Roles/Admin/Setting/Editsetting.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
