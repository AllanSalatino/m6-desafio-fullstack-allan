import { DataSource } from "typeorm";
import AppDataSource from "../../../data-source";
import request from "supertest";
import app from "../../../app";
import {
  mockedClient3,
  mockedLogin3,
  mockedContact,
  mockedContactErrorEmail,
  mockedContactErrorName,
  mockedContactErrorTelephone,
  mockedContactPatchEmail,
  mockedContactPatchName,
  mockedContactPatchTelephone,
} from "../../mocks";

let contactId: string;
let clientId: string;
let token: string;

describe("contact", () => {
  let connection: DataSource;

  beforeAll(async () => {
    await AppDataSource.initialize()
      .then((res) => {
        connection = res;
      })
      .catch((e) => {
        console.error("Error during DataSource inicialization", e);
      });

    const client = await request(app).post("/api/client").send(mockedClient3);
    clientId = client.body.id;

    console.log("---------------client----------------", client.body);

    console.log("---------------client-id----------------", clientId);

    const res = await request(app).post("/api/login").send(mockedLogin3);
    token = res.body.token;
    token = `Bearer ${token}`;

    console.log("----------------token----------------", token);
  });

  afterAll(async () => {
    await connection.destroy();
  });

  test("POST/contact - Must be able to create contact", async () => {
    const res = await request(app)
      .post("/api/contact")
      .set("Authorization", token)
      .send(mockedContact);

    expect(res.body).toHaveProperty("id");
    contactId = res.body.id;
    expect(res.body).toHaveProperty("name");
    expect(res.body).toHaveProperty("email");
    expect(res.body).toHaveProperty("telephone");
    expect(res.body).toHaveProperty("registration_date");
    expect(res.status).toBe(201);
  });

  test("POST/contact - should not be able to create a contact that already exists", async () => {
    const res = await request(app)
      .post("/api/contact")
      .set("Authorization", token)
      .send(mockedContact);

    expect(res.body).toHaveProperty("message");
    expect(res.status).toBe(400);
  });

  test("POST/contact - must not be able to create a user without email", async () => {
    const res = await request(app)
      .post("/api/contact")
      .set("Authorization", token)
      .send(mockedContactErrorEmail);

    expect(res.body).toHaveProperty("message");
    expect(res.body.message).toEqual("Email is a field required");
    expect(res.status).toBe(400);
  });

  test("POST/contact - must not be able to create a user without name", async () => {
    const res = await request(app)
      .post("/api/contact")
      .set("Authorization", token)
      .send(mockedContactErrorName);

    expect(res.body).toHaveProperty("message");
    expect(res.body.message).toEqual("Name is a field required");
    expect(res.status).toBe(400);
  });

  test("POST/contact - must not be able to create a user without telephone", async () => {
    const res = await request(app)
      .post("/api/contact")
      .set("Authorization", token)
      .send(mockedContactErrorTelephone);

    expect(res.body).toHaveProperty("message");
    expect(res.body.message).toEqual("Telephone is a field required");
    expect(res.status).toBe(400);
  });

  test("GET/contact - should be able to find a contact", async () => {
    const res = await request(app)
      .get(`/api/contact`)
      .set("Authorization", token)
      .send();

    expect(res.status).toBe(200);
  });

  test("PATCH/contact - should be able to change email", async () => {
    const res = await request(app)
      .patch(`/api/contact/${contactId}`)
      .set("Authorization", token)
      .send(mockedContactPatchEmail);

    expect(res.body).toHaveProperty("email");
    expect(res.body.email).toEqual("email@atualizado.com");
    expect(res.status).toBe(200);
  });

  test("PATCH/contact - should be able to change name", async () => {
    const res = await request(app)
      .patch(`/api/contact/${contactId}`)
      .set("Authorization", token)
      .send(mockedContactPatchName);

    expect(res.body).toHaveProperty("name");
    expect(res.body.name).toEqual("nome atualizado");
    expect(res.status).toBe(200);
  });

  test("PATCH/contact - should be able to change telephone", async () => {
    const res = await request(app)
      .patch(`/api/contact/${contactId}`)
      .set("Authorization", token)
      .send(mockedContactPatchTelephone);

    expect(res.body).toHaveProperty("telephone");
    expect(res.body.telephone).toEqual("00000000000");
    expect(res.status).toBe(200);
  });

  test("DELETE/contact - should be able to delete contact", async () => {
    const res = await request(app)
      .delete(`/api/contact/${contactId}`)
      .set("Authorization", token)
      .send();
    expect(res.status).toBe(204);
  });

  test("DELETE/client - should be able to delete client", async () => {
    const res = await request(app)
      .delete(`/api/client/${clientId}`)
      .set("Authorization", token)
      .send();

    expect(res.status).toBe(204);
  });
});
