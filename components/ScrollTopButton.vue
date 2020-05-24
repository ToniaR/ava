<template>
  <button :class="['button-scroll-top', {'button-scroll-top--visible': isVisible}]" @click="onScrollTop()"></button>
</template>

<script>
export default {
  name: 'ScrollButton',
  data() {
    return {
      isVisible: false
    }
  },
  computed: {
    isVisible() {
      return window.scrollY > window.innerHeight;
    }
  },
  methods: {
    onScrollTop() {
      window.scrollTo({
        top: 0,
        behavior: 'smooth'

      })

       
      // document.querySelector('#portfolio').scrollIntoView({behavior: 'smooth'});
    }
  }
}
</script>

<style scoped lang="scss">
.button-scroll-top {
    opacity: 0;
    position: fixed;
    z-index: 20000;
    right: 2rem;
    bottom: 0;
    background: $stratos;
    width: 40px;
    height: 40px;
    border-radius: 31px 31px 0 0;
    box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);
    border: 0;
    cursor: pointer;

    &::after {
      content: '';
      display: block;
      border: 0;
      width: 10px;
      height: 10px;
      border-top: 2px solid $white;
      border-right: 2px solid $white;
      transform: rotate(-45deg);
      margin: 5px auto 0;
    }

    &--visible {
      opacity: 1;
    }
}

</style>