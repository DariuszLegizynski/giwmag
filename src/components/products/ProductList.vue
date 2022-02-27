<template>
  <ul class="products-alt">
    <li class="products__list" v-for="product in this.productsAlternative" :key="product.id">
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
          thumbnailImage: '/images/portrait/jake-nebov-w9yUy-3Dhlw-unsplash.jpeg',
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
          thumbnailImage: '/images/portrait/arno-senoner-yqu6tJkSQ_k-unsplash.jpeg',
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
          thumbnailImage: '/images/portrait/annie-spratt-A-G8FsDDQC0-unsplash.jpeg',
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
      ],
      productsAlternative: [
        {
          id: 1,
          name: 'Regały',
          type: 'śrubowe',
          type_continued: '',
          thumbnailImage: '/images/landscape/pexels-tiger-lily-4483610.jpeg',
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
          thumbnailImage: '/images/landscape/sikai-gu-vzdFzNNgt1k-unsplash.jpeg',
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
          thumbnailImage: '/images/landscape/chuttersnap-JWaXthlA9Cc-unsplash.jpeg',
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
