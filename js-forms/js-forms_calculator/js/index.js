console.clear();

const form = document.querySelector('[data-js="form"]');
const resultOutput = document.querySelector('[data-js="result"]');

// function add(a, b) {
//   return a + b;
// }

// function subtract(a, b) {
//   return a - b;
// }

// function multiply(a, b) {
//   return a * b;
// }

// function divide(a, b) {
//   return a / b;
// }

form.addEventListener('submit', (event) => {
	event.preventDefault();

	let result;

	// --v-- write your code here --v--
	const formData = new FormData(event.target);
	const data = Object.fromEntries(formData);

	const operandA = Number(data.numberA);
	const operandB = Number(data.numberB);
	const operator = data.operator;

	console.log({ operandA, operandB, operator });

	switch (operator) {
		case 'addition':
			result = operandA + operandB;
			break;
		case 'subtraction':
			result = operandA - operandB;
			break;
		case 'multiplication':
			result = operandA * operandB;
			break;
		case 'division':
			if (operandB !== 0) {
				result = operandA / operandB;
			} else {
				result = 'Dividing by 0 is not allowed!';
			}
			break;
	}
	// --^-- write your code here --^--

	resultOutput.textContent = result;
});
