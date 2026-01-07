<template>
  <p>{{ num }} - {{ typeof num }}</p>
  <p>{{ bool }} - {{ typeof bool }}</p>
  <p>{{ obj }} - {{ typeof obj }}</p>
  <p>{{ array }} - {{ array.constructor.name }}</p>
</template>
<script>
export default {
  props: ["num", "bool", "obj", "array"],
};
</script>
