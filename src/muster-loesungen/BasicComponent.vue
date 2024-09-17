<template>
    <div>
      <h1>001 - Basic component</h1>
      <p v-html="message" />
    </div>
  </template>
  
  <script lang="ts">
  import { ref, defineComponent } from 'vue';
  
  export default defineComponent({
    setup() {
      // Reaktive Variablen und Logik hier
      const message = ref<string>('<span style="color:purple">Hallo Welt</span>');

      // Rückgabe der Variablen und Funktionen an das Template
      return {
        message,
      };
    },
  });
  </script>
  
  <style scoped>
  /* CSS hier */
  </style>
  