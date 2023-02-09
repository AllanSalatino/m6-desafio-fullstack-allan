"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const createClient_controller_1 = __importDefault(require("../controllers/client/createClient.controller"));
const createSession_controller_1 = __importDefault(require("../controllers/client/createSession.controller"));
const deleteClient_controller_1 = __importDefault(require("../controllers/client/deleteClient.controller"));
const readClient_controller_1 = __importDefault(require("../controllers/client/readClient.controller"));
const updateClient_controller_1 = __importDefault(require("../controllers/client/updateClient.controller"));
const ensureAuth_middleware_1 = __importDefault(require("../middlewares/ensureAuth.middleware"));
const clientRoutes = (0, express_1.Router)();
clientRoutes.post("/client", createClient_controller_1.default);
clientRoutes.get("/client/:id", ensureAuth_middleware_1.default, readClient_controller_1.default);
clientRoutes.patch("/client/:id", ensureAuth_middleware_1.default, updateClient_controller_1.default);
clientRoutes.delete("/client/:id", ensureAuth_middleware_1.default, deleteClient_controller_1.default);
clientRoutes.post("/login", createSession_controller_1.default);
exports.default = clientRoutes;
