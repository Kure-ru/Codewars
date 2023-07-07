/**
 * @param {number[]} arr
 * @param {Function} fn
 * @return {number[]}
 */
var filter = function (arr, fn) {
  const result = [];
  arr.forEach((value, i) => {
    if (fn(value, i)) {
      result.push(value);
    }
  });
  return result;
};
