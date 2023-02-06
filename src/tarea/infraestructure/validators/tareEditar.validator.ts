import { NextFunction, Request, Response } from 'express';
import { check } from 'express-validator';
import validateResult from './validator.helper';

const tareaEditarValidator = [
  check('titulo').exists().not().isEmpty(),
  check('descripcion').exists().not().isEmpty(),
  check('estatus').exists().not().isEmpty(),
  check('fechaEntrega').exists().not().isEmpty().isDate(),
  (req: Request, res: Response, next: NextFunction) => {
    validateResult(req, res, next);
  }
];
export default tareaEditarValidator;
