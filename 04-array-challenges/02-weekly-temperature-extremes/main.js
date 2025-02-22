/*
## CHALLENGE 2: Weekly Temperature Extremes
Write a program that reads a list of numbers and determines the minimum and maximum values in the list.

Example
Input:  
    12.5  
    15.0  
    -3.8  
    18.2  
    20.1  
    14.6  
    11.3  

Output:  
    Minimum temperature: -3.8°C  
    Maximum temperature: 20.1°C 
*/

console.log("CHALLENGE 2: Weekly Temperature Extremes");

function findMinMax() {
  let numbers = [12.5, 15.0, -3.8, 18.2, 20.1, 14.6, 11.3];

  let min = Math.min(...numbers);
  let max = Math.max(...numbers);

  console.log(`Numbers: ${numbers}`);
  console.log(`Minimum temperature: ${min}°C`);
  console.log(`Maximum temperature: ${max}°C`);
}

findMinMax();
