import "reflect-metadata";
import { startDatabase } from "./database";
import express from "express";
import "express-async-errors";

const app = express();

app.use(express.json());

app.listen(3000, () => {
  console.log("Listen in port 3000");
  startDatabase();
});
