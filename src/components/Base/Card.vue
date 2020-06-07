<template>
  <div :class="classes">
      <slot/>
  </div>
</template>

<script>
export default {
  name: 'Card',
  props: {
    color: {
      type: String
    }
  },
  computed: {
    classes() {
      return `card card--${this.color}`;
    }
  }

}
</script>

