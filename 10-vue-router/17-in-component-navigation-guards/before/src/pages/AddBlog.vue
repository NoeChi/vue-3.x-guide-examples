<template>
  <form>
    <label for="title">博客标题：</label>
    <input type="text" name="title" id="title" />
    <label for="content">博客内容：</label>
    <textarea
      name="content"
      id="content"
      cols="30"
      rows="10"
    ></textarea>
  </form>
</template>
<script>
export default {};
</script>
<style scoped>
form {
  padding: 48px;
  display: grid;
}

label {
  margin-bottom: 12px;
}

form > label:last-of-type {
  margin-top: 12px;
}
</style>
