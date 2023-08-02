/**
 * @param {number} num
 * @return {number}
 */
var minimumSum = function (num) {
  // find the 2 smaller nums -> 10th
  // find the 2 bigger nums -> units

  let sorted = num
    .toString()
    .split("")
    .sort((a, b) => a - b);

  const firstNum = sorted[0] + sorted[2];
  const secondNum = sorted[1] + sorted[3];

  return Number(firstNum) + Number(secondNum);
};
