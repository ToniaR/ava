<template>
  <section class="skills-section">
    <base-hero title="Skills" class="skills-section__title"/>
    <div class="skills__icons-wrapper">
      <icon label="HTML" title="html"/>
      <icon label="JavaScript" title="js"/>
      <icon label="CSS" title="css"/>
      <icon label="SCSS/SASS" title="sass"/>
      <icon label="Vue.js" title="vue"/>
      <icon label="Adobe XD/Illustrator & Photoshop" title="adobe-brands"/>
    </div>
  </section>
</template>

<script>
import BaseHero from './Base/BaseHero.vue';
import Icon from './Base/Icon.vue';
import Tag from './Base/Tag.vue';

export default {
  name: 'SkillsSection',
  components: {
    'base-hero': BaseHero,
    'icon': Icon,
    'tag': Tag
  },
  data() {
    return {
      skillsTags: ['firebase', 'less', 'bem', 'Adobe XD', 'Adobe Illustrator', 'Photoshop', 'Inkscape']
    }
  }
}
</script>

<style scoped lang="scss">

</style>