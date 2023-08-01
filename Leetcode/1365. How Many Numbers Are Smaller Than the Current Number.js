/**
 * @param {number[]} nums
 * @return {number[]}
 */
var smallerNumbersThanCurrent = function (nums) {
  const smallerNumsArr = [];
  let smallerNums = 0;

  // loop through each elements
  for (let i = 0; i < nums.length; i++) {
    // compare to each elements
    for (let j = 0; j < nums.length; j++) {
      // i est different de j
      if (i !== j) {
        // si i > j, compter +1
        if (nums[i] > nums[j]) {
          smallerNums++;
        }
      }
    }
    smallerNumsArr.push(smallerNums);
    smallerNums = 0;
  }

  return smallerNumsArr;
};
