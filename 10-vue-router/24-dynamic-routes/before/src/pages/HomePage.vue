<template>
  <div class="container">
    <nav class="globalNav"></nav>
    <main>
      <form @submit.prevent>
        <h2>添加页面</h2>
        <label for="page_url">页面路径：</label>
        <input
          id="page_url"
          type="text"
          placeholder="请输入页面路径，如 /about"
          v-model="pageUrl"
        />
        <label for="page_name">页面名称：</label>
        <input
          id="page_name"
          type="text"
          placeholder="请输入页面名称，如 /关于我们"
          v-model="pageName"
        />
        <label for="page_content">页面内容：</label>
        <textarea
          id="page_content"
          cols="30"
          rows="10"
          placeholder="请输入页面内容"
          v-model="pageContent"
        ></textarea>
        <button type="submit">提交</button>
      </form>
      <div></div>
    </main>
  </div>
</template>
<script>
export default {
  data() {
    return {
      pageUrl: "",
      pageName: "",
      pageContent: "",
      pages: [],
    };
  },
  methods: {},
};
</script>
<style scoped>
.container {
  height: 100%;
}

.globalNav {
  height: 120px;
  width: 100%;
  align-self: start;
  justify-self: center;
  padding: 24px;
}

.globalNav a {
  padding: 12px;
  font-size: 18px;
}

main {
  max-width: 50vw;
}

form {
  display: grid;
  grid-template-columns: 80px 1fr;
  gap: 24px;
}

h2 {
  grid-column: 1 / 3;
  justify-self: center;
  margin-bottom: 24px;
}

label {
  grid-column: 1 / 2;
}

button {
  grid-column: 1 / 3;
  justify-self: end;
}
</style>
