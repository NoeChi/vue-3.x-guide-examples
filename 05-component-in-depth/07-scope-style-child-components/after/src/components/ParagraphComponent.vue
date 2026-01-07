<template>
  <p><TextComponent>一些文字</TextComponent></p>
  <p>
    <TextComponent>
      <div>slot 中的文本</div>
    </TextComponent>
  </p>
</template>
<script>
import TextComponent from "./TextComponent.vue";
export default {
  components: {
    TextComponent,
  },
};
</script>
<style scoped>
p {
  background-color: hsl(250deg, 100%, 62%);
  padding: 1em;
  border-radius: 4px;
  margin-bottom: 20px;
}

.text {
  color: hsl(50deg, 100%, 50%);
}

.text :deep(a) {
  display: block;
  text-decoration: none;
  color: hsl(0deg, 80%, 70%);
}
</style>
