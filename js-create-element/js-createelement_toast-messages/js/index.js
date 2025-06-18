console.clear();

const toastContainer = document.querySelector('[data-js="toast-container"]');
const addButton = document.querySelector('[data-js="add-button"]');
const clearButton = document.querySelector('[data-js="clear-button"]');

addButton.addEventListener('click', () => {
	// Exercise: Append a new entry to the toast messages container

	const newLi = document.createElement('li');

	newLi.classList.add('toast-container__message');
	// newLi.setAttribute("class", "toast-container__message");

	newLi.textContent = "I'm an new li-Element";

	toastContainer.append(newLi);
});

// Lösung 1:
// clearButton.addEventListener("click", () => {
//     // Exercise: Clear the stack of toast messages
//     const toastMessage = document.querySelector('.toast-container__message');
//     toastMessage.remove();
// });

// Lösung 2:
clearButton.addEventListener('click', () => {
	while (toastContainer.firstChild) {
		toastContainer.removeChild(toastContainer.firstChild);
	}
});
