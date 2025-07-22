<script setup lang="ts" generic="T">
import { provide } from 'vue';

const value = defineModel<T>();

provide("tab-group-state", {
  value,
})
</script>

<template>
  <slot></slot>
</template>
