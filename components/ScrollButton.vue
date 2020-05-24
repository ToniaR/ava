<template>
  <button class="button-scroll" @click="onScrollDown()"></button>
</template>

<script>
export default {
  name: 'ScrollButton',
  props: {
    methodChandler:{
      type: Function
    }
  },
  methods: {
    onScrollDown() {
      let pageHeight = window.innerHeight;
      window.scrollBy({
        top: pageHeight,
        behavior: 'smooth'
      });
    }
  }
}
</script>

<style scoped lang="scss">
.button-scroll {
  display: block;
  width: 20px;
  height: 40px;
  border: 2px solid $royal-blue;
  position: absolute;
  top: 92vh;
  left: 50%;
  transform: translateX(-50%);
  margin: 0 auto;
  z-index: 10;
  border-radius: 10px;
  cursor: pointer;
  transition: all .4s ease-in;
  outline: none;

  &:after {
    display: block;
    content: '';
    width: 5px;
    height: 5px;
    border-radius: 20px;
    background: $royal-blue;
    position: absolute;
    bottom: 5px;
    left: 0;
    right: 0;
    margin: 0 auto;
  }


  &:before {
    display: block;
    content: '';
  }

  &:hover {
    opacity: 0.7;
  }
}
</style>