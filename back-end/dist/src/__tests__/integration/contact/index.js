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
const data_source_1 = __importDefault(require("../../../data-source"));
const supertest_1 = __importDefault(require("supertest"));
const app_1 = __importDefault(require("../../../app"));
const mocks_1 = require("../../mocks");
let contactId;
let clientId;
let token;
describe("contact", () => {
    let connection;
    beforeAll(() => __awaiter(void 0, void 0, void 0, function* () {
        yield data_source_1.default.initialize()
            .then((res) => {
            connection = res;
        })
            .catch((e) => {
            console.error("Error during DataSource inicialization", e);
        });
        const client = yield (0, supertest_1.default)(app_1.default).post("/api/client").send(mocks_1.mockedClient3);
        clientId = client.body.id;
        console.log("---------------client----------------", client.body);
        console.log("---------------client-id----------------", clientId);
        const res = yield (0, supertest_1.default)(app_1.default).post("/api/login").send(mocks_1.mockedLogin3);
        token = res.body.token;
        token = `Bearer ${token}`;
        console.log("----------------token----------------", token);
    }));
    afterAll(() => __awaiter(void 0, void 0, void 0, function* () {
        yield connection.destroy();
    }));
    test("POST/contact - Must be able to create contact", () => __awaiter(void 0, void 0, void 0, function* () {
        const res = yield (0, supertest_1.default)(app_1.default)
            .post("/api/contact")
            .set("Authorization", token)
            .send(mocks_1.mockedContact);
        expect(res.body).toHaveProperty("id");
        contactId = res.body.id;
        expect(res.body).toHaveProperty("name");
        expect(res.body).toHaveProperty("email");
        expect(res.body).toHaveProperty("telephone");
        expect(res.body).toHaveProperty("registration_date");
        expect(res.status).toBe(201);
    }));
    test("POST/contact - should not be able to create a contact that already exists", () => __awaiter(void 0, void 0, void 0, function* () {
        const res = yield (0, supertest_1.default)(app_1.default)
            .post("/api/contact")
            .set("Authorization", token)
            .send(mocks_1.mockedContact);
        expect(res.body).toHaveProperty("message");
        expect(res.status).toBe(400);
    }));
    test("POST/contact - must not be able to create a user without email", () => __awaiter(void 0, void 0, void 0, function* () {
        const res = yield (0, supertest_1.default)(app_1.default)
            .post("/api/contact")
            .set("Authorization", token)
            .send(mocks_1.mockedContactErrorEmail);
        expect(res.body).toHaveProperty("message");
        expect(res.body.message).toEqual("Email is a field required");
        expect(res.status).toBe(400);
    }));
    test("POST/contact - must not be able to create a user without name", () => __awaiter(void 0, void 0, void 0, function* () {
        const res = yield (0, supertest_1.default)(app_1.default)
            .post("/api/contact")
            .set("Authorization", token)
            .send(mocks_1.mockedContactErrorName);
        expect(res.body).toHaveProperty("message");
        expect(res.body.message).toEqual("Name is a field required");
        expect(res.status).toBe(400);
    }));
    test("POST/contact - must not be able to create a user without telephone", () => __awaiter(void 0, void 0, void 0, function* () {
        const res = yield (0, supertest_1.default)(app_1.default)
            .post("/api/contact")
            .set("Authorization", token)
            .send(mocks_1.mockedContactErrorTelephone);
        expect(res.body).toHaveProperty("message");
        expect(res.body.message).toEqual("Telephone is a field required");
        expect(res.status).toBe(400);
    }));
    test("GET/contact - should be able to find a contact", () => __awaiter(void 0, void 0, void 0, function* () {
        const res = yield (0, supertest_1.default)(app_1.default)
            .get(`/api/contact`)
            .set("Authorization", token)
            .send();
        expect(res.status).toBe(200);
    }));
    test("PATCH/contact - should be able to change email", () => __awaiter(void 0, void 0, void 0, function* () {
        const res = yield (0, supertest_1.default)(app_1.default)
            .patch(`/api/contact/${contactId}`)
            .set("Authorization", token)
            .send(mocks_1.mockedContactPatchEmail);
        expect(res.body).toHaveProperty("email");
        expect(res.body.email).toEqual("email@atualizado.com");
        expect(res.status).toBe(200);
    }));
    test("PATCH/contact - should be able to change name", () => __awaiter(void 0, void 0, void 0, function* () {
        const res = yield (0, supertest_1.default)(app_1.default)
            .patch(`/api/contact/${contactId}`)
            .set("Authorization", token)
            .send(mocks_1.mockedContactPatchName);
        expect(res.body).toHaveProperty("name");
        expect(res.body.name).toEqual("nome atualizado");
        expect(res.status).toBe(200);
    }));
    test("PATCH/contact - should be able to change telephone", () => __awaiter(void 0, void 0, void 0, function* () {
        const res = yield (0, supertest_1.default)(app_1.default)
            .patch(`/api/contact/${contactId}`)
            .set("Authorization", token)
            .send(mocks_1.mockedContactPatchTelephone);
        expect(res.body).toHaveProperty("telephone");
        expect(res.body.telephone).toEqual("00000000000");
        expect(res.status).toBe(200);
    }));
    test("DELETE/contact - should be able to delete contact", () => __awaiter(void 0, void 0, void 0, function* () {
        const res = yield (0, supertest_1.default)(app_1.default)
            .delete(`/api/contact/${contactId}`)
            .set("Authorization", token)
            .send();
        expect(res.status).toBe(204);
    }));
    test("DELETE/client - should be able to delete client", () => __awaiter(void 0, void 0, void 0, function* () {
        const res = yield (0, supertest_1.default)(app_1.default)
            .delete(`/api/client/${clientId}`)
            .set("Authorization", token)
            .send();
        expect(res.status).toBe(204);
    }));
});
