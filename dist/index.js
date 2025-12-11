"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const config_1 = __importDefault(require("./config"));
const app_1 = __importDefault(require("./app"));
const logger_1 = __importDefault(require("./logger"));
// For some reason, Morgan logging causes stack fucking overflow. Whatever, will try finding another way, I guess.
//App.use(MorganMiddleware);
app_1.default.listen(config_1.default.port, () => {
    logger_1.default.debug(`Listening on port ${config_1.default.port}, ${config_1.default.node_env} enviroment.`);
});
