export default {
  mounted() {
    if (window.$headerObserver instanceof IntersectionObserver) {
      window.$headerObserver.observe(this.$el);
    }
  },
  unmounted() {
    if (window.$headerObserver instanceof IntersectionObserver) {
      window.$headerObserver.unobserve(this.$el);
    }
  }
};