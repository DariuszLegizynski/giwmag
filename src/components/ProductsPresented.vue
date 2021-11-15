<template>
  <article class="products-presented">
    <h1>Nasze Produkty:</h1>
    <section class="products-presented__items">
      <div class="products-presented__item rack rack--screw">
        <h2 class="products-presented__title">Regały półkowe<br />śrubowe</h2>
        <p class="products-presented__content">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt,
          ipsa voluptate facere dicta quia, eum dolor laboriosam autem, alias
          deleniti quaerat pariatur.
        </p>
        <button class="btn btn--highlight">Zobacz</button>
      </div>
      <div class="products-presented__item rack rack--attach">
        <h2 class="products-presented__title">Regały półkowe<br />zaczepowe</h2>
        <p class="products-presented__content">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt,
          ipsa voluptate facere dicta quia, eum dolor laboriosam autem, alias
          deleniti quaerat pariatur.
        </p>
        <button class="btn btn--highlight">Zobacz</button>
      </div>
      <div class="products-presented__item rack rack--high">
        <h2 class="products-presented__title">Regały wysokiego składowania</h2>
        <p class="products-presented__content">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt,
          ipsa voluptate facere dicta quia, eum dolor laboriosam autem, alias
          deleniti quaerat pariatur.
        </p>
        <button class="btn btn--highlight">Zobacz</button>
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
    row-gap: 4rem;
  }

  &__item {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-evenly;
    background-color: $color-border;
    // -webkit-box-shadow: 0px 0px 10px 2px rgba(0, 0, 0, 0.7);
    // box-shadow: 0px 0px 10px 2px rgba(0, 0, 0, 0.7);
  }

  &__title {
    justify-self: center;
    text-align: center;
  }

  &__content {
    padding: 0 1.4rem;
    font-size: $font-size-20;
    font-weight: 500;
  }
}

.rack {
  background-position: center center;
  background-repeat: no-repeat;
  background-size: cover;
  height: 80vh;

  &--screw {
    background-image: $gradient-main,
      url('/images/jake-nebov-NmwnjkukM80-unsplash.jpeg');
  }

  &--attach {
    background-image: $gradient-main,
      url('/images/jake-nebov-NmwnjkukM80-unsplash.jpeg');
  }

  &--high {
    background-image: $gradient-main,
      url('/images/jake-nebov-NmwnjkukM80-unsplash.jpeg');
  }
}
.btn {
  margin: 0;
  width: 8rem;
}

.btn--test {
  background-color: $primary-opacity;
}
</style>
