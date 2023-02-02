import { DataSource } from "typeorm";
import AppDataSource from "../../../data-source";
import request from "supertest";
import app from "../../../app";
import {
  mockedClient,
  mockedLogin,
  mockedClientErrorTelephoneExist,
  mockedClientErrorEmail,
  mockedClientErrorName,
  mockedClientErrorPassword,
  mockedClientErrorTelephone,
  mockedClientPatchEmail,
  mockedClientPatchName,
  mockedClientPatchPassword,
  mockedClientPatchTelephone,
} from "../../mocks";

let clientId: string;
let token: string;

describe("client", () => {
  let connection: DataSource;

  beforeAll(async () => {
    await AppDataSource.initialize()
      .then((res) => {
        connection = res;
      })
      .catch((e) => {
        console.error("Error during DataSource inicialization", e);
      });
  });

  afterAll(async () => {
    await connection.destroy();
  });

  test("POST/client - Must be able to create client", async () => {
    const res = await request(app).post("/api/client").send(mockedClient);

    expect(res.body).toHaveProperty("id");
    clientId = res.body.id;
    expect(res.body).toHaveProperty("name");
    expect(res.body).toHaveProperty("email");
    expect(res.body).not.toHaveProperty("password");
    expect(res.body).toHaveProperty("telephone");
    expect(res.body).toHaveProperty("registration_date");
    expect(res.status).toBe(201);
  });

  test("POST/client - should not be able to create a client that already exists", async () => {
    const res = await request(app).post("/api/client").send(mockedClient);

    expect(res.body).toHaveProperty("message");
    expect(res.status).toBe(400);
  });

  test("POST/client - must not be able to create a client with telephone exist", async () => {
    const res = await request(app)
      .post("/api/client")
      .send(mockedClientErrorTelephoneExist);

    expect(res.body).toHaveProperty("message");
    expect(res.body.message).toEqual("Telephone already exists");
    expect(res.status).toBe(400);
  });

  test("POST/client - must not be able to create a user without email", async () => {
    const res = await request(app)
      .post("/api/client")
      .send(mockedClientErrorEmail);

    expect(res.body).toHaveProperty("message");
    expect(res.body.message).toEqual("Email is a field required");
    expect(res.status).toBe(400);
  });

  test("POST/client - must not be able to create a user without name", async () => {
    const res = await request(app)
      .post("/api/client")
      .send(mockedClientErrorName);

    expect(res.body).toHaveProperty("message");
    expect(res.body.message).toEqual("Name is a field required");
    expect(res.status).toBe(400);
  });

  test("POST/client - must not be able to create a user without password", async () => {
    const res = await request(app)
      .post("/api/client")
      .send(mockedClientErrorPassword);

    expect(res.body).toHaveProperty("message");
    expect(res.body.message).toEqual("Password is a field required");
    expect(res.status).toBe(400);
  });

  test("POST/client - must not be able to create a user without telephone", async () => {
    const res = await request(app)
      .post("/api/client")
      .send(mockedClientErrorTelephone);

    expect(res.body).toHaveProperty("message");
    expect(res.body.message).toEqual("Telephone is a field required");
    expect(res.status).toBe(400);
  });

  test("GET/client - should be able to find a client", async () => {
    const login = await request(app).post("/api/login").send(mockedLogin);
    token = login.body.token;
    token = `Bearer ${token}`;

    const res = await request(app)
      .get(`/api/client/${clientId}`)
      .set("Authorization", token)
      .send();

    expect(res.body).toHaveProperty("id");
    expect(res.body).toHaveProperty("name");
    expect(res.body).toHaveProperty("email");
    expect(res.body).toHaveProperty("telephone");
    expect(res.body).toHaveProperty("registration_date");
    expect(res.status).toBe(200);
  });

  test("PATCH/client - should be able to change email", async () => {
    const res = await request(app)
      .patch(`/api/client/${clientId}`)
      .set("Authorization", token)
      .send(mockedClientPatchEmail);

    expect(res.body).toHaveProperty("email");
    expect(res.body.email).toEqual("email@atualizado.com");
    expect(res.status).toBe(200);
  });

  test("PATCH/client - should be able to change name", async () => {
    const res = await request(app)
      .patch(`/api/client/${clientId}`)
      .set("Authorization", token)
      .send(mockedClientPatchName);

    expect(res.body).toHaveProperty("name");
    expect(res.body.name).toEqual("nome atualizado");
    expect(res.status).toBe(200);
  });

  test("PATCH/client - should be able to change password", async () => {
    const res = await request(app)
      .patch(`/api/client/${clientId}`)
      .set("Authorization", token)
      .send(mockedClientPatchPassword);

    expect(res.status).toBe(200);
  });

  test("PATCH/client - should be able to change telephone", async () => {
    const res = await request(app)
      .patch(`/api/client/${clientId}`)
      .set("Authorization", token)
      .send(mockedClientPatchTelephone);

    expect(res.body).toHaveProperty("telephone");
    expect(res.body.telephone).toEqual("00000000000");
    expect(res.status).toBe(200);
  });

  test("DELETE/client - should be able to delete client", async () => {
    const res = await request(app)
      .delete(`/api/client/${clientId}`)
      .set("Authorization", token)
      .send();
    expect(res.status).toBe(204);
  });
});
