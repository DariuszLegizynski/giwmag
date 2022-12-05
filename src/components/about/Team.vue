<template>
  <article class="about">
    <h2>Nasz zespół</h2>
    <Employee imageSrc="/images/about/people/luisa-peter-7Xp9wDCxivc-unsplash.jpeg" />
    <Employee imageSrc="/images/about/people/pieter-van-noorden-cjSUZMA2iW8-unsplash.jpeg" />
  </article>
</template>

<script>
import Employee from '@/components/about/Employee'

export default {
  components: {
    Employee,
  },
}
</script>

<style lang="scss">
@import '@/styles/scss/_general.scss';

.about {
  padding: 1.2rem;

  h2 {
    color: black;
    padding: 0.5rem 0;
  }
}
</style>
