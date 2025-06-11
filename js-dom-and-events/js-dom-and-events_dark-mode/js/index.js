console.clear();

const bodyElement = document.querySelector('[data-js="body"]');

const btnDark = document.querySelector('[data-js="dark-mode-button"]');
const btnLight = document.querySelector('[data-js="light-mode-button"]');
const btnToggle = document.querySelector('[data-js="toggle-button"]');

btnDark.addEventListener('click', enableDarkmode);
btnLight.addEventListener('click', disableDarkmode);
btnToggle.addEventListener('click', toggleDarkmode);

function enableDarkmode() {
    bodyElement.classList.add('dark');
}

function disableDarkmode() {
    bodyElement.classList.remove('dark');
}

function toggleDarkmode() {
    bodyElement.classList.toggle('dark');
}