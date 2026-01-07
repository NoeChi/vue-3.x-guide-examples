<template>
  <span class="text"
    ><slot />
    <a href="#">子组件中的其它元素（非根元素）</a>
  </span>
</template>
<script>
export default {};
</script>
<style scoped>
:slotted(div) {
  color: hsl(80deg, 90%, 50%);
}
</style>
