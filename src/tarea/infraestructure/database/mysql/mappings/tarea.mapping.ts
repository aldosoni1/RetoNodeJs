import { EntitySchema } from "typeorm";
import { EstatusComplecion } from "../../../../domain/entities/estatusComplecion";
import { Tarea } from "../../../../domain/entities/tarea";
//Mapeo de entidades de negocio a base de datos con ORM
export const TareaEntity = new EntitySchema<Tarea>({
  name: "Tarea",
  columns: {
    id: {
      type: String,
      primary: true
    },
    comentarios: {
      type: String,
      nullable: true
    },
    idUsuario: {
      type: String,
      nullable: false
    },
    titulo: {
      type: String,
      nullable: false
    },
    descripcion: {
      type: String,
      nullable: false
    },
    estatus: {
      type: "enum",
      enum: EstatusComplecion,
      default: EstatusComplecion.Progreso
    },
    fechaEntrega: {
      type: "datetime",
      nullable: false
    },
    responsable: {
      type: String,
      nullable: true
    },
    tags: {
      type: String,
      nullable: true
    }
  }
});
