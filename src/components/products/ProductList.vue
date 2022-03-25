<template>
  <ul class="products">
    <li class="products__list" v-for="product in products" :key="product.id">
      <Product isPortrait :product="product" />
    </li>
  </ul>
</template>

<script>
import Product from '@/components/products/Product.vue'
import localDataBase from '@/data.json'

export default {
  components: {
    Product
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
  grid-template-columns: 1fr;
  grid-auto-rows: minmax(10rem, 1fr);
  column-gap: 0.75rem;
  // row-gap: .75rem;

  &__list {
    width: 100%;

    &:not(:last-child){
    margin-bottom: 2rem;
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
