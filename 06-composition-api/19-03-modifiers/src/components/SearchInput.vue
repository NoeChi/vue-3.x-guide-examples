<template>
  <label><span>搜索：</span><input type="text" v-model="searchModel" /> </label>
  <label>
    <span>类别：</span>
    <select v-model="categoryModel">
      <option value="default">默认</option>
      <option value="fontend">前端</option>
      <option value="backend">后端</option>
      <option value="fullstack">全栈</option>
    </select>
  </label>
</template>
<script setup>
const [searchModel, searchModelModifiers] = defineModel("searchModel", {
  set(value) {
    if (searchModelModifiers.lc) {
      return value.toLowerCase();
    }
    return value;
  },
});
const categoryModel = defineModel("categoryModel");
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
