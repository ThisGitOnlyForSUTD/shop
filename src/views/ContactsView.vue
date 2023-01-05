<template>
  <div class="contacts container">
    <ul class="contacts__list">
      <li class="contacts__item" v-for="item in contactsItems" :key="item.id + item.name">
        <h4 class="contacts__name">{{ item.name }}</h4>
        <a :href="item.link" class="contacts__link">{{ item.text }}</a>
        <span class="contacts__text"></span>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  data () {
    return {
      contactsItems: [
        {id: 1, name: 'Телефон', link: 'https://disk.yandex.ru/d/Rvf5mW1R-DnmuA', text:'898717927'},
      ]
    }
  }
}
</script>

<style lang="scss" scoped>
.contacts {
  margin-top: 220px;
}
</style>