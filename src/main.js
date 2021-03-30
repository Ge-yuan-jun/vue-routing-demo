import Vue from 'vue'
import Router from 'vue-router'
import App from './App.vue'
import routes from './router'

Vue.use(Router)

Vue.config.productionTip = false

const router = new Router({
  routes
})

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
