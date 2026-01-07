<template>
  <router-link custom v-bind="$props" v-slot="{ navigate }">
    <button @click="navigate">
      <slot />
    </button>
  </router-link>
</template>
<script>
import { RouterLink } from "vue-router";
export default {
  props: {
    ...RouterLink.props,
  },
};
</script>
<style scoped></style>
