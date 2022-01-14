<template>
  <article class="products-presented">
    <h1>Nasze Produkty:</h1>
    <section class="products-presented__items">
      <div class="products-presented__container">
        <div class="products-presented__wrapper">
          <ScrollParallax
            class="products-presented__img"
            direction="y"
            :speed="-0.1"
          >
            <img
              src="/images/jake-nebov-NmwnjkukM80-unsplash.jpeg"
              alt="classical shelves"
            />
          </ScrollParallax>
          <!-- <h5 class="products-presented__title">
              Regały półkowe<br />śrubowe
            </h5>
            <p class="products-presented__content">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt,
              ipsa voluptate facere dicta quia, eum dolor laboriosam autem,
              alias deleniti quaerat pariatur.
            </p>
            <button class="btn btn--highlight">Zobacz</button> -->
        </div>
      </div>

      <div class="products-presented__container">
        <div class="products-presented__wrapper">
          <ScrollParallax
            class="products-presented__img"
            direction="y"
            :speed="-0.1"
          >
            <img
              src="/images/jake-nebov-gVlNW-xrAZM-unsplash.jpeg"
              alt="some racks"
            />
          </ScrollParallax>
          <!-- <h5 class="products-presented__title">
              Regały półkowe<br />zaczepowe
            </h5>
            <p class="products-presented__content">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt,
              ipsa voluptate facere dicta quia, eum dolor laboriosam autem,
              alias deleniti quaerat pariatur.
            </p>
            <button class="btn btn--reverse">Zobacz</button> -->
        </div>
      </div>

      <div class="products-presented__container">
        <div class="products-presented__wrapper">
          <ScrollParallax
            class="products-presented__img"
            direction="y"
            :speed="-0.1"
          >
            <img
              src="/images/jake-nebov-NmwnjkukM80-unsplash.jpeg"
              alt="some racks"
            />
          </ScrollParallax>
          <!-- <h5 class="products-presented__title">
              Regały wysokiego składowania
            </h5>
            <p class="products-presented__content">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt,
              ipsa voluptate facere dicta quia, eum dolor laboriosam autem,
              alias deleniti quaerat pariatur.
            </p>
            <button class="btn btn--reverse btn--test">
              Zobacz
            </button> -->
        </div>
      </div>
    </section>
  </article>
</template>

<script>
import ScrollParallax from 'vue3-parallax/src/components/ScrollParallax.vue'
export default {
  components: {
    ScrollParallax
  }
}
</script>

<style lang="scss" scoped>
@import '@/styles/scss/_general.scss';

.products-presented {
  margin: 3.2rem 0 4rem 0;
  padding: 0 1rem;

  & > h1 {
    color: $color-primary;
  }

  &__container {
    position: relative;
    width: 100%;
    overflow: hidden;
    margin: 0 0 0.75rem;
    padding: 0 0 90%;
  }

  &__wrapper {
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
    row-gap: 7rem;
  }

  &__title {
    transform: translateY(-50%);
    justify-self: center;
    background-color: $color-primary;
    padding: 0.8rem 0;
    text-align: center;
    width: 80%;
  }

  &__content {
    padding: 0 1.4rem 1.6rem 1.4rem;
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
