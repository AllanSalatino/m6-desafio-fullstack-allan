import { Request, Response } from "express";
import readClientService from "../../services/client/readClient.service";

const readClientController = async (req: Request, res: Response) => {
  const { id } = req.params;
  const client = await readClientService(id);

  return res.status(200).json(client);
};

export default readClientController;
