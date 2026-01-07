<script setup>
import SearchNote from "./components/SearchNote.vue";
import NoteList from "./components/NoteList.vue";
import AddNote from "./components/AddNote.vue";
import { onMounted, ref, watch } from "vue";
import useAxios from "./composables/useAxios";
import useRequest from "./composables/useRequest";

const notes = ref([]);
const loading = ref(false);
const searchTerm = ref("");
const error = ref(null);

const axios = useAxios();

onMounted(async () => {
  loading.value = true;

  try {
    notes.value = await useRequest("/api/notes");
  } catch (e) {
    error.value = e.error;
  } finally {
    loading.value = false;
  }
});

watch(searchTerm, async (newSearchTerm) => {
  loading.value = true;
  // const res = await axios.get("/api/notes", {
  //   params: {
  //     term: newSearchTerm,
  //   },
  // });

  notes.value = await useRequest(
    `/api/notes?${new URLSearchParams({
      term: newSearchTerm,
    })}`
  );

  loading.value = false;
});

async function handleNoteFormSubmit(note) {
  // const res = await axios.post("/api/notes", note, {
  //   // headers: {
  //   //   "Content-Type": "application/json",
  //   //   Authorization: "Bearer SOMEJWTTOKEN",
  //   // },
  // });

  // const res = await fetch("/api/notes", {
  //   method: "POST",
  //   headers: {
  //     "Content-Type": "application/json",
  //     Authorization: "Bearer SOMEJWTTOKEN",
  //   },
  //   body: JSON.stringify(note),
  // });
  const data = await useRequest("/api/notes", "POST", note);

  notes.value.push(data);
}
</script>

<template>
  <main>
    <h1>我的笔记本</h1>
    <SearchNote v-model="searchTerm" />
    <div v-if="loading">loading...</div>
    <NoteList v-else :notes="notes" />
    <div v-if="error" style="color: red">{{ error.message }}</div>
    <AddNote @onNoteFormSubmit="handleNoteFormSubmit" />
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
