import app from '../index';
import supertest from 'supertest';

const request = supertest(app);

describe('Test endpoint responses', () => {
	it('gets the birds endpoint', async () => {
		const response = await request.get('/birds');
		expect(response.status).toBe(200);
	});
});
