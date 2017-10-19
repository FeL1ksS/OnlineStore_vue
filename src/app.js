import Vue from 'vue'
import VueRouter from 'vue-router'
import App from './App.vue'
import { routes } from './system/routes'

import 'normalize.css'
// import 'bootstrap/dist/css/bootstrap.css'
import './assets/style/bootstrap-grid+margins.css'
import 'material-design-icons/iconfont/material-icons.css'
import './assets/style/app.css';

Vue.use(VueRouter)

export const router = new VueRouter({
  mode: 'history',
  routes
})

new Vue({
  el: '#app',
  router,
  render: h => h(App)
})
