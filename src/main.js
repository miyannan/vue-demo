import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css';
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
