<template>
  <article class="references">
    <h1>Dotychczas zaufali nam:</h1>
    <section class="references__companies">
      <img
        class="references__logo"
        src="/images/logo/Ikea_logo.svg"
        alt="logo of ikea"
      />
      <img
        class="references__logo"
        src="/images/logo/Leroy_Merlin.svg"
        alt="logo Leroy Merlin"
      />
      <img
        class="references__logo logo--mrowka"
        src="/images/logo/PSB-Mrowka.png"
        alt="logo PSB Mrowka"
      />
      <img
        class="references__logo"
        src="/images/logo/Castorama_Logo.svg"
        alt="logo Castorama"
      />
      <img
        class="references__logo"
        src="/images/logo/bricoman_logo_3.png"
        alt="logo Bricoman"
      />
    </section>
  </article>
</template>

<script>
export default {}
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
