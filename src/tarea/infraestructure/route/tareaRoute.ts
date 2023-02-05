import { Router } from "express";
import { TareaService } from "../../application/services/tareaService";
import { TareaController } from "../controller/tareaController";
import { TareaRepositoryMySql } from "../repository/tarea.repository.mysql";

const route = Router();

const tareaRepository = new TareaRepositoryMySql();

const tareaService = new TareaService(tareaRepository);
const tareaController = new TareaController(tareaService);

//Mapeo de end points de las funcionales requeridas para el reto
route.post(`/tarea/:idUsuario`, tareaController.registrarTarea);
route.get(`/tarea/:idTarea/:idUsuario`, tareaController.getTareaById);
route.get(`/tarea/:idUsuario`, tareaController.getAll);
route.put(`/tarea/:idTarea/:idUsuario`, tareaController.editarTarea);
route.delete(`/tarea/:idTarea/:idUsuario`, tareaController.borrarTarea);
export default route;
