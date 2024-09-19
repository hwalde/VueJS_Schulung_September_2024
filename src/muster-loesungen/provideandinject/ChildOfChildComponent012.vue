<template>
  <div class="child-of-child-container">
    <p><strong>Child of Child</strong></p>
    <pre>Wert ist: {{injectedMessage}}</pre>
  </div>
</template>

<script setup lang="ts">
import {inject, Ref} from "vue";
import {messageKey} from "@/muster-loesungen/provideandinject/keys.ts";

const injectedMessage = inject<Ref<string>>(messageKey);

if (!injectedMessage) {
  throw new Error('injectedMessage wurde nicht bereitgestellt.'); // should never be executedd
}
</script>

<style scoped>
.child-of-child-container {
  padding: 20px;
  background-color: grey;
  border-radius: 5px;
  border: 1px solid black;
}
</style>