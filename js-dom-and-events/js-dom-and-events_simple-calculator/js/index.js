console.clear();

// const operand1 = 12;
let operand1 = 12;
const operand2 = 4;

// ----- Mathematical Operations -----

// Step 1: Use `document.querySelector` to select each button by its `data-js` attribute.

// --v-- write your code here --v--
const btnAdd = document.querySelector('[data-js="add"]');
const btnSubtract = document.querySelector('[data-js="subtract"]');
const btnMuliply = document.querySelector('[data-js="multiply"]');
const btnDivide = document.querySelector('[data-js="divide"]');
const btnExponent = document.querySelector('[data-js="exponent"]');
const btnModulo = document.querySelector('[data-js="modulo"]');
// --^-- write your code here --^--

/* 
Step 2: Add event listeners for each mathematical operation:

For each operation (add, subtract, multiply, divide, exponent, and modulo):
1. Add an event listener to the corresponding button.
2. Within the event listener, perform the operation using `operand1` and `operand2`.
3. Store the result in a variable.
4. Log the result to the console.
*/

// --v-- write your code here --v--

// btnAdd.addEventListener('click', () => {
// 	let result = operand1 + operand2;
// 	console.log(result);
// });

btnAdd.addEventListener('click', () => console.log(operand1 + operand2));
btnSubtract.addEventListener('click', () => console.log(operand1 - operand2));
btnMuliply.addEventListener('click', () => console.log(operand1 * operand2));
btnDivide.addEventListener('click', () => console.log(operand1 / operand2));
btnExponent.addEventListener('click', () => console.log(operand1 ** operand2));
btnModulo.addEventListener('click', () => console.log(operand1 % operand2));
// --^-- write your code here --^--

// ----- Update the First Operand -----

/*
In the following section, update the value of `operand1` using the buttons in the "Update the First Operand" section.
Each button should adjust the value of `operand1` and log the new value to the console.

Hint: To allow `operand1` to be updated, you might need to change its declaration.

Step 1: Select each button for updating `operand1` by its `data-js` attribute.
Step 2: Add event listeners to update `operand1` based on the button clicked. Log the updated value to the console.
*/

// --v-- write your code here --v--
const btnIncreaseByOne = document.querySelector('[data-js="increase-by-one"]');
const btnIncreaseByFive = document.querySelector('[data-js="increase-by-five"]');
const btnDecreaseByOne = document.querySelector('[data-js="decrease-by-one"]');
const btnDecreaseByFive = document.querySelector('[data-js="decrease-by-five"]');
const btnMulitplyByTwo = document.querySelector('[data-js="multiply-by-two"]');
const btnDivideByTwo = document.querySelector('[data-js="divide-by-two"]');

btnIncreaseByOne.addEventListener('click', () => console.log('First operand: ', ++operand1));
btnIncreaseByFive.addEventListener('click', () => console.log('First operand: ', operand1 += 5));
btnDecreaseByOne.addEventListener('click', () => console.log('First operand: ', --operand1));
btnDecreaseByFive.addEventListener('click', () => console.log('First operand: ', operand1 -= 5));
btnMulitplyByTwo.addEventListener('click', () => console.log('First operand: ', operand1 *= 2));
btnDivideByTwo.addEventListener('click', () => console.log('First operand: ', operand1 /= 2));
// --^-- write your code here --^--
