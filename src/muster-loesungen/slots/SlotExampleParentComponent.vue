<template>
  <h1>015 - Slots</h1>
  <div class="parent">
    <SlotExampleChildComponent>
      <p>This is the main content of the card, passed through the default slot.</p>
      <template #footer>
        <button @click="handleClick">Click Me</button>
      </template>
    </SlotExampleChildComponent>
  </div>
</template>

<script setup lang="ts">
import SlotExampleChildComponent from './SlotExampleChildComponent.vue';

const handleClick = () => {
  alert('Button clicked!');
};
</script>

<style scoped>
.parent {
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
