<script setup lang="ts">
// defineProps(["imageUrl", "title", "price", "inStock"]);
// defineProps({
//   title: {
//     type: String,
//   }
// });

import { Theme } from "@/keys/Theme";
import { inject } from "vue";

interface Props {
  title: string;
  price: number;
  inStock: boolean;
  imageUrl: string;
}

defineProps<Props>();

// withDefaults(defineProps<Props>(), {
//   title: "默认标题",
//   price: 0,
//   inStock: false,
//   imageUrl: "",
// });

const theme = inject(Theme);
console.log(theme);

const siteTitle = inject<string>("siteTitle");
console.log(siteTitle);
</script>
<template>
  <div class="product">
    <img :src="imageUrl" alt="" />
    <h2>{{ title }}</h2>
    <p class="price">价格：￥{{ price }}</p>
    <p>库存：{{ inStock ? "有货" : "缺货" }}</p>
  </div>
</template>
<style scoped>
.product {
  box-shadow: 0px 0px 24px hsl(0deg, 0%, 0%, 0.1);
  padding: 18px;
  border-radius: 12px;
}

.product img {
  height: 200px;
}

.price {
  color: hsl(0deg, 100%, 66%);
  font-weight: bold;
}
</style>
