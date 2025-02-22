/**
## CHALLENGE 4: Next Term in Arithmetic Progression
The user enters two numbers in an arithmetic sequence. The program calculates and displays the next number in the sequence.
 */

console.log("CHALLENGE 4: Next Term in Arithmetic Progression");

let num1 = prompt("Input a number.");
let num2 = prompt("Input a second number.");

num1 = Number(num1);
num2 = Number(num2);

if (isNaN(num1) || isNaN(num2)) {
  alert("Please enter valid numbers.");
} else {
  const difference = num2 - num1;
  const nextNumber = num2 + difference;

  alert("The next number in the sequence is: " + nextNumber);
}
