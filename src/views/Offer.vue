<template>
  <div class="offer">
    <button @click="$router.push('/')" class="btn btn--back">
      &lt; Powrót
    </button>
    <h2>Nasza Oferta</h2>
    <div class="offer__container">
      <ProductList />
    </div>
  </div>
</template>

<script>
import ProductList from '@/components/products/ProductList.vue'
export default {
  components: {
    ProductList
  }
}
</script>

<style lang="scss" scoped>
@import '@/styles/scss/_general.scss';

.offer {
  padding-top: 1rem;

  & .btn {
    padding: 0.4rem;
  }

  & .btn--back {
    margin: 0;
  }

  & > h2 {
    color: $color-primary;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 0.8rem 0;
  }

  &__container {
    width: 100%;
    display: block;
    padding: 1rem 0.75rem 4.75rem 0.75rem;
  }
}
</style>
