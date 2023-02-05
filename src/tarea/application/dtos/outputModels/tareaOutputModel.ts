import { EstatusComplecion } from "../../../domain/entities/estatusComplecion";

export class TareaOutputModel {
  id: string;
  idUsuario: string;
  titulo: string;
  descripcion: string;
  estatus: EstatusComplecion;
  fechaEntrega: Date;
  comentarios: string | undefined;
  responsable: string | undefined;
  tags: string | undefined;

  constructor(
    id: string,
    idUsuario: string,
    titulo: string,
    descripcion: string,
    estatus: EstatusComplecion,
    fechaEntrega: Date,
    comentarios: string | undefined,
    responsable: string | undefined,
    tags: string | undefined
  ) {
    this.id = id
    this.idUsuario = idUsuario
    this.titulo = titulo
    this.descripcion = descripcion
    this.estatus = estatus
    this.fechaEntrega = fechaEntrega
    this.comentarios = comentarios
    this.responsable = responsable
    this.tags = tags
  }
}
