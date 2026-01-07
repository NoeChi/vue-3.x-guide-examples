<template>
  <main>
    <div>
      <SearchInput
        v-model:searchModel="searchTerm"
        v-model:categoryModel="category"
      />
      <div class="splitLine"></div>
      <p>搜索词：{{ searchTerm }}</p>
      <p>类别：{{ category }}</p>
    </div>
  </main>
</template>

<script setup>
import { ref } from "vue";
import SearchInput from "./components/SearchInput.vue";

const searchTerm = ref("");
const category = ref("default");
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
</style>
