<template>
  <div>
    <h3>ComposableUsage</h3>
    <p>
      count: {{count}}
    </p>
    <button @click="increment">Increment</button>
  </div>

</template>

<script setup lang="ts">
import { useCounter } from "@/composables/useCounter.ts";

const { count, increment } = useCounter();
</script>

<style scoped>

</style>