<template>
  <article class="product-pros">
    <h2>Postaw na nasze regały</h2>
    <section class="product-pros__items">
      <div class="product-pros__item">
        <IconBase viewBox="0 0 512 512" :width="96" :height="96">
          <IconQuality />
        </IconBase>
        <span><strong>Najwyższa jakość</strong> wykonania.</span>
      </div>
      <div class="product-pros__item">
        <IconBase viewBox="0 0 64 64" :width="96" :height="96">
          <IconNorm />
        </IconBase>
        <span>Spełniamy normy <strong>PN-78 M-78320.</strong></span>
      </div>
      <div class="product-pros__item">
        <IconBase viewBox="0 0 469.567 469.567" :width="96" :height="96">
          <IconStrong />
        </IconBase>
        <span>
          <strong>Sprawdzone produkty</strong> - próby wytrzymałościowe
          potwierdzają deklarowane obciążenie.
        </span>
      </div>
      <div class="product-pros__item">
        <IconBase viewBox="0 0 50 50" :width="96" :height="96">
          <IconGear />
        </IconBase>
        <span
          >Proste w <strong>montażu</strong> i <strong>demontażu.</strong></span
        >
      </div>
      <div class="product-pros__item">
        <IconBase viewBox="0 0 512.853 512.853" :width="96" :height="96">
          <IconTruck />
        </IconBase>
        <span>Łatwy i bezproblemowy <strong>transport.</strong></span>
      </div>
    </section>
  </article>
</template>

<script>
import IconBase from '@/components/base/IconBase.vue'
import IconQuality from '@/components/icons/IconQuality.vue'
import IconNorm from '@/components/icons/IconNorm.vue'
import IconStrong from '@/components/icons/IconStrong.vue'
import IconGear from '@/components/icons/IconGear.vue'
import IconTruck from '@/components/icons/IconTruck.vue'

export default {
  components: {
    IconBase,
    IconQuality,
    IconNorm,
    IconStrong,
    IconGear,
    IconTruck
  }
}
</script>

<style lang="scss" scoped>
@import '@/styles/scss/_general.scss';

.product-pros {
  display: flex;
  flex-direction: column;
  align-items: center;

  & > h2 {
    color: $color-primary;
    margin-bottom: 1.2rem;
  }

  &__items {
    display: grid;
    grid-template-rows: repeat(5, 10rem);
    row-gap: 1rem;
    background-color: yellow;
  }

  &__item {
    display: grid;
    grid-template-rows: auto 8rem;
    row-gap: 1rem;
    background-color: orangered;
  }
}
</style>
