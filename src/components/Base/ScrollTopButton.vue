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
    }
  }
}
</script>

<style scoped lang="scss">

</style>