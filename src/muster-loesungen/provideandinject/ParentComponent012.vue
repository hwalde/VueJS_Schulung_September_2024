<template>
<div class="container">
  <h3>Example 012 - provide und inject</h3>
  <p>Parent</p>
  <ChildComponent012 />
</div>
</template>

<script setup lang="ts">
import ChildComponent012 from "@/muster-loesungen/provideandinject/ChildComponent012.vue";
import {provide, ref} from "vue";

const messageKey = Symbol('message');

const value = ref("A");

provide(messageKey, value);

window.setTimeout(() => {
  value.value = "B";
}, 10000)
</script>

<style scoped>
.container {
  padding: 20px;
  background-color: red;
  border-radius: 5px;
  border: 1px solid white;
}
</style>