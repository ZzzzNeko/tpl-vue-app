import Vue from 'vue'
import App from '@/App.vue'
import plugins from "@/plugins";
import directives from '@/directives'
import router from '@/router'
import store from '@/store'
import '@/style/reset.scss'
import '@/style/common.scss'

Vue.use(plugins);
Vue.use(directives)

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app')
