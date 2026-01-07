<template>
  <li>{{ msg }} <button @click="removeMessage(id)">删除</button></li>
</template>
<script>
import { ref, watch, watchEffect, toRefs } from "vue";

export default {
  props: ["msg", "id"],
  setup(props) {
    function removeMessage(id) {
      console.log(" 删除消息", id);
    }
    return { removeMessage };
  },
};
</script>
<style scoped>
li {
  display: flex;
  align-items: center;
  gap: 12px;
}

li::before {
  content: "";
  display: block;
  width: 8px;
  height: 8px;
  background-color: hsl(280deg, 100%, 70%);
  border-radius: 100%;
}
</style>
