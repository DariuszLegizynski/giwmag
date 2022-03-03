<template>
  <section class="product">
    <RouterLink to="#">
      <div class="product__thumbnail" :style="backgroundImageStyle" />
      <p class="product__description">
        {{ product.name }} {{ product.type }}<br />{{
          product.type_continued
        }}
      </p>
    </RouterLink>
  </section>
</template>

<script>
export default {
  props: {
    product: {
      type: Object
    }
  },
  computed: {
    backgroundImageStyle() {
      return {
        backgroundImage: `linear-gradient(
        to bottom,
        transparent 70%,
        hsla(240, 90%, 27%, 0.4)
), url(${this.product.thumbnailImage})`
      }
    }
  },
  mounted() {
    console.log(this.product)
  }
}
</script>

<style lang="scss" scoped>
@import '@/styles/scss/_general.scss';

.product {
  width: 100%;
  height: 10rem;

  &__thumbnail {
    width: 100%;
    height: 100%;
    background-size: cover;
    background-position: center center;
    background-repeat: no-repeat;
  }

  &__description {
    width: 100%;
    color: $color-white;
    padding: 0.8rem 0 0.8rem 0.4rem;
    background-color: $color-primary;
    text-align:center;
  }
}
</style>
