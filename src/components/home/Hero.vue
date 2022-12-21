<template>
  <article class="hero" id="hero">
    <section class="hero__img" />
    <section class="hero__img-landscape" />
    <section class="hero__body">
      <div class="hero__text">
        <h3>Pełen zakres usług,<br />produkt pod same drzwi.</h3>
        <h1><i>Fachowcy</i> <br />od regałów.</h1>
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

  &__img-landscape {
    display: none;
    visibility: none;
  }

  &__body {
    grid-column: 1 / -1;
    grid-row: 1 / -1;

    display: grid;
    grid-template-rows: auto auto;
    justify-items: center;

    margin-top: 5.4rem;
  }

  &__text {
    display: grid;
    grid-auto-rows: auto;
    row-gap: 1rem;

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

@media only screen and (min-width: 480px) {
  .hero {
    &__text {
      & > h3 {
        font-size: $font-size-24;
        line-height: $line-height-32;
      }

      & > h1 {
        font-size: $font-size-48;
        line-height: $line-height-56;
      }

      & > span {
        font-size: $font-size-20;
        line-height: $line-height-24;
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
        line-height: $line-height-72;
      }

      & > span {
        font-size: $font-size-24;
        line-height: $line-height-32;
      }
    }
  }
}
@media only screen and (min-width: 768px) {
  .hero {
    grid-template-columns: 1fr;

    &__img {
      display: none;
      visibility: none;
    }

    &__img-landscape {
      display: block;

      grid-column: 1 / -1;
      grid-row: 1 / -1;

      background-image: linear-gradient(
          to right bottom,
          hsla(240, 18%, 3%, 0.8),
          hsla(240, 18%, 3%, 0.7)
        ),
        url('/images/landscape/chuttersnap-BNBA1h-NgdY-unsplash.jpeg');
      background-position: center center;
      background-repeat: no-repeat;
      background-size: cover;
    }

    &__text {
      padding: 2rem 1.6rem 0;

      & > h3 {
        font-size: $font-size-38;
        line-height: $line-height-44;
      }

      & > h1 {
        font-size: $font-size-72;
        line-height: $line-height-84;
      }

      & > span {
        font-size: $font-size-32;
        line-height: $line-height-44;
      }
    }

    &__call-to-action {
      display: grid;
      grid-template-columns: repeat(2, 16rem);
      column-gap: 2rem;
      justify-items: center;
      align-items: start;
      padding: 4rem;
    }
  }
}
@media only screen and (min-width: 1024px) {
  .hero {
    background-color: $color-primary;

    &__text {
      padding-top: 4rem;
    }

    &__img-landscape {
      // grid-column: auto;
      // grid-row: auto;

      background-image: linear-gradient(
          to right bottom,
          hsla(240, 18%, 3%, 0.8),
          hsla(240, 18%, 3%, 0.7)
        ),
        url('/images/landscape/chuttersnap-BNBA1h-NgdY-unsplash.jpeg');
      background-position: center center;
      background-repeat: no-repeat;
      background-size: cover;
    }

    // &__body {
    //   grid-column: auto;
    //   grid-row: auto;
    // }

    button {
      padding: 1rem 1.6rem;

      font-size: $font-size-32;
      line-height: $line-height-40;
    }
  }
}
</style>
