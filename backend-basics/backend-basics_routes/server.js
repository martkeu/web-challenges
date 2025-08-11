import { createServer } from 'node:http';

export const server = createServer((req, res) => {
	if (req.url === '/api/fish/1') {
		res.statusCode = 200;
		res.end('Shrimp');
		return;
	}

	if (req.url === '/api/fish/2') {
		res.statusCode = 200;
		res.end('Anemonefish');
		return;
	}

	res.statusCode = 404;
	res.end('Not found');
});

// export const server = createServer((req, res) => {
// 	switch (req.url) {
// 		case '/api/fish/1':
// 			res.statusCode = 200;
// 			res.end('Shrimpp');
// 			break;

// 		case '/api/fish/2':
// 			res.statusCode = 200;
// 			res.end('Anemonefish');
// 			break;

// 		default:
// 			res.statusCode = 404;
// 			res.end('Not found');
// 	}
// });
