<template>
  <div class="container">
    <my-works-section id="portfolio"/>
    <skills-section id="skills"/>
  </div>
</template>

<script>
import MyWorksSection from '~/pages/MyWorksSection.vue'
import SkillsSection from '~/pages/SkillsSection.vue'

export default {
  components: {
    MyWorksSection,
    SkillsSection
  },
  data() {
    return {
    }
  },
  methods: {
  },
  mounted() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});
  }
}
</script>

<style lang="scss">


</style>
