<template>
  <Hero />
  <ProductPros />
  <References />
  <ProductsPresented />
  <Footer />
</template>

<script>
import Hero from '@/components/Hero.vue'
import ProductPros from '@/components/ProductPros.vue'
import References from '@/components/References.vue'
import ProductsPresented from '@/components/ProductsPresented.vue'
import Footer from '@/components/Footer.vue'

export default {
  name: 'App',
  components: {
    Hero,

    ProductPros,
    References,
    ProductsPresented,
    Footer
  }
}
</script>

<style lang="scss">
@import '@/styles/scss/_general.scss';
</style>
