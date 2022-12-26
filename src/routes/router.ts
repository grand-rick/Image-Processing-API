import express from 'express';
import convert from './convert/convert';

const router = express.Router();

router.get('/', (req, res) => {
	res.send('Welcome, this is the homepage');
});
router.use('/convert', convert);

export default router;
