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
              <a href = "mailto: antaninareznik@gmail.com">
                <base-button label="Get in touch"></base-button>
              </a>
            </section>
            <img src="/character-me.svg" alt="character" class="header-section__image"/>
          </div>
         <scroll-button></scroll-button>
      </section>
    </header>
    <nuxt />
    <footer>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1240 320">
        <defs>
          <linearGradient id="gradient">
            <stop offset="5%" stop-color="#533DE2" />
            <stop offset="95%" stop-color="#7C25C6" />
          </linearGradient>
        </defs>
        <path fill="url(#gradient)" fill-opacity="1" 
        d="M0,32L48,64C96,96,192,160,288,181.3C384,203,480,181,576,149.3C672,117,768,75,864,90.7C960,107,1056,181,1152,208C1248,235,
        1344,213,1392,202.7L1440,192L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,
        320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path>
      </svg>
      <section class="footer__content">

        <a href = "mailto: antaninareznik@gmail.com">
          <base-button label="Contact me" type="footer" class="footer__content-btn"></base-button>
        </a>


        <div class="footer__content-icons">
          <a href="http://github.com/ToniaR" target="_blank" rel=”noreferrer”>
            <icon title="github" class="footer__content-icon"/>
          </a>
          <a href="https://www.linkedin.com/in/antanina-reznikava-206a4411a/" target="_blank" rel=”noreferrer”>
            <icon title="linkedin" class="footer__content-icon"/>
          </a>
        </div>
        <p class="footer__content-copyright">&copy; 2020 Antanina Reznikava</p>
      </section>
    </footer>
  </div>
</template>
<script>
import Navigation from '~/components/Nav.vue';
import BaseHero from '~/components/BaseHero.vue';
import BaseButton from '~/components/BaseButton.vue';
import ScrollButton from '~/components/ScrollButton.vue';
import Icon from '~/components/Icon.vue';

export default {
  components:{
    Navigation,
    BaseHero,
    BaseButton,
    ScrollButton,
    Icon
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

footer {
  position: relative;
  height: 400px;
  color: $white;
}


footer > svg{
  position: absolute;
  bottom: -4px;
  z-index: 1;
}


.footer__content {
  position: absolute;
  z-index: 2;
  bottom: 0;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;  

  &-copyright {
    margin-bottom: 2rem;
    font-weight: $font-weight-thin;
  }

  &-icons {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
  }

  &-icon {
    width: 20px;
    height: 20px;
    color: $white;
    cursor: pointer;
  }

  &-btn {
    margin: 2rem 0;
  }

}
</style>
