import * as express from "express";
import versionRouter from "./versionRouter";

const router = express.Router();

export default (): express.Router => {
  versionRouter(router);
  return router;
};
