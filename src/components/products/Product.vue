<template>
  <section class="product">
    <RouterLink to="#">
      <div class="product__thumbnail" :style="backgroundImageStyle">
        <p>
          {{ product.name }}<br />{{ product.type }}<br />{{
            product.type_continued
          }}
        </p>
      </div>
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
        to right bottom,
        rgba(7, 7, 131, 0.15),
        rgba(7, 7, 131, 0.45)
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
  height: 100%;

  &__thumbnail {
    width: 100%;
    height: 100%;
    background-size: cover;
    background-position: center center;
    background-repeat: no-repeat;

    & > p {
      font-size: $font-size-24;
      line-height: $line-height-36;
      text-align: center;
      color: #fff;
      height: 100%;
      display: flex;
      align-items: center;
      justify-content: center;
    }
  }
}
</style>
