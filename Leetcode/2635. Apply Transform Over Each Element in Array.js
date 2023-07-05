/**
 * @param {number[]} arr
 * @param {Function} fn
 * @return {number[]}
 */
var map = function (arr, fn) {
  return (newArray = arr.map((item, index) => fn(item, index)));
};
