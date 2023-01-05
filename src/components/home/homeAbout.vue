<template>
  <section class="home-about container">
    <img src="@/assets/img/t-logo.jpg" alt="" class="home-about__photo">
    <ul class="home-about__links">
      <li class="home-about__item">
        <a href="#" class="home-about__link" v-for="item in 4" :key="item+1">
          Доставка
          <svg width="15" height="15" viewBox="0 0 6 6" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M1.35355 0.646447C1.15829 0.451184 0.841709 0.451184 0.646447 0.646447C0.451184 0.841709 0.451184 1.15829 0.646447 1.35355L1.35355 0.646447ZM5 5.5C5.27614 5.5 5.5 5.27614 5.5 5L5.5 0.5C5.5 0.223858 5.27614 0 5 0C4.72386 0 4.5 0.223858 4.5 0.5L4.5 4.5L0.5 4.5C0.223858 4.5 0 4.72386 0 5C0 5.27614 0.223858 5.5 0.5 5.5L5 5.5ZM0.646447 1.35355L4.64645 5.35355L5.35355 4.64645L1.35355 0.646447L0.646447 1.35355Z" fill="white"/>
          </svg>
        </a>
      </li>
    </ul>
  </section>
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>
.home-about {
  margin-top: 220px;
  display: flex;

  &__photo {
    max-width: 70%;
    max-height: 700px;
  }

  &__links {
    margin: 120px;
  }

  

  &__link {
    color: #fff;
    font-size: 30px;
    border-bottom: solid 1px #fff;
    display: block;
    padding: 30px 20px;
    width: 100%;
    max-width: 600px;
    display: flex;
    justify-content: space-between;
    align-items: center;

    &:first-child {
      border-top: solid 1px #fff;
    }
  }

  @media (max-width: 1277px) {
    flex-flow: column wrap;
    align-content: center;
    margin-bottom: 80px;


    &__photo {
      max-width: 100%;
    }

    &__links {
    margin: 120px 0 0 0;
  }
  }
}
</style>
