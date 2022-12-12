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
      v-track="{ category: 'logo clicked', label: 'logo was clicked' }"
      class="logo"
    >
      <img src="/logo/gamiw_logo_white.png" alt="Wi-Mag logo" />
    </div>

    <Burger @click.stop="toggle" :active="isBurgerActive" />
  </header>
  <SideBar @toggle="toggle" :isBurgerActive="isBurgerActive" />
</template>

<script>
import Burger from '@/components/base/Burger.vue'
import SideBar from '@/components/base/SideBar'

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
    SideBar
  },
  methods: {
    toggle() {
      this.isBurgerActive = !this.isBurgerActive
    },
    activateObserver() {
      window.$headerObserver = new IntersectionObserver(
        ([entry]) => {
          if (!entry.isIntersecting) {
            this.isContrastActive = true
          } else {
            this.isContrastActive = false
          }
        },
        { rootMargin: '0px 0px -95% 0px' }
      )
    },
  },
  created() {
    this.activateObserver()
  },
  unmounted() {
    if (window.$headerObserver instanceof IntersectionObserver) {
      window.$headerObserver.disconnect()
    }
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
</style>
