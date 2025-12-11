"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const error_1 = __importDefault(require("./middlewares/error"));
const index_1 = __importDefault(require("./routers/index"));
const path_1 = __importDefault(require("path"));
const App = (0, express_1.default)()
    .use(express_1.default.json());
App.set("view engine", "pug").set("views", "./views");
App.use("/css", express_1.default.static(path_1.default.join(__dirname, "../public/css"), { extensions: ["css"] }));
App.use("/", index_1.default);
// After every other routers.
App.use(error_1.default);
exports.default = App;
