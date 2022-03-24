<template>
  <section class="product-presented" data-aos="fade-up">
    <div class="product-presented__container">
      <div class="product-presented__img-wrapper">
        <ScrollParallax
          class="product-presented__img"
          direction="y"
          :speed="parallaxScrollSpeed"
        >
          <img
            src="/images/portrait/jake-nebov-NmwnjkukM80-unsplash.jpeg"
            alt="some racks"
            loading="lazy"
          />
        </ScrollParallax>
      </div>
    </div>
    <h3 class="product-presented__title">
      Regały wysokiego składowania
    </h3>
    <p class="product-presented__content">
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt, ipsa
      voluptate facere dicta quia, eum dolor laboriosam autem, alias deleniti
      quaerat pariatur.
    </p>
    <button class="btn btn--highlight">
      Zobacz
    </button>
  </section>
</template>

<script>
import AOS from 'aos'
import 'aos/dist/aos.css'

import ScrollParallax from 'vue3-parallax/src/components/ScrollParallax.vue'
export default {
  components: {
    ScrollParallax,
  },
  props: {
    parallaxScrollSpeed: {
      type: Number,
      default: 0,
    },
  },
  created() {
    AOS.init()
  },
}
</script>

<style lang="scss" scoped>
@import '@/styles/scss/_general.scss';
.product-presented {
  box-shadow: 2px 2px 8px 0 rgba(0, 0, 0, 0.2);
  background-color: $color-white;

  &__container {
    position: relative;
    width: 100%;
    overflow: hidden;
    margin: 0 0 0.75rem;
    padding: 0 0 90% 0;
  }

  &__img-wrapper {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  &__title {
    color: $color-black;
    padding: 0.8rem 1rem;
    margin-bottom: 0.8rem;
    text-align: center;
  }

  &__content {
    padding: 0.6rem 1.4rem 1.2rem 1.4rem;
    color: $color-black;
  }
  & > .btn {
    font-family: 'Montserrat-Medium';
  }
}
.btn {
  margin: 0;
  border-radius: 0;
}
</style>
