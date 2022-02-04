<template>
  <article class="products-presented" id="products">
    <button @click="$router.push('/offer')" class="btn btn--default">
      Pełna Oferta
    </button>
    <section class="products-presented__items">
      <div class="products-presented__item" data-aos="fade-up">
        <h3 class="products-presented__title">
          Regały półkowe śrubowe
        </h3>
        <div class="products-presented__container">
          <div class="products-presented__img-wrapper">
            <ScrollParallax
              class="products-presented__img"
              direction="y"
              :speed="-0.1"
            >
              <img
                src="/images/jake-nebov-NmwnjkukM80-unsplash.jpeg"
                alt="classical shelves"
                loading="lazy"
              />
            </ScrollParallax>
          </div>
        </div>
        <p class="products-presented__content">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt,
          ipsa voluptate facere dicta quia, eum dolor laboriosam autem, alias
          deleniti quaerat pariatur.
        </p>
        <button class="btn btn--highlight">Zobacz</button>
      </div>

      <div class="products-presented__item" data-aos="fade-up">
        <h3 class="products-presented__title">
          Regały półkowe zaczepowe
        </h3>
        <div class="products-presented__container">
          <div class="products-presented__img-wrapper">
            <ScrollParallax
              class="products-presented__img"
              direction="y"
              :speed="-0.1"
            >
              <img
                src="/images/jake-nebov-gVlNW-xrAZM-unsplash.jpeg"
                alt="some racks"
                loading="lazy"
              />
            </ScrollParallax>
          </div>
        </div>
        <p class="products-presented__content">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt,
          ipsa voluptate facere dicta quia, eum dolor laboriosam autem, alias
          deleniti quaerat pariatur.
        </p>
        <button class="btn btn--highlight">Zobacz</button>
      </div>

      <div class="products-presented__item" data-aos="fade-up">
        <h3 class="products-presented__title">
          Regały wysokiego składowania
        </h3>
        <div class="products-presented__container">
          <div class="products-presented__img-wrapper">
            <ScrollParallax
              class="products-presented__img"
              direction="y"
              :speed="-0.1"
            >
              <img
                src="/images/jake-nebov-NmwnjkukM80-unsplash.jpeg"
                alt="some racks"
                loading="lazy"
              />
            </ScrollParallax>
          </div>
        </div>
        <p class="products-presented__content">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt,
          ipsa voluptate facere dicta quia, eum dolor laboriosam autem, alias
          deleniti quaerat pariatur.
        </p>
        <button class="btn btn--highlight">
          Zobacz
        </button>
      </div>
    </section>
  </article>
</template>

<script>
import AOS from 'aos'
import 'aos/dist/aos.css'

import ScrollParallax from 'vue3-parallax/src/components/ScrollParallax.vue'
export default {
  components: {
    ScrollParallax
  },
  created() {
    AOS.init()
  }
}
</script>

<style lang="scss" scoped>
@import '@/styles/scss/_general.scss';

.products-presented {
  margin: 8rem 0 5rem 0;
  padding: 0 1rem;

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

  &__items {
    margin: 1.6rem 0 2rem 0;
    display: grid;
    grid-template-columns: 1fr;
    row-gap: 4rem;
  }

  &__title {
    color: $color-black;
    padding: 0.8rem 1.4rem;
    margin-bottom: 0.8rem;
    text-align: center;
  }

  &__content {
    padding: 0.6rem 1.4rem 1.2rem 1.4rem;
    color: $color-black;
  }
}

.btn {
  margin: 0;
  border-radius: 0;
}

.btn--test {
  background-color: $primary-opacity;
}
</style>
