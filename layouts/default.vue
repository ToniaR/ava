<template>
  <div>
    <header>
      <section class="header-section">
          <svg class="header-section__wave" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1400 920">
            <path fill="white" fill-opacity="0.95" d="M 0 350 Q 100 450 200 400 C 300 350 300 450 400 500 C 550 550 600 350 600 250 Q 600 200 650 200 Q 800 200 750 0 L 0 0 Z"></path>
          </svg>
          <svg  class="header-section__curve" xmlns="http://www.w3.org/2000/svg" viewBox="0 20 1440 320">
            <path fill="#7C25C6" fill-opacity="1" 
            d="M0,224L34.3,208C68.6,192,137,160,206,176C274.3,192,343,256,411,261.3C480,267,549,213,617,176C685.7,
            139,754,117,823,138.7C891.4,160,960,224,1029,250.7C1097.1,277,1166,267,1234,250.7C1302.9,235,1371,213,
            1406,202.7L1440,192L1440,0L1405.7,0C1371.4,0,1303,0,1234,0C1165.7,0,1097,0,1029,0C960,0,891,0,823,0C754.3,
            0,686,0,617,0C548.6,0,480,0,411,0C342.9,0,274,0,206,0C137.1,0,69,0,34,0L0,0Z"></path>
          </svg>
          <div class="header-section__content">
            <navigation :links="navLinks" class="nav"/>
            <section class="content__hero">
              <base-hero title="Hi, I'm Tonya!" subtitle="Front-end developer with passion to web-design" :isUnique="true"></base-hero>
              <base-button link="mailto: antaninareznik@gmail.com" label="Get in touch"></base-button>
            </section>
            <img src="character-me.svg" alt="character" class="header-section__image"/>
          </div>
          <button class="button-scroll" @click="onScrollDown()"></button>
      </section>
    </header>
    <nuxt />
    <footer>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
        <path fill="#ffffff" fill-opacity="1" d="M0,128L34.3,128C68.6,128,137,
        128,206,144C274.3,160,343,192,411,208C480,224,549,224,617,202.7C685.7,181,754,139,823,
        154.7C891.4,171,960,245,1029,256C1097.1,267,1166,213,1234,208C1302.9,203,1371,245,1406,
        266.7L1440,288L1440,0L1405.7,0C1371.4,0,1303,0,1234,0C1165.7,0,1097,0,1029,0C960,0,891,
        0,823,0C754.3,0,686,0,617,0C548.6,0,480,0,411,0C342.9,0,274,0,206,0C137.1,0,69,0,34,0L0,0Z"></path>
      </svg>
      <section class="footer__content">
        <base-button link="mailto: antaninareznik@gmail.com" label="Contact me" type="footer" class="footer__content-btn"></base-button>
      

        <div class="footer__content-icons">
          <a href="http://github.com/ToniaR" target="_blank" rel=”noreferrer”>
            <icon title="github" class="footer__content-icon" :widthSize="20" :heightSize="20"/>
          </a>
          <a href="https://www.linkedin.com/in/antanina-reznikava-206a4411a/" target="_blank" rel=”noreferrer”>
            <icon title="linkedin" class="footer__content-icon" :widthSize="20" :heightSize="20"/>
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
import Icon from '~/components/Icon.vue';

export default {
  components:{
    Navigation,
    BaseHero,
    BaseButton,
    Icon
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
  background: linear-gradient(30deg, $purple-heart, $royal-blue);

  &__wave {
    position: absolute;
    top: 0;
    left: 0;
    z-index: 2;
    width: 1680px;
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
    top: 40%;
    right: 60%;
    transform: translateX(60%);
    z-index: 4;

    @media screen and (max-width: 768px) {
      top: 60%;
    }

    @media screen and (max-width: 1024px) {
      width: 100%;
    }    

    @media screen and (max-width: 1250px) {
      top: 50%;
    }
  }
}

.content__hero {
  margin-top: 2rem;
}
.nav {
  padding: 1rem;
}

footer {
  width: 100%;
  position: relative;
  height: 500px;
  color: $white;
  background: linear-gradient(0deg, $purple-heart, $royal-blue);

  @media screen and (max-width: 1024px) {
    height: 400px;
  }


  &> svg{
    position: absolute;
    top: 0;
    z-index: 1;
    left: 0;
    right: 0;
  }
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

  &-icon > .icon__img{
    width: 20px;
    height: 20px;
    color: $white;
    cursor: pointer;
  }

  &-btn {
    margin: 2rem 0;
  }

}

.button-scroll {
  display: block;
  width: 20px;
  height: 40px;
  border: 2px solid $royal-blue;
  position: absolute;
  top: 92vh;
  left: 50%;
  transform: translateX(-50%);
  margin: 0 auto;
  z-index: 10;
  border-radius: 10px;
  cursor: pointer;
  transition: all .4s ease-in;
  outline: none;

  &:after {
    display: block;
    content: '';
    width: 5px;
    height: 5px;
    border-radius: 20px;
    background: $royal-blue;
    position: absolute;
    bottom: 5px;
    left: 0;
    right: 0;
    margin: 0 auto;
  }


  &:before {
    display: block;
    content: '';
  }

  &:hover {
    opacity: 0.7;
  }
}
</style>
