interface Product {
  title: string;
  price: number;
  inStock: boolean;
}

interface TShirt extends Product {
  size: "S" | "M" | "L" | "XL";
}

function displayTitle<T extends Product>(t: T) {
  console.log(t.title);
}

let product: Product = {
  title: "牛仔裤",
  price: 80,
  inStock: true,
};

displayTitle<Product>(product);
// displayTitle<string>("abc");

let tshirt: TShirt = {
  title: "纯棉 T 恤",
  price: 66,
  inStock: true,
  size: "L",
};

displayTitle<TShirt>(tshirt);
