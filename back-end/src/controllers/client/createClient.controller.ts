import { instanceToPlain } from "class-transformer";
import { Request, Response } from "express";
import { IClientRequest } from "../../interfaces/client";
import createClientService from "../../services/client/createClient.service";

const createUserController = async (req: Request, res: Response) => {
  const client: IClientRequest = req.body;
  const createdUser = await createClientService(client);
  return res.status(201).json(instanceToPlain(createdUser));
};

export default createUserController;
