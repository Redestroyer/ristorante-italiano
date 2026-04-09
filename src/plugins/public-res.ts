import { FastifyInstance, FastifyReply, FastifyRequest } from "fastify";
import FastifyPlugin from "fastify-plugin";

import FastifyStatic from "@fastify/static";

import path from "path";

function singleFileServe(filename: string, rootpath?: string) {
    return async (request: FastifyRequest, reply: FastifyReply) => {
        return reply.sendFile(filename, rootpath);
    };
}

export default FastifyPlugin(async function(app: FastifyInstance) {
    const publicDirsExtensions = {
        "css": ["css"],
        "js": ["js"],
        "images": ["png", "jpg", "jpeg", "gif", "svg"],
        "fonts": ["woff", "woff2", "ttf", "otf", "eot"],
        "json": ["json"]
    }
    let first = true;
    for (const [dir, extensions] of Object.entries(publicDirsExtensions)) {
        app.register(FastifyStatic, {
            root: path.join(process.cwd(), `public/${dir}`),
            prefix: `/${dir}/`,
            extensions: extensions,
            decorateReply: first,
        });
        first = false;
    }

    app.get("/favicon.ico", singleFileServe("favicon.ico", path.join(process.cwd(), "public")));
    app.get("/css/bootstrap", singleFileServe("node_modules/bootstrap/dist/css/bootstrap.min.css", process.cwd()));
    app.get("/js/bootstrap", singleFileServe("node_modules/bootstrap/dist/js/bootstrap.bundle.min.js", process.cwd()));
    app.get("/css/bootstrap-icons", singleFileServe("node_modules/bootstrap-icons/font/bootstrap-icons.min.css", process.cwd()));
});
