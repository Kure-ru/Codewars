// Dans cet exercice, vous devez analyser un relevé de températures pour trouver quelle température se rapproche le plus de zéro.

// Exemple de températures
// Ici, -1 est le plus proche de 0.
//  	Règles
// Écrivez un programme qui affiche la température la plus proche de 0 parmi les données d'entrée. Si deux nombres sont aussi proches de zéro, alors l'entier positif sera considéré comme étant le plus proche de zéro (par exemple, si les températures sont -5 et 5, alors afficher 5).
//  	Entrées du jeu
// Votre programme doit lire les données depuis l'entrée standard et écrire le résultat sur la sortie standard.
// Entrée
// Ligne 1 : Le nombre N de températures à analyser.

// Ligne 2 : Une chaine de caractères contenant les N températures exprimées sous la forme de nombres entiers allant de -273 à 5526

// Sortie
// Affichez 0 (zéro) si aucune température n'est fournie. Sinon, affichez la température la plus proche de 0
// Contraintes
// 0 ≤ N < 10000
// Exemple
// Entrée
// 5
// 1 -2 -8 4 5
// Sortie
// 1

/**
 * Auto-generated code below aims at helping you parse
 * the standard input according to the problem statement.
 **/
let temperatures = [];
let closest = 5526;
const n = parseInt(readline()); // the number of temperatures to analyse
var inputs = readline().split(" ");
for (let i = 0; i < n; i++) {
  const t = parseInt(inputs[i]); // a temperature expressed as an integer ranging from -273 to 5526
  temperatures.push(t);
}
if (temperatures.length === 0) {
  closest = 0;
}

temperatures.forEach((temp) => {
  console.error(temp);
  if (Math.abs(temp) < Math.abs(closest)) {
    closest = temp;
  }
});

if (closest < 0 && temperatures.includes(Math.abs(closest))) {
  closest = Math.abs(closest);
}

// Write an answer using console.log()
// To debug: console.error('Debug messages...');

console.log(closest);
