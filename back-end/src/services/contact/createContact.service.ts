import AppDataSource from "../../data-source";
import { Contact } from "../../entities/contact.entity";
import { AppError } from "../../errors";
import { IContactRequest } from "../../interfaces/contact";

const createContactService = async (
  { name, email, telephone }: IContactRequest,
  id: string
) => {
  if (!name) {
    throw new AppError("Name is a field required");
  }

  if (!email) {
    throw new AppError("Email is a field required");
  }

  if (!telephone) {
    throw new AppError("Telephone is a field required");
  }

  const contactRepository = AppDataSource.getRepository(Contact);
  const emailAlreadyExists = await contactRepository.findOneBy({
    email: email,
  });
  const telephoneAlredyExists = await contactRepository.findOneBy({
    telephone: telephone,
  });

  if (emailAlreadyExists) {
    throw new AppError("Email already exists", 400);
  } else if (telephoneAlredyExists) {
    throw new AppError("Telephone already exists", 400);
  }

  const contact = contactRepository.create({
    clientId: id,
    name,
    email,
    telephone,
    registration_date: new Date(),
  });

  await contactRepository.save(contact);

  return contact;
};

export default createContactService;
