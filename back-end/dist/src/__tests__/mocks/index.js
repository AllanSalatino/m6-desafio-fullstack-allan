"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.mockedContactPatchIdError = exports.mockedContactPatchTelephone = exports.mockedContactPatchEmail = exports.mockedContactPatchName = exports.mockedContactErrorTelephone = exports.mockedContactErrorEmail = exports.mockedContactErrorName = exports.mockedContact = exports.mockedClientPatchIdError = exports.mockedClientPatchPassword = exports.mockedClientPatchTelephone = exports.mockedClientPatchEmail = exports.mockedClientPatchName = exports.mokedLoginErrorPassword = exports.mockedLoginErrorEmailNotFound = exports.mockedLoginErrorFieldEmail = exports.mockedLoginErrorFieldPassword = exports.mockedClientErrorPassword = exports.mockedClientErrorTelephone = exports.mockedClientErrorEmail = exports.mockedClientErrorName = exports.mockedLogin3 = exports.mockedLogin2 = exports.mockedLogin = exports.mockedClientErrorTelephoneExist = exports.mockedClient3 = exports.mockedClient2 = exports.mockedClient = void 0;
// ------------------------------------------------
// MOCKS DE CLIENTE
// Criar com sucesso
exports.mockedClient = {
    name: "Allan da Mota Salatino",
    email: "allan.smota@gmail.com",
    telephone: "11933895916",
    password: "1234",
};
exports.mockedClient2 = {
    name: "Jorge da Mota Salatino",
    email: "jorge.smota@gmail.com",
    telephone: "11933895918",
    password: "1234",
};
exports.mockedClient3 = {
    name: "João da Mota Salatino",
    email: "joao.smota@gmail.com",
    telephone: "11933895910",
    password: "1234",
};
exports.mockedClientErrorTelephoneExist = {
    name: "Allan da Mota Salatino",
    email: "allan1.smota@gmail.com",
    telephone: "11933895916",
    password: "1234",
};
// Logar com sucesso
exports.mockedLogin = {
    email: "allan.smota@gmail.com",
    password: "1234",
};
exports.mockedLogin2 = {
    email: "jorge.smota@gmail.com",
    password: "1234",
};
exports.mockedLogin3 = {
    email: "joao.smota@gmail.com",
    password: "1234",
};
// Nome é um campo obrigatorio
exports.mockedClientErrorName = {
    email: "allan.smota@gmail.com",
    telephone: "11933895916",
    password: "1234",
};
// Email é um campo obrigatorio
exports.mockedClientErrorEmail = {
    name: "Allan da Mota Salatino",
    telephone: "11933895916",
    password: "1234",
};
// Telefone é um campo obrigatorio
exports.mockedClientErrorTelephone = {
    name: "Allan da Mota Salatino",
    email: "allan.smota@gmail.com",
    password: "1234",
};
// Senha é um campo obrigatorio
exports.mockedClientErrorPassword = {
    name: "Allan da Mota Salatino",
    email: "allan.smota@gmail.com",
    telephone: "11933895916",
};
// Senha é um campo obrigatorio
exports.mockedLoginErrorFieldPassword = {
    email: "allan.smota@gmail.com",
};
// Email é um campo obrigatorio
exports.mockedLoginErrorFieldEmail = {
    password: "1234",
};
// Email não encontrado
exports.mockedLoginErrorEmailNotFound = {
    email: "nao.existe@gmail.com",
    password: "1234",
};
// Senha errada
exports.mokedLoginErrorPassword = {
    email: "allan.smota@gmail.com",
    password: "sehaerrada",
};
// Nome atualizado com sucesso
exports.mockedClientPatchName = {
    name: "nome atualizado",
};
// Email atualizado com sucesso
exports.mockedClientPatchEmail = {
    email: "email@atualizado.com",
};
// Telefone atualizado com sucesso
exports.mockedClientPatchTelephone = {
    telephone: "00000000000",
};
// Senha atualizada com sucesso
exports.mockedClientPatchPassword = {
    password: "senha_atualizada",
};
// ID só pode ser lido
exports.mockedClientPatchIdError = {
    id: "48as15das5da12asd",
};
//---------------------------------------------------------
// MOCKS DE CONTATO
// Criar com sucesso
exports.mockedContact = {
    name: "Allan da Mota Salatino",
    email: "allan1.smota@gmail.com",
    telephone: "11933895917",
};
// Nome é um campo obrigatorio
exports.mockedContactErrorName = {
    email: "allan1.smota@gmail.com",
    telephone: "11933895917",
};
// Email é um campo obrigatorio
exports.mockedContactErrorEmail = {
    name: "Allan da Mota Salatino",
    telephone: "11933895917",
};
// Telefone é um campo obrigatorio
exports.mockedContactErrorTelephone = {
    name: "Allan da Mota Salatino",
    email: "allan1.smota@gmail.com",
};
// Nome atualizado com sucesso
exports.mockedContactPatchName = {
    name: "nome atualizado",
};
// Email atualizado com sucesso
exports.mockedContactPatchEmail = {
    email: "email@atualizado.com",
};
// Telefone atualizado com sucesso
exports.mockedContactPatchTelephone = {
    telephone: "00000000000",
};
// ID só pode ser lido
exports.mockedContactPatchIdError = {
    id: "48as15das5da12asd",
};
