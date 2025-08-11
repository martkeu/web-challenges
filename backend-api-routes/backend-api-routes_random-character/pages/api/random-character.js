import Chance from 'chance';

function randomCharacters() {
	const chance = new Chance();

	const character = {
		firstName: chance.first(),
		lastName: chance.last(),
      twitterName: chance.twitter(),
      geoHash: chance.geohash(),
	};

	return character;
}

export default function handler(request, response) {

  response.status(200).json(randomCharacters());
}
