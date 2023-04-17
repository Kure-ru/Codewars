// Your task is to sort a given string. Each word in the string will contain a single number. This number is the position the word should have in the result.

// Note: Numbers can be from 1 to 9. So 1 will be the first word (not 0).

// If the input string is empty, return an empty string. The words in the input String will only contain valid consecutive numbers.

// Examples
// "is2 Thi1s T4est 3a"  -->  "Thi1s is2 3a T4est"
// "4of Fo1r pe6ople g3ood th5e the2"  -->  "Fo1r the2 g3ood 4of th5e pe6ople"
// ""  -->  ""

//parameter string
//return string

function order(words) {
  // if string empty, return empty string
  if (words === "") {
    return "";
  }
  // split string in array of words
  let result = [];
  let wordsArray = words.split(" ");
  // leap through numbers 1 to 9
  for (let i = 1; i <= 9; i++) {
    // find words by number and push them to new array
    wordsArray.forEach((word) => (word.includes(i) ? result.push(word) : ""));
  }
  //return new array as a string
  return result.join(" ");
}
