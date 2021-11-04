<template>
  <article class="products-presented">
    <h1>Nasze Produkty:</h1>
    <section class="products-presented__items">
      <div class="products-presented__item">
        <button class="btn">Regały śrubowe</button>
        <img
          class="products-presented__img"
          src="/images/polkowy-srubowy-metalowy/Regal_swi_metal_1.jpeg"
          alt="regal srubowych"
        />
      </div>
      <div class="products-presented__item">
        <button class="btn">Regały zaczepowe</button>
        <img
          class="products-presented__img"
          src="/images/polkowy-zaczepowy-ciezki/startowy.jpeg"
          alt="regal srubowy zaczepowy"
        />
      </div>
      <div class="products-presented__item">
        <button class="btn">Regały wysokiego składowania</button>
        <img
          class="products-presented__img"
          src="/images/ruchindra-gunasekara-GK8x_XCcDZg-unsplash.jpeg"
          alt="regal wysokiego skladowania"
        />
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
  margin: 10rem 0;
  text-align: center;

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

    & > button {
      font-size: 1.2rem;
      height: 3rem;
      color: white;
      background-color: $color-primary-light;
    }
  }

  &__img {
    height: 30rem;
  }
}

@media only screen and (max-width: 640px) {
  .products-presented {
    &__items {
      display: flex;
      flex-direction: column;
      align-items: center;
    }
  }
}
</style>
