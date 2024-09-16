<template>
    <div class="container">
      <h1 class="container__title">002 - SCSS</h1>
    </div>
  </template>
  
  <script lang="ts" setup>
  // Component logic here
  </script>
  
  <style lang="scss" scoped>
  // Do you guys know the difference between scoped and non-scoped?

  $primary-color: #8e25a5;

  .container {
    padding: 20px;
  
    &__title {
      color: $primary-color;
    }
  }

  // Did you notice we use BEM Syntax here?
  // https://getbem.com/
  </style>