<template>
  <header
    class="header fade-in-bg"
    :class="{
      header__scroll: isContrastActive,
      header__active: isBurgerActive,
    }"
  >
    <div
      @click="$router.push('/')"
      v-track="{category: 'logo clicked', label: 'logo was clicked'}"
      class="logo"
    >
      <img src="/logo/gamiw_logo_white.png" alt="Wi-Mag logo" />
    </div>

    <Burger @click.stop="toggle" :active="isBurgerActive" />
  </header>
  <nav
    class="sideBar fade-in-bg"
    :class="{
      sideBar__scroll: !isContrastActive,
      slideIn: isBurgerActive,
      slideOut: !isBurgerActive,
    }"
  >
    <div class="btn sr-only">MENU</div>
    <button
      @click="$router.push('/offer'); toggle()"
      v-track="{category: 'Offer btn clicked', label: 'offer btn was clicked'}"
      class="btn"
    >
      OFERTA
    </button>
    <button
      @click="$router.push('/about'); toggle()"
      v-track="{category: 'About btn clicked', label: 'about btn was clicked'}"
      class="btn"
    >
      O FIRMIE
    </button>
    <button
      @click="$router.push('/home#footer'); toggle()"
      v-track="{category: 'Contact btn clicked', label: 'contact btn was clicked'}"
      class="btn btn--highlight"
    >
      KONTAKT
    </button>
  </nav>
</template>

<script>
import Burger from '@/components/base/Burger.vue'

export default {
  data() {
    return {
      isBurgerActive: false,
      isContrastActive: true,
      observer: null,
    }
  },
  components: {
    Burger,
  },
  watch: {
    isBurgerActive(newVal, oldVal) {
      console.log('newVal: ', newVal)
      console.log('oldVal: ', oldVal)
    },
  },
  methods: {
    toggle() {
      this.isBurgerActive = !this.isBurgerActive
    },
    activateObserver() {
      this.observer = new IntersectionObserver(
        ([entry]) => {
          if (!entry.isIntersecting) {
            this.isContrastActive = true
          } else {
            this.isContrastActive = false
          }
        },
        { rootMargin: '0px 0px -90% 0px' }
      )
      document
        .querySelectorAll('.observer')
        .forEach(el => this.observer.observe(el))
    },
  },
  mounted() {
    setTimeout(() => {
      this.activateObserver()
    }, 500)
  },
}
</script>

<style lang="scss" scoped>
@import '@/styles/scss/_general.scss';

.header {
  position: sticky;
  top: 0;
  width: 100vw;
  height: auto;
  // background-color: $color-white;
  background-color: transparent;
  z-index: 10;
  display: flex;
  justify-content: space-between;
  align-items: center;
  -webkit-backdrop-filter: blur(3px);
  backdrop-filter: blur(3px);

  &__active {
    -webkit-backdrop-filter: none;
    backdrop-filter: none;
    background-color: transparent !important;
    box-shadow: none !important;
  }

  &__scroll {
    background-color: $primary-opacity;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  }
}
.logo {
  & > img {
    width: 3rem;
    height: auto;
    background-color: $color-primary;
    padding: 0.4rem;
  }
}

.sideBar {
  flex-direction: column;
  align-items: center;
  position: fixed;
  z-index: 9;
  top: 0;
  padding: 2rem 0 100% 0;
  -webkit-backdrop-filter: blur(9px);
  backdrop-filter: blur(9px);
  transform: translateX(100%);
  -webkit-transform: translateX(100%);
  background-color: $primary-opacity;

  &__scroll {
    background-color: $black-opacity;
  }
}
.btn {
  background-color: transparent;
  color: $color-white;
  margin: 0.6rem 0;
}

// @media only screen and (max-width: 640px) {
//   nav {
// transform: translateX(100%);
// -webkit-transform: translateX(100%);
//     transition: transform 0.5s ease-in-out;
//   }
// }
</style>
