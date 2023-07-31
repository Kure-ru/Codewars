/**
 * @param {number} n
 * @return {number}
 */

const memoize = (fn) => {
  let cache = {};
  return (...args) => {
    let n = args[0];
    if (n in cache) {
      return cache[n];
    } else {
      let result = fn(n);
      cache[n] = result;
      return result;
    }
  };
};

var fib = memoize((x) => {
  if (x === 0 || x === 1) {
    return x;
  } else {
    return fib(x - 1) + fib(x - 2);
  }
});
