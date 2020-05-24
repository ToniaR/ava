<template>
  <nav class="nav-wrapper">
    <a :href="link.res" v-for="link in links" :key="link" class="nav-wrapper__link">{{ link.label }}</a>
  </nav>
</template>

<script>
export default {
  name: 'Nav',
  props: {
    links: {
      type: Array
    }
  }
}
</script>

<style scoped lang="scss">
.nav-wrapper {
  display: flex;
  flex-direction: row;
  height: 30px;
  margin-left: -2rem;
  margin-top: 3rem;
}

.nav-wrapper__link {
  width: 100px;
  margin-right: 1rem;
  text-decoration: none;
  color: $stratos;
  cursor: pointer;
  text-align: center;
  transition: all 200ms ease-in;
  background: transparent;
  display: inline-block;
  font: {
    size: $font-size-default;
    weight: $font-weight-default;
  }
  transition: all .3s ease-in;

  &:hover {
    color: $purple-heart;
  }
}
</style>