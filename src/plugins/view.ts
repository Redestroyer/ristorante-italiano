import { FastifyInstance, FastifyPluginCallback } from "fastify";
import FastifyPlugin from "fastify-plugin";

import FastifyView from "@fastify/view";

export type Options = {
    root?: string;
}
async function ViewPlugin(app: FastifyInstance, options: Options) {
    app.register(FastifyView, {
        engine: {
            pug: require("pug"),
        },
        root: options.root || "views",
        viewExt: "pug"
    });
}

export default FastifyPlugin(ViewPlugin);