import { NextFunction, Request, Response } from 'express';

function errorMiddleware(error: any, request: Request, response: Response, next: NextFunction) {
  const status = error.status || 500;
  const message = error.message || 'Ocurrio un error inesperado';
  response
    .status(status)
    .send({
      status,
      message,
    })
}

export default errorMiddleware
