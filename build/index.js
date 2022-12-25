"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var morgan_1 = __importDefault(require("morgan"));
var app = (0, express_1.default)();
var port = 3000;
app.use((0, morgan_1.default)('common'));
app.get('/', function (req, res) {
    res.send('WELCOME! This is the homepage');
});
app.get('/birds', function (req, res) {
    res.send('This is the birds page');
});
app.get('/Fish', function (req, res) {
    res.send('This is the Fishyyyyy page');
});
app.listen(port, function () {
    console.log("Server started at http://localhost:".concat(port));
});
exports.default = app;
