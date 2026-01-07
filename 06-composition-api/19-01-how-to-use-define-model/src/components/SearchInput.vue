<template>
  <label><span>搜索：</span><input type="text" v-model="searchModel" /> </label>
</template>
<script setup>
const searchModel = defineModel();
</script>
<style scoped>
input {
  padding: 8px 14px;
  border: 1px solid hsl(280deg, 50%, 50%);
  border-radius: 4px;
  outline: none;
  background: hsl(280deg, 50%, 30%, 0.2);
  color: white;
}
</style>
