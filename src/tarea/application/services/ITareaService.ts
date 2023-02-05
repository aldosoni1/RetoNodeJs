import { EditarTareaInputModel } from "../dtos/inputModels/editarTareaInputModel";
import { RegistrarTareaInputModel } from "../dtos/inputModels/registrarTareaInputModel";
import { TareaOutputModel } from "../dtos/outputModels/tareaOutputModel";
//Definición de los casos de uso
export interface ITareaService {
  registrarTarea(registarTareaInputModel: RegistrarTareaInputModel, idUsuario: string): Promise<TareaOutputModel>;
  getAll(idUsuario: string): Promise<TareaOutputModel[]>;
  get(id: string, idUsuario: string): Promise<TareaOutputModel>;
  editarTarea(id: string, editarTareaInputModel: EditarTareaInputModel, idUsuario: string): Promise<TareaOutputModel>;
  borrarTarea(id: string, idUsuario: string): Promise<boolean>;
}
