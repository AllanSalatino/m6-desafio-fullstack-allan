import { Router } from "express";
import createClientController from "../controllers/client/createClient.controller";

const userRoutes = Router();

userRoutes.post("/client", createClientController);

export default userRoutes;
