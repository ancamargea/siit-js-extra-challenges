/**
## CHALLENGE 2: Basic Arithmetic Operations
The user enters two numeric values. The program displays:
1. Their sum,
2. Their difference,
3. Their product,
4. Their division,
5. Their arithmetic mean,
6. The remainder of the division of the first number by the second,
7. The first number raised to the power of the second.
*/

console.log("CHALLENGE 2: Basic Arithmetic Operations");

let num1 = prompt("Input a number");
let num2 = prompt("Input another number");

num1 = Number(num1);
num2 = Number(num2);

// 1.
alert(`The sum of the two numbers is: ${num1 + num2}`);

// 2.
alert(`The difference of the two numbers is: ${num1 - num2}`);

// 3.
alert(`The product of the two numbers is: ${num1 * num2}`);

// 4.
alert(`The division of the two nubers is: ${num1 / num2}`);

// 5.
function calculateMean(num1, num2) {
  return (num1 + num2) / 2;
}

let mean = calculateMean(num1, num2);
alert(`The arithmetic mean of the two numbers is: ${mean}`);

// 6.
function calculateRemainder(num1, num2) {
  return num1 % num2;
}

let remainder = calculateRemainder(num1, num2);
alert(`The remainder of ${num1} divided by ${num2} is: ${remainder}`);

// 7.
alert(
  `The first number raised to the power of the second number equals: ${
    num1 ** num2
  }`
);
