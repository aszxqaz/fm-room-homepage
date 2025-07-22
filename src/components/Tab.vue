<script setup lang="ts" generic="T">
import { inject } from 'vue';

defineProps<{
  value: T
}>();

const state = inject("tab-group-state") as any

</script>

<template>
  <Transition name="fade">
    <slot v-if="state.value.value == value"></slot>
  </Transition>
</template>
