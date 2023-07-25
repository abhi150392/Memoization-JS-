function add(...data) {
  return data.reduce((prev, curr) => {
    return curr + prev;
  }, 0);
}

const memo = (fn) => {
  let cache = {};
  return (...args) => {
    const keys = JSON.stringify(args);
    if (cache[keys]) {
      console.log("return result from cache");
      return cache[keys];
    } else {
      console.log("calculate the result");
      const result = fn(...args);
      cache[keys] = result;
      return result;
    }
  };
};

const calculate = memo(add);
console.log(calculate(10, 20, 30));
console.log(calculate(10, 20, 30));
console.log(calculate(10, 20, 50));
console.log(calculate(10, 20, 50));
/* console.log(add(5));
console.log(add(5)); */
