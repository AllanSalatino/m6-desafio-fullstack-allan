import AppDataSource from "../../data-source";
import { Client } from "../../entities/client.entity";
import { AppError } from "../../errors";

const deleteClientService = async (id: string) => {
  const clientRepository = AppDataSource.getRepository(Client);

  const findClient = await clientRepository.findOneBy({ id });

  if (!findClient) {
    throw new AppError("Client not found", 404);
  }

  clientRepository
    .createQueryBuilder()
    .delete()
    .from(Client)
    .where("id = :id", { id: id })
    .execute();

  return "Client deleted with sucess!";
};

export default deleteClientService;
