/*
## CHALLENGE 1: Number Relations
Create a program takes a numeric value from the user and displays:
1. In a single message, a sequence of text containing: the previous number, the given number, and the next number (e.g., 5 => "4, 5, 6").
2. The opposite of the number (e.g., 5 => "the opposite of 5 is -5", -3 => "the opposite of -3 is 3").
3. The remainder of the division by 2 (e.g., 5 => "the remainder of 5 divided by 2 is 1").
4. Number 2 raised to the power of the given value (e.g., 3 => "2 to the power of 3 is 8").
*/

console.log("CHALLENGE 1: Number Relations");

let inputNr = prompt("Input a number");
inputNr = Number(inputNr);

let prevNr = inputNr - 1;
let nextNr = inputNr + 1;

// alert('The number sequence: prevNr + ", " + inputNr + ", " + nextNr + ", "');
alert(`The number sequence: ${prevNr}, ${inputNr}, ${nextNr}`);

// alert("The opposite of " + inputNr + " is: " + -inputNr);
alert(`The opposite of ${inputNr} is: ${-inputNr}`);

// alert('The reminder of ' + inputNr + ' divided by 2 is: ' + inputNr % 2);
alert(`The reminder of ${inputNr} divided by 2 is ${inputNr % 2}`);

// alert("2 to the power of " + inputNr + " equals: " + 2 ** inputNr);
alert(`2 to the power of ${inputNr} equals ${2 ** inputNr}`);
