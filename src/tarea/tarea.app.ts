import express from "express";
import cors from "cors";
import "dotenv/config";
import tareaRoute from './infraestructure/route/tareaRoute';
import swaggerUi from "swagger-ui-express";
import swaggerJsDoc from "swagger-jsdoc";
import errorMiddleware from "./error.middleware";
import { v4 as uuid} from 'uuid'



//Configuración general de swagger
const swaggerOptions = {
  definition: {
    openapi: "3.0.0",
    info: {
      title: "Api reto backend",
      version: "1.0.0",
      description:
        "Documentación api reto backend",
      contact: {
        name: "Aldo Ignacio Teoba Sanchez",
        email: "aldotesa96@gmail.com",
      },
    },
    servers: [
      {
        url: "http://localhost:" + process.env.PORT || 3002,
      },
    ],
  },
  apis: ["**/*.ts"],
};
const app = express();
const port = process.env.PORT || 3002;

// middlewares
app.use(express.json());
app.use(cors());
app.use("/api", tareaRoute);
app.use(
  "/api-doc",
  swaggerUi.serve,
  swaggerUi.setup(swaggerJsDoc(swaggerOptions))
);
app.use(errorMiddleware);

app.listen(port, () => {
  console.info(`Documentación disponible en: http://localhost:${process.env.PORT}/api-doc/`);
});
