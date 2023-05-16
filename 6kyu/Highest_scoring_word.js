// Given a string of words, you need to find the highest scoring word.

// Each letter of a word scores points according to its position in the alphabet: a = 1, b = 2, c = 3 etc.

// For example, the score of abad is 8 (1 + 2 + 1 + 4).

// You need to return the highest scoring word as a string.

// If two words score the same, return the word that appears earliest in the original string.

// All letters will be lowercase and all inputs will be valid.

function high(x) {
  let bestScore = 0;
  let bestWord = "";
  // split sentence in array of words
  let words = x.split(" ");

  // calculate word score
  words.forEach((word) => {
    // check for word score
    let score = 0;
    score = word
      .split("")
      .reduce((prev, curr) => prev + curr.charCodeAt(0) - 96, 0);
    // check if score is better
    if (score > bestScore) {
      console.log(score, bestScore);
      bestScore = score;
      bestWord = word;
    }
  });
  return bestWord;
}
