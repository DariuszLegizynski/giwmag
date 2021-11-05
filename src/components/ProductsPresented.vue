<template>
  <article class="products-presented">
    <h1>Nasze Produkty:</h1>
    <section class="products-presented__items">
      <div class="products-presented__item rack rack--screw">
        <h5>Regały półkowe - śrubowe</h5>
        <p>
          Słupy nośne oraz półki regału, śruby do skręcenia regału, elementy
          usztywniające regał, plastikowe ochronne stopki.
        </p>
        <button class="btn btn--reverse">Regały śrubowe</button>
      </div>
      <div class="products-presented__item rack rack--attach">
        <h5>Regały półkowe - zaczepowe</h5>
        <p>
          Stelaż i wypełnienie, plastikowe stopki pod słupy nośne chroniące
          podłoże, system wtykowy zapewnia stabilność regału bez elementów
          usztywniających.
        </p>
        <button class="btn btn--reverse">Regały zaczepowe</button>
      </div>
      <div class="products-presented__item rack rack--high">
        <h5>Regały wys. składowania</h5>
        <p>Regały paletowe, zaczepy belkowe, ogromny wybór</p>
        <button class="btn btn--reverse btn--tall">
          Regały wysokiego składowania
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

    & > h5 {
      margin-bottom: 0.75rem;
    }

    & > p {
      margin-bottom: 1.5rem;
    }
  }
}

.btn--tall {
  height: 4.8rem;
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
      url('/images/ruchindra-gunasekara-GK8x_XCcDZg-unsplash.jpeg');
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
