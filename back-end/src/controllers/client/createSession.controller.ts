import { Request, Response } from "express";
import { IClientLogin } from "../../interfaces/client";
import createSessionService from "../../services/client/createSession.service";

const createSessionController = async (req: Request, res: Response) => {
  const data: IClientLogin = req.body;

  const token = await createSessionService(data);

  return res.status(200).json({ token: token });
};

export default createSessionController;
