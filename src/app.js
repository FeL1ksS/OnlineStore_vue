import Vue from 'vue'
import VueRouter from 'vue-router'
import { routes } from './system/routes'

import App from './App.vue'
import VueAwesomeSwiper from 'vue-awesome-swiper'

import 'normalize.css'
// import 'bootstrap/dist/css/bootstrap.css'
import './assets/style/bootstrap-grid+margins.css'
import 'material-design-icons/iconfont/material-icons.css'
import './assets/style/app.css';

import 'swiper/dist/css/swiper.css'

Vue.use(VueRouter)
Vue.use(VueAwesomeSwiper)

export const router = new VueRouter({
  mode: 'history',
  routes
})

new Vue({
  el: '#app',
  router,
  render: h => h(App)
})
