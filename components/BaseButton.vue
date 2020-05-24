<template>
  <a :href="link" :class="classes" @click="method"><span>{{ label }}</span></a>
</template>

<script>
export default {
  name: 'BaseButton',
  props: {
    type: {
      type: String,
      default: 'default'
    },
    label: {
      type: String
    },
    method: {
      type: Function
    },
    link: {
      type: String,
      required: true
    }
  },
  computed: {
    classes() {
      return `button button--${this.type}`;
    }
  },
  mounted() {

  }
}
</script>

<style lang="scss" scoped>
.button {
  width: 150px;
  height: 50px;
  padding: 5px;
  box-sizing: border-box;
  cursor: pointer;
  line-height: 100%;
  border: none;
  box-shadow: 0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24);
  transition: all .5s ease-in-out;
  border-radius: 5px;
  border: none;
  text-decoration: none;
  display: flex;
  justify-content: center;
  align-items: center;
  font: {
    size: $font-size-default;
    weight: $font-weight-default;
    family: $font-family-default;
  }
  
  &:hover {
    transform: scale(1.1);
  }
}


.button--default {
  background-image: linear-gradient(to right, $royal-blue, $purple-heart);
  color: $white;
}

.button--rounded {
  background:  $white;
  color: $stratos;
  font-weight: $font-weight-medium;
  
  &:hover {
    transform: scale(1.1);
  }
}

.button--footer {
  background:  $white;
  & > span {
    background: linear-gradient(to right, $royal-blue, $purple-heart);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }
  color: $stratos;
  font-weight: $font-weight-medium;
  
  &:hover {
    transform: scale(1.1);
  }

}

</style>