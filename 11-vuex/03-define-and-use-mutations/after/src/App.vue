<template>
  <main>
    <div>
      <p>
        num: <span>{{ num }}</span>
      </p>
      <!-- <button @click="$store.commit('increment')">增加数量</button> -->
      <button @click="increment">增加数量</button>
      <p>
        arr: <span>{{ arr }}</span>
      </p>
      <!-- <button @click="pushToArr({ ele: arr.length + 1 })">追加元素</button> -->
      <!-- 如果使用 store.commit 传递 payload -->
      <button
        @click="$store.commit({ type: 'pushToArr', ele: arr.length + 1 })"
      >
        追加元素
      </button>
      <!-- 或 -->
      <!-- <button @click="$store.commit('pushToArr', { ele: arr.length + 1 })">
        追加元素
      </button> -->
      <p>
        user: <span>{{ user }}</span>
      </p>
      <button @click="changeUserName({ name: '张三' })">修改用户名</button>
    </div>
  </main>
</template>
<script>
import { mapState, mapMutations } from "vuex";
import { INCREMENT } from "./mutation_types";
export default {
  computed: mapState(["num", "arr", "user"]),
  // methods: mapMutations(["increment", "pushToArr", "changeUserName"]),
  methods: mapMutations([INCREMENT, "pushToArr", "changeUserName"]),
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

/* #app {
  width: 100vw;
  height: 100vh;
  max-width: 100%;
  display: grid;
  place-items: center;
} */

main {
  width: 100vw;
  height: 100vh;
  max-width: 100%;
  display: grid;
  place-items: center;
}

p {
  margin: 12px 0;
}

p > span {
  color: hsl(280deg, 100%, 80%);
}

button {
  border: none;
  background: linear-gradient(
    90deg,
    hsl(240deg, 50%, 50%),
    hsl(280deg, 50%, 50%)
  );
  padding: 0.8em 1.4em;
  font-size: 16px;
  border-radius: 4px;
  color: white;
  margin-bottom: 36px;
  margin-top: 8px;
}
</style>
