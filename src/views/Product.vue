<template>
  <h2>
    {{ category.name }}
  </h2>
  <p>
    {{ category.type }}
  </p>
  <div v-if="category.product_list">
    <div v-for="product in category.product_list" :key="product.id">
      <p>{{ product.sub_category }}</p>
      <span>{{ product.id }}</span>
      <img :src="product.thumbnail_image" alt="product.sub_category" />
      <img :src="product.image" alt="product.sub_category" />
    </div>
  </div>
</template>

<script>
import localDataBase from '@/data.json'

export default {
  computed: {
    categoryId() {
      return parseInt(this.$route.params.id)
    },
    category() {
      console.log(localDataBase.products.find(i => i.id === this.categoryId))
      return localDataBase.products.find(i => i.id === this.categoryId)
    }
  }
}
</script>

<style></style>
