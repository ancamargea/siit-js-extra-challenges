/*
## CHALLENGE 5: FizzBuzz
Write a program that prints the numbers from 1 to a given positive integer. However, for multiples of 3, print "Fizz" instead of the number, for multiples of 5, print "Buzz", and for numbers that are multiples of both 3 and 5, print "FizzBuzz".

Example
Input: 15
Output: 
    1  
    2  
    Fizz  
    4  
    Buzz  
    Fizz  
    7  
    8  
    Fizz  
    Buzz  
    11  
    Fizz  
    13  
    14  
    FizzBuzz
*/

console.log("CHALLENGE 5: FizzBuzz");

let num = parseInt(prompt("Enter a positive integer:"));

if (num > 0) {
  for (let i = 1; i <= num; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
      console.log("FizzBuzz");
    } else if (i % 3 === 0) {
      console.log("Fizz");
    } else if (i % 5 === 0) {
      console.log("Buzz");
    } else {
      console.log(i);
    }
  }
} else {
  console.log("Please enter a valid positive integer.");
}
