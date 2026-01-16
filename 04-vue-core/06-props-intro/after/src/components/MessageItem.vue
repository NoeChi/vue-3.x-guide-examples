<template>
  <div>
    <p>{{ sender }}</p>
    <span>{{ time }}</span>
    <p>{{ msg }}</p>
  </div>
</template>
<script>
export default {
  // 只能由父組件傳遞給子組件
  // 子組件不能修改props的值
  props: ["sender", "msg", "time"],
  mounted() {
    console.log(this.sender);
  },
};
</script>
<style scoped>
div {
  display: grid;
  grid-template-areas:
    "sender time"
    "msg msg";
  border: 1px solid hsl(280deg, 50%, 50%);
  border-radius: 4px;
  padding: 1em;
  width: 250px;
}

span {
  justify-self: end;
}

div > p:last-child {
  margin-top: 1em;
}
</style>
