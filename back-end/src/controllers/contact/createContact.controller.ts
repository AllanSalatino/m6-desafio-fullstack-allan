import { instanceToPlain } from "class-transformer";
import { Request, Response } from "express";
import { IContactRequest } from "../../interfaces/contact";
import createContactService from "../../services/contact/createContact.service";

const createContactController = async (req: Request, res: Response) => {
  const contact: IContactRequest = await req.body;
  const idClient = req.client.id;

  const createdClient = await createContactService(contact, idClient);

  return res.status(201).json(instanceToPlain(createdClient));
};

export default createContactController;
