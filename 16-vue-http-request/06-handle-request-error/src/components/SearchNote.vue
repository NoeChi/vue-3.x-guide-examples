<template>
  <div class="search">
    <input
      type="text"
      placeholder="搜索笔记"
      :value="modelValue"
      @input="$emit('update:modelValue', $event.target.value)"
    />
  </div>
</template>
<script setup>
defineProps(["modelValue"]);
defineEmits(["update:modelValue"]);
</script>

<style scoped>
.search {
  margin-top: 24px;
  width: 100%;
}
</style>
