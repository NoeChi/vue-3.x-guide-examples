<template>
  <main>
    <div>
      <!-- v-model 后面的参数必须和子组件接收的属性名相同，例如 searchTerm -->
      <SearchInput
        v-model:searchTerm="searchTerm"
        v-model:category="category"
      />
      <div class="splitLine"></div>
      <p>搜索词：{{ searchTerm }}</p>
      <p>类别：{{ category }}</p>
    </div>
  </main>
</template>

<script>
import SearchInput from "./components/SearchInput.vue";

export default {
  components: {
    SearchInput,
  },
  data() {
    return {
      // 名字无需和 SearchInput 中的属性名相同
      // 例如这里可以叫 searchQuery，
      searchTerm: "",
      category: "default",
    };
  },
};
</script>

<style>
* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
  font-family: Arial, "PingFang SC", "Microsoft Yahei", sans-serif;
}

body {
  background-color: #0f141c;
  opacity: 1;
  background-image: radial-gradient(
    #212943 0.6000000000000001px,
    #0f141c 0.6000000000000001px
  );
  background-size: 12px 12px;
  color: white;
}

#app {
  width: 100vw;
  height: 100vh;
  max-width: 100%;
  display: grid;
  place-items: center;
}

.splitLine {
  width: 100%;
  height: 1px;
  border-bottom: 1px dashed hsl(280deg, 50%, 50%);
}

p {
  margin-top: 12px;
  color: hsl(50deg, 100%, 80%);
}
</style>
