import { computed, mergeProps, unref, withCtx, createTextVNode, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrRenderComponent } from "vue/server-renderer";
import { P as PrimaryButton } from "./PrimaryButton-CZbnR4E4.js";
import { useForm, Head, Link } from "@inertiajs/vue3";
import { _ as _export_sfc } from "./_plugin-vue_export-helper-1tPrXgE0.js";
const _sfc_main = {
  __name: "VerifyEmail",
  __ssrInlineRender: true,
  props: {
    status: {
      type: String
    }
  },
  setup(__props) {
    const props = __props;
    const form = useForm({});
    const verificationLinkSent = computed(() => props.status === "verification-link-sent");
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "container mt-5" }, _attrs))} data-v-ff7530be>`);
      _push(ssrRenderComponent(unref(Head), { title: "Email Verification" }, null, _parent));
      _push(`<div class="row justify-content-center" data-v-ff7530be><div class="col-md-8" data-v-ff7530be><div class="card" data-v-ff7530be><div class="card-body" data-v-ff7530be><h2 class="mb-4 card-title" data-v-ff7530be>Email Verification</h2><div class="alert alert-info" data-v-ff7530be> Thanks for signing up! Before getting started, could you verify your email address by clicking on the link we just emailed to you? If you didn&#39;t receive the email, we will gladly send you another. </div>`);
      if (verificationLinkSent.value) {
        _push(`<div class="alert alert-success" data-v-ff7530be> A new verification link has been sent to the email address you provided during registration. </div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`<form data-v-ff7530be><div class="mt-4 d-flex justify-content-between align-items-center" data-v-ff7530be>`);
      _push(ssrRenderComponent(PrimaryButton, {
        class: [{ "opacity-25": unref(form).processing }, "btn btn-primary"],
        disabled: unref(form).processing
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(` Resend Verification Email `);
          } else {
            return [
              createTextVNode(" Resend Verification Email ")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(unref(Link), {
        href: _ctx.route("logout"),
        method: "post",
        as: "button",
        class: "btn btn-link text-decoration-none text-secondary"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`Log Out`);
          } else {
            return [
              createTextVNode("Log Out")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div></form></div></div></div></div></div>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Pages/Auth/VerifyEmail.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const VerifyEmail = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-ff7530be"]]);
export {
  VerifyEmail as default
};
