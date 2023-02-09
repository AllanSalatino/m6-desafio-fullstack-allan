"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const data_source_1 = __importDefault(require("../../data-source"));
const bcryptjs_1 = require("bcryptjs");
const client_entity_1 = require("../../entities/client.entity");
const errors_1 = require("../../errors");
const createClientService = ({ name, email, password, telephone, }) => __awaiter(void 0, void 0, void 0, function* () {
    if (!name) {
        throw new errors_1.AppError("Name is a field required");
    }
    if (!email) {
        throw new errors_1.AppError("Email is a field required");
    }
    if (!telephone) {
        throw new errors_1.AppError("Telephone is a field required");
    }
    if (!password) {
        throw new errors_1.AppError("Password is a field required");
    }
    const clientRepository = data_source_1.default.getRepository(client_entity_1.Client);
    const emailAlreadyExists = yield clientRepository.findOneBy({ email: email });
    const telephoneAlreadyExists = yield clientRepository.findOneBy({
        telephone: telephone,
    });
    if (emailAlreadyExists) {
        throw new errors_1.AppError("Email already exists");
    }
    if (telephoneAlreadyExists) {
        throw new errors_1.AppError("Telephone already exists");
    }
    const hashedPassword = yield (0, bcryptjs_1.hash)(password, 10);
    const client = clientRepository.create({
        name,
        email,
        password: hashedPassword,
        telephone,
        registration_date: new Date(),
    });
    yield clientRepository.save(client);
    return client;
});
exports.default = createClientService;
