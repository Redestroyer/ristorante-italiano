import Express from "express";
import { readFileSync } from "fs";

type Rating = {
    author: string;
    occupation: string;
    rating: number;
    quote: string;
}

export default Express.Router().get("/", (req, res, next) => {
    const content = readFileSync(process.cwd() + "/public/json/ratings.json");
    const ratings: Rating[] = JSON.parse(content.toString());
    res.render("about", { title: "Chi Siamo", ratings });
});
