<template>
  <section class="products-categories" @click="isExpanded = !isExpanded">
    <div class="products-categories__thumbnail" :style="backgroundImageStyle" />
    <div class="products-categories__description">
      <h3 class="products-categories__text">
        {{ productType.name }} {{ productType.type }}<br />{{
          productType.type_continued
        }}
      </h3>
      <div v-if="!isExpanded">&darr;</div>
      <div v-else>&uarr;</div>
    </div>
  </section>
  <section v-if="isExpanded">
    <RouterLink
      v-for="product in productType.product_list"
      :key="product.id"
      :to="`/offer/product/${product.id}`"
    >
      <ProductOverview :product="product" />
    </RouterLink>
  </section>
</template>

<script>
import ProductOverview from '@/components/offer/ProductOverview.vue'

export default {
  components: {
    ProductOverview,
  },
  props: {
    productType: {
      type: Object,
      default: () => ({}),
    },
  },
  data() {
    return {
      isExpanded: false,
    }
  },
  computed: {
    backgroundImageStyle() {
      return {
        backgroundImage: `url(${this.productType.thumbnail_image})`,
      }
    },
  },
  mounted() {
    console.log('productType: ', this.productType)
  },
}
</script>

<style lang="scss" scoped>
@import '@/styles/scss/_general.scss';

.products-categories {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(7rem, 1fr));
  -moz-column-gap: 0.4rem;
  column-gap: 0.4rem;
  width: 100%;
  height: 6rem;
  background-color: whitesmoke;

  &__thumbnail {
    background-size: cover;
    background-position: center center;
    background-repeat: no-repeat;
  }

  &__description {
    display: grid;
    justify-items: center;
    align-items: center;
    grid-template-columns: 1fr;
    grid-template-rows: 2fr 1fr;
    background-color: $color-white;
  }

  &__text {
    text-align: center;
    color: $color-black;
    margin-top: 1rem;
    font-family: 'PublicSans-SemiBold';
  }
}
</style>
