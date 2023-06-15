// Complete the solution so that it splits the string into pairs of two characters. If the string contains an odd number of characters then it should replace the missing second character of the final pair with an underscore ('_').

// Examples:

// * 'abc' =>  ['ab', 'c_']
// * 'abcdef' => ['ab', 'cd', 'ef']

//parameter str:string
//return array

function solution(str) {
  let result = [];
  //iterate through string 2 characters at time
  for (let i = 0; i < str.length; i += 2) {
    //if there's no i+1,  add "_"
    if (str[i + 1] === undefined) {
      result.push(`${str[i]}_`);
    } else {
      // add them to array
      result.push(str[i] + str[i + 1]);
    }
  }
  return result;
}