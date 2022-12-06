<template>
  <article class="team">
    <header>
      <h2>Nasz zespół</h2>
      <IconBase
        viewBox="0 0 32 32"
        :width="32"
        :height="32"
        iconColor="hsl(240, 90%, 27%)">
          <IconPlus />
      </IconBase>
      <IconBase
        viewBox="0 0 32 32"
        :width="32"
        :height="32"
        iconColor="hsl(240, 90%, 27%)">
          <IconMinus />
      </IconBase>
    </header>

    <Employee
      imageSrc="/images/about/people/luisa-peter-7Xp9wDCxivc-unsplash.jpeg"
    />
    <Employee
      imageSrc="/images/about/people/pieter-van-noorden-cjSUZMA2iW8-unsplash.jpeg"
    />
  </article>
</template>

<script>
import Employee from '@/components/about/Employee'
import IconBase from '@/components/base/IconBase.vue'
import IconPlus from '@/components/icons/IconPlus.vue'
import IconMinus from '@/components/icons/IconMinus.vue'

export default {
  components: {
    Employee,
    IconBase,
    IconPlus,
    IconMinus
  },
}
</script>

<style lang="scss">
@import '@/styles/scss/_general.scss';

.team {
  padding: 1.2rem;
  border-bottom: 1px solid rgba(0, 0, 0, 0.15);

  h2 {
    color: black;
    padding: 0.5rem 0;
    font-size: $font-size-28;
  }

  header {
    display: flex;
    
  }
}
</style>
