import PromptSync from "prompt-sync";
import Fastify from "fastify";

import Plugins from "./plugins";

import Routers from "./routers";

import path from "path";

const App = Fastify({ logger: true });

App.register(Plugins, { view: { root: path.join(process.cwd(), "/views") } });

App.register(Routers);

export default App;