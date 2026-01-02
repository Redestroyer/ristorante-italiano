import { FastifyInstance } from "fastify";

import path from "path";
import { importJSON } from "../json";

type Rating = {
    author: string;
    occupation: string;
    rating: number;
    quote: string;
}

export default async function(app: FastifyInstance) {
    app.get("/", async (request, reply) => {
        const ratings: Rating[] = await importJSON(path.join(process.cwd(), "public/json/ratings.json"));

        return reply.viewAsync("about", { title: "Chi Siamo", ratings });
    });
};