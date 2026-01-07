<template>
  <input type="text" v-model="inputText" ref="inputControl" />
</template>

<script>
export default {
  data() {
    return {
      inputText: "",
    };
  },
  mounted() {
    this.$refs.inputControl.focus();
  },
  methods: {
    blur() {
      this.$refs.inputControl.blur();
    },
  },
};
</script>

<style scoped>
input {
  padding: 8px 14px;
  border: 1px solid hsl(280deg, 50%, 50%);
  border-radius: 4px;
  outline: none;
  background: hsl(280deg, 50%, 30%, 0.2);
  color: white;
}
</style>
