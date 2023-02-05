import { MigrationInterface, QueryRunner } from "typeorm";

export class init1675506293769 implements MigrationInterface {
    name = 'init1675506293769'

    public async up(queryRunner: QueryRunner): Promise<void> {
      await queryRunner.query(`CREATE TABLE \`tarea\` (\`id\` varchar(255) NOT NULL, \`comentarios\` varchar(255) NULL, \`idUsuario\` varchar(255) NOT NULL, \`titulo\` varchar(255) NOT NULL, \`descripcion\` varchar(255) NOT NULL, \`estatus\` enum ('0', '1', '2') NOT NULL DEFAULT '1', \`fechaEntrega\` datetime NOT NULL, \`responsable\` varchar(255) NULL, \`tags\` varchar(255) NULL, PRIMARY KEY (\`id\`)) ENGINE=InnoDB`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP TABLE \`tarea\``);
    }

}
