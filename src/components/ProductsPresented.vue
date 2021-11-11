<template>
  <article class="products-presented">
    <h1>Nasze Produkty:</h1>
    <section class="products-presented__items">
      <div class="products-presented__item">
        <img src="/images/pexels-tiger-lily-4483610.jpeg" alt="some racks" />
        <h5 class="products-presented__title">Regały półkowe<br />śrubowe</h5>
        <p class="products-presented__content">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt,
          ipsa voluptate facere dicta quia, eum dolor laboriosam autem, alias
          deleniti quaerat pariatur.
        </p>
        <button class="btn btn--highlight">Zobacz</button>
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
export default {}
</script>

<style lang="scss" scoped>
@import '@/styles/scss/_general.scss';

.products-presented {
  margin: 1.6rem 0 4rem 0;
  padding: 0 1rem;

  & > h1 {
    color: $color-primary;
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

  &__title {
    transform: translateY(-50%);
    justify-self: center;
    background-color: $color-primary;
    padding: 1.2rem 0;
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
// &__wrapper {
//   position: relative;
//   background-color: $white-opacity;
//   -webkit-backdrop-filter: blur(3px);
//   backdrop-filter: blur(3px);

//   padding: 1rem;
// }

// .rack {
//   background-position: center center;
//   background-repeat: no-repeat;
//   background-size: contain;

// &--screw {
//   // background-image: $gradient-main,
//   //   url('/images/polkowy-srubowy-metalowy/Regal_swi_metal_1.jpeg');
//   background-image: url('/images/pexels-tiger-lily-4483610.jpeg');
// }

// &--attach {
//   // background-image: $gradient-main,
//   //   url('/images/polkowy-zaczepowy-ciezki/startowy.jpeg');
//   background-image: url('/images/third-serving-ifZ5K80s6yU-unsplash.jpeg');
// }

// &--high {
//   // background-image: $gradient-main,
//   //   url('/images/pexels-tiger-lily-4483610.jpeg');
//   background-image: url('/images/wysokiego-skladowania/palet4.jpeg');
// }
// }
</style>
