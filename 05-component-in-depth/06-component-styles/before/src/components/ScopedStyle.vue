<template>
  <p>这是 Scoped Style 组件中的内容，这里定义的样式只在组件内有效</p>
</template>
<script>
export default {};
</script>
<style scoped>
p {
  background-color: hsl(260deg, 100%, 60%, 0.7);
  padding: 1em;
  border-radius: 4px;
}
</style>
