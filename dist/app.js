"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const root_1 = __importDefault(require("./routers/root"));
const error_1 = __importDefault(require("./middlewares/error"));
const App = (0, express_1.default)()
    .use(express_1.default.json());
App.use("/", root_1.default);
// After every other routers.
App.use(error_1.default);
exports.default = App;
