<template>
  <div class="card">
    <header class="card-header">
      <!-- Slot for header content -->
      <slot name="header">Default Header</slot>
    </header>
    <main class="card-content">
      <!-- Default slot for main content -->
      <slot>Default Content</slot>
    </main>
    <footer class="card-footer">
      <!-- Slot for footer content -->
      <slot name="footer">Default Footer</slot>
    </footer>
  </div>
</template>

<script setup lang="ts">
// No script needed in this basic example, but you could add props or reactive data here if required
</script>

<style scoped>
.card {
  border: 1px solid #ddd;
  border-radius: 8px;
  padding: 16px;
  max-width: 400px;
  margin: 20px;
  color: black;
}
.card-header,
.card-footer {
  background-color: #f5f5f5;
  padding: 8px;
  border-radius: 4px;
}
.card-content {
  padding: 12px;
  color: white;
}
</style>
