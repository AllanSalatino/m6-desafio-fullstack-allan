"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Client = void 0;
const class_transformer_1 = require("class-transformer");
const typeorm_1 = require("typeorm");
const contact_entity_1 = require("./contact.entity");
const uuid_1 = require("uuid");
let Client = class Client {
    constructor() {
        if (!this.id) {
            this.id = (0, uuid_1.v4)();
        }
    }
};
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)("uuid"),
    __metadata("design:type", String)
], Client.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)({ length: 60 }),
    __metadata("design:type", String)
], Client.prototype, "name", void 0);
__decorate([
    (0, typeorm_1.Column)({ length: 60, unique: true }),
    __metadata("design:type", String)
], Client.prototype, "email", void 0);
__decorate([
    (0, typeorm_1.Column)({ length: 120 }),
    (0, class_transformer_1.Exclude)(),
    __metadata("design:type", String)
], Client.prototype, "password", void 0);
__decorate([
    (0, typeorm_1.Column)({ length: 14, unique: true }),
    __metadata("design:type", String)
], Client.prototype, "telephone", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", Date)
], Client.prototype, "registration_date", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => contact_entity_1.Contact, (contacts) => contacts.client, {
        cascade: true,
    }),
    __metadata("design:type", Array)
], Client.prototype, "contacts", void 0);
Client = __decorate([
    (0, typeorm_1.Entity)("client"),
    __metadata("design:paramtypes", [])
], Client);
exports.Client = Client;
