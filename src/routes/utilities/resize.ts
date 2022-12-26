import sharp from 'sharp';

const resizeImage = async (inputFile: string, width: string, height: string, outputFile: string) => {
    try {
        const newWidth = parseInt(width);
        const newHeight = parseInt(height); 

        const fileData = await sharp(inputFile).resize(newWidth, newHeight).toFile(outputFile);
        return fileData;
    } catch(err) {
        console.log(err);
    }
}

export default resizeImage;