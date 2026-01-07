<template>
  <div class="card">
    <div class="title">
      {{ title }}
    </div>
    <div class="content">
      <slot></slot>
    </div>
  </div>
</template>
<script>
export default {
  props: ["title"],
};
</script>
<style scoped>
.card {
  border: 1px solid hsl(280deg, 50%, 50%);
  border-radius: 8px;
  padding: 12px;
  min-width: 240px;
}

.title {
  border-bottom: 2px solid hsl(280deg, 50%, 50%);
  padding-bottom: 8px;
}
.content {
  min-height: 20px;
  margin-top: 18px;
}
</style>
