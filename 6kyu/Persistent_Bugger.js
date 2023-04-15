// Write a function, persistence, that takes in a positive parameter num and returns its multiplicative persistence, which is the number of times you must multiply the digits in num until you reach a single digit.

// For example (Input --> Output):

// 39 --> 3 (because 3*9 = 27, 2*7 = 14, 1*4 = 4 and 4 has only one digit)
// 999 --> 4 (because 9*9*9 = 729, 7*2*9 = 126, 1*2*6 = 12, and finally 1*2 = 2)
// 4 --> 0 (because 4 is already a one-digit number)

//PREP
//parameter : positive number
// return : number
//example:
//39 → 3
// 999 →  4
// 4 →  0

function persistence(num) {
  // initialize a counter
  let counter = 0;
  // if the number has 2 digits continue
  while (num.toString().length > 1) {
    // convert num to a string, split each digit and multiply them
    num = num
      .toString()
      .split("")
      .reduce((a, b) => a * b);
    // add 1 to the counter
    counter++;
  }
  return counter;
}
