<template>
  <article class="products-presented">
    <h1>Nasze Produkty:</h1>
    <section class="products-presented__items">
      <div class="products-presented__container">
        <div class="products-presented__wrapper">
          <div class="products-presented__item">
            <ScrollParallax
              class="products-presented__img"
              direction="y"
              :speed="-0.1"
            >
              <img
                src="/images/pexels-tiger-lily-4483610.jpeg"
                alt="classical shelves"
              />
            </ScrollParallax>

            <!-- <h5 class="products-presented__title">Regały półkowe<br />śrubowe</h5>
        <p class="products-presented__content">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt,
          ipsa voluptate facere dicta quia, eum dolor laboriosam autem, alias
          deleniti quaerat pariatur.
        </p>
        <button class="btn btn--highlight">Zobacz</button> -->
          </div>
        </div>
      </div>

      <div class="products-presented__item">
        <img
          src="/images/third-serving-ifZ5K80s6yU-unsplash.jpeg"
          alt="some racks"
        />
        <h5 class="products-presented__title">Regały półkowe<br />zaczepowe</h5>
        <p class="products-presented__content">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt,
          ipsa voluptate facere dicta quia, eum dolor laboriosam autem, alias
          deleniti quaerat pariatur.
        </p>
        <button class="btn btn--reverse">Zobacz</button>
      </div>
      <div class="products-presented__item">
        <img src="/images/wysokiego-skladowania/palet4.jpeg" alt="some racks" />
        <h5 class="products-presented__title">Regały wysokiego składowania</h5>
        <p class="products-presented__content">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt,
          ipsa voluptate facere dicta quia, eum dolor laboriosam autem, alias
          deleniti quaerat pariatur.
        </p>
        <button class="btn btn--reverse btn--test">
          Zobacz
        </button>
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
    margin: 0 0 0.75rem rem;
    padding: 0 0 137%;
    -webkit-transform: rotate(1deg);
    transform: rotate(1deg);
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

  &__item {
    display: grid;
    grid-template-columns: 1fr;
    background-color: $color-border;
  }

  &__img {
    margin: 3rem 0 1rem 0;
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
