import AppDataSource from "../../data-source";
import { Contact } from "../../entities/contact.entity";

const deleteContactService = async (id: string) => {
  const contactRepository = AppDataSource.getRepository(Contact);

  const contactDeleted = await contactRepository
    .createQueryBuilder()
    .delete()
    .from(Contact)
    .where("id = :id", { id: id })
    .execute();
  return contactDeleted;
};

export default deleteContactService;
