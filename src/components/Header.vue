<template>
  <header class="header" :class="{ header__active: isBurgerActive }">
    <h1 class="logo">Wi-<span>-Mag</span></h1>
    <nav class="header__buttons" :class="{ buttons__active: isBurgerActive }">
      <div class="btn" />
      <button class="btn">OFERTA</button>
      <button class="btn">O FIRMIE</button>
      <button class="btn btn--highlight">KONTAKT</button>
    </nav>
    <Burger @click.prevent="toggle" :isBurgerActive="isBurgerActive" />
  </header>
</template>

<script>
import Burger from '@/components/Burger.vue'
export default {
  data() {
    return {
      isBurgerActive: false
    }
  },
  components: {
    Burger
  },
  methods: {
    toggle() {
      this.isBurgerActive = !this.isBurgerActive
    }
  }
}
</script>

<style lang="scss" scoped>
@import '@/styles/scss/_general.scss';
.header {
  position: sticky;
  top: 0;
  width: 100vw;
  height: auto;
  background-color: transparent;
  z-index: 10;
  display: flex;
  justify-content: space-between;
  padding: 0.4rem;
  -webkit-backdrop-filter: blur(3px);
  backdrop-filter: blur(3px);

  &__active {
    padding: 0;
  }

  &__buttons {
    display: none;
    flex-direction: column;
    align-items: center;
    position: fixed;
    top: 2rem;
  }
}
.logo {
  & > span {
    color: $color-primary;
  }
}
.btn {
  background-color: transparent;
  color: $color-white;
  margin: 0.6rem 0;
}
.buttons__active {
  display: block;
  visibility: visible;
  top: 0;
  width: 100vw;
  height: 100vh;
  background: $gradient-circular;
}

@media only screen and (max-width: 640px) {
  nav {
    display: none;
    visibility: hidden;
  }
}
</style>
