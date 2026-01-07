<template>
  <router-link v-if="!private || isLoggedIn()" v-bind="$props">
    <slot />
  </router-link>
</template>
<script>
import { RouterLink } from "vue-router";
export default {
  props: {
    ...RouterLink.props,
    private: {
      type: Boolean,
      default: false,
    },
  },
  methods: {
    isLoggedIn() {
      return localStorage.getItem("user") !== null;
    },
  },
};
</script>
<style scoped></style>
