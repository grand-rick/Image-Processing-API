import express, {Request, Response} from 'express';
import sharp from 'sharp';
import dotenv from 'dotenv';

dotenv.config();

const convert = express.Router();

const rootDir = process.env.rootDir;

convert.get('/', async (req: Request, res: Response) => {
    const inputFileName = (req.query.fileName as unknown) as string;
    let width = (req.query.width as unknown) as string;
    let height = (req.query.height as unknown) as string;

    const outputFileName = `${inputFileName}_${width}_${height}`;

    const inputFile = `${rootDir}/assets/images/${inputFileName}.jpg`;
    const outputFile = `${rootDir}/assets/thumbs/${outputFileName}.jpg`;

    const newWidth = parseInt(width);
    const newHeight = parseInt(height); 
    try {
        const fileData = await sharp(inputFile).resize(newWidth, newHeight).toFile(outputFile);
    } catch(err) {
        console.log(err);
    }
    res.sendFile(`${outputFile}`);
});

export default convert;