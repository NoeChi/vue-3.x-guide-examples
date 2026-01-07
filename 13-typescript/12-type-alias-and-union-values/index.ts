type Price = number | string;
type Size = "S" | "M" | "L" | "XL";

interface Product {
  title: string;
  price: Price;
  inStock: boolean;
  size: Size;
}

let product: Product = {
  title: "牛仔裤",
  price: "￥98",
  inStock: true,
  size: "XL",
};
