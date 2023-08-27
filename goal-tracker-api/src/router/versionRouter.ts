import * as express from "express";
import { getVersion } from "../controllers/versionController";

export default (router: express.Router) => {
  router.get("/version", getVersion);
};
