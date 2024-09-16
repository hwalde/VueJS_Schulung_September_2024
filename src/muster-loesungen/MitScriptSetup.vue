<template>
  <div>
    <h1>003 - Wir nutzen &lt;script setup&gt;</h1>
    <p>{{ message }}</p>
  </div>
</template>
  
<script lang="ts" setup>
  import { ref } from 'vue';
  const message = ref<string>('Hallo Vue 3 mit <script setup>!');
</script>
