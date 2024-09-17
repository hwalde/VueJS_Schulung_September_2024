<template>
  <div class="container">
    <p>Child</p>
    <ChildOfChildComponent012 />
  </div>
</template>

<script setup lang="ts">
import ChildOfChildComponent012 from "@/muster-loesungen/provideandinject/ChildOfChildComponent012.vue";
</script>

<style scoped>
.container {
  padding: 20px;
  background-color: yellow;
  border-radius: 5px;
  border: 1px solid black;
}
</style>