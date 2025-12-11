import Config from "./config";

import App from "./app";

import Logger from "./logger";
import MorganMiddleware from "./middlewares/morgan";

// For some reason, Morgan logging causes stack fucking overflow. Whatever, will try finding another way, I guess.
//App.use(MorganMiddleware);

App.listen(Config.port, () => {
    Logger.debug(`Listening on port ${Config.port}, ${Config.node_env} enviroment.`);
})
