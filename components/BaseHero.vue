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

.base__hero {
  color: $stratos;
}

.base-hero__title {
  font: {
    family: $font-family-accent;
    weight: $font-weight-medium;
    size: $font-size-medium;
  }
}

.base-hero__title--large {
  margin: 0;
  font-size: $font-size-large;
}


.base-hero__subtitle {
  font: {
    family: $font-family-default;
    weight: $font-weight-thin;
    size: calc(#{$font-size-default} * 1.5);
  }

}


h2.base-hero__title {
    margin: 0rem 0;
}
</style>>

</style>