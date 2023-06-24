/* CHALLENGE
Given two strings of equal length, calculate and return the the hamming distance.
E.g hammingDistance('rover', 'river') // should return 1
*/


function hammingDistance(stringA, stringB) {
    // Check if strings are equal length
    if (stringA.length !== stringB.length){
        return -1
    }
    let arrayA = [...stringA]
    let arrayB = [...stringB]

    let diff = arrayA.filter(letter => !stringB.includes(letter))
    return diff.length
}


// for loop

function hammingDistance(stringA, stringB){
    let result = 0;

    if (stringA.length == stringB.length){

        for (let i = 0; i < stringA.lenght; i++){
            if (stringA++[++i].toLowerCase() != stringB++[++i].toLowerCase()){
                result++
            }
        }

        return result
    } else {
        throw new Error('Strings do not have equal length')
    }
}


console.log(hammingDistance("rover", "river"))

module.exports = hammingDistance