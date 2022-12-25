import sharp from 'sharp';

const inputFile = '../convert/images/fjord.jpg';
const outputFile = 'resized.jpg';

const convertImage = async (inputFile: string, outputFile: string) => {
    try {
        const change = await sharp(inputFile).resize(300, 400).toFile(outputFile);
        console.log(change);
    } catch(err) {
        console.log(err);
    }
}

export default convertImage;