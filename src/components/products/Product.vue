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
        backgroundImage: `
      url(${this.product.thumbnailImage})`
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
    // border: 2px solid $color-primary;

    & > p {
      padding-left: 0.3rem;
      font-size: $font-size-24;
      line-height: $line-height-36;
      color: #fff;
      height: 100%;
      display: flex;
      align-items: flex-start;
      justify-content: flex-start;
    }
  }

  &__description {
    width: 100%;
    color: $color-white;
    padding: 0.4rem 0 0.4rem 0.4rem;
    background-color: $color-primary;
    text-align:center;
  }
}
</style>
