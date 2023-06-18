/* CHALLENGE
Given a string of text, return the number of vowels found within the text
e.g vowelsCounter('anehizxcv') // will return 3
*/

function vowelsCounter(text) {
  const vowels = text
    .split("")
    .filter(
      (letter) =>
        letter === "a" ||
        letter === "e" ||
        letter === "i" ||
        letter === "o" ||
        letter === "u"
    );
  return vowels.length;
}

// Iterative approach

const vowels = ["a", "e", "i", "o", "u"];

function vowelsCounter(text) {
  let counter = 0;

  for (let letter of text.toLowerCase()) {
    if (vowels.includes(letter)) {
      counter++;
    }
  }

  return counter;
}

// Using Regular Expressions

function vowelsCounter(text) {
  // Search text with Regex and store all matching instances
  // g stands for a global search which means that after finding the first match, it will not start over from the beginning but continue searching from the end of the previous match.
  // i stands for case insensitive search which makes the whole expression case-insensitive (for example /xyz/i would match XyZ).
  let matchingInstances = text.match(/[aeiou]/gi);

  if (matchingInstances) {
    return matchingInstances.length;
  } else {
    return 0;
  }
}
module.exports = vowelsCounter;
