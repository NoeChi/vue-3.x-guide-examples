<template>
  <div>
    <a v-for="n in totalPage" @click.prevent="changePage(n)">
      {{ n }}
    </a>
    <p>当前页：{{ currentPage }}</p>
  </div>
</template>
<script>
export default {};
</script>
<style scoped>
div {
  padding: 24px 0;
}

p {
  margin-top: 12px;
}

a {
  color: hsl(280deg, 100%, 80%);
  width: 24px;
  display: inline-block;
  text-decoration: underline;
  cursor: pointer;
}
</style>
