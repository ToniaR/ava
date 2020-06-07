<template>
  <div class="tag tag-wrapper">
      {{ label }}
  </div>
</template>

<script>
export default {
  name: 'Tag',
  props: {
    label: {
      type: String
    }
  }
}
</script>

<style scoped lang="scss">


</style>