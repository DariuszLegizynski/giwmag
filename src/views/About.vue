<template>
  <AboutUs />
  <Team />
  <CompanyHistory />
  <Footer />
</template>

<script>
import AboutUs from '@/components/about/AboutUs'
import Team from '@/components/about/Team'
import CompanyHistory from '@/components/about/CompanyHistory'
import Footer from '@/components/home/Footer'

export default {
  name: 'App',
  components: {
    AboutUs,
    Team,
    CompanyHistory,
    Footer
  }
}
</script>
