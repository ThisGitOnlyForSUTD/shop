<template>
  <section class="home-intro container">
    <img src="@/assets/img/parental.png" alt="stiker" class="home-intro__stiker">
    <img src="@/assets/img/jacket.jpg" alt="first-photo" class="home-intro__img_first">
    <div class="home-intro__logo">
      <svg width="406" height="528" viewBox="0 0 106 128" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M1.5 1H11V59L32.5 80.5V127.5H22.5V80.5L1.5 59V1Z" fill="#FFC450"/>
        <path d="M11.5 1H1.5V59L22.5 80.5V127.5H32.5V80.5L11 59V1" stroke="black"/>
        <path d="M32.5 1V68.5L22.5 58V1H32.5Z" fill="#FFC450" stroke="black"/>
        <path d="M1 127.5V71.5L11 80.2111V127.5H1Z" fill="#FFC450" stroke="black"/>
        <path d="M37.5 1H47V59L68.5 80.5V127.5H58.5V80.5L37.5 59V1Z" fill="#FFC450"/>
        <path d="M47.5 1H37.5V59L58.5 80.5V127.5H68.5V80.5L47 59V1" stroke="black"/>
        <path d="M68.5 1V68.5L58.5 58V1H68.5Z" fill="#FFC450" stroke="black"/>
        <path d="M37 127.5V71.5L47 80.2111V127.5H37Z" fill="#FFC450" stroke="black"/>
        <rect x="71.5" y="118.5" width="9" height="9" fill="#FFC450" stroke="black"/>
        <rect x="83.5" y="1.5" width="9" height="126" fill="#FFC450" stroke="black"/>
        <rect x="96.5" y="1.5" width="9" height="126" fill="#FFC450" stroke="black"/>
      </svg>
    </div>
    <img src="@/assets/img/tolik.jpg" alt="first-photo" class="home-intro__img_second">
</section>
</template>

<script>
export default {
  name: 'HomeView',
  components: {

  }
}
</script>

<style lang="scss" scoped>
  .home-intro {
    display: flex;
    justify-content: center;
    position: relative;
    height: 100vh;
    padding-top: 200px;

    &__img {

      &_first {
        position: absolute;
        z-index: 1;
        left: 6rem;
        top: 9rem;
        transform: rotate(18deg);
        box-shadow: 10px 5px 5px rgba(0, 0, 0, 0.664);
        max-height: 760px;
      }

      &_second {
        position: absolute;
        top: 12rem;
        right: 8rem;
        z-index: 2;
        bottom: -45rem;
        transform: rotate(-18deg);
        box-shadow: 10px 5px 5px rgba(0, 0, 0, 0.609);
        max-height: 760px;
      }
    }

    &__stiker {
    width: 150px;
    position: absolute;
    z-index: 30;
    left: 6rem;
    top: 7rem;
    transform: rotate(-18deg);
    }

    &__logo {
    position: absolute;
    z-index: 2;
    top: 6rem;
    }

    &__subtext {
    margin: 700px 0 0 15px;
    max-width: 700px;
    font-size: 23px;
    color: #FFF;
    }

    @media (max-width: 1069px) {
    &__img {
      &_first, &_second {
        display: none;
      }
    }
    &__stiker {
      left: 2%;
    }
  }
}
</style>
