import { mergeProps, unref, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrRenderList, ssrRenderAttr, ssrRenderStyle, ssrInterpolate } from "vue/server-renderer";
import { usePage, useForm } from "@inertiajs/vue3";
const _sfc_main = {
  __name: "Editsponsor",
  __ssrInlineRender: true,
  props: ["name", "username", "logo", "settings", "logo1"],
  setup(__props) {
    const sponsor = usePage().props.sponsors;
    const form = useForm({
      name: sponsor.data.name,
      logo: sponsor.data.logo,
      link_file: sponsor.data.link_file
    });
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "wrapper" }, _attrs))}><header><div class="c-topbar"><nav class="navbar navbar-expand"><div class="navbar-tambah"><!--[-->`);
      ssrRenderList(__props.settings, (setting) => {
        _push(`<div class="navbar-left"><a href="/"><img${ssrRenderAttr("src", setting.logo1 ? `/storage/${setting.logo1}` : "/bootstrap/images/logo1default.jpg")} alt="Logo" style="${ssrRenderStyle({ "width": "135px", "margin-left": "-15px" })}"></a></div>`);
      });
      _push(`<!--]--></div><div class="search-bar flex-grow-1"></div><div class="top-menu ms-auto"><ul class="navbar-nav align-items-center"><div class="user-info ps-3"><p class="user-name mb-0">${ssrInterpolate(_ctx.$page.props.userData.name)}</p><p class="user-role">${ssrInterpolate(_ctx.$page.props.userData.username)}</p></div><div class="parent-icon posisi-icon"><i class="bx bx-user-circle c-font48"></i></div></ul></div></nav></div></header><div class="page-wrapper-new"><div class="page-content"><div class="card"><div class="card-body"><h4 class="mb-0">EDIT SPONSOR</h4><hr><form><div class="c-mb10"><label for="name" class="c-mb5-black"><b>Nama Sponsor</b></label><input type="text" class="form-control" placeholder="Masukan nama sponsor"${ssrRenderAttr("value", unref(form).name)} id="name"></div><div><label for="link_file" class="c-mb5-black"><b>Link</b></label><div class="col-12"><textarea class="c-mb10" rows="2" id="descriptionaddl" placeholder="Masukan link sponsor">${ssrInterpolate(unref(form).link_file)}</textarea></div></div><div><label for="logo" class="form-label warna-hitam"><b>Logo</b></label><div class="m-2 p-2"><img${ssrRenderAttr("src", __props.logo)} alt="Product Image" class="img-fluid c-maxw400"></div><input class="form-control" type="file" id="logo"><p class="keterangan-foto f-italic">Max file size: 2MB (200 x 200 px)</p><p class="keterangan-foto f-italic">Format: .jpg, .png, .jpeg</p></div><div class="btn-posisi"><a class="btn btn-danger button-left"${ssrRenderAttr("href", _ctx.route("sponsor.index"))}>Batal</a><button type="submit" class="btn btn-primary button-right">Update</button></div></form></div></div></div></div></div>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Pages/Roles/Admin/Sponsor/Editsponsor.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
