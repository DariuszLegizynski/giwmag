<template>
  <article class="company">
    <header @click.stop="toggleDescription">
      <h2>Historia Firmy</h2>
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
        Historia firmy, to przede wszystkim historia naszej rodziny. Opowieść
        przekazywana z dziada pradziada z całkowitą dbałością o szczegóły. I
        takie tam.
      </p>
      <img
        src="/images/about/pexels-pixabay-269077.jpeg"
        alt="happy workers cheering"
      />
      <span>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nostrum
        similique odit, quaerat magni iure et, recusandae, maiores aut vel sequi
        nihil quis labore eos. Maxime non quia fugiat animi voluptas! Nostrum
        necessitatibus non iste fugit sapiente distinctio quibusdam molestias ad
        libero blanditiis, reiciendis amet repellendus dolore, minus accusantium
        optio voluptate tempora. Pariatur animi in beatae autem soluta
        repudiandae, nobis at? Nihil error delectus possimus, aliquid cum
        deleniti autem quibusdam hic? Magnam mollitia a sapiente aperiam ipsum
        nemo accusantium totam alias repellendus voluptatum rerum ea atque
        aliquid, vitae quas vero iusto.
      </span>
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

.company {
  padding: 1.2rem;
  border-bottom: 1px solid rgba(0, 0, 0, 0.15);

  h2,
  p,
  span {
    color: black;
    padding: 0.5rem 0;
  }
  img {
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
