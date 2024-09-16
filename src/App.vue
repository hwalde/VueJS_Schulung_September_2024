<template>
  <div id="app">
    <nav>
      <select @change="navigate">
        <option value="/"> Muster-Lösungen &gt;</option>
        <option value="/001">Example 001 - Vue Komponente</option>
        <option value="/002">Example 002 - SCSS</option>
        <option value="/003">Example 003 - Mit Script Setup</option>
      </select>
      <button @click="router.push('/mein-reich')">Mein Code</button>
    </nav>
    <LoadingSpinner />
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
