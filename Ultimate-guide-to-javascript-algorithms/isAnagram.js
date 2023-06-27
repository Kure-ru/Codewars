/* CHALLENGE
Given a two strings, write an algorithm to check if they are anagrams
of each other. Return true if the pass the test and false if they
don't. E.g
    isAnagram('silent', 'listen') // should return true
*/

// Direct comparison
const sanitizeString = function (str) {
  return str
    .toLowerCase()
    .replace(/[^a-z\d]/g, "")
    .split("")
    .sort()
    .join("");
};


function isAnagram(stringA, stringB) {
  return sanitizeString(stringA) == sanitizeString(stringB);
}


// Character Map Comparison
function createCharMap(text) {
  let charMap = {};
  for (let char of text) {
    if (charMap.hasOwnProperty(char)) {
      charMap[char]++;
    } else {
      charMap[char] = 1;
    }
  }
  return charMap;
}


function isAnagram(stringA, stringB) {
    if (stringA.length === stringB.length){
        let stringAMap = createCharMap(stringA)
        let stringBMap = createCharMap(stringB)
        for (let char in stringAMap){
            if (stringAMap[char] !== stringBMap[char]){
                return false
            }
        }
    return true
    } else {
        return false
    }
}
