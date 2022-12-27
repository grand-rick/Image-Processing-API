import express from 'express';
import morgan from 'morgan';
import router from './routes/router';

const app = express();
const port = 3000;

app.use(morgan('common'));

app.use('/', router);

app.listen(port, () => {
	console.log(`Server started at http://localhost:${port}`);
});

const rootDir = process.cwd();

export default app;
export {rootDir};
