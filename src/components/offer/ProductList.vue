<template>
  <ul class="products">
    <li class="products__list" v-for="product in products" :key="product.id">
      <ProductsCategories :product="product" />
    </li>
  </ul>
</template>

<script>
import ProductsCategories from '@/components/offer/ProductsCategories.vue'
import localDataBase from '@/data.json'

export default {
  components: {
    ProductsCategories,
  },
  computed: {
    products() {
      console.log(localDataBase.products)
      return localDataBase.products
    },
  },
}
</script>

<style lang="scss" scoped>
@import '@/styles/scss/_general.scss';

.products {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(14rem, 1fr));
  grid-auto-rows: minmax(6rem, 1fr);
  column-gap: 0.75rem;
  row-gap: 0.75rem;

  &__list {
    width: 100%;
    height: 100%;
  }
}
</style>
