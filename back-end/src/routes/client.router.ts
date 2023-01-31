import { Router } from "express";
import createClientController from "../controllers/client/createClient.controller";
import createSessionController from "../controllers/client/createSession.controller";

const clientRoutes = Router();

clientRoutes.post("/client", createClientController);
clientRoutes.post("/login", createSessionController);

export default clientRoutes;
