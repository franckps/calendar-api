import {MigrationInterface, QueryRunner} from "typeorm";

export class AddCalendar1640273742832 implements MigrationInterface {
    name = 'AddCalendar1640273742832'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "calendar" ("id" uuid NOT NULL, "title" character varying(200) NOT NULL, "description" text NOT NULL, "date" date NOT NULL, "start_date" TIME NOT NULL, "end_date" TIME NOT NULL, "created_at" TIMESTAMP NOT NULL DEFAULT now(), "active" boolean NOT NULL, CONSTRAINT "PK_2492fb846a48ea16d53864e3267" PRIMARY KEY ("id"))`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP TABLE "calendar"`);
    }

}
