// Implement the function unique_in_order which takes as argument a sequence and returns a list of items without any elements with the same value next to each other and preserving the original order of elements.

// For example:

// uniqueInOrder('AAAABBBCCDAABBB') == ['A', 'B', 'C', 'D', 'A', 'B']
// uniqueInOrder('ABBCcAD')         == ['A', 'B', 'C', 'c', 'A', 'D']
// uniqueInOrder([1,2,2,3,3])       == [1,2,3]

//prep
//parameter : string or array
// return : array

var uniqueInOrder = function (iterable) {
  if (iterable.length < 1) {
    return [];
  }
  //create new array with 1st value
  let newArr = [iterable[0]];
  //loop
  for (let i = 1; i < iterable.length; i++) {
    //if value is different than last value in new array, add it
    if (iterable[i] !== newArr[newArr.length - 1]) {
      newArr.push(iterable[i]);
    }
  }
  //return new array
  return newArr;
};
