/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var findMaxAverage = function (nums, k) {
  // if one value, return it
  if (k === 1) {
    return Math.max(...nums);
  }

  // find the accumulative sum of nums
  const sum = nums.reduce((acc, num, i) => {
    if (i === 0) {
      acc.push(num);
    } else {
      acc.push(num + acc[i - 1]);
    }
    return acc;
  }, []);

  // find the maximal sum for k interval
  let maxSum = sum[k - 1];
  for (let i = k - 1; i < sum.length; i++) {
    let currentSum = sum[i] - sum[i - k];
    if (currentSum > maxSum) {
      maxSum = currentSum;
    }
  }
  console.log(maxSum);
  // return average
  return maxSum / k;
};
