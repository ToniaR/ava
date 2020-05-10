<template>
  <section class="base-hero">
    <div v-if="isUnique">
      <h1 class="base-hero__title base-hero__title--large">{{ title }}</h1>
      <h2 class="base-hero__subtitle">{{ subtitle }}</h2>
    </div>
    <div v-else>
      <h2 class="base-hero__title"></h2>
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
.base-hero__title {
  font: {
    family: $font-family-accent;
    weight: $font-weight-medium;
    size: $font-size-medium;
  }
  color: $stratos;
}

.base-hero__title--large {
  font-size: $font-size-large;
}


.base-hero__subtitle {
  font: {
    family: $font-family-default;
    weight: $font-weight-default;
    size: calc(#{$font-size-default} * 2);
  }

}
</style>>

</style>