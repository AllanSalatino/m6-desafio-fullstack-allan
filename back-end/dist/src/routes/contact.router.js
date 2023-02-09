"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const createContact_controller_1 = __importDefault(require("../controllers/contact/createContact.controller"));
const deleteContact_controller_1 = __importDefault(require("../controllers/contact/deleteContact.controller"));
const readContacts_controller_1 = __importDefault(require("../controllers/contact/readContacts.controller"));
const updateContact_controller_1 = __importDefault(require("../controllers/contact/updateContact.controller"));
const ensureAuth_middleware_1 = __importDefault(require("../middlewares/ensureAuth.middleware"));
const isOwner_middleware_1 = require("../middlewares/isOwner.middleware");
const contactRoutes = (0, express_1.Router)();
contactRoutes.post("/contact", ensureAuth_middleware_1.default, createContact_controller_1.default);
contactRoutes.get("/contact", ensureAuth_middleware_1.default, isOwner_middleware_1.isOwner, readContacts_controller_1.default);
contactRoutes.patch("/contact/:id", ensureAuth_middleware_1.default, isOwner_middleware_1.isOwner, updateContact_controller_1.default);
contactRoutes.delete("/contact/:id", ensureAuth_middleware_1.default, isOwner_middleware_1.isOwner, deleteContact_controller_1.default);
exports.default = contactRoutes;
