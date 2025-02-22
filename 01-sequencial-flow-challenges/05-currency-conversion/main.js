/*
## CHALLENGE 5: Currency Conversion
The user enters an amount in one currency and an exchange rate. The program calculates and displays the converted amount.
*/

console.log("CHALLENGE 5: Currency Conversion");

let currency1 = prompt(
  "Please enter the amount of lei you want to exchange to euro."
);

currency1 = Number(currency1);

if (isNaN(currency1)) {
  alert("Please only enter numbers.");
} else {
  alert(`${currency1} RON = ${currency1 * 4.98} €.`);
}
