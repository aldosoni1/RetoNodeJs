import { Tarea } from "../entities/tarea";
//Definición de funcionalidades a ejecutar en base de datos
export interface ITareaRepository {
  getAll(idUsuario: string): Promise<Tarea[]>;
  get(id: string, idUsuario: string): Promise<Tarea>;
  add(tarea: Tarea): Promise<Tarea>;
  editarTarea(id: string, tarea: Tarea, idUsuario: string): Promise<Tarea>;
  borrarTarea(id: string, idUsuario: string): Promise<boolean>;
}
