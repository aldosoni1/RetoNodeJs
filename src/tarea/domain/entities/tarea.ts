import { EstatusComplecion } from "./estatusComplecion";
//Entidad de negocio
export interface Tarea {
  id: string;
  //Referencia a el usuario que pertenece la tarea
  idUsuario: string;
  titulo: string;
  descripcion: string;
  estatus: EstatusComplecion;
  fechaEntrega: Date;
  comentarios: string | undefined;
  responsable: string | undefined;
  tags: string | undefined;
}
