<!-- AttrsWrapperComponent.vue -->
<template>
  <!-- Das Attribut v-bind="$attrs" sorgt dafür, dass alle empfangenen Attribute weitergegeben werden -->
  <child-component v-bind="$attrs" />
</template>

<script setup lang="ts">
import { defineProps, useAttrs } from 'vue';
import ChildComponent from './AttrsChildComponent.vue';


defineProps<{
  customMessage?: string;
}>();

const attrs = useAttrs();

console.log('Empfangene Attribute:', attrs);
</script>
