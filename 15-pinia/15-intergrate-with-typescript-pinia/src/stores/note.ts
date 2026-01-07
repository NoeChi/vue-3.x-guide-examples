import { ref, computed } from "vue";
import { defineStore } from "pinia";
import { useUserStore } from "./user";

interface Note {
  id: number;
  title: string;
  content: string;
}

export const useNoteStore = defineStore("notes", () => {
  const notes = ref<Note[]>();

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

  const userStore = useUserStore();

  async function addNote(title: string, content: string) {
    if (userStore.isLoggedIn()) {
      setTimeout(() => {
        notes.value.push({
          id: notes.value.length + 1,
          title,
          content,
        });
      }, 2000);
    }
    searchTerm.value = "";
  }

  return {
    notes,
    addNote,
    searchTerm,
    searchedNotes,
  };
});
