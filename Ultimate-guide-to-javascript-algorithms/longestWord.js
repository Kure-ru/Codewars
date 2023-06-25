/* CHALLENGE
Given a sentence, return the longest word in the string. E.g
E.g longestWord('Top Shelf Web Development Training on Scotch') 
//should return 'Development'
*/

// Using a For-loop
function longestWord(text) {
    let wordArray = text.split(' ')
    let maxLength = 0
    let result = ''

    for (let i = 0; i < wordArray.length; i++){
        if (wordArray[i].length > maxLength){
            maxLength = wordArray[i].length
            result = wordArray[i]
        }
    }

    return result
}

// Using reduce
function longestWord(text) {
    var result = text.split(' ').reduce((maxLengthWord, currentWord) => {
        if (currentWord.length > maxLengthWord.length) {
            return currentWord
        } else {
            return maxLengthWord
        }
    }, "")
    return result
}

// Using .sort()
function longestWord(text) {
    let sortedArray = text.split(' ')
                          .sort((wordA, wordB) => wordB.length - wordA.length )
    return sortedArray[0]
}


console.log(longestWord('Top Shelf Web Development Training on Scotch'))