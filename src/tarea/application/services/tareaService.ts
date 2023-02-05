import { ITareaRepository } from "../../domain/repositories/ITareaRepository";
import { TareaValue } from "../../domain/values/tareaValue";
import { RegistrarTareaInputModel } from "../dtos/inputModels/registrarTareaInputModel";
import { TareaOutputModel } from "../dtos/outputModels/tareaOutputModel";
import { ITareaService } from "./ITareaService";
import { v4 as uuid } from "uuid";
import { EditarTareaInputModel } from "../dtos/inputModels/editarTareaInputModel";

//Implementación de casos de uso
export class TareaService implements ITareaService {
  constructor(private readonly tareaRepository: ITareaRepository) {
  }
  public async borrarTarea(id: string, idUsuario: string): Promise<boolean> {
    return await this.tareaRepository.borrarTarea(id, idUsuario);
  }
  public async editarTarea(id: string, editarTareaInputModel: EditarTareaInputModel, idUsuario: string): Promise<TareaOutputModel> {
    const tareaEditar = new TareaValue(
      "",
      editarTareaInputModel.titulo,
      editarTareaInputModel.descripcion,
      editarTareaInputModel.fechaEntrega,
      editarTareaInputModel.comentarios,
      editarTareaInputModel.responsable,
      editarTareaInputModel.tags);
    const tareaEditada = await this.tareaRepository.editarTarea(id, tareaEditar, idUsuario);
    return new TareaOutputModel(
      tareaEditada.id,
      tareaEditada.idUsuario,
      tareaEditada.titulo,
      tareaEditada.descripcion,
      tareaEditada.estatus,
      tareaEditada.fechaEntrega,
      tareaEditada.comentarios,
      tareaEditada.responsable,
      tareaEditada.tags)
  }
  public async getAll(idUsuario: string): Promise<TareaOutputModel[]> {
    return await (await this.tareaRepository.getAll(idUsuario)).map<TareaOutputModel>(tareaEncontrada => new TareaOutputModel(
      tareaEncontrada.id,
      tareaEncontrada.idUsuario,
      tareaEncontrada.titulo,
      tareaEncontrada.descripcion,
      tareaEncontrada.estatus,
      tareaEncontrada.fechaEntrega,
      tareaEncontrada.comentarios,
      tareaEncontrada.responsable,
      tareaEncontrada.tags));
  }
  public async get(id: string, idUsuario: string): Promise<TareaOutputModel> {
    const tareaEncontrada = await this.tareaRepository.get(id, idUsuario);
    return new TareaOutputModel(
      tareaEncontrada.id,
      tareaEncontrada.idUsuario,
      tareaEncontrada.titulo,
      tareaEncontrada.descripcion,
      tareaEncontrada.estatus,
      tareaEncontrada.fechaEntrega,
      tareaEncontrada.comentarios,
      tareaEncontrada.responsable,
      tareaEncontrada.tags)
  }

  public async registrarTarea(registarTareaInputModel: RegistrarTareaInputModel, idUsuario: string): Promise<TareaOutputModel> {
    return await this.tareaRepository.add(
      new TareaValue(
        idUsuario,
        registarTareaInputModel.titulo,
        registarTareaInputModel.descripcion,
        registarTareaInputModel.fechaEntrega,
        registarTareaInputModel.comentarios,
        registarTareaInputModel.responsable,
        registarTareaInputModel.tags));
  }

}
