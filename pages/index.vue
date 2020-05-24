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
}

.container {
  @include container;
}

#portfolio {
  min-height: 100vh;
  padding: 2rem 0;
}

#skills {
  min-height: calc(100vh - 500px);
  padding: 2rem 0;
}

</style>
