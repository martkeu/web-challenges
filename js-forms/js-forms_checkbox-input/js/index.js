console.clear();

const form = document.querySelector('[data-js="form"]');
const tosError = document.querySelector('[data-js="tos-error"]');
const tosCheckbox = document.querySelector('[data-js="tos"]');
const successMessage = document.querySelector('[data-js="success"]');

function hideTosError() {
	tosError.setAttribute('hidden', '');
}

function showTosError() {
	tosError.removeAttribute('hidden');
}

hideTosError();

form.addEventListener('submit', (event) => {
	event.preventDefault();

	// --v-- write your code here --v--
	const formData = new FormData(event.target);
	const data = Object.fromEntries(formData);

	console.log(data);

	if (data.tos === 'on') {
		alert('Form submitted');
    }

    if (tosCheckbox.checked) {
        successMessage.removeAttribute('hidden');
    }
    
    // --^-- write your code here --^--
});

tosCheckbox.addEventListener('click', () => {
    tosCheckbox.checked ? hideTosError() : showTosError();
});

	// eslint-disable-next-line no-alert
