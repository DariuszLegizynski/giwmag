<template>
  <ul class="products-alt">
    <li class="products__list" v-for="product in products" :key="product.id">
      <Products :product="product" />
    </li>
  </ul>
</template>

<script>
import Products from '@/components/products/Products.vue'
import localDataBase from '@/data.json'

export default {
  components: {
    Products
  },
  computed: {
    products() {
      return localDataBase.products
    }
  }
}
</script>

<style lang="scss" scoped>
@import '@/styles/scss/_general.scss';

.products {
  display: -webkit-grid;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(6rem, 1fr));
  grid-auto-rows: minmax(10rem, 1fr);
  column-gap: 0.75rem;
  row-gap: 3.5rem;

  &__list {
    width: 100%;

    &:not(:last-child){
    margin-bottom: 6rem;
  }
  }
}

.products-alt {
  display: -webkit-flex;
  display: flex;
  flex-direction: column;
  align-items: center;

  
}
</style>
