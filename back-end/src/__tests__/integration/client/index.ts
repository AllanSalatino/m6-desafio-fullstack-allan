import { DataSource } from "typeorm";
import AppDataSource from "../../../data-source";
import request from "supertest";
import app from "../../../app";
import {
  mockedClient,
  mockedClientErrorEmail,
  mockedClientErrorName,
  mockedClientErrorPassword,
  mockedClientErrorTelephone,
  mockedClientPatchEmail,
  mockedClientPatchIdError,
  mockedClientPatchName,
  mockedClientPatchPassword,
  mockedClientPatchTelephone,
} from "../../mocks";
import { Client } from "../../../entities/client.entity";

let createdClintIdTest;
let listUsers;

describe("/users", () => {
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
    createdClintIdTest = res.body.id;
    expect(res.body).toHaveProperty("name");
    expect(res.body).toHaveProperty("email");
    expect(res.body).not.toHaveProperty("password");
    expect(res.body).toHaveProperty("telephone");
    expect(res.status).toBe(201);
  });
});
