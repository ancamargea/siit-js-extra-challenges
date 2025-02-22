/*
## CHALLENGE 2: Count to N (comma-separated)
Write a program that takes a positive integer as input and prints the numbers from 1 to that number in a single line, separated by commas.

Example
Input: 7
Output: 1, 2, 3, 4, 5, 6, 7
*/

console.log("CHALLENGE 2: Count to N (comma-separated)");

let num = parseInt(prompt("Enter a positive number:"));

if (num > 0) {
  let numbers = [];
  for (let i = 1; i <= num; i++) {
    numbers.push(i);
  }
  console.log(numbers.join(", "));
} else {
  console.log("Please enter a valid positive integer.");
}
