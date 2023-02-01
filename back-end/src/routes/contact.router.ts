import { Router } from "express";
import createContactController from "../controllers/contact/createContact.controller";
import deleteContactController from "../controllers/contact/deleteContact.controller";
import readContactsController from "../controllers/contact/readContacts.controller";
import updateContactController from "../controllers/contact/updateContact.controller";
import ensureAuthMiddleware from "../middlewares/ensureAuth.middleware";
import { isOwner } from "../middlewares/isOwner.middleware";

const contactRoutes = Router();

contactRoutes.post("/contact", ensureAuthMiddleware, createContactController);
contactRoutes.get(
  "/contact",
  ensureAuthMiddleware,
  isOwner,
  readContactsController
);
contactRoutes.patch(
  "/contact/:id",
  ensureAuthMiddleware,
  isOwner,
  updateContactController
);
contactRoutes.delete(
  "/contact/:id",
  ensureAuthMiddleware,
  isOwner,
  deleteContactController
);

export default contactRoutes;
