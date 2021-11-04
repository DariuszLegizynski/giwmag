<template>
  <article class="hero">
    <Header />
    <!-- <section class="hero__video">
      <video autoPlay muted loop>
        <source
          src="/videos/webm/production-ID_4294436.webm"
          type="video/webm"
        />
        Your browser is not supported
      </video>
    </section> -->
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
import Header from '@/components/Header.vue'
import CallToAction from '@/components/CallToAction.vue'
export default {
  components: {
    Header,
    CallToAction
  }
}
</script>

<style lang="scss" scoped>
@import '@/styles/scss/_general.scss';

.hero {
  height: 100vh;
  margin-top: 2rem;

  &__video {
    position: absolute;
    top: 0;
    left: 0;
    height: 100%;
    width: 100%;
    z-index: -1;
    background: $color-primary-light;
    overflow: hidden;

    &:before {
      content: '';
      position: absolute;
      top: 0;
      right: 0;
      left: 0;
      bottom: 0;
      z-index: 1;
      background: $gradient-secondary;
    }

    & > video {
      height: 100%;
      width: 100%;
      object-fit: cover;
    }
  }

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

    // background-image: linear-gradient(
    // 			to right bottom,
    // 			hsla(240, 90%, 27%, 0.8),
    // hsla(240, 90%, 27%, 0.7)
    //     hsla(240, 18%, 3%, 0.8),
    // hsla(240, 18%, 3%, 0.7)
    // 		),
    // 		url('/images/chuttersnap-BNBA1h-NgdY-unsplash.jpeg');
    // 	background-size: cover;
  }

  &__text {
    padding: 1.6rem;
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
    height: 100%;
  }
}

@media only screen and (min-width: 360px) {
}
</style>
