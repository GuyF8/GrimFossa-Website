<template lang="pug">
  b-navbar.p-3(centered :class="[$route.path === '/' ? 'home-navbar' : 'other-navbar']")
    template(slot="brand")
      b-navbar-item.logo2.pb-0(tag="router-link" :to="{ name: 'home' }")
    template(slot="end")
      b-navbar-item(
        tag="router-link"
        :to="{ name: 'home' }"
        ) HOME
      b-navbar-item href="#"
        Listen
       
</template>

<script>
export default {
    name: 'Home',
};
</script>

<style scoped>

</style>
