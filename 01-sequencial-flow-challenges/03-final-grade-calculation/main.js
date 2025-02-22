/**
## CHALLENGE 3: Final Grade Calculation
A student receives three grades. The program calculates and displays the final average.
*/

console.log("CHALLENGE 3: Final Grade Calculation");

let inputName = prompt("Enter the student's name:");

let Grade1 = prompt("Enter the first grade:");
let Grade2 = prompt("Enter the second grade:");
let Grade3 = prompt("Enter the third grade:");

Grade1 = Number(Grade1);
Grade2 = Number(Grade2);
Grade3 = Number(Grade3);

function calculateMean(Grade1, Grade2, Grade3) {
  return (Grade1 + Grade2 + Grade3) / 3;
}

let mean = calculateMean(Grade1, Grade2, Grade3);

alert(`${inputName} has a final average of ${mean}.`);
