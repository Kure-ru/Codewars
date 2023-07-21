/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var maxOperations = function (nums, k) {
  let count = 0;
  const numFrequency = {};

  for (let i = 0; i < nums.length; i++) {
    const rest = k - nums[i];
    if (numFrequency[rest] > 0) {
      count++;
      numFrequency[rest]--;
    } else {
      numFrequency[nums[i]] = (numFrequency[nums[i]] || 0) + 1;
    }
  }
  return count;
};
