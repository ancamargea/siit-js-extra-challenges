/*
Create a program that takes two numbers as input and displays them in an ascending order.

Example 1
Input: 5, 7
Output: 5, 7

Example 2
Input: 7, 3
Output: 3, 7
*/

console.log("CHALLENGE 2: Ordering two numbers");

alert("Please enter two random numbers.");

let num1 = prompt("Input the first number: ");
let num2 = prompt("Input the second number: ");

num1 = Number(num1);
num2 = Number(num2);

if (num1 < num2) {
  alert(`The numbers in ascending order: ${num1}, ${num2}.`);
} else {
  alert(`The numbers in ascending order: ${num2}, ${num1}.`);
}
