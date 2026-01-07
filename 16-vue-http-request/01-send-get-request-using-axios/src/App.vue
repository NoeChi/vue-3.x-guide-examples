<script setup>
import SearchNote from "./components/SearchNote.vue";
import NoteList from "./components/NoteList.vue";
import AddNote from "./components/AddNote.vue";
import { onMounted, ref } from "vue";
import axios from "axios";

const notes = ref([]);

onMounted(async () => {
  const res = await axios.get("http://localhost:3000/notes");
  notes.value = res.data;
});
</script>

<template>
  <main>
    <h1>我的笔记本</h1>
    <SearchNote />
    <NoteList :notes="notes" />
    <AddNote />
  </main>
</template>

<style scoped>
main {
  width: 600px;
  margin: 0 auto;
  height: 100%;
  display: grid;
  justify-items: center;
  padding: 48px 0;
}
</style>
