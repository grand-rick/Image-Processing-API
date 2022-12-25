import express, {Request, Response, NextFunction} from 'express';
import morgan from 'morgan';
import router from './routes/router';
import sharp from 'sharp';
import dotenv from 'dotenv';

dotenv.config();

const app = express();
const port = process.env.port;

app.use(morgan('common'));

app.use('/', router);

app.listen(port, () => {
	console.log(`Server started at http://localhost:${port}`);
});

export default app;
