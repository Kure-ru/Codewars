// Given an integer, return an integer that has the reverse ordering of that which was received. E.g
// reverseInteger(-123) 
// should return -321

// Reverse a string
function reverseString(text){
    return [...text].reduce((acc, char) => char + acc, '')
}

// Reverse an integer
function reverseInteger(num){
    let reversedNumber = parseInt(reverseString(num.toString()))
    return (reversedNumber * Math.sign(num))
}