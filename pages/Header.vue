<template>
  <section class="header-section">
    <svg class="header-section__curve" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
      <path fill="#7C25C6" fill-opacity="1" d="M0,224L120,202.7C240,181,480,139,720,117.3C960,96,1200,96,1320,96L1440,96L1440,0L1320,0C1200,0,960,0,720,0C480,0,240,0,120,0L0,0Z"></path>
    </svg>
    <svg class="header-section__wave" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1400 920">
      <path fill="white" fill-opacity="0.95" d="M 0 350 Q 100 450 200 400 C 300 350 300 450 400 500 C 550 550 600 350 600 250 Q 600 200 650 200 Q 800 200 750 0 L 0 0 Z"></path>
    </svg>
    <div class="header-section__content">
      <navigation :links="navLinks" class="nav"/>
      <section class="content__hero">
        <base-hero title="Hi, I'm Tonya!" subtitle="Front-end developer & designer" :isUnique="true"></base-hero>
        <base-button label="Get in touch"></base-button>

      </section>
      <!-- <img :src="foo" alt="character" class="header-section__image"/> -->
      <img src="/character-me.svg" alt="character" class="header-section__image"/>
    </div>
    <scroll-button></scroll-button>
  </section>
</template>

<script>
import Navigation from '~/components/Nav.vue';
import BaseHero from '~/components/BaseHero.vue';
import BaseButton from '~/components/BaseButton.vue';
import ScrollButton from '~/components/ScrollButton.vue';

export default {
  name: 'Header',
  components: {
    Navigation,
    BaseHero,
    BaseButton,
    ScrollButton
  },
  data() {
    return {
      navLinks: [
        { label: 'Portfolio', res: '/portfolio' },
        { label: 'Skills', res: '/skills'},
        { label: 'Contact', res: '/contact'} 
      ]
    }
  }
}
</script>

<style lang="scss" scoped>
.header-section {
  width: 100vw;
  height: 70vh;
  //height: 100vh;
  position: relative;
  background: linear-gradient(0deg, $purple-heart, $royal-blue);

  &__wave {
    position: absolute;
    top: 0;
    left: 0;
    z-index: 2;
  }

  &__curve {
    z-index: 1;
    position: absolute;
    top: 70vh;
    left: 0;
  }

  &__content {
    position: absolute;
    z-index: 4;
    top: 0;
    left: 0;
    right: 0;
    margin: 0 auto;
    width: 90%;
    height: 100%;
  }

  &__image {
    width: 500px;
    height: 500px;
    position: absolute;
    top: 30%;
    right: 60%;
    transform: translateX(60%);
    z-index: 4;
  }
}


.content__hero {
  margin-top: 2rem;
}
.nav {
  padding: 1rem;
}
</style>