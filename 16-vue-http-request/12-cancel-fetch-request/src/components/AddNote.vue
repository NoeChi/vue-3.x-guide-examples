<template>
  <div class="addNote">
    <h2>添加新笔记</h2>
    <form @submit.prevent="$emit('onNoteFormSubmit', { title, content })">
      <input type="text" placeholder="请输入笔记标题" v-model="title" />
      <textarea
        rows="6"
        placeholder="请输入笔记内容"
        v-model="content"
      ></textarea>
      <button type="submit">添加笔记</button>
    </form>
  </div>
</template>
<script setup>
import { ref } from "vue";
const title = ref("");
const content = ref("");

defineEmits(["onNoteFormSubmit"]);
</script>
<style scoped>
.addNote {
  width: 100%;
  border-top: 1px solid hsl(0, 0%, 95%);
  padding-top: 24px;
}

.addNote h2 {
  margin-bottom: 12px;
}

.addNote form {
  display: grid;
  gap: 24px;
}
</style>
