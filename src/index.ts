import Config from "./config";

import App from "./app";

import Logger from "./logger";

App.listen(Config.port, (err) => {
    if (err) {
        Logger.error(`Unable to start server: ${err}`);
        process.exit(1);
    }
    Logger.info(`Listening on port ${Config.port}, ${Config.node_env} enviroment.`);
});
