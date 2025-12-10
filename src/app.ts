import Express from "express";

import root from "./routers";
import error from "./middlewares/error";

const App = Express()
    .use(Express.json());

App.set("view engine", "pug").set("views", "./views");

App.use("/", root);

// After every other routers.
App.use(error);

export default App;
