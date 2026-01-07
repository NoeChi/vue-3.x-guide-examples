interface Product {
  title: string;
  price: number;
  inStock: boolean;
}

interface TShirt extends Product {
  size: "S" | "M" | "L" | "XL";
}

const tShirt: TShirt = {
  title: "纯棉 T 恤",
  price: 39,
  inStock: true,
  size: "L",
};
