<template>
  <article class="offer">
    <ButtonBack />
    <h2>Regały</h2>
    <p>Nasze Regały to wytrzymałe i banalnie proste do złozonia konstrukcje. Lata doświadczeń pozwoliły nam dopaowsać je do potrzeb naszych klientów.</p>
    <div class="offer__container">
      <ProductList :products="getProducts" />
    </div>
    <ButtonBack />
  </article>
</template>

<script>
import ProductList from '@/components/offer/ProductList.vue'
import ButtonBack from '@/components/base/ButtonBack.vue'
import dataBase from '@/data/data.json'

export default {
  components: {
    ProductList,
    ButtonBack,
  },
  computed: {
    getProducts() {
      console.log("dataBase: ", dataBase)
      return dataBase
    }
  }
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

  & > h2, p {
    color: $color-primary;
    display: flex;
    align-items: center;
    justify-content: left;
    padding: 0.8rem;
  }

  & > p {
    font-size: $font-size-16;
  }

  &__container {
    width: 100%;
    display: block;
    padding: 1rem 0.75rem;
  }
}
</style>
