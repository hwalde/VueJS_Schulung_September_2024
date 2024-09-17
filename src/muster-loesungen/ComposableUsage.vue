<template>
  <div>
    <h3>011 - Verwendung von Composables</h3>
    <p>
      count: {{count}}
    </p>
    <button @click="increment">Increment</button>
    <pre>Übrigens in views/Home.vue greifen wir auch auf count zu!</pre>
  </div>

</template>

<script setup lang="ts">
import { useCounter } from "@/composables/useCounter.ts";

const { count, increment } = useCounter();
</script>

<style scoped>

</style>