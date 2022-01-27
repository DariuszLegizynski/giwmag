<template>
  <article class="references">
    <h1>Dotychczas zaufali nam:</h1>
    <section class="references__companies">
      <img
        class="references__logo"
        src="/images/logo/Ikea_logo.svg"
        alt="logo of ikea"
        data-aos="fade-up"
        data-aos-offset="300"
        data-aos-easing="ease-in-sine"
      />
      <img
        class="references__logo"
        src="/images/logo/Leroy_Merlin.svg"
        alt="logo Leroy Merlin"
        data-aos="fade-up"
        data-aos-offset="300"
        data-aos-easing="ease-in-sine"
      />
      <img
        class="references__logo logo--mrowka"
        src="/images/logo/PSB-Mrowka.png"
        alt="logo PSB Mrowka"
        data-aos="fade-up"
        data-aos-offset="400"
        data-aos-easing="ease-in-sine"
      />
      <img
        class="references__logo"
        src="/images/logo/Castorama_Logo.svg"
        alt="logo Castorama"
        data-aos="fade-up"
        data-aos-offset="500"
        data-aos-easing="ease-in-sine"
      />
      <img
        class="references__logo"
        src="/images/logo/bricoman_logo_3.png"
        alt="logo Bricoman"
        data-aos="fade-up"
        data-aos-offset="500"
        data-aos-easing="ease-in-sine"
      />
    </section>
  </article>
</template>

<script>
import AOS from 'aos'
import 'aos/dist/aos.css'

export default {
  created() {
    AOS.init()
  }
}
</script>

<style lang="scss" scoped>
@import '@/styles/scss/_general.scss';

.references {
  margin: 4rem 0;
  display: flex;
  flex-direction: column;
  align-items: center;

  & > h1 {
    margin-bottom: 2rem;
    padding: 0.4rem;
    color: $color-primary;
    text-align: center;
  }

  &__companies {
    display: grid;
    grid-template-columns: 1fr;
    align-items: center;
    justify-items: center;
    row-gap: 4rem;
  }

  &__logo {
    width: 8rem;
    object-fit: contain;
  }
}
.logo--mrowka {
  width: 4rem;
}

@media only screen and (min-width: 640px) {
  .references {
    &__companies {
      display: grid;
      grid-template-columns: 1fr 1fr;
      align-items: center;
      justify-items: center;
      column-gap: 4rem;
      row-gap: 4rem;
    }

    &__logo:last-child {
      grid-column-start: span 2;
    }
  }
}
</style>
