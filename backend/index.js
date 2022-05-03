import express, { json } from "express";
import knex from "knex";
import cors from "cors";
import { Model } from "objection";
import knexfile from "./knexfile.js";
import config from "./src/config.js";
import userRoutes from "./src/routes/userRoutes.js";
import postRoutes from "./src/routes/postRoutes.js";
import commentRoutes from "./src/routes/commentRoutes.js";

const app = express();
const db = knex(knexfile);
Model.knex(db);

app.use(json());

app.use(
  cors({
    //todo change this
    origin: "*",
  })
);
userRoutes({ app });
postRoutes({ app });
commentRoutes({ app });

app.listen(config.port, () => console.log(`Listening on : ${config.port}`));
