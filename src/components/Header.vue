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
    <nav>
      <div class="btn sr-only">MENU</div>
      <button
        @click="$router.push('/offer'); toggle()"
        v-track="{
          category: 'Offer btn clicked',
          label: 'offer btn was clicked',
        }"
        class="btn btn--transparent"
      >
        OFERTA
      </button>
      <button
        @click="$router.push('/about'); toggle()"
        v-track="{
          category: 'About btn clicked',
          label: 'about btn was clicked',
        }"
        class="btn btn--transparent"
      >
        O FIRMIE
      </button>
      <button
        @click="$router.push('/home#footer'); toggle()"
        v-track="{
          category: 'Contact btn clicked',
          label: 'contact btn was clicked',
        }"
        class="btn btn--transparent"
      >
        KONTAKT
      </button>
    </nav>
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
    SideBar,
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
  display: flex;
  justify-content: space-between;
  align-items: center;

  position: fixed;
  top: 0;
  padding-right: 1rem;

  width: 100vw;
  height: auto;

  z-index: 10;

  background-color: transparent;
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
  .logo {
    & > img {
      width: 3rem;
      height: auto;
      background-color: $color-primary;
      padding: 0.4rem;
    }
  }
  nav {
    display: none;
    visibility: hidden;
  }
}

@media only screen and (min-width: 640px) {
  .header {
    nav {
      display: flex;
      visibility: visible;
      justify-content: space-around;
      align-items: center;
      width: 57%;

      .btn {
        margin: 0;
        padding: 0 0.4rem;
        width: auto;
        font-size: $font-size-18;
        line-height: $line-height-18;
      }
    }
  }
}
@media only screen and (min-width: 1024px) {
  .header {
    nav {
      width: 80%;

      .btn {
        font-size: $font-size-24;
        line-height: $line-height-30;
      }
    }
  }
}
</style>
