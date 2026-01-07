let numericValue: number | string = 15;
numericValue = "15";

let args: string | string[];
args = "value1";
args = ["value1", "value2", "value3"];

interface Product {
  title: string;
  price: number;
  inStock: boolean;
}

let product: string | Product = "牛仔裤";
product = {
  title: "牛仔裤",
  price: 88,
  inStock: true,
};
