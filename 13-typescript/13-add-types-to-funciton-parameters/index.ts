function add(a: number, b: number) {
  console.log(a + b);
}

add(1, 2);

function cmd(args: string | string[]) {
  // if (typeof args === "string") {
  //   console.log(args);
  // } else {
  //   console.log(args.join(" "));
  // }
}

interface Product {
  title: string;
  price: number;
  inStock: boolean;
}

function printProductTitle(p: Product) {
  console.log(p.title);
}
