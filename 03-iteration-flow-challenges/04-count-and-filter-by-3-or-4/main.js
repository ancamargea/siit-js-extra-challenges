/*
## CHALLENGE 4: Count & Filter by 3 or 4 (comma-separated)
Write a program that takes two positive integers as input and prints the numbers between them (inclusive) that are divisible by 3 or 4, in a single line, separated by commas.

Example 1
Input: 3 15
Output: 3, 4, 6, 8, 9, 12, 15

Example 2
Input: 15 3
Output: 3, 4, 6, 8, 9, 12, 15
*/

console.log("CHALLENGE 4: Count & Filter by 3 or 4 (comma-separated)");

let num1 = parseInt(prompt("Enter the first positive integer:"));
let num2 = parseInt(prompt("Enter the second positive integer:"));

if (num1 > 0 && num2 > 0) {
  let start = Math.min(num1, num2);
  let end = Math.max(num1, num2);

  let numbers = [];

  for (let i = start; i <= end; i++) {
    if (i % 3 === 0 || i % 4 === 0) {
      numbers.push(i);
    }
  }

  console.log(numbers.join(", "));
} else {
  console.log("Please enter valid positive integers.");
}
