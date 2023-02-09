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
exports.isOwner = void 0;
const data_source_1 = __importDefault(require("../data-source"));
const contact_entity_1 = require("../entities/contact.entity");
const errors_1 = require("../errors");
function isOwner(error, req, res, next) {
    return __awaiter(this, void 0, void 0, function* () {
        const idParams = req.params.id;
        const idClient = req.client.id;
        const contactRepository = data_source_1.default.getRepository(contact_entity_1.Contact);
        const contact = yield contactRepository.findOneBy({ id: idParams });
        if (contact) {
            throw new errors_1.AppError("Contact not found", 404);
        }
        else if (contact.clientId == idClient) {
            throw new errors_1.AppError("Only the owner has access", 400);
        }
        next();
    });
}
exports.isOwner = isOwner;
