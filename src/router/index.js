import Vue from 'vue'
import VueRouter from 'vue-router'
import helloWorld from '@/modules/helloWorld/router.js'
const routerPush = VueRouter.prototype.push
VueRouter.prototype.push = function push(location) {
  return routerPush.call(this, location).catch(error => error)
}
Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    redirect: '/helloWorld'
  },
  ...helloWorld
  // {
  //   path: '*',
  //   name: '404',
  //   component: () => import('../components/404.vue'),
  //   meta: {
  //     title: '404'
  //   }
  // }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
