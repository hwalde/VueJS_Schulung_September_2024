<template>
  <h2 class="my-5">Hallo und Herzlich Willkommen zur Vue.JS Schulung</h2>
  <p>Bitte nutze das Dropdown-Menü links oben um eine Muster-Lösungen anzuschauen</p>
  <p>Bitte klicke auf den Button um zu deinem Code zu kommen</p>
  <hr>
  Btw. der count liegt bei: {{count}}
</template>

<script setup lang="ts">
  import { useCounter } from "@/composables/useCounter.ts";
  const { count } = useCounter();
</script>