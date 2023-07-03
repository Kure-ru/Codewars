/*
 Given two or more arrays, write a function that combines
 their elements into one array without any repetition. 
 E.g mergeArrays([1,2,3,3,3], [1,4,5,2]) // should return [1,2,3,4,5]
*/

function mergeArrays(...arrays) {

    let jointArray = []
    
    arrays.forEach(array => {
        jointArray = [...jointArray, ...array]
    });

    // Using Sets
    return [...new Set([...jointArray])]

    // Using Sets & Array.from() method
    return Array.from(new Set([...jointArray]))

    // Using .filter()
    const uniqueArray = jointArray.filter((item, index) => jointArray.indexOf(item) === index )
    return uniqueArray

    // .reduce()
    const reducedArray = jointArray.reduce((newArray, item) => {
        if (newArray.includes(item)){
            return newArray
        } else {
            return [...newArray, item]
        }
    }, [])
    return reducedArray

}