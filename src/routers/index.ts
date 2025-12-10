import Express from "express";

export default Express.Router().get("/", (req, res, next) => {
    res.render("index", { title: "Inizio" });
});
