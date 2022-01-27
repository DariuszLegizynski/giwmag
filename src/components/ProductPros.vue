<template>
  <article class="product-pros">
    <h2>Postaw na nasze regały:</h2>
    <section class="product-pros__items">
      <div
        class="product-pros__item"
        data-aos="fade-right"
        data-aos-easing="ease-in-sine"
      >
        <IconBase
          viewBox="0 0 512 512"
          :width="64"
          :height="64"
          iconColor="hsl(240, 90%, 27%)"
        >
          <IconQuality />
        </IconBase>
        <span
          ><strong>Najwyższa jakość<br /></strong>wykonania.</span
        >
      </div>
      <div
        class="product-pros__item"
        data-aos="fade-right"
        data-aos-easing="ease-in-sine"
      >
        <IconBase
          viewBox="0 0 64 64"
          :width="64"
          :height="64"
          iconColor="hsl(240, 90%, 27%)"
        >
          <IconNorm />
        </IconBase>
        <span>Spełniamy normę<br /><strong>PN-78 M-78320.</strong></span>
      </div>
      <div
        class="product-pros__item"
        data-aos="fade-right"
        data-aos-easing="ease-in-sine"
      >
        <IconBase
          viewBox="0 0 469.567 469.567"
          :width="64"
          :height="64"
          iconColor="hsl(240, 90%, 27%)"
        >
          <IconStrong />
        </IconBase>
        <span>
          <strong>Sprawdzone produkty</strong> - próby wytrzymałościowe
          potwierdzają deklarowane obciążenie.
        </span>
      </div>
      <div
        class="product-pros__item"
        data-aos="fade-right"
        data-aos-easing="ease-in-sine"
      >
        <IconBase
          viewBox="0 0 50 50"
          :width="64"
          :height="64"
          iconColor="hsl(240, 90%, 27%)"
        >
          <IconGear />
        </IconBase>
        <span
          >Proste w<br /><strong>montażu</strong> i
          <strong>demontażu.</strong></span
        >
      </div>
      <div
        class="product-pros__item"
        data-aos="fade-right"
        data-aos-easing="ease-in-sine"
      >
        <IconBase
          viewBox="0 0 512.853 512.853"
          :width="64"
          :height="64"
          iconColor="hsl(240, 90%, 27%)"
        >
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
  margin: 4rem 0;

  & > h2 {
    color: $color-primary;
    margin-bottom: 1.2rem;
  }

  &__items {
    display: grid;
    grid-template-rows: repeat(5, 1fr);
    row-gap: 0.6rem;
  }

  &__item {
    display: grid;
    grid-template-columns: 1fr 2fr;
    justify-items: start;
    align-items: center;
    margin: 0 1.6rem;

    & > span {
      color: $color-black;
    }
  }
}
</style>
