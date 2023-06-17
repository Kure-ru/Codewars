/* CHALLENGE
Given a string of text, write an algorithm that returns the text received in a reversed format. 
E.g reverseString('algorithms') // should return 'smhtirogla'
*/

// Chaining in-build methods
function reverseString(text) {
  return text.split("").reverse().join("");
}

// ES6 spread operator
function reverseString(text) {
  return [...text].reverse().join("");
}

// The For-loop way
function reverseString(text) {
  let result = "";
  for (let i = text.length - 1; i >= 0; i--) {
    result += text[i];
  }
  return result;
}

// ES6 For...of loop
function reverseString(text) {
  let result = "";
  for (let char of text) {
    result = char + result;
  }
  return result;
}

// The Recursive way
function reverseString(text) {
  if (text === "") {
    return "";
  } else {
    return reverseString(text.substr(1)) + text[0];
  }
}

// Using .reduce()
function reverseString(text) {
  return text.split("").reduce((acc, char) => char + acc, "");
}

// Using .reduce() + ES6 operator
function reverseString(text) {
  return [...text].reduce((acc, char) => char + acc, "");
}

module.exports = reverseString;
