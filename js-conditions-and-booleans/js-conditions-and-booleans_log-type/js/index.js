/*-----------------------------------------------------------------------------mk--
| Eine Annäherung
|----------------------------------------------------------------------------------
| 
*/
function getType(data) {
	const type = typeof data;

	switch (type) {
		case 'string':
			console.log('string!');
			break;
		case 'number':
			console.log('number!');
			break;
		case 'boolean':
			console.log('boolean!');
			break;
		case 'undefined':
			console.log('undefined!');
			break;
		case 'function':
			console.log('function!');
			break;
		case 'object':
			if (data instanceof Array) {
				console.log('array!');
			} else if (data === null) {
				console.log('null!');
			} else {
				console.log('object!');
			}
			break;
		default:
			console.log('Unknown type.');
	}
}

getType();
getType('5');g
getType(5);
getType(false);
getType((x) => x * x);
getType([]);
getType(null);
getType({});