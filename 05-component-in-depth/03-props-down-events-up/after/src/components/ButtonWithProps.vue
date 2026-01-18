<template>
  <!-- 子組件的onclick接收父組件的handleClick函式 -->
  <!-- onclick('点击了按钮') = handleClick('点击了按钮') -->
  <button @click="onclick && onclick('点击了按钮')">按钮</button>
  <!-- onclick && onclick('点击了按钮')是 Short-circuit evaluation -->
  <!-- 等於 if (onclick) { onclick('点击了按钮') } -->
</template>
<script>
export default {
  props: ["onclick"],
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
