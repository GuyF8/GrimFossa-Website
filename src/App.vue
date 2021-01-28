<template lang="pug">
  #app
    Navbar
    Home
</template>

<script>
import Navbar from './components/Navbar.vue'
import Home from './views/Home.vue'

export default {
  name: 'App',
  components: {
    Home,
    Navbar,
  }
}
</script>


<style lang="scss">
  @import '~@/assets/scss/scss.scss';
</style>

