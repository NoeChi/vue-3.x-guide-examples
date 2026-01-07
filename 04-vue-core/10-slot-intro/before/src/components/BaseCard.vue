<template>
  <div class="card">
    <div class="title">{{ title }}</div>
    <div class="content"></div>
  </div>
</template>
<script>
export default {
  props: ["title"],
};
</script>
<style scoped>
.card {
  border: 1px solid hsl(250deg, 100%, 80%);
  padding: 20px;
  border-radius: 8px;
}
.title {
  font-size: 1.5em;
  font-weight: bold;
  margin-bottom: 12px;
}
</style>
