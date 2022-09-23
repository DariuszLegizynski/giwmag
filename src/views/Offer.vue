<template>
  <article class="offer">
    <ButtonBack />
    <h2>Nasza Oferta</h2>
    <div class="offer__container">
      <ProductList />
    </div>
    <ButtonBack />
  </article>
</template>

<script>
import ProductList from '@/components/offer/ProductList.vue'
import ButtonBack from '@/components/base/ButtonBack.vue'

export default {
  components: {
    ProductList,
    ButtonBack
  },
}
</script>

<style lang="scss" scoped>
@import '@/styles/scss/_general.scss';

.offer {
  padding-top: 1rem;
  background-color: $color-white;

  & .btn {
    padding: 0.4rem;
  }

  & .btn--back {
    margin: 0;
  }

  & .btn--last {
    padding-bottom: 1rem;
  }

  & > h2 {
    color: $color-primary;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 0.8rem 0;
  }

  &__container {
    width: 100%;
    display: block;
    padding: 1rem 0.75rem;
  }
}
</style>
