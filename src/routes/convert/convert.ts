import express from 'express';
import convertImage from '../utilities/resize';

const convert = express.Router();
const inputFile = './images/fjord.jpg';
const outputFile = 'resized.jpg';

convert.get('/', (req, res) => {
    res.send('Converting in progress');
    convertImage(inputFile, outputFile);
    // const fileName = req.query.fileName;
    // const width = req.query.width;
    // const height = req.query.height;
    
    // console.log(`Filename: ${fileName}, width: ${width}, ${height}`);
});

export default convert;