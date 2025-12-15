import Express from "express";
import menu from './menu';
import about from './about';
import reserving from "./reserving";
import contact from "./contact";

export default Express.Router().get("/", (req, res, next) => {
    res.render("index", { title: "Inizio" });
}).use("/about", about).use("/menu", menu).use("/reserving", reserving).use("/contact", contact);