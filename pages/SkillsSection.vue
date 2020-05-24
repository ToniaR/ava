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
  </section>
</template>

<script>
import BaseHero from '~/components/BaseHero.vue';
import Icon from '~/components/Icon.vue';
import Tag from '~/components/Tag.vue';

export default {
  name: 'SkillsSection',
  components: {
    BaseHero,
    Icon,
    Tag
  },
  data() {
    return {
      skillsTags: ['firebase', 'less', 'bem', 'Adobe XD', 'Adobe Illustrator', 'Photoshop', 'Inkscape']
    }
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

.skills__tag {
  min-width: 100px;
  max-width: fit-content;
  background: $stratos;
  color: $white;
  display: inline-block;
}

</style>