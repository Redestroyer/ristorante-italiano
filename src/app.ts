import Express from "express";

import root from "./routers/root";
import error from "./middlewares/error";

const App = Express()
    .use(Express.json());

App.use("/", root);

// After every other routers.
App.use(error);

export default App;
