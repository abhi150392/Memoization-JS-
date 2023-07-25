function add(n) {
  return 10 + n;
}

const memo = (fn) => {
  let cache = {};
  return (x) => {
    if (cache[x]) {
      console.log("return result from cache");
      return cache[x];
    } else {
      console.log("calculate the result");
      const result = fn(x);
      cache[x] = result;
      return result;
    }
  };
};

const calculate = memo(add);
console.log(calculate(10));
console.log(calculate(10));
console.log(calculate(20));
console.log(calculate(20));
/* console.log(add(5));
console.log(add(5)); */
