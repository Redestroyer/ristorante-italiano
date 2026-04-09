import { FastifyInstance } from "fastify";

import path from "path";
import { importJSON } from "../json";

type Food = {
    name: string;
    price: number;
    image: string;
}

export default async function(app: FastifyInstance) {
    app.get("/", async (request, reply) => {
        const foods: Food[] = await importJSON(path.join(process.cwd(), "public/json/foods.json"));

        return reply.viewAsync("menu", { title: "Menu", foods });
    });
};