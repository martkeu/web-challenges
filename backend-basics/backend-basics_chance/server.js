import { createServer } from 'node:http';
import Chance from 'chance';

function pleaseLetMeIntroduceMyself() {
	const chance = new Chance();

	return `
      Hello, my name is ${chance.name()} and I am ${chance.age()} years old.\n 
      I am a ${chance.profession()}.
   `;
}

export const server = createServer((req, res) => {
	if (req.url === '/') {
		res.statusCode = 200;
		res.end(pleaseLetMeIntroduceMyself());
		return;
	}

	res.statusCode = 404;
	res.end('Not found');
});
