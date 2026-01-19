<template>
  <label
    ><span>搜索：</span
    ><input
      type="text"
      :value="modelValue"
      @input="$emit('update:modelValue', $event.target.value)"
    />
  </label>
</template>
<script>
export default {
// modelValue 作為 prop 傳入，是固定的必須這樣寫
  props: ["modelValue"], 
  emits: ["update:modelValue"],
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
