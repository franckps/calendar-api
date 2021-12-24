import {MigrationInterface, QueryRunner} from "typeorm";

export class AddCalendar1640312485777 implements MigrationInterface {
    name = 'AddCalendar1640312485777'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "calendar" DROP COLUMN "created_at"`);
        await queryRunner.query(`ALTER TABLE "calendar" ADD "created_at" character varying NOT NULL`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "calendar" DROP COLUMN "created_at"`);
        await queryRunner.query(`ALTER TABLE "calendar" ADD "created_at" TIMESTAMP NOT NULL DEFAULT now()`);
    }

}
