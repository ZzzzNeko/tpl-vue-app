/**
 * 扩展 vue 功能时建议在对应文件添加扩展声明
 * declare module "vue/types/vue" {
 *  interface Vue {
 *    [extension: string]: Function
 *  }
 * }
 */

import { VueConstructor, PluginObject } from "vue";

function loadPlugins(Vue: VueConstructor) {
  const plugins: PluginObject<any>[] = [];
  plugins.forEach(plugin => {
    Vue.use(plugin);
  });
}

export default loadPlugins;
