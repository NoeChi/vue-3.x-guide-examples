<script setup lang="ts">
const emit = defineEmits<{
  (e: "sortByPrice"): void;
  (e: "sortByName"): void;
  (e: "filterByStock", inStock: boolean | null): void;
}>();

function emitFilterByStock(e: Event) {
  const value = (e.target as HTMLSelectElement).value;
  let inStock: boolean | null = null;
  if (value) {
    inStock = value === "true";
  }
  emit("filterByStock", inStock);
}
</script>
<template>
  <div class="actions">
    <button @click="emit('sortByPrice')">按价格排序</button>
    <button @click="emit('sortByName')">按名称排序</button>
    <select @change="emitFilterByStock">
      <option value="">按库存过滤</option>
      <option value="true">有货</option>
      <option value="false">无货</option>
    </select>
  </div>
</template>
<style scoped>
.actions {
  display: flex;
  gap: 24px;
}
</style>
