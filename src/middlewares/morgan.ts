import Config from "../config";

import Morgan from "morgan";

import Logger from "../logger";

const Stream: Morgan.StreamOptions = {
    write: Logger.http
};
function Skip(): boolean {
    return Config.node_env !== "development";
}

const MorganMiddleware = Morgan(":method :url :status :res[content-length] - :response-time ms", {
    stream: Stream,
    skip: Skip
});
export default MorganMiddleware;
