import Express from "express";
import { readFileSync } from "fs";
import path from "path";

export type FoodItem = {
    name: string;
    price: number;
    image: string;
};

export default Express.Router().get("/", (req, res, next) => {
    const content = readFileSync(path.join(process.cwd(), "/public/json/food.json"));
    const food: FoodItem[] = JSON.parse(content.toString());
    res.render("menu", { title: "Menu", food });
});
