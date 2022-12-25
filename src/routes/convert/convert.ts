import express, {Request, Response, NextFunction} from 'express';
import sharp from 'sharp';

const convert = express.Router();

const rootDir = process.env.rootDir;

const progress = (req: Request, res: Response, next: NextFunction) => {
    res.send('Conversion in progress');
    next();
}

convert.get('/', progress, async (req: Request, res: Response) => {
    const inputFileName = req.query.fileName;

    const inputFile = `${rootDir}/assets/images/${inputFileName}.jpg`
    const width = req.query.width;
    const height = req.query.height;
    const outputFile = `${rootDir}/assets/images/${inputFile}_${width}_${height}.jpg`;
    try {
        await sharp(inputFile).resize(300, 400).toFile(outputFile);
    } catch(err) {
        console.log(err);
    }
    res.sendFile(`assets/images/${outputFile}`, { root: rootDir });
});

export default convert;