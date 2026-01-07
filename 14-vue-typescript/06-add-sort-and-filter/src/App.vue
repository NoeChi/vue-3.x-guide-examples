<script setup lang="ts">
import { ref, type Ref } from "vue";
import ShopIcon from "./components/Icon/ShopIcon.vue";
import ProductItem from "./components/ProductItem.vue";
import ActionAndFilters from "./components/ActionAndFilters.vue";

interface Product {
  id: number;
  title: string;
  price: number;
  inStock: boolean;
  imageUrl: string;
}

const products = ref<Product[]>([
  {
    id: 1,
    title: "纯棉 T 恤",
    price: 66,
    inStock: true,
    imageUrl: "/images/t-shirt1.jpg",
  },
  {
    id: 2,
    title: "夹克外套",
    price: 128,
    inStock: true,
    imageUrl: "/images/jacket1.jpg",
  },
  {
    id: 3,
    title: "水洗牛仔裤",
    price: 99,
    inStock: false,
    imageUrl: "/images/jeans1.jpg",
  },
  {
    id: 4,
    title: "印花 T恤",
    price: 72,
    inStock: true,
    imageUrl: "/images/t-shirt2.jpg",
  },
]);
</script>

<template>
  <main>
    <h1><ShopIcon />峰华的小商店</h1>
    <ActionAndFilters />
    <div class="productList">
      <ProductItem
        v-for="product in products"
        :key="product.id"
        v-bind="product"
        class="product"
      >
      </ProductItem>
    </div>
  </main>
</template>

<style scoped>
main {
  display: grid;
  place-items: center;
  gap: 48px;
  width: 100vw;
  padding: 24px;
}

h1 {
  display: flex;
  align-items: center;
  gap: 32px;
}

h1 svg {
  width: 64px;
  height: 64px;
}
.productList {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 48px;
  width: 60%;
}
</style>
