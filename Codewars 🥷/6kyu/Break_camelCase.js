// Complete the solution so that the function will break up camel casing, using a space between words.

// Example
// "camelCasing"  =>  "camel Casing"
// "identifier"   =>  "identifier"
// ""             =>  ""

function solution(string) {
  let result = "";
  string.split("").forEach((letter) => {
    if (letter >= "A" && letter <= "Z") {
      letter = " " + letter;
    }
    result += letter;
  });
  return result;
}
