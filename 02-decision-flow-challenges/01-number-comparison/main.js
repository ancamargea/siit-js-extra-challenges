/*
CHALLENGE 1: Number comparison
Create a program that compares two numbers provided by the user and determines whether they are in ascending or descending order.

Example 1
Input: 5, 7
Output: The numbers are in an ASCENDING ORDER

Example 2
Input: 7, 3
Output: The numbers are in an DESCENDING ORDER
*/

console.log("CHALLENGE 1: Number comparison");

alert("Please enter two random numbers.");

let num1 = prompt("Input the first number: ");
let num2 = prompt("Input the second number: ");

num1 = Number(num1);
num2 = Number(num2);

if (num1 < num2) {
  alert(`The numbers are in an ascending order.`);
} else {
  alert(`The numbers are in an descending order.`);
}
