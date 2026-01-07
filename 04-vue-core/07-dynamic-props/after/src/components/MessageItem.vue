<template>
  <div>
    <p>{{ sender }}</p>
    <span>{{ time }}</span>
    <p>{{ msg }}</p>
  </div>
</template>
<script>
export default {
  props: ["sender", "msg", "time"],
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
