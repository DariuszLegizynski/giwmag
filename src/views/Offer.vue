<template>
  <button @click="$router.push('/')" class="btn btn--back">&lt; Powrót</button>
  <div class="offer">
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

.btn--back {
  margin: 0;
  padding: 1.2rem 0 0 0;
}

.offer {
  & > h2 {
    color: $color-primary;
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 0.8rem 0;
  }

  &__container {
    width: 100%;
    display: block;
    padding: 0 0.75rem 3.75rem 0.75rem;
  }
}
</style>
