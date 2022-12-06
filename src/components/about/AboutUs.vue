<template>
  <article class="about-us">
    <h2>
      Firma
    </h2>
    <p>
      Opis naszej wizji, naszych wartości, moze misji? Kim jesteśmy? Co robimy? Skąd taki pomysł?
    </p>
    <img
      src="/images/about/pexels-cottonbro-studio-6803523.jpeg"
      alt="all employees together"
    />
    <span>
      Lorem, ipsum dolor sit amet consectetur adipisicing elit. Temporibus
      impedit eligendi nisi aliquam quibusdam commodi voluptatibus, atque velit
      dolores. Sequi consequuntur quibusdam cupiditate aspernatur veniam totam
      in repudiandae, velit magni. Consequuntur sit minima mollitia repellat
      corporis, voluptate voluptatibus optio a ut ad nobis, numquam aliquam
      aspernatur culpa voluptas maxime dolores iure natus nulla aliquid. Vitae
      dignissimos dolores aliquam saepe! Perspiciatis? Commodi, rerum et, beatae
      consequuntur ad iure quidem distinctio fuga, nemo error qui! Ad nihil,
      obcaecati, modi at itaque culpa impedit nesciunt perspiciatis laudantium
      omnis labore iusto aperiam delectus? Eius?</span
    >
  </article>
</template>

<script>
export default {}
</script>

<style lang="scss">
@import '@/styles/scss/_general.scss';

.about-us {
  padding: 1.2rem;
  border-bottom: 1px solid rgba(0,0,0,0.15);

  h2,
  p,
  span,
  img {
    color: black;
    padding: 0.5rem 0;
  }

  h2 {
    font-size: $font-size-28;
  }
}
</style>
