<template>
  <article class="product-pros">
    <h2>Postaw na nasze regały</h2>
    <section class="product-pros__items">
      <div class="icon product-pros__quality">
        <span><strong>Najwyższa jakość</strong> wykonania.</span>
      </div>
      <div class="icon product-pros__norm">
        <span>Spełniamy normy <strong>PN-78 M-78320.</strong></span>
      </div>
      <div class="icon product-pros__strong">
        <span>
          <strong>Sprawdzone produkty</strong> - próby wytrzymałościowe
          potwierdzają deklarowane obciążenie.
        </span>
      </div>
      <div class="icon product-pros__montage">
        <span
          >Proste w <strong>montażu</strong> i <strong>demontażu.</strong></span
        >
      </div>
      <div class="icon product-pros__transport">
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

  & > h2 {
    color: $color-primary;
    margin-bottom: 1.2rem;
  }

  &__items {
    display: grid;
    grid-template-rows: repeat(5, 10rem);
    row-gap: 1rem;
    background-color: yellow;
  }

  &__quality {
    background: orangered url('/icons/quality/quality-medal.svg') center top
      no-repeat;
  }

  &__norm {
    background: orangered url('/icons/norm/a4-certificate-svgrepo-com.svg')
      center top no-repeat;
  }

  &__strong {
    background: orangered url('/icons/strong/strength-svgrepo-com.svg') center
      top no-repeat;
  }

  &__montage {
    background: orangered url('/icons/montage/gear.svg') center top no-repeat;
  }

  &__transport {
    background: orangered
      url('/icons/transport/truck-transport-svgrepo-com.svg') center top
      no-repeat;
  }
}

@media only screen and (max-width: 640px) {
  .product-pros {
  }
}
</style>
