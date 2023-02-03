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
    throw new AppError("Name is a field required");
  }

  if (!email) {
    throw new AppError("Email is a field required");
  }

  if (!telephone) {
    throw new AppError("Telephone is a field required");
  }

  if (!password) {
    throw new AppError("Password is a field required");
  }

  const clientRepository = AppDataSource.getRepository(Client);
  const emailAlreadyExists = await clientRepository.findOneBy({ email: email });
  const telephoneAlreadyExists = await clientRepository.findOneBy({
    telephone: telephone,
  });

  if (emailAlreadyExists) {
    throw new AppError("Email already exists");
  }
  if (telephoneAlreadyExists) {
    throw new AppError("Telephone already exists");
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
