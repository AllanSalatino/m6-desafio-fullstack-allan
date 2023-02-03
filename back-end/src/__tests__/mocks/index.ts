import { IContactRequest } from "../../interfaces/contact";
import { IClientRequest, IClientLogin } from "../../interfaces/client";

// ------------------------------------------------
// MOCKS DE CLIENTE

// Criar com sucesso
export const mockedClient: IClientRequest = {
  name: "Allan da Mota Salatino",
  email: "allan.smota@gmail.com",
  telephone: "11933895916",
  password: "1234",
};

export const mockedClient2: IClientRequest = {
  name: "Jorge da Mota Salatino",
  email: "jorge.smota@gmail.com",
  telephone: "11933895918",
  password: "1234",
};

export const mockedClient3: IClientRequest = {
  name: "João da Mota Salatino",
  email: "joao.smota@gmail.com",
  telephone: "11933895910",
  password: "1234",
};

export const mockedClientErrorTelephoneExist: IClientRequest = {
  name: "Allan da Mota Salatino",
  email: "allan1.smota@gmail.com",
  telephone: "11933895916",
  password: "1234",
};

// Logar com sucesso
export const mockedLogin: IClientLogin = {
  email: "allan.smota@gmail.com",
  password: "1234",
};

export const mockedLogin2: IClientLogin = {
  email: "jorge.smota@gmail.com",
  password: "1234",
};

export const mockedLogin3: IClientLogin = {
  email: "joao.smota@gmail.com",
  password: "1234",
};

// Nome é um campo obrigatorio
export const mockedClientErrorName: any = {
  email: "allan.smota@gmail.com",
  telephone: "11933895916",
  password: "1234",
};

// Email é um campo obrigatorio
export const mockedClientErrorEmail: any = {
  name: "Allan da Mota Salatino",
  telephone: "11933895916",
  password: "1234",
};

// Telefone é um campo obrigatorio
export const mockedClientErrorTelephone: any = {
  name: "Allan da Mota Salatino",
  email: "allan.smota@gmail.com",
  password: "1234",
};

// Senha é um campo obrigatorio
export const mockedClientErrorPassword: any = {
  name: "Allan da Mota Salatino",
  email: "allan.smota@gmail.com",
  telephone: "11933895916",
};

// Senha é um campo obrigatorio
export const mockedLoginErrorFieldPassword: any = {
  email: "allan.smota@gmail.com",
};

// Email é um campo obrigatorio
export const mockedLoginErrorFieldEmail: any = {
  password: "1234",
};

// Email não encontrado
export const mockedLoginErrorEmailNotFound: any = {
  email: "nao.existe@gmail.com",
  password: "1234",
};

// Senha errada
export const mokedLoginErrorPassword: any = {
  email: "allan.smota@gmail.com",
  password: "sehaerrada",
};

// Nome atualizado com sucesso
export const mockedClientPatchName: any = {
  name: "nome atualizado",
};

// Email atualizado com sucesso
export const mockedClientPatchEmail: any = {
  email: "email@atualizado.com",
};

// Telefone atualizado com sucesso
export const mockedClientPatchTelephone: any = {
  telephone: "00000000000",
};

// Senha atualizada com sucesso
export const mockedClientPatchPassword: any = {
  password: "senha_atualizada",
};

// ID só pode ser lido
export const mockedClientPatchIdError: any = {
  id: "48as15das5da12asd",
};

//---------------------------------------------------------
// MOCKS DE CONTATO

// Criar com sucesso
export const mockedContact: IContactRequest = {
  name: "Allan da Mota Salatino",
  email: "allan1.smota@gmail.com",
  telephone: "11933895917",
};

// Nome é um campo obrigatorio
export const mockedContactErrorName: any = {
  email: "allan1.smota@gmail.com",
  telephone: "11933895917",
};

// Email é um campo obrigatorio
export const mockedContactErrorEmail: any = {
  name: "Allan da Mota Salatino",
  telephone: "11933895917",
};

// Telefone é um campo obrigatorio
export const mockedContactErrorTelephone: any = {
  name: "Allan da Mota Salatino",
  email: "allan1.smota@gmail.com",
};

// Nome atualizado com sucesso
export const mockedContactPatchName: any = {
  name: "nome atualizado",
};

// Email atualizado com sucesso
export const mockedContactPatchEmail: any = {
  email: "email@atualizado.com",
};

// Telefone atualizado com sucesso
export const mockedContactPatchTelephone: any = {
  telephone: "00000000000",
};

// ID só pode ser lido
export const mockedContactPatchIdError: any = {
  id: "48as15das5da12asd",
};
