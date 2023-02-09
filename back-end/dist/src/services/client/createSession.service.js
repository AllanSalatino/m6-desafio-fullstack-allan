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
const bcryptjs_1 = require("bcryptjs");
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
require("dotenv/config");
const data_source_1 = __importDefault(require("../../data-source"));
const client_entity_1 = require("../../entities/client.entity");
const errors_1 = require("../../errors");
const createSessionService = ({ email, password, }) => __awaiter(void 0, void 0, void 0, function* () {
    const clientRepository = data_source_1.default.getRepository(client_entity_1.Client);
    if (!email) {
        throw new errors_1.AppError("Email is a field required");
    }
    if (!password) {
        throw new errors_1.AppError("Password is a field required");
    }
    const client = yield clientRepository.findOneBy({
        email: email,
    });
    if (!client) {
        throw new errors_1.AppError("Invalid email or password", 403);
    }
    const passwordMatch = yield (0, bcryptjs_1.compare)(password, client.password);
    if (!passwordMatch) {
        throw new errors_1.AppError("Invalid email or password", 403);
    }
    const token = jsonwebtoken_1.default.sign({
        id: client.id,
    }, process.env.SECRET_KEY, {
        expiresIn: "24h",
        subject: client.id,
    });
    return token;
});
exports.default = createSessionService;
