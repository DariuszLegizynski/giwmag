<template>
  <section class="product">
    <RouterLink to="#">
      <div class="product__thumbnail">
        <h3>{{ product.name }}</h3>
        <span>{{ product.type }} {{ product.type_continued }}</span>
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
    background-image: linear-gradient(
        to right bottom,
        hsla(240, 18%, 3%, 0.35),
        hsla(240, 18%, 3%, 0.35)
      ),
      url('https://picsum.photos/150/200');
    background-position: center center;
    background-repeat: no-repeat;

    & > span {
      font-size: 1.5rem;
      letter-spacing: -0.01em;
      line-height: 1.3;
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
