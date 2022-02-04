<template>
  <button @click="$router.push('/')" class="btn btn--default">Powrót</button>
  <div class="offer">
    <h1>Nasza Oferta</h1>
    <div class="offer__container">
      <Products />
      <Products />
      <Products />
      <Products />
    </div>
  </div>
</template>

<script>
import Products from '@/components/products/Products.vue'
export default {
  components: {
    Products
  }
}
</script>

<style lang="scss" scoped>
@import '@/styles/scss/_general.scss';

.offer {
  & > h1 {
    color: $color-black;
  }

  &__container {
    width: 100%;
    display: block;
    padding: 0 1rem 3.75rem 1rem;
  }
}
</style>
