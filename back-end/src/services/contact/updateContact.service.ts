import AppDataSource from "../../data-source";
import { Contact } from "../../entities/contact.entity";
import { AppError } from "../../errors";

const updateContactService = async (id: string, data: any) => {
  const contactRepository = AppDataSource.getRepository(Contact);

  if (data.id) {
    throw new AppError("id is read only");
  }

  await contactRepository.update(id, data);

  const contactUpdated = await contactRepository.findOneBy({ id: id });

  return contactUpdated;
};

export default updateContactService;
