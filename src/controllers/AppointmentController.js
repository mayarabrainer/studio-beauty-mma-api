import { appointment } from "../models/Appointment.js";

class AppointmentController {

    static async listarAppointments (req, res) {

        try{
            const listarAppointments = await appointment.find({});
            res.status(200).json(listarAppointments);
        } catch (erro) {
            res.status(500).json({message : `${erro.message} - falha na requisição`});
        }
    };

    static async listarAppointmentPorId (req, res) {

        try{
            const id = req.params.id;
            const appointmentEncontrado = await appointment.findById(id);
            res.status(200).json(appointmentEncontrado);
        } catch (erro) {
            res.status(500).json({message : `${erro.message} - falha na requisição do agendamento`});
        }
    };

    static async cadastrarAppointment (req, res) {

        const novoAppointment = req.body;

        try {
            const listarAppointments = await appointment.find({});
            if (listarAppointments && listarAppointments.length > 0) {
                const exists = listarAppointments.find(appointment => appointment.horario === novoAppointment.horario && appointment.data === novoAppointment.data);
                if (!exists) {
                    const appointmentCriado = await appointment.create(novoAppointment)
                    res.status(201).json({message: "Criado com sucesso", appointment: appointmentCriado });
                } else {
                    const message = "Já existe um agendamento nesse horario, selecione outro.";
                    console.error(message);
                    res.status(400).json({ message });
                }
            } else {
                const appointmentCriado = await appointment.create(novoAppointment)
                res.status(201).json({message: "Criado com sucesso", appointment: appointmentCriado });
            }
        } catch (erro) {
            res.status(500).json({message: `${erro.message} - falha ao cadastrar agendamento`});
        }
    };

    static async atualizarappointment (req, res) {

        try{
            const id = req.params.id
            await appointment.findByIdAndUpdate(id, req.body);
            res.status(200).json({message: "Appointment atualizado"});
        } catch (erro) {
            res.status(500).json({message : `${erro.message} - falha na atualizacão`});
        }
    };

    static async excluirAppointment (req, res) {

        try{
            const id = req.params.id
            await appointment.findByIdAndDelete(id);
            res.status(200).json({message: "Agendamento excluido"});
        } catch (erro) {
            res.status(500).json({message : `${erro.message} - falha ao deletar o agendamento`});
        }
    };
};


export default AppointmentController;