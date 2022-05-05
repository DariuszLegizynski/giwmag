<template>
  <Hero />
  <ProductsPresented />
  <ProductPros />
  <References />
  <Footer />
</template>

<script>
import Hero from '@/components/home/Hero.vue'
import ProductsPresented from '@/components/home/ProductsPresented.vue'
import ProductPros from '@/components/home/ProductPros.vue'
import References from '@/components/home/References.vue'
import Footer from '@/components/home/Footer.vue'

export default {
  name: 'App',
  components: {
    Hero,
    ProductsPresented,
    ProductPros,
    References,
    Footer
  }
}
</script>

<style lang="scss">
@import '@/styles/scss/_general.scss';
</style>
