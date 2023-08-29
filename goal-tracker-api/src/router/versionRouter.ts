import * as express from "express";
import { getVersion } from "../controllers/versionController";

export default (routePrefix:String, router: express.Router) => {
  router.get(`${routePrefix}/`, getVersion);
};
