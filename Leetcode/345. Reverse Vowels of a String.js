// Given a string s, reverse only all the vowels in the string and return it.

// The vowels are 'a', 'e', 'i', 'o', and 'u', and they can appear in both lower and upper cases, more than once.

// Example 1:

// Input: s = "hello"
// Output: "holle"
// Example 2:

// Input: s = "leetcode"
// Output: "leotcede"

// Constraints:

// 1 <= s.length <= 3 * 105
// s consist of printable ASCII characters.

/**
 * @param {string} s
 * @return {string}
 */
var reverseVowels = function(s) {
    const VOWELS = 'aeiouAEIOU'
    let count = 0;
    // reverse voyels 
    let reversed = s.split('').filter(letter => VOWELS.includes(letter)).reverse()
 
    // loop through every letter of string
    let result = s.split('').map((letter, index) => {
         // if voyel, replace it with reversed voyels of index i
         if (VOWELS.includes(letter)){          
    letter = reversed[count]
    count++      
     return letter ;
         } else {
             return letter
         }
    
    })

    // return string
    return result.join('')
}