import swaggerAutogen from 'swagger-autogen';

const doc = {
  info: {
    version: "1.0.0",
    title: "NE NodeJS Rest API",
    description: "",
  },
  host: "localhost:8000",
  basePath: "/api/v1",
  schemes: ["http"],
  consumes: ["application/json"],
  produces: ["application/json"],
  tags: [
    {
      name: "Auth",
      description: "Authentication endpoints",
    },
    {
      name: "Users",
      description: "Users endpoints",
    },
   
  ],
  securityDefinitions: {
    bearerAuth: {
      type: "apiKey",
      name: "authorization",
      in: "header",
    },
  },
  security: [
    {
      bearerAuth: [],
    },
  ],
  definitions: {},
};

const outputFile = './swagger.json';
const routes = ['./routes/index.ts'];

swaggerAutogen({ openapi: "3.0.0" })(outputFile, routes, doc).then(async () => {
 console.log("Generated SUccessfully")
});