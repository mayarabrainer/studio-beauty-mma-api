import express from "express";
import appointment from "./appointmentRoutes.js";


const routes = (app) => {
   app.route("/").get((req, res) => res.status(200).send("está ok"));

   app.use(express.json(), appointment);
};

export default routes;
