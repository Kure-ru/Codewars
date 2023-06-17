/* CHALLENGE
Given a string of text, return the number of vowels found within the text
e.g vowelsCounter('anehizxcv') // will return 3
*/


function vowelsCounter(text) {
    const vowels = text.split('').filter(letter => letter === 'a' || letter === 'e' || letter === 'i' || letter === 'o' || letter === 'u')
    return vowels.length
}





module.exports = vowelsCounter;