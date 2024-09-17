<template>
    <div>
      <h2>006 - Props</h2>
      <h3>Parent Component</h3>
      <p>meineMessage: {{ meineMessage }}</p>
      <ChildComponentProps :msg="meineMessage" />
    </div>
  </template>
  
  <script setup lang="ts">
  import { ref } from 'vue';
  import ChildComponentProps from "./ChildComponentProps.vue";
  const meineMessage = ref<string>('Komm jetzt Windeln wechseln!');
  </script>
  
  <style scoped>
  /* CSS hier */
  </style>
  