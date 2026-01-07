<template>
  <button @click="navigate">
    <slot />
  </button>
</template>
<script setup>
import { RouterLink, useLink } from "vue-router";

const props = defineProps({ ...RouterLink.props });
// 还有 route, href, isActive, isExactActive，与 router-link v-slot 暴露的 API 一致
const { navigate } = useLink(props);
</script>
<style scoped></style>
