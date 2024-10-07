import mongoose from "mongoose";

const appointmentSchema = new mongoose.Schema({
    id: { type: mongoose.Schema.Types.ObjectId },
    nome: { type: String, required: true },
    servico: { type: String, required: true },
    celular: { type: String },
    data: { type: String},
    horario: { type: String},
}, { versionKey: false });

const appointment = mongoose.model("agendamentos", appointmentSchema);

export { appointment, appointmentSchema }