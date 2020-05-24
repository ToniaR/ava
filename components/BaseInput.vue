<template>
  <div class="input-wrapper">
    <label>
      {{ label }}
    </label>
    <input :type="type" :placeholder="placeholder" class="input-wrapper__item"/>
  </div>
</template>

<script>
export default {
  name: 'BaseInput',
  props: {
    type: {
      type: String,
      required: true
    },
    label: {
      type: String
    },
    placeholder: {
      type: String
    }
  }
}
</script>

<style scoped lang="scss">
.input-wrapper__item {
  min-width: 200px;
  height: 50px;
  padding: 5px;
  box-sizing: border-box;
  border: none;
  border-radius: 5px;
  box-shadow: 0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24);
  font: {
    size: $font-size-default;
  }
}
</style>