<template>
  <article class="product-pros">
    <h2>Postaw na nasze regały</h2>
    <section class="product-pros__items">
      <div class="product-pros__item product-pros__quality">
        <span><strong>Najwyższa jakość</strong> wykonania.</span>
      </div>
      <div class="product-pros__item product-pros__norm">
        <span>Spełniamy normy <strong>PN-78 M-78320.</strong></span>
      </div>
      <div class="product-pros__item product-pros__strong">
        <span>
          <strong>Sprawdzone produkty</strong> - próby wytrzymałościowe
          potwierdzają deklarowane obciążenie.
        </span>
      </div>
      <div class="product-pros__item product-pros__montage">
        <span
          >Proste w <strong>montażu</strong> i <strong>demontażu.</strong></span
        >
      </div>
      <div class="product-pros__item product-pros__transport">
        <span>Łatwy i bezproblemowy <strong>transport.</strong></span>
      </div>
    </section>
  </article>
</template>

<script>
export default {}
</script>

<style lang="scss" scoped>
@import '@/styles/scss/_general.scss';

.product-pros {
  display: flex;
  flex-direction: column;
  align-items: center;

  //   &__text {
  //     display: grid;
  //     grid-template-columns: 1fr;
  //     align-content: center;
  //   }

  & > h2 {
    color: $color-primary;
    margin-bottom: 1.2rem;
  }

  &__items {
    display: grid;
    grid-template-rows: repeat(5, 10rem);
    row-gap: 1rem;
  }

  &__quality {
    background: orangered url('/icons/quality/quality-medal-svgrepo-com.svg')
      center top no-repeat;
  }

  &__norm {
    background: orangered url('/icons/norm/documents-svgrepo-com.svg') center
      top no-repeat;
  }

  &__strong {
    background: orangered url('/icons/strong/strength-svgrepo-com.svg') center
      top no-repeat;
  }

  &__montage {
    background: orangered url('/icons/montage/gear-svgrepo-com (1).svg') center
      top no-repeat;
  }

  &__transport {
    background: orangered
      url('/icons/transport/platform-truck-with-a-box-svgrepo-com.svg') center
      top no-repeat;
  }
}

@media only screen and (max-width: 640px) {
  .product-pros {
  }
}
</style>
