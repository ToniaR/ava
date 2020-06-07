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
