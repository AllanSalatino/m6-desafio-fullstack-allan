import { Request, Response } from "express";
import updateClientService from "../../services/client/updateClient.service";

const updateClientController = async (req: Request, res: Response) => {
  const data = req.body;
  const { id } = req.params;
  const updated = await updateClientService(data, id);

  return res.status(200).json(updated);
};

export default updateClientController;
