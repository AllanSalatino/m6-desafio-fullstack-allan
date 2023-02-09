import { Request, Response } from "express";
import { IClientLogin } from "../../interfaces/client";
import createSessionService from "../../services/client/createSession.service";

const createSessionController = async (req: Request, res: Response) => {
  const data: IClientLogin = req.body;

  const tokenid = await createSessionService(data);

  return res.status(200).json({ token: tokenid[0], id: tokenid[1] });
};

export default createSessionController;
