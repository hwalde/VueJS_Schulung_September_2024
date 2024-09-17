<template>
    <div>
      <h2>009 - emit im Parent auffangen</h2>
      <h3>Parent Component</h3>
      <p>meineMessage: {{ meineMessage }}</p>
      <!--ChildComponent3 :msg="meineMessage" @hallo-eltern="(message) => meineMessage = message"  /-->
      <ChildComponent3 :msg="meineMessage" @hallo-eltern="updateMeineMessage"  />
    </div>
  </template>
  
  <script setup lang="ts">
  import { ref } from 'vue';
  import ChildComponent3 from "./ChildComponent3.vue";
  const meineMessage = ref<string>('Komm jetzt Windeln wechseln!');
  function updateMeineMessage(message: string) {
    meineMessage.value = message;
  }
  </script>
  
  <style scoped>
  /* CSS hier */
  </style>
  