<template>
  <main>
    <div class="container">
      <h1>
        {{ siteTitle }}
      </h1>
      <PaginationComponent
        :totalPage="totalPage"
        :defaultCurrentPage="currentPage"
      />
      <PaginationComponent2
        :totalPage="totalPage"
        :defaultCurrentPage="currentPage"
      />
      <BaseButton :defaultCurrentPage="currentPage" />
    </div>
  </main>
</template>

<script>
import BaseButton from "./components/BaseButton.vue";
import PaginationComponent from "./components/PaginationComponent.vue";
import PaginationComponent2 from "./components/PaginationComponent2.vue";

export default {
  siteTitle: "Mixin 全局注册",
  components: {
    PaginationComponent,
    PaginationComponent2,
    BaseButton,
  },
  data() {
    return {
      totalPage: 6,
      currentPage: 4,
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

.container {
  width: 60vw;
}

button {
  border: none;
  background: linear-gradient(
    90deg,
    hsl(240deg, 50%, 50%),
    hsl(280deg, 50%, 50%)
  );
  padding: 1em 2em;
  margin-top: 24px;
  margin-right: 12px;
  border-radius: 4px;
  color: white;
}
</style>
