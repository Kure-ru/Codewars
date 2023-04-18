// ROT13 is a simple letter substitution cipher that replaces a letter with the letter 13 letters after it in the alphabet. ROT13 is an example of the Caesar cipher.

// Create a function that takes a string and returns the string ciphered with Rot13. If there are numbers or special characters included in the string, they should be returned as they are. Only letters from the latin/english alphabet should be shifted, like in the original Rot13 "implementation".

//parameter :string
//return string ciphered
// "test" -> "grfg" 20 -> 8
//"Test" -> "Grfg"
function rot13(message) {
  //create array of letters of alphabet
  const ALPHABET = [
    "a",
    "b",
    "c",
    "d",
    "e",
    "f",
    "g",
    "h",
    "i",
    "j",
    "k",
    "l",
    "m",
    "n",
    "o",
    "p",
    "q",
    "r",
    "s",
    "t",
    "u",
    "v",
    "w",
    "x",
    "y",
    "z",
  ];
  //loop through message
  const cipher = message.split("").map((letter) => {
    //check for letters only
    if (letter.toLowerCase() < "a" || letter.toLowerCase() > "z") {
      return letter;
    }
    let index = ALPHABET.findIndex((char) => char === letter.toLowerCase());
    //add 13 to index
    index += 13;
    //if > 25 , subtract 24
    if (index > 25) {
      index -= 26;
    }
    //replace by letter from alphabet array
    //if letter is capital letter, add capital letter
    if (letter.toUpperCase() === letter) {
      return ALPHABET[index].toUpperCase();
    } else {
      return ALPHABET[index];
    }
  });
  return cipher.join("");
}
