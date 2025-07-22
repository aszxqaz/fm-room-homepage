<script setup lang="ts">
import { tabs } from "../data/data";
defineProps<{
  currentTab: number;
}>();
</script>

<template>
  <!-- <div class="intro"> -->
  <Transition name="fade" mode="out-in">
    <div class="intro" :key="tabs[currentTab].heading">
      <h1 class="heading">{{ tabs[currentTab].heading }}</h1>
      <p>{{ tabs[currentTab].text }}</p>
      <div class="cta">
        <a class="cta__text" href="#">Shop now</a>
        <a href="#"><img src="/icons/icon-arrow.svg" alt="Arrow Icon" /></a>
      </div>
    </div>
  </Transition>
  <!-- </div> -->
</template>

<style lang="css" scoped>
.intro {
  max-width: 40rem;
  margin: auto;
  display: grid;
  align-content: center;
  padding-block: 4rem;

  @media (min-width: 60rem) {
    justify-items: center;
  }

  @media (min-width: 60rem) {
    height: unset;
    padding-block: unset;
    padding-top: calc(var(--carousel-button-height));
    padding-inline: 6.94444444444444vw;
  }
}

.heading {
  font-size: clamp(2.4375rem, 2.3rem + 0.58vw, 3rem);
  font-weight: 600;
  line-height: 1;
  letter-spacing: -0.125rem;

  @media (min-width: 48rem) {
    line-height: 0.9;
  }
}

.cta {
  margin-top: 1.5rem;
  justify-self: stretch;

  display: flex;
  align-items: center;
  justify-content: space-between;

  @media (min-width: 30rem) {
    justify-self: flex-start;
    justify-content: flex-start;
    gap: 1.5rem;
  }

  @media (min-width: 60rem) {
    gap: 2rem;
  }
}

.cta__text {
  color: var(--color-neutral-900);
  font-size: 0.9375rem;
  font-weight: 500;
  letter-spacing: 0.8333em;
  text-transform: uppercase;
}
</style>
