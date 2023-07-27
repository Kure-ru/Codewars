/**
 * @param {string} s
 * @param {number} k
 * @return {number}
 */
var maxVowels = function (s, k) {
  const VOWELS = new Set(["a", "e", "i", "o", "u"]);
  let maxVowels = 0;
  let currentVowels = 0;

  for (let i = 0; i < k; i++) {
    if (VOWELS.has(s[i])) {
      currentVowels++;
    }
  }

  maxVowels = currentVowels;

  for (let i = k; i < s.length; i++) {
    if (VOWELS.has(s[i - k])) {
      currentVowels--;
    }

    if (VOWELS.has(s[i])) {
      currentVowels++;
    }

    maxVowels = Math.max(maxVowels, currentVowels);
  }

  return maxVowels;
};
