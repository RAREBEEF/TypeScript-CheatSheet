const symbol1 = Symbol();

const obj = {
  symbol1: "Hi",
  [symbol1]: "Hello"
};

console.log(typeof symbol1);