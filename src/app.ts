import Express from "express";

import error from "./middlewares/error";

import index from "./routers/index";
import path from "path";

const App = Express()
    .use(Express.json());

App.set("view engine", "pug").set("views", "./views");

App.use("/css", Express.static(path.join(__dirname, "../public/css"), { extensions: ["css"] }))
App.use("/", index);

// After every other routers.
App.use(error);

export default App;
