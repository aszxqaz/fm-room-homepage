<script setup lang="ts">
import { tabs } from "../data/data";

defineProps<{
  currentTab: number;
  direction: string;
}>();
</script>

<template>
  <div class="carousel">
    <Transition :name="`slide-${direction}`">
      <div class="carousel__slide" :key="tabs[currentTab].heading">
        <picture>
          <source
            :srcset="tabs[currentTab].desktopImg"
            media="(min-width: 60rem)"
          />
          <source
            :srcset="tabs[currentTab].tabletImg"
            media="(min-width: 48rem)"
          />
          <source :srcset="tabs[currentTab].mobileImg" />
          <img
            class="carousel__image"
            :src="tabs[currentTab].desktopImg"
            alt=""
          />
        </picture>
      </div>
    </Transition>
    <slot></slot>
  </div>
</template>

<style>
.carousel {
  background: var(--color-neutral-100);
  position: relative;
  width: 100%;
  height: 22.5rem;
  overflow: clip;

  @media (min-width: 48rem) {
    height: 25rem;
  }
}

.carousel__image {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.carousel__slide {
  position: absolute;
  inset: 0;
  transform: translateX(0);
}

@keyframes fade-in {
  from {
    opacity: 0;
  }

  to {
    opacity: 1;
  }
}

.fade-enter-active {
  animation: fade-in 0.5s;
}

.fade-leave-active {
  animation: fade-in 0.5s reverse;
}

@keyframes slide-in-next {
  from {
    transform: translateX(100%);
  }

  to {
    transform: translateX(0);
  }
}

@keyframes slide-out-next {
  from {
    transform: translateX(0);
  }

  to {
    transform: translateX(-100%);
  }
}

@keyframes slide-in-prev {
  from {
    transform: translateX(-100%);
  }

  to {
    transform: translateX(0);
  }
}

@keyframes slide-out-prev {
  from {
    transform: translateX(0);
  }

  to {
    transform: translateX(100%);
  }
}

.slide-next-enter-active {
  animation: slide-in-next 1s;
}

.slide-next-leave-active {
  animation: slide-out-next 1s;
}

.slide-prev-enter-active {
  animation: slide-in-prev 1s;
}

.slide-prev-leave-active {
  animation: slide-out-prev 1s;
}
</style>
