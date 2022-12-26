import app from '../index';
import supertest from 'supertest';

const request = supertest(app);

describe('Testing main endpoint', () => {
	it('gets status code 200 on visit to "/"', () => {
		request
			.get('/')
			.then((response) => {
				expect(response.status).toBe(200);
			})
			.catch((error) => {
				console.log(error);
			});
	});
});
