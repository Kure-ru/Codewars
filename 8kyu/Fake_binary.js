// Given a string of digits, you should replace any digit below 5 with '0' and any digit 5 and above with '1'. Return the resulting string.

// Note: input will never be an empty string

//p: string of numbers
//r: string
// '45385593107843568' -> '01011110001100111'
function fakeBin(x) {
  let binary = x.split("").map((num) => {
    if (num < 5) {
      return "0";
    } else {
      return "1";
    }
  });
  return binary.join("");
}
