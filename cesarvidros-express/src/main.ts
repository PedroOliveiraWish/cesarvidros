import express from "express";
import cors from "cors";

import { connect_to_database } from "./database";
import serviceRoutes from './routes/servicoRoutes'
import categoriaRoutes from './routes/categoriaRoutes'
import subcategoriaRouter from './routes/subcategoriaRoutes'

connect_to_database()

const app = express();
const port = 3000;

app.use(cors())
app.use(express.json());

app.use('/api/servicos', serviceRoutes);
app.use('/api/categorias', categoriaRoutes);
app.use('/api/sub-categorias', subcategoriaRouter);

app.listen(port, () => {
    console.log(`Servidor rodando em http://localhost:${port}`)
})