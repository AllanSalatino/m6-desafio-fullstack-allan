import { compare } from "bcryptjs";
import jwt from "jsonwebtoken";
import "dotenv/config";
import AppDataSource from "../../data-source";
import { Client } from "../../entities/client.entity";
import { IClientLogin } from "../../interfaces/client";
import { AppError } from "../../errors";

const createSessionService = async ({
  email,
  password,
}: IClientLogin): Promise<string> => {
  const clientRepository = AppDataSource.getRepository(Client);

  const client = await clientRepository.findOneBy({
    email: email,
  });

  if (!client) {
    throw new AppError("Invalid email or password", 403);
  }

  const passwordMatch = await compare(password, client.password as string);

  if (!passwordMatch) {
    throw new AppError("Invalid email or password", 403);
  }

  const token = jwt.sign(
    {
      id: client.id,
    },
    process.env.SECRET_KEY as string,
    {
      expiresIn: "24h",
      subject: client.id,
    }
  );

  return token;
};

export default createSessionService;
