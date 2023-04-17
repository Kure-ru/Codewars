// This kata is about multiplying a given number by eight if it is an even number and by nine otherwise.

//prep
//parameter: positive number
//return : positive number

function simpleMultiplication(number) {
  //if number is even, multiply by 8, if not multiply by 9
  return number % 2 === 0 ? number * 8 : number * 9;
}
