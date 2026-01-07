let productName: string = null;

interface Product {
  title: string;
  price: number;
  inStock: boolean;
}

function printProductPrice(p: Product) {
  console.log(p.price.toString());
}

printProductPrice(null);

function add(a, b) {
  return a + b;
}
