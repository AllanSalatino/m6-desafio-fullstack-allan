import { MigrationInterface, QueryRunner } from "typeorm";

export class createMigrations1675201001862 implements MigrationInterface {
    name = 'createMigrations1675201001862'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "contact" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "name" character varying(60) NOT NULL, "email" character varying(60) NOT NULL, "telephone" character varying(14) NOT NULL, "registration_date" TIMESTAMP NOT NULL, "clientId" uuid NOT NULL, CONSTRAINT "UQ_eff09bb429f175523787f46003b" UNIQUE ("email"), CONSTRAINT "UQ_1e0e630a17f7505a29a76b9af7f" UNIQUE ("telephone"), CONSTRAINT "PK_2cbbe00f59ab6b3bb5b8d19f989" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "client" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "name" character varying(60) NOT NULL, "email" character varying(60) NOT NULL, "password" character varying(120) NOT NULL, "telephone" character varying(14) NOT NULL, "registration_date" TIMESTAMP NOT NULL, CONSTRAINT "UQ_6436cc6b79593760b9ef921ef12" UNIQUE ("email"), CONSTRAINT "UQ_12d17fcdd2d1b7f98e350be9edc" UNIQUE ("telephone"), CONSTRAINT "PK_96da49381769303a6515a8785c7" PRIMARY KEY ("id"))`);
        await queryRunner.query(`ALTER TABLE "contact" ADD CONSTRAINT "FK_e99f8e5bcbccaec7b0b7ed65526" FOREIGN KEY ("clientId") REFERENCES "client"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "contact" DROP CONSTRAINT "FK_e99f8e5bcbccaec7b0b7ed65526"`);
        await queryRunner.query(`DROP TABLE "client"`);
        await queryRunner.query(`DROP TABLE "contact"`);
    }

}
