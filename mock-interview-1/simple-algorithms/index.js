// Find the maximum
function maxOfTwoNumbers(num1, num2) {
	if (num1 >= num2) {
		return num1;
	}

	return num2;
}

// Find the longest word
const words = ['Jaws', 'Up', 'Alien', 'Gravity', 'Inception', 'Psycho'];

function findLongestWord(words) {
	let longestWord = words.length > 0 ? words[0] : null;

	for (let i = 0; i < words.length; i++) {
		if (words[i].length > longestWord.length) {
			longestWord = words[i];
		}
	}

	return longestWord;
}

console.log(findLongestWord(words));

// Calculate the sum
const numbers = [6, 12, 1, 18, 13, 16, 2, 1, 8, 10];

function sumNumbers(numbers) {
	return numbers.reduce((acc, number) => acc + number, 0);
}

console.log(sumNumbers(numbers));

// Calculate the average length of the words
// const words2 = [
// 	'eclipse',
// 	'harmony',
// 	'cascade',
// 	'labyrinth',
// 	'quartz',
// 	'serendipity',
// 	'zenith',
// 	'ephemeral',
// 	'vortex',
// 	'mystique',
// ];
const words2 = ['eclipse', 'harmony', 'cascade'];

function averageWordLength(words) {
	if (!words.length > 0) {
		return null;
	}

	const sumOfWordsLength = words.reduce((acc, word) => acc + word.length, 0);

	console.log(sumOfWordsLength);

	return sumOfWordsLength / words.length;
}

console.log(averageWordLength(words2));

// Unique arrays - return an array without duplicates
const words3 = [
	'crab',
	'poison',
	'contagious',
	'simple',
	'bring',
	'sharp',
	'playground',
	'poison',
	'communion',
	'simple',
	'bring',
];

function uniquifyArray(words) {
	const removedDuplicates = [];

	words.forEach((word) => {
		if (!removedDuplicates.includes(word)) {
			removedDuplicates.push(word);
		}
	});

	return removedDuplicates;
}

console.log(uniquifyArray(words3));

// Find elements
const wordsFind = [
	'machine',
	'subset',
	'trouble',
	'starting',
	'matter',
	'eating',
	'truth',
	'disobedience',
];

function doesWordExist(haystack, needle) {
	return haystack.includes(needle) ? true : false;
}

// Count repetition
const wordsCount = [
	'machine',
	'matter',
	'subset',
	'trouble',
	'starting',
	'matter',
	'eating',
	'matter',
	'truth',
	'disobedience',
	'matter',
];

function howManyTimes(haystack, needle) {
	return haystack.filter((item) => item === needle).length;
}

console.log(howManyTimes(wordsCount, 'matter'));

// Bonus: A generic sum function
// for strings use the length of the string, for booleans use 1 and 0
const mixedArray = ['apple', 'banana', 'cherry', 'date', 42, 7, 1995, 23, true, false];

function sum(array) {
	const sumOfStringsLength = array
		.filter((item) => typeof item === 'string')
		.reduce((acc, word) => acc + word.length, 0);
	console.log(sumOfStringsLength);

	const sumOfNumbers = array
		.filter((item) => typeof item === 'number')
		.reduce((acc, number) => acc + number, 0);
	console.log(sumOfNumbers);

	const sumOfTruthValues = array.filter((item) => item === true).length;
	console.log(sumOfTruthValues);

	return sumOfStringsLength + sumOfNumbers + sumOfTruthValues;
}

console.log(sum(mixedArray));

// Bonus: Write a function that calculates the greatest product of four
// numbers that is either horizontally or vertically in the array

// const matrix = [
// 	[8, 2, 22, 97, 38, 15, 0, 40, 0, 75, 4, 5, 7, 78, 52, 12, 50, 77, 91, 8],
// 	[49, 49, 99, 40, 17, 81, 18, 57, 60, 87, 17, 40, 98, 43, 69, 48, 4, 56, 62, 0],
// 	[81, 49, 31, 73, 55, 79, 14, 29, 93, 71, 40, 67, 53, 88, 30, 3, 49, 13, 36, 65],
// 	[52, 70, 95, 23, 4, 60, 11, 42, 69, 24, 68, 56, 1, 32, 56, 71, 37, 2, 36, 91],
// 	[22, 31, 16, 71, 51, 67, 63, 89, 41, 92, 36, 54, 22, 40, 40, 28, 66, 33, 13, 80],
// 	[24, 47, 32, 60, 99, 3, 45, 2, 44, 75, 33, 53, 78, 36, 84, 20, 35, 17, 12, 50],
// 	[32, 98, 81, 28, 64, 23, 67, 10, 26, 38, 40, 67, 59, 54, 70, 66, 18, 38, 64, 70],
// 	[67, 26, 20, 68, 2, 62, 12, 20, 95, 63, 94, 39, 63, 8, 40, 91, 66, 49, 94, 21],
// 	[24, 55, 58, 5, 66, 73, 99, 26, 97, 17, 78, 78, 96, 83, 14, 88, 34, 89, 63, 72],
// 	[21, 36, 23, 9, 75, 0, 76, 44, 20, 45, 35, 14, 0, 61, 33, 97, 34, 31, 33, 95],
// 	[78, 17, 53, 28, 22, 75, 31, 67, 15, 94, 3, 80, 4, 62, 16, 14, 9, 53, 56, 92],
// 	[16, 39, 5, 42, 96, 35, 31, 47, 55, 58, 88, 24, 0, 17, 54, 24, 36, 29, 85, 57],
// 	[86, 56, 0, 48, 35, 71, 89, 7, 5, 44, 44, 37, 44, 60, 21, 58, 51, 54, 17, 58],
// 	[19, 80, 81, 68, 5, 94, 47, 69, 28, 73, 92, 13, 86, 52, 17, 77, 4, 89, 55, 40],
// 	[4, 52, 8, 83, 97, 35, 99, 16, 7, 97, 57, 32, 16, 26, 26, 79, 33, 27, 98, 66],
// 	[88, 36, 68, 87, 57, 62, 20, 72, 3, 46, 33, 67, 46, 55, 12, 32, 63, 93, 53, 69],
// 	[4, 42, 16, 73, 38, 25, 39, 11, 24, 94, 72, 18, 8, 46, 29, 32, 40, 62, 76, 36],
// 	[20, 69, 36, 41, 72, 30, 23, 88, 34, 62, 99, 69, 82, 67, 59, 85, 74, 4, 36, 16],
// 	[20, 73, 35, 29, 78, 31, 90, 1, 74, 31, 49, 71, 48, 86, 81, 16, 23, 57, 5, 54],
// 	[1, 70, 54, 71, 83, 51, 54, 69, 16, 92, 33, 48, 61, 43, 52, 1, 89, 19, 67, 48],
// ];

const matrix = [
		[1, 2, 3, 4, 5],
		[1, 20, 3, 4, 5],
		[1, 20, 3, 4, 5],
		[1, 20, 3, 4, 5],
		[1, 4, 3, 2, 1]
	  ];

function transpose(matrix) {
	return matrix[0].map((col, c) => matrix.map((row, r) => matrix[r][c]));
};

function getGreatestValues(array, n) {
	if (array.length < n) {
		return null;
	}

	const greatestValues = [];

	for (let i = 1; i <= n; i++) {
		const maxVal = Math.max(...array);
		const indexOfMaxVal = array.indexOf(maxVal);
		// console.log(maxVal);
		// console.log(array.indexOf(maxVal));

		if (indexOfMaxVal > -1) {
			const val = array.splice(indexOfMaxVal, 1);

			greatestValues.push(val[0]);
		}
	}

	return greatestValues;
}

function multiplyNumbers(numbers) {
	return numbers.reduce((acc, number) => acc * number, 1);
}

// console.log(getGreatestValues(matrix[0], 4));

function greatestProductN(matrix, n) {
	let itemProducts = [];

	// matrix.forEach((item) => {
    //     const greatest = getGreatestValues(item, n);

    //     console.log(greatest);

    //     itemProducts.push(multiplyNumbers(greatest));
    // });

    transpose(matrix).forEach((item) => {
        const greatest = getGreatestValues(item, n);

        console.log(greatest);

        itemProducts.push(multiplyNumbers(greatest));g
    });

	return Math.max(...itemProducts);
}

console.log('result:', greatestProductN(matrix, 4));

function greatestProduct(matrix) {
    return greatestProductN(matrix, 4)
}
console.log('result:', greatestProduct(matrix));

module.exports = {
	maxOfTwoNumbers,
	findLongestWord,
	sumNumbers,
	averageWordLength,
	uniquifyArray,
	doesWordExist,
	howManyTimes,
	sum,
	greatestProduct,
};
