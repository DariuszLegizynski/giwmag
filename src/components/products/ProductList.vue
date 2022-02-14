<template>
  <ul class="products">
    <li
      class="products__item"
      v-for="product in this.products"
      :key="product.id"
    >
      <Product :product="product" />
    </li>
  </ul>
</template>

<script>
import Product from '@/components/products/Product.vue'

export default {
  components: {
    Product
  },
  data() {
    return {
      products: [
        {
          id: 1,
          category: 'półkowy',
          sub_category: 'śrubowy',
          title: 'cięźki',
          thumbnailImage: 'https://picsum.photos/150/200',
          Image: 'https://picsum.photos'
        },
        {
          id: 2,
          category: 'półkowy',
          sub_category: 'śrubowy',
          title: 'metalowy',
          thumbnailImage: 'https://picsum.photos/150/200',
          Image: 'https://picsum.photos'
        },
        {
          id: 3,
          category: 'półkowy',
          sub_category: 'śrubowy',
          title: 'wiórowy',
          thumbnailImage: 'https://picsum.photos/150/200',
          Image: 'https://picsum.photos'
        },
        {
          id: 4,
          category: 'półkowy',
          sub_category: 'zaczepowy',
          title: 'cięźki',
          thumbnailImage: 'https://picsum.photos/150/200',
          Image: 'https://picsum.photos'
        },
        {
          id: 5,
          category: 'półkowy',
          sub_category: 'zaczepowy',
          title: 'metalowy',
          thumbnailImage: 'https://picsum.photos/150/200',
          Image: 'https://picsum.photos'
        },
        {
          id: 6,
          category: 'półkowy',
          sub_category: 'zaczepowy',
          title: 'wiórowy',
          thumbnailImage: 'https://picsum.photos/150/200',
          Image: 'https://picsum.photos'
        },
        {
          id: 7,
          category: 'wysokiego',
          sub_category: '',
          title: 'składowania',
          thumbnailImage: 'https://picsum.photos/150/200',
          Image: 'https://picsum.photos'
        }
      ]
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
  column-gap: 1rem;
  row-gap: 1rem;
}
</style>
