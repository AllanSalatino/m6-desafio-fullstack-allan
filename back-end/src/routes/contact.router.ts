import { Router } from "express";
import createContactController from "../controllers/contact/createContact.controller";
import ensureAuthMiddleware from "../middlewares/ensureAuth.middleware";

const contactRoutes = Router();

contactRoutes.post("/contact", ensureAuthMiddleware, createContactController);

export default contactRoutes;
