import { FastifyInstance } from "fastify";
import FastifyPlugin from "fastify-plugin";

import fs from "node:fs/promises";
import path from "node:path";

type Options = {
    [name: string]: any;
}
export default FastifyPlugin(async function(app: FastifyInstance, options: Options) {
    const directory = await fs.readdir(__dirname);
    
    for await (const file of directory) {
        if (file === "index.js" || !file.endsWith(".js")) continue;
        const filePath = path.join(__dirname, file);
        const plugin: (app: FastifyInstance, options: any) => Promise<void> = await import(filePath).then(mod => mod.default.default);
        const name = `/${path.basename(file, ".js")}`;
        console.log(`Registering plugin ${name}`);
        app.register(plugin, options[name] || {});
    }
});
