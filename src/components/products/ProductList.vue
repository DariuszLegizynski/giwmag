<template>
  <ul class="products">
    <li v-for="product in this.products" :key="product.id">
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
          name: 'Regały',
          type: 'śrubowe',
          type_continued: '',
          thumbnailImage:
            '/images/jake-nebov-w9yUy-3Dhlw-unsplash.jpeg',
          product_list: [
            {
              id: 1,
              sub_category: 'ciężki',
              thumbnailImage: 'https://picsum.photos/150/200',
              Image: 'https://picsum.photos'
            },
            {
              id: 2,
              sub_category: 'metalowy',
              thumbnailImage: 'https://picsum.photos/150/200',
              Image: 'https://picsum.photos'
            },
            {
              id: 3,
              sub_category: 'wiórowy',
              thumbnailImage: 'https://picsum.photos/150/200',
              Image: 'https://picsum.photos'
            }
          ]
        },
        {
          id: 2,
          name: 'Regały',
          type: 'zaczepowe',
          type_continued: '',
          thumbnailImage: '/images/arno-senoner-yqu6tJkSQ_k-unsplash.jpeg',
          product_list: [
            {
              id: 4,
              sub_category: 'ciężki',
              thumbnailImage: 'https://picsum.photos/150/200',
              Image: 'https://picsum.photos'
            },
            {
              id: 5,
              sub_category: 'metalowy',
              thumbnailImage: 'https://picsum.photos/150/200',
              Image: 'https://picsum.photos'
            },
            {
              id: 6,
              sub_category: 'wiórowy',
              thumbnailImage: 'https://picsum.photos/150/200',
              Image: 'https://picsum.photos'
            }
          ]
        },
        {
          id: 3,
          name: 'Regały',
          type: 'wysokiego',
          type_continued: 'składowania',
          thumbnailImage: '/images/annie-spratt-A-G8FsDDQC0-unsplash.jpeg',
          product_list: [
            {
              id: 1,
              sub_category: 'ciężki',
              thumbnailImage: 'https://picsum.photos/150/200',
              Image: 'https://picsum.photos'
            },
            {
              id: 2,
              sub_category: 'metalowy',
              thumbnailImage: 'https://picsum.photos/150/200',
              Image: 'https://picsum.photos'
            },
            {
              id: 3,
              sub_category: 'wiórowy',
              thumbnailImage: 'https://picsum.photos/150/200',
              Image: 'https://picsum.photos'
            }
          ]
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
