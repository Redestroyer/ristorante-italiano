import Express from "express";

import BodyParser from "body-parser";
import error from "./middlewares/error";
//import MorganMiddleware from "./middlewares/morgan";

import index from "./routers/index";
import path from "path";

const App = Express()
    .use(Express.json())
    .use(BodyParser.urlencoded({ extended: true }))
    //.use(MorganMiddleware) // Morgan still causes stack overflow. Will find a fix later.
    ;

App.set("view engine", "pug").set("views", "./views");

App.get("/favicon.ico", (req, res, next) => {
    res.sendFile(path.join(process.cwd(), "/public/favicon.ico"));
});
App.use("/css", Express.static(path.join(process.cwd(), "/public/css"), { extensions: ["css"] }))
App.use("/js", Express.static(path.join(process.cwd(), "/public/js"), { extensions: ["js"] }))
App.use("/images", Express.static(path.join(process.cwd(), "/public/images"), { extensions: ["png", "jpg", "jpeg", "gif", "svg"] }));
App.use("/", index);

// After every other routers.
App.use(error);

export default App;
