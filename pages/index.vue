<template>
  <div class="container">
    <base-hero title="My hero" :isUnique="true" subtitle="asfhaslkfglkafgasfsa"></base-hero>
    <base-button label="Get in touch" :method="foo"></base-button>
    <base-button label="Get in touch" type="rounded" :method="bar"></base-button>
    <icon title="html" label="HTML"/>
    <tag label="html"/>
    <card color="violet">ertterterte</card>
    <base-input type="text" placeholder="Type something here"/>
    <navigation :links="links"/>
  </div>
</template>

<script>
import BaseHero from '~/components/BaseHero.vue'
import BaseButton from '~/components/BaseButton.vue'
import Icon from '~/components/Icon.vue'
import Tag from '~/components/Tag.vue'
import Card from '~/components/Card.vue'
import BaseInput from '~/components/BaseInput.vue'
import Navigation from '~/components/Nav.vue'

export default {
  components: {
    BaseHero,
    BaseButton,
    Icon,
    Tag,
    Card,
    BaseInput,
    Navigation
  },
  data() {
    return {
      links: [
       {label: 'Portfolio', res: '/portfolio'},
       {label: 'Skills', res: '/skills' }, 
       {label: 'Contact', res: '/contact' } 
      ]
    }
  },
  methods: {
    foo() {
      alert('click');
    },
    bar() {
      alert('bar');
    }
  }
}
</script>

<style>
body {
  margin: 0;
  padding: 0;
}



header {
  height: 90vh;
  width: 100vw;
  background-image: linear-gradient(-175deg,#293370 9%,#71cff2 89%);
  clip-path: ellipse(100% 55% at 48% 44%);
}
</style>
