import AppDataSource from "../../data-source";
import { Client } from "../../entities/client.entity";
import { AppError } from "../../errors";

const updateClientService = async (data: any, id: string) => {
  const clientRepository = AppDataSource.getRepository(Client);
  const clientExist = await clientRepository.findOneBy({ id: id });

  if (!clientExist) {
    throw new AppError("Client not found");
  }

  if (data.id) {
    throw new AppError("id is read only");
  }

  await clientRepository.update(id, data);
  const client = await clientRepository.findOneBy({ id: id });

  const result = {
    id: client!.id,
    name: client!.name,
    email: client!.email,
    telephone: client!.telephone,
    registration_date: client!.registration_date,
  };

  return result;
};

export default updateClientService;
