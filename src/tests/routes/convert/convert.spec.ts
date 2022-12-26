import convert from '../../../routes/convert/convert';
import fs from 'fs';
import supertest from 'supertest';

const request = supertest(convert);

describe('Testing the convert endpoint', () => {
	it('should handle the promise rejection', () => {
		request
			.get('/')
			.then((result) => {
				console.log(result);
			})
			.catch((error) => {
				expect(error).toEqual(
					new TypeError(
						"Cannot read properties of undefined (reading 'fileName')"
					)
				);
			});
	});
	it('expects the convert endpoint to respond with status code 200', () => {
		request
			.get('/?fileName=fjord&width=100&height=500')
			.then((res) => {
				expect(res.status).toEqual(200);
			})
			.catch((error) => {
				console.log(error);
			});
	});
	it('throws an error when an image doesn\'t exist', () => {
		const inputFile = 'Nothing';
		expect(fs.existsSync(inputFile)).not.toBe(true);
	})
});
