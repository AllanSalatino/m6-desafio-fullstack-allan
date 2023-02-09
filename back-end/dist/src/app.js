"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
require("reflect-metadata");
const express_1 = __importDefault(require("express"));
require("express-async-errors");
const cors_1 = __importDefault(require("cors"));
const handleError_middleware_1 = require("./middlewares/handleError.middleware");
const client_router_1 = __importDefault(require("./routes/client.router"));
const contact_router_1 = __importDefault(require("./routes/contact.router"));
const app = (0, express_1.default)();
app.use(express_1.default.json());
app.use((req, res, next) => {
    res.header("Access-Control-Allow-Origin", "*");
    app.use((0, cors_1.default)());
    next();
});
app.use("/api", client_router_1.default);
app.use("/api", contact_router_1.default);
app.use(handleError_middleware_1.handleErrorMidleware);
exports.default = app;
