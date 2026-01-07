import { ref, computed } from "vue";
import { defineStore } from "pinia";

export const useNoteStore = defineStore("notes", () => {
  const notes = ref([
    {
      id: 1,
      title: "Pinia 学习记录",
      content:
        "这是 Pinia 学习记录，这是 Pinia 学习记录这是 Pinia 学习记录这是 Pinia 学习记录这是 Pinia 学习记录这是 Pinia 学习记录这是 Pinia 学习记录这是 Pinia 学习记录这是 Pinia 学习记录",
    },
    {
      id: 2,
      title: "React 学习记录",
      content:
        "这是 React 学习记录这是 React 学习记录这是 React 学习记录这是 React 学习记录这是 React 学习记录这是 React 学习记录这是 React 学习记录这是 React 学习记录这是 React 学习记录",
    },
    {
      id: 3,
      title: "Vue 学习记录",
      content:
        "这是 Vue 学习记录这是 Vue 学习记录这是 Vue 学习记录这是 Vue 学习记录这是 Vue 学习记录",
    },
    {
      id: 4,
      title: "JavaScript 学习记录",
      content:
        "这是 JavaScript 学习记录这是 JavaScript 学习记录这是 JavaScript 学习记录这是 JavaScript 学习记录这是 JavaScript 学习记录这是 JavaScript 学习记录",
    },
  ]);

  const searchTerm = ref("");

  const searchedNotes = computed(() => {
    if (searchTerm.value === "") {
      return notes.value;
    } else {
      return notes.value.filter((note) => {
        return note.title.includes(searchTerm.value);
      });
    }
  });

  function addNote(title, content) {
    notes.value.push({
      id: notes.value.length + 1,
      title,
      content,
    });
    searchTerm.value = "";
  }

  return {
    notes,
    addNote,
    searchTerm,
    searchedNotes,
  };
});
