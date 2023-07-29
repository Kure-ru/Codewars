/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[][]}
 */
var findDifference = function (nums1, nums2) {
  set1 = new Set(nums1);
  set2 = new Set(nums2);

  for (let item of set1) {
    if (set2.has(item)) {
      set1.delete(item);
      set2.delete(item);
    }
  }

  return [Array.from(set1), Array.from(set2)];
};
