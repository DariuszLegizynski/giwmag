<template>
  <article id="products" class="products-presented">
    <h1>Postaw na<br />nasze produkty</h1>
    <section class="products-presented__items">
      <ProductPresented :parallaxScrollSpeed="-0.1" />
      <ProductPresented :parallaxScrollSpeed="-0.1" />
      <ProductPresented :parallaxScrollSpeed="-0.1" />
    </section>
    <button class="btn btn--default" @click="$router.push('/offer')">
      Pełna Oferta
    </button>
  </article>
</template>

<script>
import ProductPresented from '@/components/products/ProductPresented.vue'
export default {
  components: {
    ProductPresented,
  },
}
</script>

<style lang="scss" scoped>
@import '@/styles/scss/_general.scss';

.products-presented {
  padding: 4rem 1rem;
  background-color: $color-secondary;

  &__items {
    margin: 1.6rem 0 2rem 0;
    display: grid;
    grid-template-columns: 1fr;
    row-gap: 4rem;
  }
}
h1 {
  color: $color-black;
}

.btn {
  margin: 0;
  border-radius: 0;
}
</style>
