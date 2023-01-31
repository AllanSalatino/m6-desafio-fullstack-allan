import "reflect-metadata";
import express from "express";
import "express-async-errors";
import userRoutes from "./routes/client.router";
import { handleErrorMidleware } from "./middlewares/handleError.middleware";

const app = express();

app.use(express.json());
app.use("/api", userRoutes);
app.use(handleErrorMidleware);

export default app;
