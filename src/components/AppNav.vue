<template>
  <nav class="nav">
    <div class="nav__menu">
      <button class="nav__btn" v-show="showList == false" @click="showList = !showList">
        <svg width="34" height="34" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M7 7H19" stroke="#FFC450" stroke-width="2" stroke-linecap="round"/>
          <path d="M1 12H19" stroke="#FFC450" stroke-width="2" stroke-linecap="round"/>
          <path d="M5 17H19" stroke="#FFC450" stroke-width="2" stroke-linecap="round"/>
        </svg>
      </button>
      <transition name="show-list">
        <div class="nav__wrapper" v-if="showList" @click="showList = !showList">
          <ul class="nav__list">
            <router-link
            v-for="link in links"
            :key="link.id + 1"
             class="nav__link"
             tag="li"
             active-class="active"
             :to="link.url"
             exact
             >
              {{ link.text }}
            </router-link>
          </ul>
        </div>
      </transition>
    </div>
      <form class="nav-search">
        <transition name="show-search">
          <input type="text" class="nav-search__input" placeholder="Давайте поищем" v-if="showSearch">
        </transition>
        <button class="nav-search__ico" @click="showSearch = !showSearch">
            <svg width="34" height="34" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <circle cx="11" cy="11" r="7" stroke="#FFC450" stroke-width="2"/>
              <path d="M20 20L17 17" stroke="#FFC450" stroke-width="2" stroke-linecap="round"/>
            </svg>
        </button>
      </form>
  </nav>
</template>

<script>
export default {
  name: 'AppNav',

  data () {
    return {
      showList: false,
      showSearch: false,
      links: [
        { id: 'home', text: 'Главная', url: '/' },
        { id: 'about', text: 'О нас', url: '/about' },
        { id: 'products', text: 'Каталог', url: '/products' }
      ]
    }
  }
}
</script>

<style lang="scss" scoped>
.nav {
  display: flex;
  justify-content: space-between;
  padding: 25px 5rem 20px 5rem;
  position: fixed;
  z-index: 50;
  top: 0;
  width: 100%;

  &__wrapper {
    width: 100%;
    height: 100vh;
    position: absolute;
    top: -2rem;
    left: 0;
    z-index: 2;
  }

  &__menu {
    width: 100%;
  }

  &__list {
    position: absolute;
    z-index: 70;
    top: 2rem;
    left: 0;
    height: 100vh;
    background: rgba(27, 27, 27, 0.573);
    width: 60%;
    padding-top: 150px;
  }

  &__link {
    margin: 0 0 25px 40px;
    cursor: pointer;
    text-transform: uppercase;
    font-size: 25px;
  }

  &-search {
    display: flex;
    align-content: center;
    justify-content: space-between;

    &__input {
    border: none;
    padding: 0 2px 0 20px;
    color: #fff;
    font-size: 20px;
    background: rgba(27, 27, 27, 0.573);
    border-radius: 3rem;
    }

    &__ico {
      margin: 6px 4px 1px 4px;
    }
  }

  @media (max-width: 620px) {
    background: #000;
  }
}

.show-list-enter-active {
     transition: all .3s ease;
}
.show-list-leave-active {
  transition: all .8s;
}
.show-list-enter, .show-list-leave-to {
  transform: translateX(-150px);
  opacity: 0;
}

.show-search-enter-active {
  transition: all .3s ease;
}

.show-search-leave-active {
  transition: all .8s;
}

.show-search-enter, .show-search-leave-to {
  transform: translateY(-150px);
  opacity: 0;
}
</style>
