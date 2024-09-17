<template>
  <h1>004 - Globale Funktionen</h1>
  <button @click="useGlobalFunction">Klicke mich</button>
</template>

<script lang="ts" setup>
import { getCurrentInstance } from 'vue';

const { proxy } = getCurrentInstance();

const useGlobalFunction = () => {
  // Siehe für Definition von $myGlobalFunction main.ts !
  proxy.$myGlobalFunction(); // Zugriff auf die globale Funktion
};
</script>
