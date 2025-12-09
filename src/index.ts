import App from "./app";
import Config from "./config";

App.listen(Config.port, () => {
    console.log(`Listening on port ${Config.port}, ${Config.node_env} enviroment.`);
})
