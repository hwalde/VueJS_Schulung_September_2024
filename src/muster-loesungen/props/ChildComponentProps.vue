<template>
    <div class="wrapper">
      <p>Child component</p>
      <p>{{msg}}</p>
    </div>
  </template>
  
  <script setup lang="ts">
    defineProps({ msg: String });
  </script>
  
  <style scoped>
 .wrapper {
   border: 1px solid white;
   background-color: grey;
   border-radius: 5px;
   padding: 10px;
 }
  </style>
  