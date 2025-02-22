/*
Create a program that determines whether a given number is odd or even.

Example 1
Input: 5
Output: 5 is an odd number

Example 2
Input: 8
Output: 8 is an even number
*/

console.log("CHALLENGE 4: Odd or even");

let num = prompt("Enter a number to check if it's odd or even: ");

num = Number(num);

if (num % 2 === 0) {
  alert(num + " is an even number.");
} else {
  alert(num + " is an odd number.");
}
