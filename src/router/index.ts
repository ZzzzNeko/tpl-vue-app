import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  { path: '/', name: 'index', component: () => import(/* webpackChunkName: 'index' */ `@/pages/index.vue`) },
  { path: '*', name: 'error', component: () => import(/* webpackChunkName: 'error' */ `@/pages/error.vue`) }
]

const router = new VueRouter({ routes })

// router.beforeEach((to, from, next) => {
// })

export default router
