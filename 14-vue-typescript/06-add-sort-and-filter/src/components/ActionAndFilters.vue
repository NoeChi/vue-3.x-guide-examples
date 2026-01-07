<script setup lang="ts"></script>
<template>
  <div class="actions">
    <button>按价格排序</button>
    <button>按名称排序</button>
    <select>
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
