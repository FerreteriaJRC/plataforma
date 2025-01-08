import { MigrationInterface, QueryRunner } from "typeorm";

export class Initialmigration1736281680995 implements MigrationInterface {
    name = 'Initialmigration1736281680995'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "users" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "name" character varying NOT NULL, "surname" character varying NOT NULL, "ocupation" character varying NOT NULL, "emailPersonal" character varying NOT NULL, "emailProfesional" character varying NOT NULL, "role" character varying NOT NULL DEFAULT 'vendedor', CONSTRAINT "PK_a3ffb1c0c8416b9fc6f907b7433" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "Products" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "description" character varying NOT NULL, "reference" character varying NOT NULL, "price" integer NOT NULL, CONSTRAINT "PK_36a07cc432789830e7fb7b58a83" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "auth" ("id" SERIAL NOT NULL, "name" character varying NOT NULL, "Surname" character varying NOT NULL, "ocupation" character varying NOT NULL, "emailpersonal" character varying NOT NULL, "emailprofesional" character varying NOT NULL, "role" character varying NOT NULL, CONSTRAINT "PK_7e416cf6172bc5aec04244f6459" PRIMARY KEY ("id"))`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP TABLE "auth"`);
        await queryRunner.query(`DROP TABLE "Products"`);
        await queryRunner.query(`DROP TABLE "users"`);
    }

}
