<template>
  <article>
    <h2>如何使用 Vue Router</h2>
    <p>这个教程教你如何使用 Vue Router</p>
    <p>id 参数：{{ $route.params.id }}</p>
  </article>
</template>
<script>
export default {};
</script>
<style scoped>
article {
  max-width: 700px;
}
</style>
