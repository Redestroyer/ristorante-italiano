import Config from "./config";

import Winston from "winston"

export const Levels = {
    error: 0,
    warn: 1,
    info: 2,
    http: 3,
    debug: 4
}
export const Colours = {
    error: "red",
    warn: "yellow",
    info: "white",
    http: "magenta",
    debug: "green"
}
export const Format = Winston.format.combine(
    Winston.format.timestamp({ format: 'YYYY-MM-DD HH:mm:ss:ms' }),
    Winston.format.colorize({ all: true }),
    Winston.format.printf(
        (info) => `${info["timestamp"]} ${info.level}: ${info.message}`,
    ),
);
export const Transports = [
    new Winston.transports.Console(),
    new Winston.transports.File({
        filename: "logs/error.log",
        level: "error"
    }),
    new Winston.transports.File({
        filename: "logs/eall.log"
    })
];

const Logger = Winston.createLogger({
    level: Config.node_env === "development" ? "debug" : "warn",
    levels: Levels,
    format: Format,
    transports: Transports
});
export default Logger;
