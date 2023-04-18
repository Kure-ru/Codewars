// Given an array of integers.

// Return an array, where the first element is the count of positives numbers and the second element is sum of negative numbers. 0 is neither positive nor negative.

// If the input is an empty array or is null, return an empty array.

// Example
// For input [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, -11, -12, -13, -14, -15], you should return [10, -65].

//parameter: array of numbers
//return array of 2 numbers

//examples
// [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, -11, -12, -13, -14, -15] → [10, 65]
// [] →  []

function countPositivesSumNegatives(input) {
  if (input === null || input.length < 1) {
    return [];
  }
  let count = 0;
  let sum = 0;
  //loop through input
  for (const number of input) {
    // count positive numbers
    if (number > 0) {
      count++;
    }
    // add negative numbers
    else {
      sum += number;
    }
  }
  return [count, sum];
}
