<template>
  <article class="hero observer" id="hero">
    <section class="hero__img" />
    <section class="hero__text">
      <h1>Fachowcy od regałów.</h1>
      <h2>
        Wykonujemy pełen zakres usług, wraz z dostarczeniem naszych produktów
        pod same drzwi.
      </h2>
      <p>
        Wykorzystujemy przestrzeń do maksimum, zwiększając wydajność magazynu,
        optymalizujemy koszta, zapewniając najwyszą jakość.
      </p>
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
  }
}
</script>

<style lang="scss" scoped>
@import '@/styles/scss/_general.scss';

.hero {
  height: auto;

  &__img {
    position: absolute;
    z-index: -1;
    top: 0;
    height: 100%;
    width: 100%;
    background-image: linear-gradient(
        to right bottom,
        hsla(240, 18%, 3%, 0.8),
        hsla(240, 18%, 3%, 0.7)
      ),
      url('/images/ruchindra-gunasekara-GK8x_XCcDZg-unsplash.jpeg');
    background-position: center center;
    background-repeat: no-repeat;
    background-size: cover;
  }

  &__text {
    padding: 0.8rem 1.6rem;
    text-align: left;

    & > h1,
    & > h2 {
      margin-bottom: 1rem;
    }
  }

  &__call-to-action {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
}

@media only screen and (min-width: 360px) {
}
</style>
