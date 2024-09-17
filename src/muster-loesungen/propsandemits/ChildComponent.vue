<template>
    <div class="wrapper">
      <p>Child component</p>
      <p>{{modelValue}}</p>
      <button @click="answer">Antworten als Kind</button>
    </div>
  </template>
  
  <script setup lang="ts">
    defineProps({ modelValue: String });
    const emit = defineEmits<{ (e: 'update:modelValue', value: string): void }>();

    function answer() {
      emit('update:modelValue', 'Nein!!!');
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
  