<template>
  <header
    class="header fade-in-bg"
    :class="{
      header__active: isBurgerActive,
      header__scroll: isContrastActive
    }"
  >
    <h1 class="logo">Wi-<span>-Mag</span></h1>
    <nav
      class="header__sideBar"
      :class="{
        sideBar__scroll: isContrastActive,
        slideIn: isBurgerActive,
        slideOut: !isBurgerActive
      }"
    >
      <div class="btn sr-only">MENU</div>
      <button class="btn" @click.stop="this.observe">OFERTA</button>
      <button class="btn">O FIRMIE</button>
      <button class="btn btn--highlight">KONTAKT</button>
    </nav>
    <Burger
      @click.prevent="toggle"
      :isBurgerActive="isBurgerActive"
      :isContrastActive="isContrastActive"
    />
  </header>
</template>

<script>
import Burger from '@/components/Burger.vue'

export default {
  data() {
    return {
      isBurgerActive: false,
      isContrastActive: true,
      observer: null
    }
  },
  components: {
    Burger
  },
  mounted() {
    this.observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) {
          console.log('intersect')
          this.isContrastActive = true
        } else {
          this.isContrastActive = false
        }
      },
      { rootMargin: '-10% 0px 0px 0px' }
    )

    this.observer.observe(document.querySelector('.observer'))
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
    -webkit-backdrop-filter: none;
    backdrop-filter: none;
  }

  &__scroll {
    background-color: $color-white;
    box-shadow: 0 4px 8px rgb(0 0 0 / 20%);
  }

  &__sideBar {
    flex-direction: column;
    align-items: center;
    position: fixed;
    top: 2rem;
    -webkit-backdrop-filter: blur(9px);
    backdrop-filter: blur(9px);
    transform: translateX(100%);
    -webkit-transform: translateX(100%);
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

.btn.secondary {
  color: $color-primary;
}
.header__sideBar.secondary {
  background-color: rgba(7, 7, 131, 0.7);
}

// @media only screen and (max-width: 640px) {
//   nav {
// transform: translateX(100%);
// -webkit-transform: translateX(100%);
//     transition: transform 0.5s ease-in-out;
//   }
// }
</style>
