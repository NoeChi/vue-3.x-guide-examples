<template>
  <!-- nav -->
  <main>
    <!--component-->
  </main>
</template>

<script>
import HomePage from "./components/HomePage.vue";
import ProductPage from "./components/ProductPage.vue";

export default {
  components: {
    HomePage,
    ProductPage,
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
  grid-template-rows: 100px 1fr;
  justify-content: center;
}

nav {
  display: flex;
  height: 100%;
  align-items: center;
  gap: 24px;
}

nav a {
  color: hsl(280deg, 50%, 70%);
  text-decoration: none;
}

h1 {
  text-align: center;
}
</style>
