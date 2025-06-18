console.clear();

const progressBar = document.querySelector('[data-js="progress-bar"]');

function calculateScrollPercentage() {
    return window.scrollY / (document.body.clientHeight - window.innerHeight) * 100;
}
 
document.addEventListener('scroll', () => {
    progressBar.style.width = `${calculateScrollPercentage()}%`;
});


// window.scrollY: The Y position of the window on the total webpage.
// window.innerHeight: The height of the visible part of the window.
// document.body.clientHeight : The total height of the webpage.
