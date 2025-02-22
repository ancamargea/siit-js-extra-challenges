/*
## CHALLENGE 1: Count Above and Below the Average
Write a program that reads a list of student grades, calculates the average grade, and determines how many grades are above and below the average.

Example
Input: 
    9
    7
    8.50
    6.50
    10

Output: 
    Average grade: 8.2
    Grades above the average: 3
    Grades below the average: 2
*/

console.log("CHALLENGE 1: Count Above and Below the Average");

function analyzeGrades() {
  let grades = [9, 7, 8.5, 6.5, 10];

  let total = 0;
  for (let i = 0; i < grades.length; i++) {
    total += grades[i];
  }
  let average = total / grades.length;

  let aboveAverage = 0;
  let belowAverage = 0;

  for (let i = 0; i < grades.length; i++) {
    if (grades[i] > average) {
      aboveAverage++;
    } else if (grades[i] < average) {
      belowAverage++;
    }
  }

  console.log(`Grades: ${grades}`);
  console.log(`Average grade: ${average.toFixed(2)}`);
  console.log(`Number of grades above the average: ${aboveAverage}`);
  console.log(`Number of grades below the average: ${belowAverage}`);
}

analyzeGrades();
