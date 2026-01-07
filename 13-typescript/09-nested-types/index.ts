interface Product {
  title: string;
  price: number;
  inStock: boolean;
  category: Category;
}

interface Category {
  name: string;
}

let product: Product = {
  title: "纯棉T恤",
  price: 20,
  inStock: true,
  category: {
    name: "上衣",
  },
};
