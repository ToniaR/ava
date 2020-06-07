<template>
  <a :href="link" :class="classes" target="_blank" rel="noreferrer"><span>{{ label }}</span></a>
</template>

<script>
export default {
  name: 'BaseButton',
  props: {
    type: {
      type: String,
      default: 'default'
    },
    label: {
      type: String
    },
    link: {
      type: String
    }
  },
  computed: {
    classes() {
      return `button button--${this.type}`;
    }
  },
  mounted() {

  }
}
</script>

<style lang="scss" scoped>


</style>