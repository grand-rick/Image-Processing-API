import router from '../../routes/router';
import supertest from 'supertest';

const request = supertest(router);

describe('Testing router endpoint', () => {
	it('gets status code 400 on visit to "/fish"', async () => {
		request
			.get('/')
			.then((response) => {
				expect(response.status).toBe(404);
			})
			.catch((error) => {
				console.log(error);
			});
	});
});
