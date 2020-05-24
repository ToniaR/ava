<template>
  <section class="skills-section">
    <base-hero title="Skills" class="skills-section__title"/>
    <div class="skills__icons-wrapper">
      <icon label="HTML" title="html"/>
      <icon label="JavaScript" title="js"/>
      <icon label="CSS" title="css"/>
      <icon label="SCSS/SASS" title="sass"/>
      <icon label="Vue.js" title="vue"/>
    </div>
    <div class="skills__copy">
      <p>Also I've worked with <strong>Firebase, Jest, BEM, LESS, Coffee Script</strong>.</p>
      <p> I've worked with tools such as <strong>    Adobe XD, Illustrator, Photoshop, Inkscape</strong></p>
  
    </div>
  </section>
</template>

<script>
import BaseHero from '~/components/BaseHero.vue';
import Icon from '~/components/Icon.vue';

export default {
  name: 'SkillsSection',
  components: {
    BaseHero,
    Icon
  }
}
</script>

<style scoped lang="scss">
.skills__icons-wrapper {
  width: 70%;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-evenly;
  margin: 2rem auto;
}

.skills-section__title {
  @include section-title;
}

</style>