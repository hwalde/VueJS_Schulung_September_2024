<template>
    <div class="wrapper">
      <p>Child component 3</p>
      <p>{{msg}}</p>
      <button @click="answer">Antworten als Kind</button>
    </div>
  </template>
  
  <script setup lang="ts">
    defineProps({ msg: String });
    const emit = defineEmits<{ (e: 'hallo-eltern', value: string): void }>();

    function answer() {
      emit('hallo-eltern', 'Nein!!!');
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
  