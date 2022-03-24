<template>
  <div class="cta__btns">
    <button class="btn btn--highlight">
      <a href="#footer">
        Zapytaj nas
      </a>
    </button>
    <button class="btn btn--default-reverse">
      <a href="#products">Nasza oferta</a>
    </button>
  </div>
</template>

<script>
export default {}
</script>

<style lang="scss" scoped>
@import '@/styles/scss/_general.scss';

.cta__btns {
  display: flex;
  flex-direction: column;
  align-items: center;
}
</style>
