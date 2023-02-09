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
const client_entity_1 = require("../../entities/client.entity");
const errors_1 = require("../../errors");
const readClientService = (id) => __awaiter(void 0, void 0, void 0, function* () {
    const clientsRepository = data_source_1.default.getRepository(client_entity_1.Client);
    const client = yield clientsRepository.findOneBy({ id: id });
    if (!client) {
        throw new errors_1.AppError("client not found");
    }
    const result = {
        id: client.id,
        name: client.name,
        email: client.email,
        telephone: client.telephone,
        registration_date: client.registration_date,
    };
    return result;
});
exports.default = readClientService;
