<template>
  <div>
  <button :class="['button-scroll-top', {'button-scroll-top--visible': isVisible}]" @click="onScrollTop()"></button>
  </div>
</template>

<script>
export default {
  name: 'ScrollBackButton',
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