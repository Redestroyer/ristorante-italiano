import Express from "express";
import Logger from "../logger";

export default Express.Router().get("/", (req, res, next) => {
    res.render("contact", { title: "Contattaci" });
}).post("/", (req, res, next) => {
    const { name, email, message } = req.body;
    Logger.info(`Contatto ricevuto da ${name} <${email}>: ${message}`);
    res.render("contact", { title: "Contattaci", success: true });
});