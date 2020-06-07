<template>
    <div class="search-wrapper center-content">
        <header-component/>
        <my-works-section id="portfolio"/>
        <skills-section id="skills"/>
        <footer-component/>
    </div>
</template>
<script>
import MyWorksSection from './components/MyWorksSection.vue'
import SkillsSection from './components/SkillsSection.vue'
import Header from './components/Header.vue';
import Footer from './components/Footer.vue';

export default {
  components: {
    'my-works-section': MyWorksSection,
    'skills-section': SkillsSection,
    'header-component': Header,
    'footer-component': Footer
  },
    data() {
        return {
        }
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
body {
  margin: 0;
  padding: 0;
//   font-family: $font-family-default;
  overflow-x: hidden;
}

// .container {
// //   @include container;
// }

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
