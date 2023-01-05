<template>
<div class="">
  <app-nav/>
  <router-view/>
  <app-footer/>
</div>
</template>

<script>
import AppNav from '@/components/AppNav.vue'
import AppFooter from '@/components/AppFooter.vue'
export default {
  components: { AppNav, AppFooter },
  name: 'MainLayout'
}
</script>

<style lang="scss">

</style>
