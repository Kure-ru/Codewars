// Complete the function that accepts a string parameter, and reverses each word in the string. All spaces in the string should be retained.

// Examples
// "This is an example!" ==> "sihT si na !elpmaxe"
// "double  spaces"      ==> "elbuod  secaps"

//parameter string
//return string
function reverseWords(str) {
  // string into array
  let array = str.split(" ");
  // reverse each letter
  let reverse = array.map((letters, index) => [...letters].reverse().join(""));
  //return string
  return reverse.join(" ");
}
