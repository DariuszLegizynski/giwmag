<template>
  <header class="header">
    <h1>Wi-<span>-Mag</span></h1>
    <nav class="header__buttons" :class="{ active: isBurgerActive }">
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
  position: fixed;
  top: 0;
  width: 100vw;
  height: auto;
  background-color: transparent;
  z-index: 10;
  display: flex;
  justify-content: space-between;

  &__buttons {
    display: none;
    flex-direction: column;
    align-items: center;
    position: fixed;
    top: 2rem;
  }
}
.logo {
  width: 7rem;
}
.btn {
  background-color: transparent;
  color: $color-white;
  font-size: $font-size-12;
}
.active {
  display: flex;
  flex-direction: column;
  visibility: visible;
  width: 100%;
  height: 100%;
}

@media only screen and (max-width: 640px) {
  nav {
    display: none;
    visibility: hidden;
  }
}
</style>
