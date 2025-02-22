/*
Create a program that takes three numbers as input and displays them in an ascending order.

Example 1
Input: 5, 2, 7
Output: 2, 5, 7

Example 2
Input: 7, 3, 1
Output: 1, 3, 7
*/

console.log("CHALLENGE 3: Ordering three numbers");

alert("Please enter three random numbers.");

let num1 = prompt("Input the first number: ");
let num2 = prompt("Input the second number: ");
let num3 = prompt("Input the third number: ");

num1 = Number(num1);
num2 = Number(num2);
num3 = Number(num3);

let numbers = [num1, num2, num3];

numbers.sort(function (a, b) {
  return a - b;
});

alert("The numbers in ascending order are: " + numbers.join(", "));
