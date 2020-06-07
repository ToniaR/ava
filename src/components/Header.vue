<template>
  <div>
    <header>
      <section class="header-section">
          <svg class="header-section__wave" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1400 920">
            <path fill="white" fill-opacity="0.95" d="M 0 350 Q 100 450 200 400 C 300 350 300 450 400 500 C 550 550 600 350 600 250 Q 600 200 650 200 Q 800 200 750 0 L 0 0 Z"></path>
          </svg>  
          <svg class="header-section__curve" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#ffffff" fill-opacity="1" d="M0,256L48,261.3C96,267,192,277,288,245.3C384,213,480,139,576,122.7C672,107,768,149,864,138.7C960,128,1056,64,1152,58.7C1248,53,1344,107,1392,133.3L1440,160L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path></svg>
          <div class="header-section__content">
            <navigation :links="navLinks" class="nav"/>
            <section class="content__hero">
              <base-hero title="Hi, I'm Tonya!" subtitle="Front-end developer with passion to web-design" :isUnique="true"></base-hero>
              <base-button link="mailto: antaninareznik@gmail.com" label="Get in touch"></base-button>
            </section>
            <img src="../img/character-me.svg" alt="character" class="header-section__image"/>
          </div>
          <button class="button-scroll" @click="onScrollDown()"></button>
      </section>
    </header>
  </div>
</template>
<script>
import Navigation from './Base/Nav.vue';
import BaseHero from './Base/BaseHero.vue';
import BaseButton from './Base/BaseButton.vue';

export default {
  components:{
    'navigation': Navigation,
    'base-hero': BaseHero,
    'base-button': BaseButton
  },
  data() {
    return {
      navLinks: [
        { label: 'Portfolio', res: '#portfolio' },
        { label: 'Skills', res: '#skills'}
      ]
    }
  },
  methods: {
    onScrollDown() {
      let pageHeight = window.innerHeight;
      window.scrollBy({
        top: pageHeight,
        behavior: 'smooth'
      });
    }
  }
}
</script>

<style scoped lang="scss">


.button {
    margin: 1rem 0;
}
</style>
