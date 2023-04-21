// Given a non-empty array of integers, return the result of multiplying the values together in order. Example:

// [1, 2, 3, 4] => 1 * 2 * 3 * 4 = 24

//param: not empty array of int
//return number
//example
//[1, 2, 3] -> 6
// [4, 1, 1, 1, 4] -> 16
function grow(x) {
  return x.reduce((a, b) => a * b, 1);
}
