console.clear();

const pizzaInput1 = document.querySelector('[data-js="pizza-input-1"]');
const pizza1 = document.querySelector('[data-js="pizza-1"]');
const pizzaInput2 = document.querySelector('[data-js="pizza-input-2"]');
const pizza2 = document.querySelector('[data-js="pizza-2"]');
const outputSection = document.querySelector('[data-js="output-section"]');

const output = document.querySelector('[data-js="output"]');

let pizzaSize1 = 24;
let pizzaSize2 = 24;

pizzaInput1.addEventListener("input", () => {
    pizzaSize1 = Number(pizzaInput1.value);
    
    calculatePizzaGain(pizzaSize1, pizzaSize2);
    updatePizzaDisplay(pizza1, pizzaSize1);
    updateOutputColor(pizzaSize1, pizzaSize2)
});

pizzaInput2.addEventListener("input", () => {
    pizzaSize2 = Number(pizzaInput2.value);
    
    calculatePizzaGain(pizzaSize1, pizzaSize2);
    updatePizzaDisplay(pizza2, pizzaSize2);    
    updateOutputColor(pizzaSize1, pizzaSize2)
});

// Task 1: Define the function `calculatePizzaGain` here
function calculatePizzaGain(diameter1, diameter2) {
    const areaPizza1 = (diameter1 / 2) ** 2 * Math.PI;
    const areaPizza2 = (diameter2 / 2) ** 2 * Math.PI;

    const pizzaGainRelativeToPizza1 = (areaPizza2 - areaPizza1) / areaPizza1 * 100;

    output.textContent = Math.round(pizzaGainRelativeToPizza1);
}


// Task 2: Define the function `updatePizzaDisplay` here
function updatePizzaDisplay(pizzaElement, newSize) {
    const newDisplaySize = (newSize / 24) * 100; 

    pizzaElement.style.width = `${newSize}px`;
}

// Task 3: Define the function `updateOutputColor` here
function updateOutputColor(size1, size2) {
    outputSection.style.backgroundColor = (size1 < size2) ? "var(--red)" : "var(--green)";

    // if (size1 < size2) {
    //     outputSection.style.backgroundColor = "var(--red)";
    // }
    // else if (size1 > size2) {
    //     outputSection.style.backgroundColor = "var(--green)";
    // }
    // else {
    //     outputSection.style.backgroundColor = "white";
    // }
}