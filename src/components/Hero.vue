<template>
  <article class="hero observer" id="hero">
    <section class="hero__img" />
    <section class="hero__text">
      <h3>Pełen zakres usług,<br />produkt pod same drzwi.</h3>
      <h1><i>Fachowcy</i> od regałów.</h1>
      <span>
        Maksymalnie wykorzystujemy przestrzeń,<br />
        optymalizujemy koszta,<br />
        zapewniamy najwyszą jakość.
      </span>
    </section>
    <section class="hero__call-to-action">
      <CallToAction />
    </section>
  </article>
</template>

<script>
import CallToAction from '@/components/CallToAction.vue'

export default {
  components: {
    CallToAction
  },
}
</script>

<style lang="scss" scoped>
@import '@/styles/scss/_general.scss';

.hero {
  height: 85.6vh;

  &__img {
    position: absolute;
    top: 0;
    height: 100%;
    width: 100%;
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

  &__text {
    padding: 0.8rem 1.6rem;
    text-align: center;
    position: absolute;

    & > h3 {
      margin: 1.6rem 0;
    }

    & > h1 {
      margin: 1rem 0 1.6rem 0;
    }

    & > p {
      margin-bottom: 1rem;
    }
  }

  &__call-to-action {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
    height: 100%;
    position: absolute;
    justify-content: flex-end;
    padding-bottom: 4.4rem;
  }
}

@media only screen and (min-width: 360px) {
}
</style>
