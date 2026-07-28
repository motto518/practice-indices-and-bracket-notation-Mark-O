// Create a multi-dimensional array
let library = [
  ["The Hobbit", "Harry Potter", "Lord of the Rings"],        // Shelf 1 - Books
  ["Percy Jackson", "Magical Fusion", "The Endurance Artist"],         // Shelf 2 - Movies
  ["Dune", "He who fights with monsters", "Project Hail Mary"]           // Shelf 3 - Mixed
];

// Access and log all elements using hardcoded numbers
console.log("--- Hardcoded Bracket Notation ---");
console.log(library[0][0]);  // The Hobbit
console.log(library[0][1]);  // Harry Potter
console.log(library[0][2]);  // Lord of the Rings

console.log(library[1][0]);  // Percy Jackson
console.log(library[1][1]);  // Magical Fusion
console.log(library[1][2]);  // The Endurance Artist

console.log(library[2][0]);  // Dune
console.log(library[2][1]);  // He who fights with monsters
console.log(library[2][2]);  // Project Hail Mary

// Access and log all elements using variables as indices
console.log("--- Variable Bracket Notation ---");
let row;
let item;

row = 0; item = 0; console.log(library[row][item]);  // The Hobbit
row = 0; item = 1; console.log(library[row][item]);  // Harry Potter
row = 0; item = 2; console.log(library[row][item]);  // Lord of the Rings

row = 1; item = 0; console.log(library[row][item]);  // Percy Jackson
row = 1; item = 1; console.log(library[row][item]);  // Magical Fusion
row = 1; item = 2; console.log(library[row][item]);  // The Endurance Artist

row = 2; item = 0; console.log(library[row][item]);  // Dune
row = 2; item = 1; console.log(library[row][item]);  // He who fights with monsters
row = 2; item = 2; console.log(library[row][item]);  // Project Hail Mary

// Loop through all items on the second shelf (index 1)
console.log("--- Second Shelf Items ---");
for (let item = 0; item < library[1].length; item++) {
  console.log(library[1][item]);
}