// Build Tower
// Build a pyramid-shaped tower, as an array/list of strings, given a positive integer number of floors. A tower block is represented with "*" character.

// For example, a tower with 3 floors looks like this:

// [
//   "  *  ",
//   " *** ",
//   "*****"
// ]
// And a tower with 6 floors looks like this:

// [
//   "     *     ",
//   "    ***    ",
//   "   *****   ",
//   "  *******  ",
//   " ********* ",
//   "***********"
// ]

function towerBuilder(nFloors) {
  let tour = [];
  for (let i = 1; i <= nFloors; i++) {
    let floor =
      " ".repeat(nFloors - i) + "*".repeat(i * 2 - 1) + " ".repeat(nFloors - i);
    tour.push(floor);
  }
  return tour;
}
