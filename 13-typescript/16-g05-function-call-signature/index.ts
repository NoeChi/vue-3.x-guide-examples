interface RequestCallback {
  (result: string): void;
  code: string;
}

function request(callback: RequestCallback) {
  callback("success");
  callback.code;
}

const callback: RequestCallback = (result) => console.log(result);
callback.code = "200";

request(callback);
