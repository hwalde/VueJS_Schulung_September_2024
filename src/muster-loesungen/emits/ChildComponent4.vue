<template>
    <div class="wrapper">
      <p>Child component 4</p>
      <button @click="durstMelden">Durst melden!</button>
    </div>
  </template>
  
  <script setup lang="ts">
    const emit = defineEmits<{ (e: 'habeDurst'): void }>();

    function durstMelden() {
      emit('habeDurst');
    }
  </script>
  
  <style scoped>
 .wrapper {
   border: 1px solid white;
   background-color: grey;
   border-radius: 5px;
   padding: 10px;
 }
  </style>
  