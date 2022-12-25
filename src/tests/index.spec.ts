import app from '../index';
import supertest from 'supertest';

const request = supertest(app);

describe('Testing Endpoint response', () => {
	it('gets status code 200 on visit to "/"', async () => {
		const response = await request.get('/');
		expect(response.status).toBe(200);
	});
});
