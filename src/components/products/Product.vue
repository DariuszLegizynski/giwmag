<template>
  <section class="product">
    <RouterLink :to="`/offer/product/${product.id}`">
      <div class="product__container">
        <div class="product__thumbnail" :style="isPortrait ? portraitImageStyle : backgroundImageStyle" />
        <div class="product__description">
          <p class="product__text">
            {{ product.name }} {{ product.type }}<br />{{
              product.type_continued
            }}
          </p>
        </div>
      </div>
    </RouterLink>
  </section>
</template>

<script>
export default {
  props: {
    product: {
      type: Object,
      default: () => ({})
    },
    isPortrait: {
      type: Boolean,
      default: false
    }
  },
  computed: {
    backgroundImageStyle() {
      return {
        backgroundImage: `linear-gradient(
        to bottom,
        transparent 70%,
        hsla(240, 90%, 27%, 0.4)
), url(${this.product.thumbnail_image})`
      }
    },
    portraitImageStyle() {
      return {
        backgroundImage: `linear-gradient(
        to bottom,
        transparent 70%,
        hsla(240, 90%, 27%, 0.4)
), url(${this.product.thumbnail_portrait})`
      }
    }
  },
}
</script>

<style lang="scss" scoped>
@import '@/styles/scss/_general.scss';

.product {
  width: 100%;
  height: 8rem;

  &__container {
    display: grid;
    grid-template-columns: auto 1fr;
  }

  &__thumbnail {
    width: 6rem;
    height: 9rem;
    background-size: contain;
    background-position: center center;
    background-repeat: no-repeat;
  }

  &__description {
    display: grid;
    justify-items: center;
    align-items: center;
    grid-template-columns: 1fr;
    grid-template-rows: 4rem;
    column-gap: 0.8rem;
    background-color: $color-tertiary;
  }

  &__text {
    // padding-left: 0.8rem;
    text-align: center;
    color: $color-white;
    font-size: 1rem;
    font-family: 'PublicSans-Bold';
  }

  &__arrow {
    color: $color-white;
    background-color: $color-tertiary;
    width: 100%;
    text-align: center;
    padding: 0.4rem;
    border: 8px solid $color-primary;
  }
}
</style>
