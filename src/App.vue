<template>
  <div id="app">
    <left-nav></left-nav>
    <router-view></router-view>
  </div>
</template>

<script>
import leftNav from './components/left-nav.vue'



export default {
  name: 'app',
  data () {
    return {
      msg: 'Welcome to Vue.js App'
    }
  },
  components: {
    leftNav,
  },
}
</script>

<style>
  /* html,body{
    height: 100%;
  }
  @import './assets/style/app.css'; */
  /* @import '../node_modules/bootstrap/dist/css/bootstrap.css'; */
  
</style>
