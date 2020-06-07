<template>
  <div class="footer-wrapper">
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
import BaseButton from './Base/BaseButton.vue';
import Icon from './Base/Icon.vue';

export default {
  components:{
    'base-button': BaseButton,
    'icon': Icon
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

*,
*:before,
*:after {
  box-sizing: border-box;
  margin: 0;
}


</style>
