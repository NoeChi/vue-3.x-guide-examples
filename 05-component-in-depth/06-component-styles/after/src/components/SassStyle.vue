<template>
  <div>
    <p>这是使用 sass 样式的组件</p>
  </div>
</template>
<script>
export default {};
</script>
<!-- 使用 sass 预处理器，并且使用 scoped 样式 -->
<style lang="scss" scoped>
div {
  p {
    background: hsl(280deg, 100%, 60%);
  }
}
</style>
