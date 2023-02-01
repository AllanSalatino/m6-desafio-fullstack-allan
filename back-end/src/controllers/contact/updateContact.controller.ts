import { Request, Response } from "express";
import updateContactService from "../../services/contact/updateContact.service";

const updateContactController = async (req: Request, res: Response) => {
  const id = req.params.id;
  const data = req.body;
  const updated = await updateContactService(id, data);
  return res.status(200).json(updated);
};

export default updateContactController;
