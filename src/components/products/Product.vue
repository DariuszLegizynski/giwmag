<template>
  <ul class="products">
    <li class="products__item" v-for="item in 7" :key="item">
      <RouterLink to="#">
        <div class="products__thumbnail">
          <span>Regał</span>
        </div>
      </RouterLink>
    </li>
  </ul>
</template>

<script>
export default {}
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

  &__thumbnail {
    width: 100%;
    height: 100%;
    background-size: cover;
    background-image: linear-gradient(
        to right bottom,
        hsla(240, 18%, 3%, 0.35),
        hsla(240, 18%, 3%, 0.35)
      ),
      url('https://picsum.photos/150/200');
    background-position: center center;
    background-repeat: no-repeat;

    & > span {
      font-size: 1.5rem;
      letter-spacing: -0.01em;
      line-height: 1.3;
      text-align: center;
      color: #fff;
      height: 100%;
      display: flex;
      align-items: center;
      justify-content: center;
    }
  }
}
</style>
