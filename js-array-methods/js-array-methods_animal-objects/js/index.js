console.clear();

const animals = [
	{
		name: 'cat',
		weight: 4,
		continents: [
			'Europe',
			'Asia',
			'Africa',
			'Australia',
			'North-America',
			'South-America',
		],
	},
	{
		name: 'dog',
		weight: 10,
		continents: [
			'Europe',
			'Asia',
			'Africa',
			'Australia',
			'North-America',
			'South-America',
		],
	},
	{ name: 'elephant', weight: 4000, continents: ['Africa', 'Asia'] },
	{
		name: 'rabbit',
		weight: 2,
		continents: [
			'Europe',
			'Asia',
			'Africa',
			'Australia',
			'North-America',
			'South-America',
		],
	},
	{ name: 'lion', weight: 200, continents: ['Africa'] },
	{ name: 'tiger', weight: 150, continents: ['Asia'] },
	{
		name: 'horse',
		weight: 500,
		continents: [
			'Europe',
			'Asia',
			'Africa',
			'Australia',
			'North-America',
			'South-America',
		],
	},
	{ name: 'giraffe', weight: 600, continents: ['Africa'] },
	{ name: 'zebra', weight: 300, continents: ['Africa'] },
	{
		name: 'penguin',
		weight: 12,
		continents: ['Africa', 'Australia', 'Antarctica', 'South-America'],
	},
	{
		name: 'polar bear',
		weight: 450,
		continents: ['North-America', 'Asia', 'Arctic'],
	},
	{ name: 'panda', weight: 120, continents: ['Asia'] },
	{ name: 'koala', weight: 13, continents: ['Australia'] },
	{ name: 'kangaroo', weight: 70, continents: ['Australia'] },
	{
		name: 'monkey',
		weight: 20,
		continents: ['South-America', 'Asia', 'Africa'],
	},
	{ name: 'sloth', weight: 8, continents: ['South-America'] },
	{ name: 'hippo', weight: 1500, continents: ['Africa'] },
	{ name: 'rhino', weight: 2000, continents: ['Asia', 'Africa'] },
];
//
// Hint: Besides the array method, check out the string method `startsWith()`.
const firstAnimalStartingWithLetterG = animals.find((animal) =>
	animal.name.startsWith('g')
);

const indexOfAnimalWithNameLongerFive = animals.findIndex(
	(animal) => animal.name.length > 5
);

// Note:
// - Sorting strings is slightly more complicated than sorting numbers.
// - You will need if-statements and return values of -1, 1, and 0.
// - Check out MDN: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/sort

// Hint: There is no need to upper-/lowercase the strings before sorting them.
// Hint: sort() mutates the original array, which is bad.
// Make sure to use toSorted() instead.

// const animalsSortedAlphabetically = animals.map((animal) => animal.name).toSorted();
const animalsSortedAlphabetically = animals.toSorted((a, b) => {
	const nameA = a.name;
	const nameB = b.name;

	if (nameA < nameB) {
		return -1;
	}
	if (nameA > nameB) {
		return 1;
	}

	return 0;
});
console.log(animalsSortedAlphabetically);

const animalsSortedByWeightStartingWithLowest = animals.toSorted((a, b) => {
	const weightA = a.weight;
	const weightB = b.weight;

	if (weightA < weightB) {
		return -1;
	}
	if (weightA > weightB) {
		return 1;
	}

	return 0;
});
console.log(animalsSortedByWeightStartingWithLowest);

// Note:
// - reverse() mutates the original array (like sort() does), which is bad.
// Use toReversed() instead (or any other method to get the expected result)

const animalsSortedByWeightReversed = animals.toSorted((a, b) => {
	const weightA = a.weight;
	const weightB = b.weight;

	if (weightA < weightB) {
		return 1;
	}
	if (weightA > weightB) {
		return -1;
	}

	return 0;
});
console.log(animalsSortedByWeightReversed);

const animalWithWeightMoreThanFivehundredExists = animals.some(
	(animal) => animal.weight > 500
);

// Hint: Filter for Europe first, then check every animal for its weight.
const allAnimalsInEuropeWeighLessThanOnehundred = animals
	.filter((animal) => animal.continents.includes('Europe'))
	.every((animal) => animal.weight < 100);

// Hint: filter + map + reduce
let weightOfAllAnimalsInAfrica = animals
	.filter((animal) => animal.continents.includes('Africa'))
	.reduce((acc, animal) => acc + animal.weight, 0);

// Hint: As above, but divided by the number of animals in Africa.
// let averageWeightOfAllAnimalsInAfrica = null;
const numberOfAninmalsInAfrica = animals.filter((animal) =>
	animal.continents.includes('Africa')
).length;

let averageWeightOfAllAnimalsInAfrica =
	weightOfAllAnimalsInAfrica / numberOfAninmalsInAfrica;

export {
	firstAnimalStartingWithLetterG,
	indexOfAnimalWithNameLongerFive,
	animalsSortedAlphabetically,
	animalsSortedByWeightStartingWithLowest,
	animalsSortedByWeightReversed,
	animalWithWeightMoreThanFivehundredExists,
	allAnimalsInEuropeWeighLessThanOnehundred,
	weightOfAllAnimalsInAfrica,
	averageWeightOfAllAnimalsInAfrica,
};
