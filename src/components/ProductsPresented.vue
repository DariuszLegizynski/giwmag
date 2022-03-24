<template>
  <article id="products" class="products-presented">
    <h1>Nasze produkty</h1>
    <section class="products-presented__items">
      <ProductPresented title="Regały Śrubowe" :parallaxScrollSpeed="-0.1" />
      <ProductPresented title="Regały Zaczepowe" :parallaxScrollSpeed="-0.1" />
      <ProductPresented title="Regały Wysokiego Składowania" :parallaxScrollSpeed="-0.1" />
    </section>
    <button class="btn btn--highlight" @click="$router.push('/offer')">
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
    row-gap: 2rem;
  }
}

h1 {
  color: $color-primary;
}

.btn {
  margin: 0;
  border-radius: 0;
}
</style>
