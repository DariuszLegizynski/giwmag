<template>
  <article id="products" class="products-presented">
    <h1>Nasze produkty</h1>
    <section class="products-presented__items">
      <ProductPresented v-for="productTypes in myProducts.product_types.slice(0, limit)" :key="productTypes.id" :parallaxScrollSpeed="-0.1" :title="myProducts.name" :productTypes="productTypes" />
    </section>
    <button class="btn btn--highlight" @click="$router.push('/offer')">
      Pełna Oferta
    </button>
  </article>
</template>

<script>
import ProductPresented from '@/components/home/product/ProductPresented.vue'
import localDataBase from '@/data.json'

export default {
  components: {
    ProductPresented,
  },
  data(){
  return {
    limit: 3
  }
},
  computed: {
    myProducts() {
      return localDataBase.products[0]
    },
  },
}
</script>

<style lang="scss" scoped>
@import '@/styles/scss/_general.scss';

.products-presented {
  padding: 4rem 1rem;
  background-color: $color-white;

  &__items {
    margin: 1.6rem 0 2rem 0;
    display: grid;
    grid-template-columns: 1fr;
    row-gap: 2rem;
  }
}

h1 {
  color: $color-primary;
  font-size: $font-size-34;
}

.btn {
  margin: 0;
  border-radius: 0;
}
</style>
