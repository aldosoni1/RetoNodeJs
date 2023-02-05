import { Request, Response } from "express";
import { RegistrarTareaInputModel } from "../../application/dtos/inputModels/registrarTareaInputModel";
import { TareaOutputModel } from "../../application/dtos/outputModels/tareaOutputModel";
import { ITareaService } from "../../application/services/ITareaService";
//Interfaz que expone las funcionalidades del negocio
export class TareaController {
  constructor(private tareaService: ITareaService) {

  }

  /**
 * @swagger
 * components:
 *   schemas:
 *     RegistrarTareaInputModel:
 *       type: object
 *       required:
 *         - titulo
 *         - descripcion
 *         - estatus
 *         - fechaEntrega
 *       properties:
 *         titulo:
 *           type: string
 *           description: Titulo de la tarea
 *         descripcion:
 *           type: string
 *           description: Descripcion de la tarea
 *         estatus:
 *           type: number
 *           description: Estatus complecion
 *           enum: [Completada,Progreso,Cancelada]
 *         fechaEntrega:
 *           type: string
 *           format: date
 *           description: Fecha de entrega de la tarea
 *         comentarios:
 *           type: string
 *           description: Comentarios de la tarea
 *         responsable:
 *           type: string
 *           description: Responsable de la tarea
 *         tags:
 *           type: string
 *           description: Tags de la tarea

 *       example:
 *         titulo: titulo
 *         descripcion: descripcion
 *         estatus: 1
 *         fechaEntrega: 2023-02-05
 *         comentarios: comentarios
 *         responsable: aldo
 *         tags: tags
 */

  /**
* @swagger
* components:
*   schemas:
*     EditarTareaInputModel:
*       type: object
*       required:
*         - titulo
*         - descripcion
*         - estatus
*         - fechaEntrega
*       properties:
*         titulo:
*           type: string
*           description: Titulo de la tarea
*         descripcion:
*           type: string
*           description: Descripcion de la tarea
*         estatus:
*           type: number
*           description: Estatus complecion
*           enum: [Completada,Progreso,Cancelada]
*         fechaEntrega:
*           type: string
*           format: date
*           description: Fecha de entrega de la tarea
*         comentarios:
*           type: string
*           description: Comentarios de la tarea
*         responsable:
*           type: string
*           description: Responsable de la tarea
*         tags:
*           type: string
*           description: Tags de la tarea

*       example:
*         titulo: titulo
*         descripcion: descripcion
*         estatus: 1
*         fechaEntrega: 2023-02-05
*         comentarios: comentarios
*         responsable: aldo
*         tags: tags
*/

  /**
* @swagger
* components:
*   schemas:
*     TareaOutputModel:
*       type: object
*       required:
*         - id
*         - idUsuario
*         - titulo
*         - descripcion
*         - estatus
*         - fechaEntrega
*       properties:
*         id:
*           type: string
*           description: Id de la tarea
*         idUsuario:
*           type: string
*           description: Id del usuario al que pertenece la tarea
*         titulo:
*           type: string
*           description: Titulo de la tarea
*         descripcion:
*           type: string
*           description: Descripcion de la tarea
*         estatus:
*           type: number
*           description: Estatus complecion
*           enum: [Completada,Progreso,Cancelada]
*         fechaEntrega:
*           type: string
*           format: date
*           description: Fecha de entrega de la tarea
*         comentarios:
*           type: string
*           description: Comentarios de la tarea
*         responsable:
*           type: string
*           description: Responsable de la tarea
*         tags:
*           type: string
*           description: Tags de la tarea

*       example:
*         titulo: titulo
*         descripcion: descripcion
*         estatus: 1
*         fechaEntrega: 2023-02-05
*         comentarios: comentarios
*         responsable: aldo
*         tags: tags
*/

  /**
 * @swagger
 * tags:
 *   name: Tareas
 *   description: Funcionalidades de tareas
 * /api/tarea/{idUsuario}:
 *   post:
 *     summary: Crea una nueva tarea
 *     tags: [Tareas]
 *     parameters:
 *        - in: path
 *          name: idUsuario
 *          schema:
 *            type: string
 *          required: true
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/RegistrarTareaInputModel'
 *     responses:
 *       201:
 *         description: Tarea registrada.
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/TareaOutputModel'
 *
 */
  public registrarTarea = async (req: Request, res: Response) => {
    const tarea = await this.tareaService.registrarTarea(req.body, req.params.idUsuario);
    res.status(201).send({ tarea });
  }
  /**
* @swagger
* tags:
*   name: Tareas
*   description: Funcionalidades de tareas
* /api/tarea/{idTarea}/{idUsuario}:
*   get:
*     summary: Devuelve una tarea en base a su id
*     tags: [Tareas]
*     parameters:
*        - in: path
*          name: idTarea
*          schema:
*            type: string
*          required: true
*        - in: path
*          name: idUsuario
*          schema:
*            type: string
*          required: true
*     responses:
*       200:
*         description: Tarea encontrada.
*         content:
*           application/json:
*             schema:
*               $ref: '#/components/schemas/TareaOutputModel'
*
*/
  public getTareaById = async (req: Request, res: Response) => {
    const tarea = await this.tareaService.get(req.params.idTarea, req.params.idUsuario);
    res.status(200).send(tarea);
  }

  /**
* @swagger
* tags:
*   name: Tareas
*   description: Funcionalidades de tareas
* /api/tarea/{idUsuario}:
*   get:
*     summary: Devuelve el listado de tareas
*     tags: [Tareas]
*     parameters:
*        - in: path
*          name: idUsuario
*          schema:
*            type: string
*          required: true
*     responses:
*       200:
*         description: Tareas encontrada.
*         content:
*           application/json:
*             schema:
*               type: array
*               items:
*                 $ref: '#/components/schemas/TareaOutputModel'
*
*/
  public getAll = async (req: Request, res: Response) => {
    const tareas = await this.tareaService.getAll(req.params.idUsuario);
    res.send(tareas);
  }

  /**
 * @swagger
 * tags:
 *   name: Tareas
 *   description: Funcionalidades de tareas
 * /api/tarea/{idTarea}/{idUsuario}:
 *   put:
 *     summary: Edita una tarea
 *     tags: [Tareas]
 *     parameters:
 *        - in: path
 *          name: idTarea
 *          schema:
 *            type: string
 *          required: true
 *        - in: path
 *          name: idUsuario
 *          schema:
 *            type: string
 *          required: true
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/EditarTareaInputModel'
 *     responses:
 *       200:
 *         description: Tarea edidata.
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/TareaOutputModel'
 *
 */
  public editarTarea = async (req: Request, res: Response) => {
    const tarea = await this.tareaService.editarTarea(req.params.idTarea, req.body, req.params.idUsuario);
    res.status(200).send({ tarea });
  }

  /**
  * @swagger
  * tags:
  *   name: Tareas
  *   description: Funcionalidades de tareas
  * /api/tarea/{idTarea}/{idUsuario}:
  *   delete:
  *     summary: Elimina una tarea en base a su id
  *     tags: [Tareas]
  *     parameters:
  *        - in: path
  *          name: idTarea
  *          schema:
  *            type: string
  *          required: true
  *        - in: path
  *          name: idUsuario
  *          schema:
  *            type: string
  *          required: true
  *     responses:
  *       200:
  *         description: Tarea Eliminada.
  *         content:
  *           application/json:
  *             schema:
  *               type: boolean
  *
  */
  public borrarTarea = async (req: Request, res: Response) => {
    const result = await this.tareaService.borrarTarea(req.params.idTarea, req.params.idUsuario);
    res.status(200).send(result);
  }
}
