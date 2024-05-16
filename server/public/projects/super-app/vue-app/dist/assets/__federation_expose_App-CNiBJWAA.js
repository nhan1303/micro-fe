import { importShared } from './__federation_fn_import-CmJkBD4V.js';

const _export_sfc = (sfc, props) => {
  const target = sfc.__vccOpts || sfc;
  for (const [key, val] of props) {
    target[key] = val;
  }
  return target;
};

const _sfc_main = {};
const {openBlock:_openBlock,createElementBlock:_createElementBlock,pushScopeId:_pushScopeId,popScopeId:_popScopeId} = await importShared('vue');
const _hoisted_1 = { class: "hello" };

function _sfc_render(_ctx, _cache) {
  return (_openBlock(), _createElementBlock("p", _hoisted_1, "Hello from Vue"))
}
const App = /*#__PURE__*/_export_sfc(_sfc_main, [['render',_sfc_render],['__scopeId',"data-v-a787fe1e"]]);

const {createApp} = await importShared('vue');
const entry = {
  mount(el = "#app") {
    const app = createApp(App);
    app.mount(el);
    console.count("Vue mount");
    return () => {
      app.unmount();
    };
  }
};

export { entry as default };
