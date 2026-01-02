import { FastifyInstance } from "fastify";
import FastifyPlugin from "fastify-plugin";

import FastifyFormbody from "@fastify/formbody";

export default FastifyPlugin(async function(app: FastifyInstance) {
    app.register(FastifyFormbody);
});
