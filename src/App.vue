<template>
  <div id="app">
    <component :is="layout"/>
  </div>
</template>

<script>
export default {
  computed: {
    layout () {
      return this.$route.meta.layout || 'main-layout'
    }
  }
}
</script>
