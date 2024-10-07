import express from "express";
import cors from "cors";
import connectNaDatabase from "./config/dbConnect.js";
import routes from "./routes/index.js";

const conexao = await connectNaDatabase();

conexao.on("erro", (erro) => {
    console.error("erro de conexão", erro);
}); 

conexao.once("open", () => {
    console.log("Conexao com o banco de dados ok");
});

const app = express();

// Apply CORS before defining routes
app.use(cors({
    origin: 'http://localhost:5173' // Allow requests from this origin
}));

// Define routes after CORS middleware
routes(app);

export default app;
