<template>
    <div class="wrapper">
      <p>Child component 2</p>
      <p>{{msg}}</p>
      <button @click="answer">Antworten als Kind</button>
    </div>
  </template>
  
  <script setup lang="ts">
    defineProps({ msg: String });
    const emit = defineEmits<{ (e: 'update:msg', value: string): void }>();

    function answer() {
      emit('update:msg', 'Nein!!!');
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
  