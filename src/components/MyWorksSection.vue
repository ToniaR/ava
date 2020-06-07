<template>
  <section class="my-works-section">
    <base-hero title="My works"  class="my-works__title"></base-hero> 

    <toggle-nav></toggle-nav>
    <div class="my-works__wrapper">
      <card color="blue">
        <a href="http://www.haluchastudio.pl/" target="blank" class="my-works__card-link">
          <h3>Haluhastudio.pl</h3>
        </a>
        <p class="my-works__card-description">Landing page for architectural studio</p>
        <div class="my-works__card-tags">
          <tag v-for="tag in tags[0]" :key="tag" :label="tag"/>
        </div>
        <base-button link="http://www.haluchastudio.pl/" type="rounded" label="See the project"/>
      </card>
      <card color="rose">
        <a href="https://toniar.github.io/capabilities-creator/" target="blank" class="my-works__card-link">
          <h3>Capabilities creator"</h3>
        </a>
        <p class="my-works__card-description">Tool for generating code samples for testing.</p>
        <div class="my-works__card-tags">
          <tag v-for="tag in tags[1]" :key="tag" :label="tag"/>
        </div>
        <base-button link="https://toniar.github.io/capabilities-creator/" type="rounded" label="See the project"/>
      </card>
      <card color="blue">
        <a href="http://www.blisko.co/" target="blank" class="my-works__card-link">
          <h3>Blisko.co</h3> 
        </a>
        <p class="my-works__card-description">Creating landing page for application "Blisko".</p>
        <div class="my-works__card-tags">
          <tag v-for="tag in tags[2]" :key="tag" :label="tag"/>
        </div>
        <base-button link="http://www.blisko.co" type="rounded" label="See the project"/>
      </card>    
      <card color="violet">
        <a href="http://www.sisms.pl/" target="blank" class="my-works__card-link">
          <h3>SiSMS.pl</h3>
        </a>
        <p class="my-works__card-description">Rewriting landing page "Sisms.pl".</p>
        <div class="my-works__card-tags">
          <tag v-for="tag in tags[2]" :key="tag" :label="tag"/>
        </div>
        <base-button link="http://www.sisms.pl/" type="rounded" label="See the project"/>
      </card>            
    </div>
  </section>
</template>

<script>
import BaseHero from './Base/BaseHero.vue';
import Card from './Base/Card.vue';
import BaseButton from './Base/BaseButton.vue';
import Tag from './Base/Tag.vue';
import ToggleNav from './Base/ToggleNav.vue';

export default {
  components: {
    'base-hero': BaseHero,
    'card': Card,
    'base-button': BaseButton,
    'tag': Tag,
    'toggle-nav': ToggleNav
  },
  data() {
    return {
      tags: [
        ['JavaScript', 'HTML', 'CSS', 'SCSS'],
        ['JavaScript', 'HTML', 'CSS', 'SCSS', 'Vue.js', 'Webpack', 'Jest'],
        ['JavaScript', 'HTML', 'CSS', 'SCSS']
      ]
    }
  }
}
</script>

<style scoped lang="scss">

</style>