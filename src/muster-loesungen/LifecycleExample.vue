<template>
    <div>
      <h1>013 - Lifecycle example</h1>
      <p>Zähler: {{ count }}</p>
      <button @click="increment">Erhöhen</button>
    </div>
  </template>
  
  <script setup lang="ts">
  import {onBeforeMount, onBeforeUnmount, onBeforeUpdate, onMounted, onUnmounted, onUpdated, ref} from 'vue';

  // Reaktiver Zustand
  const count = ref(0);

  // Methoden
  const increment = () => {
    count.value++;
  };

  // Lifecycle Hooks

  // Wird ausgeführt, bevor die Komponente in den DOM gemountet wird
  onBeforeMount(() => {
    console.log('onBeforeMount: Die Komponente wird bald gemountet.');
  });

  // Wird ausgeführt, nachdem die Komponente in den DOM gemountet wurde
  onMounted(() => {
    console.log('onMounted: Die Komponente wurde in den DOM gemountet.');
  });

  // Wird ausgeführt, bevor die Komponente aktualisiert wird (z. B. bevor das Template neu gerendert wird)
  onBeforeUpdate(() => {
    console.log('onBeforeUpdate: Die Komponente wird bald aktualisiert.');
  });

  // Wird ausgeführt, nachdem die Komponente aktualisiert wurde
  onUpdated(() => {
    console.log('onUpdated: Die Komponente wurde aktualisiert.');
  });

  // Wird ausgeführt, bevor die Komponente zerstört wird (z. B. bevor sie aus dem DOM entfernt wird)
  onBeforeUnmount(() => {
    console.log('onBeforeUnmount: Die Komponente wird bald entfernt.');
  });

  // Wird ausgeführt, nachdem die Komponente zerstört wurde
  onUnmounted(() => {
    console.log('onUnmounted: Die Komponente wurde entfernt.');
  });
  </script>
  
  <style scoped>
  /* CSS hier */
  </style>
  