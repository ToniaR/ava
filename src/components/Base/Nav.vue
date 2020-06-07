<template>
  <nav class="nav-wrapper">
    <a :href="link.res" v-for="(link, key) in links" :key="key" class="nav-wrapper__link">{{ link.label }}</a>
  </nav>
</template>

<script>
export default {
  name: 'Nav',
  props: {
    links: {
      type: Array
    }
  }
}
</script>

<style scoped lang="scss">


</style>