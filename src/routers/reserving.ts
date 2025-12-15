import Express from "express";
import Logger from "../logger";

export default Express.Router().get("/", (req, res, next) => {
    res.render("reserving", { title: "Prenotazioni" });
}).post("/", (req, res, next) => {
    const { name, email, phone, date, time, guests } = req.body;
    Logger.info(`Prenotazione ricevuta da ${name} <${email}> (${phone}) per il ${date} alle ${time} per ${guests} ospiti.`);
    res.render("reserving", { title: "Prenotazioni", success: true });
});
