import { EstatusComplecion } from "../entities/estatusComplecion";
import { Tarea } from "../entities/tarea";
import { v4 as uuid } from "uuid";
//Object Value basado en DDD
export class TareaValue implements Tarea {
  id: string;
  idUsuario: string;
  titulo: string;
  descripcion: string;
  estatus: EstatusComplecion;
  fechaEntrega: Date;
  comentarios: string | undefined;
  responsable: string | undefined;
  tags: string | undefined;
  //Como dicta DDD se ebcapsulan los datos necesarios
  constructor(idUsuario: string, titulo: string, descripcion: string, fechaEntrega: Date, comentarios?: string, responsable?: string, tags?: string) {
    this.id = uuid();
    this.idUsuario = idUsuario;
    this.titulo = titulo;
    this.descripcion = descripcion;
    this.estatus = EstatusComplecion.Progreso;
    this.fechaEntrega = fechaEntrega;
    this.comentarios = comentarios;
    this.responsable = responsable;
    this.tags = tags;
  }

}
