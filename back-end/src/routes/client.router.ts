import { Router } from "express";
import createClientController from "../controllers/client/createClient.controller";
import createSessionController from "../controllers/client/createSession.controller";
import deleteClientController from "../controllers/client/deleteClient.controller";
import readClientController from "../controllers/client/readClient.controller";
import updateClientController from "../controllers/client/updateClient.controller";
import ensureAuthMiddleware from "../middlewares/ensureAuth.middleware";

const clientRoutes = Router();

clientRoutes.post("/client", createClientController);
clientRoutes.get("/client/:id", ensureAuthMiddleware, readClientController);
clientRoutes.patch("/client/:id", ensureAuthMiddleware, updateClientController);
clientRoutes.delete(
  "/client/:id",
  ensureAuthMiddleware,
  deleteClientController
);

clientRoutes.post("/login", createSessionController);

export default clientRoutes;
