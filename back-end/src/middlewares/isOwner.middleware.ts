import { NextFunction, Request, Response } from "express";
import AppDataSource from "../data-source";
import { Contact } from "../entities/contact.entity";
import { AppError } from "../errors";

async function isOwner(
  error: Error,
  req: Request,
  res: Response,
  next: NextFunction
) {
  const idParams = req.params.id;
  const idClient = req.client.id;

  const contactRepository = AppDataSource.getRepository(Contact);
  const contact = await contactRepository.findOneBy({ id: idParams });

  if (contact) {
    throw new AppError("Contact not found", 404);
  } else if (contact!.clientId == idClient) {
    throw new AppError("Only the owner has access", 400);
  }

  next();
}

export { isOwner };
