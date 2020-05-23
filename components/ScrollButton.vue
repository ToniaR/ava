<template>
  <div class="button-scroll"></div>
</template>

<script>
export default {

}
</script>

<style scoped lang="scss">
.button-scroll {
  display: block;
  width: 20px;
  height: 40px;
  border: 2px solid white;
  position: absolute;
  top: 110%;
  left: 50%;
  transform: translateX(-50%);
  margin: 0 auto;
  z-index: 10;
  border-radius: 10px;
  cursor: pointer;
  transition: all .4s ease-in;

  &:after {
    display: block;
    content: '';
    width: 5px;
    height: 5px;
    border-radius: 20px;
    background: white;
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