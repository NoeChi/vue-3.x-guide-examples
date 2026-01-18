<template>
  <div>
    <p :class="$style.paragraph">这是使用 css modules 的组件</p>
  </div>
</template>
<script>
export default {};
</script>
<!-- 使用 CSS Modules，样式只作用于当前组件 -->
<style module>
.paragraph {
  background: hsl(320deg, 100%, 60%);
  font-size: 24px;
}
</style>
