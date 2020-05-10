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
.tag {
  min-width: 100px;
  height: 30px;
  padding: 5px;
  box-sizing: border-box;
  border-radius: 5px;
  text-align: center;
  margin: 0 auto;
  background: rgba(255, 255, 255, 0.4);
  color: $stratos;
  font: {
    size: $font-size-default;
    weight: $font-weight-medium;
  }
}

</style>