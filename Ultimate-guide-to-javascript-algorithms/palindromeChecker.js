/* CHALLENGE
Given a string of text, return true or false indicating whether or not the text is a palindrome.
e.g palindromeChecker('racecar') // will return true
*/




function palindromeChecker(text) {
    let reversed = text.toLowerCase().split('').reverse().join('')
    return text === reversed
}

console.log(palindromeChecker('racecar'))
console.log(palindromeChecker('bonjour'))


// Looping through and compare

function palindromeChecker(text){
    let charArray = text.toLowerCase().split('')

    let result = charArray.every((letter, index) => {
        return letter === charArray[charArray.length - index - 1 ]
    })

    return result
}

module.exports = palindromeChecker;