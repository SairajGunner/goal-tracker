import * as express from "express";
import versionRouter from "./versionRouter";
import longTermGoalsRouter from "./longTermGoalsRouter";

const router = express.Router();

export default (): express.Router => {
  versionRouter(router);
  longTermGoalsRouter(router);
  return router;
};
