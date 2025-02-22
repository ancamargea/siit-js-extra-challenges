/*
## CHALLENGE 3: Greatest Daily Temperature Difference
Write a program that reads the daily high and nightly low temperatures for a week and determines the day with the greatest temperature difference.

Example
Input:  
    Day 1:  12.5  5.2  
    Day 2:  15.0  8.1  
    Day 3:  9.8   2.5  
    Day 4:  18.2  10.6  
    Day 5:  20.1  12.3  
    Day 6:  14.6  6.7  
    Day 7:  11.3  3.9

Output:  
    Greatest temperature difference: 7.3°C on Day 1  
*/

console.log("CHALLENGE 3: Greatest Daily Temperature Difference");

function findGreatestTempDiff() {
  let dailyHighs = [12.5, 15.0, 9.8, 18.2, 20.1, 14.6, 11.3];
  let nightlyLows = [5.2, 8.1, 2.5, 10.6, 12.3, 6.7, 3.9];

  let maxDiff = 0;
  let maxDiffDay = 0;

  for (let i = 0; i < dailyHighs.length; i++) {
    let tempDifference = dailyHighs[i] - nightlyLows[i];
    if (tempDifference > maxDiff) {
      maxDiff = tempDifference;
      maxDiffDay = i;
    }
  }

  let daysOfWeek = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  console.log(
    `Greatest temperature difference is ${daysOfWeek[maxDiffDay]} with a difference of ${maxDiff}°C.`
  );
}

findGreatestTempDiff();
