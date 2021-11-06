<template>
  <article class="product-pros">
    <section class="product-pros__header">
      <h2>Postaw na nasze regały</h2>
      <img
        src="/images/chuttersnap-BNBA1h-NgdY-unsplash.jpeg"
        alt="Shelves in action"
      />
    </section>
    <section class="product-pros__header">
      <p>ponieważ:</p>
      <div class="product-pros__text">
        <span>gwarantujemy <strong>najwyższą jakość</strong> wykonania.</span>
        <span>spełniamy normy <strong>PN-78 M-78320.</strong></span>
        <span>
          nasze produkty są <strong>sprawdzone</strong> - próby wytrzymałościowe
          potwierdzają deklarowane obciążenie.
        </span>
        <span
          >są proste w <strong>montażu</strong> i
          <strong>demontażu.</strong></span
        >
        <span
          >dają się łatwo i bezproblemowo <strong>transportować.</strong></span
        >
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
  display: grid;
  grid-template-columns: 1fr 1fr;
  margin-top: 2.4rem;

  &__header,
  &__text {
    display: grid;
    grid-template-columns: 1fr;
    align-content: center;
  }
  &__header {
    justify-items: center;
    margin: 1rem;

    & > h2 {
      color: $color-primary;
      margin-bottom: 1.2rem;
    }

    & > p {
      margin: 1rem 0;
      color: $color-primary;
    }
  }

  &__text {
    justify-items: flex-start;
    font-size: 1.4rem;
    margin-left: 1.4rem;
    color: $color-primary;
    line-height: 1.8rem;

    & > * {
      margin: 0.4rem 0;
    }
  }
}

@media only screen and (max-width: 640px) {
  .product-pros {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
}
</style>
