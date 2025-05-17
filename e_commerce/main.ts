import Express from "express";
import Cors from "cors";
import dotenv from "dotenv";
import swaggerUi from 'swagger-ui-express';
import prisma from "./prisma/prisma-client";
import * as swaggerDocument from './documentation/swagger.json';
import Routes from "./routes"
dotenv.config()
const app = Express();
app.use(Express.json());
app.use(Cors());
app.use('/api/v1', Routes);
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));
app.listen(8000, () => {
  prisma.$connect().then(() => {
    console.log("Connected to database");
  }).catch((err => {
  console.log("Connection to database failed", err);
  })
  )
})


