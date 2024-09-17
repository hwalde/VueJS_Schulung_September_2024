<template>
  <div>
    <h1>003 - Wir nutzen &lt;script setup&gt;</h1>
    <button @click="incrementCounter">Erhöhen</button>
    <p>{{ counter }}</p>
  </div>
</template>
  
<script lang="ts" setup>
import {ref} from 'vue';
const counter = ref<number>(1);

function incrementCounter() {
  counter.value++;
}
</script>
