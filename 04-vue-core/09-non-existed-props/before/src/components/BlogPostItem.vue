<template>
  <div>
    <a :href="link">{{ title }}</a>
  </div>
</template>
<script>
export default {
  props: ["link", "title"],
};
</script>
