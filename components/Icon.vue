<template>
  <div class="icon icon-wrapper">
      <img :src="iconSrc" :alt="title" class="icon__img"/>
      <h4 class="icon__label">{{ label }}</h4>
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
    }
  },
  data() {
    return {
      imageTitle: this.title
    }
  },
  computed: {
    iconSrc() {
      return `${require(`@/assets/img/${this.imageTitle}.svg`)}`;
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

.icon-wrapper {
  width: 100px;
  height: auto;
  margin: 1rem;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  color: $stratos;
}


.icon__img {
  width: 100%;
}

.icon__label {
  margin: 1rem;
  font: {
    size: $font-size-default;
    weight: $font-weight-medium;
  }
}
</style>