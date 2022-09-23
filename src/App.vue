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
  background-color: hsl(0, 0%, 96%);
}
</style>
