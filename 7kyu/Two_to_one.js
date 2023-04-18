// Take 2 strings s1 and s2 including only letters from a to z. Return a new sorted string, the longest possible, containing distinct letters - each taken only once - coming from s1 or s2.

// Examples:
// a = "xyaabbbccccdefww"
// b = "xxxxyyyyabklmopq"
// longest(a, b) -> "abcdefklmopqwxy"

// a = "abcdefghijklmnopqrstuvwxyz"
// longest(a, a) -> "abcdefghijklmnopqrstuvwxyz"

//parameters 2 string of letters
//return 1 string of unique letters sorted
function longest(s1, s2) {
  //create a set
  const longest = new Set();
  const letters = s1.split("").concat(s2.split(""));
  //add values  to set
  for (const letter of letters) {
    longest.add(letter);
  }
  //sort the values
  return [...longest].sort().join("");
}
