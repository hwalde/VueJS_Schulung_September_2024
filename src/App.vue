<template>
  <div id="app">
    <nav>
      <select @change="navigate">
        <option value="/"> Muster-Lösungen &gt;</option>
        <option value="/001">Example 001 - Vue Komponente</option>
        <option value="/002">Example 002 - SCSS</option>
        <option value="/003">Example 003 - Mit Script Setup</option>
        <option value="/004">Example 004 - Global Function Usage</option>
        <option value="/005">Example 005 - $attrs Example</option>
        <option value="/006">Example 006 - props</option>
        <option value="/007">Example 007 - v-model</option>
        <option value="/008">Example 008 - v-model:blablub</option>
        <option value="/009">Example 009 - emit im Parent auffangen</option>
        <option value="/010">Example 010 - emit</option>
        <option value="/011">Example 011 - Verwendung von Composables</option>
        <option value="/012">Example 012 - provide und inject</option>
        <option value="/013">Example 013 - lifecycle example</option>
        <option value="/014">Example 014 - reactive utilities</option>
        <option value="/015">Example 015 - slots</option>
      </select>
      <button @click="router.push('/mein-reich')">Mein Code</button>
    </nav>
    <router-view id="app-content"/>
  </div>
</template>

<script setup lang="ts">
import { useRouter } from 'vue-router';

const router = useRouter();

// Methode zum Navigieren bei Auswahländerung
const navigate = (event: Event) => {
  const target = event.target as HTMLSelectElement;
  router.push(target.value);  // Navigiere zur ausgewählten Route
};
</script>

<style scoped>
/* App-Container */
#app {
  width: 100%;
}

/* Dropdown Styling */
nav select {
  padding: 10px;
  font-size: 16px;
  border: 1px solid #ccc;
  border-radius: 4px;
  cursor: pointer;
  background-color: #3498db;
  color: white;
}

nav select option {
  color: black;
}

nav button {
  margin-left: 10px;
}
</style>
