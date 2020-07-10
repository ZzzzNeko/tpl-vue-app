import { VueConstructor, PluginObject } from "vue";

function loadPlugins(Vue: VueConstructor) {
  const plugins: PluginObject<any>[] = [];
  plugins.forEach(plugin => {
    Vue.use(plugin);
  });
}

export default loadPlugins;
