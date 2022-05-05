<template>
  <article id="products" class="products-presented">
    <h1>Nasze produkty</h1>
    <section class="products-presented__items">
      <ProductPresented v-for="product in products.product_types.slice(0, limit)" :key="product.id" :parallaxScrollSpeed="-0.1" :title="products.name" :product="product" />
    </section>
    <button class="btn btn--highlight" @click="$router.push('/offer')">
      Pełna Oferta
    </button>
  </article>
</template>

<script>
import ProductPresented from '@/components/home/ProductPresented.vue'
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
    products() {
      console.log(localDataBase.products[0])
      return localDataBase.products[0]
    },
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
  font-size: $font-size-34;
}

.btn {
  margin: 0;
  border-radius: 0;
}
</style>
