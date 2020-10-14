import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import ElementUI from 'element-ui'
Vue.config.productionTip = false
Vue.use(ElementUI)
router.beforeEach((to, from, next) => {
  console.log(from)
  const { title = '' } = to.meta
  document.title = title
  next()
})
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
