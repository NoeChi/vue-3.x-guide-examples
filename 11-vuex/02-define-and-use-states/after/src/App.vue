<template>
  <main>
    <div>
      <p>
        num: <span>{{ num }}</span>
      </p>
      <!-- <p>count: {{ count }}</p> -->
      <p>
        str: <span>{{ str }}</span>
      </p>
      <p>
        bool: <span>{{ bool }}</span>
      </p>
      <p>
        arr: <span>{{ arr }}</span>
      </p>
      <p>
        user: <span>{{ user }}</span>
      </p>
      <p>
        ownComputed: <span>{{ ownComputed }}</span>
      </p>
    </div>
  </main>
</template>
<script>
import { mapState } from "vuex";
export default {
  // computed: {
  //   num() {
  //     return this.$store.state.num;
  //   },
  // },
  // computed: mapState({
  //   num: (state) => state.num,
  //   num: "num",
  //   count: "num",
  // }),
  // computed: mapState(["num", "str", "bool", "arr", "user"]),
  computed: {
    ownComputed() {
      return "自己的计算属性";
    },
    ...mapState(["num", "str", "bool", "arr", "user"]),
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
  padding: 1.5em 1.4em;
  font-size: 16px;
  border-radius: 4px;
  color: white;
}
</style>
