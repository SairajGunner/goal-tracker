import express from "express";
import * as http from "http";
import { error } from "console";
import cors from "cors";
import mongoose from "mongoose";
import router from "./router/indexRouter";
import dbSettings from "../dbSettings.json";

const port = process.env.PORT || 4010;

const app = express();

app.use(cors());

const server = http.createServer(app);

server.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});

const MONGO_DB_URL = dbSettings.mongo_db_url;

mongoose.Promise = Promise;
mongoose.connect(MONGO_DB_URL, { dbName: "goals" });
mongoose.connection.on("error", () => {
  console.error(error);
});

app.use("/", router());
