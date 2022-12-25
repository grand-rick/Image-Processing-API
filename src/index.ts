import express, {Request, Response} from 'express';
import morgan from 'morgan';
import router from './routes/router';
import dotenv from 'dotenv';

dotenv.config();

const app = express();
const port = process.env.port;

app.use(morgan('common'));
app.use(express.static('assets'));

app.use('/', router);

const rootDir = process.env.rootDir;

app.get('/image', (req: Request, res: Response) => {
    res.sendFile('assets/images/fjord.jpg', { root: rootDir });
});

app.listen(port, () => {
	console.log(`Server started at http://localhost:${port}`);
});

export default app;
