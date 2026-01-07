<script setup lang="ts">
import { ref, type Ref } from "vue";

const num = ref(0);
const str: Ref<string> = ref("str");
const bool = ref<boolean>(true);
</script>

<template>
  <main>
    <p>{{ num }}</p>
    <p>{{ str }}</p>
    <p>{{ bool }}</p>
  </main>
</template>

<style scoped></style>
