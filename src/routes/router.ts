import express, {Request, Response} from 'express';
import convert from './convert/convert';

const router = express.Router();

router.get('/', (req: Request, res: Response) => {
	res.send('Welcome, this is the homepage');
});
router.use('/convert', convert);

export default router;
