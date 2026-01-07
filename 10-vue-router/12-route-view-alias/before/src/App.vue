<template>
  <nav>
    <router-view name="nav"></router-view>
  </nav>
  <main>
    <router-view></router-view>
  </main>
  <footer>
    <router-view name="footer"></router-view>
  </footer>
</template>
<script></script>

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
  grid-template-rows: 100px 1fr 100px;
  place-items: center;
  gap: 24px;
}

h2 {
  margin-bottom: 12px;
  font-size: 32px;
  color: hsl(280deg, 100%, 80%);
}

a {
  color: hsl(280deg, 100%, 80%);
  text-decoration: none;
}
</style>
