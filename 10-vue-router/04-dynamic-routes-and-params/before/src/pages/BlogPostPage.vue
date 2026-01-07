<template>
  <article>
    <h2>博客标题</h2>
    <p>博客内容</p>
    <footer>
      <router-link to="/">回到主页</router-link>
    </footer>
  </article>
</template>
<script>
export default {};
</script>
<style scoped>
article {
  max-width: 700px;
}

footer {
  margin-top: 48px;
}

footer a {
  background: linear-gradient(
    90deg,
    hsl(240deg, 50%, 50%),
    hsl(280deg, 50%, 50%)
  );
  padding: 1em 1.4em;
  border-radius: 4px;
  color: white;
}
</style>
