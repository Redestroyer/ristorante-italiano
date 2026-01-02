import { FastifyInstance } from "fastify";

import fs from "node:fs/promises"
import path from "node:path";

async function Routers(app: FastifyInstance) {
    app.get("/", async (request, reply) => {
        return reply.viewAsync("index", { title: "Inizio" });
    });
    
    const directory = await fs.readdir(__dirname);

    for await (const file of directory) {
        if (file === "index.js" || !file.endsWith(".js")) continue;
        const filePath = path.join(__dirname, file);
        const router: (app: FastifyInstance, options: any) => Promise<void> = await import(filePath).then(mod => mod.default.default);
        const prefix = `/${file.slice(0, -3)}`;
        console.log(`Registering router for ${prefix}`);
        app.register(router, { prefix });
    }
}

export default Routers;
