import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import './assets/scss/styles.scss'
import './assets/scss/reset.scss'
import './assets/scss/fonts.scss'
import './assets/scss/variables.scss'
import MainLayout from './layouts/MainLayout.vue'
import AuthLayout from './layouts/AuthLayout.vue'

Vue.component('main-layout', MainLayout)
Vue.component('auth-layout', AuthLayout)
Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
