import express from 'express';
import morgan from 'morgan';

const app = express();
const port = 3000;

app.use(morgan('common'));

app.get('/', (req, res) => {
	res.send('WELCOME! This is the homepage');
});

app.get('/birds', (req, res) => {
	res.send('This is the birds page');
});

app.get('/Fish', (req, res) => {
	res.send('This is the Fishyyyyy page');
});

app.listen(port, () => {
	console.log(`Server started at http://localhost:${port}`);
});

export default app;
