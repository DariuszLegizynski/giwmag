<template>
  <section class="products-categories" @click="isExpanded = !isExpanded">
    <div
      class="products-categories__thumbnail"
      :style="backgroundImageStyle"
    />
    <div class="products-categories__description">
      <p class="products-categories__text">
        {{ product.name }} {{ product.type }}<br />{{ product.type_continued }}
      </p>
      <div>\/</div>
    </div>
  </section>
  <section v-if="isExpanded">
    <RouterLink :to="`/offer/product/${product.id}`" v-for="product in product.product_list" :key="product.id">
      <ProductOverview :product="product"/>
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
    product: {
      type: Object,
      default: () => ({}),
    },
  },
  data() {
    return {
      isExpanded: false
    }
  },
  computed: {
    backgroundImageStyle() {
      return {
        backgroundImage: `url(${this.product.thumbnail_image})`,
      }
    },
  },
}
</script>

<style lang="scss" scoped>
@import '@/styles/scss/_general.scss';

.products-categories {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(7rem, 1fr));
  column-gap: .4rem;
  height: 100%;
  width: 100%;

  &__thumbnail {
    background-size: cover;
    background-position: center center;
    background-repeat: no-repeat;
  }

  &__description {
    display: grid;
    justify-items: center;
    align-items: stretch;
    grid-template-columns: 1fr;
    grid-template-rows: 2fr 1fr;
    background-color: $color-white;
  }

  &__text {
    text-align: center;
    color: $color-black;
    font-size: $font-size-16;
    font-family: 'PublicSans-SemiBold';
  }
}
</style>
