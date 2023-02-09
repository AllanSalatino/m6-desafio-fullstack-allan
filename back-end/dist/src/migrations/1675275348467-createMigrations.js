"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.createMigrations1675275348467 = void 0;
class createMigrations1675275348467 {
    constructor() {
        this.name = 'createMigrations1675275348467';
    }
    up(queryRunner) {
        return __awaiter(this, void 0, void 0, function* () {
            yield queryRunner.query(`CREATE TABLE "contact" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "name" character varying(60) NOT NULL, "email" character varying(60) NOT NULL, "telephone" character varying(14) NOT NULL, "registration_date" TIMESTAMP NOT NULL, "clientId" uuid NOT NULL, CONSTRAINT "UQ_eff09bb429f175523787f46003b" UNIQUE ("email"), CONSTRAINT "UQ_1e0e630a17f7505a29a76b9af7f" UNIQUE ("telephone"), CONSTRAINT "PK_2cbbe00f59ab6b3bb5b8d19f989" PRIMARY KEY ("id"))`);
            yield queryRunner.query(`CREATE TABLE "client" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "name" character varying(60) NOT NULL, "email" character varying(60) NOT NULL, "password" character varying(120) NOT NULL, "telephone" character varying(14) NOT NULL, "registration_date" TIMESTAMP NOT NULL, CONSTRAINT "UQ_6436cc6b79593760b9ef921ef12" UNIQUE ("email"), CONSTRAINT "UQ_12d17fcdd2d1b7f98e350be9edc" UNIQUE ("telephone"), CONSTRAINT "PK_96da49381769303a6515a8785c7" PRIMARY KEY ("id"))`);
            yield queryRunner.query(`ALTER TABLE "contact" ADD CONSTRAINT "FK_e99f8e5bcbccaec7b0b7ed65526" FOREIGN KEY ("clientId") REFERENCES "client"("id") ON DELETE CASCADE ON UPDATE NO ACTION`);
        });
    }
    down(queryRunner) {
        return __awaiter(this, void 0, void 0, function* () {
            yield queryRunner.query(`ALTER TABLE "contact" DROP CONSTRAINT "FK_e99f8e5bcbccaec7b0b7ed65526"`);
            yield queryRunner.query(`DROP TABLE "client"`);
            yield queryRunner.query(`DROP TABLE "contact"`);
        });
    }
}
exports.createMigrations1675275348467 = createMigrations1675275348467;
