import { Repository } from "typeorm";
import { Tarea } from "../../domain/entities/tarea";
import { ITareaRepository } from "../../domain/repositories/ITareaRepository";
import { TareaEntity } from "../database/mysql/mappings/tarea.mapping";
import { TypeOrmMySql } from '../database/mysql/type.orm.mysql';
//Implementación del patron repository con el ORM TypeOrm y una base de datos en MySql
export class TareaRepositoryMySql implements ITareaRepository {
  private repository: Repository<Tarea>;
  constructor() {
    TypeOrmMySql.initialize();
    this.repository = TypeOrmMySql.getRepository<Tarea>(TareaEntity);
  }
  async editarTarea(id: string, tarea: Tarea, idUsuario: string): Promise<Tarea> {
    const tareaEditar = await this.repository.createQueryBuilder("tarea").where("tarea.id =:id", { id: id }).andWhere("tarea.idUsuario = :idUsuario", { idUsuario }).getOneOrFail();
    const result = await this.repository.createQueryBuilder().update(tareaEditar)
      .set({
        comentarios: tarea.comentarios, titulo: tarea.titulo, descripcion: tarea.descripcion, estatus: tarea.estatus, fechaEntrega: tarea.fechaEntrega,
        responsable: tarea.responsable, tags: tarea.tags
      }).where("id=:id", { id: id }).execute();
    if (!result.affected || result.affected === 0) throw Error("Ocurrió un error al actualizar la tarea con el id: " + id);
    return await this.repository.createQueryBuilder("tarea").where("tarea.id =:id", { id: id }).getOneOrFail();
  }
  async borrarTarea(id: string, idUsuario: string): Promise<boolean> {
    await this.repository.createQueryBuilder("tarea").where("tarea.id =:id", { id: id }).andWhere("tarea.idUsuario =:idUsuario", { idUsuario }).getOneOrFail();
    const result = await this.repository.createQueryBuilder().delete().where("id = :id", { id: id }).execute();
    if (!result.affected || result.affected === 0) throw Error("Ocurrió un error al actualizar la tarea con el id: " + id);
    return true;
  }
  async getAll(idUsuario: string): Promise<Tarea[]> {
    return await this.repository.createQueryBuilder().where("tarea.idUsuario = :idUsuario", { idUsuario }).getMany();
  }
  async get(id: string, idUsuario: string): Promise<Tarea> {
    const tarea = await this.repository.createQueryBuilder("tarea").where("tarea.id =:id", { id: id }).andWhere("tarea.idUsuario =:idUsuario", { idUsuario }).getOneOrFail();
    return tarea;
  }
  async add(tarea: Tarea): Promise<Tarea> {
    await this.repository.save(tarea);
    return tarea;
  }

}
