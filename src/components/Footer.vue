<template>
  <article class="footer">
    <section class="footer__section">
      <h1>Skontaktuj się z nami:</h1>
      <h3>Wi-Mag</h3>
      <p>ul. Wrocławska 12</p>
      <p>tel./fax 71 318-50-06</p>
      <p>e-mail: wimag@o2.pl</p>
    </section>
    <section class="footer__section">
      <h3>Formularz kontaktowy</h3>
      <form class="footer__form">
        <div class="footer__form__item">
          <label>Imię</label>
          <input />
        </div>
        <div class="footer__form__item">
          <label>Nazwisko</label>
          <input />
        </div>
        <div class="footer__form__item">
          <label>E-mail</label>
          <input required />
        </div>
        <div class="footer__form__item">
          <label>Telefon</label>
          <input />
        </div>
        <div class="footer__form__item item--message">
          <label>Wiadomość</label>
          <textarea required />
        </div>
      </form>
      <button class="btn btn--highlight">Wyślij</button>
    </section>
  </article>
</template>

<script>
export default {}
</script>

<style lang="scss" scoped>
@import '@/styles/scss/_general.scss';

.footer {
  padding: 2rem 0;
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: 12rem 1fr;
  align-items: center;
  background-color: $color-grey-light;

  &__section {
    display: grid;
    grid-template-columns: 1fr;
    align-content: center;
    justify-items: center;

    & > h1 {
      font-size: $font-size-28;
      margin-bottom: 1rem;
    }

    & > h3 {
      margin-bottom: 0.4rem;
    }

    & > * {
      color: $color-primary;
    }

    & .btn {
      border-radius: 0px;
      margin: 0;
    }

    & > * {
      color: $color-primary;
    }
  }

  &__form {
    padding: 1rem;

    &__item {
      display: grid;
      grid-template-columns: 1fr 8rem;
      align-items: center;
      justify-items: stretch;
      column-gap: 1rem;
    }
  }
}

.item--message {
  grid-template-columns: 1fr;
  grid-template-rows: auto auto;
  justify-items: center;
  margin-top: 0.8rem;

  & > textarea {
    width: 100%;
    height: 4rem;
  }
}

// @media only screen and (min-width: 640px) {
//   .footer {
//     display: flex;
//     flex-direction: column;
//     align-items: center;
//   }
// }
</style>
