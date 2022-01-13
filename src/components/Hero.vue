<template>
  <article class="hero observer">
    <div @mousemove="handleHover" class="hero__container">
      <section class="hero__img">
        <img
          class="hero__background"
          src="/images/ruchindra-gunasekara-GK8x_XCcDZg-unsplash.jpeg"
          alt="corridor with shelves"
        />
        <section class="hero__text">
          <h1>Fachowcy od regałów.</h1>
          <h2>
            Wykonujemy pełen zakres usług, wraz z dostarczeniem naszych
            produktów pod same drzwi.
          </h2>
          <p>
            Wykorzystujemy przestrzeń do maksimum, zwiększając wydajność
            magazynu, optymalizujemy koszta, zapewniając najwyszą jakość.
          </p>
        </section>
        <section class="hero__call-to-action">
          <CallToAction />
        </section>
      </section>
    </div>
  </article>
</template>

<script>
import CallToAction from '@/components/CallToAction.vue'
export default {
  components: {
    CallToAction
  },
  methods: {
    handleHover() {
      let container = document.querySelector('.hero__container')
      let text = document.querySelectorAll('.hero__text')

      document.body.addEventListener('mousemove', e => {
        let x = (window.innerWidth / 2 - e.pageX) / 30
        let y = (window.innerHeight / 2 - e.pageY) / 30

        container.style.transform = `rotateX(${-y}deg) rotateY(${-x}deg)`

        text.style.transform = `translateY(${y}px) translateX(${x}px)`
      })
    }
  }
}
</script>

<style lang="scss" scoped>
@import '@/styles/scss/_general.scss';

.hero {
  height: auto;
  perspective: 2000px;
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
  // background:linear-gradient(60deg, darkcyan 50%, coral 50.1%);
  overflow: hidden;

  &__container {
    transform-style: preserve-3d;
    border-radius: 30px;
    background: #333;
    box-shadow: 0 10px 15px rgba(0, 0, 0, 0.5);
    padding: 15px;
  }

  &__img {
    // position: absolute;
    // z-index: -1;
    // top: 0;
    // height: 100%;
    // width: 100%;
    // background-image: linear-gradient(
    //     to right bottom,
    //     hsla(240, 18%, 3%, 0.8),
    //     hsla(240, 18%, 3%, 0.7)
    //   ),
    //   url('/images/ruchindra-gunasekara-GK8x_XCcDZg-unsplash.jpeg');
    // background-position: center center;
    // background-repeat: no-repeat;
    // background-size: cover;

    overflow: hidden;
    position: relative;
  }

  &__background {
    height: 100%;
    width: 100%;
    object-fit: cover;
    transform: scale(1.1);
    filter: blur(2.5px);
  }

  &__text {
    // padding: 0.8rem 1.6rem;
    // text-align: left;

    position: absolute;
    bottom: -25px;
    left: 0;
    height: 100%;
    width: 100%;
    transform-style: preserve-3d;

    & > h1,
    & > h2 {
      margin-bottom: 1rem;
    }
  }

  &__call-to-action {
    display: flex;
    flex-direction: column;
    align-items: center;

    position: absolute;
    bottom: -25px;
    left: 0;
  }
}

@media only screen and (min-width: 360px) {
}
</style>
