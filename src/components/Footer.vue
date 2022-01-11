<template>
  <article class="footer observer">
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
          <input type="text" placeholder="Jan" required />
        </div>
        <div class="footer__form__item">
          <label>Nazwisko</label>
          <input type="text" placeholder="Przykład" />
        </div>
        <div class="footer__form__item">
          <label>E-mail</label>
          <input type="email" placeholder="jan.przyklad@email.com" required />
        </div>
        <div class="footer__form__item">
          <label>Telefon</label>
          <input type="number" placeholder="799 123 123" />
        </div>
        <div class="footer__form__item item--message">
          <label>Wiadomość</label>
          <textarea placeholder="Tekst wiadomości" required />
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
  padding-top: 2rem;
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: 12rem 1fr;
  align-items: center;
  background-color: $color-primary;

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
      color: $color-white;
    }

    & input,
    & textarea {
      padding: 0.2rem;
    }

    & .btn {
      border-radius: 0px;
      margin: 0;
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
      margin-bottom: 0.4rem;

      & > label {
        font-size: $font-size-16;
        line-height: $line-height-20;
      }
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
</style>
