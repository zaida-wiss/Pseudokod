
MÅL: Skapa en funktion som berättar om ett tal (1-1000) är jämnt eller 'inte.'
input: ett tal mellan 1-1000.
output: en bolean (true or false)

// Create a function that accepts a number n, 1 <= n <= 1000, 
// as a parameter and returns true if the number is 
// even and false if the number is odd.

// The length of your code must be less than or equal to 19 characters
// You are not allowed to use the % operator

function evenCheck(n) {
return !(n&1);
  }