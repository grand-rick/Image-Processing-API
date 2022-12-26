"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var resize_1 = __importDefault(require("../../../routes/utilities/resize"));
describe('Testing resize function', function () {
    it('Tests if the resize function works, by checking if it returns a truthy value', function () {
        expect((0, resize_1.default)('/home/grand-rick001/Coding/Fullstack-js/Image-Processing-API/assets/images/fjord.jpg', '500', '500', '/home/grand-rick001/Coding/Fullstack-js/Image-Processing-API/assets/thumbs/fjord_500_500.jpg'));
    });
});
