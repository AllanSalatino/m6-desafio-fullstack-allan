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
const contact_entity_1 = require("../../entities/contact.entity");
const errors_1 = require("../../errors");
const createContactService = ({ name, email, telephone }, id) => __awaiter(void 0, void 0, void 0, function* () {
    if (!name) {
        throw new errors_1.AppError("Name is a field required");
    }
    if (!email) {
        throw new errors_1.AppError("Email is a field required");
    }
    if (!telephone) {
        throw new errors_1.AppError("Telephone is a field required");
    }
    const contactRepository = data_source_1.default.getRepository(contact_entity_1.Contact);
    const emailAlreadyExists = yield contactRepository.findOneBy({
        email: email,
    });
    const telephoneAlredyExists = yield contactRepository.findOneBy({
        telephone: telephone,
    });
    if (emailAlreadyExists) {
        throw new errors_1.AppError("Email already exists", 400);
    }
    else if (telephoneAlredyExists) {
        throw new errors_1.AppError("Telephone already exists", 400);
    }
    const contact = contactRepository.create({
        clientId: id,
        name,
        email,
        telephone,
        registration_date: new Date(),
    });
    yield contactRepository.save(contact);
    return contact;
});
exports.default = createContactService;
