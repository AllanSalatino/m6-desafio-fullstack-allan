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
let clientId;
let token;
describe("client", () => {
    let connection;
    beforeAll(() => __awaiter(void 0, void 0, void 0, function* () {
        yield data_source_1.default.initialize()
            .then((res) => {
            connection = res;
        })
            .catch((e) => {
            console.error("Error during DataSource inicialization", e);
        });
    }));
    afterAll(() => __awaiter(void 0, void 0, void 0, function* () {
        yield connection.destroy();
    }));
    test("POST/client - Must be able to create client", () => __awaiter(void 0, void 0, void 0, function* () {
        const res = yield (0, supertest_1.default)(app_1.default).post("/api/client").send(mocks_1.mockedClient);
        expect(res.body).toHaveProperty("id");
        clientId = res.body.id;
        expect(res.body).toHaveProperty("name");
        expect(res.body).toHaveProperty("email");
        expect(res.body).not.toHaveProperty("password");
        expect(res.body).toHaveProperty("telephone");
        expect(res.body).toHaveProperty("registration_date");
        expect(res.status).toBe(201);
    }));
    test("POST/client - should not be able to create a client that already exists", () => __awaiter(void 0, void 0, void 0, function* () {
        const res = yield (0, supertest_1.default)(app_1.default).post("/api/client").send(mocks_1.mockedClient);
        expect(res.body).toHaveProperty("message");
        expect(res.status).toBe(400);
    }));
    test("POST/client - must not be able to create a client with telephone exist", () => __awaiter(void 0, void 0, void 0, function* () {
        const res = yield (0, supertest_1.default)(app_1.default)
            .post("/api/client")
            .send(mocks_1.mockedClientErrorTelephoneExist);
        expect(res.body).toHaveProperty("message");
        expect(res.body.message).toEqual("Telephone already exists");
        expect(res.status).toBe(400);
    }));
    test("POST/client - must not be able to create a user without email", () => __awaiter(void 0, void 0, void 0, function* () {
        const res = yield (0, supertest_1.default)(app_1.default)
            .post("/api/client")
            .send(mocks_1.mockedClientErrorEmail);
        expect(res.body).toHaveProperty("message");
        expect(res.body.message).toEqual("Email is a field required");
        expect(res.status).toBe(400);
    }));
    test("POST/client - must not be able to create a user without name", () => __awaiter(void 0, void 0, void 0, function* () {
        const res = yield (0, supertest_1.default)(app_1.default)
            .post("/api/client")
            .send(mocks_1.mockedClientErrorName);
        expect(res.body).toHaveProperty("message");
        expect(res.body.message).toEqual("Name is a field required");
        expect(res.status).toBe(400);
    }));
    test("POST/client - must not be able to create a user without password", () => __awaiter(void 0, void 0, void 0, function* () {
        const res = yield (0, supertest_1.default)(app_1.default)
            .post("/api/client")
            .send(mocks_1.mockedClientErrorPassword);
        expect(res.body).toHaveProperty("message");
        expect(res.body.message).toEqual("Password is a field required");
        expect(res.status).toBe(400);
    }));
    test("POST/client - must not be able to create a user without telephone", () => __awaiter(void 0, void 0, void 0, function* () {
        const res = yield (0, supertest_1.default)(app_1.default)
            .post("/api/client")
            .send(mocks_1.mockedClientErrorTelephone);
        expect(res.body).toHaveProperty("message");
        expect(res.body.message).toEqual("Telephone is a field required");
        expect(res.status).toBe(400);
    }));
    test("GET/client - should be able to find a client", () => __awaiter(void 0, void 0, void 0, function* () {
        const login = yield (0, supertest_1.default)(app_1.default).post("/api/login").send(mocks_1.mockedLogin);
        token = login.body.token;
        token = `Bearer ${token}`;
        const res = yield (0, supertest_1.default)(app_1.default)
            .get(`/api/client/${clientId}`)
            .set("Authorization", token)
            .send();
        expect(res.body).toHaveProperty("id");
        expect(res.body).toHaveProperty("name");
        expect(res.body).toHaveProperty("email");
        expect(res.body).toHaveProperty("telephone");
        expect(res.body).toHaveProperty("registration_date");
        expect(res.status).toBe(200);
    }));
    test("PATCH/client - should be able to change email", () => __awaiter(void 0, void 0, void 0, function* () {
        const res = yield (0, supertest_1.default)(app_1.default)
            .patch(`/api/client/${clientId}`)
            .set("Authorization", token)
            .send(mocks_1.mockedClientPatchEmail);
        expect(res.body).toHaveProperty("email");
        expect(res.body.email).toEqual("email@atualizado.com");
        expect(res.status).toBe(200);
    }));
    test("PATCH/client - should be able to change name", () => __awaiter(void 0, void 0, void 0, function* () {
        const res = yield (0, supertest_1.default)(app_1.default)
            .patch(`/api/client/${clientId}`)
            .set("Authorization", token)
            .send(mocks_1.mockedClientPatchName);
        expect(res.body).toHaveProperty("name");
        expect(res.body.name).toEqual("nome atualizado");
        expect(res.status).toBe(200);
    }));
    test("PATCH/client - should be able to change password", () => __awaiter(void 0, void 0, void 0, function* () {
        const res = yield (0, supertest_1.default)(app_1.default)
            .patch(`/api/client/${clientId}`)
            .set("Authorization", token)
            .send(mocks_1.mockedClientPatchPassword);
        expect(res.status).toBe(200);
    }));
    test("PATCH/client - should be able to change telephone", () => __awaiter(void 0, void 0, void 0, function* () {
        const res = yield (0, supertest_1.default)(app_1.default)
            .patch(`/api/client/${clientId}`)
            .set("Authorization", token)
            .send(mocks_1.mockedClientPatchTelephone);
        expect(res.body).toHaveProperty("telephone");
        expect(res.body.telephone).toEqual("00000000000");
        expect(res.status).toBe(200);
    }));
    test("DELETE/client - should be able to delete client", () => __awaiter(void 0, void 0, void 0, function* () {
        const res = yield (0, supertest_1.default)(app_1.default)
            .delete(`/api/client/${clientId}`)
            .set("Authorization", token)
            .send();
        expect(res.status).toBe(204);
    }));
});
