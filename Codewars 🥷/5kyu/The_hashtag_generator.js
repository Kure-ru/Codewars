// The marketing team is spending way too much time typing in hashtags.
// Let's help them with our own Hashtag Generator!

// Here's the deal:

// It must start with a hashtag (#).
// All words must have their first letter capitalized.
// If the final result is longer than 140 chars it must return false.
// If the input or the result is an empty string it must return false.
// Examples
// " Hello there thanks for trying my Kata"  =>  "#HelloThereThanksForTryingMyKata"
// "    Hello     World   "                  =>  "#HelloWorld"
// ""                                        =>  false

//parameter str:string
// return string || false (if result > 140 chars or empty)

function generateHashtag(str) {
  //check for empty strings
  if (!str.trim()) {
    return false;
  }
  //split words in array, capitalize 1st letter
  const hashtag = str
    .trim()
    .split(/\s+/)
    .map((word) => word[0].toUpperCase() + word.slice(1));
  //add # , join array and return it
  hashtag.unshift("#");
  const result = hashtag.join("");
  return result.length > 140 ? false : result;
}
