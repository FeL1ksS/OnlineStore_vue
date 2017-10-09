<template>
  <div id="app">
    <left-nav></left-nav>
    {{msg}}
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
    leftNav
  },
}
</script>

<style>
  @import '../node_modules/normalize.css';
  @import '../node_modules/bootstrap/dist/css/bootstrap.css';
</style>
