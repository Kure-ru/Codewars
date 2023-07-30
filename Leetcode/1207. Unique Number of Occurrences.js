/**
 * @param {number[]} arr
 * @return {boolean}
 */
var uniqueOccurrences = function (arr) {
  const list = {};

  for (const value of arr) {
    if (list[value]) {
      list[value]++;
    } else {
      list[value] = 1;
    }
  }

  const occurrences = Object.values(list);
  const uniqueOccurrences = new Set(occurrences);

  return occurrences.length === Array.from(uniqueOccurrences).length;
};
