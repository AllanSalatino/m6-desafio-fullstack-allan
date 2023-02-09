import "reflect-metadata";
import express from "express";
import "express-async-errors";
import cors from "cors";
import { handleErrorMidleware } from "./middlewares/handleError.middleware";
import clientRoutes from "./routes/client.router";
import contactRoutes from "./routes/contact.router";

const app = express();

app.use(cors());

app.use(express.json());

app.use("/api", clientRoutes);
app.use("/api", contactRoutes);
app.use(handleErrorMidleware);

export default app;
