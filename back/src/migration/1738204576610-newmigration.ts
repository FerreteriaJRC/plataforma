import { MigrationInterface, QueryRunner } from "typeorm";

export class Newmigration1738204576610 implements MigrationInterface {
    name = 'Newmigration1738204576610'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "users" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "name" character varying NOT NULL, "surname" character varying NOT NULL, "nameUser" character varying NOT NULL, "password" character varying NOT NULL, "confirmPassword" character varying NOT NULL, "ocupation" character varying NOT NULL, "emailPersonal" character varying NOT NULL, "emailProfesional" character varying NOT NULL, "rol" character varying NOT NULL DEFAULT 'vendedor', CONSTRAINT "PK_a3ffb1c0c8416b9fc6f907b7433" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "Products" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "description" character varying NOT NULL, "reference" character varying NOT NULL, "price" integer NOT NULL, CONSTRAINT "PK_36a07cc432789830e7fb7b58a83" PRIMARY KEY ("id"))`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP TABLE "Products"`);
        await queryRunner.query(`DROP TABLE "users"`);
    }

}
