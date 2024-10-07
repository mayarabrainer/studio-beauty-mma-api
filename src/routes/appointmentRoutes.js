import express from "express";
import AppointmentController from "../controllers/AppointmentController.js";


const routes = express.Router();

routes.get("/agendamentos", AppointmentController.listarAppointments);
routes.get("/agendamento/:id", AppointmentController.listarAppointmentPorId);
routes.post("/agendamento", AppointmentController.cadastrarAppointment);
routes.put("/agendamento/:id", AppointmentController.atualizarappointment);
routes.delete("/agendamento/:id", AppointmentController.excluirAppointment);

export default routes;