/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function (s) {
  // Maps each Roman numeral character to its corresponding integer value.
    const roman = {
    I: 1,
    V: 5,
    X: 10,
    L: 50,
    C: 100,
    D: 500,
    M: 1000,
  };

  return s.split("").reduce((sum, curr, i) => {
    return (
      sum +
    //   If the current character's value is less than the value of the next character, it means that subtraction should be performed. In that case, -1 is multiplied with the value of the current character (roman[curr]). Otherwise, addition is performed, and 1 is multiplied with the value of the current character.
      (i < s.length - 1 && roman[s[i + 1]] > roman[curr] ? -1 : 1) * roman[curr]
    );
  }, 0);
};
