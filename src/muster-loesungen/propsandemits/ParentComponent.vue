<template>
    <div>
      <h2>007 - v.model</h2>
      <h3>Parent Component</h3>
      <p>meineMessage: {{ meineMessage }}</p>
      <ChildComponent v-model="meineMessage" />
    </div>
  </template>
  
  <script setup lang="ts">
  import { ref } from 'vue';
  import ChildComponent from "./ChildComponent.vue";
  const meineMessage = ref<string>('Komm jetzt Windeln wechseln!');
  </script>
  
  <style scoped>
  /* CSS hier */
  </style>
  