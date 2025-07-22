<script setup lang="ts">
defineEmits<{
  (e: "next"): void;
  (e: "prev"): void;
}>();
</script>

<template>
  <div class="carousel-btn-group">
    <button class="carousel-button" @click="$emit('prev')">
      <img src="/icons/icon-angle-left.svg" alt="go back" />
    </button>
    <button class="carousel-button" @click="$emit('next')">
      <img src="/icons/icon-angle-right.svg" alt="go forward" />
    </button>
  </div>
</template>

<style lang="css" scoped>
.carousel-button {
  display: grid;
  place-items: center;
  width: clamp(3.5rem, 2.068702290076336rem + 6.106870229007634vw, 5rem);
  aspect-ratio: 1;
  border: none;

  background-color: var(--color-neutral-900);
  cursor: pointer;

  > img {
    width: 15%;
    aspect-ratio: 0.5;
  }

  @media (hover) {
    transition: background-color 300ms ease-in-out;

    &:hover {
      background-color: var(--color-neutral-800);
    }
  }
}

.carousel-btn-group {
  display: flex;
}

.carousel-btn-group--desktop {
  display: none;

  @media (min-width: 60rem) {
    display: flex;
  }
}

.carousel-btn-group--mobile {
  display: flex;

  @media (min-width: 60rem) {
    display: none;
  }
}
</style>
