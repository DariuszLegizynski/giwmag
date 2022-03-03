<template>
  <Header />
  <RouterView />
</template>

<script>
import Header from '@/components/Header.vue'

export default {
  name: 'App',
  components: {
    Header
  }
}
</script>

<style>
#app {
  background-color: #c2d1ff;
}
</style>
