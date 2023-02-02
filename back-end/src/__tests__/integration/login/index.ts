import { DataSource } from "typeorm";
import AppDataSource from "../../../data-source";
import request from "supertest";
import app from "../../../app";
import {
  mockedLoginErrorFieldEmail,
  mockedLoginErrorFieldPassword,
  mockedLogin2,
  mockedClient2,
  mockedLoginErrorEmailNotFound,
  mokedLoginErrorPassword,
} from "../../mocks";

describe("login", () => {
  let connection: DataSource;
  let clientId: string;
  let token: string;
  beforeAll(async () => {
    await AppDataSource.initialize()
      .then((res) => {
        connection = res;
      })
      .catch((e) => {
        console.error("Error during DataSource inicialization", e);
      });

    const res = await request(app).post("/api/client").send(mockedClient2);
    clientId = res.body.id;
  });

  afterAll(async () => {
    await connection.destroy();
  });

  test("POST/login - should be able to login and return token", async () => {
    const res = await request(app).post("/api/login").send(mockedLogin2);
    token = res.body.token;
    token = `Bearer ${token}`;

    expect(res.body).toHaveProperty("token");
    expect(res.status).toBe(200);
  });

  test("POST/login - should not be able to login a user without email", async () => {
    const res = await request(app)
      .post("/api/login")
      .send(mockedLoginErrorFieldEmail);

    expect(res.body).toHaveProperty("message");
    expect(res.body.message).toEqual("Email is a field required");
    expect(res.status).toBe(400);
  });

  test("POST/login - should not be able to login a user without password", async () => {
    const res = await request(app)
      .post("/api/login")
      .send(mockedLoginErrorFieldPassword);

    expect(res.body).toHaveProperty("message");
    expect(res.body.message).toEqual("Password is a field required");
    expect(res.status).toBe(400);
  });

  test("POST/login - should not be able to login a client with email not exist", async () => {
    const res = await request(app)
      .post("/api/login")
      .send(mockedLoginErrorEmailNotFound);

    expect(res.body).toHaveProperty("message");
    expect(res.body.message).toEqual("Invalid email or password");
    expect(res.status).toBe(403);
  });

  test("POST/login - should not be able to login a client with wrong password", async () => {
    const res = await request(app)
      .post("/api/login")
      .send(mokedLoginErrorPassword);

    expect(res.body).toHaveProperty("message");
    expect(res.body.message).toEqual("Invalid email or password");
    expect(res.status).toBe(403);
  });

  test("DELETE/client - should be able to delete client", async () => {
    const res = await request(app)
      .delete(`/api/client/${clientId}`)
      .set("Authorization", token)
      .send();

    expect(res.status).toBe(204);
  });
});
