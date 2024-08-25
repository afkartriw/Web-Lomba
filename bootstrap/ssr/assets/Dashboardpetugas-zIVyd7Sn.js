import { onMounted, mergeProps, unref, withCtx, createTextVNode, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrRenderList, ssrRenderAttr, ssrInterpolate, ssrRenderComponent } from "vue/server-renderer";
import { Link } from "@inertiajs/vue3";
import ApexCharts from "apexcharts";
const _sfc_main = {
  __name: "Dashboardpetugas",
  __ssrInlineRender: true,
  props: {
    user: Object,
    teamcount: Object,
    userstatus: Object,
    useradminis: Object,
    useradmin: Object,
    allCount: Object,
    unreadCount: Object,
    visitData: Array,
    allParticipants: Object,
    settings: {
      type: Object,
      default: () => ({})
    },
    logo1: String
  },
  setup(__props) {
    const props = __props;
    const renderChart = () => {
      new ApexCharts(document.getElementById("bi-weekly-visit"), {
        chart: {
          type: "bar",
          fontFamily: "inherit",
          height: 240,
          parentHeightOffset: 0,
          toolbar: {
            show: false
          },
          animations: {
            enabled: false
          },
          stacked: true
        },
        plotOptions: {
          bar: {
            columnWidth: "60%"
          }
        },
        dataLabels: {
          enabled: false
        },
        fill: {
          opacity: 1
        },
        series: [
          {
            name: "Jumlah Kunjungan",
            data: props.visitData.map((v) => v.visit_count)
          }
        ],
        tooltip: {
          theme: "dark"
        },
        grid: {
          padding: {
            top: -20,
            right: 0,
            left: -4,
            bottom: -4
          },
          strokeDashArray: 4
        },
        xaxis: {
          labels: {
            padding: 0
          },
          tooltip: {
            enabled: false
          },
          axisBorder: {
            show: false
          },
          categories: props.visitData.map((v) => v.visit_month)
        },
        yaxis: {
          labels: {
            padding: 4
          }
        }
      }).render();
    };
    onMounted(() => {
      renderChart();
    });
    if (!localStorage.getItem("reloaded")) {
      setTimeout(() => {
        localStorage.setItem("reloaded", "true");
        location.reload();
      }, 1e3);
    } else {
      localStorage.removeItem("reloaded");
    }
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "wrapper" }, _attrs))}><div class="sidebar-wrapper" data-simplebar="true"><div class="sidebar-header"><!--[-->`);
      ssrRenderList(__props.settings, (setting) => {
        _push(`<div><a href="/"><img id="logo-img"${ssrRenderAttr("src", setting.logo1 ? `/storage/${setting.logo1}` : "/bootstrap/images/logo1default.jpg")} class="lg2"></a></div>`);
      });
      _push(`<!--]--><div class="toggle-icon ms-auto"><i class="fadeIn animated bx bx-menu"></i></div></div><ul class="metismenu" id="menu"><li><a${ssrRenderAttr("href", _ctx.route("eventadmin"))}><div class="parent-icon"><i class="bx bx-home-circle"></i></div><div class="menu-title">Dashboard</div></a></li><li><a href="/partisipanpetugas"><div class="parent-icon"><i class="fadeIn animated bx bx-user-circle c-font25"></i></div><div class="menu-title">Partisipan</div></a></li><li><a href="/timpetugas"><div class="parent-icon"><i class="fadeIn animated lni lni-users"></i></div><div class="menu-title">Tim</div></a></li><li><a href="/pesanpetugas"><div class="parent-icon"><i class="fadeIn animated bx bx-comment-detail"></i></div><div class="menu-title">Pesan <span class="alert-count">${ssrInterpolate(__props.unreadCount)}</span></div></a></li><li><a href="/rangkingpetugas"><div class="parent-icon"><i class="fadeIn animated bx bx-trophy"></i></div><div class="menu-title">Rangking</div></a></li><li><a><div class="parent-icon"><i class="fadeIn animated bx bx-log-out"></i></div><div class="menu-title">`);
      _push(ssrRenderComponent(unref(Link), {
        class: "menu-title",
        href: _ctx.route("logout"),
        method: "post",
        as: "button"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(` Keluar `);
          } else {
            return [
              createTextVNode(" Keluar ")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div></a></li></ul></div><header><div class="topbar d-flex align-items-center"><nav class="navbar navbar-expand"><div class="mobile-toggle-menu"><i class="bx bx-menu"></i></div><div class="search-bar flex-grow-1"></div><div class="top-menu ms-auto"><ul class="navbar-nav align-items-center"><div class="user-info ps-3"><p class="user-name mb-0">${ssrInterpolate(_ctx.$page.props.userData.name)}</p><p class="user-role">${ssrInterpolate(_ctx.$page.props.userData.username)}</p></div><div class="parent-icon posisi-icon"><i class="bx bx-user-circle c-font48"></i></div><li class="nav-item dropdown dropdown-large"><div class="dropdown-menu dropdown-menu-end"><div class="header-notifications-list"></div></div></li><li class="nav-item dropdown dropdown-large"><div class="dropdown-menu dropdown-menu-end"><div class="header-message-list"></div></div></li></ul></div></nav></div></header><div class="page-wrapper"><div class="page-content"><div class="row row-cols-1 row-cols-md-2 row-cols-xl-4"><div class="col"><div class="card radius-10 border-start border-0 border-3 border-info"><div class="card-body"><div class="d-flex align-items-center"><div><h6 class="mb-0"><b>${ssrInterpolate(__props.allParticipants)} Partisipan</b></h6><br><p class="mb-0 font-13">${ssrInterpolate(__props.userstatus)} Verified</p></div></div></div></div></div><div class="col"><div class="card radius-10 border-start border-0 border-3 border-success"><div class="card-body"><div class="d-flex align-items-center"><div><h6 class="mb-0"><b>${ssrInterpolate(__props.teamcount)} Tim</b></h6><br><p class="mb-0 font-13">Semua Lomba</p></div></div></div></div></div><div class="col"><div class="card radius-10 border-start border-0 border-3 border-danger"><div class="card-body"><div class="d-flex align-items-center"><div><h6 class="mb-0"><b>${ssrInterpolate(__props.allCount)} Pesan</b></h6><br><p class="mb-0 font-13">${ssrInterpolate(__props.unreadCount)} Pesan Belum di Buka</p></div></div></div></div></div><div class="col"><div class="card radius-10 border-start border-0 border-3 border-warning"><div class="card-body"><div class="d-flex align-items-center"><div><h6 class="mb-0 cfs-15"><b>${ssrInterpolate(__props.useradminis)} Akun Administrator</b></h6><br><p class="mb-0 font-13">${ssrInterpolate(__props.useradmin)} Akun Admin</p></div></div></div></div></div></div><div class="card"><div class="card-body"><h3 class="card-title btn-crud"><b>Jumlah Pengunjung Setiap Bulan</b></h3><br><br><div id="bi-weekly-visit" class="chart-lg"></div></div></div></div></div></div>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Pages/Roles/EventAdmin/Dashboardpetugas.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
