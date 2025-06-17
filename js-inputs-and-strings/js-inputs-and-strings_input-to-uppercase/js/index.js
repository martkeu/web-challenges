console.clear();

const firstInput = document.querySelector('[data-js="first-input"]');
const btnUppercase = document.querySelector('[data-js="button-uppercase"]');

btnUppercase.addEventListener('click', () => {    
    firstInput.value = firstInput.value.toUpperCase();
})