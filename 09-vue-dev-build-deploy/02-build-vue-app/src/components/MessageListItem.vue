<template>
  <li>
    {{ msg }} <button @click="$emit('remove', id)">删除</button>
  </li>
</template>
<script setup>
const props = defineProps(["msg", "id"]);
const emits = defineEmits(["remove"]);

// props 和 emits 可以在这里使用，模板中可以继续直接使用 props 属性名，以及 this.$emit();
</script>
<style scoped>
li {
  display: flex;
  align-items: center;
  gap: 12px;
}

li::before {
  content: "";
  display: block;
  width: 8px;
  height: 8px;
  background-color: hsl(280deg, 100%, 70%);
  border-radius: 100%;
}
</style>
