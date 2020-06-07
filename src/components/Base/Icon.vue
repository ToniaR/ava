<template>
  <div class="icon icon-wrapper" :style="`width:${widthSize}px; height:${heightSize}px;`">
      <img :src="`img/${title}.svg`" :alt="title" class="icon__img" :style="`width:${widthSize}px; height:${heightSize}px;`"/>
      <h4 class="icon__label" v-show="label !== ''">{{ label }}</h4>
  </div>
</template>

<script>
export default {
  props: {
    label: {
      type: String
    },
    title: {
      type: String 
    },
    widthSize: {
      type: Number
    },
    heightSize: {
      type: Number
    }
  },
  data() {
    return {
      imageTitle: this.title
    }
  },
  watch: {
    title: function(value) {
      this.imageTitle = value;
    }
  }
}
</script>

<style scoped lang="scss">

 </style>