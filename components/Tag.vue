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
  margin: 0 .5rem .5rem 0;
  min-width: 100px;
  height: 30px;
  padding: 5px;
  box-sizing: border-box;
  border-radius: 5px;
  text-align: center;
  background: rgba(255, 255, 255, 0.4);
  color: $stratos;
  font: {
    size: calc(#{$font-size-default} - 2px);
    weight: $font-weight-default;
  }
  line-height: 21px;
}

</style>