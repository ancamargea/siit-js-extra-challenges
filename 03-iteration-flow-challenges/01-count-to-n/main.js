/*
## CHALLENGE 1: Count to N
Write a program that takes a positive number as input and counts from 1 up to that number, displaying each value along the way.

Example
Input: 7
Output: 
    1
    2
    3
    4
    5
    6
    7
*/

console.log("CHALLENGE 1: Count to N");

let num = parseInt(prompt("Enter a positive number:"));

if (num > 0) {
  for (let i = 1; i <= num; i++) {
    console.log(i);
  }
} else {
  console.log("Please enter a valid positive number.");
}
