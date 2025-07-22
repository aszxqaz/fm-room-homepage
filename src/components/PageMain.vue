<script setup lang="ts">
import { ref } from "vue";
import Carousel from "./Carousel.vue";
import Intro from "./Intro.vue";
import CarouselButtonGroup from "./CarouselButtonGroup.vue";

const tabIndex = ref(0);
const direction = ref("next");

function nextTab() {
  direction.value = "next";
  if (tabIndex.value == 2) {
    tabIndex.value = 0;
  } else {
    tabIndex.value++;
  }
}

function prevTab() {
  direction.value = "prev";
  if (tabIndex.value == 0) {
    tabIndex.value = 2;
  } else {
    tabIndex.value--;
  }
}
</script>

<template>
  <main class="page">
    <Carousel
      class="page__carousel"
      :currentTab="tabIndex"
      :direction="direction"
    >
      <CarouselButtonGroup
        class="carousel-btn-group carousel-btn-group--mobile"
        @next="nextTab"
        @prev="prevTab"
      />
    </Carousel>
    <Intro class="page__intro" :current-tab="tabIndex" />
    <CarouselButtonGroup
      class="page__carousel-btn-group carousel-btn-group--desktop"
      @next="nextTab"
      @prev="prevTab"
    />
    <picture class="page__image-dark image-dark">
      <source srcset="/images/dark-desktop.jpg" media="(min-width: 60rem)" />
      <source srcset="/images/dark-tablet.jpg" media="(min-width: 48rem)" />
      <source srcset="/images/dark-mobile.jpg" />
      <img class="image" src="/images/dark-mobile.jpg" alt="" />
    </picture>
    <div class="page__about about">
      <h2 class="title-spaced">About our furniture</h2>
      <p>
        Our multifunctional collection blends design and function to suit your
        individual taste. Make each room unique, or pick a cohesive theme that
        best express your interests and what inspires you. Find the furniture
        pieces you need, from traditional to contemporary styles or anything in
        between. Product specialists are available to help you create your dream
        space.
      </p>
    </div>
    <picture class="page__image-light image-light">
      <source srcset="/images/light-desktop.jpg" media="(min-width: 60rem)" />
      <source srcset="/images/light-tablet.jpg" media="(min-width: 48rem)" />
      <source srcset="/images/light-mobile.jpg" />
      <img class="image" src="/images/light-mobile.jpg" alt="" />
    </picture>
  </main>
</template>

<style lang="css" scoped>
.page {
  height: 100%;
  display: grid;
  --padding-inline: 2rem;
  grid-template-columns: var(--padding-inline) 1fr var(--padding-inline);

  @media (min-width: 48rem) {
    --padding-inline: 4rem;
  }
}

.page__intro,
.page__about {
  grid-column: 2 / 3;
}

.page__carousel,
.page__image-dark,
.page__image-light {
  grid-column: 1 / -1;
}

@media (min-width: 60rem) {
  .page {
    grid-template-columns: 1fr 1fr var(--carousel-button-width) 1.05fr;
    grid-template-rows: 1.7fr var(--carousel-button-height) 1fr;
  }

  .page__carousel {
    height: 100%;
    grid-column: span 2;
    grid-row: span 2;
  }

  .page__carousel-btn-group {
    grid-column-start: 3;
    grid-row-start: 2;
  }

  .page__intro {
    grid-column: span 2;
  }

  .page__about {
    grid-column: span 2;
  }

  .page__image-dark {
    grid-column: unset;
    grid-row-start: 3;
  }

  .page__image-light {
    grid-column: unset;
  }
}

.image-dark,
.image-light {
  > img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
}

.image-dark {
  height: clamp(
    14.875rem,
    11.093540268456376rem + 16.13422818791946vw,
    22.3875rem
  );
}

.image-light {
  height: clamp(
    14.1875rem,
    13.243708053691275rem + 4.026845637583892vw,
    16.0625rem
  );
}

@media (min-width: 60rem) {
  .image-dark,
  .image-light {
    height: 100%;
  }
}

.page__carousel {
  position: relative;

  .carousel-btn-group {
    position: absolute;
    bottom: 0;
    right: 0;
  }
}

.about {
  max-width: 40rem;
  margin: auto;

  display: grid;
  align-content: center;
  padding-block: clamp(3rem, 2.045801526717557rem + 4.071246819338422vw, 4rem);
}

@media (min-width: 60rem) {
  .about {
    padding-inline: 3rem;
  }
}
</style>
