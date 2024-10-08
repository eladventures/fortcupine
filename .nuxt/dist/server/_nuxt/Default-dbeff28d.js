import { ssrRenderAttr, ssrRenderSlot } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "../server.mjs";
import "#internal/nitro";
import "ofetch";
import "hookable";
import "unctx";
import "unhead";
import "@unhead/shared";
import "vue-router";
import "h3";
import "ufo";
import "destr";
import "defu";
import "klona";
import "devalue";
const _imports_0 = "" + __buildAssetsURL("fortcupine-logo-small.79299b2b.png");
const _sfc_main = {
  setup() {
    return {};
  }
};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<!--[--><div class="fixed top-0 z-50 w-full bg-white"><div class="container flex items-center justify-between h-16 max-w-6xl mx-auto"><a rel="noopener noreferrer" href="#" aria-label="Back to homepage" class="flex items-center p-2"><img${ssrRenderAttr("src", _imports_0)} alt="Fortcupine Logo" class="object-contain w-auto h-12"></a><ul class="flex items-center space-x-3 lg:flex"><li class="flex"><a rel="noopener noreferrer" href="#health-apps" class="flex items-center px-4 -mb-1">Health Apps</a></li><li class="flex"><a rel="noopener noreferrer" href="#true-privacy" class="flex items-center px-4 -mb-1">True Privacy</a></li><li class="flex"><a rel="noopener noreferrer" href="#fort-1" class="flex items-center px-4 -mb-1">Fort 1</a></li><li class="flex"><a rel="noopener noreferrer" href="#why-fortcupine" class="flex items-center px-4 -mb-1">Why Fortcupine</a></li><li class="flex"><a rel="noopener noreferrer" href="#local-first" class="flex items-center px-4 -mb-1">What is Local-First</a></li><li class="flex"><a rel="noopener noreferrer" href="#our-story" class="flex items-center px-4 -mb-1">Our Story</a></li></ul></div></div><div class="pt-16">`);
  ssrRenderSlot(_ctx.$slots, "default", {}, null, _push, _parent);
  _push(`</div><!--]-->`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("layouts/Default.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const Default = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  Default as default
};
//# sourceMappingURL=Default-dbeff28d.js.map
