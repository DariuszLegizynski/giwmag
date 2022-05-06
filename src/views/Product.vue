<template>
  <article class="product">
    <ButtonBack />
    <section class="product__title">
      <h1>{{ product.category }} {{ product.name }}</h1>
      <p>
        {{ product.type }}
      </p>
      <p v-if="product.type_continued">
        {{ product.type_continued }}
      </p>
    </section>
    <section v-if="images" class="product__gallery">
      <div class="product__gallery--big">
        <img :src="selectedImage" alt="product image" />
      </div>
      <div class="product__gallery--thumbnails">
        <img
          v-for="image in images"
          :key="image.id"
          :src="image.thumbnail_image"
          alt="image of product"
          @click="toggleImg(image.image)"
        />
      </div>
    </section>
    <section class="product__description">
      <ul>
        <li v-for="(text, index) in description" :key="index">- {{ text }}</li>
      </ul>
    </section>
    <section class="product__call-to-action">
      <CallToAction />
    </section>
    <ButtonBack />
  </article>
</template>

<script>
import productsDataBase from '@/products.json'
import CallToAction from '@/components/base/CallToAction.vue'
import ButtonBack from '@/components/base/ButtonBack.vue'

export default {
  components: {
    CallToAction,
    ButtonBack
  },
  data() {
    return {
      selectedImage: 0,
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
    description() {
      return this.product.description
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
.product {
  &__title {
    margin: 1rem 0.4rem;
    & > * {
      color: $color-primary;
    }
    & p {
      font-size: $font-size-26;
      line-height: $line-height-26;
    }
  }
  &__gallery {
    display: grid;
    grid-template-rows: auto 1fr;

    &--big {
      & > img {
        object-fit: contain;
        max-height: 50rem;
      }
    }

    &--thumbnails {
      align-items: center;
      display: grid;
      grid-template-columns: repeat(4, auto);
      column-gap: 4px;

      & > img {
        margin: 4px 0;
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
  &__description {
    color: $color-primary;
    margin: 1rem 0.4rem;

    & > ul {
      border: 2px solid $color-white;
      padding: 0.4rem;
    }

    & li {
      margin: 0.4rem 0;
    }
  }
  &__call-to-action {
    margin: 0 1rem;
  }
}
</style>
