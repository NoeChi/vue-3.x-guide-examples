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
  props: ["modelValue"],
  emits: ["update:modelValue"],
};
</script>
<style scoped>
label {
  display: block;
  margin-bottom: 20px;
}

input {
  padding: 8px 14px;
  border: 1px solid hsl(280deg, 50%, 50%);
  border-radius: 4px;
  outline: none;
  background: hsl(280deg, 50%, 30%, 0.2);
  color: white;
}

select {
  border: 1px solid hsl(280deg, 50%, 50%);
  background: none;
  color: white;
  padding: 6px;
  border-radius: 4px;
}
</style>
