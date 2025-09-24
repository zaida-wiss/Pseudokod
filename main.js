// Create a function that takes an 

// integer as an argument and returns
//  "Even" 
//  for even numbers or 
//  "Odd" 
//  for odd numbers.


// (Tänker vi likadant?)
// Pseudokod:

// Mål: skapa en funktion som svarar om ett tal är jämnt eller udda
// Input: ett heltal
// output: en string

// STEG 1
// Testar om input går att dela i två lika stora delar, om det går jämt upp i två delar ska  output vara "even" och om det inte går ska det vara "odd".




function evenOrOdd(number) {
  return number % 2 === 0 ? 'Even' : 'Odd';
}

