import AppDataSource from "../../data-source";
import { Client } from "../../entities/client.entity";
import { AppError } from "../../errors";

const readClientService = async (id: string) => {
  const clientsRepository = AppDataSource.getRepository(Client);
  const client = await clientsRepository.findOneBy({ id: id });

  if (!client) {
    throw new AppError("client not found");
  }

  const result = {
    id: client.id,
    name: client.name,
    email: client.email,
    telephone: client.telephone,
    registration_date: client.registration_date,
  };

  return result;
};

export default readClientService;
