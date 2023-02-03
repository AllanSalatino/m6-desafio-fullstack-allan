import AppDataSource from "../../data-source";
import { Contact } from "../../entities/contact.entity";

const readContactsService = async (id: string) => {
  const contactRepository = AppDataSource.getRepository(Contact);

  const readed = await contactRepository.findBy({ clientId: id });

  return readed;
};

export default readContactsService;
