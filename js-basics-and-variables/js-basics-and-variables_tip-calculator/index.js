console.clear();

/*
Create a program that calculates the total cost of a meal, including tip, 
based on the cost of the meal and the percentage of the tip.

1. Define two variables:
   - A variable that stores the value of the meal cost.
   - A variable that stores the value of the tip percentage.

2. Calculate the tip amount by multiplying the meal cost by the tip percentage, and store the result in a variable called `tipAmount`.

3. Calculate the total cost of the meal, including tip, by adding `mealCost` and `tipAmount`, and store the result in a variable called `totalCost`.

4. Log a message to the console that includes the meal cost, tip amount, and total cost.
*/

let mealCost = 22.90;
let tipPercentage = 10;

let tipAmount = mealCost * (tipPercentage / 100);G
let totalCost = mealCost + tipAmount;

console.log('Cost of meal: ', mealCost);
console.log('Amount of tip: ', tipAmount);
console.log('Total price: ', totalCost);

console.log('Total price rounded: ', totalCost.toFixed(2));