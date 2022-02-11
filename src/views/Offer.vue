<template>
  <button @click="$router.push('/')" class="btn btn--back">Powrót</button>
  <div class="offer">
    <h1>Nasza Oferta</h1>
    <h3>Kategorie</h3>
    <div class="offer__container" v-for="item in 6" :key="item">
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
}

.offer {
  & > h1 {
    color: $color-black;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  & > h3 {
    color: $color-black;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  &__container {
    width: 100%;
    display: block;
    padding: 0 1rem 3.75rem 1rem;
  }
}
</style>
