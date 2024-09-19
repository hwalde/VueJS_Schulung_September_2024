<template>
<div class="container">
  <h3>Example 012 - provide und inject</h3>
  <p><strong>Parent</strong></p>
  <ChildComponent012 />
</div>
</template>

<script setup lang="ts">
import ChildComponent012 from "@/muster-loesungen/provideandinject/ChildComponent012.vue";
import {provide, ref} from "vue";
import {messageKey} from "@/muster-loesungen/provideandinject/keys.ts";

const value = ref("A");

provide(messageKey, value);

window.setTimeout(() => {
  value.value = "B";
}, 3000);
</script>

<style scoped>
.container {
  color:black;
  padding: 20px;
  background-color: red;
  border-radius: 5px;
  border: 1px solid white;
}
</style>