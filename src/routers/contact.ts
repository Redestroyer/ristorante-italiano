import { FastifyInstance } from "fastify";

import { Static, Type } from "@sinclair/typebox";

export const Message = Type.Object({
    name: Type.String(),
    email: Type.String(),
    message: Type.String()
});
export type Message = Static<typeof Message>;
const PostOpts = {
    schema: {
        body: Message
    }
};

export default async function(app: FastifyInstance) {
    app.get("/", async (request, reply) => {
        return reply.viewAsync("contact", { title: "Contattaci" });
    }).post<{ Body: Message }>("/", PostOpts, async (request, reply) => {
        const { name, email, message } = request.body;
        //app.log.info(`Received message from ${name} (${email}): ${message}`);
        return reply.viewAsync("contact", { title: "Contattaci", success: true });
    });
};
