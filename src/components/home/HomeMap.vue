<template>
  <section class="home-map container">
    <h3 class="home-map__text">Наш офис</h3>
    <yandex-map
        :coords="[60.02109916321851,30.368113582050324]"
        zoom="14"
        class="home-map__map"
        map-type="map"
      >
      <ymap-marker
      :coords="[60.02109916321851,30.368113582050324]"
      marker-type="placemark"
      />
      </yandex-map>
  </section>
</template>

<script>
import { yandexMap, ymapMarker } from "vue-yandex-maps";
export default {
  components: { yandexMap, ymapMarker }
}
</script>

<style lang="scss" scoped>
.home-map {
  margin-top: 220px;
  align-items: center;

  &__map {
    opacity: 0.8;
    max-width: 100%;
    height: 600px;
    // filter: invert(100%);
    // -ms-filter: invert(100%);
    // -webkit-filter: invert(100%); 
    // -moz-filter: invert(100%);
    // -o-filter: invert(100%);
  }

  &__text {
    width: 100%;
    text-align: center;
    text-transform: uppercase;
    margin-bottom: 40px;
    color: #fff;
    font-size: 30px;
    color: #FFC450;
  }
}
</style>
