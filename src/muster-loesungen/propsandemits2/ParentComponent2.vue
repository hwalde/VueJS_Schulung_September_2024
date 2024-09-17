<template>
    <div>
      <h2>008 - v-model:blablub</h2>
      <h3>Parent Component</h3>
      <p>meineMessage: {{ meineMessage }}</p>
      <ChildComponent2 v-model:msg="meineMessage" />
    </div>
  </template>
  
  <script setup lang="ts">
  import { ref } from 'vue';
  import ChildComponent2 from "./ChildComponent2.vue";
  const meineMessage = ref<string>('Komm jetzt Windeln wechseln!');
  </script>
  
  <style scoped>
  /* CSS hier */
  </style>
  