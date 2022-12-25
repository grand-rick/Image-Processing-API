"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var resize_1 = __importDefault(require("../utilities/resize"));
var convert = express_1.default.Router();
var inputFile = './images/fjord.jpg';
var outputFile = 'resized.jpg';
convert.get('/', function (req, res) {
    res.send('Converting in progress');
    (0, resize_1.default)(inputFile, outputFile);
    // const fileName = req.query.fileName;
    // const width = req.query.width;
    // const height = req.query.height;
    // console.log(`Filename: ${fileName}, width: ${width}, ${height}`);
});
exports.default = convert;
