<template>
  <p>{{ name }} - {{ typeof name }}</p>
  <p>{{ age }} - {{ typeof age }}</p>
  <p>{{ isStudent }} - {{ typeof isStudent }}</p>
</template>
<script>
export default {
  props: {
    name: String,
    // 定義資料型態為Number，必須傳入且要大於0
    age: {
      type: Number, 
      required: true,
      validator(value) {
        return value > 0;
      },
    },
    // 定義資料型態為Boolean，預設值為false
    isStudent: {
      type: Boolean,
      default: false,
    },
  },
};
</script>
