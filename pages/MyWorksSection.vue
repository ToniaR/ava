<template>
  <section class="my-works-section">
    
    <base-hero title="My works"  class="my-works__title"></base-hero> 

    <div class="my-works__wrapper">

      <card color="blue">
        <a href="http://www.haluchastudio.pl/" target="blank" class="my-works__card-link">
        <base-hero title="Haluhastudio.pl" class="white-text"></base-hero> 
        </a>
        <p class="my-works__card-description">Landing page for architectural studio</p>
        <div class="my-works__card-tags">
          <tag v-for="tag in tags[0]" :key="tag" :label="tag"/>
        </div>      
        <a href="http://www.haluchastudio.pl/" target="blank" class="my-works__card-link">
          <base-button type="rounded" label="See the project"/>
        </a>
      </card>

      <card color="rose">
        <a href="https://toniar.github.io/capabilities-creator/" target="blank" class="my-works__card-link">
        <base-hero title="Capabilities creator" class="white-text"></base-hero> 
        </a>
        <p class="my-works__card-description">Tool for generating code samples for testing.</p>
        <div class="my-works__card-tags">
          <tag v-for="tag in tags[1]" :key="tag" :label="tag"/>
        </div>      
        <a href="https://toniar.github.io/capabilities-creator/" target="blank" class="my-works__card-link">
          <base-button type="rounded" label="See the project"/>
        </a>
      </card>

      <card color="blue">
        <a href="http://www.blisko.co/" target="blank" class="my-works__card-link">
        <base-hero title="Blisko.co" class="white-text"></base-hero> 
        </a>
        <p class="my-works__card-description">Creating landing page for application "Blisko".</p>
        <div class="my-works__card-tags">
          <tag v-for="tag in tags[2]" :key="tag" :label="tag"/>
        </div>      
        <a href="http://www.haluchastudio.pl/" target="blank" class="my-works__card-link">
          <base-button type="rounded" label="See the project"/>
        </a>
      </card>    

      <card color="violet">
        <a href="http://www.sisms.pl/" target="blank" class="my-works__card-link">
        <base-hero title="SiSMS.pl" class="white-text"></base-hero> 
        </a>
        <p class="my-works__card-description">Rewriting landing page "Sisms.pl".</p>
        <div class="my-works__card-tags">
          <tag v-for="tag in tags[2]" :key="tag" :label="tag"/>
        </div>      
        <a href="http://www.sisms.pl/" target="blank" class="my-works__card-link">
          <base-button type="rounded" label="See the project"/>
        </a>
      </card>            

    </div>

  </section>
</template>

<script>
import BaseHero from '~/components/BaseHero.vue';
import Card from '~/components/Card.vue';
import BaseButton from '~/components/BaseButton.vue';
import Tag from '~/components/Tag.vue';

export default {
  components: {
    BaseHero,
    Card,
    BaseButton,
    Tag
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

.white-text{
  color: $white;
  margin: 0;
}


.my-works__title {
  @include section-title;
}



.my-works__card-description {
  color: $grey;
  width: 100%;
  text-align: left;
}

.my-works__card-tags {
  display: flex;
  flex-wrap: wrap;
  width: 100%;
  margin: 1rem 0 2rem;
}

.my-works__card-link {
  text-decoration: none;
}

.my-works__wrapper {
  display: grid;
  grid-template-columns: 100%;
  grid-gap: 1.5rem;
  padding: 1rem 0 2rem;

  @media screen and (min-width: 992px) {
    grid-template-columns: 1fr 1fr;
  }
}
</style>