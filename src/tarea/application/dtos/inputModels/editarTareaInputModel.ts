import { EstatusComplecion } from "../../../domain/entities/estatusComplecion";


export class EditarTareaInputModel {
  titulo!: string;
  descripcion!: string;
  estatus: EstatusComplecion = EstatusComplecion.Progreso;
  fechaEntrega!: Date;
  comentarios: string | undefined;
  responsable: string | undefined;
  tags: string | undefined;
}
