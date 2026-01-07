type Product = {
  title: string;
  price: number;
  inStock: boolean;
};

type TShirt = Product & {
  size: "S" | "M" | "L" | "XL";
};

const tShirt: TShirt = {
  title: "纯棉 T 恤",
  price: 39,
  inStock: true,
  size: "L",
};
