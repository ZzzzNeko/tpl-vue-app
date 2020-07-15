import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    name: 'index',
    path: '/',
    alias: '/index',
    component: () => import(/* webpackChunkName: 'index' */ `@/pages/index.vue`)
  },
  {
    name: 'error',
    path: '/error',
    component: () => import(/* webpackChunkName: 'error' */ `@/pages/error.vue`)
  },
  {
    path: '*',
    redirect: '/error'
  }
]

const router = new VueRouter({ routes })

// router.beforeEach((to, from, next) => {
// })

export default router
