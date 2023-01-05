<template>
<div class="home">
  <home-intro/>
  <home-gallety/>
  <home-map/>
  <home-about/>
</div>
</template>

<script>
import HomeIntro from '@/components/home/HomeIntro.vue'
import HomeGallety from '@/components/home/HomeGallety.vue'
import HomeMap from '@/components/home/HomeMap.vue'
import HomeAbout from '@/components/home/homeAbout.vue'
export default {
  components: { HomeIntro, HomeGallety, HomeMap, HomeAbout }

}
</script>

<style>

</style>
