/*
## CHALLENGE 3: Count Count Between Two Numbers (comma-separated)
Write a program that takes two positive integers as input and prints the numbers from the smaller number to the larger number in a single line, separated by commas.

Example 1
Input: 3 8
Output: 3, 4, 5, 6, 7, 8

Example 2
Input: 8 3
Output: 3, 4, 5, 6, 7, 8
*/

console.log("CHALLENGE 3: Count Count Between Two Numbers (comma-separated)");

let num1 = parseInt(prompt("Enter the first positive integer:"));
let num2 = parseInt(prompt("Enter the second positive integer:"));

if (num1 > 0 && num2 > 0) {
  let start = Math.min(num1, num2);
  let end = Math.max(num1, num2);

  let numbers = [];
  for (let i = start; i <= end; i++) {
    numbers.push(i);
  }

  console.log(numbers.join(", "));
} else {
  console.log("Please enter valid positive integers.");
}
