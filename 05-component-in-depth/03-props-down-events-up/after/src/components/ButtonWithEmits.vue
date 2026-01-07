<template>
  <button @click="$emit('customClick', '点击了按钮')">按钮</button>
</template>
<script>
export default {
  emits: ["customClick"],
};
</script>
<style scoped>
button {
  border: none;
  background: linear-gradient(
    90deg,
    hsl(240deg, 50%, 50%),
    hsl(280deg, 50%, 50%)
  );
  padding: 1em 2em;
  margin-top: 24px;
  margin-right: 12px;
  border-radius: 4px;
  color: white;
}
</style>
