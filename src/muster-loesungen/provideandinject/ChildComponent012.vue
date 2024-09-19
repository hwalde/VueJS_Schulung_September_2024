<template>
  <div class="child-container">
    <p><strong>Child</strong></p>
    <ChildOfChildComponent012 />
  </div>
</template>

<script setup lang="ts">
import ChildOfChildComponent012 from "@/muster-loesungen/provideandinject/ChildOfChildComponent012.vue";
</script>

<style scoped>
.child-container {
  padding: 20px;
  background-color: yellow;
  border-radius: 5px;
  border: 1px solid black;
}
</style>