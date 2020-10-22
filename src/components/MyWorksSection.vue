<template>
  <section class="my-works-section">
    <base-hero title="My works" class="my-works__title"></base-hero>
    <div class="my-works__wrapper">
      <card v-for="item in cardsData" :key="item.id" color="white">
        <!-- <div :class="['work__hero-image', item.class]"></div> -->
        <div class="work__content">
          <h3>{{ item.title }}</h3>
          <p>{{ item.description }}</p>
          <span>{{ item.tags }}</span>
          <base-button
            :link="item.link"
            type="rounded"
            label="See the project"
            class="work__link"
          />
        </div>
      </card>
    </div>
  </section>
</template>

<script>
import BaseHero from "./Base/BaseHero.vue";
import Card from "./Base/Card.vue";
import BaseButton from "./Base/BaseButton.vue";
import Tag from "./Base/Tag.vue";
import ToggleNav from "./Base/ToggleNav.vue";

export default {
  components: {
    "base-hero": BaseHero,
    card: Card,
    "base-button": BaseButton,
    tag: Tag,
    "toggle-nav": ToggleNav,
  },
  data() {
    return {
      cardsData: [
        {
          id: 1,
          title: "Haluchastudio.pl",
          description: "Landing page for architectural studio",
          link: "http://www.haluchastudio.pl/",
          tags: "JavaScript HTMl CSS SCSS",
          class: 'work__hero-image--haluha',
        },
        {
          id: 2,
          title: "Capabilities creator",
          description: "Tool for generating code samples for testing",
          link: "https://toniar.github.io/capabilities-creator/",
          tags: "JavaScript HTMl CSS SCSS Vue.js Webpack Jest",
          class: 'work__hero-image--cc',
        },
        {
          id: 3,
          title: "Blisko.co",
          description: "Creating landing page for application 'Blisko'",
          link:
            "https://toniar.github.io/capabilities-creator/https://www.blisko.co/",
          tags: "JavaScript HTMl CSS SCSS",
          class: 'work__hero-image--blisko',
        },
        {
          id: 4,
          title: "SiSMS.pl",
          description: "Rewriting landing page for SiSMS.pl",
          link: "https://sisms.pl/",
          tags: "JavaScript HTMl CSS SCSS",
          class: 'sisms',
        },
      ],
    };
  },
};
</script>

<style scoped lang="scss"></style>
