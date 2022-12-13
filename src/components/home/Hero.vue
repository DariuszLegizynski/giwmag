<template>
  <article class="hero" id="hero">
    <section class="hero__img" />
    <section class="hero__body">
      <div class="hero__text">
        <h3>Pełen zakres usług,<br />produkt pod same drzwi.</h3>
        <h1><i>Fachowcy</i> od regałów.</h1>
        <span>
          Maksymalnie wykorzystujemy przestrzeń,<br />
          optymalizujemy koszta,<br />
          zapewniamy najwyszą jakość.
        </span>
      </div>
      <div class="hero__call-to-action">
        <button
          class="btn btn--highlight"
          @click="$router.push('/home#footer')"
        >
          Zapytaj nas
        </button>
        <button isOffer class="btn" @click="$router.push('/home#products')">
          Nasza oferta
        </button>
      </div>
    </section>
  </article>
</template>

<style lang="scss" scoped>
@import '@/styles/scss/_general.scss';

.hero {
  display: grid;
  grid-template-rows: 100vh;

  &__img {
    grid-column: 1 / -1;
    grid-row: 1 / -1;

    background-image: linear-gradient(
        to right bottom,
        hsla(240, 18%, 3%, 0.8),
        hsla(240, 18%, 3%, 0.7)
      ),
      url('/images/portrait/ruchindra-gunasekara-GK8x_XCcDZg-unsplash.jpeg');
    background-position: center center;
    background-repeat: no-repeat;
    background-size: cover;
  }

  &__body {
    grid-column: 1 / -1;
    grid-row: 1 / -1;

    display: grid;
    grid-template-rows: auto auto;
    justify-items: center;

    margin-top: 2.4rem;
  }

  &__text {
    display: grid;
    grid-auto-rows: auto;
    row-gap: 1rem;

    margin-top: 2.4rem;
    padding: 0 1.6rem;

    text-align: center;
  }

  &__call-to-action {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    width: 12rem;
  }
}
@media only screen and (min-width: 400px) {
  .hero {
    &__body {
      margin-top: 3.2rem;
    }
  }
}
@media only screen and (min-width: 480px) {
  .hero {
    &__text {
      & > h3 {
        font-size: $font-size-24;
      }

      & > h1 {
        font-size: $font-size-48;
      }

      & > span {
        font-size: $font-size-20;
      }
    }
  }
}
@media only screen and (min-width: 640px) {
  .hero {
    &__text {
      & > h3 {
        font-size: $font-size-28;
        line-height: $line-height-36;
      }

      & > h1 {
        font-size: $font-size-56;
        line-height: $line-height-56;
      }

      & > span {
        font-size: $font-size-24;
        line-height: $line-height-28;
      }
    }
  }
}
@media only screen and (min-width: 768px) {
  .hero {
    grid-template-columns: 1fr 1fr;

    &__img {
      grid-column: 1;
    }

    &__body {
      grid-column: 2;
    }
  }
}
</style>
