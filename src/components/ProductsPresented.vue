<template>
  <article class="products-presented">
    <h1>Nasze Produkty:</h1>
    <section class="products-presented__items">
      <div class="products-presented__item rack rack--screw">
        <div class="products-presented__bg">
          <h5>Regały półkowe - śrubowe</h5>
          <p>
            Słupy nośne oraz półki regału, śruby do skręcenia regału, elementy
            usztywniające regał, plastikowe ochronne stopki.
          </p>
        </div>
        <button class="btn btn--reverse">Zobacz</button>
      </div>
      <div class="products-presented__item rack rack--attach">
        <div class="products-presented__bg">
          <h5>Regały półkowe - zaczepowe</h5>
          <p>
            Stelaż i wypełnienie, plastikowe stopki pod słupy nośne chroniące
            podłoże, system wtykowy zapewnia stabilność regału bez elementów
            usztywniających.
          </p>
        </div>
        <button class="btn btn--reverse">Zobacz</button>
      </div>
      <div class="products-presented__item rack rack--high">
        <div class="products-presented__bg">
          <h5>Regały wysokiego składowania</h5>
          <p>Regały paletowe, zaczepy belkowe, ogromny wybór</p>
        </div>
        <button class="btn btn--reverse">
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
  margin: 2rem 0 4rem 0;
  & > h1 {
    margin-bottom: 2rem;
    color: $color-primary;
  }

  &__items {
    display: flex;
    justify-content: space-evenly;
  }

  &__item {
    display: grid;
    grid-template-columns: 1fr;
    align-content: center;
    padding: 1rem;
  }

  &__bg {
    background-color: $primary-opacity;
    padding: 1rem;

    & > h5 {
      margin-bottom: 0.75rem;
    }
  }
}

.rack {
  background-position: center center;
  background-repeat: no-repeat;
  background-size: contain;

  &--screw {
    background-image: $gradient-main,
      url('/images/polkowy-srubowy-metalowy/Regal_swi_metal_1.jpeg');
  }

  &--attach {
    background-image: $gradient-main,
      url('/images/polkowy-zaczepowy-ciezki/startowy.jpeg');
  }

  &--high {
    background-image: $gradient-main,
      url('/images/pexels-tiger-lily-4483610.jpeg');
  }
}

@media only screen and (max-width: 640px) {
  .products-presented {
    padding: 0.8rem;

    &__items {
      display: grid;
      grid-template-columns: auto;
      grid-template-rows: repeat(3, 20rem);
      row-gap: 2rem;
      justify-items: center;
    }
    &__item {
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      justify-content: center;
    }
  }
}
</style>
