import { FastifyInstance } from "fastify";

import { Static, Type } from "@sinclair/typebox";

export const Reservation = Type.Object({
    name: Type.String(),
    email: Type.String(),
    phone: Type.String(),
    date: Type.String(),
    time: Type.String(),
    guests: Type.Number()
});
export type Reservation = Static<typeof Reservation>;
const PostOpts = {
    schema: {
        body: Reservation
    }
};

export default async function(app: FastifyInstance) {
    app.get("/", async (request, reply) => {
        return reply.viewAsync("reserving", { title: "Prenotazioni" });
    }).post<{ Body: Reservation }>("/", PostOpts, async (request, reply) => {
        const { name, email, phone, date, time, guests } = request.body;
        app.log.info(`Received reservation from ${name} (${email}, ${phone}) for ${guests} guests on ${date} at ${time}`);
        return reply.viewAsync("reserving", { title: "Prenotazioni", success: true });
    });
};
