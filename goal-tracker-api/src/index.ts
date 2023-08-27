import * as express from "express";
import * as http from "http";
import { error } from "console";
import * as cors from "cors";
import mongoose from "mongoose";
import router from "./router/indexRouter";

const port = process.env.PORT || 4010;

const app = express();

app.use(cors());

const server = http.createServer(app);

server.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});

const MONGO_DB_URL =
  "mongodb+srv://sairaj9396:Sairaj9396@freecluster.ox2uddb.mongodb.net/?retryWrites=true&w=majority";

mongoose.Promise = Promise;
mongoose.connect(MONGO_DB_URL);
mongoose.connection.on("error", () => {
  console.error(error);
});

app.use("/", router());
