<template>
  <div class="burger fade-in-bg">
    <div class="burger__stick" :class="{ active: isBurgerActive }" />
  </div>
</template>

<script>
export default {
  props: {
    isBurgerActive: {
      type: Boolean,
      required: true
    }
  }
}
</script>

<style lang="scss" scoped>
@import '@/styles/scss/_general.scss';

.burger {
  width: 2rem;
  height: 2rem;
  display: flex;
  position: relative;
  justify-content: center;
  align-items: center;
  cursor: pointer;
}

.burger__stick {
  width: 3rem;
  height: 0.2rem;
  background-color: $color-white;
  border-radius: 10px;
  transition: all 0.5s ease-in-out;

  &::before,
  &::after {
    content: '';
    position: absolute;
    width: 2rem;
    height: 0.2rem;
    background-color: $color-white;
    border-radius: 10px;
    transition: all 0.5s ease-in-out;
  }

  &::before {
    transform: translate(0px, -12px);
  }

  &::after {
    transform: translate(0px, 12px);
  }
}

.active {
  background-color: transparent !important;

  &::before {
    transform: rotate(45deg);
  }

  &::after {
    transform: rotate(-45deg);
  }
}

@media only screen and (min-width: 640px) {
  .burger {
    display: none;
    visibility: hidden;
  }
}
</style>
