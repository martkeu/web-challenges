console.clear();

const starContainer = document.querySelector('[data-js="star-container"]');

function renderStars(filledStars) {
	// Reset the star container before re-rendering stars
	starContainer.innerHTML = '';

	// --v-- write or modify code below this line --v--
	for (let i = 1; i <= 5; i++) {
		const starImage = document.createElement('img');

		if (i <= filledStars) {
			starImage.src = 'assets/star-filled.svg';
			starImage.alt = 'Filled Star Image';
		} else {
			starImage.src = 'assets/star-empty.svg';
			starImage.alt = 'Empty Star Image';
		}

		starImage.addEventListener('click', () => {
			renderStars(i);
		});

		starContainer.append(starImage);
	}
	// --^-- write or modify code above this line --^--
}

renderStars();
