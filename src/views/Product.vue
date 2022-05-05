<template>
  <h2>
    {{ product.name }}
  </h2>
  <p>
    {{ product.type }}
  </p>
  <p v-if="product.type_continued">
    {{ product.type_continued }}
  </p>
  <section v-if="images">
    <div class="gallery__big">
      <img :src="selectedImage" alt="product image" />
    </div>
    <div class="gallery__small">
      <img
        v-for="image in images"
        :key="image.id"
        :src="image.thumbnail_image"
        alt="image of product"
        @click="toggleImg(image.image)"
      />
    </div>
  </section>
</template>

<script>
import productsDataBase from '@/products.json'

export default {
  data() {
    return {
      selectedImage: 0,
      chosenImage: 0,
    }
  },
  computed: {
    productId() {
      return parseInt(this.$route.params.id)
    },
    product() {
      return productsDataBase.products.find(i => i.id === this.productId)
    },
    images() {
      return this.product.images
    },
  },
  methods: {
    toggleImg(image) {
      this.selectedImage = image
    },
  },
  mounted() {
    this.toggleImg(this.product.images[0].image)
  },
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
