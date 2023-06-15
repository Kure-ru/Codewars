// Write a function which calculates the average of the numbers in a given list.

// Note: Empty arrays should return 0.

// params : array of numbers
// return : 1 number (average) || 0 if empty
//examples
// [1, 1, 1] -> 1
// [1, 2, 3] -> 2
// [1, 2, 3, 4] -> 2.5
function findAverage(array) {
  if (array.length < 1) {
    return 0;
  }
  //add all the values
  let sum = array.reduce((acc, current) => acc + current, 0);
  // divide by number of values
  return sum / array.length;
}
