import AppDataSource from "../../data-source";
import { hash } from "bcryptjs";
import { Client } from "../../entities/client.entity";
import { AppError } from "../../errors";
import { IClientRequest } from "../../interfaces/client";

const createClientService = async ({
  name,
  email,
  password,
  telephone,
}: IClientRequest) => {
  if (!name) {
    throw new AppError("name is a field required");
  }

  if (!email) {
    throw new AppError("email is a field required");
  }

  if (!telephone) {
    throw new AppError("telephone is a field required");
  }

  if (!password) {
    throw new AppError("password is a field required");
  }

  const clientRepository = AppDataSource.getRepository(Client);
  const emailAlreadyExists = await clientRepository.findOneBy({ email: email });

  if (emailAlreadyExists) {
    throw new AppError("Email already exists", 400);
  }

  const hashedPassword = await hash(password, 10);

  const client = clientRepository.create({
    name,
    email,
    password: hashedPassword,
    telephone,
    registration_date: new Date(),
  });

  await clientRepository.save(client);

  return client;
};

export default createClientService;
