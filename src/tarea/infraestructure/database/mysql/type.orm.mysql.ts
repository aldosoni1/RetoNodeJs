import { DataSource } from "typeorm";
import { TareaEntity } from './mappings/tarea.mapping'
import "dotenv/config";
//Configuración requerida para establecer conexión con MySql con el ORM TypeOrm
export const TypeOrmMySql = new DataSource({
  type: "mysql",
  host: process.env.HOST_MYSQL,
  port: Number(process.env.PUERTO_MYSQL),
  username: process.env.USER_MYSQL,
  password: process.env.PASSWORD_MYSQL,
  database: "tareas",
  synchronize: false,
  logging: true,
  migrationsRun: true,
  entities: [`${__dirname}/mappings/*.mapping.{ts,js}`],
  migrations: [`${__dirname}/migrations/*.{ts,js}`],

});
