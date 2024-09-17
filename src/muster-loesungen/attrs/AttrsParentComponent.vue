<template>
  <!-- Weiterleitung von Attributen (z.B. class, id) an WrapperComponent -->
  <h1>$attrs Example</h1>
  <wrapper-component class="highlight" id="wrapper" style="color: red;" data-custom="example" />
</template>

<script setup lang="ts">
import WrapperComponent from './AttrsWrapperComponent.vue';
</script>