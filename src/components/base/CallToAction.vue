<template>
  <div class="cta__btns">
    <button class="btn btn--highlight" @click="$router.push('/home#footer')">
      Zapytaj nas
    </button>
    <button
      v-if="isOffer"
      class="btn btn--default-reverse"
      @click="$router.push('/home#products')"
    >
      Nasza oferta
    </button>
  </div>
</template>

<script>
export default {
  props: {
    isOffer: {
      type: Boolean,
      default: false,
    },
  },
}
</script>

<style lang="scss" scoped>
@import '@/styles/scss/_general.scss';

.cta__btns {
  display: flex;
  flex-direction: column;
  align-items: center;
}
</style>
