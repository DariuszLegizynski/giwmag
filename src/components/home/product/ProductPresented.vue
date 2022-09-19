<template>
  <section class="product-presented" data-aos="fade-up" data-aos-once="true">
    <div class="product-presented__container">
      <div class="product-presented__img-wrapper">
        <ScrollParallax
          class="product-presented__img"
          direction="y"
          :speed="parallaxScrollSpeed"
        >
          <img
            src="/images/portrait/jake-nebov-NmwnjkukM80-unsplash.jpeg"
            alt="some racks"
            loading="lazy"
          />
        </ScrollParallax>
      </div>
    </div>
    <h3 class="product-presented__title product-presented__title">
      {{ title }} {{ productTypes.type }}
    </h3>
    <h3
      v-if="productTypes.type_continued"
      class="product-presented__title product-presented__title--lower"
    >
      {{ productTypes.type_continued }}
    </h3>
    <div class="product-presented__content">
      <ul class="product-presented__text-wrapper">
        <li>zimnowalcowana<br />blacha DC01</li>
        <li>malowanie<br />proszkowe</li>
        <li>skręcane<br />śrubami 6x12mm</li>
        <li>popiel<br />RAL7035</li>
      </ul>
    </div>
    <RouterLink
      :to="`/offer/productList/${productTypes.id}`"
    >
      <ButtonBase/>
    </RouterLink>
  </section>
</template>

<script>
import AOS from 'aos'
import 'aos/dist/aos.css'

import ScrollParallax from 'vue3-parallax/src/components/ScrollParallax.vue'

import ButtonBase from '@/components/base/ButtonBase.vue'

export default {
  components: {
    ScrollParallax,
    ButtonBase
  },
  props: {
    title: {
      type: String,
      default: '',
    },
    productTypes: {
      type: Object,
      default: () => {},
    },
    parallaxScrollSpeed: {
      type: Number,
      default: 0,
    },
  },
  created() {
    AOS.init()
  },
}
</script>

<style lang="scss" scoped>
@import '@/styles/scss/_general.scss';
.product-presented {
  box-shadow: 0px 0px 2px 1px hsla(240, 20%, 3%, 0.2);
  background-color: $color-white;

  &__container {
    position: relative;
    width: 100%;
    overflow: hidden;
    margin: 0 0 0.75rem;
    padding: 0 0 60% 0;
  }

  &__img-wrapper {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  &__title {
    color: $color-black;
    text-align: center;
    font-size: $font-size-24;
    padding: 0.8rem 1rem;
  }

  &__title--lower {
    padding: 0rem 1rem 0.8rem 1rem;
  }

  &__content {
    padding: 0.6rem 1.2rem 1.2rem 1.2rem;
    color: $color-black;
  }

  &__text-wrapper {
    display: grid;
    grid-template-columns: 1fr auto;
    grid-auto-rows: 1.8rem;
    column-gap: 0.4rem;
    row-gap: 1rem;

    & > li {
      font-size: $font-size-12;
      text-transform: uppercase;
    }
  }


}

</style>
