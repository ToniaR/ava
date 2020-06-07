<template>
  <section class="base-hero">
    <div v-if="isUnique">
      <h1 class="base-hero__title base-hero__title--large">{{ title }}</h1>
      <h2 class="base-hero__subtitle">{{ subtitle }}</h2>
    </div>
    <div v-else>
      <h2 class="base-hero__title">{{ title }}</h2>
    </div>
  </section>
</template>

<script>
export default {
  props: {
    title: {
      type: String
    },
    subtitle: {
      type: String
    },
    isUnique: {
      type: Boolean,
      default: false
    }
  }
}
</script>

<style lang="scss" scoped>


</style>