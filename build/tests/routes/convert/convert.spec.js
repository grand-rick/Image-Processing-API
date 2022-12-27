"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var convert_1 = __importDefault(require("../../../routes/convert/convert"));
var fs_1 = __importDefault(require("fs"));
var supertest_1 = __importDefault(require("supertest"));
var request = (0, supertest_1.default)(convert_1.default);
describe('Testing the convert endpoint', function () {
    it('should handle the promise rejection', function () {
        request
            .get('/')
            .then(function (result) {
            console.log(result);
        })
            .catch(function (error) {
            expect(error).toEqual(new TypeError("Cannot read properties of undefined (reading 'fileName')"));
        });
    });
    it('expects the convert endpoint to respond with status code 200', function () {
        request
            .get('/?fileName=fjord&width=100&height=500')
            .then(function (res) {
            expect(res.status).toEqual(200);
        })
            .catch(function (error) {
            console.log(error);
        });
    });
    it('throws an error when an image does not exist', function () {
        var inputFile = 'Nothing';
        expect(fs_1.default.existsSync(inputFile)).not.toBe(true);
    });
});
