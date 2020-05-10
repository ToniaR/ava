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

<style scoped lang="scss">
.card {
  width: 500px;
  height: auto;
  padding: 2rem;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-start;
  background-color: $royal-blue;
  border-radius: 5px;
  box-shadow: 0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24);
}

.card--rose {
  background-color: $french-lilac;
}

.card--blue {
  background-color: $malibu;
}


.card--violet {
  background-color: $portage;
}
</style>