<template>
  <div>
    <header>
      <section class="header-section">
          <svg class="header-section__curve" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#7C25C6" fill-opacity="1" d="M0,224L120,202.7C240,181,480,139,720,117.3C960,96,1200,96,1320,96L1440,96L1440,0L1320,0C1200,0,960,0,720,0C480,0,240,0,120,0L0,0Z"></path></svg>
          <svg class="header-section__wave" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1400 920">
            <path fill="white" fill-opacity="0.95" d="M 0 350 Q 100 450 200 400 C 300 350 300 450 400 500 C 550 550 600 350 600 250 Q 600 200 650 200 Q 800 200 750 0 L 0 0 Z"></path>
          </svg>
          <div class="header-section__content">
            <navigation :links="navLinks" class="nav"/>
            <section class="content__hero">
              <base-hero title="Hi, I'm Tonya!" subtitle="Front-end developer & designer" :isUnique="true"></base-hero>
              <base-button label="Get in touch"></base-button>

            </section>
            <img src="/character-me.svg" alt="character" class="header-section__image"/>
          </div>
         <scroll-button></scroll-button>
      </section>
    </header>
    <nuxt />
    <footer>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
        <path fill="#0099ff" fill-opacity="1" 
        d="M0,96L16,96C32,96,64,96,96,122.7C128,149,160,203,192,
        197.3C224,192,256,128,288,122.7C320,117,352,171,384,208C416,245,448,267,480,240C512,
        213,544,139,576,133.3C608,128,640,192,672,186.7C704,181,736,107,768,69.3C800,32,832,
        32,864,58.7C896,85,928,139,960,138.7C992,139,1024,85,1056,101.3C1088,117,1120,203,1152,
        218.7C1184,235,1216,181,1248,170.7C1280,160,1312,192,1344,170.7C1376,149,1408,75,1424,37.3L1440,0L1440,320L1424,320C1408,320,1376,320,1344,320C1312,320,1280,320,1248,320C1216,320,1184,320,1152,320C1120,320,1088,320,1056,320C1024,320,992,320,960,320C928,320,896,320,864,320C832,320,800,320,768,320C736,320,704,320,672,320C640,320,608,320,576,320C544,320,512,320,480,320C448,320,416,320,384,320C352,320,320,320,288,320C256,320,224,320,192,320C160,320,128,320,96,320C64,320,32,320,16,320L0,320Z"></path>
      </svg>
    </footer>
  </div>
</template>
<script>
import Navigation from '~/components/Nav.vue';
import BaseHero from '~/components/BaseHero.vue';
import BaseButton from '~/components/BaseButton.vue';
import ScrollButton from '~/components/ScrollButton.vue';

export default {
  components:{
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

<style scoped lang="scss">
html {
  font-family: $font-family-default;
}

*,
*:before,
*:after {
  box-sizing: border-box;
  margin: 0;
}

header {
  width: 100vw;
  height: 100vh;
}

.header-section {
  width: 100vw;
  height: 70vh;
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
