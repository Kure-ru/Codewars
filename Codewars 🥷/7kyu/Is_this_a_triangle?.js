// Implement a function that accepts 3 integer values a, b, c. The function should return true if a triangle can be built with the sides of given length and false in any other case.

// (In this case, all triangles must have surface greater than 0 to be accepted).

//PREP
// parameters : 3 positive integer value
// return boolean
// examples
//1, 2, 2 → true
// 7, 2 , 2 → false
// Le théorème de l'inégalité triangulaire établit que la somme des
//longueurs  de deux côtés d'un triangle est toujours supérieure à celle du 3e côté.
function isTriangle(a, b, c) {
  //triangle if  a + b > c, a + c > b and b + c > a
  return a + b > c && a + c > b && b + c > a ? true : false;
}
