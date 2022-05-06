<template>
  <article class="product-list">
    <ButtonBack />
    <section class="product-list__title">
      <h1>
        {{ title }}
      </h1>
      <p>
        {{ productType.type }}
      </p>
      <span v-if="productType.type_continued">
        {{ productType.type_continued }}
      </span>
    </section>
    <section
      class="product-list__name"
      v-for="product in productList"
      :key="product.id"
    >
      <h3>{{ product.name }}</h3>
      <img :src="product.image" alt="image of the product" />
      <RouterLink
        :to="`/offer/product/${product.id}`"
      >
        <ButtonBase :text="'Więcej'" />
      </RouterLink>
    </section>
    <ButtonBack />
  </article>
</template>

<script>
import localDataBase from '@/data.json'
import ButtonBase from '@/components/base/ButtonBase.vue'
import ButtonBack from '@/components/base/ButtonBack.vue'

export default {
  components: {
    ButtonBase,
    ButtonBack
  },
  data() {
    return {
      selectedImage: 0,
    }
  },
  computed: {
    productTypeId() {
      return parseInt(this.$route.params.id)
    },
    title() {
      return localDataBase.products[0].name
    },
    productType() {
      return localDataBase.products[0].product_types.find(
        i => i.id === this.productTypeId
      )
    },
    productList() {
      console.log(this.productType.product_list)
      return this.productType.product_list
    },
  },
}
</script>

<style lang="scss" scoped>
@import '@/styles/scss/_general.scss';
.product-list {
  &__title {
    margin: 1rem 0.4rem;
    & > * {
      color: $color-primary;
    }
    & p,
    & span {
      margin-left: 1rem;
      font-size: $font-size-26;
      line-height: $line-height-26;
    }
    & span {
      font-family: 'Montserrat-Regular';
      letter-spacing: 0;
      margin-left: 2rem;
    }
  }
  &__name {
    margin: 2rem 0.4rem;
    & > h3 {
      margin: 0.4rem;
      color: $color-primary;
    }
  }
}
</style>
