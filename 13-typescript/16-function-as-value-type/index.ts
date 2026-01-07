type RequestCallback = (result: string) => void;

function request(callback: RequestCallback) {
  callback("sucess");
}

request((result) => console.log(result));

interface Product {
  getPrice: () => number;
}
