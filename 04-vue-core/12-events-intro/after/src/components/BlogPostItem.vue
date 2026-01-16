<template>
  <div>
    <a :href="link">{{ title }}</a>
    <!-- 自定義事件，傳出事件名稱和參數 -->
    <button @click="$emit('deletePost', id)">删除</button>
  </div>
</template>
<script>
export default {
  props: ["id", "link", "title"],
  // 自定義事件名稱
  emits: ["deletePost"],
};
</script>
<style scoped>
div {
  margin-bottom: 1em;
}

button {
  border: none;
  background: linear-gradient(
    90deg,
    hsl(240deg, 50%, 50%),
    hsl(280deg, 50%, 50%)
  );
  padding: 3px 4px;
  margin-left: 12px;
  border-radius: 4px;
  color: white;
}
</style>
