import express, { Request, Response } from 'express';
import resizeImage from '../utilities/resize';
import fs from 'fs';
import dotenv from 'dotenv';

dotenv.config();

const convert = express.Router();

const rootDir = process.env.rootDir;

convert.get('/', async (req: Request, res: Response) => {
	const inputFileName = (req.query.fileName as unknown) as string;
	const width = (req.query.width as unknown) as string;
	const height = (req.query.height as unknown) as string;

	const inputFile = `${rootDir}/assets/images/${inputFileName}.jpg`;
	const outputFileName = `${inputFileName}_${width}_${height}`;
	const outputFile = `${rootDir}/assets/thumbs/${outputFileName}.jpg`;

	if (fs.existsSync(inputFile)) {
		resizeImage(inputFile, width, height, outputFile);
		res.sendFile(`${outputFile}`);
	} else {
		res.send('Image does not exist');
	}
});

export default convert;
