import { Request, Response } from "express";
import readContactsService from "../../services/contact/readContacts.service";

const readContactsController = async (req: Request, res: Response) => {
  const id = req.client.id;
  const readedContacts = await readContactsService(id);

  return res.status(200).json(readedContacts);
};

export default readContactsController;
