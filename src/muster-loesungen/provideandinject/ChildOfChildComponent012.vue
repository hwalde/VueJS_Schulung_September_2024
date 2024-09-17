<template>
  <p class="container">Child of Child</p>
  <pre>Wert ist: {{injectedMessage}}</pre>
</template>

<script setup lang="ts">
import {inject, Ref} from "vue";

const messageKey = Symbol('message');

const injectedMessage = inject<Ref<string>>(messageKey);

if (!injectedMessage) {
  // throw new Error('injectedMessage wurde nicht bereitgestellt.');
}
</script>

<style scoped>
.container {
  padding: 20px;
  background-color: grey;
  border-radius: 5px;
  border: 1px solid black;
}
</style>