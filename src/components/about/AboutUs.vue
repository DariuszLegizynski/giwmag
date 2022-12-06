<template>
  <article class="about-us">
    <header @click.stop="toggleDescription">
      <h2>
        Firma
      </h2>
      <IconBase
        viewBox="0 0 48 48"
        :width="48"
        :height="48"
        iconColor="hsl(240, 90%, 27%)"
      >
        <IconMinus v-if="showDescription" />
        <IconPlus v-else />
      </IconBase>
    </header>
    <section class="description" :class="{ showDescription }">
      <p>
        Opis naszej wizji, naszych wartości, moze misji? Kim jesteśmy? Co
        robimy? Skąd taki pomysł?
      </p>
      <img
        src="/images/about/pexels-cottonbro-studio-6803523.jpeg"
        alt="all employees together"
      />
      <span>
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Temporibus
        impedit eligendi nisi aliquam quibusdam commodi voluptatibus, atque
        velit dolores. Sequi consequuntur quibusdam cupiditate aspernatur veniam
        totam in repudiandae, velit magni. Consequuntur sit minima mollitia
        repellat corporis, voluptate voluptatibus optio a ut ad nobis, numquam
        aliquam aspernatur culpa voluptas maxime dolores iure natus nulla
        aliquid. Vitae dignissimos dolores aliquam saepe! Perspiciatis? Commodi,
        rerum et, beatae consequuntur ad iure quidem distinctio fuga, nemo error
        qui! Ad nihil, obcaecati, modi at itaque culpa impedit nesciunt
        perspiciatis laudantium omnis labore iusto aperiam delectus? Eius?</span
      >
    </section>
  </article>
</template>

<script>
import IconBase from '@/components/base/IconBase.vue'
import IconPlus from '@/components/icons/IconPlus.vue'
import IconMinus from '@/components/icons/IconMinus.vue'

export default {
  components: {
    IconBase,
    IconPlus,
    IconMinus,
  },
  data() {
    return {
      showDescription: false,
    }
  },
  methods: {
    toggleDescription() {
      this.showDescription = !this.showDescription
    },
  },
}
</script>

<style lang="scss">
@import '@/styles/scss/_general.scss';

.about-us {
  padding: 1.2rem;
  border-bottom: 1px solid rgba(0, 0, 0, 0.15);

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
  .description {
    height: 0;
    overflow: hidden;
  }
  .description.showDescription {
    height: auto;
  }
}
</style>
