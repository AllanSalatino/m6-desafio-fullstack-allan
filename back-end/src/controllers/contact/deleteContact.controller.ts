import { Request, Response } from "express";
import deleteContactService from "../../services/contact/deleteContact.service";

const deleteContactController = async (req: Request, res: Response) => {
  const id: string = req.params.id;

  await deleteContactService(id);

  return res.status(202).json({ message: "Successfully Deleted" });
};

export default deleteContactController;
