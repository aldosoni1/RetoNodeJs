# Proyecto backend de tareas en nodejs
Este proyecto fue desarrollado con el fin de demostrar mis conocimientos en nodejs.

El proyecto esta diseñado con una arquitectura hexagonal siguiendo la guía de diseño de DDD

Tiene como base de datos MySql por lo cual para ejecutarse se tiene que configurar el archivo .env
```ts
PORT=3002
USER_MYSQL=
PASSWORD_MYSQL=
PUERTO_MYSQL=
HOST_MYSQL=

```
El proyecto utiliza el ORM llamado TypeOrm el cual cuenta con algunas limitantes por lo cual es necesario crear la base de datos con el siguiente comando, posteriormente el sistema al ejecutarse ejecuta automaticamente las migraciones pertinentes para crear las entidades necesarias.
``` sql
CREATE DATABASE tareas
```
Para correr el proyecto ejecutar los siguientes comandos
  ``` ts 
  npm i
  npm run dev
  ```

  El proyecto se ejecutara en el puerto 3002 por defecto, a menos que se configure en el archivo .env
  
  Al ejecutar el proyecto puede encontrar la documentación en swagger entrando a la ruta /api-doc/


Me gustaria comentar que por temas de tiempo no se implemento lo siguiente

- Autenticación JWT
- Respuestas genericas en controladores
