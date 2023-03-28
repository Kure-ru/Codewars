// Description
// Return the number (count) of vowels in the given string.

// We will consider a, e, i, o, u as vowels for this Kata (but not y).

// The input string will only consist of lower case letters and/or spaces.

function getCount(str) {
  let vowelsNum = 0;
  for (let char of str) {
    char === "a" || char === "e" || char === "i" || char === "o" || char === "u"
      ? vowelsNum++
      : "";
  }
  return vowelsNum;
}
