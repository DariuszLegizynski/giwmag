<template>
  <Hero />
  <ProductsPresented />
  <ProductPros />
  <References />
  <Footer />
</template>

<script>
import Hero from '@/components/Hero.vue'
import ProductsPresented from '@/components/ProductsPresented.vue'
import ProductPros from '@/components/ProductPros.vue'
import References from '@/components/References.vue'
import Footer from '@/components/Footer.vue'

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
