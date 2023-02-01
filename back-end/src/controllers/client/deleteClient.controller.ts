import { Request, Response } from "express";
import deleteClientService from "../../services/client/deleteClient.service";

const deleteClientController = async (req: Request, res: Response) => {
  const id: string = req.params.id;
  const deleteClient = await deleteClientService(id);
  return res.status(204).json(deleteClient);
};

export default deleteClientController;
