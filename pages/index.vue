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
  }
}
</script>

<style lang="scss">
body {
  margin: 0;
  padding: 0;
  font-family: $font-family-default;
  overflow-x: hidden;
}

.container {
  @include container;
}

#portfolio {
  min-height: 100vh;
  padding: 2rem 0;
}

#skills {
  max-height: calc(100vh - 500px);
  height: 100%;
  margin-top: 2rem;
}

</style>
