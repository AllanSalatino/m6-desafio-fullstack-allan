import axios from "axios";

axios.defaults.headers.post["Content-Type"] = "application/json;charset=utf-8";
axios.defaults.headers.post["Access-Control-Allow-Origin"] = "*";

export const api = axios.create({
  baseURL: "http://localhost:3000/api",
  timeout: 10000,
});
