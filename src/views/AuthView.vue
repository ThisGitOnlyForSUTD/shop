<template>
  <div class="auth container">
    <div class="auth__form">
      <h2 class="auth__name">{{ message }}</h2>
      <label class="auth__lable" for="username">Username</label>
      <input id="username" class="auth__input" v-model="username"/>
      <label class="auth__lable"  for="password">Password</label>
      <input type="password" id="password" class="auth__input" v-model="password"/>
      <button class="auth__btn" v-on:click="login">{{ message.toUpperCase() }}</button>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      message: 'Login',
      username: '',
      password: ''
    };
  },
  methods: {
    login: function() {
			this.message = 'Welcome, ' + this.username + '.';
    }
  }
}
</script>

<style lang="scss" scoped>
.auth {
  margin-top: 300px;
  color: #000;

  &__form {
    display: grid;
    place-items: start;
    background: white;
    width: 100%;
    max-width: 40%;
    border-radius: 10px;
    padding: 2em;
    grid-gap: .5em;
    margin: 0 25% 0 25%;
  }

  &__name {
    margin: 1rem auto 2rem auto;
  }

  &__input {
    height: 1.2rem;
    border-width: 0 0 2px;
    font-size: inherit;
    width: 100%;
    opacity: 0.6;

    &:focus {
      border-color: #2d9cdb;
      outline: none;
      opacity: 1;
    }
  }

  &__lable {
    opacity: 0.6;
  }

  &__btn {
    background: none;
    width: 100%;
    margin-top: 1rem;
    border: none;
    border-radius: 5px;
    font: inherit;
    padding: 0.75em 2em;
    color: white;
    background: rgb(79,192,141);
    background: 
      linear-gradient(90deg, rgb(43, 43, 43) 0%, rgb(198, 237, 7) 100%);
    font-weight: bold;
    transition: all .2s ease-in-out;

    &:hover {
      cursor: pointer;
      box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
    }

    &:focus {
      outline: none;
      border-width: 2px;
    }
  }
}
</style>