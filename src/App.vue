<script setup lang="ts">
import { onMounted } from "vue";
import PageHeader from "./components/PageHeader.vue";
import PageMain from "./components/PageMain.vue";

let resizeTimer: number | undefined;

onMounted(() => {
  window.addEventListener("resize", () => {
    document.body.classList.add("resize-animation-stopper");
    clearTimeout(resizeTimer);
    resizeTimer = setTimeout(() => {
      document.body.classList.remove("resize-animation-stopper");
    }, 400);
  });
});
</script>

<template>
  <PageHeader />
  <PageMain />
</template>

<style>
:root {
  --color-neutral-900: hsl(0, 0%, 0%);
  --color-neutral-800: hsl(0, 0%, 27%);
  --color-neutral-500: hsl(0, 0%, 63%);
  --color-neutral-200: hsl(0, 0%, 85%);
  --color-neutral-100: hsl(0, 0%, 94%);
  --color-neutral-50: hsl(0, 0%, 98%);
  --color-neutral-0: hsl(0, 100%, 100%);
  --carousel-button-width: 10rem;
  --carousel-button-height: 5rem;
  --font-weight-regular: 500;
  --font-weight-semibold: 600;
  --font-weight-bold: 700;
}

.resize-animation-stopper * {
  animation: none !important;
  transition: none !important;
}
</style>
