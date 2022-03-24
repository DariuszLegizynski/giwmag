<template>
  <h2>
    {{ category.name }}
  </h2>
  <p>
    {{ category.type }}
  </p>
  <p>
    {{ category.type_continued }}
  </p>
  <section v-if="category.product_list">
    <div
      class="gallery"
      v-for="(product, index) in category.product_list"
      :key="product.id"
    >
      <p>{{ product.sub_category }}</p>
      <div class="gallery__big">
        <img :src="product.image_1" :alt="product.sub_category" />
      </div>
      <div class="gallery__small">
        <img
          :src="product.thumbnail_image_1"
          :alt="product.sub_category"
          @click="toggleImg(index)"
        />
        <img
          :src="product.thumbnail_image_2"
          :alt="product.sub_category"
          @click="toggleImg(index)"
        />
        <img
          :src="product.thumbnail_image_3"
          :alt="product.sub_category"
          @click="toggleImg(index)"
        />
        <img
          :src="product.thumbnail_image_4"
          :alt="product.sub_category"
          @click="toggleImg(index)"
        />
      </div>
    </div>
  </section>
</template>

<script>
import localDataBase from '@/data.json'

export default {
  data() {
    return {
      selectedImage: 0
    }
  },
  computed: {
    categoryId() {
      return parseInt(this.$route.params.id)
    },
    category() {
      console.log(localDataBase.products.find(i => i.id === this.categoryId))
      return localDataBase.products.find(i => i.id === this.categoryId)
    },
    image() {
            return console.log(this.category)
        },
  },
  methods: {
    toggleImg(index) {
      console.log(index)
      this.selectedImage = index
      
    },
  }
}
</script>

<style lang="scss" scoped>
@import '@/styles/scss/_general.scss';

.gallery {
  display: grid;
  grid-template-rows: 1.8rem auto 4rem;

  &__big {
    & > img {
      object-fit: contain;
      max-height: 50rem;
    }
  }

  &__small {
    align-items: center;
    display: grid;
    grid-template-columns: repeat(3, 1fr);

    & > img {
      margin: 0 4px 2px 4px;
      max-height: 4rem;
      object-fit: contain;
      width: 100%;
      height: auto;
      background: $color-white;
      border-bottom: 4px solid $color-secondary;

      &:active,
      &:focus,
      &:hover {
        border-bottom: 4px solid $color-primary;
      }
    }
  }
}
</style>
