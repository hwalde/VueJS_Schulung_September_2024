<template>
    <div>
      <h2>010 - emit</h2>
      <h3>Parent Component</h3>
      <ChildComponent4 @habeDurst="gibTrinken"  />
    </div>
  </template>
  
  <script setup lang="ts">
  import ChildComponent4 from "./ChildComponent4.vue";
  function gibTrinken() {
    alert('Hier hast du etwas zum trinken!');
  }
  </script>
  
  <style scoped>
  /* CSS hier */
  </style>
  